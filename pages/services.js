const RongIMLib = require('./lib/RongIMLib.wx-1.1.4');
const RongIMClient = RongIMLib.RongIMClient;

const utils = require('./utils/utils.js');
const { UserList, GroupList, MusicList} = require('./mock.js');

let imInstance = null;
let currentUser = null;

let config = {
  appkey: '',
  url: '',
  wsScheme: 'wss://',
  protocol: 'https://'
};

let unknowUser = {
  name: '火星人',
  avatar: 'http://fsprodrcx.cn.ronghub.com/x5sJTceaCHnQcglNx5sJTcccuuLHmlZlqv56Pqb8bA/%E7%81%AB%E6%98%9F%E7%8C%8E%E4%BA%BA.png?token=Um9uZ2Nsb3VkMTQyMDE5MTIwOTAzMDcwNzM2MDBtZXNzYWdlOzs7OTkzNTI3Mzg5'
};
let unknowGroup = {
  name: '火星群组',
  avatar: 'http://fsprodrcx.cn.ronghub.com/mXjs5Zl67dGOkezlmXjs5ZnJPTiZeWe_9B2flvgfiQ/%E7%81%AB%E6%98%9F.png?token=Um9uZ2Nsb3VkMTQyMDE5MTIwOTAzMDcwNzM2MDBtZXNzYWdlOzs7OTkzNTI3Mzg5'
};

let unkownChatroom = {
  name: '火星聊天室',
  avatar: 'http://fsprodrcx.cn.ronghub.com/mXjs5Zl67dGOkezlmXjs5ZnJPTiZeWe_9B2flvgfiQ/%E7%81%AB%E6%98%9F.png?token=Um9uZ2Nsb3VkMTQyMDE5MTIwOTAzMDcwNzM2MDBtZXNzYWdlOzs7OTkzNTI3Mzg5'
};

let unkownSystem = {
  name: '火星系统',
  avatar: 'http://fsprodrcx.cn.ronghub.com/mXjs5Zl67dGOkezlmXjs5ZnJPTiZeWe_9B2flvgfiQ/%E7%81%AB%E6%98%9F.png?token=Um9uZ2Nsb3VkMTQyMDE5MTIwOTAzMDcwNzM2MDBtZXNzYWdlOzs7OTkzNTI3Mzg5'
};


let registerMessages = () => {
  let messageName = "MusicMessage"; 
  let objectName = "seal:music";
  let mesasgeTag = new RongIMLib.MessageTag(true, true); 
  let prototypes = ["url", "name", "author", "poster"]; 
  RongIMClient.registerMessageType(messageName, objectName, mesasgeTag, prototypes);
};

let handleTextMessage = (message) => {
  if (message.messageType === 'TextMessage') {
    let content = message.content.content || '';
    message.content.content = utils.replaceSensitiveWords(content);
  }
  return message;
};

let ErrorInfo = {
  4: {
    code: 4,
    msg: 'Appkey、Token 不匹配'
  },
  3: {
    code: 3,
    msg: '网络不可用'
  }
};
function ObserverList() {
  var checkIndexOutBound = function (index, bound) {
    return index > -1 && index < bound;
  };

  this.observerList = [];

  this.add = function (observer, force) {
    if (force) {
      this.observerList.length = 0;
    }
    this.observerList.push(observer);
  };

  this.get = function (index) {
    if (checkIndexOutBound(index, this.observerList.length)) {
      return this.observerList[index];
    }
  };

  this.count = function () {
    return this.observerList.length;
  };

  this.removeAt = function (index) {
    checkIndexOutBound(index, this.observerList.length) && this.observerList.splice(index, 1);
  };

  this.remove = function (observer) {
    if (!observer) {
      this.observerList.length = 0;
      return;
    }
    var observerList = Object.prototype.toString.call(observer) === '[object Function]' ? [observer] : observer;
    for (var i = 0, len = this.observerList.length; i < len; i++) {
      for (var j = 0; j < observerList.length; j++) {
        if (this.observerList[i] === observerList[j]) {
          this.removeAt(i);
          break;
        }
      }
      // if (this.observerList[i] === observer[i]) {
      //     this.removeAt(i);
      //     break;
      // }
    }
  };

  this.notify = function (val) {
    for (var i = 0, len = this.observerList.length; i < len; i++) {
      this.observerList[i](val);
    }
  };

  this.indexOf = function (observer, startIndex) {
    var i = startIndex || 0,
      len = this.observerList.length;
    while (i < len) {
      if (this.observerList[i] === observer) {
        return i;
      }
      i++;
    }
    return -1;
  };
}

