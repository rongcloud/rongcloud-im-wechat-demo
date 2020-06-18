// pages/conversation/components/message/file.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    downloadFile: function() {
      const { message: { content: { fileUrl, name }}} = this.data;
      console.log(name+'下载地址为：'+ fileUrl)
     
    }
  }
})
