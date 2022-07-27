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
    innerAudioContext: null,
    loading: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play: function(){
      let { isPlaying, innerAudioContext } = this.data;
      let { message: { content: { url } }, message } = this.properties;
      if (isPlaying) {
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
      this.triggerEvent('onplaymusic', this)
      innerAudioContext.autoplay = true;
      innerAudioContext.src = url;
      innerAudioContext.onPlay(() => {
        this.setData({
          loading: false
        });
        console.log('音乐开始播放')
      })
      innerAudioContext.onWaiting(() => {
        console.log('waiting');
        this.setData({
          loading: true
        });
      });
      innerAudioContext.onEnded(() => {
        this.setData({
          isPlaying: false,
          loading: false
        });
        this.triggerEvent('onstopmusic', this)
      });
      innerAudioContext.onError((res) => {
        this.setData({
          isPlaying: false
        });
      })
    },
    stop: function(){
      let {  message } = this.properties;
      let { innerAudioContext} = this.data;
      this.triggerEvent('onstopmusic', this)
      if (innerAudioContext){
        innerAudioContext.stop();
        this.setData({
          isPlaying: false
        });
      }
    }
  }
})