let Friend = {};

Friend.getList = () => {
  return Promise.resolve(utils.filter(UserList, (friend) => {
    return (friend.id != currentUser.id);
  }));
};

let User = {};

let getUserKey = () => {
  return 'user-' + config.appkey;
};

let setLocalUser = (user) => {
  wx.setStorage({
    key: getUserKey(),
    data: user,
  })
};

let getLocalUser = () => {
  return wx.getStorageSync(getUserKey());
};

let getUserIndex = (/*name, max*/) => {
  var maxIndex = UserList.length - 1;
  return Math.ceil(Math.random() * maxIndex);

  // console.log(utils.toUnicode(name));
  // var index = utils.toUnicode(name).slice(-1);
  // //转 unicode 后最后一个字符不是数字，给固定🈯值
  // if (isNaN(index)){
  //   index = max;
  // }
  // if (index > max){
  //   index = max;
  // }
  // return index;
};

let getUser = (/*user*/) => {
  let user = getLocalUser();
  if (user) {
    return user;
  }
  // user = utils.rename(user, {avatarUrl: 'avatar', nickName: 'name'});
  // let maxIndex = UserList.length - 1;
  // let index = getUserIndex(user.name,  maxIndex);
  let index = getUserIndex();
  let _user = UserList[index];
  setLocalUser(_user);
  // utils.extend(_user, user);
  return _user
};

let getUserById = (id) => {
  let { name, avatar} = utils.find(UserList, (user) => {
    return (id == user.id);
  });
  return {
    name,
    avatar
  };
};

User.getToken = (user) => {
  currentUser = getUser(user);
  console.log('currentUser', currentUser);
  return Promise.resolve(currentUser);
};

User.joinChatroom = (id) => {
  return new Promise((resolve, reject) => {
    imInstance.joinChatRoom(id, 50, {
      onSuccess: resolve,
      onError: reject
    });
  });
};

let bindSender = (message, position) => {
  if (!utils.isArray(message)) {
    message = [message];
  }
  let getSender = {
    1: (msg) => {
      msg.sender = utils.find(UserList, (user) => {
        return (user.id == msg.senderUserId);
      }) || Object.assign(unknowUser, msg);
    },
    3: (msg) => {
      msg.sender = utils.find(UserList, (user) => {
        return (user.id == msg.senderUserId);
      }) || Object.assign(unknowGroup, msg);
    },
    4: (msg) => {
      msg.sender = utils.find(UserList, (user) => {
        return (user.id == msg.senderUserId);
      }) || Object.assign(unkownChatroom, msg);;
    },
    6: (msg) => {
      msg.sender = utils.find(UserList, (user) => {
        return (user.id == msg.senderUserId);
      }) || Object.assign(unkownSystem, msg);;
    }
  };
  utils.map(message, (msg) => {
    msg.pos = position;
    getSender[msg.conversationType](msg);
    utils.formatMessage(msg);
    return msg;
  });
};

let Message = {
  watcher: new ObserverList(),
  _push: (message) => {
    //不处理离线消息
    if(message.offLineMessage){
      return;
    }
    bindSender(message);
    Message.watcher.notify(message);
  }
};


let sendMessage = (type, targetId, message) => {
  let bindUser = (_msg, next) => {
    bindSender(_msg);
    next(_msg);
  };

  return new Promise((resolve, reject) => {
    let { name, avatar } = currentUser;
    let user = {
      name,
      avatar
    };

    let messageMap = {
      text: () => {
        let {content} = message;
        content = utils.replaceSensitiveWords(content);
        return new RongIMLib.TextMessage({ content, user });
      },
      image: () => {
        let { content, imageUri, extra } = message;
        return new RongIMLib.ImageMessage({ content, imageUri, user, extra });
      },
      voice: () => {
        let { content, duration } = message;
        return new RongIMLib.HQVoiceMessage({
          remoteUrl: content,
          duration,
          user
        });
      },
      music: () => {
        let {name, url, author, poster} = message;
        return new RongIMClient.RegisterMessage.MusicMessage({ name, url, author, poster, user});
      }
    };

    let msg = messageMap[message.type]();
    imInstance.sendMessage(+type, targetId, msg, {
      onSuccess: result => {
        console.warn('service promise sendmessage success: ', msg);
        bindUser(result, resolve);
      },
      onError: (error, result) => {
        console.warn('service promise sendmessage error: ', error);
        //bindUser(message, reject);
      }
    });
  });
};

