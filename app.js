const config = require('./config.js');

const logArr = [];

App({
  onLaunch: function () {
    config.logStdout = (level, content) => {
      logArr.unshift(content);
      logArr.splice(500)
    };
    config.logLevel = 0;
    this.globalData.Service = require('./pages/services.js')(config);
  },
  globalData: {
    Service: null,
    logInfo: '',
  },
  getLogInfo () {
    return logArr.reverse().join('\n')
  },
  onShow: function () {
  },
  onUnload: function () {
  },
  onHide: function () {
  }
})
