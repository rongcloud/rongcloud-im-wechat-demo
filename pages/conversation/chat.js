const utils = require('../utils/utils.js');
const { adapterHeight } = utils.getAdapterheight();

const { globalData } = getApp();
const { Service: { Status, Message, File, Conversation } } = globalData;

const RongEmoji = require('../lib/RongIMEmoji-2.2.6.js');
RongEmoji.init();

const softKeyboardHeight = 210;

const getToView = (context) => {
  let { messageList } = context.data;
  let index = messageList.length - 1;
  let message = messageList[index] || {};
  return message.uId || '';
};

const imgBase64 = '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';
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
            Message.sendImage({
              conversationType,
              targetId,
              imageUri,
              extra,
              content: imgBase64
            }).then(message => {
            });
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