Message.clearByTime = (msg) => {
  msg.timestamp = msg.sentTime;
  return new Promise((resolve, reject) => {
    imInstance.clearRemoteHistoryMessages(msg, {
      onSuccess: resolve,
      onError: reject
    });
  });
};

Message.clearByMsg = (msg) => {
  return new Promise((resolve, reject) => {
    imInstance.deleteRemoteMessages(msg.conversationType, msg.targetId, [msg], {
      onSuccess: resolve,
      onError: reject
    });
  });
};

//params.type
//params.targetId
//params.content  
Message.sendText = (params) => {
  let {type, targetId, content} = params;
  return sendMessage(type, targetId, {
    type: 'text',
    content
  })
};

//params.type
//params.targetId
//params.content 
//params.iamgeUri 
Message.sendImage = (params) => {
  let { type, targetId, content, imageUri, extra } = params;
  return sendMessage(type, targetId, {
    type: 'image',
    content,
    imageUri,
    extra
  })
};

Message.recall = (msg) => {
  return new Promise((resolve, reject) => {
    imInstance.sendRecallMessage(msg, {
      onSuccess: resolve,
      onError: reject
    });
  });
};

//params.type
//params.targetId
Message.sendVoice = (params) => {
  let { type, targetId, content} = params;
  let data = utils.extend({ type: 'voice' }, content);
  return sendMessage(type, targetId, data)
};

let getMusic = () => {
  let len = MusicList.length;
  let index = Math.floor(Math.random() * len);
  return MusicList[index];
};
Message.sendMusic = (params) => {
  let { type, targetId } = params;
  let content = utils.extend({ type: 'music' }, getMusic());
  return sendMessage(type, targetId, content);
};

// params.type 
// params.targetId
// params.position 0/1
Message.getList = (params) => {
  let {type, targetId, position, count} = params;
  count = count || 5;
  return new Promise((resolve, reject) => {
    let timestamp = position > 0 ? null : position;
    imInstance.getHistoryMessages(+type, targetId, timestamp, count, {
      onSuccess: (messageList, hasMore) => {
        messageList = messageList.map((message) => {
          message = handleTextMessage(message);
          return message;
        });
        // // 过滤未处理的消息类型
        // messageList = messageList.filter((message) => {
        //   return message.messageType != 'RecallCommandMessage'
        // });
        bindSender(messageList, position);
        hasMore = !!hasMore;
        resolve({ messageList, hasMore});
      },
      onError: (error) => {
        console.error('gethistoryMessages', error);
        reject(error);
      }
    });
  });
};

Message.create = (params) => {
  let {name, type, targetId, content} = params;
  let message = {
    messageType: name,
    conversationType: type,
    targetId: targetId,
    senderUserId: currentUser.id,
    content: content,
    messageDirection: 1,
    messageUId: 'M' + Date.now(),
    sentTime: Date.now()
  };
  bindSender(message);
  return message;
};

Message.watch = (watch) => {
  Message.watcher.add(watch);
};

let Conversation = {
  watcher: new ObserverList()
};

Conversation.remove = (type, targetId) => {
  return new Promise((resolve, reject) => {
    imInstance.removeConversation(type, targetId, {
      onSuccess: resolve,
      onError: reject
    });
  });
};

let getMockMessage = (targetId, type) => {
  return {
    content: {
      messageName: "TextMessage",
      content: ""
    },
    conversationType: type,
    objectName: "RC:TxtMsg",
    targetId: targetId,
    messageType: "TextMessage",
    sentTime: Date.now()
  };
}

