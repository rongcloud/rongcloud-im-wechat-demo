const utils = require('../utils/utils');
const ChatroomId = 'OIBbeKlkx';
const {globalData} = getApp();
const { Service: { Status, Conversation, User, CONNECTION_STATUS}} = globalData;

const requestUserAuth = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: function (res) {
        resolve(!!res.authSetting['scope.userInfo'])
      },
      fail: function (error) {
        console.log(error);
        reject(error)
      }
    })
  });
};

const watchConversation = (context) => {
  Conversation.watch((conversationList) => {
    context.setData({
      conversationList
    });
  });
};

const watchStatus = () => {
 Status.watch((status) => {
   switch(status) {
     case CONNECTION_STATUS.CONNECTED:
       wx.hideLoading();
       wx.showToast({
         title: '链接成功',
         icon: 'success',
         duration: 1000
       });
       break;
     case CONNECTION_STATUS.NETWORK_UNAVAILABLE:
       wx.showLoading({
         title: '重连中 ...',
       });
       break;
     case CONNECTION_STATUS.KICKED_OFFLINE_BY_OTHER_CLIENT:
       wx.showModal({
         title: '提示',
         content: '当前用户已在其他端登录'
       });
       break;
   }
 })
}

const connect = (context) => {
  watchConversation(context);
  watchStatus();
  wx.getUserInfo({
    success: (user) => {
      Status.connect(user.userInfo).then((user) => {
        console.log('connect successfully', user);
        return Conversation.getList();
      }).then((list) => {
        context.setData({
          conversationList: list
        });
      }).catch((error) => {
        wx.showToast({
          title: error.msg,
          icon: 'none',
          duration: 3000
        })
      })
    },
    fail: (error) => {
      console.log(error);
      wx.showToast({
        title: '换个网络试试，只能帮你到这了～',
        icon: 'none',
        duration: 3000
      })
    }
  })
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserAuth: true,
    conversationList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    requestUserAuth().then((hasUserAuth) => {
      this.setData({
        hasUserAuth
      });
      if (hasUserAuth){
        connect(this);
      }
    });
  },
  onAuthCompleted: function(user){
    requestUserAuth().then((hasUserAuth) => {
      this.setData({
        hasUserAuth
      });
      if (hasUserAuth) {
        connect(this);
      }
    });
  },
  gotoChat: function(event){
    let { currentTarget: { dataset: { item } } } = event;
    let { type, targetId, target } = item;
    
    let isSame = (conversation, another) => {
      let isSaveType = (conversation.type == another.type);
      let isSaveTarget = (conversation.targetId == another.targetId);
      return (isSaveType && isSaveTarget);
    };

    let url = './chat?type={type}&targetId={targetId}&title={title}';
    url = utils.tplEngine(url, {
      type,
      targetId,
      title: target.name
    });
    wx.navigateTo({
      url: url,
    });

    let { conversationList} = this.data;
    utils.map(conversationList, (conversation) => {
      if (isSame(conversation, item)){
        conversation.unReadCount = 0;
      }
      return conversation
    });
    Conversation.clearUnreadCount(item);

    this.setData({
      conversationList
    });
    
  },
  showConversationHandles: function (event) {
    let { currentTarget: { dataset: { item } } } = event;
    let { conversationType: type, targetId } = item;
    let handlers = [
      { name: '加入聊天室: ' + ChatroomId, event: this.joinChatroom },
      // { name: '清除所有未读数', event: Conversation.clearTotalUnreadCount },
      // { name: '清空缓存', event: this.clearLocal },
      // { name: '删除会话', event: Conversation.remove }
    ];
    let handlerNames = handlers.map((handle) => {
      return handle.name;
    });
    let showToast = (title) => {
      wx.showToast({
        title: title,
        duration: 1000
      });
    };
    wx.showActionSheet({
      itemList: handlerNames,
      success: function (res) {
        let { event, name } = handlers[res.tapIndex];
        event(type, targetId).then(() => {
          showToast(name + '成功');
        }).catch((error) => {
          showToast(name + '失败' + error);
        });
      }
    });
  },
  joinChatroom: function () {
    return User.joinChatroom(ChatroomId).then(() => {
      let targetId = ChatroomId;
      let type = 4;
      let url = './chat?type={type}&targetId={targetId}&title={title}';
      url = utils.tplEngine(url, {
        type,
        targetId,
        title: `聊天室 (${targetId})`
      });
      return wx.navigateTo({
        url: url,
      });
    });
  }
})