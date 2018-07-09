// pages/conversation/components/message/voice.js
let innerAudioContext = null;
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
    isPlaying: false,
    innerAudioContext: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab: function(event){
      let { isPlaying, innerAudioContext} = this.data;
      let { message:{content:{content}} } = this.properties;
      if(isPlaying){
        innerAudioContext.stop();
        this.setData({
          isPlaying: false
        });
        return;
      }
      innerAudioContext = wx.createInnerAudioContext()
      this.setData({
        isPlaying: true,
        innerAudioContext
      });
      this.triggerEvent('onplay', this)
      innerAudioContext.autoplay = true;
      innerAudioContext.src = content;
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
      innerAudioContext.onEnded(() => {
        this.setData({
          isPlaying: false
        });
      });
      innerAudioContext.onError((res) => {
        this.setData({
          isPlaying: false
        });
      })
    }
  }
})