let bindUserInfo = (list) => {
  let includedTargetMarkList = []; // 已有会话合集
  let getTargetMark = (target) => {
    return target.type + '_' + target.id;
  };
  let isTargetIncluded = (target) => {
    let targetMark = getTargetMark(target);
    return includedTargetMarkList.indexOf(targetMark) !== -1;
  };

  if (!utils.isArray(list)){
    list = [list];
  }

  let infoMap = {
      1: (conversation) => {
        var target = utils.find(UserList, (user) => {
          return user.id == conversation.targetId
        }) || unknowUser;
        if (target.id) {
          includedTargetMarkList.push(getTargetMark(target));
        }
        conversation.target = target;
      },
      2: (conversation) => {
        conversation.target = unknowUser;
      },
      3: (conversation) => {
        var target = utils.find(GroupList, (group) => {
          return group.id == conversation.targetId
        }) || unknowGroup;
        if (target.id) {
          includedTargetMarkList.push(getTargetMark(target));
        }
        conversation.target = target;
      },
      6: (conversation) => {
        conversation.target = unkownSystem;
      },
      10: (conversation) => {
        conversation.target = unknowUser;
      }
  };
  let formatMsg = (msg) => {
    let {messageType} = msg;
    let content = '[此消息类型未解析]';
    if (messageType == 'TextMessage'){
      content = msg.content.content;
    }
    if (messageType == 'HQVoiceMessage') {
      content = '[语音]';
    }
    if (messageType == 'ImageMessage') {
      content = '[图片]';
    }
    if (messageType == 'FileMessage') {
      content = '[文件]';
    }
    if (messageType == 'MusicMessage') {
      content = '[音乐]';
    }
    return content;
  };
  utils.map(list, (conversation) => {
    let {sentTime} = conversation;
    conversation._sentTime = utils.getTime(sentTime);
    conversation.unReadCount = conversation.unreadMessageCount;
    let { latestMessage } = conversation;
    latestMessage = handleTextMessage(latestMessage);
    conversation.content = formatMsg(latestMessage);
    let _type = conversation.conversationType;
    _type = _type > 6 ? 10 : _type;
    if (infoMap[_type]) {
      infoMap[_type](conversation);
    }
  });

  // utils.map(utils.deepExtend(UserList, GroupList), (user) => {
  //   if (!isTargetIncluded(user)) {
  //     let latestMessage = getMockMessage(user.id, user.type); 
  //     list.push({
  //       target: user,
  //       targetId: user.id,
  //       conversationType: user.type,
  //       latestMessage: latestMessage,
  //       sentTime: latestMessage.sentTime
  //     });
  //   }
  // });

};

const sendSyncReadReceipt = (conversation) => {
  var { latestMessage, conversationType, targetId } = conversation;
  if (!latestMessage) {
    return;
  }
  var { sentTime } = latestMessage;
  var msg = new RongIMLib.SyncReadStatusMessage({ lastMessageSendTime: sentTime });
  imInstance.sendMessage(conversationType, targetId, msg, {
    onSuccess: function() {},
    onError: function() {}
  });
};

const sendReadReceipt = (conversation) => {
  var { latestMessage, conversationType, targetId } = conversation;
  if (!latestMessage) {
    return;
  }
  var { messageUId, sentTime } = latestMessage;
  var msg = new RongIMLib.ReadReceiptMessage({ messageUId: messageUId, lastMessageSendTime: sentTime, type: conversationType });
  imInstance.sendMessage(conversationType, targetId, msg, {
    onSuccess: function() {},
    onError: function() {}
  });
};

