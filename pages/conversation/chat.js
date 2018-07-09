const utils = require('../utils/utils.js');
const { adapterHeight } = utils.getAdapterheight();

const { globalData } = getApp();
const { Service: { Status, Message, File } } = globalData;

const RongEmoji = require('../lib/RongIMEmoji.js');
RongEmoji.init();

const recorderManager = wx.getRecorderManager()

const softKeyboardHeight = 210;

let getToView = (context) => {
  let { messageList } = context.data;
  let index = messageList.length - 1;
  let message = messageList[index] || {};
  return message.uId || '';
};

let setKeyboardPos = (context, keyboardHeight, adapterHeight) => {
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

let showSoftKeyboard = (context, display) => {
  context.setData({
    display: display,
    bottom: softKeyboardHeight,
    isShowKeyboard: false,
    toView: getToView(context)
  });
};
let hideSoftKeyboard = (context) => {
  context.setData({
    display: {
      emoji: 'none',
      more: 'none'
    }
  });
};

let hideKeyboard = (context) => {
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
  return Message.getList(params).then((result) => {
    let messages = result.messageList;
    let hasMore = result.hasMore;

    let { messageList} = context.data;
    messageList = messages.concat(messageList);
    let toView = '';
    if(params.position == 0){
      let index = messageList.length - 1;
      let message = messageList[index] || {};
      toView = message.uId || '';
    }else{
      let message = messageList[0] || {};
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
    context.setData({
      messageList: messageList,
      toView: toView
    });
  });
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
    playingVoice: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    let { title, type, targetId} = query;
    wx.setNavigationBarTitle({
      title
    });
    this.setData({
      adapterHeight: adapterHeight,
      type, 
      targetId
    });
    let keyboardHeight = 0;
    setKeyboardPos(this, keyboardHeight, adapterHeight);

    let position = 0;
    let count = 15;
    getMessageList(this, { type, targetId, position, count});

    Message.watch((message) => {
      let {messageList} = this.data;
      messageList.push(message);
      this.setData({
        messageList,
        toView: message.uId
      });
    });
  },
  showVoice: function(){
    let { adapterHeight } = this.data;
    this.setData({
      isShowKeyboard: false
    });
    hideKeyboard(this);
  },
  showKeyboard: function(){
    this.setData({
      isShowKeyboard: true
    });
    hideKeyboard(this);
  },
  startRecording: function(){
    this.setData({
      isRecording: true
    });
    let record = () => {
      recorderManager.start({
        format: 'mp3'
      });
    };
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success: record
          })
        }else{
          record();
        }
      }
    })

  },
  stopRecording: function(){
    this.setData({
      isRecording: false
    });
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath, duration } = res
      File.upload({
        path: tempFilePath
      }).then(file => {
        console.log(file)
        let content = {
          content: file.downloadUrl,
          duration: Math.ceil(duration / 1000)
        };
        let { type, targetId, messageList } = this.data;
        Message.sendVoice({
          type,
          targetId,
          content
        }).then(message => {
          messageList.push(message);
          this.setData({
            messageList,
            toView: message.uId
          });
        });
      });
    })
    recorderManager.stop();
  },
  showEmojis: function(){
    showSoftKeyboard(this, {
      emoji: 'block',
      more: 'none'
    });
  },
  showMore: function(){
    showSoftKeyboard(this, {
      emoji: 'none',
      more: 'block'
    });
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
  onScroll: function(event){
    //console.log(event);
  },
  hideKeyboard: function () {
    hideKeyboard(this);
  },
  selectEmoji: function (event){
    var content = this.data.content;
    var { emoji } = event.target.dataset;
    content = content + emoji;
    this.setData({
      content: content,
      isShowEmojiSent: true
    });
  },
  sendText: function(){
    let {content, type, targetId, messageList} = this.data;
    this.setData({
      content: '',
      isShowEmojiSent: false
    });
    Message.sendText({
      type, 
      targetId,
      content
    }).then(message => {
      messageList.push(message);
      this.setData({
        messageList,
        toView: message.uId
      });
    });
  },
  getMoreMessages: function(event){
    let {type, targetId, hasMore} = this.data;
    let position = null;
    let count = 6;
    if (hasMore){
      getMessageList(this, { type, targetId, position, count });
    }
  },
  sendImage: function(){
    wx.chooseImage({
      count: 1, 
      sizeType: ['compressed'], 
      sourceType: ['album', 'camera'], 
      success:  (res) => {
        let { tempFilePaths} = res;
        let tempFilePath = tempFilePaths[0];
        wx.getImageInfo({
          src: tempFilePath,
          success:  (res) =>  {
            let extra = utils.compress(res);
            let { type, targetId, messageList } = this.data;

            let name = 'ImageMessage';
            let content = {
              imageUri: tempFilePath,
              extra
            };
            let message = Message.create({
              type,
              targetId,
              name,
              content
            });
            
            messageList.push(message);
            this.setData({
              messageList,
              toView: message.uId
            });
            
            File.upload({
              path: tempFilePath
            }).then(result => {
              let { downloadUrl: imageUri} = result;
              Message.sendImage({
                type, 
                targetId,
                imageUri,
                extra
              }).then(message => {
              });
            });
          }
        })
      }
    })
  },
  onPlayVoice: function(event){
    let voiceComponent = event.detail;
    let {playingVoice} = this.data;
    if (playingVoice){
      let playingId = playingVoice.__wxExparserNodeId__;
      let voiceId = voiceComponent.__wxExparserNodeId__;
      // 两次播放为同个音频，状态保持不变
      if (playingId == voiceId){
          return;
      }
      let { innerAudioContext } = playingVoice.data;
      playingVoice.setData({
        isPlaying: false
      });
      innerAudioContext.stop();
    }
    this.setData({
      playingVoice: voiceComponent
    });
  }
})