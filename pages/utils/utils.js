let underscore = require('./underscore-1.8.3.js');
const left_zero_4 = (str) => {
  if (str != null && str != '' && str != 'undefined') {
    if (str.length == 2) {
      return '00' + str;
    }
  }
  return str;
}

const toUnicode = (str) => {
  var value = '';
  for (var i = 0; i < str.length; i++) {
    value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
  }
  return value;
}

let utils = {
  
  tplEngine: (temp, data, regexp) => {
    if (!(Object.prototype.toString.call(data) === "[object Array]")) data = [data];
    var ret = [];
    for (var i = 0, j = data.length; i < j; i++) {
      ret.push(replaceAction(data[i]));
    }
    return ret.join("");

    function replaceAction(object) {
      return temp.replace(regexp || (/\\?\{([^}]+)\}/g), function (match, name) {
        if (match.charAt(0) == '\\') return match.slice(1);
        return (object[name] != undefined) ? object[name] : '{' + name + '}';
      });
    }
  },
  deepCopy: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },
  deepExtend: (obj1, obj2) => {
    obj1 = utils.deepCopy(obj1);
    obj2 = utils.deepCopy(obj2);
    return underscore.extend(obj1, obj2);
  },
  rename: (obj, newNames) => {
    return underscore.reduce(newNames, function (memo, val, index) {
      memo[val] = obj[index];
      return memo;
    }, underscore.omit(obj, underscore.keys(newNames)));
  },
  dateFormat: (date, fmt) => {
    var o = {
      'M+': date.getMonth() + 1, //月份 
      'd+': date.getDate(), //日 
      'h+': date.getHours(), //小时 
      'm+': date.getMinutes(), //分 
      's+': date.getSeconds(), //秒 
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度 
      'S': date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
    return fmt;
  },
  formatMessage: (message) => {
    let { messageDirection: direction, sentTime, messageUId: uId, messageType: name } = message;
    direction = direction == 1 ? 'sender' : 'receiver';
    underscore.extend(message, { direction, sentTime, uId, name });
  },
  getAdapterheight: () => {
    let adapterHeight = 0;

    let { system, model } = wx.getSystemInfoSync();
    let isIOS = () => {
      return (system.indexOf('iOS') != -1);
    };
    let isIPhoneX = () => {
      return (isIOS() && model.indexOf('X') != -1);
    };

    if (isIPhoneX()) {
      adapterHeight = 35;
    }
    return {
      adapterHeight
    };
  },
  sliceArray: (arrs, options) => {
    let result = [];
    let { size } = options;
    let index = 0;
    let len = arrs.length;
    let group = Math.ceil(len / size);
    for (let i = 0; i < group; i++) {
      result.push(arrs.splice(0, size));
    }
    return result;
  },
  compress: function ({ width, height }) {
    let { screenWidth } = wx.getSystemInfoSync();
    let contentWidth = screenWidth * 0.65;
    if (width > contentWidth) {
      height = height * (contentWidth / width);
      width = contentWidth;
    }
    return {
      width,
      height
    }
  },
  getTime: function (time) {
    var today = new Date(utils.dateFormat(new Date(), 'yyyy/MM/dd'));
    var thisTime = today.getTime();
    if (thisTime - time < 0) {
      return utils.dateFormat(new Date(time), 'hh:mm');
    } else if (thisTime - time < 24 * 60 * 60 * 1000) {
      return '昨天 ' + utils.dateFormat(new Date(time), 'hh:mm');
    } else if (thisTime - time < 6 * 24 * 60 * 60 * 1000) {
      var week = new Date(time).getDay();
      switch (week) {
        case 0:
          week = '星期日';
          break;
        case 1:
          week = '星期一';
          break;
        case 2:
          week = '星期二';
          break;
        case 3:
          week = '星期三';
          break;
        case 4:
          week = '星期四';
          break;
        case 5:
          week = '星期五';
          break;
        case 6:
          week = '星期六';
          break;
      }
      return week + ' ' + utils.dateFormat(new Date(time), 'hh:mm');
    } else {
      return utils.dateFormat(new Date(time), 'yy/MM/dd hh:mm');
    }
  },
  toUnicode
};

underscore.extend(utils, underscore);
module.exports = utils;