Conversation.clearUnreadCount = (conversation) => {
  let { conversationType, targetId } = conversation;
  let isGroup = conversationType === RongIMLib.ConversationType.GROUP;
  isGroup ? sendSyncReadReceipt(conversation) : sendReadReceipt(conversation);
  imInstance.clearUnreadCount(conversationType, targetId, {
    onSuccess: function(){},
    onError: function(){}
  });
};
Conversation.clearTotalUnreadCount = () => {
  return new Promise((resolve, reject) => {
    imInstance.clearTotalUnreadCount({
      onSuccess: resolve,
      onError: reject
    });
  });
};
Conversation.watch = (watcher) => {
  RongIMClient.Conversation.watch(function(list){
    list = utils.parseObj(list);
    list = list.filter(function(item) {
      var allowTypes = [RongIMLib.ConversationType.PRIVATE, RongIMLib.ConversationType.GROUP, RongIMLib.ConversationType.SYSTEM];
      return allowTypes.indexOf(item.conversationType) !== -1;
    });
    console.log('Conversation Watch:', list);
    bindUserInfo(list);
    watcher(list);
  });
};
let Status = {
  watcher: new ObserverList()
};
Status.disconnect = () => {
  RongIMClient.getInstance().disconnect();
};
Status.reconnect = () => {
  wx.showLoading({
    title: '正在重连...',
  });
  var callback = {
    onSuccess: function (userId) {
      wx.hideLoading();
      wx.showToast({
        title: '重连成功',
        icon: 'success',
        duration: 2000
      });
    },
    onError: function (errorCode) {
      Status.reconnect();
    }
  };
  var config = {
    auto: true,
    url: 'cdn.ronghub.com/RongIMLib-2.2.6.min.js?d=' + Date.now(),
    rate: [100, 1000, 1000, 1000, 1000]
  };
  RongIMClient.reconnect(callback, config);
};
Status.connect = (user) => {
  console.log(user);
  RongIMClient.setConnectionStatusListener({
    onChanged: (status) => {
      Status.watcher.notify(status);
    }
  });

  let receiveMessage = (message) => {
      let {messageType} = message;
      let messageCtrol = {
        otherMessage: () => {
          message = handleTextMessage(message);
          Message._push(message);
        },
        SyncReadStatusMessage: () => {
          var isSelfSend = currentUser.id === message.senderUserId;
          isSelfSend && Conversation.clearUnreadCount(message);
        },
        ReadReceiptMessage: () => {
          var isSelfSend = currentUser.id === message.senderUserId;
          isSelfSend && Conversation.clearUnreadCount(message);
        }
      };
      let messageHandler = messageCtrol[messageType] || messageCtrol.otherMessage;
      messageHandler();
  };
  RongIMClient.setOnReceiveMessageListener({
    onReceived: receiveMessage
  });

  return User.getToken(user).then((user) => {
    return new Promise((resolve, reject) => {
      RongIMClient.connect(user.token, {
        onSuccess: (userId) => {
          resolve(userId);
        },
        onTokenIncorrect: () => {
          var msg = ErrorInfo[RongIMLib.ConnectionState.TOKEN_INCORRECT];
          reject(msg);
        },
        onError: (error) => {
          console.log('eeeeaaaa', error);
          var msg = ErrorInfo[RongIMLib.ConnectionState.TOKEN_INCORRECT] || {
            code: error,
            msg: error
          };
          reject(msg);
        }
      });
    });
  });
};

Status.watch = (watch) => {
  var force = true;
  Status.watcher.add(watch, force);
};

Status.clearLocal = () => {
  wx.clearStorage();
  return Promise.resolve();
};

let File = {};

File.upload = (file) => {
  let fileType = file.fileType || RongIMLib.FileType.FILE;
  return new Promise((resolve, reject) => {
    imInstance.getFileToken(fileType, {
      onSuccess: (result) => {
        let { token } = result;
        wx.uploadFile({
          url: 'https://up.qbox.me',
          filePath: file.path,
          name: 'file',
          formData: {
            token: token
          },
          success: function (res) {
            var data = res.data
            var result = JSON.parse(data);
            var hash = result.hash;
            imInstance.getFileUrl(fileType, hash, 'vioce.mp3', {
              onSuccess: (file) => {
                resolve(file);
              },
              onError: (error) => {
                console.log('upload file, getFileURL:', error);
              }
            });
          }
        })
      },
      onError: (error) => {
        console.log('upload file: ', error);
      }
    });
  });
};

let modules = {
  User,
  Message,
  Conversation,
  Friend,
  Status,
  File,
  ConnectionStatus: RongIMLib.ConnectionStatus
};
module.exports = (_config) => {
  utils.extend(config, _config);
  RongIMClient.init(config.appkey, null, {
    navi: config.navi,
    cmp: config.cmp,
    wsScheme: config.wsScheme,
    protocol: 'http://',
    cometList: ['cometxq.rongcloud.net:8200']
  });
  registerMessages();
  imInstance = RongIMClient.getInstance();
  return modules;
};
