
/**
 * RongIMLib-3.0.2-upload.js 该 SDK 为 BOS 上传分支 SDK, 调用 getFileUrl 会返回上传必要的 header 头 Authorization（ bosToken ） 、 x-bce-date （ bosDate ） 
*/

const RongIMLib = require('./lib/RongIMLib-3.0.7-dev.js');

const utils = require('./utils/utils.js');
const { UserList, GroupList, MusicList} = require('./mock.js');

let imInstance = null;
let currentUser = null;

let conversationList = [];

let config = {
  appkey: '',
  url: '',
  wsScheme: 'wss://',
  protocol: 'https://'
};


// let registerMessages = () => {
//   let messageName = "MusicMessage"; 
//   let objectName = "seal:music";
//   let mesasgeTag = new RongIMLib.MessageTag(true, true); 
//   let prototypes = ["url", "name", "author", "poster"]; 
//   RongIMClient.registerMessageType(messageName, objectName, mesasgeTag, prototypes);
// };

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

let getUserIndex = (name, max) => {
  var index = utils.toUnicode(name).slice(-1);
  //转 unicode 后最后一个字符不是数字，给固定🈯值
  if (isNaN(index)){
    index = max;
  }
  if (index > max){
    index = max;
  }
  return index;
};

let getUser = (user) => {
  user = utils.rename(user, {avatarUrl: 'avatar', nickName: 'name'});
  let maxIndex = UserList.length - 1;
  let index = getUserIndex(user.name,  maxIndex);
  let _user = utils.extend(UserList[index], {
    token: user.token
  });
  // let _user = UserList[index]
  return _user
};

User.getToken = (user) => {
  currentUser = getUser(user);
  return Promise.resolve(currentUser);
};

User.joinChatroom = (id) => {
  const chatRoom = imInstance.ChatRoom.get({id});
  return chatRoom.join({ count: -1 });
};

let bindSender = (message, position) => {
  if (!utils.isArray(message)) {
    message = [message];
  }
  let getSender = {
    1: (msg) => {
      msg.sender = {
        name: msg.senderUserId,
        type: msg.type,
        avatar: 'http://7xogjk.com1.z0.glb.clouddn.com/rc-mini-user-unkown.png'
      };
    },
    3: (msg) => {
      msg.sender = {
        name: msg.senderUserId,
        type: msg.type,
        avatar: 'http://7xogjk.com1.z0.glb.clouddn.com/rc-mini-group-unkown.png'
      };
    }
  };
  utils.map(message, (msg) => {
    const { type } = msg;
    msg.pos = position;
    const event = getSender[type] || getSender[1];
    event(msg);
    utils.formatMessage(msg);
    return msg;
  });
};

let Message = {
  watcher: new ObserverList(),
  _push: (message) => {
    console.log('received msg', message);
    //不处理离线消息
    if (message.isOffLineMessage){
      return;
    }
    bindSender(message);
    Message.watcher.notify(message);
  }
};


