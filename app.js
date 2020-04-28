const Config = require('./config.js');
const Service = require('./pages/services.js')(Config);

App({
  onLaunch: function () {
    console.log('window', window);
  },
  globalData: {
    Service: Service
  },
  onShow: function () {
  },
  onUnload: function () {
  },
  onHide: function () {
  }
})
