// pages/conversation/components/conversation.js
const { globalData } = getApp();
const { Service: { Status, Conversation, User } } = globalData;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    conversation: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    setTop(){
      const { data: { conversation } } = this;
      console.log('settop', conversation);
      let topStatus = conversation.isTop ? false : true;
      Conversation.setConversationToTop(conversation, topStatus ).then(() => {
        console.log('setTop succ');
      }).catch(err => {
        console.log('setTop err', err);
        var msg = topStatus ? '设置置顶失败' :'取消置顶失败'
        wx.showToast({
          title: msg,
          icon: 'error',
          duration: 1000
        });
      })
    },
    setDisturb() {
      const { data: { conversation } } = this;
      console.log('setdisturb', conversation);
      let notifiStatus = conversation.notificationStatus == 1 ? 2 : 1;
      Conversation.setConversationNotificationStatus(conversation, notifiStatus).then(() => {
        console.log('setDisturb succ');
      }).catch(err => {
        console.log('setDisturb err', err);
        let msg = conversation.notificationStatus == 1 ? '开启免打扰失败' : '关闭免打扰失败';
        wx.showToast({
          title: msg,
          icon: 'error',
          duration: 1000
        });
      })
    }
  }
})