let sendMessage = (type, targetId, message) => {
  let bindUser = (_msg, next) => {
    bindSender(_msg);
  };

  let { name, avatar } = currentUser;
  let user = {
    name,
    avatar
  };

  let messageMap = {
    text: (params) => {
      params.messageType = 'RC:TxtMsg';
      return params;
    },
    image: (params) => {
      params.messageType = 'RC:ImgMsg';
      return params;
    },
    voice: (params) => {
      params.messageType = 'RC:HQVCMsg';
      return params;
    },
    music: (params) => {
      params.messageType = 'seal:music';
      return params;
    },
    file: (params) => {
      params.messageType = 'RC:FileMsg';
      return params;
    }
  };

  message.user = user;
  let params = {
    content: message
  };
  params = messageMap[message.type](params);
  let conversation = imInstance.Conversation.get({
    type: +type,
    targetId
  });
  return conversation.send(params).then((message) => {
    bindUser(message);
    return message;
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

//params.type
//params.targetId
//params.name 
//params.size 
//params.type 
//params.fileUrl 
Message.sendFile = (params) => {
  let {type, targetId, name, size, fileUrl} = params;
  return sendMessage(type, targetId, {
    type: 'file',
    name,
    size,
    fileUrl,
  })
}

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
  let timestamp = position;
  let conversation = imInstance.Conversation.get({
    type: +type,
    targetId
  });
  return conversation.getMessages({
    timestrap: timestamp,
    count
  }).then(({ list, hasMore }) => {
    let messageList = list;
    // let messageList = list.filter((message) => {
    //   return message.messageType != 'RC:RcCmd';
    // });
    bindSender(messageList, position);
    hasMore = !!hasMore;
    return {
      messageList,
      hasMore
    };
  });
};

Message.getChatRoomMessageList = (params) => {
  let { type, targetId, position, count } = params;
  count = count || 5;
  let timestamp = position;
  let chatRoom = imInstance.ChatRoom.get({
    id: targetId
  });
  return chatRoom.getMessages({
    timestrap: timestamp,
    count
  }).then(({ list, hasMore }) => {
    let messageList = list;
    // let messageList = list.filter((message) => {
    //   return message.messageType != 'RC:RcCmd';
    // });
    bindSender(messageList, position);
    hasMore = !!hasMore;
    return {
      messageList,
      hasMore
    };
  });
};

Message.create = (params) => {
  let {name, type, targetId, content} = params;
  let message = {
    messageType: name,
    type,
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

Message.unwatch = () => {
  Message.watcher.remove();
};

let Conversation = {
  watcher: new ObserverList()
};

Conversation.getList = () => {
  return imInstance.Conversation.getList().then((list) => {
    console.log('会话列表:', list);
    conversationList = imInstance.Conversation.merge({
      conversationList,
      updatedConversationList: list
    });
    bindUserInfo(conversationList);
    return conversationList;
  });
};

let bindUserInfo = (list) => {
  let unknowUser = {
    name: '火星人',
    avatar: 'http://7xogjk.com1.z0.glb.clouddn.com/rc-mini-user-unkown.png'
  };
  let unknowGroup = {
    name: '火星群组',
    avatar: 'http://7xogjk.com1.z0.glb.clouddn.com/rc-mini-group-unkown.png'
  };
  if (!utils.isArray(list)){
    list = [list];
  }

  let infoMap = {
      1: (conversation) => {
        conversation.target = utils.find(UserList, (user) => {
          return user.id == conversation.targetId
        }) || utils.copy(unknowUser);
      },
      2: (conversation) => {
        conversation.target = utils.copy(unknowUser);
      },
      3: (conversation) => {
        conversation.target = utils.find(GroupList, (group) => {
          return group.id == conversation.targetId
        }) || utils.copy(unknowGroup);;
      },
      10: (conversation) => {
        conversation.target = utils.copy(unknowUser);
      }
  };
  let formatMsg = (msg) => {
    let { messageType } = msg;
    let content = '[此消息类型未解析]';
    if (messageType == 'RC:TxtMsg'){
      if(msg.content) {
        content = msg.content.content;
      }
    }
    if (messageType == 'RC:VcMsg' || messageType == 'RC:HQVCMsg') {
      content = '[语音]';
    }
    if (messageType == 'RC:ImgMsg') {
      content = '[图片]';
    }
    if (messageType == 'RC:FileMsg') {
      content = '[文件]';
    }
    if (messageType == 'seal:music') {
      content = '[音乐]';
    }
    return content;
  };
  list.forEach((conversation, index) => {
    const { latestMessage, unreadMessageCount, type, targetId } = conversation;
    const { sentTime } = latestMessage;
    conversation._sentTime = utils.getTime(sentTime);
    conversation.unReadCount = unreadMessageCount;
    conversation.content = formatMsg(latestMessage);
    let _type = type > 3 ? 10 : type;
    infoMap[_type](conversation);
    conversation.target.name = targetId + ' (' + type + ')';
    list[index] = conversation;
  });
};

Conversation.clearUnreadCount = (conversation) => {
  let { type, targetId } = conversation;
  conversation.type = +conversation.type;
  imInstance.Conversation.get(conversation).read();
};
Conversation.watch = (watcher) => {
  imInstance.watch({
    conversation: function (event) {
      console.log('conversation updated');
      const { updatedConversationList } = event;
      conversationList = imInstance.Conversation.merge({
        conversationList,
        updatedConversationList
      });
      console.log(conversationList);
      bindUserInfo(conversationList);
      watcher(conversationList);
    }
  });
};
Conversation.setStatus = (conversation, options) => {
  return imInstance.Conversation.get(conversation).setStatus(options);
}
let Status = {
  watcher: new ObserverList()
};
Status.disconnect = () => {
  imInstance.disconnect();
};
Status.connect = (user) => {
  imInstance.watch({
    status: function ({ status }) {
      Status.watcher.notify(status);
    },
    message: function ({ message  }) {
      let { messageType } = message;
      let messageCtrol = {
        otherMessage: () => {
          Message._push(message);
        }
      };
      let messageHandler = messageCtrol[messageType] || messageCtrol.otherMessage;
      messageHandler();
    }
  });
  user.token = config.token;
  return User.getToken(user).then((user) => {
    return imInstance.connect(user).then((result) => {
      currentUser.id = result.id;
      return result;
    }).catch((error) => {
      console.log(error);
    });
  });
};

Status.watch = (watch) => {
  var force = true;
  Status.watcher.add(watch, force);
};

let File = {};

const uploadBos = (url, fileInfo, header) => {
  return new Promise((resolve, reject) => {
    const fileData = wx.getFileSystemManager().readFileSync(fileInfo.path);
    wx.request({
      url: url,
      header: header,
      method: 'POST',
      data: fileData,
      success: function(res) {
        console.log(res);
        let data = {
          downloadUrl: url, //上传成功的 url 即为下载 url
          isBosRes: true // 判断是否是百度返回
        }
        resolve(data);
      },
      fail: reject
    })
  })
  
}

const wxUpload = (fileInfo, token, bosHeaders, bosUrl) => {
  return new Promise((resolve, reject) => {
    const uploadTask =  wx.uploadFile({
      url: config.qiniuHost,
      filePath: fileInfo.path,
      name: 'file',
      formData: {
        token: token
      },
      success: resolve,
      fail: function(err){
        console.log('upload qiniu failed', err);
        uploadBos(bosUrl, fileInfo, bosHeaders).then(function(res) {
          resolve(res);
        },function(err) {
          reject(err)
        });
      }
    })

    uploadTask.onProgressUpdate(res => {
      console.log('上传进度', res.progress)
      console.log('已经上传的数据长度', res.totalBytesSent)
      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
    })
  });
};



File.upload = (fileInfo, uploadType) => {
  let fileType = uploadType || RongIMLib.FILE_TYPE.FILE;
  let fileName = fileInfo.name || '';
  return imInstance.getFileToken(fileType, fileName).then(result => {
    let { token, bosToken, bosDate, bos, path } = result;
    let bosHeaders = {
      'authorization': bosToken,
      'x-bce-date': bosDate,
      'Content-Type': 'multipart/form-data',
    }
    let bosUrl = bos + path;
    return wxUpload(fileInfo, token, bosHeaders, bosUrl)
  }).then(res => {
    let qiniuHash, qiniuName;
    if(!res.isBosRes){
      const { data } = res;
      const { hash, name } = JSON.parse(data);
      qiniuHash = hash, qiniuName = name;
    }
    return imInstance.getFileUrl(fileType, qiniuHash, qiniuName, res);
  })
}

let modules = {
  User,
  Message,
  Conversation,
  Friend,
  Status,
  File,
  ConnectionStatus: RongIMLib.CONNECTION_STATUS,
  CONNECTION_STATUS: RongIMLib.CONNECTION_STATUS
};
module.exports = (_config) => {
  utils.extend(config, _config);
  // config.connectType = 'comet';
  config.debug = true;
  imInstance = RongIMLib.init(config);
  return modules;
};
