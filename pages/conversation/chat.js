const utils = require('../utils/utils.js');
const { adapterHeight } = utils.getAdapterheight();

const { globalData } = getApp();
const { Service: { Status, Message, File, Conversation } } = globalData;

const RongEmoji = require('../lib/RongIMEmoji-2.2.6.js');
const getThumbnail = require('../lib/getThumbnail.js');

RongEmoji.init();

const softKeyboardHeight = 210;

const getToView = (context) => {
  let { messageList } = context.data;
  let index = messageList.length - 1;
  let message = messageList[index] || {};
  return message.uId || '';
};

const setKeyboardPos = (context, keyboardHeight, adapterHeight) => {
  keyboardHeight = keyboardHeight || 0;
  let data;
  let isScroll = (keyboardHeight > 0);
  if (isScroll){
    data = {
      bottom: adapterHeight + keyboardHeight,
      isShowEmojiSent: false,
      toView: getToView(context)
    };
  }else{
    data = {
      bottom: adapterHeight + keyboardHeight,
      isShowEmojiSent: false
    };
  }
  context.setData(data);
};

const showSoftKeyboard = (context, display) => {
  context.setData({
    display: display,
    bottom: softKeyboardHeight,
    isShowKeyboard: false,
    toView: getToView(context)
  });
};
const hideSoftKeyboard = (context) => {
  context.setData({
    display: {
      emoji: 'none',
      more: 'none'
    }
  });
};

const hideKeyboard = (context) => {
  let keyboardHeight = 0;
  let { adapterHeight } = context.data;
  setKeyboardPos(context, keyboardHeight, adapterHeight);
  hideSoftKeyboard(context);
};

const formatEmojis = () => {
  let list = RongEmoji.list;
  return utils.sliceArray(list, {size: 24});
};

const getMessageList = (context, params) => {
  let {position} = params;
  let event = params.conversationType == 4 ? Message.getChatRoomMessageList : Message.getList;
  return event(params).then((result) => {
    let messages = result.messageList;
    let hasMore = result.hasMore;

    let { messageList, playingVoice, playingMusicComponent} = context.data;
    messageList = messages.concat(messageList);
    let toView = '';
    if(params.position == 0){
      let index = messageList.length - 1;
      let message = messageList[index] || {};
      toView = message.uId || '';
    }
    let isFirst = (position == 0);
    if (!hasMore && !isFirst){
      // 灰条提示
      toView = 'message-notify-without';
      context.setData({
        hasMore: hasMore
      });
    }

    if(isFirst){
      context.setData({
        messageList: messageList,
        isAllowScroll: true,
        toView: toView
      });
    }else{
      context.setData({
        messageList: messageList,
        isAllowScroll: true
      });
    } 
    
  });
};

const updatePlayStatus = (context, { newMusicComponent, isPlaying}, callback) => {
  let { data: { messageList, playingMusicComponent} } = context;
  callback = callback || utils.noop;
  messageList.map((message) => {
    callback(message);
    return message;
  });
  if (playingMusicComponent) {
    playingMusicComponent.setData({
      isPlaying
    });
  }
  if (newMusicComponent){
    context.setData({
      playingMusicComponent: newMusicComponent,
      messageList
    });
  }else{
    context.setData({
      messageList
    });
  }
  
};

const stopPlayMusic = (context) => {
  let newMusicComponent = null, isPlaying = false;
  updatePlayStatus(context, { newMusicComponent, isPlaying }, (message) => {
    utils.extend(message, { isPlaying });
  });
};

const getImageUrls = (context) => {
  let {messageList} = context.data;
  return messageList.filter(message => {
    return message.name == 'ImageMessage';
  }).map(message => {
    return message.content.imageUri;
  });
};

const onLoad = (context, query) => {
  let { title, conversationType, targetId } = query;
  if(typeof conversationType === 'string')  conversationType = Number(conversationType)
  wx.setNavigationBarTitle({
    title
  });
  context.setData({
    adapterHeight: adapterHeight,
    conversationType,
    targetId
  });
  let keyboardHeight = 0;
  setKeyboardPos(context, keyboardHeight, adapterHeight);

  let position = 0;
  let count = 15;
  getMessageList(context, { conversationType, targetId, position, count });

  Message.watch((message) => {
    if (message.isOffLineMessage) {
      return;
    }
    if (message.conversationType == conversationType && message.targetId === targetId) {
      let { messageList } = context.data;
      messageList.push(message);
      context.setData({
        messageList,
        toView: message.messageUId
      });
       Conversation.clearUnreadCount({
        conversationType, targetId
      }).then (conversationList=>{
        Conversation.watcher.notify(conversationList)
      })
    }
  });
};

