// pages/log/index.js
const getLogInfo = getApp().getLogInfo;

Page({
  data: {
    logInfo: ''
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ logInfo: getLogInfo() })
  },
})