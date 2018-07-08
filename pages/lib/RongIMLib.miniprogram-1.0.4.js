'use strict';

module.exports = (function (wx) {

  var Modules = {
    DeleteMsgInput: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      };

      this.setConversationId = function (b) {
        a.conversationId = b;
      };
      this.setMsgs = function (b) {
        a.msgs = b;
      };
      this.toArrayBuffer = function () {
        return a;
      }
    },
    DeleteMsg: function () {
      var a = {};
      this.setMsgId = function (b) {
        a.msgId = b;
      };
      this.setMsgDataTime = function (b) {
        a.msgDataTime = b;
      };
      this.setDirect = function (b) {
        a.direct = b;
      };
      this.toArrayBuffer = function () {
        return a;
      }
    },
    DeleteMsgOutput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.toArrayBuffer = function () {
        return a;
      }
    },
    SearchMpInput: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      };
      this.setId = function (b) {
        a.id = b;
      };
      this.toArrayBuffer = function () {
        return a;
      }
    },
    SearchMpOutput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.setInfo = function (b) {
        a.info = b;
      };
      this.toArrayBuffer = function () {
        return a;
      }
    },
    MpInfo: function () {
      var a = {};
      this.setMpid = function (b) {
        a.mpid = b;
      };
      this.setName = function (b) {
        a.name = b;
      };
      this.setType = function (b) {
        a.type = b;
      };
      this.setTime = function (b) {
        a.time = b;
      };
      this.setPortraitUri = function (b) {
        a.portraitUrl = b;
      };
      this.setExtra = function (b) {
        a.extra = b;
      };
      this.toArrayBuffer = function () {
        return a;
      }
    },
    PullMpInput: function () {
      var a = {};
      this.setMpid = function (b) {
        a.mpid = b;
      };
      this.setTime = function (b) {
        a.time = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    PullMpOutput: function () {
      var a = {};
      this.setStatus = function (b) {
        a.status = b;
      }
      this.setInfo = function (b) {
        a.info = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    MPFollowInput: function () {
      var a = {};
      this.setId = function (b) {
        a.id = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    MPFollowOutput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.setInfo = function (b) {
        a.info = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    NotifyMsg: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      };
      this.setTime = function (b) {
        a.time = b;
      };
      this.setChrmId = function (b) {
        a.chrmId = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    SyncRequestMsg: function () {
      var a = {};
      this.setSyncTime = function (b) {
        a.syncTime = b || 0;
      };
      this.setIspolling = function (b) {
        a.ispolling = !!b;
      };
      this.setIsweb = function (b) {
        a.isweb = !!b;
      };
      this.setIsPullSend = function (b) {
        a.isPullSend = !!b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    UpStreamMessage: function () {
      var a = {};
      this.setSessionId = function (b) {
        a.sessionId = b
      };
      this.setClassname = function (b) {
        a.classname = b
      };
      this.setContent = function (b) {
        if (b) a.content = b;
      };
      this.setPushText = function (b) {
        a.pushText = b
      };
      this.setUserId = function (b) {
        a.userId = b;
      };
      this.setAppData = function (b) {
        a.appData = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    DownStreamMessages: function () {
      var a = {};
      this.setList = function (b) {
        a.list = b
      };
      this.setSyncTime = function (b) {
        a.syncTime = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    DownStreamMessage: function () {
      var a = {};
      this.setFromUserId = function (b) {
        a.fromUserId = b
      };
      this.setType = function (b) {
        a.type = b
      };
      this.setGroupId = function (b) {
        a.groupId = b
      };
      this.setClassname = function (b) {
        a.classname = b
      };
      this.setContent = function (b) {
        if (b)
          a.content = b
      };
      this.setDataTime = function (b) {
        a.dataTime = b;
      };
      this.setStatus = function (b) {
        a.status = b;
      };
      this.setMsgId = function (b) {
        a.msgId = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    CreateDiscussionInput: function () {
      var a = {};
      this.setName = function (b) {
        a.name = b
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    CreateDiscussionOutput: function () {
      var a = {};
      this.setId = function (b) {
        a.id = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    ChannelInvitationInput: function () {
      var a = {};
      this.setUsers = function (b) {
        a.users = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    LeaveChannelInput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    QueryChatroomInfoInput: function () {
      var a = {};
      this.setCount = function (b) {
        a.count = b;
      };
      this.setOrder = function (b) {
        a.order = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    QueryChatroomInfoOutput: function () {
      var a = {};
      this.setUserTotalNums = function (b) {
        a.userTotalNums = b;
      };
      this.setUserInfos = function (b) {
        a.userInfos = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    ChannelEvictionInput: function () {
      var a = {};
      this.setUser = function (b) {
        a.user = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    RenameChannelInput: function () {
      var a = {};
      this.setName = function (b) {
        a.name = b
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    ChannelInfoInput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    ChannelInfoOutput: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b
      };
      this.setChannelId = function (b) {
        a.channelId = b
      };
      this.setChannelName = function (b) {
        a.channelName = b
      };
      this.setAdminUserId = function (b) {
        a.adminUserId = b
      };
      this.setFirstTenUserIds = function (b) {
        a.firstTenUserIds = b
      };
      this.setOpenStatus = function (b) {
        a.openStatus = b
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    ChannelInfosInput: function () {
      var a = {};
      this.setPage = function (b) {
        a.page = b
      };
      this.setNumber = function (b) {
        a.number = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    ChannelInfosOutput: function () {
      var a = {};
      this.setChannels = function (b) {
        a.channels = b
      };
      this.setTotal = function (b) {
        a.total = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    MemberInfo: function () {
      var a = {};
      this.setUserId = function (b) {
        a.userId = b
      };
      this.setUserName = function (b) {
        a.userName = b
      };
      this.setUserPortrait = function (b) {
        a.userPortrait = b
      };
      this.setExtension = function (b) {
        a.extension = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupMembersInput: function () {
      var a = {};
      this.setPage = function (b) {
        a.page = b
      };
      this.setNumber = function (b) {
        a.number = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupMembersOutput: function () {
      var a = {};
      this.setMembers = function (b) {
        a.members = b
      };
      this.setTotal = function (b) {
        a.total = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GetUserInfoInput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GetUserInfoOutput: function () {
      var a = {};
      this.setUserId = function (b) {
        a.userId = b
      };
      this.setUserName = function (b) {
        a.userName = b
      };
      this.setUserPortrait = function (b) {
        a.userPortrait = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GetSessionIdInput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GetSessionIdOutput: function () {
      var a = {};
      this.setSessionId = function (b) {
        a.sessionId = b
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GetQNupTokenInput: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      }
      this.toArrayBuffer = function () {
        return a
      }
    },
    GetQNupTokenOutput: function () {
      var a = {};
      this.setDeadline = function (b) {
        a.deadline = b
      };
      this.setToken = function (b) {
        a.token = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    GetQNdownloadUrlInput: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      };
      this.setKey = function (b) {
        a.key = b;
      };
      this.setFileName = function (b) {
        a.fileName = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    GetQNdownloadUrlOutput: function () {
      var a = {};
      this.setDownloadUrl = function (b) {
        a.downloadUrl = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    Add2BlackListInput: function () {
      var a = {};
      this.setUserId = function (b) {
        a.userId = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    RemoveFromBlackListInput: function () {
      var a = {};
      this.setUserId = function (b) {
        a.userId = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    QueryBlackListInput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    QueryBlackListOutput: function () {
      var a = {};
      this.setUserIds = function (b) {
        a.userIds = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    BlackListStatusInput: function () {
      var a = {};
      this.setUserId = function (b) {
        a.userId = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    BlockPushInput: function () {
      var a = {};
      this.setBlockeeId = function (b) {
        a.blockeeId = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    ModifyPermissionInput: function () {
      var a = {};
      this.setOpenStatus = function (b) {
        a.openStatus = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupInput: function () {
      var a = {};
      this.setGroupInfo = function (b) {
        for (var i = 0, arr = []; i < b.length; i++) {
          arr.push({ id: b[i].getContent().id, name: b[i].getContent().name })
        }
        a.groupInfo = arr;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupOutput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupInfo: function () {
      var a = {};
      this.setId = function (b) {
        a.id = b;
      };
      this.setName = function (b) {
        a.name = b;
      };
      this.getContent = function () {
        return a;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupHashInput: function () {
      var a = {};
      this.setUserId = function (b) {
        a.userId = b;
      };
      this.setGroupHashCode = function (b) {
        a.groupHashCode = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    GroupHashOutput: function () {
      var a = {};
      this.setResult = function (b) {
        a.result = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    ChrmInput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    ChrmOutput: function () {
      var a = {};
      this.setNothing = function (b) {
        a.nothing = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    ChrmPullMsg: function () {
      var a = {};
      this.setSyncTime = function (b) {
        a.syncTime = b
      };
      this.setCount = function (b) {
        a.count = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    RelationsInput: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      };
      this.setMsg = function (b) {
        a.msg = b;
      };
      this.setCount = function (b) {
        a.count = b;
      };
      this.toArrayBuffer = function () {
        return a
      };
    },
    RelationsOutput: function () {
      var a = {};
      this.setInfo = function (b) {
        a.info = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    RelationInfo: function () {
      var a = {};
      this.setType = function (b) {
        a.type = b;
      };
      this.setUserId = function (b) {
        a.userId = b;
      };
      this.setMsg = function (b) {
        a.msg = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    HistoryMessageInput: function () {
      var a = {};
      this.setTargetId = function (b) {
        a.targetId = b;
      };
      this.setDataTime = function (b) {
        a.dataTime = b;
      };
      this.setSize = function (b) {
        a.size = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    HistoryMessagesOuput: function () {
      var a = {};
      this.setList = function (b) {
        a.list = b;
      };
      this.setSyncTime = function (b) {
        a.syncTime = b;
      };
      this.setHasMsg = function (b) {
        a.hasMsg = b;
      };
      this.toArrayBuffer = function () {
        return a
      }
    },
    HistoryMsgInput: function () {
      var a = {};
      this.setTargetId = function (b) {
        a.targetId = b;
      };
      this.setTime = function (b) {
        a.time = b;
      };
      this.setCount = function (b) {
        a.count = b;
      };
      this.setOrder = function (b) {
        a.order = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    },
    HistoryMsgOuput: function () {
      var a = {};
      this.setList = function (b) {
        a.list = b;
      };
      this.setSyncTime = function (b) {
        a.syncTime = b;
      };
      this.setHasMsg = function (b) {
        a.hasMsg = b;
      };
      this.toArrayBuffer = function () {
        return a;
      };
    }
  };
  for (var f in Modules) {
    Modules[f].decode = function (b) {
      var back = {}, val = JSON.parse(b) || eval("(" + b + ")");
      for (var i in val) {
        back[i] = val[i];
        back["get" + i.charAt(0).toUpperCase() + i.slice(1)] = function () {
          return val[i];
        }
      }
      return back;
    }
  }

  /*
   * JavaScript MD5
   * https://github.com/blueimp/JavaScript-MD5
   *
   * Copyright 2011, Sebastian Tschan
   * https://blueimp.net
   *
   * Licensed under the MIT license:
   * http://www.opensource.org/licenses/MIT
   *
   * Based on
   * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
   * Digest Algorithm, as defined in RFC 1321.
   * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
   * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
   * Distributed under the BSD License
   * See http://pajhome.org.uk/crypt/md5 for more info.
   */

  /*jslint bitwise: true */
  /*global unescape, define, module */


  var RongIMLib = {};

  var tools = {
    convertToken: function (token) {
      var systemInfo = wx.getSystemInfoSync();
      var platform = systemInfo.platform
      // if (platform == 'android') {
      //   token = token.replace(/\+/g, '%2B');
      // }
      return token;
    },
    isFunction: function (func) {
      return Object.prototype.toString.call(func) == '[object Function]';
    },
    isArray: function (func) {
      return Object.prototype.toString.call(func) == '[object Array]';
    },
    request: function (option, callbacks) {
      var url = option.url;
      var method = option.method || "get";
      method = method.toUpperCase();
      var data = option.data || {};
      var header = option.header || {};

      return wx.request({
        url: url,
        method: method,
        data: data,
        header: header,
        success: callbacks.success,
        fail: callbacks.fail
      });
    },
    socket: function (option, callbacks) {
      var url = option.url;
      var method = option.method || "get";
      method = method.toUpperCase(); //必须大写
      var data = option.data || {};
      var header = option.header || {};

      wx.connectSocket({
        url: url,
        data: data,
        method: method,
        header: header
      });

      wx.onSocketOpen(function (res) {
        callbacks.open(wx, res);
      });
      wx.onSocketError(callbacks.error);

      wx.onSocketMessage(callbacks.message);

      wx.onSocketClose(callbacks.close);

      return wx;

    },
    tplEngine: function (temp, data, regexp) {
      if (!(Object.prototype.toString.call(data) === "[object Array]")) {
        data = [data];
      }
      var ret = [];
      for (var i = 0, j = data.length; i < j; i++) {
        ret.push(replaceAction(data[i]));
      }
      return ret.join("");
      function replaceAction(object) {
        return temp.replace(regexp || (/{([^}]+)}/g), function (match, name) {
          if (match.charAt(0) == '\\') {
            return match.slice(1);
          }
          return (object[name] != undefined) ? object[name] : '{' + name + '}';
        });
      }
    },
    Watcher: function () {
      this.watcherList = [];
      this.checkIndexOutBound = function (index, bound) {
        var isOutBound = (index > -1 && index < bound);
        return isOutBound;
      }
      this.add = function (watcher, force) {
        if (force) {
          this.watcherList.length = 0;
        }
        if (tools.isFunction(watcher)) {
          this.watcherList.push(watcher);
        }
      }
      this.get = function (index) {
        if (this.checkIndexOutBound(index, this.watcherList.length)) {
          return this.watcherList[index];
        }
      }
      this.count = function () {
        return this.watcherList.length;
      }
      this.removeAt = function (index) {
        var isOutBound = this.checkIndexOutBound(index, this.watcherList.length);
        if (isOutBound) {
          this.watcherList.splice(index, 1);
        }
      }
      this.remove = function (watcher) {
        if (!watcher) {
          this.watcherList.length = 0;
          return;
        }
        if (tools.isFunction(watcher)) {
          watchers = [watcher];
        }
        if (tools.isArray(watcher)) {
          for (let i = 0, len = watchers.length; i < len; i++) {
            for (let j = 0; j < this.watcherList.length; j++) {
              if (watchers[i] === this.watcherList[j]) {
                this.removeAt(i);
                break;
              }
            }
          }
        }
      }

      this.notify = function (content) {
        for (let i = 0, len = this.watcherList.length; i < len; i++) {
          this.watcherList[i](content);
        }
      }

      this.indexOf = function (watcher, index) {
        var i = index || 0,
          len = this.watcherList.length;
        while (i < len) {
          var _watcher = this.watcherList[i];
          if (_watcher === watcher) {
            return i;
          }
          i++;
        }
        return -1;
      }
    }
  };


  (function (RongIMLib) {

    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
      return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
      return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
      return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
      return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
      return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << (len % 32);
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      var i, olda, oldb, oldc, oldd,
        a = 1732584193,
        b = -271733879,
        c = -1732584194,
        d = 271733878;

      for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;

        a = md5_ff(a, b, c, d, x[i], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
      }
      return [a, b, c, d];
    }

    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
      var i,
        output = '';
      for (i = 0; i < input.length * 32; i += 8) {
        output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
      }
      return output;
    }

    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
      var i,
        output = [];
      output[(input.length >> 2) - 1] = undefined;
      for (i = 0; i < output.length; i += 1) {
        output[i] = 0;
      }
      for (i = 0; i < input.length * 8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
      }
      return output;
    }

    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
      return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
      var i,
        bkey = rstr2binl(key),
        ipad = [],
        opad = [],
        hash;
      ipad[15] = opad[15] = undefined;
      if (bkey.length > 16) {
        bkey = binl_md5(bkey, key.length * 8);
      }
      for (i = 0; i < 16; i += 1) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
      }
      hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
      return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
      var hex_tab = '0123456789abcdef',
        output = '',
        x,
        i;
      for (i = 0; i < input.length; i += 1) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) +
          hex_tab.charAt(x & 0x0F);
      }
      return output;
    }

    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
      return unescape(encodeURIComponent(input));
    }

    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
      return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
      return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
      return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
      return rstr2hex(raw_hmac_md5(k, d));
    }

    function md5(string, key, raw) {
      if (!key) {
        if (!raw) {
          return hex_md5(string);
        }
        return raw_md5(string);
      }
      if (!raw) {
        return hex_hmac_md5(key, string);
      }
      return raw_hmac_md5(key, string);
    }

    RongIMLib.md5 = md5;
    // if (typeof define === 'function' && define.amd) {
    //     define('md5',function () {
    //         return md5;
    //     });
    // } else if (typeof module === 'object' && module.exports) {
    //     module.exports = md5;
    // } else {
    //     $.md5 = md5;
    // }
  }(RongIMLib));



  var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  // var RongIMLib;
  (function (RongIMLib) {
    (function (MentionedType) {
      MentionedType[MentionedType["ALL"] = 1] = "ALL";
      MentionedType[MentionedType["PART"] = 2] = "PART";
    })(RongIMLib.MentionedType || (RongIMLib.MentionedType = {}));
    var MentionedType = RongIMLib.MentionedType;
    (function (MethodType) {
      MethodType[MethodType["CUSTOMER_SERVICE"] = 1] = "CUSTOMER_SERVICE";
      MethodType[MethodType["RECALL"] = 2] = "RECALL";
    })(RongIMLib.MethodType || (RongIMLib.MethodType = {}));
    var MethodType = RongIMLib.MethodType;
    (function (BlacklistStatus) {
      /**
       * 在黑名单中。
       */
      BlacklistStatus[BlacklistStatus["IN_BLACK_LIST"] = 0] = "IN_BLACK_LIST";
      /**
       * 不在黑名单中。
       */
      BlacklistStatus[BlacklistStatus["NOT_IN_BLACK_LIST"] = 1] = "NOT_IN_BLACK_LIST";
    })(RongIMLib.BlacklistStatus || (RongIMLib.BlacklistStatus = {}));
    var BlacklistStatus = RongIMLib.BlacklistStatus;
    (function (ConnectionChannel) {
      ConnectionChannel[ConnectionChannel["XHR_POLLING"] = 0] = "XHR_POLLING";
      ConnectionChannel[ConnectionChannel["WEBSOCKET"] = 1] = "WEBSOCKET";
      //外部调用
      ConnectionChannel[ConnectionChannel["HTTP"] = 0] = "HTTP";
      //外部调用
      ConnectionChannel[ConnectionChannel["HTTPS"] = 1] = "HTTPS";
    })(RongIMLib.ConnectionChannel || (RongIMLib.ConnectionChannel = {}));
    var ConnectionChannel = RongIMLib.ConnectionChannel;
    (function (CustomerType) {
      CustomerType[CustomerType["ONLY_ROBOT"] = 1] = "ONLY_ROBOT";
      CustomerType[CustomerType["ONLY_HUMAN"] = 2] = "ONLY_HUMAN";
      CustomerType[CustomerType["ROBOT_FIRST"] = 3] = "ROBOT_FIRST";
      CustomerType[CustomerType["HUMAN_FIRST"] = 4] = "HUMAN_FIRST";
    })(RongIMLib.CustomerType || (RongIMLib.CustomerType = {}));
    var CustomerType = RongIMLib.CustomerType;
    (function (GetChatRoomType) {
      GetChatRoomType[GetChatRoomType["NONE"] = 0] = "NONE";
      GetChatRoomType[GetChatRoomType["SQQUENCE"] = 1] = "SQQUENCE";
      GetChatRoomType[GetChatRoomType["REVERSE"] = 2] = "REVERSE";
    })(RongIMLib.GetChatRoomType || (RongIMLib.GetChatRoomType = {}));
    var GetChatRoomType = RongIMLib.GetChatRoomType;
    (function (ConnectionStatus) {
      /**
       * 连接成功。
       */
      ConnectionStatus[ConnectionStatus["CONNECTED"] = 0] = "CONNECTED";
      /**
       * 连接中。
       */
      ConnectionStatus[ConnectionStatus["CONNECTING"] = 1] = "CONNECTING";
      /**
       * 断开连接。
       */
      ConnectionStatus[ConnectionStatus["DISCONNECTED"] = 2] = "DISCONNECTED";
      /**
       * 用户账户在其他设备登录，本机会被踢掉线。
       */
      ConnectionStatus[ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"] = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT";
      /**
       * 网络不可用。
       */
      ConnectionStatus[ConnectionStatus["NETWORK_UNAVAILABLE"] = 3] = "NETWORK_UNAVAILABLE";
      /**
       * 域名错误
       */
      ConnectionStatus[ConnectionStatus["DOMAIN_INCORRECT"] = 12] = "DOMAIN_INCORRECT";
      /**
      *  连接关闭。
      */
      ConnectionStatus[ConnectionStatus["CONNECTION_CLOSED"] = 4] = "CONNECTION_CLOSED";
    })(RongIMLib.ConnectionStatus || (RongIMLib.ConnectionStatus = {}));
    var ConnectionStatus = RongIMLib.ConnectionStatus;
    (function (ConversationNotificationStatus) {
      /**
       * 免打扰状态，关闭对应会话的通知提醒。
       */
      ConversationNotificationStatus[ConversationNotificationStatus["DO_NOT_DISTURB"] = 0] = "DO_NOT_DISTURB";
      /**
       * 提醒。
       */
      ConversationNotificationStatus[ConversationNotificationStatus["NOTIFY"] = 1] = "NOTIFY";
    })(RongIMLib.ConversationNotificationStatus || (RongIMLib.ConversationNotificationStatus = {}));
    var ConversationNotificationStatus = RongIMLib.ConversationNotificationStatus;
    (function (ConversationType) {
      ConversationType[ConversationType["NONE"] = 0] = "NONE";
      ConversationType[ConversationType["PRIVATE"] = 1] = "PRIVATE";
      ConversationType[ConversationType["DISCUSSION"] = 2] = "DISCUSSION";
      ConversationType[ConversationType["GROUP"] = 3] = "GROUP";
      ConversationType[ConversationType["CHATROOM"] = 4] = "CHATROOM";
      ConversationType[ConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
      ConversationType[ConversationType["SYSTEM"] = 6] = "SYSTEM";
      //默认关注 MC
      ConversationType[ConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
      //手工关注 MP
      ConversationType[ConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    })(RongIMLib.ConversationType || (RongIMLib.ConversationType = {}));
    var ConversationType = RongIMLib.ConversationType;
    (function (DiscussionInviteStatus) {
      /**
       * 开放邀请。
       */
      DiscussionInviteStatus[DiscussionInviteStatus["OPENED"] = 0] = "OPENED";
      /**
       * 关闭邀请。
       */
      DiscussionInviteStatus[DiscussionInviteStatus["CLOSED"] = 1] = "CLOSED";
    })(RongIMLib.DiscussionInviteStatus || (RongIMLib.DiscussionInviteStatus = {}));
    var DiscussionInviteStatus = RongIMLib.DiscussionInviteStatus;
    (function (ErrorCode) {
      /**
       * 发送频率过快
       */
      ErrorCode[ErrorCode["SEND_FREQUENCY_TOO_FAST"] = 20604] = "SEND_FREQUENCY_TOO_FAST";
      ErrorCode[ErrorCode["RC_MSG_UNAUTHORIZED"] = 20406] = "RC_MSG_UNAUTHORIZED";
      /**
       * 群组 Id 无效
       */
      ErrorCode[ErrorCode["RC_DISCUSSION_GROUP_ID_INVALID"] = 20407] = "RC_DISCUSSION_GROUP_ID_INVALID";
      /**
       * 群组被禁言
       */
      ErrorCode[ErrorCode["FORBIDDEN_IN_GROUP"] = 22408] = "FORBIDDEN_IN_GROUP";
      /**
       * 不在讨论组。
       */
      ErrorCode[ErrorCode["NOT_IN_DISCUSSION"] = 21406] = "NOT_IN_DISCUSSION";
      /**
       * 不在群组。
       */
      ErrorCode[ErrorCode["NOT_IN_GROUP"] = 22406] = "NOT_IN_GROUP";
      /**
       * 不在聊天室。
       */
      ErrorCode[ErrorCode["NOT_IN_CHATROOM"] = 23406] = "NOT_IN_CHATROOM";
      /**
       *聊天室被禁言
       */
      ErrorCode[ErrorCode["FORBIDDEN_IN_CHATROOM"] = 23408] = "FORBIDDEN_IN_CHATROOM";
      /**
       * 聊天室中成员被踢出
       */
      ErrorCode[ErrorCode["RC_CHATROOM_USER_KICKED"] = 23409] = "RC_CHATROOM_USER_KICKED";
      /**
       * 聊天室不存在
       */
      ErrorCode[ErrorCode["RC_CHATROOM_NOT_EXIST"] = 23410] = "RC_CHATROOM_NOT_EXIST";
      /**
       * 聊天室成员已满
       */
      ErrorCode[ErrorCode["RC_CHATROOM_IS_FULL"] = 23411] = "RC_CHATROOM_IS_FULL";
      /**
       * 获取聊天室信息参数无效
       */
      ErrorCode[ErrorCode["RC_CHATROOM_PATAMETER_INVALID"] = 23412] = "RC_CHATROOM_PATAMETER_INVALID";
      /**
       * 聊天室异常
       */
      ErrorCode[ErrorCode["CHATROOM_GET_HISTORYMSG_ERROR"] = 23413] = "CHATROOM_GET_HISTORYMSG_ERROR";
      /**
       * 没有打开聊天室消息存储
       */
      ErrorCode[ErrorCode["CHATROOM_NOT_OPEN_HISTORYMSG_STORE"] = 23414] = "CHATROOM_NOT_OPEN_HISTORYMSG_STORE";
      ErrorCode[ErrorCode["TIMEOUT"] = -1] = "TIMEOUT";
      /**
       * 未知原因失败。
       */
      ErrorCode[ErrorCode["UNKNOWN"] = -2] = "UNKNOWN";
      /**
       * 加入讨论失败
       */
      ErrorCode[ErrorCode["JOIN_IN_DISCUSSION"] = 21407] = "JOIN_IN_DISCUSSION";
      /**
       * 创建讨论组失败
       */
      ErrorCode[ErrorCode["CREATE_DISCUSSION"] = 21408] = "CREATE_DISCUSSION";
      /**
       * 设置讨论组邀请状态失败
       */
      ErrorCode[ErrorCode["INVITE_DICUSSION"] = 21409] = "INVITE_DICUSSION";
      /**
       *获取用户失败
       */
      ErrorCode[ErrorCode["GET_USERINFO_ERROR"] = 23407] = "GET_USERINFO_ERROR";
      /**
       * 在黑名单中。
       */
      ErrorCode[ErrorCode["REJECTED_BY_BLACKLIST"] = 405] = "REJECTED_BY_BLACKLIST";
      /**
       * 通信过程中，当前 Socket 不存在。
       */
      ErrorCode[ErrorCode["RC_NET_CHANNEL_INVALID"] = 30001] = "RC_NET_CHANNEL_INVALID";
      /**
       * Socket 连接不可用。
       */
      ErrorCode[ErrorCode["RC_NET_UNAVAILABLE"] = 30002] = "RC_NET_UNAVAILABLE";
      /**
       * 通信超时。
       */
      ErrorCode[ErrorCode["RC_MSG_RESP_TIMEOUT"] = 30003] = "RC_MSG_RESP_TIMEOUT";
      /**
       * 导航操作时，Http 请求失败。
       */
      ErrorCode[ErrorCode["RC_HTTP_SEND_FAIL"] = 30004] = "RC_HTTP_SEND_FAIL";
      /**
       * HTTP 请求失败。
       */
      ErrorCode[ErrorCode["RC_HTTP_REQ_TIMEOUT"] = 30005] = "RC_HTTP_REQ_TIMEOUT";
      /**
       * HTTP 接收失败。
       */
      ErrorCode[ErrorCode["RC_HTTP_RECV_FAIL"] = 30006] = "RC_HTTP_RECV_FAIL";
      /**
       * 导航操作的 HTTP 请求，返回不是200。
       */
      ErrorCode[ErrorCode["RC_NAVI_RESOURCE_ERROR"] = 30007] = "RC_NAVI_RESOURCE_ERROR";
      /**
       * 导航数据解析后，其中不存在有效数据。
       */
      ErrorCode[ErrorCode["RC_NODE_NOT_FOUND"] = 30008] = "RC_NODE_NOT_FOUND";
      /**
       * 导航数据解析后，其中不存在有效 IP 地址。
       */
      ErrorCode[ErrorCode["RC_DOMAIN_NOT_RESOLVE"] = 30009] = "RC_DOMAIN_NOT_RESOLVE";
      /**
       * 创建 Socket 失败。
       */
      ErrorCode[ErrorCode["RC_SOCKET_NOT_CREATED"] = 30010] = "RC_SOCKET_NOT_CREATED";
      /**
       * Socket 被断开。
       */
      ErrorCode[ErrorCode["RC_SOCKET_DISCONNECTED"] = 30011] = "RC_SOCKET_DISCONNECTED";
      /**
       * PING 操作失败。
       */
      ErrorCode[ErrorCode["RC_PING_SEND_FAIL"] = 30012] = "RC_PING_SEND_FAIL";
      /**
       * PING 超时。
       */
      ErrorCode[ErrorCode["RC_PONG_RECV_FAIL"] = 30013] = "RC_PONG_RECV_FAIL";
      /**
       * 消息发送失败。
       */
      ErrorCode[ErrorCode["RC_MSG_SEND_FAIL"] = 30014] = "RC_MSG_SEND_FAIL";
      /**
       * 做 connect 连接时，收到的 ACK 超时。
       */
      ErrorCode[ErrorCode["RC_CONN_ACK_TIMEOUT"] = 31000] = "RC_CONN_ACK_TIMEOUT";
      /**
       * 参数错误。
       */
      ErrorCode[ErrorCode["RC_CONN_PROTO_VERSION_ERROR"] = 31001] = "RC_CONN_PROTO_VERSION_ERROR";
      /**
       * 参数错误，App Id 错误。
       */
      ErrorCode[ErrorCode["RC_CONN_ID_REJECT"] = 31002] = "RC_CONN_ID_REJECT";
      /**
       * 服务器不可用。
       */
      ErrorCode[ErrorCode["RC_CONN_SERVER_UNAVAILABLE"] = 31003] = "RC_CONN_SERVER_UNAVAILABLE";
      /**
       * Token 错误。
       */
      ErrorCode[ErrorCode["RC_CONN_USER_OR_PASSWD_ERROR"] = 31004] = "RC_CONN_USER_OR_PASSWD_ERROR";
      /**
       * App Id 与 Token 不匹配。
       */
      ErrorCode[ErrorCode["RC_CONN_NOT_AUTHRORIZED"] = 31005] = "RC_CONN_NOT_AUTHRORIZED";
      /**
       * 重定向，地址错误。
       */
      ErrorCode[ErrorCode["RC_CONN_REDIRECTED"] = 31006] = "RC_CONN_REDIRECTED";
      /**
       * NAME 与后台注册信息不一致。
       */
      ErrorCode[ErrorCode["RC_CONN_PACKAGE_NAME_INVALID"] = 31007] = "RC_CONN_PACKAGE_NAME_INVALID";
      /**
       * APP 被屏蔽、删除或不存在。
       */
      ErrorCode[ErrorCode["RC_CONN_APP_BLOCKED_OR_DELETED"] = 31008] = "RC_CONN_APP_BLOCKED_OR_DELETED";
      /**
       * 用户被屏蔽。
       */
      ErrorCode[ErrorCode["RC_CONN_USER_BLOCKED"] = 31009] = "RC_CONN_USER_BLOCKED";
      /**
       * Disconnect，由服务器返回，比如用户互踢。
       */
      ErrorCode[ErrorCode["RC_DISCONN_KICK"] = 31010] = "RC_DISCONN_KICK";
      /**
       * Disconnect，由服务器返回，比如用户互踢。
       */
      ErrorCode[ErrorCode["RC_DISCONN_EXCEPTION"] = 31011] = "RC_DISCONN_EXCEPTION";
      /**
       * 协议层内部错误。query，上传下载过程中数据错误。
       */
      ErrorCode[ErrorCode["RC_QUERY_ACK_NO_DATA"] = 32001] = "RC_QUERY_ACK_NO_DATA";
      /**
       * 协议层内部错误。
       */
      ErrorCode[ErrorCode["RC_MSG_DATA_INCOMPLETE"] = 32002] = "RC_MSG_DATA_INCOMPLETE";
      /**
       * 未调用 init 初始化函数。
       */
      ErrorCode[ErrorCode["BIZ_ERROR_CLIENT_NOT_INIT"] = 33001] = "BIZ_ERROR_CLIENT_NOT_INIT";
      /**
       * 数据库初始化失败。
       */
      ErrorCode[ErrorCode["BIZ_ERROR_DATABASE_ERROR"] = 33002] = "BIZ_ERROR_DATABASE_ERROR";
      /**
       * 传入参数无效。
       */
      ErrorCode[ErrorCode["BIZ_ERROR_INVALID_PARAMETER"] = 33003] = "BIZ_ERROR_INVALID_PARAMETER";
      /**
       * 通道无效。
       */
      ErrorCode[ErrorCode["BIZ_ERROR_NO_CHANNEL"] = 33004] = "BIZ_ERROR_NO_CHANNEL";
      /**
       * 重新连接成功。
       */
      ErrorCode[ErrorCode["BIZ_ERROR_RECONNECT_SUCCESS"] = 33005] = "BIZ_ERROR_RECONNECT_SUCCESS";
      /**
       * 连接中，再调用 connect 被拒绝。
       */
      ErrorCode[ErrorCode["BIZ_ERROR_CONNECTING"] = 33006] = "BIZ_ERROR_CONNECTING";
      /**
       * 消息漫游服务未开通
       */
      ErrorCode[ErrorCode["MSG_ROAMING_SERVICE_UNAVAILABLE"] = 33007] = "MSG_ROAMING_SERVICE_UNAVAILABLE";
      ErrorCode[ErrorCode["MSG_INSERT_ERROR"] = 33008] = "MSG_INSERT_ERROR";
      ErrorCode[ErrorCode["MSG_DEL_ERROR"] = 33009] = "MSG_DEL_ERROR";
      /**
       * 删除会话失败
       */
      ErrorCode[ErrorCode["CONVER_REMOVE_ERROR"] = 34001] = "CONVER_REMOVE_ERROR";
      /**
       *拉取历史消息
       */
      ErrorCode[ErrorCode["CONVER_GETLIST_ERROR"] = 34002] = "CONVER_GETLIST_ERROR";
      /**
       * 会话指定异常
       */
      ErrorCode[ErrorCode["CONVER_SETOP_ERROR"] = 34003] = "CONVER_SETOP_ERROR";
      /**
       * 获取会话未读消息总数失败
       */
      ErrorCode[ErrorCode["CONVER_TOTAL_UNREAD_ERROR"] = 34004] = "CONVER_TOTAL_UNREAD_ERROR";
      /**
       * 获取指定会话类型未读消息数异常
       */
      ErrorCode[ErrorCode["CONVER_TYPE_UNREAD_ERROR"] = 34005] = "CONVER_TYPE_UNREAD_ERROR";
      /**
       * 获取指定用户ID&会话类型未读消息数异常
       */
      ErrorCode[ErrorCode["CONVER_ID_TYPE_UNREAD_ERROR"] = 34006] = "CONVER_ID_TYPE_UNREAD_ERROR";
      ErrorCode[ErrorCode["CONVER_CLEAR_ERROR"] = 34007] = "CONVER_CLEAR_ERROR";
      ErrorCode[ErrorCode["CONVER_GET_ERROR"] = 34008] = "CONVER_GET_ERROR";
      //群组异常信息
      /**
       *
       */
      ErrorCode[ErrorCode["GROUP_SYNC_ERROR"] = 35001] = "GROUP_SYNC_ERROR";
      /**
       * 匹配群信息系异常
       */
      ErrorCode[ErrorCode["GROUP_MATCH_ERROR"] = 35002] = "GROUP_MATCH_ERROR";
      //聊天室异常
      /**
       * 加入聊天室Id为空
       */
      ErrorCode[ErrorCode["CHATROOM_ID_ISNULL"] = 36001] = "CHATROOM_ID_ISNULL";
      /**
       * 加入聊天室失败
       */
      ErrorCode[ErrorCode["CHARTOOM_JOIN_ERROR"] = 36002] = "CHARTOOM_JOIN_ERROR";
      /**
       * 拉取聊天室历史消息失败
       */
      ErrorCode[ErrorCode["CHATROOM_HISMESSAGE_ERROR"] = 36003] = "CHATROOM_HISMESSAGE_ERROR";
      //黑名单异常
      /**
       * 加入黑名单异常
       */
      ErrorCode[ErrorCode["BLACK_ADD_ERROR"] = 37001] = "BLACK_ADD_ERROR";
      /**
       * 获得指定人员再黑名单中的状态异常
       */
      ErrorCode[ErrorCode["BLACK_GETSTATUS_ERROR"] = 37002] = "BLACK_GETSTATUS_ERROR";
      /**
       * 移除黑名单异常
       */
      ErrorCode[ErrorCode["BLACK_REMOVE_ERROR"] = 37003] = "BLACK_REMOVE_ERROR";
      /**
       * 获取草稿失败
       */
      ErrorCode[ErrorCode["DRAF_GET_ERROR"] = 38001] = "DRAF_GET_ERROR";
      /**
       * 保存草稿失败
       */
      ErrorCode[ErrorCode["DRAF_SAVE_ERROR"] = 38002] = "DRAF_SAVE_ERROR";
      /**
       * 删除草稿失败
       */
      ErrorCode[ErrorCode["DRAF_REMOVE_ERROR"] = 38003] = "DRAF_REMOVE_ERROR";
      /**
       * 关注公众号失败
       */
      ErrorCode[ErrorCode["SUBSCRIBE_ERROR"] = 39001] = "SUBSCRIBE_ERROR";
      /**
       * 关注公众号失败
       */
      ErrorCode[ErrorCode["QNTKN_FILETYPE_ERROR"] = 41001] = "QNTKN_FILETYPE_ERROR";
      /**
       * 获取七牛token失败
       */
      ErrorCode[ErrorCode["QNTKN_GET_ERROR"] = 41002] = "QNTKN_GET_ERROR";
      /**
       * cookie被禁用
       */
      ErrorCode[ErrorCode["COOKIE_ENABLE"] = 51001] = "COOKIE_ENABLE";
      ErrorCode[ErrorCode["GET_MESSAGE_BY_ID_ERROR"] = 61001] = "GET_MESSAGE_BY_ID_ERROR";
      // 没有注册DeviveId 也就是用户没有登陆
      ErrorCode[ErrorCode["HAVNODEVICEID"] = 24001] = "HAVNODEVICEID";
      // 已经存在
      ErrorCode[ErrorCode["DEVICEIDISHAVE"] = 24002] = "DEVICEIDISHAVE";
      // 成功
      ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
      // 没有对应的用户或token
      ErrorCode[ErrorCode["FEILD"] = 24009] = "FEILD";
      // voip为空
      ErrorCode[ErrorCode["VOIPISNULL"] = 24013] = "VOIPISNULL";
      // 不支持的Voip引擎
      ErrorCode[ErrorCode["NOENGINETYPE"] = 24010] = "NOENGINETYPE";
      // channleName 是空
      ErrorCode[ErrorCode["NULLCHANNELNAME"] = 24011] = "NULLCHANNELNAME";
      // 生成Voipkey失败
      ErrorCode[ErrorCode["VOIPDYANMICERROR"] = 24012] = "VOIPDYANMICERROR";
      // 没有配置voip
      ErrorCode[ErrorCode["NOVOIP"] = 24014] = "NOVOIP";
      // 服务器内部错误
      ErrorCode[ErrorCode["INTERNALERRROR"] = 24015] = "INTERNALERRROR";
      //VOIP close
      ErrorCode[ErrorCode["VOIPCLOSE"] = 24016] = "VOIPCLOSE";
      ErrorCode[ErrorCode["CLOSE_BEFORE_OPEN"] = 51001] = "CLOSE_BEFORE_OPEN";
      ErrorCode[ErrorCode["ALREADY_IN_USE"] = 51002] = "ALREADY_IN_USE";
      ErrorCode[ErrorCode["INVALID_CHANNEL_NAME"] = 51003] = "INVALID_CHANNEL_NAME";
      ErrorCode[ErrorCode["VIDEO_CONTAINER_IS_NULL"] = 51004] = "VIDEO_CONTAINER_IS_NULL";
      /**
      * 删除消息数组长度为 0 .
      */
      ErrorCode[ErrorCode["DELETE_MESSAGE_ID_IS_NULL"] = 61001] = "DELETE_MESSAGE_ID_IS_NULL";
      /*!
      己方取消已发出的通话请求
      */
      ErrorCode[ErrorCode["CANCEL"] = 1] = "CANCEL";
      /*!
       己方拒绝收到的通话请求
       */
      ErrorCode[ErrorCode["REJECT"] = 2] = "REJECT";
      /*!
       己方挂断
       */
      ErrorCode[ErrorCode["HANGUP"] = 3] = "HANGUP";
      /*!
       己方忙碌
       */
      ErrorCode[ErrorCode["BUSYLINE"] = 4] = "BUSYLINE";
      /*!
       己方未接听
       */
      ErrorCode[ErrorCode["NO_RESPONSE"] = 5] = "NO_RESPONSE";
      /*!
       己方不支持当前引擎
       */
      ErrorCode[ErrorCode["ENGINE_UN_SUPPORTED"] = 6] = "ENGINE_UN_SUPPORTED";
      /*!
       己方网络出错
       */
      ErrorCode[ErrorCode["NETWORK_ERROR"] = 7] = "NETWORK_ERROR";
      /*!
       对方取消已发出的通话请求
       */
      ErrorCode[ErrorCode["REMOTE_CANCEL"] = 11] = "REMOTE_CANCEL";
      /*!
       对方拒绝收到的通话请求
       */
      ErrorCode[ErrorCode["REMOTE_REJECT"] = 12] = "REMOTE_REJECT";
      /*!
       通话过程对方挂断
       */
      ErrorCode[ErrorCode["REMOTE_HANGUP"] = 13] = "REMOTE_HANGUP";
      /*!
       对方忙碌
       */
      ErrorCode[ErrorCode["REMOTE_BUSYLINE"] = 14] = "REMOTE_BUSYLINE";
      /*!
       对方未接听
       */
      ErrorCode[ErrorCode["REMOTE_NO_RESPONSE"] = 15] = "REMOTE_NO_RESPONSE";
      /*!
       对方网络错误
       */
      ErrorCode[ErrorCode["REMOTE_ENGINE_UN_SUPPORTED"] = 16] = "REMOTE_ENGINE_UN_SUPPORTED";
      /*!
       对方网络错误
       */
      ErrorCode[ErrorCode["REMOTE_NETWORK_ERROR"] = 17] = "REMOTE_NETWORK_ERROR";
      /*!
       VoIP 不可用
       */
      ErrorCode[ErrorCode["VOIP_NOT_AVALIABLE"] = 18] = "VOIP_NOT_AVALIABLE";
    })(RongIMLib.ErrorCode || (RongIMLib.ErrorCode = {}));
    var ErrorCode = RongIMLib.ErrorCode;
    (function (VoIPMediaType) {
      VoIPMediaType[VoIPMediaType["MEDIA_AUDIO"] = 1] = "MEDIA_AUDIO";
      VoIPMediaType[VoIPMediaType["MEDIA_VEDIO"] = 2] = "MEDIA_VEDIO";
    })(RongIMLib.VoIPMediaType || (RongIMLib.VoIPMediaType = {}));
    var VoIPMediaType = RongIMLib.VoIPMediaType;
    (function (MediaType) {
      /**
       * 图片。
       */
      MediaType[MediaType["IMAGE"] = 1] = "IMAGE";
      /**
       * 声音。
       */
      MediaType[MediaType["AUDIO"] = 2] = "AUDIO";
      /**
       * 视频。
       */
      MediaType[MediaType["VIDEO"] = 3] = "VIDEO";
      /**
       * 通用文件。
       */
      MediaType[MediaType["FILE"] = 100] = "FILE";
    })(RongIMLib.MediaType || (RongIMLib.MediaType = {}));
    var MediaType = RongIMLib.MediaType;
    (function (MessageDirection) {
      /**
       * 发送消息。
       */
      MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
      /**
       * 接收消息。
       */
      MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
    })(RongIMLib.MessageDirection || (RongIMLib.MessageDirection = {}));
    var MessageDirection = RongIMLib.MessageDirection;
    (function (FileType) {
      FileType[FileType["IMAGE"] = 1] = "IMAGE";
      FileType[FileType["AUDIO"] = 2] = "AUDIO";
      FileType[FileType["VIDEO"] = 3] = "VIDEO";
      FileType[FileType["FILE"] = 4] = "FILE";
    })(RongIMLib.FileType || (RongIMLib.FileType = {}));
    var FileType = RongIMLib.FileType;
    (function (RealTimeLocationErrorCode) {
      /**
       * 未初始化 RealTimeLocation 实例
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_NOT_INIT"] = -1] = "RC_REAL_TIME_LOCATION_NOT_INIT";
      /**
       * 执行成功。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_SUCCESS"] = 0] = "RC_REAL_TIME_LOCATION_SUCCESS";
      /**
       * 获取 RealTimeLocation 实例时返回
       * GPS 未打开。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_GPS_DISABLED"] = 1] = "RC_REAL_TIME_LOCATION_GPS_DISABLED";
      /**
       * 获取 RealTimeLocation 实例时返回
       * 当前会话不支持位置共享。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT"] = 2] = "RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT";
      /**
       * 获取 RealTimeLocation 实例时返回
       * 对方已发起位置共享。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_IS_ON_GOING"] = 3] = "RC_REAL_TIME_LOCATION_IS_ON_GOING";
      /**
       * Join 时返回
       * 当前位置共享已超过最大支持人数。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT"] = 4] = "RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT";
      /**
       * Join 时返回
       * 加入位置共享失败。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_JOIN_FAILURE"] = 5] = "RC_REAL_TIME_LOCATION_JOIN_FAILURE";
      /**
       * Start 时返回
       * 发起位置共享失败。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_START_FAILURE"] = 6] = "RC_REAL_TIME_LOCATION_START_FAILURE";
      /**
       * 网络不可用。
       */
      RealTimeLocationErrorCode[RealTimeLocationErrorCode["RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE"] = 7] = "RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE";
    })(RongIMLib.RealTimeLocationErrorCode || (RongIMLib.RealTimeLocationErrorCode = {}));
    var RealTimeLocationErrorCode = RongIMLib.RealTimeLocationErrorCode;
    (function (RealTimeLocationStatus) {
      /**
       * 空闲状态 （默认状态）
       * 对方或者自己都未发起位置共享业务，或者位置共享业务已结束。
       */
      RealTimeLocationStatus[RealTimeLocationStatus["RC_REAL_TIME_LOCATION_STATUS_IDLE"] = 0] = "RC_REAL_TIME_LOCATION_STATUS_IDLE";
      /**
       * 呼入状态 （待加入）
       * 1. 对方发起了位置共享业务，此状态下，自己只能选择加入。
       * 2. 自己从已连接的位置共享中退出。
       */
      RealTimeLocationStatus[RealTimeLocationStatus["RC_REAL_TIME_LOCATION_STATUS_INCOMING"] = 1] = "RC_REAL_TIME_LOCATION_STATUS_INCOMING";
      /**
       * 呼出状态 =（自己创建）
       * 1. 自己发起位置共享业务，对方只能选择加入。
       * 2. 对方从已连接的位置共享业务中退出。
       */
      RealTimeLocationStatus[RealTimeLocationStatus["RC_REAL_TIME_LOCATION_STATUS_OUTGOING"] = 2] = "RC_REAL_TIME_LOCATION_STATUS_OUTGOING";
      /**
       * 连接状态 （自己加入）
       * 对方加入了自己发起的位置共享，或者自己加入了对方发起的位置共享。
       */
      RealTimeLocationStatus[RealTimeLocationStatus["RC_REAL_TIME_LOCATION_STATUS_CONNECTED"] = 3] = "RC_REAL_TIME_LOCATION_STATUS_CONNECTED";
    })(RongIMLib.RealTimeLocationStatus || (RongIMLib.RealTimeLocationStatus = {}));
    var RealTimeLocationStatus = RongIMLib.RealTimeLocationStatus;
    (function (ReceivedStatus) {
      ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
      ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
      ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
      ReceivedStatus[ReceivedStatus["RETRIEVED"] = 8] = "RETRIEVED";
      ReceivedStatus[ReceivedStatus["UNREAD"] = 0] = "UNREAD";
    })(RongIMLib.ReceivedStatus || (RongIMLib.ReceivedStatus = {}));
    var ReceivedStatus = RongIMLib.ReceivedStatus;
    (function (SearchType) {
      /**
       * 精确。
       */
      SearchType[SearchType["EXACT"] = 0] = "EXACT";
      /**
       * 模糊。
       */
      SearchType[SearchType["FUZZY"] = 1] = "FUZZY";
    })(RongIMLib.SearchType || (RongIMLib.SearchType = {}));
    var SearchType = RongIMLib.SearchType;
    (function (SentStatus) {
      /**
       * 发送中。
       */
      SentStatus[SentStatus["SENDING"] = 10] = "SENDING";
      /**
       * 发送失败。
       */
      SentStatus[SentStatus["FAILED"] = 20] = "FAILED";
      /**
       * 已发送。
       */
      SentStatus[SentStatus["SENT"] = 30] = "SENT";
      /**
       * 对方已接收。
       */
      SentStatus[SentStatus["RECEIVED"] = 40] = "RECEIVED";
      /**
       * 对方已读。
       */
      SentStatus[SentStatus["READ"] = 50] = "READ";
      /**
       * 对方已销毁。
       */
      SentStatus[SentStatus["DESTROYED"] = 60] = "DESTROYED";
    })(RongIMLib.SentStatus || (RongIMLib.SentStatus = {}));
    var SentStatus = RongIMLib.SentStatus;
    (function (ConnectionState) {
      ConnectionState[ConnectionState["ACCEPTED"] = 0] = "ACCEPTED";
      ConnectionState[ConnectionState["UNACCEPTABLE_PROTOCOL_VERSION"] = 1] = "UNACCEPTABLE_PROTOCOL_VERSION";
      ConnectionState[ConnectionState["IDENTIFIER_REJECTED"] = 2] = "IDENTIFIER_REJECTED";
      ConnectionState[ConnectionState["SERVER_UNAVAILABLE"] = 3] = "SERVER_UNAVAILABLE";
      /**
       * token无效
       */
      ConnectionState[ConnectionState["TOKEN_INCORRECT"] = 4] = "TOKEN_INCORRECT";
      ConnectionState[ConnectionState["NOT_AUTHORIZED"] = 5] = "NOT_AUTHORIZED";
      ConnectionState[ConnectionState["REDIRECT"] = 6] = "REDIRECT";
      ConnectionState[ConnectionState["PACKAGE_ERROR"] = 7] = "PACKAGE_ERROR";
      ConnectionState[ConnectionState["APP_BLOCK_OR_DELETE"] = 8] = "APP_BLOCK_OR_DELETE";
      ConnectionState[ConnectionState["BLOCK"] = 9] = "BLOCK";
      ConnectionState[ConnectionState["TOKEN_EXPIRE"] = 10] = "TOKEN_EXPIRE";
      ConnectionState[ConnectionState["DEVICE_ERROR"] = 11] = "DEVICE_ERROR";
    })(RongIMLib.ConnectionState || (RongIMLib.ConnectionState = {}));
    var ConnectionState = RongIMLib.ConnectionState;
  })(RongIMLib || (RongIMLib = {}));


  // var RongIMLib;
  (function (RongIMLib) {
    var RongIMClient = (function () {
      function RongIMClient() {
      }
      RongIMClient.getInstance = function () {
        if (!RongIMClient._instance) {
          throw new Error("RongIMClient is not initialized. Call .init() method first.");
        }
        return RongIMClient._instance;
      };
      /**
       * 初始化 SDK，在整个应用全局只需要调用一次。
       * @param appKey    开发者后台申请的 AppKey，用来标识应用。
       * @param dataAccessProvider 必须是DataAccessProvider的实例
       */
      RongIMClient.init = function (appKey, dataAccessProvider, options) {
        if (RongIMClient._instance) {
          return RongIMClient._memoryStore.sdkInfo;
        }
        RongIMClient._instance = new RongIMClient();
        options = options || {};
        var protocol = options.protocol || "https://", wsScheme = options.wsScheme || 'wss://';

        var isPolling = true;

        RongIMClient._storageProvider = RongIMLib.LocalStorageProvider;
        RongIMClient._Cahche = {
          conversationList: [],
          callbacks: []
        };
        var opts = RongIMLib.ObjectTools.buildOptions(options, {
          navi: protocol + 'nav.cn.ronghub.com',
          api: protocol + 'api.cn.ronghub.com',
          isPolling: true,
          wsScheme: wsScheme,
          cookieValidity: 1,
          protocol: protocol,
          openMp: true,
          cmp: 'cometproxy-cn.ronghub.com',
          maxConversationCount: 300
        }, protocol);

        var pather = new RongIMLib.FeaturePatcher();

        pather.patchAll();

        var tempStore = {
          token: "",
          callback: null,
          hasModules: true,
          global: window,
          lastReadTime: new RongIMLib.LimitableMap(),
          conversationList: [],
          appKey: appKey,
          publicServiceMap: new RongIMLib.PublicServiceMap(),
          providerType: 1,
          deltaTime: 0,
          filterMessages: [],
          isSyncRemoteConverList: false,
          isUseWebSQLProvider: false,
          otherDevice: false,
          custStore: {},
          converStore: { latestMessage: {} },
          connectAckTime: 0,
          voipStategy: 0,
          isFirstPingMsg: true,
          depend: opts,
          listenerList: RongIMClient._memoryStore.listenerList
        };

        RongIMClient._memoryStore = tempStore;
        if (dataAccessProvider && Object.prototype.toString.call(dataAccessProvider) == "[object Object]") {
          // RongIMClient._memoryStore.isUseWebSQLProvider = true;  处理不同存储方案
          RongIMClient._dataAccessProvider = dataAccessProvider;
        }
        else {
          RongIMClient._dataAccessProvider = new RongIMLib.ServerDataProvider();
        }

        RongIMClient._dataAccessProvider.init(appKey);
        RongIMClient.MessageParams = {
          TextMessage: { objectName: "RC:TxtMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          ImageMessage: { objectName: "RC:ImgMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          DiscussionNotificationMessage: { objectName: "RC:DizNtf", msgTag: new RongIMLib.MessageTag(true, true) },
          VoiceMessage: { objectName: "RC:VcMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          RichContentMessage: { objectName: "RC:ImgTextMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          FileMessage: { objectName: "RC:FileMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          HandshakeMessage: { objectName: "", msgTag: new RongIMLib.MessageTag(true, true) },
          UnknownMessage: { objectName: "", msgTag: new RongIMLib.MessageTag(true, true) },
          LocationMessage: { objectName: "RC:LBSMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          InformationNotificationMessage: { objectName: "RC:InfoNtf", msgTag: new RongIMLib.MessageTag(true, true) },
          ContactNotificationMessage: { objectName: "RC:ContactNtf", msgTag: new RongIMLib.MessageTag(true, true) },
          ProfileNotificationMessage: { objectName: "RC:ProfileNtf", msgTag: new RongIMLib.MessageTag(true, true) },
          CommandNotificationMessage: { objectName: "RC:CmdNtf", msgTag: new RongIMLib.MessageTag(true, true) },
          PublicServiceRichContentMessage: { objectName: "RC:PSImgTxtMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          PublicServiceMultiRichContentMessage: { objectName: "RC:PSMultiImgTxtMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          JrmfReadPacketMessage: { objectName: "RCJrmf:RpMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          JrmfReadPacketOpenedMessage: { objectName: "RCJrmf:RpOpendMsg", msgTag: new RongIMLib.MessageTag(true, true) },
          GroupNotificationMessage: { objectName: "RC:GrpNtf", msgTag: new RongIMLib.MessageTag(true, true) },
          CommandMessage: { objectName: "RC:CmdMsg", msgTag: new RongIMLib.MessageTag(false, false) },
          TypingStatusMessage: { objectName: "RC:TypSts", msgTag: new RongIMLib.MessageTag(false, false) },
          PublicServiceCommandMessage: { objectName: "RC:PSCmd", msgTag: new RongIMLib.MessageTag(false, false) },
          RecallCommandMessage: { objectName: "RC:RcCmd", msgTag: new RongIMLib.MessageTag(false, true) },
          SyncReadStatusMessage: { objectName: "RC:SRSMsg", msgTag: new RongIMLib.MessageTag(false, false) },
          ReadReceiptRequestMessage: { objectName: "RC:RRReqMsg", msgTag: new RongIMLib.MessageTag(false, false) },
          ReadReceiptResponseMessage: { objectName: "RC:RRRspMsg", msgTag: new RongIMLib.MessageTag(false, false) },
          ChangeModeResponseMessage: { objectName: "RC:CsChaR", msgTag: new RongIMLib.MessageTag(false, false) },
          ChangeModeMessage: { objectName: "RC:CSCha", msgTag: new RongIMLib.MessageTag(false, false) },
          EvaluateMessage: { objectName: "RC:CsEva", msgTag: new RongIMLib.MessageTag(false, false) },
          CustomerContact: { objectName: "RC:CsContact", msgTag: new RongIMLib.MessageTag(false, false) },
          HandShakeMessage: { objectName: "RC:CsHs", msgTag: new RongIMLib.MessageTag(false, false) },
          HandShakeResponseMessage: { objectName: "RC:CsHsR", msgTag: new RongIMLib.MessageTag(false, false) },
          SuspendMessage: { objectName: "RC:CsSp", msgTag: new RongIMLib.MessageTag(false, false) },
          TerminateMessage: { objectName: "RC:CsEnd", msgTag: new RongIMLib.MessageTag(false, false) },
          CustomerStatusUpdateMessage: { objectName: "RC:CsUpdate", msgTag: new RongIMLib.MessageTag(false, false) },
          ReadReceiptMessage: { objectName: "RC:ReadNtf", msgTag: new RongIMLib.MessageTag(false, false) },
          RCEUpdateStatusMessage: { objectName: "RCE:UpdateStatus", msgTag: new RongIMLib.MessageTag(false, false) }
        };
        // if ('RongCallLib' in RongIMLib) {
        RongIMClient.MessageParams["AcceptMessage"] = { objectName: "RC:VCAccept", msgTag: new RongIMLib.MessageTag(false, false) };
        RongIMClient.MessageParams["RingingMessage"] = { objectName: "RC:VCRinging", msgTag: new RongIMLib.MessageTag(false, false) };
        RongIMClient.MessageParams["SummaryMessage"] = { objectName: "RC:VCSummary", msgTag: new RongIMLib.MessageTag(false, false) };
        RongIMClient.MessageParams["HungupMessage"] = { objectName: "RC:VCHangup", msgTag: new RongIMLib.MessageTag(false, false) };
        RongIMClient.MessageParams["InviteMessage"] = { objectName: "RC:VCInvite", msgTag: new RongIMLib.MessageTag(false, false) };
        RongIMClient.MessageParams["MediaModifyMessage"] = { objectName: "RC:VCModifyMedia", msgTag: new RongIMLib.MessageTag(false, false) };
        RongIMClient.MessageParams["MemberModifyMessage"] = { objectName: "RC:VCModifyMem", msgTag: new RongIMLib.MessageTag(false, false) };
        // }
        RongIMClient.MessageType = {
          TextMessage: "TextMessage",
          ImageMessage: "ImageMessage",
          DiscussionNotificationMessage: "DiscussionNotificationMessage",
          VoiceMessage: "VoiceMessage",
          RichContentMessage: "RichContentMessage",
          HandshakeMessage: "HandshakeMessage",
          UnknownMessage: "UnknownMessage",
          LocationMessage: "LocationMessage",
          InformationNotificationMessage: "InformationNotificationMessage",
          ContactNotificationMessage: "ContactNotificationMessage",
          ProfileNotificationMessage: "ProfileNotificationMessage",
          CommandNotificationMessage: "CommandNotificationMessage",
          CommandMessage: "CommandMessage",
          TypingStatusMessage: "TypingStatusMessage",
          ChangeModeResponseMessage: "ChangeModeResponseMessage",
          ChangeModeMessage: "ChangeModeMessage",
          EvaluateMessage: "EvaluateMessage",
          HandShakeMessage: "HandShakeMessage",
          HandShakeResponseMessage: "HandShakeResponseMessage",
          SuspendMessage: "SuspendMessage",
          TerminateMessage: "TerminateMessage",
          CustomerContact: "CustomerContact",
          CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage",
          SyncReadStatusMessage: "SyncReadStatusMessage",
          ReadReceiptRequestMessage: "ReadReceiptRequestMessage",
          ReadReceiptResponseMessage: "ReadReceiptResponseMessage",
          FileMessage: 'FileMessage',
          AcceptMessage: "AcceptMessage",
          RingingMessage: "RingingMessage",
          SummaryMessage: "SummaryMessage",
          HungupMessage: "HungupMessage",
          InviteMessage: "InviteMessage",
          MediaModifyMessage: "MediaModifyMessage",
          MemberModifyMessage: "MemberModifyMessage",
          JrmfReadPacketMessage: "JrmfReadPacketMessage",
          JrmfReadPacketOpenedMessage: "JrmfReadPacketOpenedMessage",
          RCEUpdateStatusMessage: "RCEUpdateStatusMessage"
        };

        RongIMClient.Conversation = RongIMClient._dataAccessProvider.Conversation;
      };
      /**
       * 连接服务器，在整个应用全局只需要调用一次，断线后 SDK 会自动重连。
       *
       * @param token     从服务端获取的用户身份令牌（Token）。
       * @param callback  连接回调，返回连接的成功或者失败状态。
       */
      RongIMClient.connect = function (token, callback, userId) {
        var key = "navi";
        var storage = RongIMClient._storageProvider;
        key = storage.getItemKey(key);
        var server = storage.getItem(key) || "";
        var isIP = function (str) {
          var pattern = /^\d{1,3}(\.\d{1,3}){3}(:\d*)?$/;
          return pattern.test(str);
        };
        var domain = server.split(",")[0];
        if (isIP(domain)) {
          storage.removeItem("rongSDK");
        }

        RongIMLib.CheckParam.getInstance().check(["string", "object", "string|null|object|global|undefined"], "connect", true, arguments);
        RongIMClient._dataAccessProvider.connect(token, callback, userId);
      };

      RongIMClient.ready = function (callback) {
        var isAlive = function () {
          var isConnecting = false, isConnected = false;
          if (RongIMLib.Bridge._client && RongIMLib.Bridge._client.channel) {
            isConnecting = (RongIMLib.Bridge._client.channel.connectionStatus == RongIMLib.ConnectionStatus.CONNECTING);
            isConnected = (RongIMLib.Bridge._client.channel.connectionStatus == RongIMLib.ConnectionStatus.CONNECTED);
          }
          if (isConnected || isConnecting) {
            return true;
          }
          return false;
        };
        if (isAlive()) {
          return callback(RongIMLib.Bridge._client);
        }
        var connectCallback = RongIMLib.RongIMClient._memoryStore.callback || {
          onTokenIncorrect: function () {
            console.error('内部重连, Token Error');
          },
          onError: function (code) {
            console.error('内部重连失败，错误码: %d', code);
          }
        };
        // 连接不可用，进行重连
        RongIMClient.reconnect({
          onSuccess: function () {
            RongIMLib.Bridge._client.channel.connectionStatus = RongIMLib.ConnectionStatus.CONNECTED;
            callback(RongIMLib.Bridge._client);
          },
          onTokenIncorrect: connectCallback.onTokenIncorrect,
          onError: connectCallback.onError
        });
      };

      /**
          var config = {
              appkey: appkey,
              token: token,
              dataAccessProvider:dataAccessProvider,
              opts: opts
          };
          callback(_instance, userId);
       */
      RongIMClient.initApp = function (config, callback) {
        RongIMClient.init(config.appkey, config.dataAccessProvider, config.opts);
        RongIMClient.connect(config.token, {
          onSuccess: function (userId) {
            callback(RongIMClient._instance, userId);
          },
          onTokenIncorrect: function () {
            throw new Error('token expired');
          },
          onError: function (errorCode) { }
        });
      };

      RongIMClient.reconnect = function (callback) {
        RongIMClient._dataAccessProvider.reconnect(callback);
      };
      /**
       * 注册消息类型，用于注册用户自定义的消息。
       * 内建的消息类型已经注册过，不需要再次注册。
       * 自定义消息声明需放在执行顺序最高的位置（在RongIMClient.init(appkey)之后即可）
       * @param objectName  消息内置名称
       */
      RongIMClient.registerMessageType = function (messageType, objectName, messageTag, messageContent) {
        RongIMClient._dataAccessProvider.registerMessageType(messageType, objectName, messageTag, messageContent);
        RongIMClient.RegisterMessage[messageType].messageName = messageType;
        RongIMClient.MessageType[messageType] = messageType;
        RongIMClient.MessageParams[messageType] = { objectName: objectName, msgTag: messageTag };
      };
      /**
       * 设置连接状态变化的监听器。
       *
       * @param listener  连接状态变化的监听器。
       */
      RongIMClient.setConnectionStatusListener = function (listener) {
        if (RongIMClient._dataAccessProvider) {
          RongIMClient._dataAccessProvider.setConnectionStatusListener(listener);
        }
        else {
          RongIMClient._memoryStore.listenerList.push(listener);
        }
      };
      /**
       * 设置接收消息的监听器。
       *
       * @param listener  接收消息的监听器。
       */
      RongIMClient.setOnReceiveMessageListener = function (listener) {
        if (RongIMClient._dataAccessProvider) {
          RongIMClient._dataAccessProvider.setOnReceiveMessageListener(listener);
        }
        else {
          RongIMClient._memoryStore.listenerList.push(listener);
        }
      };
      /**
       * 清理所有连接相关的变量
       */
      RongIMClient.prototype.logout = function () {
        RongIMClient._dataAccessProvider.logout();
      };
      /**
       * 断开连接。
       */
      RongIMClient.prototype.disconnect = function () {
        RongIMClient._dataAccessProvider.disconnect();
      };
      RongIMClient.prototype.startCustomService = function (custId, callback, groupId) {
        if (!custId || !callback)
          return;
        var msg;
        if (typeof groupId == 'undefined') {
          msg = new RongIMLib.HandShakeMessage();
        }
        else {
          msg = new RongIMLib.HandShakeMessage({ groupid: groupId });
        }
        var me = this;
        RongIMLib.RongIMClient._memoryStore.custStore["isInit"] = true;
        RongIMClient.getInstance().sendMessage(RongIMLib.ConversationType.CUSTOMER_SERVICE, custId, msg, {
          onSuccess: function (data) {
            if (data.isBlack) {
              callback.onError();
              me.stopCustomeService(custId, {
                onSuccess: function () { },
                onError: function () { }
              });
            }
            else {
              callback.onSuccess();
            }
          },
          onError: function () {
            callback.onError();
          },
          onBefore: function () { }
        });
      };
      RongIMClient.prototype.stopCustomeService = function (custId, callback) {
        if (!custId || !callback)
          return;
        var session = RongIMClient._memoryStore.custStore[custId];
        if (!session)
          return;
        var msg = new RongIMLib.SuspendMessage({ sid: session.sid, uid: session.uid, pid: session.pid });
        this.sendCustMessage(custId, msg, {
          onSuccess: function () {
            // delete RongIMClient._memoryStore.custStore[custId];
            setTimeout(function () {
              callback.onSuccess();
            });
          },
          onError: function () {
            setTimeout(function () {
              callback.onError();
            });
          }
        });
      };
      RongIMClient.prototype.switchToHumanMode = function (custId, callback) {
        if (!custId || !callback)
          return;
        var session = RongIMClient._memoryStore.custStore[custId];
        if (!session)
          return;
        var msg = new RongIMLib.ChangeModeMessage({ sid: session.sid, uid: session.uid, pid: session.pid });
        this.sendCustMessage(custId, msg, callback);
      };
      RongIMClient.prototype.evaluateRebotCustomService = function (custId, isRobotResolved, sugest, callback) {
        if (!custId || !callback)
          return;
        var session = RongIMClient._memoryStore.custStore[custId];
        if (!session)
          return;
        var msg = new RongIMLib.EvaluateMessage({ sid: session.sid, uid: session.uid, pid: session.pid, isRobotResolved: isRobotResolved, sugest: sugest, type: 0 });
        this.sendCustMessage(custId, msg, callback);
      };
      RongIMClient.prototype.evaluateHumanCustomService = function (custId, humanValue, sugest, callback) {
        if (!custId || !callback)
          return;
        var session = RongIMClient._memoryStore.custStore[custId];
        if (!session)
          return;
        var msg = new RongIMLib.EvaluateMessage({ sid: session.sid, uid: session.uid, pid: session.pid, humanValue: humanValue, sugest: sugest, type: 1 });
        this.sendCustMessage(custId, msg, callback);
      };
      RongIMClient.prototype.sendCustMessage = function (custId, msg, callback) {
        RongIMClient.getInstance().sendMessage(RongIMLib.ConversationType.CUSTOMER_SERVICE, custId, msg, {
          onSuccess: function (data) {
            callback.onSuccess();
          },
          onError: function () {
            callback.onError();
          },
          onBefore: function () { }
        });
      };
      /**
       * 获取当前连接的状态。
       */
      RongIMClient.prototype.getCurrentConnectionStatus = function () {
        return RongIMLib.Bridge._client.channel.connectionStatus;
      };
      /**
       * 获取当前使用的连接通道。
       */
      RongIMClient.prototype.getConnectionChannel = function () {
        if (RongIMLib.Transportations._TransportType == RongIMLib.Socket.XHR_POLLING) {
          return RongIMLib.ConnectionChannel.XHR_POLLING;
        }
        else if (RongIMLib.Transportations._TransportType == RongIMLib.Socket.WEBSOCKET) {
          return RongIMLib.ConnectionChannel.WEBSOCKET;
        }
      };
      /**
       * 获取当前使用的本地储存提供者。 TODO
       */
      RongIMClient.prototype.getStorageProvider = function () {
        if (RongIMClient._memoryStore.providerType == 1) {
          return "ServerDataProvider";
        }
        else {
          return "OtherDataProvider";
        }
      };
      /**
       * 过滤聊天室消息（拉取最近聊天消息）
       * @param {string[]} msgFilterNames
       */
      RongIMClient.prototype.setFilterMessages = function (msgFilterNames) {
        if (Object.prototype.toString.call(msgFilterNames) == "[object Array]") {
          RongIMClient._memoryStore.filterMessages = msgFilterNames;
        }
      };
      RongIMClient.prototype.getAgoraDynamicKey = function (engineType, channelName, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "getAgoraDynamicKey", false, arguments);
        var modules = new Modules.VoipDynamicInput();
        modules.setEngineType(engineType);
        modules.setChannelName(channelName);
        RongIMClient.bridge.queryMsg(32, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, callback, "VoipDynamicOutput");
      };
      /**
       * 获取当前连接用户的 UserId。
       */
      RongIMClient.prototype.getCurrentUserId = function () {
        return RongIMLib.Bridge._client.userId;
      };
      /**
       * [getCurrentUserInfo 获取当前用户信息]
       * @param  {ResultCallback<UserInfo>} callback [回调函数]
       */
      // getCurrentUserInfo(callback: ResultCallback<UserInfo>) {
      //     CheckParam.getInstance().check(["object"], "getCurrentUserInfo");
      //     this.getUserInfo(Bridge._client.userId, callback);
      // }
      /**
       * 获得用户信息
       * @param  {string}                   userId [用户Id]
       * @param  {ResultCallback<UserInfo>} callback [回调函数]
       */
      // getUserInfo(userId: string, callback: ResultCallback<UserInfo>) {
      //     CheckParam.getInstance().check(["string", "object"], "getUserInfo");
      //     var user = new Modules.GetUserInfoInput();
      //     user.setNothing(1);
      //     RongIMClient.bridge.queryMsg(5, MessageUtil.ArrayForm(user.toArrayBuffer()), userId, {
      //         onSuccess: function(info: any) {
      //             var userInfo = new UserInfo(info.userId, info.name, info.portraitUri);
      //             callback.onSuccess(userInfo);
      //         },
      //         onError: function(err: any) {
      //             callback.onError(err);
      //         }
      //     }, "GetUserInfoOutput");
      // }
      /**
       * 获取服务器时间与本地时间的差值，单位为毫秒。
       * 计算公式：差值 = 本地时间毫秒数 - 服务器时间毫秒数
       * @param callback  获取的回调，返回差值。
       */
      RongIMClient.prototype.getDeltaTime = function () {
        return RongIMClient._dataAccessProvider.getDelaTime();
      };
      // #region Message
      RongIMClient.prototype.getMessage = function (messageId, callback) {
        RongIMClient._dataAccessProvider.getMessage(messageId, callback);
      };
      RongIMClient.prototype.deleteLocalMessages = function (conversationType, targetId, messageIds, callback) {
        RongIMClient._dataAccessProvider.removeLocalMessage(conversationType, targetId, messageIds, callback);
      };
      RongIMClient.prototype.updateMessage = function (message, callback) {
        RongIMClient._dataAccessProvider.updateMessage(message, callback);
      };
      RongIMClient.prototype.clearMessages = function (conversationType, targetId, callback) {
        RongIMClient._dataAccessProvider.clearMessages(conversationType, targetId, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      /**TODO 清楚本地存储的未读消息，目前清空内存中的未读消息
       * [clearMessagesUnreadStatus 清空指定会话未读消息]
       * @param  {ConversationType}        conversationType [会话类型]
       * @param  {string}                  targetId         [用户id]
       * @param  {ResultCallback<boolean>} callback         [返回值，参数回调]
       */
      RongIMClient.prototype.clearMessagesUnreadStatus = function (conversationType, targetId, callback) {
        RongIMClient._dataAccessProvider.updateMessages(conversationType, targetId, "readStatus", null, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      RongIMClient.prototype.deleteRemoteMessages = function (conversationType, targetId, delMsgs, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "array", "object"], "deleteRemoteMessages", false, arguments);
        if (delMsgs.length == 0) {
          callback.onError(RongIMLib.ErrorCode.DELETE_MESSAGE_ID_IS_NULL);
          return;
        }
        else if (delMsgs.length > 100) {
          delMsgs.length = 100;
        }
        // 后续增加，去掉注释即可
        callback.onSuccess(true);
        // var modules = new Modules.DeleteMsgInput();
        // modules.setType(conversationType);
        // modules.setConversationId(targetId);
        // modules.setMsgs(delMsgs);
        // RongIMClient.bridge.queryMsg(33, MessageUtil.ArrayForm(modules.toArrayBuffer()), Bridge._client.userId, {
        //     onSuccess: function(info: any) {
        //         callback.onSuccess(true);
        //     },
        //     onError: function(err: any) {
        //         callback.onError(err);
        //     }
        // }, "DeleteMsgOutput");
      };
      /**
       * [deleteMessages 删除消息记录。]
       * @param  {ConversationType}        conversationType [description]
       * @param  {string}                  targetId         [description]
       * @param  {number[]}                messageIds       [description]
       * @param  {ResultCallback<boolean>} callback         [description]
       */
      RongIMClient.prototype.deleteMessages = function (conversationType, targetId, delMsgs, callback) {
        RongIMClient._dataAccessProvider.removeMessage(conversationType, targetId, delMsgs, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      RongIMClient.prototype.sendLocalMessage = function (message, callback) {
        RongIMLib.CheckParam.getInstance().check(["object", "object"], "sendLocalMessage", false, arguments);
        RongIMClient._dataAccessProvider.updateMessage(message);
        this.sendMessage(message.conversationType, message.targetId, message.content, callback);
      };
      /**
       * [sendMessage 发送消息。]
       * @param  {ConversationType}        conversationType [会话类型]
       * @param  {string}                  targetId         [目标Id]
       * @param  {MessageContent}          messageContent   [消息类型]
       * @param  {SendMessageCallback}     sendCallback     []
       * @param  {ResultCallback<Message>} resultCallback   [返回值，函数回调]
       * @param  {string}                  pushContent      []
       * @param  {string}                  pushData         []
       */
      RongIMClient.prototype.sendMessage = function (conversationType, targetId, messageContent, sendCallback, mentiondMsg, pushText, appData, methodType) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "object", "object", "undefined|object|null|global|boolean", "undefined|object|null|global|string", "undefined|object|null|global|string", "undefined|object|null|global|number"], "sendMessage", false, arguments);
        RongIMClient._dataAccessProvider.sendMessage(conversationType, targetId, messageContent, sendCallback, mentiondMsg, pushText, appData, methodType);
      };
      RongIMClient.prototype.sendReceiptResponse = function (conversationType, targetId, sendCallback) {
        RongIMClient._dataAccessProvider.sendReceiptResponse(conversationType, targetId, sendCallback);
      };
      RongIMClient.prototype.sendTypingStatusMessage = function (conversationType, targetId, messageName, sendCallback) {
        RongIMClient._dataAccessProvider.sendTypingStatusMessage(conversationType, targetId, messageName, sendCallback);
      };
      /**
       * [sendStatusMessage description]
       * @param  {MessageContent}          messageContent [description]
       * @param  {SendMessageCallback}     sendCallback   [description]
       * @param  {ResultCallback<Message>} resultCallback [description]
       */
      RongIMClient.prototype.sendStatusMessage = function (messageContent, sendCallback, resultCallback) {
        throw new Error("Not implemented yet");
      };
      /**
       * [sendTextMessage 发送TextMessage快捷方式]
       * @param  {string}                  content        [消息内容]
       * @param  {ResultCallback<Message>} resultCallback [返回值，参数回调]
       */
      RongIMClient.prototype.sendTextMessage = function (conversationType, targetId, content, sendMessageCallback) {
        RongIMClient._dataAccessProvider.sendTextMessage(conversationType, targetId, content, sendMessageCallback);
      };
      RongIMClient.prototype.sendRecallMessage = function (content, sendMessageCallback) {
        RongIMClient._dataAccessProvider.sendRecallMessage(content, sendMessageCallback);
      };
      /**
       * [insertMessage 向本地插入一条消息，不发送到服务器。]
       * @param  {ConversationType}        conversationType [description]
       * @param  {string}                  targetId         [description]
       * @param  {string}                  senderUserId     [description]
       * @param  {MessageContent}          content          [description]
       * @param  {ResultCallback<Message>} callback         [description]
       */
      RongIMClient.prototype.insertMessage = function (conversationType, targetId, senderUserId, content, callback) {
        RongIMClient._dataAccessProvider.addMessage(conversationType, targetId, content, callback);
      };
      /**
       * [getHistoryMessages 拉取历史消息记录。]
       * @param  {ConversationType}          conversationType [会话类型]
       * @param  {string}                    targetId         [用户Id]
       * @param  {number|null}               pullMessageTime  [拉取历史消息起始位置(格式为毫秒数)，可以为null]
       * @param  {number}                    count            [历史消息数量]
       * @param  {ResultCallback<Message[]>} callback         [回调函数]
       * @param  {string}                    objectName       [objectName]
       */
      RongIMClient.prototype.getHistoryMessages = function (conversationType, targetId, timestamp, count, callback, objectname, direction) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "number|null|global|object", "number", "object", "undefined|object|null|global|string", "boolean|null|global|object"], "getHistoryMessages", false, arguments);
        if (count > 20) {
          throw new Error("HistroyMessage count must be less than or equal to 20!");
        }
        if (conversationType.valueOf() < 0) {
          throw new Error("ConversationType must be greater than -1");
        }
        RongIMClient._dataAccessProvider.getHistoryMessages(conversationType, targetId, timestamp, count, callback, objectname, direction);
      };
      RongIMClient.prototype.setMessageContent = function (messageId, content, objectName) {
        RongIMClient._dataAccessProvider.setMessageContent(messageId, content, objectName);
      };
      ;
      /**
       * [getRemoteHistoryMessages 拉取某个时间戳之前的消息]
       * @param  {ConversationType}          conversationType [description]
       * @param  {string}                    targetId         [description]
       * @param  {Date}                      dateTime         [description]
       * @param  {number}                    count            [description]
       * @param  {ResultCallback<Message[]>} callback         [description]
       */
      RongIMClient.prototype.getRemoteHistoryMessages = function (conversationType, targetId, timestamp, count, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "number|null|global|object", "number", "object"], "getRemoteHistoryMessages", false, arguments);
        if (count > 20) {
          callback.onError(RongIMLib.ErrorCode.RC_CONN_PROTO_VERSION_ERROR);
          return;
        }
        if (conversationType.valueOf() < 0) {
          callback.onError(RongIMLib.ErrorCode.RC_CONN_PROTO_VERSION_ERROR);
          return;
        }
        RongIMClient._dataAccessProvider.getRemoteHistoryMessages(conversationType, targetId, timestamp, count, callback);
      };
      /**
       * [hasRemoteUnreadMessages 是否有未接收的消息，jsonp方法]
       * @param  {string}          appkey   [appkey]
       * @param  {string}          token    [token]
       * @param  {ConnectCallback} callback [返回值，参数回调]
       */
      RongIMClient.prototype.hasRemoteUnreadMessages = function (token, callback) {
        RongIMClient._dataAccessProvider.hasRemoteUnreadMessages(token, callback);
      };
      RongIMClient.prototype.getTotalUnreadCount = function (callback, conversationTypes) {
        RongIMClient._dataAccessProvider.getTotalUnreadCount({
          onSuccess: function (count) {
            setTimeout(function () {
              callback.onSuccess(count);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        }, conversationTypes);
      };
      /**
       * [getConversationUnreadCount 指定多种会话类型获取未读消息数]
       * @param  {ResultCallback<number>} callback             [返回值，参数回调。]
       * @param  {ConversationType[]}     ...conversationTypes [会话类型。]
       */
      RongIMClient.prototype.getConversationUnreadCount = function (conversationTypes, callback) {
        RongIMClient._dataAccessProvider.getConversationUnreadCount(conversationTypes, {
          onSuccess: function (count) {
            setTimeout(function () {
              callback.onSuccess(count);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      /**
       * [getUnreadCount 指定用户、会话类型的未读消息总数。]
       * @param  {ConversationType} conversationType [会话类型]
       * @param  {string}           targetId         [用户Id]
       */
      RongIMClient.prototype.getUnreadCount = function (conversationType, targetId, callback) {
        RongIMClient._dataAccessProvider.getUnreadCount(conversationType, targetId, {
          onSuccess: function (count) {
            setTimeout(function () {
              callback.onSuccess(count);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      RongIMClient.prototype.clearUnreadCountByTimestamp = function (conversationType, targetId, timestamp, callback) {
        RongIMClient._dataAccessProvider.clearUnreadCountByTimestamp(conversationType, targetId, timestamp, callback);
      };
      /**
       * 清楚会话未读消息数
       * @param  {ConversationType}        conversationType 会话类型
       * @param  {string}                  targetId         目标Id
       * @param  {ResultCallback<boolean>} callback         返回值，函数回调
       */
      RongIMClient.prototype.clearUnreadCount = function (conversationType, targetId, callback) {
        RongIMClient._dataAccessProvider.clearUnreadCount(conversationType, targetId, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      RongIMClient.prototype.clearLocalStorage = function (callback) {
        RongIMClient._storageProvider.clearItem();
        callback();
      };
      RongIMClient.prototype.setMessageExtra = function (messageId, value, callback) {
        RongIMClient._dataAccessProvider.setMessageExtra(messageId, value, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      RongIMClient.prototype.setMessageReceivedStatus = function (messageUId, receivedStatus, callback) {
        RongIMClient._dataAccessProvider.setMessageReceivedStatus(messageUId, receivedStatus, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      RongIMClient.prototype.setMessageStatus = function (conersationType, targetId, timestamp, status, callback) {
        RongIMClient._dataAccessProvider.setMessageStatus(conersationType, targetId, timestamp, status, callback);
      };
      RongIMClient.prototype.setMessageSentStatus = function (messageId, sentStatus, callback) {
        RongIMClient._dataAccessProvider.setMessageSentStatus(messageId, sentStatus, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      // #endregion Message
      // #region TextMessage Draft
      /**
       * clearTextMessageDraft 清除指定会话和消息类型的草稿。
       * @param  {ConversationType}        conversationType 会话类型
       * @param  {string}                  targetId         目标Id
       */
      RongIMClient.prototype.clearTextMessageDraft = function (conversationType, targetId) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "clearTextMessageDraft", false, arguments);
        var key = "darf_" + conversationType + "_" + targetId;
        delete RongIMClient._memoryStore[key];
        return true;
      };
      /**
       * [getTextMessageDraft 获取指定消息和会话的草稿。]
       * @param  {ConversationType}       conversationType [会话类型]
       * @param  {string}                 targetId         [目标Id]
       */
      RongIMClient.prototype.getTextMessageDraft = function (conversationType, targetId) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "getTextMessageDraft", false, arguments);
        if (targetId == "" || conversationType < 0) {
          throw new Error("params error : " + RongIMLib.ErrorCode.DRAF_GET_ERROR);
        }
        var key = "darf_" + conversationType + "_" + targetId;
        return RongIMClient._memoryStore[key];
      };
      /**
       * [saveTextMessageDraft description]
       * @param  {ConversationType}        conversationType [会话类型]
       * @param  {string}                  targetId         [目标Id]
       * @param  {string}                  value            [草稿值]
       */
      RongIMClient.prototype.saveTextMessageDraft = function (conversationType, targetId, value) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "string", "object"], "saveTextMessageDraft", false, arguments);
        var key = "darf_" + conversationType + "_" + targetId;
        RongIMClient._memoryStore[key] = value;
        return true;
      };
      // #endregion TextMessage Draft
      // #region Conversation
      RongIMClient.prototype.searchConversationByContent = function (keyword, callback, conversationTypes) {
        RongIMClient._dataAccessProvider.searchConversationByContent(keyword, callback, conversationTypes);
      };
      RongIMClient.prototype.searchMessageByContent = function (conversationType, targetId, keyword, timestamp, count, total, callback) {
        RongIMClient._dataAccessProvider.searchMessageByContent(conversationType, targetId, keyword, timestamp, count, total, callback);
      };
      RongIMClient.prototype.clearConversations = function (callback) {
        var conversationTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          conversationTypes[_i - 1] = arguments[_i];
        }
        if (conversationTypes.length == 0) {
          conversationTypes = [RongIMLib.ConversationType.CHATROOM,
          RongIMLib.ConversationType.CUSTOMER_SERVICE,
          RongIMLib.ConversationType.DISCUSSION,
          RongIMLib.ConversationType.GROUP,
          RongIMLib.ConversationType.PRIVATE,
          RongIMLib.ConversationType.SYSTEM,
          RongIMLib.ConversationType.PUBLIC_SERVICE,
          RongIMLib.ConversationType.APP_PUBLIC_SERVICE];
        }
        RongIMClient._dataAccessProvider.clearConversations(conversationTypes, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      /**
       * [getConversation 获取指定会话，此方法需在getConversationList之后执行]
       * @param  {ConversationType}             conversationType [会话类型]
       * @param  {string}                       targetId         [目标Id]
       * @param  {ResultCallback<Conversation>} callback         [返回值，函数回调]
       */
      RongIMClient.prototype.getConversation = function (conversationType, targetId, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "getConversation", false, arguments);
        RongIMClient._dataAccessProvider.getConversation(conversationType, targetId, {
          onSuccess: function (conver) {
            setTimeout(function () {
              callback.onSuccess(conver);
            });
          },
          onError: function (error) {
            setTimeout(function () {
              callback.onError(error);
            });
          }
        });
      };
      /**
       * [pottingConversation 组装会话列表]
       * @param {any} tempConver [临时会话]
       * conver_conversationType_targetId_no.
       * msg_conversationType_targetId_no.
       */
      RongIMClient.prototype.pottingConversation = function (tempConver) {
        var self = this, isUseReplace = false;
        RongIMClient._dataAccessProvider.getConversation(tempConver.type, tempConver.userId, {
          onSuccess: function (conver) {
            if (!conver) {
              conver = new RongIMLib.Conversation();
            }
            else {
              isUseReplace = true;
            }
            conver.conversationType = tempConver.type;
            conver.targetId = tempConver.userId;
            conver.latestMessage = RongIMLib.MessageUtil.messageParser(tempConver.msg);
            conver.latestMessageId = conver.latestMessage.messageId;
            conver.objectName = conver.latestMessage.objectName;
            conver.receivedStatus = conver.latestMessage.receivedStatus;
            conver.receivedTime = conver.latestMessage.receiveTime;
            conver.sentStatus = conver.latestMessage.sentStatus;
            conver.sentTime = conver.latestMessage.sentTime;
            var mentioneds = RongIMClient._storageProvider.getItem("mentioneds_" + RongIMLib.Bridge._client.userId + '_' + conver.conversationType + '_' + conver.targetId);
            if (mentioneds) {
              var info = JSON.parse(mentioneds);
              conver.mentionedMsg = info[tempConver.type + "_" + tempConver.userId];
            }
            if (!isUseReplace) {
              if (RongIMLib.MessageUtil.supportLargeStorage()) {
                var count = RongIMClient._storageProvider.getItem("cu" + RongIMLib.Bridge._client.userId + tempConver.type + tempConver.userId);
                conver.unreadMessageCount = Number(count);
              }
              else {
                conver.unreadMessageCount = 0;
              }
            }
            // if (conver.conversationType == ConversationType.PRIVATE) {
            //     self.getUserInfo(tempConver.userId, <ResultCallback<UserInfo>>{
            //         onSuccess: function(info: UserInfo) {
            //             conver.conversationTitle = info.name;
            //             conver.senderUserName = info.name;
            //             conver.senderUserId = info.userId;
            //             conver.senderPortraitUri = info.portraitUri;
            //         },
            //         onError: function(error: ErrorCode) { }
            //     });
            // } else
            if (conver.conversationType == RongIMLib.ConversationType.DISCUSSION) {
              self.getDiscussion(tempConver.userId, {
                onSuccess: function (info) {
                  conver.conversationTitle = info.name;
                },
                onError: function (error) { }
              });
            }
            RongIMClient._dataAccessProvider.addConversation(conver, { onSuccess: function (data) { } });
          },
          onError: function (error) { }
        });
      };
      RongIMClient.prototype.sortConversationList = function (conversationList) {
        var convers = [];
        for (var i = 0, len = conversationList.length; i < len; i++) {
          if (!conversationList[i]) {
            continue;
          }
          if (conversationList[i].isTop) {
            convers.push(conversationList[i]);
            conversationList.splice(i, 1);
            continue;
          }
          for (var j = 0; j < len - i - 1; j++) {
            if (conversationList[j].sentTime < conversationList[j + 1].sentTime) {
              var swap = conversationList[j];
              conversationList[j] = conversationList[j + 1];
              conversationList[j + 1] = swap;
            }
          }
        }
        return RongIMClient._memoryStore.conversationList = convers.concat(conversationList);
      };
      RongIMClient.prototype.getConversationList = function (callback, conversationTypes, count, isGetHiddenConvers) {
        RongIMLib.CheckParam.getInstance().check(["object", "null|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getConversationList", false, arguments);
        var me = this;
        RongIMClient._dataAccessProvider.getConversationList({
          onSuccess: function (data) {
            if (conversationTypes || RongIMClient._dataAccessProvider) {
              setTimeout(function () {
                callback.onSuccess(data);
              });
            }
            else {
              setTimeout(function () {
                callback.onSuccess(RongIMClient._memoryStore.conversationList);
              });
            }
          },
          onError: function (error) {
            if (error === RongIMLib.ErrorCode.TIMEOUT) {
              callback.onError(error);
            }
            else {
              callback.onSuccess([]);
            }
          }
        }, conversationTypes, count, isGetHiddenConvers);
      };
      RongIMClient.prototype.getRemoteConversationList = function (callback, conversationTypes, count, isGetHiddenConvers) {
        RongIMLib.CheckParam.getInstance().check(["object", "null|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getRemoteConversationList", false, arguments);
        RongIMClient._dataAccessProvider.getRemoteConversationList(callback, conversationTypes, count, isGetHiddenConvers);
      };
      RongIMClient.prototype.updateConversation = function (conversation) {
        return RongIMClient._dataAccessProvider.updateConversation(conversation);
      };
      /**
       * [createConversation 创建会话。]
       * @param  {number}  conversationType [会话类型]
       * @param  {string}  targetId         [目标Id]
       * @param  {string}  converTitle      [会话标题]
       * @param  {boolean} islocal          [是否同步到服务器，ture：同步，false:不同步]
       */
      RongIMClient.prototype.createConversation = function (conversationType, targetId, converTitle) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "string"], "createConversation", false, arguments);
        var conver = new RongIMLib.Conversation();
        conver.targetId = targetId;
        conver.conversationType = conversationType;
        conver.conversationTitle = converTitle;
        conver.latestMessage = {};
        conver.unreadMessageCount = 0;
        return conver;
      };
      //TODO 删除本地和服务器、删除本地和服务器分开
      RongIMClient.prototype.removeConversation = function (conversationType, targetId, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "removeConversation", false, arguments);
        RongIMClient._dataAccessProvider.removeConversation(conversationType, targetId, callback);
      };
      RongIMClient.prototype.setConversationHidden = function (conversationType, targetId, isHidden) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "boolean"], "setConversationHidden", false, arguments);
        RongIMClient._dataAccessProvider.setConversationHidden(conversationType, targetId, isHidden);
      };
      RongIMClient.prototype.setConversationToTop = function (conversationType, targetId, isTop, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "boolean", "object"], "setConversationToTop", false, arguments);
        RongIMClient._dataAccessProvider.setConversationToTop(conversationType, targetId, isTop, {
          onSuccess: function (bool) {
            setTimeout(function () {
              callback.onSuccess(bool);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        });
      };
      // #endregion Conversation
      // #region Notifications
      /**
       * [getConversationNotificationStatus 获取指定用户和会话类型免提醒。]
       * @param  {ConversationType}                               conversationType [会话类型]
       * @param  {string}                                         targetId         [目标Id]
       * @param  {ResultCallback<ConversationNotificationStatus>} callback         [返回值，函数回调]
       */
      RongIMClient.prototype.getConversationNotificationStatus = function (conversationType, targetId, callback) {
        throw new Error("Not implemented yet");
      };
      /**
       * [setConversationNotificationStatus 设置指定用户和会话类型免提醒。]
       * @param  {ConversationType}                               conversationType [会话类型]
       * @param  {string}                                         targetId         [目标Id]
       * @param  {ResultCallback<ConversationNotificationStatus>} callback         [返回值，函数回调]
       */
      RongIMClient.prototype.setConversationNotificationStatus = function (conversationType, targetId, notificationStatus, callback) {
        throw new Error("Not implemented yet");
      };
      /**
       * [getNotificationQuietHours 获取免提醒消息时间。]
       * @param  {GetNotificationQuietHoursCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.getNotificationQuietHours = function (callback) {
        throw new Error("Not implemented yet");
      };
      /**
       * [removeNotificationQuietHours 移除免提醒消息时间。]
       * @param  {GetNotificationQuietHoursCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.removeNotificationQuietHours = function (callback) {
        throw new Error("Not implemented yet");
      };
      /**
       * [setNotificationQuietHours 设置免提醒消息时间。]
       * @param  {GetNotificationQuietHoursCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.setNotificationQuietHours = function (startTime, spanMinutes, callback) {
        throw new Error("Not implemented yet");
      };
      // #endregion Notifications
      // #region Discussion
      /**
       * [addMemberToDiscussion   加入讨论组]
       * @param  {string}            discussionId [讨论组Id]
       * @param  {string[]}          userIdList   [讨论中成员]
       * @param  {OperationCallback} callback     [返回值，函数回调]
       */
      RongIMClient.prototype.addMemberToDiscussion = function (discussionId, userIdList, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "array", "object"], "addMemberToDiscussion", false, arguments);
        RongIMClient._dataAccessProvider.addMemberToDiscussion(discussionId, userIdList, callback);
      };
      /**
       * [createDiscussion 创建讨论组]
       * @param  {string}                   name       [讨论组名称]
       * @param  {string[]}                 userIdList [讨论组成员]
       * @param  {CreateDiscussionCallback} callback   [返回值，函数回调]
       */
      RongIMClient.prototype.createDiscussion = function (name, userIdList, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "array", "object"], "createDiscussion", false, arguments);
        RongIMClient._dataAccessProvider.createDiscussion(name, userIdList, callback);
      };
      /**
       * [getDiscussion 获取讨论组信息]
       * @param  {string}                     discussionId [讨论组Id]
       * @param  {ResultCallback<Discussion>} callback     [返回值，函数回调]
       */
      RongIMClient.prototype.getDiscussion = function (discussionId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "getDiscussion", false, arguments);
        RongIMClient._dataAccessProvider.getDiscussion(discussionId, callback);
      };
      /**
       * [quitDiscussion 退出讨论组]
       * @param  {string}            discussionId [讨论组Id]
       * @param  {OperationCallback} callback     [返回值，函数回调]
       */
      RongIMClient.prototype.quitDiscussion = function (discussionId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "quitDiscussion", false, arguments);
        RongIMClient._dataAccessProvider.quitDiscussion(discussionId, callback);
      };
      /**
       * [removeMemberFromDiscussion 将指定成员移除讨论租]
       * @param  {string}            discussionId [讨论组Id]
       * @param  {string}            userId       [被移除的用户Id]
       * @param  {OperationCallback} callback     [返回值，参数回调]
       */
      RongIMClient.prototype.removeMemberFromDiscussion = function (discussionId, userId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "string", "object"], "removeMemberFromDiscussion", false, arguments);
        RongIMClient._dataAccessProvider.removeMemberFromDiscussion(discussionId, userId, callback);
      };
      /**
       * [setDiscussionInviteStatus 设置讨论组邀请状态]
       * @param  {string}                 discussionId [讨论组Id]
       * @param  {DiscussionInviteStatus} status       [邀请状态]
       * @param  {OperationCallback}      callback     [返回值，函数回调]
       */
      RongIMClient.prototype.setDiscussionInviteStatus = function (discussionId, status, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "number", "object"], "setDiscussionInviteStatus", false, arguments);
        RongIMClient._dataAccessProvider.setDiscussionInviteStatus(discussionId, status, callback);
      };
      /**
       * [setDiscussionName 设置讨论组名称]
       * @param  {string}            discussionId [讨论组Id]
       * @param  {string}            name         [讨论组名称]
       * @param  {OperationCallback} callback     [返回值，函数回调]
       */
      RongIMClient.prototype.setDiscussionName = function (discussionId, name, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "string", "object"], "setDiscussionName", false, arguments);
        RongIMClient._dataAccessProvider.setDiscussionName(discussionId, name, callback);
      };
      // #endregion Discussion
      // #region Group
      /**
       * [加入群组]
       * @param  {string}            groupId   [群组Id]
       * @param  {string}            groupName [群组名称]
       * @param  {OperationCallback} callback  [返回值，函数回调]
       */
      RongIMClient.prototype.joinGroup = function (groupId, groupName, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "string", "object"], "joinGroup", false, arguments);
        RongIMClient._dataAccessProvider.joinGroup(groupId, groupName, callback);
      };
      /**
       * [退出群组]
       * @param  {string}            groupId  [群组Id]
       * @param  {OperationCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.quitGroup = function (groupId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "quitGroup", false, arguments);
        RongIMClient._dataAccessProvider.quitGroup(groupId, callback);
      };
      /**
       * [同步群组信息]
       * @param  {Array<Group>}      groups   [群组列表]
       * @param  {OperationCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.syncGroup = function (groups, callback) {
        RongIMLib.CheckParam.getInstance().check(["array", "object"], "syncGroup", false, arguments);
        RongIMClient._dataAccessProvider.syncGroup(groups, callback);
      };
      // #endregion Group
      // #region ChatRoom
      /**
       * [加入聊天室。]
       * @param  {string}            chatroomId   [聊天室Id]
       * @param  {number}            messageCount [拉取消息数量，-1为不拉去消息]
       * @param  {OperationCallback} callback     [返回值，函数回调]
       */
      RongIMClient.prototype.joinChatRoom = function (chatroomId, messageCount, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "number", "object"], "joinChatRoom", false, arguments);
        if (chatroomId == "") {
          setTimeout(function () {
            callback.onError(RongIMLib.ErrorCode.CHATROOM_ID_ISNULL);
          });
          return;
        }
        RongIMClient._dataAccessProvider.joinChatRoom(chatroomId, messageCount, callback);
      };
      RongIMClient.prototype.setChatroomHisMessageTimestamp = function (chatRoomId, timestamp) {
        RongIMLib.CheckParam.getInstance().check(["string", "number"], "setChatroomHisMessageTimestamp", false, arguments);
        RongIMClient._dataAccessProvider.setChatroomHisMessageTimestamp(chatRoomId, timestamp);
      };
      RongIMClient.prototype.getChatRoomHistoryMessages = function (chatRoomId, count, order, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "number", "number", "object"], "getChatRoomHistoryMessages", false, arguments);
        RongIMClient._dataAccessProvider.getChatRoomHistoryMessages(chatRoomId, count, order, callback);
      };
      RongIMClient.prototype.getChatRoomInfo = function (chatRoomId, count, order, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "number", "number", "object"], "getChatRoomInfo", false, arguments);
        RongIMClient._dataAccessProvider.getChatRoomInfo(chatRoomId, count, order, callback);
      };
      /**
       * [退出聊天室]
       * @param  {string}            chatroomId [聊天室Id]
       * @param  {OperationCallback} callback   [返回值，函数回调]
       */
      RongIMClient.prototype.quitChatRoom = function (chatroomId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "quitChatRoom", false, arguments);
        RongIMClient._dataAccessProvider.quitChatRoom(chatroomId, callback);
      };
      // #endregion ChatRoom
      // #region Public Service
      RongIMClient.prototype.getRemotePublicServiceList = function (callback, pullMessageTime) {
        if (RongIMClient._memoryStore.depend.openMp) {
          var modules = new Modules.PullMpInput(), self = this;
          if (!pullMessageTime) {
            modules.setTime(0);
          }
          else {
            modules.setTime(pullMessageTime);
          }
          modules.setMpid("");
          RongIMClient.bridge.queryMsg(28, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
            onSuccess: function (data) {
              //TODO 找出最大时间
              // self.lastReadTime.set(conversationType + targetId, MessageUtil.int64ToTimestamp(data.syncTime));
              RongIMClient._memoryStore.publicServiceMap.publicServiceList.length = 0;
              RongIMClient._memoryStore.publicServiceMap.publicServiceList = data;
              callback.onSuccess(data);
            },
            onError: function () { }
          }, "PullMpOutput");
        }
      };
      /**
       * [getPublicServiceList ]获取本地的公共账号列表
       * @param  {ResultCallback<PublicServiceProfile[]>} callback [返回值，参数回调]
       */
      RongIMClient.prototype.getPublicServiceList = function (callback) {
        if (RongIMClient._memoryStore.depend.openMp) {
          RongIMLib.CheckParam.getInstance().check(["object"], "getPublicServiceList", false, arguments);
          this.getRemotePublicServiceList(callback);
        }
      };
      /**
       * [getPublicServiceProfile ]   获取某公共服务信息。
       * @param  {PublicServiceType}                    publicServiceType [公众服务类型。]
       * @param  {string}                               publicServiceId   [公共服务 Id。]
       * @param  {ResultCallback<PublicServiceProfile>} callback          [公共账号信息回调。]
       */
      RongIMClient.prototype.getPublicServiceProfile = function (publicServiceType, publicServiceId, callback) {
        if (RongIMClient._memoryStore.depend.openMp) {
          RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "getPublicServiceProfile", false, arguments);
          var profile = RongIMClient._memoryStore.publicServiceMap.get(publicServiceType, publicServiceId);
          callback.onSuccess(profile);
        }
      };
      /**
       * [pottingPublicSearchType ] 公众好查询类型
       * @param  {number} bussinessType [ 0-all 1-mp 2-mc]
       * @param  {number} searchType    [0-exact 1-fuzzy]
       */
      RongIMClient.prototype.pottingPublicSearchType = function (bussinessType, searchType) {
        if (RongIMClient._memoryStore.depend.openMp) {
          var bits = 0;
          if (bussinessType == 0) {
            bits |= 3;
            if (searchType == 0) {
              bits |= 12;
            }
            else {
              bits |= 48;
            }
          }
          else if (bussinessType == 1) {
            bits |= 1;
            if (searchType == 0) {
              bits |= 8;
            }
            else {
              bits |= 32;
            }
          }
          else {
            bits |= 2;
            if (bussinessType == 0) {
              bits |= 4;
            }
            else {
              bits |= 16;
            }
          }
          return bits;
        }
      };
      /**
       * [searchPublicService ]按公众服务类型搜索公众服务。
       * @param  {SearchType}                             searchType [搜索类型枚举。]
       * @param  {string}                                 keywords   [搜索关键字。]
       * @param  {ResultCallback<PublicServiceProfile[]>} callback   [搜索结果回调。]
       */
      RongIMClient.prototype.searchPublicService = function (searchType, keywords, callback) {
        if (RongIMClient._memoryStore.depend.openMp) {
          RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "searchPublicService", false, arguments);
          var modules = new Modules.SearchMpInput();
          modules.setType(this.pottingPublicSearchType(0, searchType));
          modules.setId(keywords);
          RongIMClient.bridge.queryMsg(29, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, callback, "SearchMpOutput");
        }
      };
      /**
       * [searchPublicServiceByType ]按公众服务类型搜索公众服务。
       * @param  {PublicServiceType}                      publicServiceType [公众服务类型。]
       * @param  {SearchType}                             searchType        [搜索类型枚举。]
       * @param  {string}                                 keywords          [搜索关键字。]
       * @param  {ResultCallback<PublicServiceProfile[]>} callback          [搜索结果回调。]
       */
      RongIMClient.prototype.searchPublicServiceByType = function (publicServiceType, searchType, keywords, callback) {
        if (RongIMClient._memoryStore.depend.openMp) {
          RongIMLib.CheckParam.getInstance().check(["number", "number", "string", "object"], "searchPublicServiceByType", false, arguments);
          var type = publicServiceType == RongIMLib.ConversationType.APP_PUBLIC_SERVICE ? 2 : 1;
          var modules = new Modules.SearchMpInput();
          modules.setType(this.pottingPublicSearchType(type, searchType));
          modules.setId(keywords);
          RongIMClient.bridge.queryMsg(29, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, callback, "SearchMpOutput");
        }
      };
      /**
       * [subscribePublicService ] 订阅公众号。
       * @param  {PublicServiceType} publicServiceType [公众服务类型。]
       * @param  {string}            publicServiceId   [公共服务 Id。]
       * @param  {OperationCallback} callback          [订阅公众号回调。]
       */
      RongIMClient.prototype.subscribePublicService = function (publicServiceType, publicServiceId, callback) {
        if (RongIMClient._memoryStore.depend.openMp) {
          RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "subscribePublicService", false, arguments);
          var modules = new Modules.MPFollowInput(), me = this, follow = publicServiceType == RongIMLib.ConversationType.APP_PUBLIC_SERVICE ? "mcFollow" : "mpFollow";
          modules.setId(publicServiceId);
          RongIMClient.bridge.queryMsg(follow, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
            onSuccess: function () {
              me.getRemotePublicServiceList({
                onSuccess: function () { },
                onError: function () { }
              });
              callback.onSuccess();
            },
            onError: function (code) {
              callback.onError(code);
            }
          }, "MPFollowOutput");
        }
      };
      /**
       * [unsubscribePublicService ] 取消订阅公众号。
       * @param  {PublicServiceType} publicServiceType [公众服务类型。]
       * @param  {string}            publicServiceId   [公共服务 Id。]
       * @param  {OperationCallback} callback          [取消订阅公众号回调。]
       */
      RongIMClient.prototype.unsubscribePublicService = function (publicServiceType, publicServiceId, callback) {
        if (RongIMClient._memoryStore.depend.openMp) {
          RongIMLib.CheckParam.getInstance().check(["number", "string", "object"], "unsubscribePublicService", false, arguments);
          var modules = new Modules.MPFollowInput(), me = this, follow = publicServiceType == RongIMLib.ConversationType.APP_PUBLIC_SERVICE ? "mcUnFollow" : "mpUnFollow";
          modules.setId(publicServiceId);
          RongIMClient.bridge.queryMsg(follow, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
            onSuccess: function () {
              RongIMClient._memoryStore.publicServiceMap.remove(publicServiceType, publicServiceId);
              callback.onSuccess();
            },
            onError: function (code) {
              callback.onError(code);
            }
          }, "MPFollowOutput");
        }
      };
      // #endregion Public Service
      // #region Blacklist
      /**
       * [加入黑名单]
       * @param  {string}            userId   [将被加入黑名单的用户Id]
       * @param  {OperationCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.addToBlacklist = function (userId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "addToBlacklist", false, arguments);
        RongIMClient._dataAccessProvider.addToBlacklist(userId, callback);
      };
      /**
       * [获取黑名单列表]
       * @param  {GetBlacklistCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.getBlacklist = function (callback) {
        RongIMLib.CheckParam.getInstance().check(["object"], "getBlacklist", false, arguments);
        RongIMClient._dataAccessProvider.getBlacklist(callback);
      };
      /**
       * [得到指定人员再黑名单中的状态]
       * @param  {string}                          userId   [description]
       * @param  {ResultCallback<BlacklistStatus>} callback [返回值，函数回调]
       */
      //TODO 如果人员不在黑名单中，获取状态会出现异常
      RongIMClient.prototype.getBlacklistStatus = function (userId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "getBlacklistStatus", false, arguments);
        RongIMClient._dataAccessProvider.getBlacklistStatus(userId, callback);
      };
      /**
       * [将指定用户移除黑名单]
       * @param  {string}            userId   [将被移除的用户Id]
       * @param  {OperationCallback} callback [返回值，函数回调]
       */
      RongIMClient.prototype.removeFromBlacklist = function (userId, callback) {
        RongIMLib.CheckParam.getInstance().check(["string", "object"], "removeFromBlacklist", false, arguments);
        RongIMClient._dataAccessProvider.removeFromBlacklist(userId, callback);
      };
      RongIMClient.prototype.getFileToken = function (fileType, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "object"], "getQnTkn", false, arguments);
        RongIMClient._dataAccessProvider.getFileToken(fileType, callback);
      };
      RongIMClient.prototype.getFileUrl = function (fileType, fileName, oriName, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "string|global|object|null", "object"], "getQnTkn", false, arguments);
        RongIMClient._dataAccessProvider.getFileUrl(fileType, fileName, oriName, callback);
      };
      ;
      // #endregion Blacklist
      // #region Real-time Location Service
      RongIMClient.prototype.addRealTimeLocationListener = function (conversationType, targetId, listener) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.getRealTimeLocation = function (conversationType, targetId) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.getRealTimeLocationCurrentState = function (conversationType, targetId) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.getRealTimeLocationParticipants = function (conversationType, targetId) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.joinRealTimeLocation = function (conversationType, targetId) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.quitRealTimeLocation = function (conversationType, targetId) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.startRealTimeLocation = function (conversationType, targetId) {
        throw new Error("Not implemented yet");
      };
      RongIMClient.prototype.updateRealTimeLocationStatus = function (conversationType, targetId, latitude, longitude) {
        throw new Error("Not implemented yet");
      };
      // #endregion Real-time Location Service
      // # startVoIP
      RongIMClient.prototype.startCall = function (converType, targetId, userIds, mediaType, extra, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "array", "number", "string", "object"], "startCall", false, arguments);
        if (RongIMClient._memoryStore.voipStategy) {
          RongIMClient._voipProvider.startCall(converType, targetId, userIds, mediaType, extra, callback);
        }
        else {
          callback.onError(RongIMLib.ErrorCode.VOIP_NOT_AVALIABLE);
        }
      };
      RongIMClient.prototype.joinCall = function (mediaType, callback) {
        RongIMLib.CheckParam.getInstance().check(['number', 'object'], "joinCall", false, arguments);
        if (RongIMClient._memoryStore.voipStategy) {
          RongIMClient._voipProvider.joinCall(mediaType, callback);
        }
        else {
          callback.onError(RongIMLib.ErrorCode.VOIP_NOT_AVALIABLE);
        }
      };
      RongIMClient.prototype.hungupCall = function (converType, targetId, reason) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "number"], "hungupCall", false, arguments);
        if (RongIMClient._memoryStore.voipStategy) {
          RongIMClient._voipProvider.hungupCall(converType, targetId, reason);
        }
      };
      RongIMClient.prototype.changeMediaType = function (converType, targetId, mediaType, callback) {
        RongIMLib.CheckParam.getInstance().check(["number", "string", "number", "object"], "changeMediaType", false, arguments);
        if (RongIMClient._memoryStore.voipStategy) {
          RongIMClient._voipProvider.changeMediaType(converType, targetId, mediaType, callback);
        }
        else {
          callback.onError(RongIMLib.ErrorCode.VOIP_NOT_AVALIABLE);
        }
      };
      // # endVoIP
      RongIMClient.prototype.getUnreadMentionedMessages = function (conversationType, targetId) {
        return RongIMClient._dataAccessProvider.getUnreadMentionedMessages(conversationType, targetId);
      };
      RongIMClient.prototype.clearListeners = function () {
        RongIMClient._dataAccessProvider.clearListeners();
      };
      // UserStatus start
      RongIMClient.prototype.getUserStatus = function (userId, callback) {
        RongIMClient._dataAccessProvider.getUserStatus(userId, callback);
      };
      RongIMClient.prototype.setUserStatus = function (status, callback) {
        RongIMClient._dataAccessProvider.setUserStatus(status, callback);
      };
      RongIMClient.prototype.subscribeUserStatus = function (userIds, callback) {
        RongIMClient._dataAccessProvider.subscribeUserStatus(userIds, callback);
      };
      RongIMClient.prototype.setOnReceiveStatusListener = function (callback) {
        RongIMClient._dataAccessProvider.setOnReceiveStatusListener(callback);
      };
      RongIMClient.MessageType = {};
      RongIMClient.RegisterMessage = {};
      RongIMClient._memoryStore = { listenerList: [] };
      RongIMClient.isNotPullMsg = false;
      return RongIMClient;
    }());
    RongIMLib.RongIMClient = RongIMClient;


    // //兼容AMD CMD
    // if ("function" === typeof require && "object" === typeof module && module && module.id && "object" === typeof exports && exports) {
    //     module.exports = RongIMLib;
    // }
    // else if ("function" === typeof define && define.amd) {
    //     var browser = navigator.appName, b_version = navigator.appVersion, version = b_version.split(";"), isPolling = false;
    //     if (version.length > 1) {
    //         var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
    //         if (trim_Version < 10) {
    //             isPolling = true;
    //         }
    //     }
    //     if (isPolling) {
    //         define("RongIMLib", ['md5'], function () {
    //             return RongIMLib;
    //         });
    //     }
    //     else {
    //         // var lurl: string = RongIMClient._memoryStore.depend.long;
    //         // var burl: string = RongIMClient._memoryStore.depend.byteBuffer;
    //         // var purl: string = RongIMClient._memoryStore.depend.protobuf;
    //         define("RongIMLib", ['md5'], function () {
    //             return RongIMLib;
    //         });
    //     }
    // }
    // else {
    //     window.RongIMClient = RongIMClient;
    // }
  })(RongIMLib);
  //用于连接通道


  // var RongIMLib;
  (function (RongIMLib) {
    (function (Qos) {
      Qos[Qos["AT_MOST_ONCE"] = 0] = "AT_MOST_ONCE";
      Qos[Qos["AT_LEAST_ONCE"] = 1] = "AT_LEAST_ONCE";
      Qos[Qos["EXACTLY_ONCE"] = 2] = "EXACTLY_ONCE";
      Qos[Qos["DEFAULT"] = 3] = "DEFAULT";
    })(RongIMLib.Qos || (RongIMLib.Qos = {}));
    var Qos = RongIMLib.Qos;
    (function (Type) {
      Type[Type["CONNECT"] = 1] = "CONNECT";
      Type[Type["CONNACK"] = 2] = "CONNACK";
      Type[Type["PUBLISH"] = 3] = "PUBLISH";
      Type[Type["PUBACK"] = 4] = "PUBACK";
      Type[Type["QUERY"] = 5] = "QUERY";
      Type[Type["QUERYACK"] = 6] = "QUERYACK";
      Type[Type["QUERYCON"] = 7] = "QUERYCON";
      Type[Type["SUBSCRIBE"] = 8] = "SUBSCRIBE";
      Type[Type["SUBACK"] = 9] = "SUBACK";
      Type[Type["UNSUBSCRIBE"] = 10] = "UNSUBSCRIBE";
      Type[Type["UNSUBACK"] = 11] = "UNSUBACK";
      Type[Type["PINGREQ"] = 12] = "PINGREQ";
      Type[Type["PINGRESP"] = 13] = "PINGRESP";
      Type[Type["DISCONNECT"] = 14] = "DISCONNECT";
    })(RongIMLib.Type || (RongIMLib.Type = {}));
    var Type = RongIMLib.Type;
    var _topic = ["invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz",
      ["", "ppMsgP", "pdMsgP", "pgMsgP", "chatMsg", "pcMsgP", "", "pmcMsgN", "pmpMsgN"], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm",
      "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation", "pullMp", "schMp", "qnTkn", "qnUrl", "qryVoipK", "delMsg", "qryCHMsg"];
    var Channel = (function () {
      function Channel(address, cb, self) {
        this.connectionStatus = -1;
        this.delOnChangedCount = 0;
        //this.url = address.host + "/websocket?appId=" + self.appId + "&token=" + encodeURIComponent(self.token) + "&sdkVer=" + self.sdkVer + "&apiVer=" + self.apiVer;
        var cmp = RongIMLib.RongIMClient._memoryStore.depend.cmp;
        this.url = cmp + "/websocket?appId=" + self.appId + "&token=" + encodeURIComponent(self.token) + "&sdkVer=" + self.sdkVer + "&apiVer=" + self.apiVer;
        this.self = self;
        this.socket = Socket.getInstance().createServer();
        this.socket.connect(this.url, cb);
        //注册状态改变观察者
        if (typeof Channel._ConnectionStatusListener == "object" && "onChanged" in Channel._ConnectionStatusListener) {
          var me = this;
          me.socket.on("StatusChanged", function (code) {
            me.connectionStatus = code;
            if (code === RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE) {
              var temp = RongIMLib.RongIMClient._storageProvider.getItemKey("navi");
              var naviServer = RongIMLib.RongIMClient._storageProvider.getItem(temp);
              var naviPort = naviServer.split(",")[0].split(":")[1];
              naviPort && naviPort.length < 4 || RongIMLib.RongIMClient._storageProvider.setItem("rongSDK", "");
              // TODO  判断拆分 naviServer 后的数组长度。
              if (!RongIMLib.RongIMClient._memoryStore.depend.isPolling && naviPort && naviPort.length < 4) {
                Bridge._client.handler.connectCallback.pauseTimer();
                var temp = RongIMLib.RongIMClient._storageProvider.getItemKey("navi");
                var server = RongIMLib.RongIMClient._storageProvider.getItem("RongBackupServer");
                if (server) {
                  var arrs = server.split(",");
                  if (arrs.length < 2) {
                    throw new Error("navi server is empty,postion:StatusChanged");
                  }
                  RongIMLib.RongIMClient._storageProvider.setItem(temp, RongIMLib.RongIMClient._storageProvider.getItem("RongBackupServer"));
                  var url = RongIMLib.Bridge._client.channel.socket.currentURL;
                  Bridge._client.channel.socket.currentURL = arrs[0] + url.substring(url.indexOf("/"), url.length);
                  if (Bridge._client.channel && Bridge._client.channel.connectionStatus != RongIMLib.ConnectionStatus.CONNECTED && Bridge._client.channel.connectionStatus != RongIMLib.ConnectionStatus.CONNECTING) {
                    RongIMLib.RongIMClient.connect(RongIMLib.RongIMClient._memoryStore.token, RongIMLib.RongIMClient._memoryStore.callback);
                  }
                }
              }
            }
            if (code === RongIMLib.ConnectionStatus.DISCONNECTED && !RongIMLib.RongIMClient._memoryStore.otherDevice) {
              Channel._ConnectionStatusListener.onChanged(RongIMLib.ConnectionStatus.DISCONNECTED);
              self.clearHeartbeat();
              return;
            }
            else if (code === RongIMLib.ConnectionStatus.DISCONNECTED && RongIMLib.RongIMClient._memoryStore.otherDevice) {
              return;
            }
            Channel._ConnectionStatusListener.onChanged(code);
            if (RongIMLib.RongIMClient._memoryStore.otherDevice) {
              if (me.delOnChangedCount > 5) {
                delete Channel._ConnectionStatusListener["onChanged"];
              }
              me.delOnChangedCount++;
            }
          });
        }
        else {
          throw new Error("setConnectStatusListener:Parameter format is incorrect");
        }
        //注册message观察者
        this.socket.on("message", self.handler.handleMessage);
        //注册断开连接观察者
        this.socket.on("disconnect", function (status) {
          self.channel.socket.fire("StatusChanged", status ? status : 2);
        });
      }
      Channel.prototype.writeAndFlush = function (val) {
        this.socket.send(val);
      };
      Channel.prototype.reconnect = function (callback) {
        RongIMLib.MessageIdHandler.clearMessageId();
        this.socket = this.socket.reconnect();
        if (callback) {
          this.self.reconnectObj = callback;
        }
      };
      Channel.prototype.disconnect = function (status) {
        this.socket.disconnect(status);
      };
      return Channel;
    }());
    RongIMLib.Channel = Channel;

    var Socket = (function () {
      function Socket() {
        this.socket = null;
        this._events = {};
      }
      Socket.getInstance = function () {
        return new Socket();
      };
      Socket.prototype.connect = function (url, cb) {
        if (this.socket) {
          if (url) {
            RongIMLib.RongIMClient._storageProvider.setItem("rongSDK", this.checkTransport());
            this.on("connect", cb || new Function);
          }
          if (url) {
            this.currentURL = url;
          }
          this.socket.createTransport(url);
        }
        return this;
      };
      Socket.prototype.createServer = function () {
        var transport = this.getTransport(this.checkTransport());
        if (transport === null) {
          throw new Error("the channel was not supported");
        }
        return transport;
      };
      Socket.prototype.getTransport = function (transportType) {
        var isPolling = RongIMLib.RongIMClient._memoryStore.depend.isPolling;
        if (isPolling) {
          this.socket = new RongIMLib.PollingTransportation(this);
        } else {
          this.socket = new RongIMLib.SocketTransportation(this);
        }
        return this;
      };
      Socket.prototype.send = function (data) {
        if (this.socket) {
          var isPolling = RongIMLib.RongIMClient._memoryStore.depend.isPolling;
          if (!isPolling) {
            this.socket.send(data);
          }
          else {
            this.socket.send(this._encode(data));
          }
        }
      };
      Socket.prototype.onMessage = function (data) {
        this.fire("message", data);
      };
      Socket.prototype.disconnect = function (status) {
        if (RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT === status) {
          RongIMLib.RongIMClient._memoryStore.otherDevice = true;
        }
        this.socket.disconnect(status);
        this.fire("disconnect", status);
        return this;
      };
      Socket.prototype.reconnect = function () {
        if (this.currentURL && RongIMLib.RongIMClient._storageProvider.getItem("rongSDK")) {
          return this.connect(this.currentURL, null);
        }
        else {
          throw new Error("reconnect:no have URL");
        }
      };
      /**
       * [checkTransport 返回通道类型]
       */
      Socket.prototype.checkTransport = function () {
        if (RongIMLib.RongIMClient._memoryStore.depend.isPolling) {
          RongIMLib.Transportations._TransportType = Socket.XHR_POLLING;
        }
        return RongIMLib.Transportations._TransportType;
      };
      Socket.prototype.fire = function (x, args) {
        if (x in this._events) {
          for (var i = 0, ii = this._events[x].length; i < ii; i++) {
            this._events[x][i](args);
          }
        }
        return this;
      };
      Socket.prototype.on = function (x, func) {
        if (!(typeof func == "function" && x)) {
          return this;
        }
        if (x in this._events) {
          RongIMLib.MessageUtil.indexOf(this._events, func) == -1 && this._events[x].push(func);
        }
        else {
          this._events[x] = [func];
        }
        return this;
      };
      Socket.prototype.removeEvent = function (x, fn) {
        if (x in this._events) {
          for (var a = 0, l = this._events[x].length; a < l; a++) {
            if (this._events[x][a] == fn) {
              this._events[x].splice(a, 1);
            }
          }
        }
        return this;
      };
      Socket.prototype._encode = function (x) {

        var str = "?messageid=" + x.getMessageId() + "&header=" + x.getHeaderFlag() + "&sessionid=" + RongIMLib.RongIMClient._storageProvider.getItem("sId" + RongIMLib.Navigation.Endpoint.userId);
        if (!/(PubAckMessage|QueryConMessage)/.test(x._name)) {
          str += "&topic=" + x.getTopic() + "&targetid=" + (x.getTargetId() || "");
        }
        return {
          url: str,
          data: "getData" in x ? x.getData() : ""
        };
      };
      //消息通道常量，所有和通道相关判断均用 XHR_POLLING WEBSOCKET两属性
      Socket.WEBSOCKET = "websocket";
      return Socket;
    }());
    RongIMLib.Socket = Socket;
    //连接端消息累
    var Client = (function () {
      function Client(token, appId) {
        this.timeoutMillis = 100000;
        this.timeout_ = 0;
        this.sdkVer = "2.3.0";
        this.apiVer = Math.floor(Math.random() * 1e6);
        this.channel = null;
        this.handler = null;
        this.userId = "";
        this.reconnectObj = {};
        this.heartbeat = 0;
        this.pullMsgHearbeat = 0;
        this.chatroomId = "";
        this.SyncTimeQueue = [];
        this.cacheMessageIds = [];
        this.token = token;
        this.appId = appId;
        this.SyncTimeQueue.state = "complete";
      }
      Client.prototype.resumeTimer = function () {
        if (!this.timeout_) {
          this.timeout_ = setTimeout(function () {
            if (!this.timeout_) {
              return;
            }
            try {
              this.channel.disconnect();
            }
            catch (e) {
              throw new Error(e);
            }
            clearTimeout(this.timeout_);
            this.timeout_ = 0;
            this.channel.reconnect();
            this.channel.socket.fire("StatusChanged", 5);
          }, this.timeoutMillis);
        }
      };
      Client.prototype.pauseTimer = function () {
        if (this.timeout_) {
          clearTimeout(this.timeout_);
          this.timeout_ = 0;
        }
      };
      Client.prototype.connect = function (_callback) {
        if (RongIMLib.Transportations._TransportType == Socket.WEBSOCKET) {
          // if (!window.WebSocket) {
          //     _callback.onError(RongIMLib.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION);
          //     return;
          // }
        }
        //实例消息处理类
        this.handler = new MessageHandler(this);
        //设置连接回调
        this.handler.setConnectCallback(_callback);
        //实例通道类型
        var me = this;
        this.channel = new Channel(RongIMLib.Navigation.Endpoint, function () {
          RongIMLib.Transportations._TransportType == Socket.WEBSOCKET && me.keepLive();
        }, this);
        //触发状态改变观察者
        this.channel.socket.fire("StatusChanged", 1);

      };
      Client.prototype.checkSocket = function (callback) {
        var me = this;
        me.channel.writeAndFlush(new RongIMLib.PingReqMessage());
        var checkTimeout = setInterval(function () {
          if (!RongIMLib.RongIMClient._memoryStore.isFirstPingMsg) {
            callback.onSuccess();
            clearInterval(checkTimeout);
          }
          else {
            if (count > 15) {
              clearInterval(checkTimeout);
              callback.onError();
            }
          }
          count++;
        }, 200), count = 0;
      };
      Client.prototype.keepLive = function () {
        if (this.heartbeat > 0) {
          clearInterval(this.heartbeat);
        }
        var me = this;
        me.heartbeat = setInterval(function () {
          me.resumeTimer();
          me.channel.writeAndFlush(new RongIMLib.PingReqMessage());
        }, 30000);
        if (me.pullMsgHearbeat > 0) {
          clearInterval(me.pullMsgHearbeat);
        }
        me.pullMsgHearbeat = setInterval(function () {
          me.syncTime(true, undefined, undefined, false);
        }, 180000);
      };
      Client.prototype.clearHeartbeat = function () {
        clearInterval(this.heartbeat);
        this.heartbeat = 0;
        this.pauseTimer();
        clearInterval(this.pullMsgHearbeat);
        this.pullMsgHearbeat = 0;
      };
      Client.prototype.publishMessage = function (_topic, _data, _targetId, _callback, _msg) {
        RongIMLib.RongIMClient.ready(function (_client) {
          var msgId = RongIMLib.MessageIdHandler.messageIdPlus(_client.channel.reconnect);
          if (!msgId) {
            return;
          }
          var msg = new RongIMLib.PublishMessage(_topic, _data, _targetId);
          msg.setMessageId(msgId);
          if (_callback) {
            msg.setQos(Qos.AT_LEAST_ONCE);
            _client.handler.putCallback(new RongIMLib.PublishCallback(_callback.onSuccess, _callback.onError), msg.getMessageId(), _msg);
          }
          else {
            msg.setQos(Qos.AT_MOST_ONCE);
          }
          _client.channel.writeAndFlush(msg);
        });
      };
      Client.prototype.queryMessage = function (_topic, _data, _targetId, _qos, _callback, pbtype) {
        RongIMLib.RongIMClient.ready((_client) => {
          if (_topic == "userInf") {
            if (Client.userInfoMapping[_targetId]) {
              _callback.onSuccess(Client.userInfoMapping[_targetId]);
              return;
            }
          }
          var msgId = RongIMLib.MessageIdHandler.messageIdPlus(_client.channel.reconnect);
          if (!msgId) {
            return;
          }
          var msg = new RongIMLib.QueryMessage(_topic, _data, _targetId);
          msg.setMessageId(msgId);
          msg.setQos(_qos);
          _client.handler.putCallback(new RongIMLib.QueryCallback(_callback.onSuccess, _callback.onError), msg.getMessageId(), pbtype);
          _client.channel.writeAndFlush(msg);
        });
      };
      Client.prototype.invoke = function (isPullMsg, chrmId, offlineMsg) {
        var time, modules, str, me = this, target, temp = this.SyncTimeQueue.shift();
        if (temp == undefined) {
          return;
        }
        this.SyncTimeQueue.state = "pending";
        if (temp.type != 2) {
          //普通消息
          time = RongIMLib.RongIMClient._storageProvider.getItem(this.userId) || '0';
          modules = new Modules.SyncRequestMsg();
          modules.setIspolling(false);
          str = "pullMsg";
          target = this.userId;
        }
        else {
          //聊天室消息
          target = temp.chrmId || me.chatroomId;
          time = RongIMLib.RongIMClient._memoryStore.lastReadTime.get(target + Bridge._client.userId + "CST") || 0;
          modules = new Modules.ChrmPullMsg();
          modules.setCount(0);
          str = "chrmPull";
          if (!target) {
            throw new Error("syncTime:Received messages of chatroom but was not init");
          }
        }
        //判断服务器给的时间是否消息本地存储的时间，小于的话不执行拉取操作，进行一下步队列操作
        if (temp.pulltime <= time) {
          this.SyncTimeQueue.state = "complete";
          this.invoke(isPullMsg, target);
          return;
        }
        if (isPullMsg && 'setIsPullSend' in modules) {
          modules.setIsPullSend(true);
        }
        modules.setSyncTime(time);
        //发送queryMessage请求
        this.queryMessage(str, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), target, Qos.AT_LEAST_ONCE, {
          onSuccess: function (collection) {
            var sync = RongIMLib.MessageUtil.int64ToTimestamp(collection.syncTime), symbol = target;
            //把返回时间戳存入本地，普通消息key为userid，聊天室消息key为userid＋'CST'；value都为服务器返回的时间戳
            if (str == "chrmPull") {
              symbol += Bridge._client.userId + "CST";
              RongIMLib.RongIMClient._memoryStore.lastReadTime.set(symbol, sync);
            }
            else {
              var storage = RongIMLib.RongIMClient._storageProvider;
              if (sync > storage.getItem(symbol)) {
                storage.setItem(symbol, sync);
              }
            }
            //防止因离线消息造成会话列表不为空而无法从服务器拉取会话列表。
            offlineMsg && (RongIMLib.RongIMClient._memoryStore.isSyncRemoteConverList = true);
            me.SyncTimeQueue.state = "complete";
            me.invoke(isPullMsg, target);
            //把拉取到的消息逐条传给消息监听器
            var list = collection.list;
            var len = list.length
            for (var i = 0, count = len; i < len; i++) {
              if (!(list[i].msgId in me.cacheMessageIds)) {
                Bridge._client.handler.onReceived(list[i], undefined, offlineMsg, --count);
                var arrLen = me.cacheMessageIds.unshift(list[i].msgId);
                if (arrLen > 20)
                  me.cacheMessageIds.length = 20;
              }
            }
            if (len <= 200 && str == 'pullMsg') {
              var RongIMClient = RongIMLib.RongIMClient;
              var Conversation = RongIMClient._dataAccessProvider.Conversation;
              var conversationList = RongIMClient._memoryStore.conversationList;
              Conversation._notify(conversationList);
            }
          },
          onError: function (error) {
            me.SyncTimeQueue.state = "complete";
            me.invoke(isPullMsg, target);
          }
        }, "DownStreamMessages");
      };
      Client.prototype.syncTime = function (_type, pullTime, chrmId, offlineMsg) {
        this.SyncTimeQueue.push({ type: _type, chrmId: chrmId, pulltime: pullTime });
        //如果队列中只有一个成员并且状态已经完成就执行invoke方法
        if (this.SyncTimeQueue.length == 1 && this.SyncTimeQueue.state == "complete") {
          this.invoke(!_type, chrmId, offlineMsg);
        }
      };
      Client.prototype.__init = function (f) {
        this.channel = new Channel(RongIMLib.Navigation.Endpoint, f, this);
      };
      Client.userInfoMapping = {};
      return Client;
    }());
    RongIMLib.Client = Client;
    //连接类，实现imclient与connect_client的连接
    var Bridge = (function () {
      function Bridge() {
      }
      Bridge.getInstance = function () {
        return new Bridge();
      };
      //连接服务器
      Bridge.prototype.connect = function (appKey, token, callback) {
        // if (!window["Modules"]) {
        RongIMLib.RongIMClient._memoryStore.hasModules = false;
        // return;
        // }
        Bridge._client = new RongIMLib.Navigation().connect(appKey, token, callback);
        return Bridge._client;
      };
      Bridge.prototype.setListener = function (_changer) {
        if (typeof _changer == "object") {
          if (typeof _changer.onChanged == "function") {
            Channel._ConnectionStatusListener = _changer;
          }
          else if (typeof _changer.onReceived == "function") {
            Channel._ReceiveMessageListener = _changer;
          }
        }
      };
      Bridge.prototype.reconnect = function (callabck) {
        Bridge._client.channel.reconnect(callabck);
      };
      Bridge.prototype.disconnect = function () {
        Bridge._client.clearHeartbeat();
        Bridge._client.channel.disconnect(2);
      };
      //执行queryMessage请求
      Bridge.prototype.queryMsg = function (topic, content, targetId, callback, pbname) {
        if (typeof topic != "string") {
          topic = _topic[topic];
        }
        Bridge._client.queryMessage(topic, content, targetId, Qos.AT_MOST_ONCE, callback, pbname);
      };
      //发送消息 执行publishMessage 请求
      Bridge.prototype.pubMsg = function (topic, content, targetId, callback, msg, methodType) {
        if (typeof methodType == 'number') {
          if (methodType == RongIMLib.MethodType.CUSTOMER_SERVICE) {
            Bridge._client.publishMessage("pcuMsgP", content, targetId, callback, msg);
          }
          else if (methodType == RongIMLib.MethodType.RECALL) {
            Bridge._client.publishMessage("recallMsg", content, targetId, callback, msg);
          }
        }
        else {
          Bridge._client.publishMessage(_topic[10][topic], content, targetId, callback, msg);
        }
      };
      return Bridge;
    }());
    RongIMLib.Bridge = Bridge;
    var MessageHandler = (function () {
      function MessageHandler(client) {
        this.map = {};
        this.connectCallback = null;
        if (!Channel._ReceiveMessageListener) {
          throw new Error("please set onReceiveMessageListener");
        }
        this._onReceived = Channel._ReceiveMessageListener.onReceived;
        this._client = client;
        this.syncMsgMap = new Object;
      }
      //把对象推入回调对象队列中，并启动定时器
      MessageHandler.prototype.putCallback = function (callbackObj, _publishMessageId, _msg) {
        var item = {
          Callback: callbackObj,
          Message: _msg
        };
        item.Callback.resumeTimer();
        this.map[_publishMessageId] = item;
      };
      //设置连接回调对象，启动定时器
      MessageHandler.prototype.setConnectCallback = function (_connectCallback) {
        if (_connectCallback) {
          this.connectCallback = new RongIMLib.ConnectAck(_connectCallback.onSuccess, _connectCallback.onError, this._client);
          this.connectCallback.resumeTimer();
        }
      };
      MessageHandler.prototype.onReceived = function (msg, pubAckItem, offlineMsg, leftCount) {
        //实体对象
        var entity,
          //解析完成的消息对象
          message,
          //会话对象
          con;
        if (msg._name != "PublishMessage") {
          entity = msg;
          RongIMLib.RongIMClient._storageProvider.setItem(this._client.userId, RongIMLib.MessageUtil.int64ToTimestamp(entity.dataTime));
        }
        else {
          if (msg.getTopic() == "s_ntf") {
            entity = Modules.NotifyMsg.decode(msg.getData());
            this._client.syncTime(entity.type, RongIMLib.MessageUtil.int64ToTimestamp(entity.time), entity.chrmId);
            return;
          }
          else if (msg.getTopic() == "s_msg") {
            entity = Modules.DownStreamMessage.decode(msg.getData());
            var timestamp = RongIMLib.MessageUtil.int64ToTimestamp(entity.dataTime);
            RongIMLib.RongIMClient._storageProvider.setItem(this._client.userId, timestamp);
            RongIMLib.RongIMClient._memoryStore.lastReadTime.get(this._client.userId, timestamp);
          }
          else {
            if (Bridge._client.sdkVer && Bridge._client.sdkVer == "1.0.0") {
              return;
            }
            entity = Modules.UpStreamMessage.decode(msg.getData());
            var tmpTopic = msg.getTopic();
            var tmpType = tmpTopic.substr(0, 2);
            if (tmpType == "pp") {
              entity.type = 1;
            }
            else if (tmpType == "pd") {
              entity.type = 2;
            }
            else if (tmpType == "pg") {
              entity.type = 3;
            }
            else if (tmpType == "ch") {
              entity.type = 4;
            }
            else if (tmpType == "pc") {
              entity.type = 5;
            }
            //复用字段，targetId 以此为准
            entity.groupId = msg.getTargetId();
            entity.fromUserId = this._client.userId;
            entity.dataTime = Date.parse(new Date().toString());
          }
          if (!entity) {
            return;
          }
        }
        //解析实体对象为消息对象。
        message = RongIMLib.MessageUtil.messageParser(entity, this._onReceived, offlineMsg);
        if (pubAckItem) {
          message.messageUId = pubAckItem.getMessageUId();
          message.sentTime = pubAckItem.getTimestamp();
        }
        if (message === null) {
          return;
        }
        // 设置会话时间戳并且判断是否传递 message  发送消息未处理会话时间戳
        // key：'converST_' + 当前用户 + conversationType + targetId
        // RongIMClient._storageProvider.setItem('converST_' + Bridge._client.userId + message.conversationType + message.targetId, message.sentTime);
        var stKey = 'converST_' + Bridge._client.userId + message.conversationType + message.targetId;
        var stValue = RongIMLib.RongIMClient._memoryStore.lastReadTime.get(stKey);
        if (stValue) {
          if (message.sentTime > stValue) {
            RongIMLib.RongIMClient._memoryStore.lastReadTime.set(stKey, message.sentTime);
          }
          else {
            return;
          }
        }
        else {
          RongIMLib.RongIMClient._memoryStore.lastReadTime.set(stKey, message.sentTime);
        }
        if (RongIMLib.RongIMClient.MessageParams[message.messageType].msgTag.getMessageTag() == 3) {
          RongIMLib.RongIMClient._dataAccessProvider.getConversation(message.conversationType, message.targetId, {
            onSuccess: function (con) {
              if (!con) {
                con = RongIMLib.RongIMClient.getInstance().createConversation(message.conversationType, message.targetId, "");
              }
              if (message.messageDirection == RongIMLib.MessageDirection.RECEIVE && (entity.status & 64) == 64) {
                var mentioneds = RongIMLib.RongIMClient._storageProvider.getItem("mentioneds_" + Bridge._client.userId + '_' + message.conversationType + '_' + message.targetId);
                var key = message.conversationType + '_' + message.targetId, info = {};
                if (message.content && message.content.mentionedInfo) {
                  info[key] = { uid: message.messageUId, time: message.sentTime, mentionedInfo: message.content.mentionedInfo };
                  RongIMLib.RongIMClient._storageProvider.setItem("mentioneds_" + Bridge._client.userId + '_' + message.conversationType + '_' + message.targetId, JSON.stringify(info));
                  mentioneds = JSON.stringify(info);
                }
                if (mentioneds) {
                  var info = JSON.parse(mentioneds);
                  con.mentionedMsg = info[key];
                }
              }
              if (con.conversationType != 0 && message.senderUserId != Bridge._client.userId && message.receivedStatus != RongIMLib.ReceivedStatus.RETRIEVED && message.messageType != RongIMLib.RongIMClient.MessageType["ReadReceiptRequestMessage"] && message.messageType != RongIMLib.RongIMClient.MessageType["ReadReceiptResponseMessage"]) {
                con.unreadMessageCount = con.unreadMessageCount + 1;
                if (RongIMLib.MessageUtil.supportLargeStorage()) {
                  var count = RongIMLib.RongIMClient._storageProvider.getItem("cu" + Bridge._client.userId + con.conversationType + con.targetId); // 与本地存储会话合并
                  RongIMLib.RongIMClient._storageProvider.setItem("cu" + Bridge._client.userId + con.conversationType + message.targetId, Number(count) + 1);
                }
              }
              con.receivedTime = new Date().getTime();
              con.receivedStatus = message.receivedStatus;
              con.senderUserId = message.sendUserId;
              con.notificationStatus = RongIMLib.ConversationNotificationStatus.DO_NOT_DISTURB;
              con.latestMessageId = message.messageId;
              con.latestMessage = message;
              con.sentTime = message.sentTime;
              RongIMLib.RongIMClient._dataAccessProvider.addConversation(con, {
                onSuccess: function (data) {
                  if (!offlineMsg) {
                    var RongIMClient = RongIMLib.RongIMClient;
                    var Conversation = RongIMClient._dataAccessProvider.Conversation;
                    var conversationList = RongIMClient._memoryStore.conversationList;
                    Conversation._notify(conversationList);
                  }

                }, onError: function () { }
              });
            },
            onError: function (error) { }
          });
        }

        var d = new Date(), m = d.getMonth() + 1, date = d.getFullYear() + '/' + (m.toString().length == 1 ? '0' + m : m) + '/' + d.getDate();
        var dealtime = new Date(date).getTime() - message.sentTime < 0;
        if (RongIMLib.MessageUtil.supportLargeStorage() && message.messageType === RongIMLib.RongIMClient.MessageType["ReadReceiptRequestMessage"] && dealtime && message.messageDirection == RongIMLib.MessageDirection.SEND) {
          var sentkey = Bridge._client.userId + message.content.messageUId + "SENT";
          RongIMLib.RongIMClient._storageProvider.setItem(sentkey, JSON.stringify({ count: 0, dealtime: message.sentTime, userIds: {} }));
        }
        else if (RongIMLib.MessageUtil.supportLargeStorage() && message.messageType === RongIMLib.RongIMClient.MessageType["ReadReceiptRequestMessage"] && dealtime) {
          var reckey = Bridge._client.userId + message.conversationType + message.targetId + 'RECEIVED', recData = JSON.parse(RongIMLib.RongIMClient._storageProvider.getItem(reckey));
          if (recData) {
            if (message.senderUserId in recData) {
              if (recData[message.senderUserId].uIds && recData[message.senderUserId].uIds && recData[message.senderUserId].uIds.indexOf(message.content.messageUId) == -1) {
                // 如果是前一天的 MessaageUId 把数组清空。
                new Date(date).getTime() - recData[message.senderUserId].dealtime < 0 || (recData[message.senderUserId].uIds.length = 0);
                recData[message.senderUserId].uIds.push(message.content.messageUId);
                recData[message.senderUserId].dealtime = message.sentTime;
                recData[message.senderUserId].isResponse = false;
                RongIMLib.RongIMClient._storageProvider.setItem(reckey, JSON.stringify(recData));
              }
              else {
                return;
              }
            }
            else {
              var objSon = { uIds: [message.content.messageUId], dealtime: message.sentTime, isResponse: false };
              recData[message.senderUserId] = objSon;
              RongIMLib.RongIMClient._storageProvider.setItem(reckey, JSON.stringify(recData));
            }
          }
          else {
            var obj = {};
            obj[message.senderUserId] = { uIds: [message.content.messageUId], dealtime: message.sentTime, isResponse: false };
            RongIMLib.RongIMClient._storageProvider.setItem(reckey, JSON.stringify(obj));
          }
        }
        if (RongIMLib.MessageUtil.supportLargeStorage() && message.messageType === RongIMLib.RongIMClient.MessageType["ReadReceiptResponseMessage"] && dealtime) {
          var receiptResponseMsg = message.content, uIds = receiptResponseMsg.receiptMessageDic[Bridge._client.userId], sentkey = "", sentObj;
          message.receiptResponse || (message.receiptResponse = {});
          if (uIds) {
            var cbuIds = [];
            for (var i = 0, len = uIds.length; i < len; i++) {
              sentkey = Bridge._client.userId + uIds[i] + "SENT";
              sentObj = JSON.parse(RongIMLib.RongIMClient._storageProvider.getItem(sentkey));
              if (sentObj && !(message.senderUserId in sentObj.userIds)) {
                if (new Date(date).getTime() - sentObj.dealtime > 0) {
                  RongIMLib.RongIMClient._storageProvider.removeItem(sentkey);
                }
                else {
                  cbuIds.push(uIds[i]);
                  sentObj.count += 1;
                  sentObj.userIds[message.senderUserId] = message.sentTime;
                  message.receiptResponse[uIds[i]] = sentObj.count;
                  RongIMLib.RongIMClient._storageProvider.setItem(sentkey, JSON.stringify(sentObj));
                }
              }
            }
            receiptResponseMsg.receiptMessageDic[Bridge._client.userId] = cbuIds;
            message.content = receiptResponseMsg;
          }
        }
        var that = this;
        if (RongIMLib.RongIMClient._voipProvider && ['AcceptMessage', 'RingingMessage', 'HungupMessage', 'InviteMessage', 'MediaModifyMessage', 'MemberModifyMessage'].indexOf(message.messageType) > -1) {
          RongIMLib.RongIMClient._voipProvider.onReceived(message);
        }
        else {
          var lcount = leftCount || 0;
          RongIMLib.RongIMClient._dataAccessProvider.addMessage(message.conversationType, message.targetId, message, {
            onSuccess: function (ret) {
              that._onReceived(ret, lcount);
            },
            onError: function (error) {
              that._onReceived(message, lcount);
            }
          });
        }
      };
      MessageHandler.prototype.handleMessage = function (msg) {
        if (!msg) {
          return;
        }
        switch (msg._name) {
          case "ConnAckMessage":
            Bridge._client.handler.connectCallback.process(msg.getStatus(), msg.getUserId(), msg.getTimestamp());
            break;
          case "PublishMessage":
            if (!msg.getSyncMsg() && msg.getQos() != 0) {
              Bridge._client.channel.writeAndFlush(new RongIMLib.PubAckMessage(msg.getMessageId()));
            }
            // TODO && ->
            if (msg.getSyncMsg() && !RongIMLib.RongIMClient._memoryStore.depend.isPolling) {
              Bridge._client.handler.syncMsgMap[msg.getMessageId()] = msg;
            }
            else {
              //如果是PublishMessage就把该对象给onReceived方法执行处理
              Bridge._client.handler.onReceived(msg);
            }
            break;
          case "QueryAckMessage":
            if (msg.getQos() != 0) {
              Bridge._client.channel.writeAndFlush(new RongIMLib.QueryConMessage(msg.getMessageId()));
            }
            var temp = Bridge._client.handler.map[msg.getMessageId()];
            if (temp) {
              //执行回调操作
              temp.Callback.process(msg.getStatus(), msg.getData(), msg.getDate(), temp.Message);
              delete Bridge._client.handler.map[msg.getMessageId()];
            }
            break;
          case "PubAckMessage":
            var item = Bridge._client.handler.map[msg.getMessageId()];
            if (item) {
              item.Callback.process(msg.getStatus() || 0, msg.getMessageUId(), msg.getTimestamp(), item.Message, msg.getMessageId());
              delete Bridge._client.handler.map[msg.getMessageId()];
            }
            else {
              Bridge._client.handler.onReceived(Bridge._client.handler.syncMsgMap[msg.messageId], msg);
              delete Bridge._client.handler.syncMsgMap[msg.getMessageId()];
            }
            break;
          case "PingRespMessage":
            if (RongIMLib.RongIMClient._memoryStore.isFirstPingMsg) {
              RongIMLib.RongIMClient._memoryStore.isFirstPingMsg = false;
            }
            else {
              Bridge._client.pauseTimer();
            }
            break;
          case "DisconnectMessage":
            Bridge._client.channel.disconnect(msg.getStatus());
            break;
          default:
        }
      };
      return MessageHandler;
    }());
    RongIMLib.MessageHandler = MessageHandler;
  })(RongIMLib || (RongIMLib = {}));
  /// <reference path="../dts/helper.d.ts"/>


  // var RongIMLib;
  (function (RongIMLib) {
    var MessageCallback = (function () {
      function MessageCallback(error) {
        this.timeout = null;
        this.onError = null;
        if (error && typeof error == "number") {
          this.timeoutMillis = error;
        }
        else {
          this.timeoutMillis = 30000;
          this.onError = error;
        }
      }
      MessageCallback.prototype.resumeTimer = function () {
        var me = this;
        if (this.timeoutMillis > 0 && !this.timeout) {
          this.timeout = setTimeout(function () {
            me.readTimeOut(true);
          }, this.timeoutMillis);
        }
      };
      MessageCallback.prototype.pauseTimer = function () {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      };
      MessageCallback.prototype.readTimeOut = function (isTimeout) {
        if (isTimeout && this.onError) {
          this.onError(RongIMLib.ErrorCode.TIMEOUT);
        }
        else {
          this.pauseTimer();
        }
      };
      return MessageCallback;
    }());
    RongIMLib.MessageCallback = MessageCallback;
    var CallbackMapping = (function () {
      function CallbackMapping() {
        this.publicServiceList = [];
      }
      CallbackMapping.getInstance = function () {
        return new CallbackMapping();
      };
      CallbackMapping.prototype.pottingProfile = function (item) {
        var temp;
        this.profile = new RongIMLib.PublicServiceProfile();
        temp = JSON.parse(item.extra);
        this.profile.isGlobal = temp.isGlobal;
        this.profile.introduction = temp.introduction;
        this.profile.menu = temp.menu;
        this.profile.hasFollowed = temp.follow;
        this.profile.publicServiceId = item.mpid;
        this.profile.name = item.name;
        this.profile.portraitUri = item.portraitUrl;
        this.profile.conversationType = item.type == "mc" ? RongIMLib.ConversationType.APP_PUBLIC_SERVICE : RongIMLib.ConversationType.PUBLIC_SERVICE;
        this.publicServiceList.push(this.profile);
      };
      CallbackMapping.prototype.mapping = function (entity, tag) {
        switch (tag) {
          case "GetUserInfoOutput":
            var userInfo = new RongIMLib.UserInfo(entity.userId, entity.userName, entity.userPortrait);
            return userInfo;
          case "GetQNupTokenOutput":
            return {
              deadline: RongIMLib.MessageUtil.int64ToTimestamp(entity.deadline),
              token: entity.token
            };
          case "GetQNdownloadUrlOutput":
            return {
              downloadUrl: entity.downloadUrl
            };
          case "CreateDiscussionOutput":
            return entity.id;
          case "ChannelInfoOutput":
            var disInfo = new RongIMLib.Discussion();
            disInfo.creatorId = entity.adminUserId;
            disInfo.id = entity.channelId;
            disInfo.memberIdList = entity.firstTenUserIds;
            disInfo.name = entity.channelName;
            disInfo.isOpen = entity.openStatus;
            return disInfo;
          case "GroupHashOutput":
            return entity.result;
          case "QueryBlackListOutput":
            return entity.userIds;
          case "SearchMpOutput":
          case "PullMpOutput":
            if (entity.info) {
              var self = this;
              Array.forEach(entity.info, function (item) {
                setTimeout(self.pottingProfile(item), 100);
              });
            }
            return this.publicServiceList;
          default:
            return entity;
        }
      };
      return CallbackMapping;
    }());
    RongIMLib.CallbackMapping = CallbackMapping;
    var PublishCallback = (function (_super) {
      __extends(PublishCallback, _super);
      function PublishCallback(_cb, _timeout) {
        _super.call(this, _timeout);
        this._cb = _cb;
        this._timeout = _timeout;
      }
      PublishCallback.prototype.process = function (_status, messageUId, timestamp, _msg, messageId) {
        this.readTimeOut();
        if (_status == 0) {
          if (_msg) {
            _msg.setSentStatus = _status;
          }
          RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Bridge._client.userId, timestamp);
          RongIMLib.RongIMClient._memoryStore.lastReadTime.get(RongIMLib.Bridge._client.userId, timestamp);
          this._cb({ messageUId: messageUId, timestamp: timestamp, messageId: messageId });
        }
        else {
          this._timeout(_status);
        }
      };
      PublishCallback.prototype.readTimeOut = function (x) {
        MessageCallback.prototype.readTimeOut.call(this, x);
      };
      return PublishCallback;
    }(MessageCallback));
    RongIMLib.PublishCallback = PublishCallback;
    var QueryCallback = (function (_super) {
      __extends(QueryCallback, _super);
      function QueryCallback(_cb, _timeout) {
        _super.call(this, _timeout);
        this._cb = _cb;
        this._timeout = _timeout;
      }
      QueryCallback.prototype.process = function (status, data, serverTime, pbtype) {
        this.readTimeOut();
        if (pbtype && data && status == 0) {
          try {
            data = CallbackMapping.getInstance().mapping(Modules[pbtype].decode(data), pbtype);
          }
          catch (e) {
            this._timeout(RongIMLib.ErrorCode.UNKNOWN);
            return;
          }
          if ("GetUserInfoOutput" == pbtype) {
            //pb类型为GetUserInfoOutput的话就把data放入userinfo缓存队列
            RongIMLib.Client.userInfoMapping[data.userId] = data;
          }
          this._cb(data);
        }
        else {
          status > 0 ? this._timeout(status) : this._cb(status);
        }
      };
      QueryCallback.prototype.readTimeOut = function (x) {
        MessageCallback.prototype.readTimeOut.call(this, x);
      };
      return QueryCallback;
    }(MessageCallback));
    RongIMLib.QueryCallback = QueryCallback;
    var ConnectAck = (function (_super) {
      __extends(ConnectAck, _super);
      function ConnectAck(_cb, _timeout, client) {
        _super.call(this, _timeout);
        this._client = client;
        this._cb = _cb;
        this._timeout = _timeout;
      }
      ConnectAck.prototype.process = function (status, userId, timestamp) {
        this.readTimeOut();
        var self = this;
        if (status == 0) {
          self._client.userId = userId;
          if (this._client.reconnectObj.onSuccess) {
            this._client.reconnectObj.onSuccess(userId);
            delete this._client.reconnectObj.onSuccess;
          }
          else {
            self._cb(userId);

            var RongIMClient = RongIMLib.RongIMClient;
            var depend = RongIMClient._memoryStore.depend;
            var maxConversationCount = depend.maxConversationCount;
            RongIMClient._dataAccessProvider.getRemoteConversationList({
              onSuccess: function (conversationList) {
                var Conversation = RongIMClient._dataAccessProvider.Conversation;
                Conversation._notify(conversationList);
              },
              onError: function (code) {
                console.log('内部获取列表失败: %d', code);
              }
            }, null, maxConversationCount);
          }

          if (!RongIMLib.RongIMClient.isNotPullMsg) {
            self._client.syncTime(undefined, undefined, undefined, true);
          }
          RongIMLib.Bridge._client.channel.socket.fire("StatusChanged", 0);
          RongIMLib.RongIMClient._memoryStore.connectAckTime = timestamp;
          if (!(new Date().getTime() - timestamp)) {
            RongIMLib.RongIMClient._memoryStore.deltaTime = 0;
          }
          else {
            RongIMLib.RongIMClient._memoryStore.deltaTime = new Date().getTime() - timestamp;
          }
        }
        else if (status == 6) {
          //重定向 连错 CMP
          var x = {};
          var me = this;
          new RongIMLib.Navigation().getServerEndpoint(this._client.token, this._client.appId, function () {
            me._client.clearHeartbeat();
            new RongIMLib.Client(me._client.token, me._client.appId).__init.call(x, function () {
              RongIMLib.Transportations._TransportType == "websocket" && me._client.keepLive();
            });
            me._client.channel.socket.fire("StatusChanged", 2);
          }, me._timeout, false);
        }
        else {
          RongIMLib.Bridge._client.channel.socket.socket._status = status;
          if (this._client.reconnectObj.onError) {
            this._client.reconnectObj.onError(status);
            delete this._client.reconnectObj.onError;
          }
          else {
            this._timeout(status);
          }
        }
      };
      ConnectAck.prototype.readTimeOut = function (x) {
        MessageCallback.prototype.readTimeOut.call(this, x);
      };
      return ConnectAck;
    }(MessageCallback));
    RongIMLib.ConnectAck = ConnectAck;
  })(RongIMLib || (RongIMLib = {}));



  // var RongIMLib;
  (function (RongIMLib) {
    var md5 = RongIMLib.md5;
    var Navigation = (function () {
      function Navigation() {
      }
      Navigation.prototype.connect = function (appId, token, callback) {
        var oldAppId = RongIMLib.RongIMClient._storageProvider.getItem("appId");
        //如果appid和本地存储的不一样，清空所有本地存储数据
        if (oldAppId && oldAppId != appId) {
          RongIMLib.RongIMClient._storageProvider.clearItem();
          RongIMLib.RongIMClient._storageProvider.setItem("appId", appId);
        }
        if (!oldAppId) {
          RongIMLib.RongIMClient._storageProvider.setItem("appId", appId);
        }
        var connectToken = tools.convertToken(token);
        var client = new RongIMLib.Client(connectToken, appId);
        var me = this;
        this.getServerEndpoint(token, appId, function () {
          client.connect(callback);
        }, callback.onError, true);
        return client;
      };
      Navigation.prototype.getServerEndpoint = function (_token, _appId, _onsuccess, _onerror, unignore) {
        _onsuccess();
      };
      Navigation.Endpoint = new Object;
      return Navigation;
    }());
    RongIMLib.Navigation = Navigation;
  })(RongIMLib || (RongIMLib = {}));
  // TODO: 统一变量、方法等命名规范

  // var RongIMLib;
  (function (RongIMLib) {
    /**
     * 消息基类
     */
    var BaseMessage = (function () {
      function BaseMessage(arg) {
        this._name = "BaseMessage";
        this.lengthSize = 0;
        if (arg instanceof RongIMLib.Header) {
          this._header = arg;
        }
        else {
          this._header = new RongIMLib.Header(arg, false, RongIMLib.Qos.AT_MOST_ONCE, false);
        }
      }
      BaseMessage.prototype.read = function (In, length) {
        this.readMessage(In, length);
      };
      BaseMessage.prototype.write = function (Out) {
        var binaryHelper = new RongIMLib.BinaryHelper();
        var out = binaryHelper.convertStream(Out);
        this._headerCode = this.getHeaderFlag();
        out.write(this._headerCode);
        this.writeMessage(out);
        return out;
      };
      BaseMessage.prototype.getHeaderFlag = function () {
        return this._header.encode();
      };
      BaseMessage.prototype.getLengthSize = function () {
        return this.lengthSize;
      };
      BaseMessage.prototype.toBytes = function () {
        return this.write([]).getBytesArray();
      };
      BaseMessage.prototype.isRetained = function () {
        return this._header.retain;
      };
      BaseMessage.prototype.setRetained = function (retain) {
        this._header.retain = retain;
      };
      BaseMessage.prototype.setQos = function (qos) {
        this._header.qos = Object.prototype.toString.call(qos) == "[object Object]" ? qos : RongIMLib.Qos[qos];
      };
      BaseMessage.prototype.setDup = function (dup) {
        this._header.dup = dup;
      };
      BaseMessage.prototype.isDup = function () {
        return this._header.dup;
      };
      BaseMessage.prototype.getType = function () {
        return this._header.type;
      };
      BaseMessage.prototype.getQos = function () {
        return this._header.qos;
      };
      BaseMessage.prototype.messageLength = function () {
        return 0;
      };
      BaseMessage.prototype.writeMessage = function (out) { };
      BaseMessage.prototype.readMessage = function (In, length) { };
      BaseMessage.prototype.init = function (args) {
        var valName, nana, me = this;
        for (nana in args) {
          if (!args.hasOwnProperty(nana)) {
            continue;
          }
          valName = nana.replace(/^\w/, function (x) {
            var tt = x.charCodeAt(0);
            return "set" + (tt >= 0x61 ? String.fromCharCode(tt & ~32) : x);
          });
          if (valName in me) {
            if (nana == "status") {
              me[valName](disconnectStatus[args[nana]] ? disconnectStatus[args[nana]] : args[nana]);
            }
            else {
              me[valName](args[nana]);
            }
          }
        }
      };
      return BaseMessage;
    }());
    RongIMLib.BaseMessage = BaseMessage;
    /**
     *连接消息类型
     */
    var ConnectMessage = (function (_super) {
      __extends(ConnectMessage, _super);
      function ConnectMessage(header) {
        _super.call(this, arguments.length == 0 || arguments.length == 3 ? RongIMLib.Type.CONNECT : arguments[0]);
        this._name = "ConnectMessage";
        this.CONNECT_HEADER_SIZE = 12;
        this.protocolId = "RCloud";
        this.binaryHelper = new RongIMLib.BinaryHelper();
        this.protocolVersion = 3;
        switch (arguments.length) {
          case 0:
          case 1:
          case 3:
            if (!arguments[0] || arguments[0].length > 64) {
              throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0]);
            }
            this.clientId = arguments[0];
            this.cleanSession = arguments[1];
            this.keepAlive = arguments[2];
            break;
        }
      }
      ConnectMessage.prototype.messageLength = function () {
        var payloadSize = this.binaryHelper.toMQttString(this.clientId).length;
        payloadSize += this.binaryHelper.toMQttString(this.willTopic).length;
        payloadSize += this.binaryHelper.toMQttString(this.will).length;
        payloadSize += this.binaryHelper.toMQttString(this.appId).length;
        payloadSize += this.binaryHelper.toMQttString(this.token).length;
        return payloadSize + this.CONNECT_HEADER_SIZE;
      };
      ConnectMessage.prototype.readMessage = function (stream) {
        this.protocolId = stream.readUTF();
        this.protocolVersion = stream.readByte();
        var cFlags = stream.readByte();
        this.hasAppId = (cFlags & 128) > 0;
        this.hasToken = (cFlags & 64) > 0;
        this.retainWill = (cFlags & 32) > 0;
        this.willQos = cFlags >> 3 & 3;
        this.hasWill = (cFlags & 4) > 0;
        this.cleanSession = (cFlags & 32) > 0;
        this.keepAlive = stream.read() * 256 + stream.read();
        this.clientId = stream.readUTF();
        if (this.hasWill) {
          this.willTopic = stream.readUTF();
          this.will = stream.readUTF();
        }
        if (this.hasAppId) {
          try {
            this.appId = stream.readUTF();
          }
          catch (ex) {
            throw new Error(ex);
          }
        }
        if (this.hasToken) {
          try {
            this.token = stream.readUTF();
          }
          catch (ex) {
            throw new Error(ex);
          }
        }
        return stream;
      };
      ConnectMessage.prototype.writeMessage = function (out) {
        var stream = this.binaryHelper.convertStream(out);
        stream.writeUTF(this.protocolId);
        stream.write(this.protocolVersion);
        var flags = this.cleanSession ? 2 : 0;
        flags |= this.hasWill ? 4 : 0;
        flags |= this.willQos ? this.willQos >> 3 : 0;
        flags |= this.retainWill ? 32 : 0;
        flags |= this.hasToken ? 64 : 0;
        flags |= this.hasAppId ? 128 : 0;
        stream.write(flags);
        stream.writeChar(this.keepAlive);
        stream.writeUTF(this.clientId);
        if (this.hasWill) {
          stream.writeUTF(this.willTopic);
          stream.writeUTF(this.will);
        }
        if (this.hasAppId) {
          stream.writeUTF(this.appId);
        }
        if (this.hasToken) {
          stream.writeUTF(this.token);
        }
        return stream;
      };
      return ConnectMessage;
    }(BaseMessage));
    RongIMLib.ConnectMessage = ConnectMessage;
    /**
     *连接应答类型
     */
    var ConnAckMessage = (function (_super) {
      __extends(ConnAckMessage, _super);
      function ConnAckMessage(header) {
        _super.call(this, arguments.length == 0 ? RongIMLib.Type.CONNACK : arguments.length == 1 ? arguments[0] instanceof RongIMLib.Header ? arguments[0] : RongIMLib.Type.CONNACK : null);
        this._name = "ConnAckMessage";
        this.MESSAGE_LENGTH = 2;
        this.binaryHelper = new RongIMLib.BinaryHelper();
        var me = this;
        switch (arguments.length) {
          case 0:
          case 1:
            if (!(arguments[0] instanceof RongIMLib.Header)) {
              if (arguments[0] in RongIMLib.ConnectionState) {
                if (arguments[0] == null) {
                  throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");
                }
                me.setStatus(arguments[0]);
              }
            }
            break;
        }
      }
      ;
      ConnAckMessage.prototype.messageLength = function () {
        var length = this.MESSAGE_LENGTH;
        if (this.userId) {
          length += this.binaryHelper.toMQttString(this.userId).length;
        }
        return length;
      };
      ;
      ConnAckMessage.prototype.readMessage = function (_in, msglength) {
        _in.read();
        var result = +_in.read();
        if (result >= 0 && result <= 12) {
          this.setStatus(result);
        }
        else {
          throw new Error("Unsupported CONNACK code:" + result);
        }
        if (msglength > this.MESSAGE_LENGTH) {
          this.setUserId(_in.readUTF());
          var sessionId = _in.readUTF();
          var timestamp = _in.readLong();
          this.setTimestamp(timestamp);
        }
      };
      ;
      ConnAckMessage.prototype.writeMessage = function (out) {
        var stream = this.binaryHelper.convertStream(out);
        stream.write(128);
        switch (+status) {
          case 0:
          case 1:
          case 2:
          case 5:
          case 6:
            stream.write(+status);
            break;
          case 3:
          case 4:
            stream.write(3);
            break;
          default:
            throw new Error("Unsupported CONNACK code:" + status);
        }
        if (this.userId) {
          stream.writeUTF(this.userId);
        }
        return stream;
      };
      ;
      ConnAckMessage.prototype.setStatus = function (x) {
        this.status = x;
      };
      ;
      ConnAckMessage.prototype.setUserId = function (_userId) {
        this.userId = _userId;
      };
      ;
      ConnAckMessage.prototype.getStatus = function () {
        return this.status;
      };
      ;
      ConnAckMessage.prototype.getUserId = function () {
        return this.userId;
      };
      ;
      ConnAckMessage.prototype.setTimestamp = function (x) {
        this.timestrap = x;
      };
      ;
      ConnAckMessage.prototype.getTimestamp = function () {
        return this.timestrap;
      };
      return ConnAckMessage;
    }(BaseMessage));
    RongIMLib.ConnAckMessage = ConnAckMessage;
    /**
     *断开消息类型
     */
    var DisconnectMessage = (function (_super) {
      __extends(DisconnectMessage, _super);
      function DisconnectMessage(header) {
        _super.call(this, header instanceof RongIMLib.Header ? header : RongIMLib.Type.DISCONNECT);
        this._name = "DisconnectMessage";
        this.MESSAGE_LENGTH = 2;
        this.binaryHelper = new RongIMLib.BinaryHelper();
        if (!(header instanceof RongIMLib.Header)) {
          if (header in RongIMLib.ConnectionStatus) {
            this.status = header;
          }
        }
      }
      DisconnectMessage.prototype.messageLength = function () {
        return this.MESSAGE_LENGTH;
      };
      DisconnectMessage.prototype.readMessage = function (_in) {
        _in.read();
        var result = +_in.read();
        if (result >= 0 && result <= 5) {
          this.setStatus(disconnectStatus[result] ? disconnectStatus[result] : result);
        }
        else {
          throw new Error("Unsupported CONNACK code:" + result);
        }
      };
      DisconnectMessage.prototype.writeMessage = function (Out) {
        var out = this.binaryHelper.convertStream(Out);
        out.write(0);
        if (+status >= 1 && +status <= 3) {
          out.write((+status) - 1);
        }
        else {
          throw new Error("Unsupported CONNACK code:" + status);
        }
      };
      DisconnectMessage.prototype.setStatus = function (x) {
        this.status = x;
      };
      ;
      DisconnectMessage.prototype.getStatus = function () {
        return this.status;
      };
      ;
      return DisconnectMessage;
    }(BaseMessage));
    RongIMLib.DisconnectMessage = DisconnectMessage;
    /**
     *请求消息信令
     */
    var PingReqMessage = (function (_super) {
      __extends(PingReqMessage, _super);
      function PingReqMessage(header) {
        _super.call(this, (header && header instanceof RongIMLib.Header) ? header : RongIMLib.Type.PINGREQ);
        this._name = "PingReqMessage";
      }
      return PingReqMessage;
    }(BaseMessage));
    RongIMLib.PingReqMessage = PingReqMessage;
    /**
     *响应消息信令
     */
    var PingRespMessage = (function (_super) {
      __extends(PingRespMessage, _super);
      function PingRespMessage(header) {
        _super.call(this, (header && header instanceof RongIMLib.Header) ? header : RongIMLib.Type.PINGRESP);
        this._name = "PingRespMessage";
      }
      return PingRespMessage;
    }(BaseMessage));
    RongIMLib.PingRespMessage = PingRespMessage;
    /**
     *封装MesssageId
     */
    var RetryableMessage = (function (_super) {
      __extends(RetryableMessage, _super);
      function RetryableMessage(argu) {
        _super.call(this, argu);
        this._name = "RetryableMessage";
        this.binaryHelper = new RongIMLib.BinaryHelper();
      }
      RetryableMessage.prototype.messageLength = function () {
        return 2;
      };
      RetryableMessage.prototype.writeMessage = function (Out) {
        var out = this.binaryHelper.convertStream(Out), Id = this.getMessageId(), lsb = Id & 255, msb = (Id & 65280) >> 8;
        out.write(msb);
        out.write(lsb);
        return out;
      };
      RetryableMessage.prototype.readMessage = function (_in, msgLength) {
        var msgId = _in.read() * 256 + _in.read();
        this.setMessageId(parseInt(msgId, 10));
      };
      RetryableMessage.prototype.setMessageId = function (_messageId) {
        this.messageId = _messageId;
      };
      RetryableMessage.prototype.getMessageId = function () {
        return this.messageId;
      };
      return RetryableMessage;
    }(BaseMessage));
    RongIMLib.RetryableMessage = RetryableMessage;
    /**
     *发送消息应答（双向）
     *qos为1必须给出应答（所有消息类型一样）
     */
    var PubAckMessage = (function (_super) {
      __extends(PubAckMessage, _super);
      function PubAckMessage(header) {
        _super.call(this, (header instanceof RongIMLib.Header) ? header : RongIMLib.Type.PUBACK);
        this.msgLen = 2;
        this.date = 0;
        this.millisecond = 0;
        this.timestamp = 0;
        this.binaryHelper = new RongIMLib.BinaryHelper();
        this._name = "PubAckMessage";
        if (!(header instanceof RongIMLib.Header)) {
          _super.prototype.setMessageId.call(this, header);
        }
      }
      PubAckMessage.prototype.messageLength = function () {
        return this.msgLen;
      };
      PubAckMessage.prototype.writeMessage = function (Out) {
        var out = this.binaryHelper.convertStream(Out);
        RetryableMessage.prototype.writeMessage.call(this, out);
      };
      PubAckMessage.prototype.readMessage = function (_in, msgLength) {
        RetryableMessage.prototype.readMessage.call(this, _in);
        this.date = _in.readInt();
        this.status = _in.read() * 256 + _in.read();
        this.millisecond = _in.read() * 256 + _in.read();
        this.timestamp = this.date * 1000 + this.millisecond;
        this.messageUId = _in.readUTF();
      };
      PubAckMessage.prototype.setStatus = function (x) {
        this.status = x;
      };
      PubAckMessage.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
      };
      PubAckMessage.prototype.setMessageUId = function (messageUId) {
        this.messageUId = messageUId;
      };
      PubAckMessage.prototype.getStatus = function () {
        return this.status;
      };
      PubAckMessage.prototype.getDate = function () {
        return this.date;
      };
      PubAckMessage.prototype.getTimestamp = function () {
        return this.timestamp;
      };
      PubAckMessage.prototype.getMessageUId = function () {
        return this.messageUId;
      };
      return PubAckMessage;
    }(RetryableMessage));
    RongIMLib.PubAckMessage = PubAckMessage;
    /**
     *发布消息
     */
    var PublishMessage = (function (_super) {
      __extends(PublishMessage, _super);
      function PublishMessage(header, two, three) {
        _super.call(this, (arguments.length == 1 && header instanceof RongIMLib.Header) ? header : arguments.length == 3 ? RongIMLib.Type.PUBLISH : 0);
        this._name = "PublishMessage";
        this.binaryHelper = new RongIMLib.BinaryHelper();
        this.syncMsg = false;
        if (arguments.length == 3) {
          this.topic = header;
          this.targetId = three;
          this.data = typeof two == "string" ? this.binaryHelper.toMQttString(two) : two;
        }
      }
      PublishMessage.prototype.messageLength = function () {
        var length = 10;
        length += this.binaryHelper.toMQttString(this.topic).length;
        length += this.binaryHelper.toMQttString(this.targetId).length;
        length += this.data.length;
        return length;
      };
      PublishMessage.prototype.writeMessage = function (Out) {
        var out = this.binaryHelper.convertStream(Out);
        out.writeUTF(this.topic);
        out.writeUTF(this.targetId);
        RetryableMessage.prototype.writeMessage.apply(this, arguments);
        out.write(this.data);
      };
      ;
      PublishMessage.prototype.readMessage = function (_in, msgLength) {
        var pos = 6;
        this.date = _in.readInt();
        this.topic = _in.readUTF();
        pos += this.binaryHelper.toMQttString(this.topic).length;
        this.targetId = _in.readUTF();
        pos += this.binaryHelper.toMQttString(this.targetId).length;
        RetryableMessage.prototype.readMessage.apply(this, arguments);
        this.data = new Array(msgLength - pos);
        this.data = _in.read(this.data);
      };
      ;
      PublishMessage.prototype.setTopic = function (x) {
        this.topic = x;
      };
      PublishMessage.prototype.setData = function (x) {
        this.data = x;
      };
      PublishMessage.prototype.setTargetId = function (x) {
        this.targetId = x;
      };
      PublishMessage.prototype.setDate = function (x) {
        this.date = x;
      };
      PublishMessage.prototype.setSyncMsg = function (x) {
        this.syncMsg = x;
      };
      //是否是其他端同步过来的消息
      PublishMessage.prototype.getSyncMsg = function () {
        return this.syncMsg;
      };
      PublishMessage.prototype.getTopic = function () {
        return this.topic;
      };
      PublishMessage.prototype.getData = function () {
        return this.data;
      };
      PublishMessage.prototype.getTargetId = function () {
        return this.targetId;
      };
      PublishMessage.prototype.getDate = function () {
        return this.date;
      };
      return PublishMessage;
    }(RetryableMessage));
    RongIMLib.PublishMessage = PublishMessage;
    /**
     *请求查询
     */
    var QueryMessage = (function (_super) {
      __extends(QueryMessage, _super);
      function QueryMessage(header, two, three) {
        _super.call(this, header instanceof RongIMLib.Header ? header : arguments.length == 3 ? RongIMLib.Type.QUERY : null);
        this.binaryHelper = new RongIMLib.BinaryHelper();
        this._name = "QueryMessage";
        if (arguments.length == 3) {
          this.data = typeof two == "string" ? this.binaryHelper.toMQttString(two) : two;
          this.topic = header;
          this.targetId = three;
        }
      }
      QueryMessage.prototype.messageLength = function () {
        var length = 0;
        length += this.binaryHelper.toMQttString(this.topic).length;
        length += this.binaryHelper.toMQttString(this.targetId).length;
        length += 2;
        length += this.data.length;
        return length;
      };
      QueryMessage.prototype.writeMessage = function (Out) {
        var out = this.binaryHelper.convertStream(Out);
        out.writeUTF(this.topic);
        out.writeUTF(this.targetId);
        RetryableMessage.prototype.writeMessage.call(this, out);
        out.write(this.data);
      };
      QueryMessage.prototype.readMessage = function (_in, msgLength) {
        var pos = 0;
        this.topic = _in.readUTF();
        this.targetId = _in.readUTF();
        pos += this.binaryHelper.toMQttString(this.topic).length;
        pos += this.binaryHelper.toMQttString(this.targetId).length;
        this.readMessage.apply(this, arguments);
        pos += 2;
        this.data = new Array(msgLength - pos);
        _in.read(this.data);
      };
      QueryMessage.prototype.setTopic = function (x) {
        this.topic = x;
      };
      QueryMessage.prototype.setData = function (x) {
        this.data = x;
      };
      QueryMessage.prototype.setTargetId = function (x) {
        this.targetId = x;
      };
      QueryMessage.prototype.getTopic = function () {
        return this.topic;
      };
      QueryMessage.prototype.getData = function () {
        return this.data;
      };
      QueryMessage.prototype.getTargetId = function () {
        return this.targetId;
      };
      return QueryMessage;
    }(RetryableMessage));
    RongIMLib.QueryMessage = QueryMessage;
    /**
     *请求查询确认
     */
    var QueryConMessage = (function (_super) {
      __extends(QueryConMessage, _super);
      function QueryConMessage(messageId) {
        _super.call(this, (messageId instanceof RongIMLib.Header) ? messageId : RongIMLib.Type.QUERYCON);
        this._name = "QueryConMessage";
        if (!(messageId instanceof RongIMLib.Header)) {
          _super.prototype.setMessageId.call(this, messageId);
        }
      }
      return QueryConMessage;
    }(RetryableMessage));
    RongIMLib.QueryConMessage = QueryConMessage;
    /**
     *请求查询应答
     */
    var QueryAckMessage = (function (_super) {
      __extends(QueryAckMessage, _super);
      function QueryAckMessage(header) {
        _super.call(this, header);
        this._name = "QueryAckMessage";
        this.binaryHelper = new RongIMLib.BinaryHelper();
      }
      QueryAckMessage.prototype.readMessage = function (In, msgLength) {
        RetryableMessage.prototype.readMessage.call(this, In);
        this.date = In.readInt();
        this.setStatus(In.read() * 256 + In.read());
        if (msgLength > 0) {
          this.data = new Array(msgLength - 8);
          this.data = In.read(this.data);
        }
      };
      QueryAckMessage.prototype.getData = function () {
        return this.data;
      };
      QueryAckMessage.prototype.getStatus = function () {
        return this.status;
      };
      QueryAckMessage.prototype.getDate = function () {
        return this.date;
      };
      QueryAckMessage.prototype.setDate = function (x) {
        this.date = x;
      };
      QueryAckMessage.prototype.setStatus = function (x) {
        this.status = x;
      };
      QueryAckMessage.prototype.setData = function (x) {
        this.data = x;
      };
      return QueryAckMessage;
    }(RetryableMessage));
    RongIMLib.QueryAckMessage = QueryAckMessage;
  })(RongIMLib || (RongIMLib = {}));
  /// <reference path="../../dts/helper.d.ts"/>



  // var RongIMLib;
  (function (RongIMLib) {
    /**
     * 把消息对象写入流中
     * 发送消息时用到
     */
    var MessageOutputStream = (function () {
      function MessageOutputStream(_out) {
        var binaryHelper = new RongIMLib.BinaryHelper();
        this.out = binaryHelper.convertStream(_out);
      }
      MessageOutputStream.prototype.writeMessage = function (msg) {
        if (msg instanceof RongIMLib.BaseMessage) {
          msg.write(this.out);
        }
      };
      return MessageOutputStream;
    }());
    RongIMLib.MessageOutputStream = MessageOutputStream;
    /**
     * 流转换为消息对象
     * 服务器返回消息时用到
     */
    var MessageInputStream = (function () {
      function MessageInputStream(In, isPolling) {
        if (!isPolling) {
          var _in = new RongIMLib.BinaryHelper().convertStream(In);
          this.flags = _in.readByte();
          this._in = _in;
        }
        else {
          this.flags = In["headerCode"];
        }
        this.header = new RongIMLib.Header(this.flags);
        this.isPolling = isPolling;
        this.In = In;
      }
      MessageInputStream.prototype.readMessage = function () {
        switch (this.header.getType()) {
          case 1:
            this.msg = new RongIMLib.ConnectMessage(this.header);
            break;
          case 2:
            this.msg = new RongIMLib.ConnAckMessage(this.header);
            break;
          case 3:
            this.msg = new RongIMLib.PublishMessage(this.header);
            this.msg.setSyncMsg(this.header.getSyncMsg());
            break;
          case 4:
            this.msg = new RongIMLib.PubAckMessage(this.header);
            break;
          case 5:
            this.msg = new RongIMLib.QueryMessage(this.header);
            break;
          case 6:
            this.msg = new RongIMLib.QueryAckMessage(this.header);
            break;
          case 7:
            this.msg = new RongIMLib.QueryConMessage(this.header);
            break;
          case 9:
          case 11:
          case 13:
            this.msg = new RongIMLib.PingRespMessage(this.header);
            break;
          case 8:
          case 10:
          case 12:
            this.msg = new RongIMLib.PingReqMessage(this.header);
            break;
          case 14:
            this.msg = new RongIMLib.DisconnectMessage(this.header);
            break;
          default:
            throw new Error("No support for deserializing " + this.header.getType() + " messages");
        }
        if (this.isPolling) {
          this.msg.init(this.In);
        }
        else {
          this.msg.read(this._in, this.In.length - 1);
        }
        return this.msg;
      };
      return MessageInputStream;
    }());
    RongIMLib.MessageInputStream = MessageInputStream;
    var Header = (function () {
      function Header(_type, _retain, _qos, _dup) {
        this.retain = false;
        this.qos = RongIMLib.Qos.AT_LEAST_ONCE;
        this.dup = false;
        this.syncMsg = false;
        if (_type && +_type == _type && arguments.length == 1) {
          this.retain = (_type & 1) > 0;
          this.qos = (_type & 6) >> 1;
          this.dup = (_type & 8) > 0;
          this.type = (_type >> 4) & 15;
          this.syncMsg = (_type & 8) == 8;
        }
        else {
          this.type = _type;
          this.retain = _retain;
          this.qos = _qos;
          this.dup = _dup;
        }
      }
      Header.prototype.getSyncMsg = function () {
        return this.syncMsg;
      };
      Header.prototype.getType = function () {
        return this.type;
      };
      Header.prototype.encode = function () {
        var me = this;
        switch (this.qos) {
          case RongIMLib.Qos[0]:
            me.qos = RongIMLib.Qos.AT_MOST_ONCE;
            break;
          case RongIMLib.Qos[1]:
            me.qos = RongIMLib.Qos.AT_LEAST_ONCE;
            break;
          case RongIMLib.Qos[2]:
            me.qos = RongIMLib.Qos.EXACTLY_ONCE;
            break;
          case RongIMLib.Qos[3]:
            me.qos = RongIMLib.Qos.DEFAULT;
            break;
        }
        var _byte = (this.type << 4);
        _byte |= this.retain ? 1 : 0;
        _byte |= this.qos << 1;
        _byte |= this.dup ? 8 : 0;
        return _byte;
      };
      Header.prototype.toString = function () {
        return "Header [type=" + this.type + ",retain=" + this.retain + ",qos=" + this.qos + ",dup=" + this.dup + "]";
      };
      return Header;
    }());
    RongIMLib.Header = Header;
    /**
     * 二进制帮助对象
     */
    var BinaryHelper = (function () {
      function BinaryHelper() {
      }
      BinaryHelper.prototype.writeUTF = function (str, isGetBytes) {
        var back = [], byteSize = 0;
        for (var i = 0, len = str.length; i < len; i++) {
          var code = str.charCodeAt(i);
          if (code >= 0 && code <= 127) {
            byteSize += 1;
            back.push(code);
          }
          else if (code >= 128 && code <= 2047) {
            byteSize += 2;
            back.push((192 | (31 & (code >> 6))));
            back.push((128 | (63 & code)));
          }
          else if (code >= 2048 && code <= 65535) {
            byteSize += 3;
            back.push((224 | (15 & (code >> 12))));
            back.push((128 | (63 & (code >> 6))));
            back.push((128 | (63 & code)));
          }
        }
        for (var i = 0, len = back.length; i < len; i++) {
          if (back[i] > 255) {
            back[i] &= 255;
          }
        }
        if (isGetBytes) {
          return back;
        }
        if (byteSize <= 255) {
          return [0, byteSize].concat(back);
        }
        else {
          return [byteSize >> 8, byteSize & 255].concat(back);
        }
      };
      BinaryHelper.prototype.readUTF = function (arr) {
        if (Object.prototype.toString.call(arr) == "[object String]") {
          return arr;
        }
        var UTF = "", _arr = arr;
        for (var i = 0, len = _arr.length; i < len; i++) {
          if (_arr[i] < 0) {
            _arr[i] += 256;
          }
          ;
          var one = _arr[i].toString(2), v = one.match(/^1+?(?=0)/);
          if (v && one.length == 8) {
            var bytesLength = v[0].length,
              // store = _arr[i].toString(2).slice(7 - bytesLength);
              store = '';
            for (var st = 0; st < bytesLength; st++) {
              store += _arr[st + i].toString(2).slice(2);
            }
            UTF += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
          }
          else {
            UTF += String.fromCharCode(_arr[i]);
          }
        }
        return UTF;
      };
      /**
       * [convertStream 将参数x转化为RongIMStream对象]
       * @param  {any}    x [参数]
       */
      BinaryHelper.prototype.convertStream = function (x) {
        if (x instanceof RongIMStream) {
          return x;
        }
        else {
          return new RongIMStream(x);
        }
      };
      BinaryHelper.prototype.toMQttString = function (str) {
        return this.writeUTF(str);
      };
      return BinaryHelper;
    }());
    RongIMLib.BinaryHelper = BinaryHelper;
    var RongIMStream = (function () {
      function RongIMStream(arr) {
        //当前流执行的起始位置
        this.position = 0;
        //当前流写入的多少字节
        this.writen = 0;
        this.poolLen = 0;
        this.binaryHelper = new BinaryHelper();
        this.pool = arr;
        this.poolLen = arr.length;
      }
      RongIMStream.prototype.check = function () {
        return this.position >= this.pool.length;
      };
      RongIMStream.prototype.readInt = function () {
        if (this.check()) {
          return -1;
        }
        var end = "";
        for (var i = 0; i < 4; i++) {
          var t = this.pool[this.position++].toString(16);
          if (t.length == 1) {
            t = "0" + t;
          }
          end += t.toString(16);
        }
        return parseInt(end, 16);
      };
      RongIMStream.prototype.readLong = function () {
        if (this.check()) {
          return -1;
        }
        var end = "";
        for (var i = 0; i < 8; i++) {
          var t = this.pool[this.position++].toString(16);
          if (t.length == 1) {
            t = "0" + t;
          }
          end += t;
        }
        return parseInt(end, 16);
      };
      RongIMStream.prototype.readTimestamp = function () {
        if (this.check()) {
          return -1;
        }
        var end = "";
        for (var i = 0; i < 8; i++) {
          end += this.pool[this.position++].toString(16);
        }
        end = end.substring(2, 8);
        return parseInt(end, 16);
      };
      RongIMStream.prototype.readUTF = function () {
        if (this.check()) {
          return -1;
        }
        var big = (this.readByte() << 8) | this.readByte();
        return this.binaryHelper.readUTF(this.pool.subarray(this.position, this.position += big));
      };
      RongIMStream.prototype.readByte = function () {
        if (this.check()) {
          return -1;
        }
        var val = this.pool[this.position++];
        if (val > 255) {
          val &= 255;
        }
        return val;
      };
      RongIMStream.prototype.read = function (bytesArray) {
        if (bytesArray) {
          return this.pool.subarray(this.position, this.poolLen);
        }
        else {
          return this.readByte();
        }
      };
      RongIMStream.prototype.write = function (_byte) {
        var b = _byte;
        if (Object.prototype.toString.call(b).toLowerCase() == "[object array]") {
          [].push.apply(this.pool, b);
        }
        else {
          if (+b == b) {
            if (b > 255) {
              b &= 255;
            }
            this.pool.push(b);
            this.writen++;
          }
        }
        return b;
      };
      RongIMStream.prototype.writeChar = function (v) {
        if (+v != v) {
          throw new Error("writeChar:arguments type is error");
        }
        this.write(v >> 8 & 255);
        this.write(v & 255);
        this.writen += 2;
      };
      RongIMStream.prototype.writeUTF = function (str) {
        var val = this.binaryHelper.writeUTF(str);
        [].push.apply(this.pool, val);
        this.writen += val.length;
      };
      RongIMStream.prototype.toComplements = function () {
        var _tPool = this.pool;
        for (var i = 0; i < this.poolLen; i++) {
          if (_tPool[i] > 128) {
            _tPool[i] -= 256;
          }
        }
        return _tPool;
      };
      RongIMStream.prototype.getBytesArray = function (isCom) {
        if (isCom) {
          return this.toComplements();
        }
        return this.pool;
      };
      return RongIMStream;
    }());
    RongIMLib.RongIMStream = RongIMStream;
  })(RongIMLib || (RongIMLib = {}));

  // var RongIMLib;
  (function (RongIMLib) {
    var PollingTransportation = (function () {
      function PollingTransportation(socket) {
        this.empty = new Function;
        this.connected = false;
        this.pid = +new Date + Math.random() + "";
        this.queue = [];
        this.socket = socket;
        return this;
      }
      PollingTransportation.prototype.createTransport = function (url, method) {
        if (!url) {
          throw new Error("Url is empty,Please check it!");
        }
        ;
        this.url = url;
        var sid = RongIMLib.RongIMClient._storageProvider.getItem("sId" + RongIMLib.Navigation.Endpoint.userId), me = this;
        if (sid) {
          setTimeout(function () {
            me.onSuccess("{\"status\":0,\"userId\":\"" + RongIMLib.Navigation.Endpoint.userId + "\",\"headerCode\":32,\"messageId\":0,\"sessionid\":\"" + sid + "\"}");
            me.connected = true;
          }, 500);
          return this;
        }
        this.getRequest(url, true);
        return this;
      };

      PollingTransportation.prototype.getRequest = function (url, isconnect, options) {
        options = options || {};
        var callback = options.callback || function () { };

        var me = this;
        var pid = encodeURIComponent(me.pid);
        var protocol = RongIMLib.RongIMClient._memoryStore.depend.protocol;
        var tpl = '{protocol}{url}&pid={pid}';
        var url = tools.tplEngine(tpl, {
          protocol: protocol,
          url: url,
          pid: pid
        });
        me.xhr = tools.request({
          url: url,
          data: {
            t: Math.random()
          }
        }, {
            success: function (res) {
              var data = res.data;
              var isError = (res.statusCode == 400);
              if (isError) {
                me.onError();
                return;
              }
              me.onSuccess(JSON.stringify(data), isconnect);
              callback();
            },
            fail: function () {
              me.onError();
            }
          });
      };
      /**
       * [send 发送消息，Method:POST]
       * queue 为消息队列，待通道可用发送所有等待消息
       * @param  {string} data [需要传入comet格式数据，此处只负责通讯通道，数据转换在外层处理]
       */
      PollingTransportation.prototype.send = function (data) {
        var me = this;

        var path = data.url;
        var host = RongIMLib.RongIMClient._memoryStore.depend.cmp;
        var protocol = RongIMLib.RongIMClient._memoryStore.depend.protocol;
        var pid = encodeURIComponent(me.pid);
        var tpl = '{protocol}{host}/websocket{path}&pid={pid}';
        var url = tools.tplEngine(tpl, {
          protocol: protocol,
          host: host,
          path: path,
          pid: pid
        });
        var body = JSON.stringify(data.data);
        var self = this;
        me.sendxhr = tools.request({
          url: url,
          method: 'POST',
          data: body
        }, {
            success: function (res) {
              var _data = res.data;
              if (!_data) {
                return;
              }
              var isBadReq = (res.statusCode == 400);
              if (isBadReq) {
                self.onClose();
                self.socket.fire('StatusChanged', RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE);
                return;
              }
              _data = JSON.stringify(_data);
              me.onData(_data);

            },
            fail: function (e) {
              console.log('inner sendmessage error', e);
            }
          });
      };
      PollingTransportation.prototype.onData = function (data, header) {
        var self = this, val = JSON.parse(data);
        if (val.userId) {
          RongIMLib.Navigation.Endpoint.userId = val.userId;
        }
        if (header) {
          RongIMLib.RongIMClient._storageProvider.setItem("sId" + RongIMLib.Navigation.Endpoint.userId, header);
        }
        if (!RongIMLib.MessageUtil.isArray(val)) {
          val = [val];
        }
        Array.forEach(val, function (m) {
          self.socket.fire("message", new RongIMLib.MessageInputStream(m, true).readMessage());
        });
        return "";
      };
      PollingTransportation.prototype.onClose = function () {
        if (this.xhr) {
          this.xhr.abort();
          this.xhr = null;
        }
        if (this.sendxhr) {
          this.sendxhr.abort();
          this.sendxhr = null;
        }
      };
      PollingTransportation.prototype.disconnect = function () {
        RongIMLib.RongIMClient._storageProvider.removeItem("sId" + RongIMLib.Navigation.Endpoint.userId);
        RongIMLib.RongIMClient._storageProvider.removeItem(RongIMLib.Navigation.Endpoint.userId + "msgId");
        this.onClose();
      };
      PollingTransportation.prototype.reconnect = function () {
        this.disconnect();
        this.createTransport(this.url);
      };
      PollingTransportation.prototype.onSuccess = function (responseText, isconnect) {
        var txt = responseText.match(/"sessionid":"\S+?(?=")/);
        this.onData(responseText, txt ? txt[0].slice(13) : 0);
        if (/"headerCode":-32,/.test(responseText)) {
          RongIMLib.RongIMClient._storageProvider.removeItem("sId" + RongIMLib.Navigation.Endpoint.userId);
          RongIMLib.RongIMClient._storageProvider.removeItem(RongIMLib.Navigation.Endpoint.userId + "msgId");
          return;
        }
        var host = RongIMLib.RongIMClient._memoryStore.depend.cmp;
        var ret = JSON.parse(responseText);
        // token 无效，不再进行轮询
        if (ret.status == 4) {
          RongIMLib.RongIMClient._storageProvider.removeItem("sId" + RongIMLib.Navigation.Endpoint.userId);
          RongIMLib.RongIMClient._storageProvider.removeItem(RongIMLib.Navigation.Endpoint.userId + "msgId");
          return;
        }
        this.getRequest(host + "/pullmsg.js?sessionid=" + RongIMLib.RongIMClient._storageProvider.getItem("sId" + RongIMLib.Navigation.Endpoint.userId) + "&timestrap=" + encodeURIComponent(new Date().getTime() + Math.random() + ""));
        this.connected = true;
        isconnect && this.socket.fire("connect");
      };
      PollingTransportation.prototype.onError = function () {
        RongIMLib.RongIMClient._storageProvider.removeItem("sId" + RongIMLib.Navigation.Endpoint.userId);
        RongIMLib.RongIMClient._storageProvider.removeItem(RongIMLib.Navigation.Endpoint.userId + "msgId");
        this.onClose();
        this.connected = false;
        var networkunavailable = RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE;
        this.socket.fire("disconnect", networkunavailable);
      };
      return PollingTransportation;
    }());
    RongIMLib.PollingTransportation = PollingTransportation;
  })(RongIMLib || (RongIMLib = {}));

  //objectname映射
  var typeMapping = {
    "RC:TxtMsg": "TextMessage",
    "RC:ImgMsg": "ImageMessage",
    "RC:VcMsg": "VoiceMessage",
    "RC:ImgTextMsg": "RichContentMessage",
    "RC:FileMsg": "FileMessage",
    "RC:LBSMsg": "LocationMessage",
    "RC:InfoNtf": "InformationNotificationMessage",
    "RC:ContactNtf": "ContactNotificationMessage",
    "RC:ProfileNtf": "ProfileNotificationMessage",
    "RC:CmdNtf": "CommandNotificationMessage",
    "RC:DizNtf": "DiscussionNotificationMessage",
    "RC:CmdMsg": "CommandMessage",
    "RC:TypSts": "TypingStatusMessage",
    "RC:CsChaR": "ChangeModeResponseMessage",
    "RC:CsHsR": "HandShakeResponseMessage",
    "RC:CsEnd": "TerminateMessage",
    "RC:CsSp": "SuspendMessage",
    "RC:CsUpdate": "CustomerStatusUpdateMessage",
    "RC:ReadNtf": "ReadReceiptMessage",
    "RC:VCAccept": "AcceptMessage",
    "RC:VCRinging": "RingingMessage",
    "RC:VCSummary": "SummaryMessage",
    "RC:VCHangup": "HungupMessage",
    "RC:VCInvite": "InviteMessage",
    "RC:VCModifyMedia": "MediaModifyMessage",
    "RC:VCModifyMem": "MemberModifyMessage",
    "RC:CsContact": "CustomerContact",
    "RC:PSImgTxtMsg": "PublicServiceRichContentMessage",
    "RC:PSMultiImgTxtMsg": "PublicServiceMultiRichContentMessage",
    "RC:GrpNtf": "GroupNotificationMessage",
    "RC:PSCmd": "PublicServiceCommandMessage",
    "RC:RcCmd": "RecallCommandMessage",
    "RC:SRSMsg": "SyncReadStatusMessage",
    "RC:RRReqMsg": "ReadReceiptRequestMessage",
    "RC:RRRspMsg": "ReadReceiptResponseMessage",
    "RCJrmf:RpMsg": "JrmfReadPacketMessage",
    "RCJrmf:RpOpendMsg": "JrmfReadPacketOpenedMessage",
    "RCE:UpdateStatus": "RCEUpdateStatusMessage"
  },
    //自定义消息类型
    registerMessageTypeMapping = {}, HistoryMsgType = {
      4: "qryCMsg",
      2: "qryDMsg",
      3: "qryGMsg",
      1: "qryPMsg",
      6: "qrySMsg",
      7: "qryPMsg",
      8: "qryPMsg",
      5: "qryCMsg"
    }, disconnectStatus = { 1: 6 };



  // var RongIMLib;
  (function (RongIMLib) {
    /**
     * 通道标识类
     */
    var Transportations = (function () {
      function Transportations() {
      }
      Transportations._TransportType = RongIMLib.Socket.WEBSOCKET;
      return Transportations;
    }());
    RongIMLib.Transportations = Transportations;
    var MessageUtil = (function () {
      function MessageUtil() {
      }
      MessageUtil.supportLargeStorage = function () {
        return true;
      };
      /**
       *4680000 为localstorage最小容量5200000字节的90%，超过90%将删除之前过早的存储
       */
      MessageUtil.checkStorageSize = function () {
        return JSON.stringify(localStorage).length < 4680000;
      };
      MessageUtil.getFirstKey = function (obj) {
        var str = "";
        for (var key in obj) {
          str = key;
          break;
        }
        return str;
      };
      MessageUtil.isEmpty = function (obj) {
        var empty = true;
        for (var key in obj) {
          empty = false;
          break;
        }
        return empty;
      };
      MessageUtil.ArrayForm = function (typearray) {
        if (Object.prototype.toString.call(typearray) == "[object ArrayBuffer]") {
          var arr = new Int8Array(typearray);
          return [].slice.call(arr);
        }
        return typearray;
      };
      MessageUtil.ArrayFormInput = function (typearray) {
        if (Object.prototype.toString.call(typearray) == "[object ArrayBuffer]") {
          var arr = new Uint8Array(typearray);
          return arr;
        }
        return typearray;
      };
      MessageUtil.indexOf = function (arr, item, from) {
        for (var l = arr.length, i = (from < 0) ? Math.max(0, +from) : from || 0; i < l; i++) {
          if (arr[i] == item) {
            return i;
          }
        }
        return -1;
      };
      MessageUtil.isArray = function (obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
      };
      //遍历，只能遍历数组
      MessageUtil.forEach = function (arr, func) {
        if ([].forEach) {
          return function (arr, func) {
            [].forEach.call(arr, func);
          };
        }
        else {
          return function (arr, func) {
            for (var i = 0; i < arr.length; i++) {
              func.call(arr, arr[i], i, arr);
            }
          };
        }
      };
      MessageUtil.remove = function (array, func) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (func(array[i])) {
            return array.splice(i, 1)[0];
          }
        }
        return null;
      };
      MessageUtil.int64ToTimestamp = function (obj, isDate) {
        if (obj.low === undefined) {
          return obj;
        }
        var low = obj.low;
        if (low < 0) {
          low += 0xffffffff + 1;
        }
        low = low.toString(16);
        var timestamp = parseInt(obj.high.toString(16) + "00000000".replace(new RegExp("0{" + low.length + "}$"), low), 16);
        if (isDate) {
          return new Date(timestamp);
        }
        return timestamp;
      };
      //消息转换方法
      MessageUtil.messageParser = function (entity, onReceived, offlineMsg) {
        var message = new RongIMLib.Message(), content = entity.content, de, objectName = entity.classname, val, isUseDef = false;
        try {
          if (RongIMLib.RongIMClient._memoryStore.depend.isPolling) {
            val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayForm(content.buffer).slice(content.offset, content.limit) : content);
            de = JSON.parse(val);
          }
          else {
            val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayFormInput(content.buffer).subarray(content.offset, content.limit) : content);
            de = JSON.parse(val);
          }
        }
        catch (ex) {
          de = val;
          isUseDef = true;
        }
        //映射为具体消息对象
        if (objectName in typeMapping) {
          message.content = new RongIMLib[typeMapping[objectName]](de);
          message.messageType = typeMapping[objectName];
        }
        else if (objectName in registerMessageTypeMapping) {
          var content = new RongIMLib.RongIMClient.RegisterMessage[registerMessageTypeMapping[objectName]](de);
          if (isUseDef) {
            message.content = content.decode(de);
          }
          else {
            message.content = content;
          }
          message.messageType = registerMessageTypeMapping[objectName];
        }
        else {
          message.content = new RongIMLib.UnknownMessage({ content: de, objectName: objectName });
          message.messageType = "UnknownMessage";
        }
        //根据实体对象设置message对象]
        var dateTime = MessageUtil.int64ToTimestamp(entity.dataTime);
        if (dateTime > 0) {
          message.sentTime = dateTime;
        }
        else {
          message.sentTime = +new Date;
        }
        message.senderUserId = entity.fromUserId;
        message.conversationType = entity.type;
        if (entity.fromUserId == RongIMLib.Bridge._client.userId) {
          message.targetId = entity.groupId;
        }
        else {
          message.targetId = (/^[234]$/.test(entity.type || entity.getType()) ? entity.groupId : message.senderUserId);
        }
        if (entity.direction == 1) {
          message.messageDirection = RongIMLib.MessageDirection.SEND;
          message.senderUserId = RongIMLib.Bridge._client.userId;
        }
        else {
          if (message.senderUserId == RongIMLib.Bridge._client.userId) {
            message.messageDirection = RongIMLib.MessageDirection.SEND;
          }
          else {
            message.messageDirection = RongIMLib.MessageDirection.RECEIVE;
          }
        }
        message.receivedStatus = RongIMLib.ReceivedStatus.READ;
        if ((entity.status & 2) == 2) {
          message.receivedStatus = RongIMLib.ReceivedStatus.RETRIEVED;
        }
        message.messageUId = entity.msgId;
        message.receivedTime = new Date().getTime();
        message.messageId = (message.conversationType + "_" + ~~(Math.random() * 0xffffff));
        message.objectName = objectName;
        message.offLineMessage = offlineMsg ? true : false;
        if (!offlineMsg) {
          if (RongIMLib.RongIMClient._memoryStore.connectAckTime > message.sentTime) {
            message.offLineMessage = true;
          }
        }
        return message;
      };
      //适配SSL
      // static schemeArrs: Array<any> = [["http", "ws"], ["https", "wss"]];
      MessageUtil.sign = { converNum: 1, msgNum: 1, isMsgStart: true, isConvStart: true };
      return MessageUtil;
    }());
    RongIMLib.MessageUtil = MessageUtil;
    /**
     * 工具类
     */
    var MessageIdHandler = (function () {
      function MessageIdHandler() {
      }
      MessageIdHandler.init = function () {
        this.messageId = 0;
      };
      MessageIdHandler.messageIdPlus = function (method) {

        if (this.messageId >= 65535) {
          method();
          return false;
        }
        this.messageId += 1;

        return this.messageId;
      };
      MessageIdHandler.clearMessageId = function () {
        this.messageId = 0;
      };
      MessageIdHandler.getMessageId = function () {
        return this.messageId;
      };
      MessageIdHandler.messageId = 0;
      return MessageIdHandler;
    }());
    RongIMLib.MessageIdHandler = MessageIdHandler;
  })(RongIMLib || (RongIMLib = {}));


  // var RongIMLib;
  (function (RongIMLib) {
    var MessageContent = (function () {
      function MessageContent(data) {
        throw new Error("This method is abstract, you must implement this method in inherited class.");
      }
      MessageContent.obtain = function () {
        throw new Error("This method is abstract, you must implement this method in inherited class.");
      };
      return MessageContent;
    }());
    RongIMLib.MessageContent = MessageContent;
    var NotificationMessage = (function (_super) {
      __extends(NotificationMessage, _super);
      function NotificationMessage() {
        _super.apply(this, arguments);
      }
      return NotificationMessage;
    }(MessageContent));
    RongIMLib.NotificationMessage = NotificationMessage;
    var StatusMessage = (function (_super) {
      __extends(StatusMessage, _super);
      function StatusMessage() {
        _super.apply(this, arguments);
      }
      return StatusMessage;
    }(MessageContent));
    RongIMLib.StatusMessage = StatusMessage;
    var ModelUtil = (function () {
      function ModelUtil() {
      }
      ModelUtil.modelClone = function (object) {
        var obj = {};
        for (var item in object) {
          if (item != "messageName" && "encode" != item) {
            obj[item] = object[item];
          }
        }
        return obj;
      };
      ModelUtil.modleCreate = function (fields, msgType) {
        if (fields.length < 1) {
          throw new Error("Array is empty  -> registerMessageType.modleCreate");
        }
        var Object = function (message) {
          var me = this;
          for (var index in fields) {
            me[fields[index]] = message[fields[index]];
          }
          Object.prototype.messageName = msgType;
          Object.prototype.encode = function () {
            return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
          };
        };
        return Object;
      };
      return ModelUtil;
    }());
    RongIMLib.ModelUtil = ModelUtil;
  })(RongIMLib || (RongIMLib = {}));



  // var RongIMLib;
  (function (RongIMLib) {
    var CustomerStatusMessage = (function () {
      function CustomerStatusMessage(message) {
        this.messageName = "CustomerStatusMessage";
        this.status = message.status;
      }
      CustomerStatusMessage.obtain = function () {
        return null;
      };
      CustomerStatusMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return CustomerStatusMessage;
    }());
    RongIMLib.CustomerStatusMessage = CustomerStatusMessage;
    /**
     * 客服转换响应消息的类型名
     */
    var ChangeModeResponseMessage = (function () {
      function ChangeModeResponseMessage(message) {
        this.messageName = "ChangeModeResponseMessage";
        this.code = message.code;
        this.data = message.data;
        this.msg = message.msg;
      }
      ChangeModeResponseMessage.obtain = function () {
        return null;
      };
      ChangeModeResponseMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ChangeModeResponseMessage;
    }());
    RongIMLib.ChangeModeResponseMessage = ChangeModeResponseMessage;
    /**
     * 客服转换消息的类型名
     * 此消息不计入未读消息数
     */
    var ChangeModeMessage = (function () {
      function ChangeModeMessage(message) {
        this.messageName = "ChangeModeMessage";
        this.uid = message.uid;
        this.sid = message.sid;
        this.pid = message.pid;
      }
      ChangeModeMessage.obtain = function () {
        return null;
      };
      ChangeModeMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ChangeModeMessage;
    }());
    RongIMLib.ChangeModeMessage = ChangeModeMessage;
    var CustomerStatusUpdateMessage = (function () {
      function CustomerStatusUpdateMessage(message) {
        this.messageName = "CustomerStatusUpdateMessage";
        this.serviceStatus = message.serviceStatus;
        this.sid = message.sid;
      }
      CustomerStatusUpdateMessage.obtain = function () {
        return null;
      };
      CustomerStatusUpdateMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return CustomerStatusUpdateMessage;
    }());
    RongIMLib.CustomerStatusUpdateMessage = CustomerStatusUpdateMessage;
    var HandShakeMessage = (function () {
      function HandShakeMessage(message) {
        this.messageName = "HandShakeMessage";
        message && (this.groupid = message.groupid);
      }
      HandShakeMessage.obtain = function () {
        return null;
      };
      HandShakeMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return HandShakeMessage;
    }());
    RongIMLib.HandShakeMessage = HandShakeMessage;
    var CustomerContact = (function () {
      function CustomerContact(message) {
        this.messageName = "CustomerContact";
        this.page = message.page;
        this.nickName = message.nickName;
        this.routingInfo = message.routingInfo;
        this.info = message.info;
        this.requestInfo = message.requestInfo;
      }
      CustomerContact.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return CustomerContact;
    }());
    RongIMLib.CustomerContact = CustomerContact;
    var EvaluateMessage = (function () {
      function EvaluateMessage(message) {
        this.messageName = "EvaluateMessage";
        this.uid = message.uid;
        this.sid = message.sid;
        this.pid = message.pid;
        this.source = message.source;
        this.suggest = message.suggest;
        this.isresolve = message.isresolve;
        this.type = message.type;
      }
      EvaluateMessage.obtain = function () {
        return null;
      };
      EvaluateMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return EvaluateMessage;
    }());
    RongIMLib.EvaluateMessage = EvaluateMessage;
    /**
     * 客服握手响应消息的类型名
     */
    var HandShakeResponseMessage = (function () {
      function HandShakeResponseMessage(message) {
        this.messageName = "HandShakeResponseMessage";
        this.msg = message.msg;
        this.status = message.status;
        this.data = message.data;
      }
      HandShakeResponseMessage.obtain = function () {
        return null;
      };
      HandShakeResponseMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return HandShakeResponseMessage;
    }());
    RongIMLib.HandShakeResponseMessage = HandShakeResponseMessage;
    var SuspendMessage = (function () {
      function SuspendMessage(message) {
        this.messageName = "SuspendMessage";
        this.uid = message.uid;
        this.sid = message.sid;
        this.pid = message.pid;
      }
      SuspendMessage.obtain = function () {
        return null;
      };
      SuspendMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return SuspendMessage;
    }());
    RongIMLib.SuspendMessage = SuspendMessage;
    var TerminateMessage = (function () {
      function TerminateMessage(message) {
        this.messageName = "TerminateMessage";
        this.code = message.code;
        this.msg = message.msg;
        this.sid = message.sid;
      }
      TerminateMessage.obtain = function () {
        return null;
      };
      TerminateMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return TerminateMessage;
    }());
    RongIMLib.TerminateMessage = TerminateMessage;
  })(RongIMLib || (RongIMLib = {}));


  // var RongIMLib;
  (function (RongIMLib) {
    var IsTypingStatusMessage = (function () {
      function IsTypingStatusMessage(data) {
        this.messageName = "IsTypingStatusMessage";
        var msg = data;
      }
      IsTypingStatusMessage.prototype.encode = function () {
        return undefined;
      };
      IsTypingStatusMessage.prototype.getMessage = function () {
        return null;
      };
      return IsTypingStatusMessage;
    }());
    RongIMLib.IsTypingStatusMessage = IsTypingStatusMessage;
  })(RongIMLib || (RongIMLib = {}));



  // var RongIMLib;
  (function (RongIMLib) {
    var InformationNotificationMessage = (function () {
      function InformationNotificationMessage(message) {
        this.messageName = "InformationNotificationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");
        }
        this.message = message.message;
        this.extra = message.extra;
        if (message.user) {
          this.user = message.user;
        }
      }
      InformationNotificationMessage.obtain = function (message) {
        return new InformationNotificationMessage({ message: message, extra: "" });
      };
      InformationNotificationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return InformationNotificationMessage;
    }());
    RongIMLib.InformationNotificationMessage = InformationNotificationMessage;
    var CommandMessage = (function () {
      function CommandMessage(message) {
        this.messageName = "CommandMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");
        }
        try {
          if (Object.prototype.toString.call(message.data) == "[object String]") {
            this.data = JSON.parse(message.data);
          }
          else {
            this.data = message.data;
          }
        }
        catch (e) {
          this.data = message.data;
        }
        this.name = message.name;
        this.extra = message.extra;
      }
      CommandMessage.obtain = function (data) {
        return new CommandMessage({ data: data, extra: "" });
      };
      CommandMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return CommandMessage;
    }());
    RongIMLib.CommandMessage = CommandMessage;
    var ContactNotificationMessage = (function () {
      function ContactNotificationMessage(message) {
        this.messageName = "ContactNotificationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");
        }
        this.operation = message.operation;
        this.targetUserId = message.targetUserId;
        this.message = message.message;
        this.extra = message.extra;
        this.sourceUserId = message.sourceUserId;
        if (message.user) {
          this.user = message.user;
        }
      }
      ContactNotificationMessage.obtain = function (operation, sourceUserId, targetUserId, message) {
        return new InformationNotificationMessage({ operation: operation, sourceUserId: sourceUserId, targetUserId: targetUserId, message: message });
      };
      ContactNotificationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      ContactNotificationMessage.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse";
      ContactNotificationMessage.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse";
      ContactNotificationMessage.CONTACT_OPERATION_REQUEST = "ContactOperationRequest";
      return ContactNotificationMessage;
    }());
    RongIMLib.ContactNotificationMessage = ContactNotificationMessage;
    var ProfileNotificationMessage = (function () {
      function ProfileNotificationMessage(message) {
        this.messageName = "ProfileNotificationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
        }
        this.operation = message.operation;
        try {
          if (Object.prototype.toString.call(message.data) == "[object String]") {
            this.data = JSON.parse(message.data);
          }
          else {
            this.data = message.data;
          }
        }
        catch (e) {
          this.data = message.data;
        }
        this.extra = message.extra;
        if (message.user) {
          this.user = message.user;
        }
      }
      ProfileNotificationMessage.obtain = function (operation, data) {
        return new ProfileNotificationMessage({ operation: operation, data: data });
      };
      ProfileNotificationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ProfileNotificationMessage;
    }());
    RongIMLib.ProfileNotificationMessage = ProfileNotificationMessage;
    var CommandNotificationMessage = (function () {
      function CommandNotificationMessage(message) {
        this.messageName = "CommandNotificationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
        }
        try {
          if (Object.prototype.toString.call(message.data) == "[object String]") {
            this.data = JSON.parse(message.data);
          }
          else {
            this.data = message.data;
          }
        }
        catch (e) {
          this.data = message.data;
        }
        this.name = message.name;
        this.extra = message.extra;
        if (message.user) {
          this.user = message.user;
        }
      }
      CommandNotificationMessage.obtain = function (name, data) {
        return new CommandNotificationMessage({ name: name, data: data, extra: "" });
      };
      CommandNotificationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return CommandNotificationMessage;
    }());
    RongIMLib.CommandNotificationMessage = CommandNotificationMessage;
    var DiscussionNotificationMessage = (function () {
      function DiscussionNotificationMessage(message) {
        this.messageName = "DiscussionNotificationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");
        }
        this.extra = message.extra;
        this.extension = message.extension;
        this.type = message.type;
        this.isHasReceived = message.isHasReceived;
        this.operation = message.operation;
        this.user = message.user;
        if (message.user) {
          this.user = message.user;
        }
      }
      DiscussionNotificationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return DiscussionNotificationMessage;
    }());
    RongIMLib.DiscussionNotificationMessage = DiscussionNotificationMessage;
    var GroupNotificationMessage = (function () {
      function GroupNotificationMessage(msg) {
        this.messageName = "GroupNotificationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> GroupNotificationMessage.");
        }
        msg.operatorUserId && (this.operatorUserId = msg.operatorUserId);
        msg.operation && (this.operation = msg.operation);
        msg.data && (this.data = msg.data);
        msg.message && (this.message = msg.message);
      }
      GroupNotificationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return GroupNotificationMessage;
    }());
    RongIMLib.GroupNotificationMessage = GroupNotificationMessage;
  })(RongIMLib || (RongIMLib = {}));



  // var RongIMLib;
  (function (RongIMLib) {
    var TextMessage = (function () {
      function TextMessage(message) {
        this.messageName = "TextMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");
        }
        this.content = message.content;
        this.extra = message.extra;
        if (message.user) {
          this.user = message.user;
        }
        if (message.mentionedInfo) {
          this.mentionedInfo = message.mentionedInfo;
        }
      }
      TextMessage.obtain = function (text) {
        return new TextMessage({ extra: "", content: text });
      };
      TextMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return TextMessage;
    }());
    RongIMLib.TextMessage = TextMessage;
    var TypingStatusMessage = (function () {
      function TypingStatusMessage(message) {
        this.messageName = "TypingStatusMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");
        }
        this.typingContentType = message.typingContentType;
        this.data = message.data;
      }
      TypingStatusMessage.obtain = function (typingContentType, data) {
        return new TypingStatusMessage({ typingContentType: typingContentType, data: data });
      };
      TypingStatusMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return TypingStatusMessage;
    }());
    RongIMLib.TypingStatusMessage = TypingStatusMessage;
    var ReadReceiptMessage = (function () {
      function ReadReceiptMessage(message) {
        this.messageName = "ReadReceiptMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ReadReceiptMessage.");
        }
        this.lastMessageSendTime = message.lastMessageSendTime;
        this.messageUId = message.messageUId;
        this.type = message.type;
      }
      ReadReceiptMessage.obtain = function (messageUId, lastMessageSendTime, type) {
        return new ReadReceiptMessage({ messageUId: messageUId, lastMessageSendTime: lastMessageSendTime, type: type });
      };
      ReadReceiptMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ReadReceiptMessage;
    }());
    RongIMLib.ReadReceiptMessage = ReadReceiptMessage;
    var VoiceMessage = (function () {
      function VoiceMessage(message) {
        this.messageName = "VoiceMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");
        }
        this.content = message.content;
        this.duration = message.duration;
        this.extra = message.extra;
        if (message.user) {
          this.user = message.user;
        }
        if (message.mentionedInfo) {
          this.mentionedInfo = message.mentionedInfo;
        }
      }
      VoiceMessage.obtain = function (base64Content, duration) {
        return new VoiceMessage({ content: base64Content, duration: duration, extra: "" });
      };
      VoiceMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return VoiceMessage;
    }());
    RongIMLib.VoiceMessage = VoiceMessage;
    var RecallCommandMessage = (function () {
      function RecallCommandMessage(message) {
        this.messageName = "RecallCommandMessage";
        this.messageUId = message.messageUId;
        this.conversationType = message.conversationType;
        this.targetId = message.targetId;
        this.sentTime = message.sentTime;
        message.extra && (this.extra = message.extra);
        message.user && (this.user = message.user);
      }
      RecallCommandMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return RecallCommandMessage;
    }());
    RongIMLib.RecallCommandMessage = RecallCommandMessage;
    var ImageMessage = (function () {
      function ImageMessage(message) {
        this.messageName = "ImageMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");
        }
        this.content = message.content;
        this.imageUri = message.imageUri;
        message.extra && (this.extra = message.extra);
        message.user && (this.user = message.user);
        if (message.mentionedInfo) {
          this.mentionedInfo = message.mentionedInfo;
        }
      }
      ImageMessage.obtain = function (content, imageUri) {
        return new ImageMessage({ content: content, imageUri: imageUri, extra: "" });
      };
      ImageMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ImageMessage;
    }());
    RongIMLib.ImageMessage = ImageMessage;
    var LocationMessage = (function () {
      function LocationMessage(message) {
        this.messageName = "LocationMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");
        }
        this.latitude = message.latitude;
        this.longitude = message.longitude;
        this.poi = message.poi;
        this.content = message.content;
        this.extra = message.extra;
        if (message.user) {
          this.user = message.user;
        }
        if (message.mentionedInfo) {
          this.mentionedInfo = message.mentionedInfo;
        }
      }
      LocationMessage.obtain = function (latitude, longitude, poi, content) {
        return new LocationMessage({ latitude: latitude, longitude: longitude, poi: poi, content: content, extra: "" });
      };
      LocationMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return LocationMessage;
    }());
    RongIMLib.LocationMessage = LocationMessage;
    var RichContentMessage = (function () {
      function RichContentMessage(message) {
        this.messageName = "RichContentMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");
        }
        this.title = message.title;
        this.content = message.content;
        this.imageUri = message.imageUri;
        this.extra = message.extra;
        this.url = message.url;
        if (message.user) {
          this.user = message.user;
        }
      }
      RichContentMessage.obtain = function (title, content, imageUri, url) {
        return new RichContentMessage({ title: title, content: content, imageUri: imageUri, url: url, extra: "" });
      };
      RichContentMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return RichContentMessage;
    }());
    RongIMLib.RichContentMessage = RichContentMessage;
    var JrmfReadPacketMessage = (function () {
      function JrmfReadPacketMessage(message) {
        this.messageName = 'JrmfReadPacketMessage';
        message && (this.message = message);
      }
      JrmfReadPacketMessage.prototype.encode = function () {
        return "";
      };
      return JrmfReadPacketMessage;
    }());
    RongIMLib.JrmfReadPacketMessage = JrmfReadPacketMessage;
    var JrmfReadPacketOpenedMessage = (function () {
      function JrmfReadPacketOpenedMessage(message) {
        this.messageName = 'JrmfReadPacketOpenedMessage';
        message && (this.message = message);
      }
      JrmfReadPacketOpenedMessage.prototype.encode = function () {
        return "";
      };
      return JrmfReadPacketOpenedMessage;
    }());
    RongIMLib.JrmfReadPacketOpenedMessage = JrmfReadPacketOpenedMessage;
    var UnknownMessage = (function () {
      function UnknownMessage(message) {
        this.messageName = "UnknownMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");
        }
        this.message = message;
      }
      UnknownMessage.prototype.encode = function () {
        return "";
      };
      return UnknownMessage;
    }());
    RongIMLib.UnknownMessage = UnknownMessage;
    var PublicServiceCommandMessage = (function () {
      function PublicServiceCommandMessage(message) {
        this.messageName = "PublicServiceCommandMessage";
        if (arguments.length == 0) {
          throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");
        }
        this.content = message.content;
        this.extra = message.extra;
        this.menuItem = message.menuItem;
        if (message.user) {
          this.user = message.user;
        }
        if (message.mentionedInfo) {
          this.mentionedInfo = message.mentionedInfo;
        }
      }
      PublicServiceCommandMessage.obtain = function (item) {
        return new PublicServiceCommandMessage({ content: "", command: "", menuItem: item, extra: "" });
      };
      PublicServiceCommandMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return PublicServiceCommandMessage;
    }());
    RongIMLib.PublicServiceCommandMessage = PublicServiceCommandMessage;
    var PublicServiceMultiRichContentMessage = (function () {
      function PublicServiceMultiRichContentMessage(messages) {
        this.messageName = "PublicServiceMultiRichContentMessage";
        this.richContentMessages = messages;
      }
      PublicServiceMultiRichContentMessage.prototype.encode = function () {
        return null;
      };
      return PublicServiceMultiRichContentMessage;
    }());
    RongIMLib.PublicServiceMultiRichContentMessage = PublicServiceMultiRichContentMessage;
    var SyncReadStatusMessage = (function () {
      function SyncReadStatusMessage(message) {
        this.messageName = "SyncReadStatusMessage";
        message.lastMessageSendTime && (this.lastMessageSendTime = message.lastMessageSendTime);
      }
      SyncReadStatusMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return SyncReadStatusMessage;
    }());
    RongIMLib.SyncReadStatusMessage = SyncReadStatusMessage;
    var ReadReceiptRequestMessage = (function () {
      function ReadReceiptRequestMessage(message) {
        this.messageName = "ReadReceiptRequestMessage";
        message.messageUId && (this.messageUId = message.messageUId);
      }
      ReadReceiptRequestMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ReadReceiptRequestMessage;
    }());
    RongIMLib.ReadReceiptRequestMessage = ReadReceiptRequestMessage;
    var ReadReceiptResponseMessage = (function () {
      function ReadReceiptResponseMessage(message) {
        this.messageName = "ReadReceiptResponseMessage";
        message.receiptMessageDic && (this.receiptMessageDic = message.receiptMessageDic);
      }
      ReadReceiptResponseMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return ReadReceiptResponseMessage;
    }());
    RongIMLib.ReadReceiptResponseMessage = ReadReceiptResponseMessage;
    var PublicServiceRichContentMessage = (function () {
      function PublicServiceRichContentMessage(message) {
        this.messageName = "PublicServiceRichContentMessage";
        this.richContentMessage = message;
      }
      PublicServiceRichContentMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return PublicServiceRichContentMessage;
    }());
    RongIMLib.PublicServiceRichContentMessage = PublicServiceRichContentMessage;
    var FileMessage = (function () {
      function FileMessage(message) {
        this.messageName = "FileMessage";
        message.name && (this.name = message.name);
        message.size && (this.size = message.size);
        message.type && (this.type = message.type);
        message.fileUrl && (this.fileUrl = message.fileUrl);
        message.extra && (this.extra = message.extra);
        message.user && (this.user = message.user);
      }
      FileMessage.obtain = function (msg) {
        return new FileMessage({ name: msg.name, size: msg.size, type: msg.type, fileUrl: msg.fileUrl });
      };
      FileMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return FileMessage;
    }());
    RongIMLib.FileMessage = FileMessage;
    var AcceptMessage = (function () {
      function AcceptMessage(message) {
        this.messageName = "AcceptMessage";
        this.callId = message.callId;
        this.mediaType = message.mediaType;
      }
      AcceptMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return AcceptMessage;
    }());
    RongIMLib.AcceptMessage = AcceptMessage;
    var RingingMessage = (function () {
      function RingingMessage(message) {
        this.messageName = "RingingMessage";
        this.callId = message.callId;
      }
      RingingMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return RingingMessage;
    }());
    RongIMLib.RingingMessage = RingingMessage;
    var SummaryMessage = (function () {
      function SummaryMessage(message) {
        this.messageName = "SummaryMessage";
        this.caller = message.caller;
        this.inviter = message.inviter;
        this.mediaType = message.mediaType;
        this.memberIdList = message.memberIdList;
        this.startTime = message.startTime;
        this.connectedTime = message.connectedTime;
        this.duration = message.duration;
        this.status = message.status;
      }
      SummaryMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return SummaryMessage;
    }());
    RongIMLib.SummaryMessage = SummaryMessage;
    var HungupMessage = (function () {
      function HungupMessage(message) {
        this.messageName = "HungupMessage";
        this.callId = message.callId;
        this.reason = message.reason;
      }
      HungupMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return HungupMessage;
    }());
    RongIMLib.HungupMessage = HungupMessage;
    var InviteMessage = (function () {
      function InviteMessage(message) {
        this.messageName = "InviteMessage";
        this.callId = message.callId;
        this.engineType = message.engineType;
        this.channelInfo = message.channelInfo;
        this.mediaType = message.mediaType;
        this.extra = message.extra;
        this.inviteUserIds = message.inviteUserIds;
      }
      InviteMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return InviteMessage;
    }());
    RongIMLib.InviteMessage = InviteMessage;
    var MediaModifyMessage = (function () {
      function MediaModifyMessage(message) {
        this.messageName = "MediaModifyMessage";
        this.callId = message.callId;
        this.mediaType = message.mediaType;
      }
      MediaModifyMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return MediaModifyMessage;
    }());
    RongIMLib.MediaModifyMessage = MediaModifyMessage;
    var MemberModifyMessage = (function () {
      function MemberModifyMessage(message) {
        this.messageName = "MemberModifyMessage";
        this.modifyMemType = message.modifyMemType;
        this.callId = message.callId;
        this.caller = message.caller;
        this.engineType = message.engineType;
        this.channelInfo = message.channelInfo;
        this.mediaType = message.mediaType;
        this.extra = message.extra;
        this.inviteUserIds = message.inviteUserIds;
        this.existedMemberStatusList = message.existedMemberStatusList;
      }
      MemberModifyMessage.prototype.encode = function () {
        return JSON.stringify(RongIMLib.ModelUtil.modelClone(this));
      };
      return MemberModifyMessage;
    }());
    RongIMLib.MemberModifyMessage = MemberModifyMessage;
  })(RongIMLib || (RongIMLib = {}));



  // var RongIMLib;
  (function (RongIMLib) {
    var ChannelInfo = (function () {
      function ChannelInfo(Id, Key) {
        this.Id = Id;
        this.Key = Key;
      }
      return ChannelInfo;
    }());
    RongIMLib.ChannelInfo = ChannelInfo;
    var UserStatus = (function () {
      function UserStatus(platform, online, status) {
        this.platform = platform;
        this.online = online;
        this.status = status;
      }
      return UserStatus;
    }());
    RongIMLib.UserStatus = UserStatus;
    var MentionedInfo = (function () {
      function MentionedInfo(type, userIdList, mentionedContent) {
      }
      return MentionedInfo;
    }());
    RongIMLib.MentionedInfo = MentionedInfo;
    var DeleteMessage = (function () {
      function DeleteMessage(msgId, msgDataTime, direct) {
        this.msgId = msgId;
        this.msgDataTime = msgDataTime;
        this.direct = direct;
      }
      return DeleteMessage;
    }());
    RongIMLib.DeleteMessage = DeleteMessage;
    var CustomServiceConfig = (function () {
      function CustomServiceConfig(isBlack, companyName, companyUrl) {
      }
      return CustomServiceConfig;
    }());
    RongIMLib.CustomServiceConfig = CustomServiceConfig;
    var CustomServiceSession = (function () {
      function CustomServiceSession(uid, cid, pid, isQuited, type, adminHelloWord, adminOfflineWord) {
      }
      return CustomServiceSession;
    }());
    RongIMLib.CustomServiceSession = CustomServiceSession;
    var Conversation = (function () {
      function Conversation(conversationTitle, conversationType, draft, isTop, latestMessage, latestMessageId, notificationStatus, objectName, receivedStatus, receivedTime, senderUserId, senderUserName, sentStatus, sentTime, targetId, unreadMessageCount, senderPortraitUri, isHidden, mentionedMsg, hasUnreadMention) {
        this.conversationTitle = conversationTitle;
        this.conversationType = conversationType;
        this.draft = draft;
        this.isTop = isTop;
        this.latestMessage = latestMessage;
        this.latestMessageId = latestMessageId;
        this.notificationStatus = notificationStatus;
        this.objectName = objectName;
        this.receivedStatus = receivedStatus;
        this.receivedTime = receivedTime;
        this.senderUserId = senderUserId;
        this.senderUserName = senderUserName;
        this.sentStatus = sentStatus;
        this.sentTime = sentTime;
        this.targetId = targetId;
        this.unreadMessageCount = unreadMessageCount;
        this.senderPortraitUri = senderPortraitUri;
        this.isHidden = isHidden;
        this.mentionedMsg = mentionedMsg;
        this.hasUnreadMention = hasUnreadMention;
      }
      Conversation.prototype.setTop = function () {
        RongIMLib.RongIMClient._dataAccessProvider.addConversation(this, { onSuccess: function (data) { } });
      };
      return Conversation;
    }());
    RongIMLib.Conversation = Conversation;
    var Discussion = (function () {
      function Discussion(creatorId, id, memberIdList, name, isOpen) {
        this.creatorId = creatorId;
        this.id = id;
        this.memberIdList = memberIdList;
        this.name = name;
        this.isOpen = isOpen;
      }
      return Discussion;
    }());
    RongIMLib.Discussion = Discussion;
    var Group = (function () {
      function Group(id, name, portraitUri) {
        this.id = id;
        this.name = name;
        this.portraitUri = portraitUri;
      }
      return Group;
    }());
    RongIMLib.Group = Group;
    var Message = (function () {
      function Message(content, conversationType, extra, objectName, messageDirection, messageId, receivedStatus, receivedTime, senderUserId, sentStatus, sentTime, targetId, messageType, messageUId, isLocalMessage, offLineMessage, receiptResponse) {
        this.content = content;
        this.conversationType = conversationType;
        this.extra = extra;
        this.objectName = objectName;
        this.messageDirection = messageDirection;
        this.messageId = messageId;
        this.receivedStatus = receivedStatus;
        this.receivedTime = receivedTime;
        this.senderUserId = senderUserId;
        this.sentStatus = sentStatus;
        this.sentTime = sentTime;
        this.targetId = targetId;
        this.messageType = messageType;
        this.messageUId = messageUId;
        this.isLocalMessage = isLocalMessage;
        this.offLineMessage = offLineMessage;
        this.receiptResponse = receiptResponse;
      }
      return Message;
    }());
    RongIMLib.Message = Message;
    var MessageTag = (function () {
      function MessageTag(isCounted, isPersited) {
        this.isCounted = isCounted;
        this.isPersited = isPersited;
      }
      MessageTag.prototype.getMessageTag = function () {
        if (this.isCounted && this.isPersited) {
          return 3;
        }
        else if (this.isCounted || !this.isPersited) {
          return 2;
        }
        else if (!this.isCounted || this.isPersited) {
          return 1;
        }
        else if (!this.isCounted && !this.isPersited) {
          return 0;
        }
      };
      return MessageTag;
    }());
    RongIMLib.MessageTag = MessageTag;
    var PublicServiceMenuItem = (function () {
      function PublicServiceMenuItem(id, name, type, sunMenuItems, url) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.sunMenuItems = sunMenuItems;
        this.url = url;
      }
      return PublicServiceMenuItem;
    }());
    RongIMLib.PublicServiceMenuItem = PublicServiceMenuItem;
    // TODO: TBD
    var PublicServiceProfile = (function () {
      function PublicServiceProfile(conversationType, introduction, menu, name, portraitUri, publicServiceId, hasFollowed, isGlobal) {
        this.conversationType = conversationType;
        this.introduction = introduction;
        this.menu = menu;
        this.name = name;
        this.portraitUri = portraitUri;
        this.publicServiceId = publicServiceId;
        this.hasFollowed = hasFollowed;
        this.isGlobal = isGlobal;
      }
      return PublicServiceProfile;
    }());
    RongIMLib.PublicServiceProfile = PublicServiceProfile;
    var UserInfo = (function () {
      function UserInfo(id, name, portraitUri) {
        this.id = id;
        this.name = name;
        this.portraitUri = portraitUri;
      }
      return UserInfo;
    }());
    RongIMLib.UserInfo = UserInfo;
  })(RongIMLib || (RongIMLib = {}));


  // var RongIMLib;
  (function (RongIMLib) {
    var ServerDataProvider = (function () {
      function ServerDataProvider() {
      }

      var RongIMClient = RongIMLib.RongIMClient;

      var watcher = new tools.Watcher();

      var Conversation = {
        watch: function (_watcher) {
          watcher.add(_watcher);
          var conversationList = RongIMClient._memoryStore.conversationList;
          watcher.notify(conversationList);
        },
        unwatch: function (_watcher) {
          watcher.remove(_watcher);
        },
        _notify: function (conversationList) {
          watcher.notify(conversationList);
        }
      };

      ServerDataProvider.prototype.Conversation = Conversation;

      ServerDataProvider.prototype.init = function (appKey) {
        new RongIMLib.FeatureDectector();
      };
      ServerDataProvider.prototype.connect = function (token, callback) {
        RongIMLib.RongIMClient.bridge = RongIMLib.Bridge.getInstance();
        RongIMLib.RongIMClient._memoryStore.token = token;
        RongIMLib.RongIMClient._memoryStore.callback = callback;

        var isConnecting = false, isConnected = false;
        if (RongIMLib.Bridge._client && RongIMLib.Bridge._client.channel) {
          isConnecting = (RongIMLib.Bridge._client.channel.connectionStatus == RongIMLib.ConnectionStatus.CONNECTING);
          isConnected = (RongIMLib.Bridge._client.channel.connectionStatus == RongIMLib.ConnectionStatus.CONNECTED);
        }
        if (isConnected || isConnecting) {
          return;
        }
        //循环设置监听事件，追加之后清空存放事件数据
        for (var i = 0, len = RongIMLib.RongIMClient._memoryStore.listenerList.length; i < len; i++) {
          RongIMLib.RongIMClient.bridge["setListener"](RongIMLib.RongIMClient._memoryStore.listenerList[i]);
        }
        RongIMLib.RongIMClient._memoryStore.listenerList.length = 0;
        RongIMLib.RongIMClient.bridge.connect(RongIMLib.RongIMClient._memoryStore.appKey, token, {
          onSuccess: function (data) {
            setTimeout(function () {
              callback.onSuccess(data);
            });
          },
          onError: function (e) {
            if (e == RongIMLib.ConnectionState.TOKEN_INCORRECT || !e) {
              setTimeout(function () {
                callback.onTokenIncorrect();
              });
            }
            else {
              setTimeout(function () {
                callback.onError(e);
              });
            }
          }
        });
      };
      ServerDataProvider.prototype.reconnect = function (callback) {
        RongIMLib.MessageIdHandler.clearMessageId();
        var token = RongIMLib.RongIMClient._memoryStore.token;
        RongIMLib.RongIMClient.connect(token, callback);
      };
      ServerDataProvider.prototype.logout = function () {
        RongIMLib.RongIMClient.bridge.disconnect();
        RongIMLib.RongIMClient.bridge = null;
      };
      ServerDataProvider.prototype.disconnect = function () {
        if (RongIMLib.RongIMClient.bridge) {
          RongIMLib.RongIMClient.bridge.disconnect();
        }
      };

      ServerDataProvider.prototype.sendReceiptResponse = function (conversationType, targetId, sendCallback) {
        var rspkey = RongIMLib.Bridge._client.userId + conversationType + targetId + 'RECEIVED', me = this;
        if (RongIMLib.MessageUtil.supportLargeStorage()) {
          var valObj = JSON.parse(RongIMLib.RongIMClient._storageProvider.getItem(rspkey));
          if (valObj) {
            var vals = [];
            for (var key in valObj) {
              var tmp = {};
              tmp[key] = valObj[key].uIds;
              valObj[key].isResponse || vals.push(tmp);
            }
            if (vals.length == 0) {
              sendCallback.onSuccess();
              return;
            }
            var interval = setInterval(function () {
              if (vals.length == 1) {
                clearInterval(interval);
              }
              var obj = vals.splice(0, 1)[0];
              var rspMsg = new RongIMLib.ReadReceiptResponseMessage({ receiptMessageDic: obj });
              me.sendMessage(conversationType, targetId, rspMsg, {
                onSuccess: function (msg) {
                  var senderUserId = RongIMLib.MessageUtil.getFirstKey(obj);
                  valObj[senderUserId].isResponse = true;
                  RongIMLib.RongIMClient._storageProvider.setItem(rspkey, JSON.stringify(valObj));
                  sendCallback.onSuccess(msg);
                },
                onError: function (error, msg) {
                  sendCallback.onError(error, msg);
                }
              });
            }, 200);
          }
          else {
            sendCallback.onSuccess();
          }
        }
        else {
          sendCallback.onSuccess();
        }
      };
      ServerDataProvider.prototype.sendTypingStatusMessage = function (conversationType, targetId, messageName, sendCallback) {
        var me = this;
        if (messageName in RongIMLib.RongIMClient.MessageParams) {
          me.sendMessage(conversationType, targetId, RongIMLib.TypingStatusMessage.obtain(RongIMLib.RongIMClient.MessageParams[messageName].objectName, ""), {
            onSuccess: function () {
              setTimeout(function () {
                sendCallback.onSuccess();
              });
            },
            onError: function (errorCode) {
              setTimeout(function () {
                sendCallback.onError(errorCode, null);
              });
            },
            onBefore: function () { }
          });
        }
      };
      ServerDataProvider.prototype.sendRecallMessage = function (content, sendMessageCallback) {
        var msg = new RongIMLib.RecallCommandMessage({ conversationType: content.conversationType, targetId: content.targetId, sentTime: content.sentTime, messageUId: content.messageUId, extra: content.extra, user: content.user });
        this.sendMessage(content.conversationType, content.senderUserId, msg, sendMessageCallback, false, null, null, 2);
      };
      ServerDataProvider.prototype.sendTextMessage = function (conversationType, targetId, content, sendMessageCallback) {
        var msgContent = RongIMLib.TextMessage.obtain(content);
        this.sendMessage(conversationType, targetId, msgContent, sendMessageCallback);
      };
      ServerDataProvider.prototype.getRemoteHistoryMessages = function (conversationType, targetId, timestamp, count, callback) {
        if (count <= 1) {
          throw new Error("the count must be greater than 1.");
        }
        var modules = new Modules.HistoryMessageInput(), self = this;
        modules.setTargetId(targetId);
        if (timestamp === 0 || timestamp > 0) {
          modules.setDataTime(timestamp);
        }
        else {
          modules.setDataTime(RongIMLib.RongIMClient._memoryStore.lastReadTime.get(conversationType + targetId));
        }
        modules.setSize(count);
        RongIMLib.RongIMClient.bridge.queryMsg(HistoryMsgType[conversationType], RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), targetId, {
          onSuccess: function (data) {
            var hasMore = data.hasMsg;
            RongIMLib.RongIMClient._memoryStore.lastReadTime.set(conversationType + targetId, RongIMLib.MessageUtil.int64ToTimestamp(data.syncTime));
            var list = data.list.reverse(), tempMsg = null, tempDir;
            if (RongIMLib.MessageUtil.supportLargeStorage()) {
              for (var i = 0, len = list.length; i < len; i++) {
                tempMsg = RongIMLib.MessageUtil.messageParser(list[i]);
                var key = RongIMLib.Bridge._client.userId + tempMsg.messageUId + "SENT";
                var data = RongIMLib.RongIMClient._storageProvider.getItem(key);
                if (tempDir) {
                  tempDir = JSON.parse(data);
                  tempMsg.receiptResponse || (tempMsg.receiptResponse = {});
                  tempMsg.receiptResponse[tempMsg.messageUId] = tempDir.count;
                }
                list[i] = tempMsg;
              }
            }
            else {
              for (var i = 0, len = list.length; i < len; i++) {
                list[i] = RongIMLib.MessageUtil.messageParser(list[i]);
              }
            }
            setTimeout(function () {
              callback.onSuccess(list, hasMore);
            });
          },
          onError: function (error) {
            setTimeout(function () {
              if (error === RongIMLib.ErrorCode.TIMEOUT) {
                callback.onError(error);
              }
              else {
                callback.onSuccess([], false);
              }
            });
          }
        }, "HistoryMessagesOuput");
      };
      ServerDataProvider.prototype.hasRemoteUnreadMessages = function (token, callback) {

        // window.RCCallback = function (x) {

        //     xss.parentNode.removeChild(xss);
        // };


        var url = RongIMLib.RongIMClient._memoryStore.depend.api + "/message/exist.js?appKey=" + encodeURIComponent(RongIMLib.RongIMClient._memoryStore.appKey) + "&token=" + encodeURIComponent(token) + "&callBack=RCCallback&_=" + Date.now();
        tools.request({
          url: url, //仅为示例，并非真实的接口地址
          // method : method, //get
          data: {
            t: Math.random()
          }
        }, {
            success: function () {
              setTimeout(function () { callback.onSuccess(!!+x.status); });
            },
            fail: function () {
              setTimeout(function () {
                callback.onError(RongIMLib.ErrorCode.UNKNOWN);
              });
            }
          });
      };
      ServerDataProvider.prototype.getRemoteConversationList = function (callback, conversationTypes, count) {
        var modules = new Modules.RelationsInput(), self = this;
        modules.setType(1);
        if (typeof count == 'undefined') {
          modules.setCount(0);
        }
        else {
          modules.setCount(count);
        }
        RongIMLib.RongIMClient.bridge.queryMsg(26, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
          onSuccess: function (list) {
            if (list.info) {
              list.info = list.info.reverse();
              for (var i = 0, len = list.info.length; i < len; i++) {
                RongIMLib.RongIMClient.getInstance().pottingConversation(list.info[i]);
              }
            }
            if (conversationTypes) {
              var convers = [];
              Array.forEach(conversationTypes, function (converType) {
                Array.forEach(RongIMLib.RongIMClient._memoryStore.conversationList, function (item) {
                  if (item.conversationType == converType) {
                    convers.push(item);
                  }
                });
              });
              callback.onSuccess(RongIMLib.RongIMClient._memoryStore.conversationList);
            }
            else {
              callback.onSuccess(RongIMLib.RongIMClient._memoryStore.conversationList);
            }
          },
          onError: function (error) {
            if (error === RongIMLib.ErrorCode.TIMEOUT) {
              callback.onError(error);
            }
            else {
              callback.onSuccess([]);
            }
          }
        }, "RelationsOutput");
      };
      ServerDataProvider.prototype.addMemberToDiscussion = function (discussionId, userIdList, callback) {
        var modules = new Modules.ChannelInvitationInput();
        modules.setUsers(userIdList);
        RongIMLib.RongIMClient.bridge.queryMsg(0, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), discussionId, {
          onSuccess: function () {
            setTimeout(function () {
              callback.onSuccess();
            });
          },
          onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.JOIN_IN_DISCUSSION);
            });
          }
        });
      };
      ServerDataProvider.prototype.createDiscussion = function (name, userIdList, callback) {
        var modules = new Modules.CreateDiscussionInput(), self = this;
        modules.setName(name);
        RongIMLib.RongIMClient.bridge.queryMsg(1, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
          onSuccess: function (discussId) {
            if (userIdList.length > 0) {
              self.addMemberToDiscussion(discussId, userIdList, {
                onSuccess: function () { },
                onError: function (error) {
                  setTimeout(function () {
                    callback.onError(error);
                  });
                }
              });
            }
            setTimeout(function () {
              callback.onSuccess(discussId);
            });
          },
          onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.CREATE_DISCUSSION);
            });
          }
        }, "CreateDiscussionOutput");
      };
      ServerDataProvider.prototype.getDiscussion = function (discussionId, callback) {
        var modules = new Modules.ChannelInfoInput();
        modules.setNothing(1);
        RongIMLib.RongIMClient.bridge.queryMsg(4, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), discussionId, {
          onSuccess: function (data) {
            setTimeout(function () {
              callback.onSuccess(data);
            });
          },
          onError: function (errorCode) {
            setTimeout(function () {
              callback.onError(errorCode);
            });
          }
        }, "ChannelInfoOutput");
      };
      ServerDataProvider.prototype.quitDiscussion = function (discussionId, callback) {
        var modules = new Modules.LeaveChannelInput();
        modules.setNothing(1);
        RongIMLib.RongIMClient.bridge.queryMsg(7, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), discussionId, callback);
      };
      ServerDataProvider.prototype.removeMemberFromDiscussion = function (discussionId, userId, callback) {
        var modules = new Modules.ChannelEvictionInput();
        modules.setUser(userId);
        RongIMLib.RongIMClient.bridge.queryMsg(9, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), discussionId, callback);
      };
      ServerDataProvider.prototype.setDiscussionInviteStatus = function (discussionId, status, callback) {
        var modules = new Modules.ModifyPermissionInput();
        modules.setOpenStatus(status.valueOf());
        RongIMLib.RongIMClient.bridge.queryMsg(11, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), discussionId, {
          onSuccess: function (x) {
            setTimeout(function () {
              callback.onSuccess();
            });
          }, onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.INVITE_DICUSSION);
            });
          }
        });
      };
      ServerDataProvider.prototype.setDiscussionName = function (discussionId, name, callback) {
        var modules = new Modules.RenameChannelInput();
        modules.setName(name);
        RongIMLib.RongIMClient.bridge.queryMsg(12, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), discussionId, {
          onSuccess: function () {
            setTimeout(function () {
              callback.onSuccess();
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        });
      };
      ServerDataProvider.prototype.joinGroup = function (groupId, groupName, callback) {
        var modules = new Modules.GroupInfo();
        modules.setId(groupId);
        modules.setName(groupName);
        var _mod = new Modules.GroupInput();
        _mod.setGroupInfo([modules]);
        RongIMLib.RongIMClient.bridge.queryMsg(6, RongIMLib.MessageUtil.ArrayForm(_mod.toArrayBuffer()), groupId, {
          onSuccess: function () {
            setTimeout(function () {
              callback.onSuccess();
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        }, "GroupOutput");
      };
      ServerDataProvider.prototype.quitGroup = function (groupId, callback) {
        var modules = new Modules.LeaveChannelInput();
        modules.setNothing(1);
        RongIMLib.RongIMClient.bridge.queryMsg(8, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), groupId, {
          onSuccess: function () {
            setTimeout(function () {
              callback.onSuccess();
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        });
      };
      ServerDataProvider.prototype.syncGroup = function (groups, callback) {
        //去重操作
        for (var i = 0, part = [], info = [], len = groups.length; i < len; i++) {
          if (part.length === 0 || !(groups[i].id in part)) {
            part.push(groups[i].id);
            var groupinfo = new Modules.GroupInfo();
            groupinfo.setId(groups[i].id);
            groupinfo.setName(groups[i].name);
            info.push(groupinfo);
          }
        }
        var modules = new Modules.GroupHashInput();
        modules.setUserId(RongIMLib.Bridge._client.userId);
        modules.setGroupHashCode(md5(part.sort().join("")));
        RongIMLib.RongIMClient.bridge.queryMsg(13, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
          onSuccess: function (result) {
            //1为群信息不匹配需要发送给服务器进行同步，0不需要同步
            if (result === 1) {
              var val = new Modules.GroupInput();
              val.setGroupInfo(info);
              RongIMLib.RongIMClient.bridge.queryMsg(20, RongIMLib.MessageUtil.ArrayForm(val.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
                onSuccess: function () {
                  setTimeout(function () {
                    callback.onSuccess();
                  });
                },
                onError: function () {
                  setTimeout(function () {
                    callback.onError(RongIMLib.ErrorCode.GROUP_MATCH_ERROR);
                  });
                }
              }, "GroupOutput");
            }
            else {
              setTimeout(function () {
                callback.onSuccess();
              });
            }
          },
          onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.GROUP_SYNC_ERROR);
            });
          }
        }, "GroupHashOutput");
      };
      ServerDataProvider.prototype.joinChatRoom = function (chatroomId, messageCount, callback) {
        var e = new Modules.ChrmInput();
        e.setNothing(1);
        RongIMLib.Bridge._client.chatroomId = chatroomId;
        RongIMLib.RongIMClient.bridge.queryMsg(19, RongIMLib.MessageUtil.ArrayForm(e.toArrayBuffer()), chatroomId, {
          onSuccess: function () {
            callback.onSuccess();
            var modules = new Modules.ChrmPullMsg();
            messageCount == 0 && (messageCount = -1);
            modules.setCount(messageCount);
            modules.setSyncTime(0);
            RongIMLib.Bridge._client.queryMessage("chrmPull", RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), chatroomId, 1, {
              onSuccess: function (collection) {
                var sync = RongIMLib.MessageUtil.int64ToTimestamp(collection.syncTime);
                RongIMLib.RongIMClient._memoryStore.lastReadTime.set(chatroomId + RongIMLib.Bridge._client.userId + "CST", sync);
                var list = collection.list;
                if (RongIMLib.RongIMClient._memoryStore.filterMessages.length > 0) {
                  for (var i = 0, mlen = list.length; i < mlen; i++) {
                    for (var j = 0, flen = RongIMLib.RongIMClient._memoryStore.filterMessages.length; j < flen; j++) {
                      if (RongIMLib.RongIMClient.MessageParams[RongIMLib.RongIMClient._memoryStore.filterMessages[j]].objectName != list[i].classname) {
                        RongIMLib.Bridge._client.handler.onReceived(list[i]);
                      }
                    }
                  }
                }
                else {
                  for (var i = 0, len = list.length; i < len; i++) {
                    RongIMLib.Bridge._client.handler.onReceived(list[i]);
                  }
                }
              },
              onError: function (x) {
                setTimeout(function () {
                  callback.onError(RongIMLib.ErrorCode.CHATROOM_HISMESSAGE_ERROR);
                });
              }
            }, "DownStreamMessages");
          },
          onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.CHARTOOM_JOIN_ERROR);
            });
          }
        }, "ChrmOutput");
      };
      ServerDataProvider.prototype.getChatRoomInfo = function (chatRoomId, count, order, callback) {
        var modules = new Modules.QueryChatroomInfoInput();
        modules.setCount(count);
        modules.setOrder(order);
        RongIMLib.RongIMClient.bridge.queryMsg("queryChrmI", RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), chatRoomId, {
          onSuccess: function (list) {
            var userInfos = list.userInfos;
            userInfos.forEach(function (item) {
              item.time = RongIMLib.MessageUtil.int64ToTimestamp(item.time)
            });
            setTimeout(function () {
              callback.onSuccess(list);
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        }, "QueryChatroomInfoOutput");
      };
      ServerDataProvider.prototype.quitChatRoom = function (chatroomId, callback) {
        var e = new Modules.ChrmInput();
        e.setNothing(1);
        RongIMLib.RongIMClient.bridge.queryMsg(17, RongIMLib.MessageUtil.ArrayForm(e.toArrayBuffer()), chatroomId, {
          onSuccess: function () {
            setTimeout(function () {
              callback.onSuccess();
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        }, "ChrmOutput");
      };
      ServerDataProvider.prototype.setChatroomHisMessageTimestamp = function (chatRoomId, timestamp) {
        RongIMLib.RongIMClient._memoryStore.lastReadTime.set('chrhis_' + chatRoomId, timestamp);
      };
      ServerDataProvider.prototype.getChatRoomHistoryMessages = function (chatRoomId, count, order, callback) {
        var modules = new Modules.HistoryMsgInput();
        modules.setTargetId(chatRoomId);
        var timestamp = RongIMLib.RongIMClient._memoryStore.lastReadTime.get('chrhis_' + chatRoomId) || 0;
        modules.setTime(timestamp);
        modules.setCount(count);
        modules.setOrder(order);
        RongIMLib.RongIMClient.bridge.queryMsg(34, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
          onSuccess: function (data) {
            RongIMLib.RongIMClient._memoryStore.lastReadTime.set('chrhis_' + chatRoomId, RongIMLib.MessageUtil.int64ToTimestamp(data.syncTime));
            var list = data.list.reverse();
            for (var i = 0, len = list.length; i < len; i++) {
              list[i] = RongIMLib.MessageUtil.messageParser(list[i]);
            }
            setTimeout(function () {
              callback.onSuccess(list, !!data.hasMsg);
            });
          },
          onError: function (error) {
            setTimeout(function () {
              if (error === RongIMLib.ErrorCode.TIMEOUT) {
                callback.onError(error);
              }
              else {
                callback.onSuccess([], false);
              }
            });
          }
        }, "HistoryMsgOuput");
      };
      ServerDataProvider.prototype.setMessageStatus = function (conversationType, targetId, timestamp, status, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.addToBlacklist = function (userId, callback) {
        var modules = new Modules.Add2BlackListInput();
        modules.setUserId(userId);
        RongIMLib.RongIMClient.bridge.queryMsg(21, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), userId, {
          onSuccess: function () {
            callback.onSuccess();
          },
          onError: function () {
            callback.onError(RongIMLib.ErrorCode.BLACK_ADD_ERROR);
          }
        });
      };
      ServerDataProvider.prototype.getBlacklist = function (callback) {
        var modules = new Modules.QueryBlackListInput();
        modules.setNothing(1);
        RongIMLib.RongIMClient.bridge.queryMsg(23, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, callback, "QueryBlackListOutput");
      };
      ServerDataProvider.prototype.getBlacklistStatus = function (userId, callback) {
        var modules = new Modules.BlackListStatusInput();
        modules.setUserId(userId);
        RongIMLib.RongIMClient.bridge.queryMsg(24, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), userId, {
          onSuccess: function (status) {
            setTimeout(function () {
              callback.onSuccess(RongIMLib.BlacklistStatus[status]);
            });
          }, onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.BLACK_GETSTATUS_ERROR);
            });
          }
        });
      };
      ServerDataProvider.prototype.removeFromBlacklist = function (userId, callback) {
        var modules = new Modules.RemoveFromBlackListInput();
        modules.setUserId(userId);
        RongIMLib.RongIMClient.bridge.queryMsg(22, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), userId, {
          onSuccess: function () {
            callback.onSuccess();
          },
          onError: function () {
            callback.onError(RongIMLib.ErrorCode.BLACK_REMOVE_ERROR);
          }
        });
      };
      ServerDataProvider.prototype.getFileToken = function (fileType, callback) {
        if (!(/(1|2|3|4)/.test(fileType.toString()))) {
          callback.onError(RongIMLib.ErrorCode.QNTKN_FILETYPE_ERROR);
          return;
        }
        var modules = new Modules.GetQNupTokenInput();
        modules.setType(fileType);
        RongIMLib.RongIMClient.bridge.queryMsg(30, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
          onSuccess: function (data) {
            setTimeout(function () {
              callback.onSuccess(data);
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        }, "GetQNupTokenOutput");
      };
      ServerDataProvider.prototype.getFileUrl = function (fileType, fileName, oriName, callback) {
        if (!(/(1|2|3|4)/.test(fileType.toString()))) {
          setTimeout(function () {
            callback.onError(RongIMLib.ErrorCode.QNTKN_FILETYPE_ERROR);
          });
          return;
        }
        var modules = new Modules.GetQNdownloadUrlInput();
        modules.setType(fileType);
        modules.setKey(fileName);
        if (oriName) {
          modules.setFileName(oriName);
        }
        RongIMLib.RongIMClient.bridge.queryMsg(31, RongIMLib.MessageUtil.ArrayForm(modules.toArrayBuffer()), RongIMLib.Bridge._client.userId, {
          onSuccess: function (data) {
            setTimeout(function () {
              callback.onSuccess(data);
            });
          },
          onError: function (errcode) {
            callback.onError(errcode);
          }
        }, "GetQNdownloadUrlOutput");
      };
      // methodType 1 : 多客服(客服后台使用);   2 : 消息撤回
      ServerDataProvider.prototype.sendMessage = function (conversationType, targetId, messageContent, sendCallback, mentiondMsg, pushText, appData, methodType) {
        if (!RongIMLib.Bridge._client.channel) {
          sendCallback.onError(RongIMLib.ErrorCode.RC_NET_UNAVAILABLE, null);
          return;
        }
        var modules = new Modules.UpStreamMessage();
        if (mentiondMsg && (conversationType == RongIMLib.ConversationType.DISCUSSION || conversationType == RongIMLib.ConversationType.GROUP)) {
          modules.setSessionId(7);
        }
        else {
          modules.setSessionId(RongIMLib.RongIMClient.MessageParams[messageContent.messageName].msgTag.getMessageTag());
        }
        pushText && modules.setPushText(pushText);
        appData && modules.setAppData(appData);
        if ((conversationType == RongIMLib.ConversationType.DISCUSSION || conversationType == RongIMLib.ConversationType.GROUP) && messageContent.messageName == RongIMLib.RongIMClient.MessageType["ReadReceiptResponseMessage"]) {
          var rspMsg = messageContent;
          if (rspMsg.receiptMessageDic) {
            var ids = [];
            for (var key in rspMsg.receiptMessageDic) {
              ids.push(key);
            }
            modules.setUserId(ids);
          }
        }
        if ((conversationType == RongIMLib.ConversationType.DISCUSSION || conversationType == RongIMLib.ConversationType.GROUP) && messageContent.messageName == RongIMLib.RongIMClient.MessageType["SyncReadStatusMessage"]) {
          modules.setUserId(RongIMLib.Bridge._client.userId);
        }
        modules.setClassname(RongIMLib.RongIMClient.MessageParams[messageContent.messageName].objectName);
        modules.setContent(messageContent.encode());
        var content = modules.toArrayBuffer();
        if (Object.prototype.toString.call(content) == "[object ArrayBuffer]") {
          content = [].slice.call(new Int8Array(content));
        }
        var c = null, me = this, msg = new RongIMLib.Message();
        this.getConversation(conversationType, targetId, {
          onSuccess: function (conver) {
            c = conver;
            if (RongIMLib.RongIMClient.MessageParams[messageContent.messageName].msgTag.getMessageTag() == 3) {
              if (!c) {
                c = RongIMLib.RongIMClient.getInstance().createConversation(conversationType, targetId, "");
              }
              c.sentTime = new Date().getTime();
              c.sentStatus = RongIMLib.SentStatus.SENDING;
              c.senderUserName = "";
              c.senderUserId = RongIMLib.Bridge._client.userId;
              c.notificationStatus = RongIMLib.ConversationNotificationStatus.DO_NOT_DISTURB;
              c.latestMessage = msg;
              c.unreadMessageCount = 0;
              RongIMLib.RongIMClient._dataAccessProvider.addConversation(c, { onSuccess: function (data) { } });
            }
            RongIMLib.RongIMClient._memoryStore.converStore = c;
          }
        });
        msg.content = messageContent;
        msg.conversationType = conversationType;
        msg.senderUserId = RongIMLib.Bridge._client.userId;
        msg.objectName = RongIMLib.RongIMClient.MessageParams[messageContent.messageName].objectName;
        msg.targetId = targetId;
        msg.sentTime = new Date().getTime();
        msg.messageDirection = RongIMLib.MessageDirection.SEND;
        msg.sentStatus = RongIMLib.SentStatus.SENT;
        msg.messageType = messageContent.messageName;
        RongIMLib.RongIMClient.bridge.pubMsg(conversationType.valueOf(), content, targetId, {
          onSuccess: function (data) {
            if (data && data.timestamp) {
              RongIMLib.RongIMClient._memoryStore.lastReadTime.set('converST_' + RongIMLib.Bridge._client.userId + conversationType + targetId, data.timestamp);
            }
            if ((conversationType == RongIMLib.ConversationType.DISCUSSION || conversationType == RongIMLib.ConversationType.GROUP) && messageContent.messageName == RongIMLib.RongIMClient.MessageType["ReadReceiptRequestMessage"]) {
              var reqMsg = msg.content;
              var sentkey = RongIMLib.Bridge._client.userId + reqMsg.messageUId + "SENT";
              RongIMLib.RongIMClient._storageProvider.setItem(sentkey, JSON.stringify({ count: 0, dealtime: data.timestamp, userIds: {} }));
            }
            if (RongIMLib.RongIMClient.MessageParams[msg.messageType].msgTag.getMessageTag() == 3) {
              RongIMLib.RongIMClient._memoryStore.converStore.latestMessage = msg;
              var RongIMClient = RongIMLib.RongIMClient;
              var Conversation = RongIMClient._dataAccessProvider.Conversation;
              Conversation._notify(RongIMClient._memoryStore.conversationList);

              RongIMLib.RongIMClient._dataAccessProvider.addMessage(conversationType, targetId, msg, {
                onSuccess: function (ret) {
                  msg = ret;
                  msg.messageUId = data.messageUId;
                  msg.sentTime = data.timestamp;
                  msg.sentStatus = RongIMLib.SentStatus.SENT;
                  msg.messageId = data.messageId;
                  RongIMLib.RongIMClient._dataAccessProvider.updateMessage(msg);
                },
                onError: function () { }
              });
            }
            setTimeout(function () {
              msg.sentTime = data.timestamp;
              msg.messageUId = data.messageUId;
              sendCallback.onSuccess(msg);
            });
          },
          onError: function (errorCode) {
            msg.sentStatus = RongIMLib.SentStatus.FAILED;
            if (RongIMLib.RongIMClient.MessageParams[msg.messageType].msgTag.getMessageTag() == 3) {
              RongIMLib.RongIMClient._memoryStore.converStore.latestMessage = msg;
            }
            RongIMLib.RongIMClient._dataAccessProvider.addMessage(conversationType, targetId, msg, {
              onSuccess: function (ret) {
                msg.messageId = ret.messageId;
                RongIMLib.RongIMClient._dataAccessProvider.updateMessage(msg);
              },
              onError: function () { }
            });
            setTimeout(function () {
              sendCallback.onError(errorCode, msg);
            });
          }
        }, null, methodType);
        sendCallback.onBefore && sendCallback.onBefore(RongIMLib.MessageIdHandler.messageId);
        msg.messageId = RongIMLib.MessageIdHandler.messageId + "";
      };
      ServerDataProvider.prototype.setConnectionStatusListener = function (listener) {
        if (RongIMLib.RongIMClient.bridge) {
          RongIMLib.RongIMClient.bridge.setListener(listener);
        }
        else {
          RongIMLib.RongIMClient._memoryStore.listenerList.push(listener);
        }
      };
      ServerDataProvider.prototype.setOnReceiveMessageListener = function (listener) {
        if (RongIMLib.RongIMClient.bridge) {
          RongIMLib.RongIMClient.bridge.setListener(listener);
        }
        else {
          RongIMLib.RongIMClient._memoryStore.listenerList.push(listener);
        }
      };
      ServerDataProvider.prototype.registerMessageType = function (messageType, objectName, messageTag, messageContent) {
        if (!messageType) {
          throw new Error("messageType can't be empty,postion -> registerMessageType");
        }
        if (!objectName) {
          throw new Error("objectName can't be empty,postion -> registerMessageType");
        }
        if (Object.prototype.toString.call(messageContent) == "[object Array]") {
          var regMsg = RongIMLib.ModelUtil.modleCreate(messageContent, messageType);
          RongIMLib.RongIMClient.RegisterMessage[messageType] = regMsg;
        }
        else if (Object.prototype.toString.call(messageContent) == "[object Function]" || Object.prototype.toString.call(messageContent) == "[object Object]") {
          if (!messageContent.encode) {
            throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");
          }
          if (!messageContent.decode) {
            throw new Error("decode method has not realized -> registerMessageType");
          }
        }
        else {
          throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");
        }
        registerMessageTypeMapping[objectName] = messageType;
      };
      ServerDataProvider.prototype.addConversation = function (conversation, callback) {
        var isAdd = true;
        for (var i = 0, len = RongIMLib.RongIMClient._memoryStore.conversationList.length; i < len; i++) {
          if (RongIMLib.RongIMClient._memoryStore.conversationList[i].conversationType === conversation.conversationType && RongIMLib.RongIMClient._memoryStore.conversationList[i].targetId === conversation.targetId) {
            RongIMLib.RongIMClient._memoryStore.conversationList.unshift(RongIMLib.RongIMClient._memoryStore.conversationList.splice(i, 1)[0]);
            isAdd = false;
            break;
          }
        }
        if (isAdd) {
          RongIMLib.RongIMClient._memoryStore.conversationList.unshift(conversation);
        }
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.updateConversation = function (conversation) {
        var conver;
        for (var i = 0, len = RongIMLib.RongIMClient._memoryStore.conversationList.length; i < len; i++) {
          if (conversation.conversationType === RongIMLib.RongIMClient._memoryStore.conversationList[i].conversationType && conversation.targetId === RongIMLib.RongIMClient._memoryStore.conversationList[i].targetId) {
            conversation.conversationTitle && (RongIMLib.RongIMClient._memoryStore.conversationList[i].conversationTitle = conversation.conversationTitle);
            conversation.senderUserName && (RongIMLib.RongIMClient._memoryStore.conversationList[i].senderUserName = conversation.senderUserName);
            conversation.senderPortraitUri && (RongIMLib.RongIMClient._memoryStore.conversationList[i].senderPortraitUri = conversation.senderPortraitUri);
            conversation.latestMessage && (RongIMLib.RongIMClient._memoryStore.conversationList[i].latestMessage = conversation.latestMessage);
            break;
          }
        }
        return conver;
      };
      ServerDataProvider.prototype.removeConversation = function (conversationType, targetId, callback) {
        var mod = new Modules.RelationsInput();
        mod.setType(conversationType);
        RongIMLib.RongIMClient.bridge.queryMsg(27, RongIMLib.MessageUtil.ArrayForm(mod.toArrayBuffer()), targetId, {
          onSuccess: function () {
            var conversations = RongIMLib.RongIMClient._memoryStore.conversationList;
            var len = conversations.length;
            for (var i = 0; i < len; i++) {
              if (conversations[i].conversationType == conversationType && targetId == conversations[i].targetId) {
                conversations.splice(i, 1);
                break;
              }
            }
            callback.onSuccess(true);
          }, onError: function () {
            setTimeout(function () {
              callback.onError(RongIMLib.ErrorCode.CONVER_REMOVE_ERROR);
            });
          }
        });
      };
      ServerDataProvider.prototype.getMessage = function (messageId, callback) {
        callback.onSuccess(new RongIMLib.Message());
      };
      ServerDataProvider.prototype.addMessage = function (conversationType, targetId, message, callback) {
        if (callback) {
          callback.onSuccess(message);
        }
      };
      ServerDataProvider.prototype.removeMessage = function (conversationType, targetId, messageIds, callback) {
        RongIMLib.RongIMClient.getInstance().deleteRemoteMessages(conversationType, targetId, messageIds, callback);
      };
      ServerDataProvider.prototype.removeLocalMessage = function (conversationType, targetId, timestamps, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.updateMessage = function (message, callback) {
        if (callback) {
          callback.onSuccess(message);
        }
      };
      ServerDataProvider.prototype.clearMessages = function (conversationType, targetId, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.updateMessages = function (conversationType, targetId, key, value, callback) {
        var me = this;
        if (key == "readStatus") {
          if (RongIMLib.RongIMClient._memoryStore.conversationList.length > 0) {
            me.getConversationList({
              onSuccess: function (list) {
                Array.forEach(list, function (conver) {
                  if (conver.conversationType == conversationType && conver.targetId == targetId) {
                    conver.unreadMessageCount = 0;
                  }
                });
              },
              onError: function (errorCode) {
                callback.onError(errorCode);
              }
            }, null);
          }
        }
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.getConversation = function (conversationType, targetId, callback) {
        var conver = null;
        for (var i = 0, len = RongIMLib.RongIMClient._memoryStore.conversationList.length; i < len; i++) {
          if (RongIMLib.RongIMClient._memoryStore.conversationList[i].conversationType == conversationType && RongIMLib.RongIMClient._memoryStore.conversationList[i].targetId == targetId) {
            conver = RongIMLib.RongIMClient._memoryStore.conversationList[i];
            if (RongIMLib.MessageUtil.supportLargeStorage()) {
              var count = RongIMLib.RongIMClient._storageProvider.getItem("cu" + RongIMLib.Bridge._client.userId + conversationType + targetId);
              if (conver.unreadMessageCount == 0) {
                conver.unreadMessageCount = Number(count);
              }
            }
          }
        }
        callback.onSuccess(conver);
      };
      ServerDataProvider.prototype.getConversationList = function (callback, conversationTypes, count, isHidden) {
        var _Cache = RongIMLib.RongIMClient._Cahche;
        var memoryStore = RongIMLib.RongIMClient._memoryStore;
        var conversationList = memoryStore.conversationList;
        // 通过过会话列表后，从内存中获取
        if (_Cache.isSyncConversations) {
          return callback.onSuccess(conversationList);
        }
        RongIMLib.RongIMClient.getInstance().getRemoteConversationList({
          onSuccess: function (list) {
            if (RongIMLib.MessageUtil.supportLargeStorage()) {
              memoryStore.conversationList = list;
              _Cache.isSyncConversations = true;
              Array.forEach(memoryStore.conversationList, function (item) {
                var count = RongIMLib.RongIMClient._storageProvider.getItem("cu" + RongIMLib.Bridge._client.userId + item.conversationType + item.targetId);
                if (item.unreadMessageCount == 0) {
                  item.unreadMessageCount = Number(count);
                }
              });
            }
            RongIMLib.RongIMClient._memoryStore.isSyncRemoteConverList = false;
            callback.onSuccess(list);
          },
          onError: function (errorcode) {
            callback.onSuccess([]);
          }
        }, conversationTypes, count, isHidden);
        _Cache.isRunning = true;
      };
      ServerDataProvider.prototype.clearConversations = function (conversationTypes, callback) {
        Array.forEach(conversationTypes, function (conversationType) {
          Array.forEach(RongIMLib.RongIMClient._memoryStore.conversationList, function (conver) {
            if (conversationType == conver.conversationType) {
              RongIMLib.RongIMClient.getInstance().removeConversation(conver.conversationType, conver.targetId, { onSuccess: function () { }, onError: function () { } });
            }
          });
        });
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.setMessageContent = function (messageId, content, objectname) {
      };
      ;
      ServerDataProvider.prototype.getHistoryMessages = function (conversationType, targetId, timestamp, count, callback) {
        RongIMLib.RongIMClient.getInstance().getRemoteHistoryMessages(conversationType, targetId, timestamp, count, callback);
      };
      ServerDataProvider.prototype.getTotalUnreadCount = function (callback, conversationTypes) {
        var count = 0;
        if (conversationTypes) {
          for (var i = 0, len = conversationTypes.length; i < len; i++) {
            Array.forEach(RongIMLib.RongIMClient._memoryStore.conversationList, function (conver) {
              if (conver.conversationType == conversationTypes[i]) {
                count += conver.unreadMessageCount;
              }
            });
          }
        }
        else {
          Array.forEach(RongIMLib.RongIMClient._memoryStore.conversationList, function (conver) {
            count += conver.unreadMessageCount;
          });
        }
        callback.onSuccess(count);
      };
      ServerDataProvider.prototype.getConversationUnreadCount = function (conversationTypes, callback) {
        var count = 0;
        Array.forEach(conversationTypes, function (converType) {
          Array.forEach(RongIMLib.RongIMClient._memoryStore.conversationList, function (conver) {
            if (conver.conversationType == converType) {
              count += conver.unreadMessageCount;
            }
          });
        });
        callback.onSuccess(count);
      };
      ServerDataProvider.prototype.getUnreadCount = function (conversationType, targetId, callback) {
        this.getConversation(conversationType, targetId, {
          onSuccess: function (conver) {
            callback.onSuccess(conver ? conver.unreadMessageCount : 0);
          },
          onError: function (error) {
            callback.onError(error);
          }
        });
      };
      ServerDataProvider.prototype.clearUnreadCountByTimestamp = function (conversationType, targetId, timestamp, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.clearUnreadCount = function (conversationType, targetId, callback) {
        this.getConversation(conversationType, targetId, {
          onSuccess: function (conver) {
            if (conver) {
              if (RongIMLib.MessageUtil.supportLargeStorage()) {
                RongIMLib.RongIMClient._storageProvider.removeItem("cu" + RongIMLib.Bridge._client.userId + conversationType + targetId);
              }
              conver.unreadMessageCount = 0;
              conver.mentionedMsg = null;
              var mentioneds = RongIMLib.RongIMClient._storageProvider.getItem("mentioneds_" + RongIMLib.Bridge._client.userId + '_' + conversationType + '_' + targetId);
              if (mentioneds) {
                var info = JSON.parse(mentioneds);
                delete info[conversationType + "_" + targetId];
                if (!RongIMLib.MessageUtil.isEmpty(info)) {
                  RongIMLib.RongIMClient._storageProvider.setItem("mentioneds_" + RongIMLib.Bridge._client.userId + '_' + conversationType + '_' + targetId, JSON.stringify(info));
                }
                else {
                  RongIMLib.RongIMClient._storageProvider.removeItem("mentioneds_" + RongIMLib.Bridge._client.userId + '_' + conversationType + '_' + targetId);
                }
              }
            }
            callback.onSuccess(true);
          },
          onError: function (error) {
            callback.onError(error);
          }
        });
      };
      ServerDataProvider.prototype.setConversationToTop = function (conversationType, targetId, isTop, callback) {
        var me = this;
        this.getConversation(conversationType, targetId, {
          onSuccess: function (conver) {
            conver.isTop = isTop;
            me.addConversation(conver, callback);
            callback.onSuccess(true);
          },
          onError: function (error) {
            callback.onError(error);
          }
        });
      };
      ServerDataProvider.prototype.clearListeners = function () {
      };
      ServerDataProvider.prototype.setServerInfo = function (info) {
      };
      ServerDataProvider.prototype.getUnreadMentionedMessages = function (conversationType, targetId) {
        return null;
      };
      ServerDataProvider.prototype.setConversationHidden = function (conversationType, targetId, isHidden) {
      };
      ServerDataProvider.prototype.setMessageExtra = function (messageId, value, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.setMessageReceivedStatus = function (messageId, receivedStatus, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.setMessageSentStatus = function (messageId, sentStatus, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.getAllConversations = function (callback) {
        callback.onSuccess([]);
      };
      ServerDataProvider.prototype.getConversationByContent = function (keywords, callback) {
        callback.onSuccess([]);
      };
      ServerDataProvider.prototype.getMessagesFromConversation = function (conversationType, targetId, keywords, callback) {
        callback.onSuccess([]);
      };
      ServerDataProvider.prototype.searchConversationByContent = function (keyword, callback, conversationTypes) {
        callback.onSuccess([]);
      };
      ServerDataProvider.prototype.searchMessageByContent = function (conversationType, targetId, keyword, timestamp, count, total, callback) {
        callback.onSuccess([]);
      };
      ServerDataProvider.prototype.getDelaTime = function () {
        return RongIMLib.RongIMClient._memoryStore.deltaTime;
      };
      ServerDataProvider.prototype.getUserStatus = function (userId, callback) {
        callback.onSuccess(new RongIMLib.UserStatus());
      };
      ServerDataProvider.prototype.setUserStatus = function (userId, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.subscribeUserStatus = function (userIds, callback) {
        callback.onSuccess(true);
      };
      ServerDataProvider.prototype.setOnReceiveStatusListener = function (callback) {
        callback();
      };
      return ServerDataProvider;
    }());
    RongIMLib.ServerDataProvider = ServerDataProvider;
  })(RongIMLib || (RongIMLib = {}));

  // var RongIMLib;
  (function (RongIMLib) {
    // static _instance: LocalStorageProvider = new LocalStorageProvider();
    var prefix = 'rong_';

    function LocalStorageProvider() {
      var d = new Date(), m = d.getMonth() + 1, date = d.getFullYear() + '/' + (m.toString().length == 1 ? '0' + m : m) + '/' + d.getDate(), nowDate = new Date(date).getTime();
      for (var key in localStorage) {
        if (key.lastIndexOf('RECEIVED') > -1) {
          var recObj = JSON.parse(localStorage.getItem(key));
          for (var key_1 in recObj) {
            nowDate - recObj[key_1].dealtime > 0 && (delete recObj[key_1]);
          }
          if (RongIMLib.ObjectTools.isEmpty(recObj)) {
            localStorage.removeItem(key);
          }
          else {
            localStorage.setItem(key, JSON.stringify(recObj));
          }
        }
        if (key.lastIndexOf('SENT') > -1) {
          var sentObj = JSON.parse(localStorage.getItem(key));
          nowDate - sentObj.dealtime > 0 && (localStorage.removeItem(key));
        }
      }
    }

    RongIMLib.LocalStorageProvider = {
      setItem: function (composedKey, object) {
        if (composedKey) {
          composedKey.indexOf(prefix) == -1 && (composedKey = prefix + composedKey);
          wx.setStorageSync(composedKey, object);
        }
      },
      getItem: function (composedKey) {
        if (composedKey) {
          composedKey.indexOf(prefix) == -1 && (composedKey = prefix + composedKey);
          return wx.getStorageSync(composedKey);
        }
        return "";
      },
      getItemKey: function (composedStr) {
        if (composedStr.indexOf('rong_') == -1) {
          composedStr = 'rong_' + composedStr;
        }
        var item = "";
        var res = wx.getStorageInfoSync();
        var keys = res.keys;
        keys.forEach(function (key) {
          if (key.indexOf(composedStr) == 0) {
            item = key;
          }
        });
        return item;
      },
      removeItem: function (composedKey) {
        if (composedKey) {
          composedKey.indexOf(prefix) == -1 && (composedKey = prefix + composedKey);
          wx.removeStorageSync(composedKey);
        }
      },
      clearItem: function () {
        var res = wx.getStorageInfoSync();
        var keys = res.keys;
        keys.forEach(function (key) {
          if (key.indexOf(prefix) == 0) {
            wx.removeStorageSync(key);
          }
        });
      },
      //单位：字节
      onOutOfQuota: function () {
        return JSON.stringify(localStorage).length;
      }
    };
  })(RongIMLib || (RongIMLib = {}));


  // var RongIMLib;
  (function (RongIMLib) {
    RongIMLib.FeatureDectector = function () {
      // load protobuf

      // RongIMLib.Transportations._TransportType = RongIMLib.Socket.WEBSOCKET;
      // if ("WebSocket" in window && "ArrayBuffer" in window && WebSocket.prototype.CLOSED === 3 && !RongIMLib.RongIMClient._memoryStore.depend.isPolling) {
      //     var str = RongIMLib.RongIMClient._memoryStore.depend.protobuf;
      //     this.script.src = str;
      //     this.head.appendChild(this.script);
      // }
      // else {
      //     RongIMLib.Transportations._TransportType = "xhr-polling";
      //     window["Modules"] = Polling;
      // }
    };
  })(RongIMLib || (RongIMLib = {}));


  // var RongIMLib;
  (function (RongIMLib) {
    var FeaturePatcher = (function () {
      function FeaturePatcher() {
      }
      FeaturePatcher.prototype.patchAll = function () {
        this.patchJSON();
        this.patchForEach();
      };
      FeaturePatcher.prototype.patchForEach = function () {
        if (!Array.forEach) {
          Array.forEach = function (arr, func) {
            for (var i = 0; i < arr.length; i++) {
              func.call(arr, arr[i], i, arr);
            }
          };
        }
      };
      FeaturePatcher.prototype.patchJSON = function () {
        // if (!window["JSON"]) {
        wx["JSON"] = (function () {
          function JSON() {
          }
          JSON.parse = function (sJSON) {
            return eval('(' + sJSON + ')');
          };
          JSON.stringify = function (value) {
            return this.str("", { "": value });
          };
          JSON.str = function (key, holder) {
            var i, k, v, length, mind = "", partial, value = holder[key], me = this;
            if (value && typeof value === "object" && typeof value.toJSON === "function") {
              value = value.toJSON(key);
            }
            switch (typeof value) {
              case "string":
                return me.quote(value);
              case "number":
                return isFinite(value) ? String(value) : "null";
              case "boolean":
              case "null":
                return String(value);
              case "object":
                if (!value) {
                  return "null";
                }
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                  length = value.length;
                  for (i = 0; i < length; i += 1) {
                    partial[i] = me.str(i, value) || "null";
                  }
                  v = partial.length === 0 ? "[]" : "[" + partial.join(",") + "]";
                  return v;
                }
                for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = me.str(k, value);
                    if (v) {
                      partial.push(me.quote(k) + ":" + v);
                    }
                  }
                }
                v = partial.length === 0 ? "{}" : "{" + partial.join(",") + "}";
                return v;
            }
          };
          JSON.quote = function (string) {
            var me = this;
            me.rx_escapable.lastIndex = 0;
            return me.rx_escapable.test(string) ? '"' + string.replace(me.rx_escapable, function (a) {
              var c = me.meta[a];
              return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
          };
          JSON.rx_escapable = new RegExp('[\\\"\\\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]', "g");
          JSON.meta = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "''": "\\''",
            "\\": "\\\\"
          };
          return JSON;
        }());
        // }
      };
      return FeaturePatcher;
    }());
    RongIMLib.FeaturePatcher = FeaturePatcher;
  })(RongIMLib || (RongIMLib = {}));




  // var RongIMLib;
  (function (RongIMLib) {
    var ObjectTools = (function () {
      function ObjectTools() {
      }
      ObjectTools.isEmpty = function (obj) {
        var empty = true;
        for (var key in obj) {
          empty = false;
          break;
        }
        return empty;
      };
      ObjectTools.buildOptions = function (one, opts, protocol) {
        if (typeof one == 'object') {
          for (var key in opts) {
            if (key == 'navi' || key == 'api') {
              one[key] && (opts[key] = protocol + one[key]);
            }
            else {
              one[key] && (opts[key] = one[key]);
            }
          }
        }
        return opts;
      };
      return ObjectTools;
    }());
    RongIMLib.ObjectTools = ObjectTools;
    var PublicServiceMap = (function () {
      function PublicServiceMap() {
        this.publicServiceList = [];
      }
      PublicServiceMap.prototype.get = function (publicServiceType, publicServiceId) {
        for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
          if (this.publicServiceList[i].conversationType == publicServiceType && publicServiceId == this.publicServiceList[i].publicServiceId) {
            return this.publicServiceList[i];
          }
        }
      };
      PublicServiceMap.prototype.add = function (publicServiceProfile) {
        var isAdd = true, me = this;
        for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
          if (me.publicServiceList[i].conversationType == publicServiceProfile.conversationType && publicServiceProfile.publicServiceId == me.publicServiceList[i].publicServiceId) {
            this.publicServiceList.unshift(this.publicServiceList.splice(i, 1)[0]);
            isAdd = false;
            break;
          }
        }
        if (isAdd) {
          this.publicServiceList.unshift(publicServiceProfile);
        }
      };
      PublicServiceMap.prototype.replace = function (publicServiceProfile) {
        var me = this;
        for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
          if (me.publicServiceList[i].conversationType == publicServiceProfile.conversationType && publicServiceProfile.publicServiceId == me.publicServiceList[i].publicServiceId) {
            me.publicServiceList.splice(i, 1, publicServiceProfile);
            break;
          }
        }
      };
      PublicServiceMap.prototype.remove = function (conversationType, publicServiceId) {
        var me = this;
        for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
          if (me.publicServiceList[i].conversationType == conversationType && publicServiceId == me.publicServiceList[i].publicServiceId) {
            this.publicServiceList.splice(i, 1);
            break;
          }
        }
      };
      return PublicServiceMap;
    }());
    RongIMLib.PublicServiceMap = PublicServiceMap;
    /**
     * 会话工具类。
     */
    var ConversationMap = (function () {
      function ConversationMap() {
        this.conversationList = [];
      }
      ConversationMap.prototype.get = function (conversavtionType, targetId) {
        for (var i = 0, len = this.conversationList.length; i < len; i++) {
          if (this.conversationList[i].conversationType == conversavtionType && this.conversationList[i].targetId == targetId) {
            return this.conversationList[i];
          }
        }
        return null;
      };
      ConversationMap.prototype.add = function (conversation) {
        var isAdd = true;
        for (var i = 0, len = this.conversationList.length; i < len; i++) {
          if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
            this.conversationList.unshift(this.conversationList.splice(i, 1)[0]);
            isAdd = false;
            break;
          }
        }
        if (isAdd) {
          this.conversationList.unshift(conversation);
        }
      };
      /**
       * [replace 替换会话]
       * 会话数组存在的情况下调用add方法会是当前会话被替换且返回到第一个位置，导致用户本地一些设置失效，所以提供replace方法
       */
      ConversationMap.prototype.replace = function (conversation) {
        for (var i = 0, len = this.conversationList.length; i < len; i++) {
          if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
            this.conversationList.splice(i, 1, conversation);
            break;
          }
        }
      };
      ConversationMap.prototype.remove = function (conversation) {
        for (var i = 0, len = this.conversationList.length; i < len; i++) {
          if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
            this.conversationList.splice(i, 1);
            break;
          }
        }
      };
      return ConversationMap;
    }());
    RongIMLib.ConversationMap = ConversationMap;
    var CheckParam = (function () {
      function CheckParam() {
      }
      CheckParam.getInstance = function () {
        if (!CheckParam._instance) {
          CheckParam._instance = new CheckParam();
        }
        return CheckParam._instance;
      };
      CheckParam.prototype.check = function (f, position, d, c) {
        if (RongIMLib.RongIMClient._dataAccessProvider || d) {
          for (var g = 0, e = c.length; g < e; g++) {
            if (!new RegExp(this.getType(c[g])).test(f[g])) {
              throw new Error("The index of " + g + " parameter was wrong type " + this.getType(c[g]) + " [" + f[g] + "] -> position:" + position);
            }
          }
        }
        else {
          throw new Error("The parameter is incorrect or was not yet instantiated RongIMClient -> position:" + position);
        }
      };
      CheckParam.prototype.getType = function (str) {
        var temp = Object.prototype.toString.call(str).toLowerCase();
        return temp.slice(8, temp.length - 1);
      };

      return CheckParam;
    }());
    RongIMLib.CheckParam = CheckParam;
    var LimitableMap = (function () {
      function LimitableMap(limit) {
        this.map = {};
        this.keys = [];
        this.limit = limit || 10;
      }
      LimitableMap.prototype.set = function (key, value) {
        this.map[key] = value;
      };
      LimitableMap.prototype.get = function (key) {
        return this.map[key] || 0;
      };
      LimitableMap.prototype.remove = function (key) {
        delete this.map[key];
      };
      return LimitableMap;
    }());
    RongIMLib.LimitableMap = LimitableMap;
    var RongAjax = (function () {
      function RongAjax(options) {
        var me = this;
        me.xmlhttp = null;
        me.options = options;
        var hasCORS = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
        if ("undefined" != typeof XMLHttpRequest && hasCORS) {
          me.xmlhttp = new XMLHttpRequest();
        }
        else if ("undefined" != typeof XDomainRequest) {
          me.xmlhttp = new XDomainRequest();
        }
        else {
          me.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
      }
      RongAjax.prototype.send = function (callback) {
        var me = this;
        me.options.url || (me.options.url = "http://upload.qiniu.com/putb64/-1");
        me.xmlhttp.onreadystatechange = function () {
          if (me.xmlhttp.readyState == 4) {
            if (me.options.type) {
              callback();
            }
            else {
              callback(JSON.parse(me.xmlhttp.responseText.replace(/'/g, '"')));
            }
          }
        };
        me.xmlhttp.open("POST", me.options.url, true);
        me.xmlhttp.withCredentials = false;
        if ("setRequestHeader" in me.xmlhttp) {
          if (me.options.type) {
            me.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
          }
          else {
            me.xmlhttp.setRequestHeader("Content-type", "application/octet-stream");
            me.xmlhttp.setRequestHeader('Authorization', "UpToken " + me.options.token);
          }
        }
        me.xmlhttp.send(me.options.type ? "appKey=" + me.options.appKey + "&deviceId=" + me.options.deviceId + "&timestamp=" + me.options.timestamp + "&deviceInfo=" + me.options.deviceInfo + "&privateInfo=" + JSON.stringify(me.options.privateInfo) : me.options.base64);
      };
      return RongAjax;
    }());
    RongIMLib.RongAjax = RongAjax;
  })(RongIMLib || (RongIMLib = {}));

  return RongIMLib;

})(wx);
