// pages/conversation/components/conversation.js
const { globalData } = getApp();
const { Service: { Status, Conversation, User, CONNECTION_STATUS } } = globalData;
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
      Conversation.setStatus(conversation, {
        isTop: topStatus,
        notificationStatus: conversation.notificationStatus
      }).then(() => {
        console.log('setTop succ');
      }).catch(err => {
        console.log('setTop err', err)
      })
    },
    setDisturb() {
      const { data: { conversation } } = this;
      console.log('setdisturb', conversation);
      let notifiStatus = conversation.notificationStatus == 1 ? 2 : 1;
      Conversation.setStatus(conversation, {
        notificationStatus: notifiStatus,
        isTop: conversation.isTop
      }).then(() => {
        console.log('setDisturb succ');
      }).catch(err => {
        console.log('setDisturb err', err)
      })
    }
  }
})
