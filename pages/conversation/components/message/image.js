// pages/conversation/components/message/image.js
let { screenWidth } = wx.getSystemInfoSync();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    width: screenWidth/2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPreviewImage: function(){
      let { message: { content: { imageUri } } } = this.properties;
      this.triggerEvent('onpreviewimage', imageUri);
    }
  }
})
