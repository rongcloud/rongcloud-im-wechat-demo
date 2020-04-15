const utils = require('../utils/utils');

const {globalData} = getApp();
const {Service: {Status, Conversation}} = globalData;

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
   if (status == 3) {
    //  wx.getUserInfo({
    //    success: (user) => {
    //      Status.connect(user.userInfo);
    //    }
    //  });
   }
   if (status == 6) {
     wx.showModal({
      title: '提示',
      content: '当前用户已在其他端登录'
     })
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
        // wx.showToast({
        //   title: error.msg,
        //   icon: 'none',
        //   duration: 3000
        // })
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
    
  }
})