const onUnload = (context) => {
  let { playingVoice, playingMusicComponent } = context.data;
  if (playingVoice && playingMusicComponent) {
    playingMusicComponent.stop();
  }
  if (playingMusicComponent) {
    playingMusicComponent.stop();
  }
  Message.unwatch();
};

const showVoice = (context) => {
  let { adapterHeight } = context.data;
  context.setData({
    isShowKeyboard: false
  });
  hideKeyboard(context);
};

const showKeyboard = (context) => {
  context.setData({
    isShowKeyboard: true
  });
  hideKeyboard(context);
};

const recorderManager = wx.getRecorderManager()

const startRecording = (context) => {
  context.setData({
    isRecording: true
  });
  let record = () => {
    recorderManager.start({
      format: 'aac'
    });
  };
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.record']) {
        wx.authorize({
          scope: 'scope.record',
          success: record
        })
      } else {
        record();
      }
    }
  })
};

const stopRecording = (context) => {
  context.setData({
    isRecording: false
  });
  recorderManager.onStop((res) => {
    console.log('recorder stop', res)
    const { tempFilePath, duration } = res;
    console.log(tempFilePath, duration);
    File.upload({
      path: tempFilePath,
      name: 'voice.aac'
    }, 2).then(file => {
      console.log(file)
      let content = {
        remoteUrl: file.data.downloadUrl,
        duration: Math.ceil(duration / 1000)
      };
      let { conversationType, targetId, messageList } = context.data;
      Message.sendVoice({
        conversationType,
        targetId,
        content
      }).then(message => {
        messageList.push(message);
        context.setData({
          messageList,
          toView: message.messageUId
        });
      });
    });
  })
  recorderManager.stop();
};

const showEmojis = (context) => {
  showSoftKeyboard(context, {
    emoji: 'block',
    more: 'none'
  });
};

const showMore = (context) => {
  showSoftKeyboard(context, {
    emoji: 'none',
    more: 'block'
  });
};

const selectEmoji = (context, event) => {
  var content = context.data.content;
  var { emoji } = event.target.dataset;
  content = content + emoji;
  context.setData({
    content: content,
    isShowEmojiSent: true
  });
};

const sendText = (context) => {
  let { content, conversationType, targetId, messageList } = context.data;
  context.setData({
    content: '',
    isShowEmojiSent: false
  });
  if (content.length == 0) {
    return;
  }
  Message.sendText({
    conversationType,
    targetId,
    content
  }).then(message => {
    messageList.push(message);
    context.setData({
      messageList,
      toView: message.messageUId
    });
  });
};

const getMoreMessages = (context) => {
  let { conversationType, targetId, hasMore, messageList } = context.data;
  messageList = messageList || [];
  let firstMessage = messageList[0] || {};
  let position = firstMessage.sentTime || 0;
  let count = 15;
  if (hasMore) {
    context.setData({
      isAllowScroll: false
    });
    getMessageList(context, { conversationType, targetId, position, count });
  }
};

const sendImage =  (context) => {
  wx.chooseImage({
    count: 1,
    sizeType: ['original'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      let { tempFilePaths, tempFiles } = res;
      let tempFilePath = tempFilePaths[0];
      console.log('tempFilePath',tempFilePath)
      wx.getImageInfo({
        src: tempFilePath,
        success: (res) => {
          let extra = utils.compress(res);
          let { conversationType, targetId, messageList } = context.data;

          let name = 'RC:ImgMsg';
          let content = {
            imageUri: tempFilePath,
            extra
          };
          let message = Message.create({
            conversationType,
            targetId,
            name,
            content
          });

          messageList.push(message);
          context.setData({
            messageList,
            toView: message.messageUId
          });
          File.upload({
            path: tempFilePath,
            name: 'image.png'
          }, 1, tempFiles[0]).then(result => {
            let { downloadUrl: imageUri } = result.data;
            console.log('image url:', imageUri)
            getThumbnail(tempFilePath, extra, {}, (imgBase64)=>{
              Message.sendImage({
                conversationType,
                targetId,
                imageUri,
                extra,
                content: imgBase64
              }).then(message => {
              });
            }, (error) =>{
              console.error(error)
            })
          });
        }
      })
    }
  })
};

const sendFile = (context) => {
  let { conversationType, targetId, messageList } = context.data;

  wx.chooseMessageFile({
    count: 1,
    type: 'file',
    success: function(res) {
      let { tempFiles } = res;
      let { name, size, type: fileType} = tempFiles[0];
      File.upload(tempFiles[0], 4).then(result => {
        const { downloadUrl: fileUrl } = result.data;
        console.log(fileUrl)
        let content = { 
          name,
          size,
          type: fileType,
          fileUrl
        };
        let message = Message.create({
          conversationType,
          targetId,
          name: 'RC:FileMsg',
          content
        });
        messageList.push(message);
        context.setData({
          messageList,
          toView: message.messageUId
        });
        Message.sendFile({
          conversationType,
          targetId,
          name,
          size,
          fileUrl
        })
      });
    }
  })
}

const sendMusic = (context) => {
  let { content, type, targetId, messageList } = context.data;
  Message.sendMusic({
    type,
    targetId
  }).then(message => {
    messageList.push(message);
    context.setData({
      messageList,
      toView: message.uId
    });
  });
};

const playVoice = (context, event) => {
  let voiceComponent = event.detail;
  let { playingVoice } = context.data;
  if (playingVoice) {
    let playingId = playingVoice.__wxExparserNodeId__;
    let voiceId = voiceComponent.__wxExparserNodeId__;
    // 两次播放为同个音频，状态保持不变
    if (playingId == voiceId) {
      return;
    }
    let { innerAudioContext } = playingVoice.data;
    playingVoice.setData({
      isPlaying: false
    });
    innerAudioContext.stop();
  }
  context.setData({
    playingVoice: voiceComponent
  });
};

const playMusic = (context, event) => {
  let newMusicComponent = event.detail;
  let { playingMusicComponent, messageList } = context.data;
  let { properties: { message: { messageUId: newPlayId } } } = newMusicComponent
  let playingId = '';

  // 连续点击播放不同音乐
  if (playingMusicComponent) {
    let { properties: { message } } = playingMusicComponent;
    playingId = message.messageUId;
    //先停止上一个，再播放
    let isDiffMusic = (playingId != newPlayId);
    if (isDiffMusic) {
      let { innerAudioContext } = playingMusicComponent.data;
      playingMusicComponent.setData({
        isPlaying: false
      });
      innerAudioContext.stop();
    }
  }
  let isPlaying = false;
  updatePlayStatus(context, { newMusicComponent, isPlaying }, (message) => {
    let { messageUId } = message;
    // 默认为未播放状态
    isPlaying = false;
    if (messageUId == newPlayId) {
      isPlaying = true;
    }
    utils.extend(message, { isPlaying });
  });
};

const previewImage = (context, event) => {
  let currentImageUrl = event.detail;
  let urls = getImageUrls(context);
  if (utils.isEmpty(urls)) {
    urls.push(currentImageUrl);
  }
  wx.previewImage({
    current: currentImageUrl,
    urls: urls
  })
};

const stopMusic = (context, event) => {
  let musicComponent = event.detail;
  let { properties: { message: { messageUId } } } = musicComponent;

  let { messageList, playingMusicComponent } = context.data;
  if (playingMusicComponent) {
    let { data: { innerAudioContext } } = playingMusicComponent;
    innerAudioContext.stop();
  }
  musicComponent.setData({
    isPlaying: false
  });
  stopPlayMusic(context);
};

Page({
  data: {
    content: '',
    messageList: [],
    bottom: 0,
    adapterHeight: 0,
    display: {
      emoji: 'none',
      more: 'none'
    },
    emojis: formatEmojis(),
    isShowEmojiSent: false,
    isRecording: false,
    isShowKeyboard: false,
    hasMore: true,
    toView: '',
    playingVoice: null,
    playingMusicComponent: null,
    isAllowScroll: true,
    scrollTop: 0
  },
  hideKeyboard: function () {
    hideKeyboard(this);
  },
  selectEmoji: function (event) {
    selectEmoji(this, event);
  },
  sendText: function () {
    sendText(this);
  },
  getMoreMessages: function (event) {
    getMoreMessages(this);
  },
  sendImage: function () {
    sendImage(this);
  },
  sendFile: function (){
    sendFile(this);
  },
  sendMusic: function () {
    sendMusic(this);
  },
  showVoice: function(){
    showVoice(this);
  },
  showKeyboard: function(){
    showKeyboard(this);
  },
  startRecording: function(){
    startRecording(this);
  },
  stopRecording: function(){
    stopRecording(this);
  },
  showEmojis: function(){
    showEmojis(this);
  },
  showMore: function(){
    showMore(this);
  },
  // 以下是事件
  onLoad: function (query) {
    onLoad(this, query)
  },
  onUnload: function () {
    onUnload(this);
  },
  onInput: function(event){
    this.setData({
      content: event.detail.value
    });
  },
  onFocus: function(event){
    let { height} = event.detail;
    let adapterHeight = 0;
    setKeyboardPos(this, height, adapterHeight);
    hideSoftKeyboard(this);
  },
  onPlayVoice: function(event){
    playVoice(this, event);
  },
  onPlayMusic: function (event){
    playMusic(this, event);
  },
  onMusicStop: function(event){
    stopMusic(this, event);
  },
  onPreviewImage: function(event){
    previewImage(this, event);
  },
  onHide: function(){
    hideKeyboard(this);
    stopPlayMusic(this);
  }
})