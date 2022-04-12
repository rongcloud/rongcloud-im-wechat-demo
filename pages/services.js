const RongIMLib = require('@rongcloud/imlib-next')
const utils = require('./utils/utils.js');
const { UserList, GroupList, MusicList} = require('./mock.js');
let imInstance = null;
let currentUser = null;

let conversationList = [];

let config = {
  appkey: '',
  url: '',
  // wsScheme: 'wss://',
  // protocol: 'https://'
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
// 没有此功能
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
    //不处理离线消息
    if (message.isOffLineMessage){
      return;
    }
    bindSender(message);
    Message.watcher.notify(message);
  }
};


let sendMessage = (conversationType, targetId, message) => {
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
      return new imInstance.TextMessage (params)
    },
    image: (params) => {
      return new imInstance.ImageMessage (params)
    },
    voice: (params) => {
      return new imInstance.HQVoiceMessage (params)
    },
    // music: (params) => {
    //   params.messageType = 'seal:music';
    //   return params;
    // },
    file: (params) => {
      return new imInstance.FileMessage (params)
    }
  };

  message.user = user;
  const params = messageMap[message.type](message);
  const conversation = { conversationType: conversationType, targetId: targetId }
  return imInstance.sendMessage(conversation, params).then(res => {
    if(res.code === 0) {
      let message = res.data
      bindUser(message);
      return message;
    }
  })
  .catch (error =>{
    console.log(error)
  })
};

//params.conversationType
//params.targetId
//params.content  
Message.sendText = (params) => {
  let {conversationType, targetId, content} = params;
  return sendMessage(conversationType, targetId, {
    type: 'text',
    content
  })
};

//params.type
//params.targetId
//params.content 
//params.iamgeUri 
Message.sendImage = (params) => {
  let { conversationType, targetId, content, imageUri, extra } = params;
  return sendMessage(conversationType, targetId, {
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
  let {conversationType, targetId, name, size, fileUrl} = params;
  return sendMessage(conversationType, targetId, {
    type: 'file',
    name,
    size,
    fileUrl,
  })
}

//params.type
//params.targetId
Message.sendVoice = (params) => {
  let { conversationType, targetId, content} = params;
  let data = utils.extend({ type: 'voice' }, content);
  return sendMessage(conversationType, targetId, data)
};

// let getMusic = () => {
//   let len = MusicList.length;
//   let index = Math.floor(Math.random() * len);
//   return MusicList[index];
// };
// Message.sendMusic = (params) => {
//   let { type, targetId } = params;
//   let content = utils.extend({ type: 'music' }, getMusic());
//   return sendMessage(type, targetId, content);
// };

Message.getList = (params) => {
  let {conversationType, targetId, position, count} = params;
  count = count || 20;
  const conversation = {
      conversationType: conversationType,
      targetId: targetId
  }
  const options = {
    timestamp: position,
    count: count,
    order: 0
  }
  return imInstance.getHistoryMessages(conversation, options).then(res => {
      if (res.code === 0) {
          let messageList = res.data.list;
          const hasMore = !!res.data.hasMore
          bindSender(messageList, position);
          console.log(messageList)
          return {
            messageList,
            hasMore
          };
      } else {
          console.log(res.code, res.msg)
      }
  })
};

Message.getChatRoomMessageList = (params) => {
  let { targetId, position, count } = params;
  count = count || 10;
  const parmas = {
    timestamp: timestamp,
    count: count,
    order: 0
  }
  return imInstance.getChatroomHistoryMessages(targetId, parmas).then(res => {
      // 获取聊天室历史信息成功
      if (res.code === 0){
          let messageList = res.data.list;
          let hasMore = !!res.data.hasMore;
          bindSender(messageList, position);
          return {
            messageList,
            hasMore
          };
      } else {
          console.log(res.code, res.msg)
      }
  }).catch(error => {
      console.log(error)
  })
};

Message.create = (params) => {
  let {name, conversationType, targetId, content} = params;
  let message = {
    messageType: name,
    conversationType,
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
  return imInstance.getConversationList().then((res) => {
    if (res.code === 0) {
      conversationList = res.data
    } else {
      console.log(res.code, res.msg)
    }
    bindUserInfo(conversationList);
    return conversationList;
  });
};

let bindUserInfo = (list, updateList) => {
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
    if(updateList&&updateList.length){
      const res =  updateList.filter(up => up.conversation.targetId === conversation.targetId && up.conversation.conversationType === conversation.conversationType)
      if(res.length) {
        update = res[0].updatedItems
        for (const key in update) {
            const el = update[key];
            conversation[key] = el.val
        }
      }
    } 
    const { latestMessage, unreadMessageCount, conversationType, targetId } = conversation;
    const { sentTime } = latestMessage; 
    conversation._sentTime = utils.getTime(sentTime);
    conversation.unReadCount = unreadMessageCount;
    conversation.content = formatMsg(latestMessage);
    let _type = conversationType > 3 ? 10 : conversationType;
    infoMap[_type](conversation);
    conversation.target.name = targetId + ' (' + conversationType + ')';
    list[index] = conversation;
  });
  const splitConversationListByIsTop = (conversationList) => {
    const topConversationList = []
    const unToppedConversationList = []
    conversationList.forEach((conversation) => {
      const { hasMentioned, mentionedInfo } = conversation
      conversation.hasMentioned = hasMentioned
      conversation.mentionedInfo = mentionedInfo
      const isTop = conversation.isTop || false
      if (isTop) {
        topConversationList.push(conversation)
      } else {
        unToppedConversationList.push(conversation)
      }
    })
    return {
      topConversationList: topConversationList || [],
      unToppedConversationList: unToppedConversationList || []
    }
  }
  const quickSort = (arr, event) => {
    const sort = (array, left, right, event) => {
      event = event || ((a, b) => {
        return a <= b
      })
      if (left < right) {
        const x = array[right]
        let i = left - 1
        let temp
        for (let j = left; j <= right; j++) {
          if (event(array[j], x)) {
            i++
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
        }
        sort(array, left, i - 1, event)
        sort(array, i + 1, right, event)
      }
      return array
    }
    return sort(arr, 0, arr.length - 1, event)
  }
  const _sortListBySentTime = (convers) => {
    return quickSort(convers, (before, after) => {
      before = before || {}
      after = after || {}
      const beforeLatestMessage = before.latestMessage || {}
      const afterLatestMessage = after.latestMessage || {}
      const beforeLatestSentTime = beforeLatestMessage.sentTime || 0
      const afterLatestSentTime = afterLatestMessage.sentTime || 0
      return afterLatestSentTime <= beforeLatestSentTime
    })
  }
  const sortConList = (conversationList) => {
    if (!conversationList) {
      return []
    }
    const splitConversationList = splitConversationListByIsTop(conversationList)
    const topConversationList = _sortListBySentTime(splitConversationList.topConversationList)
    const unToppedConversationList = _sortListBySentTime(splitConversationList.unToppedConversationList)
    topConversationList.push.apply(topConversationList, unToppedConversationList)
    return topConversationList
  }
  conversationList = sortConList(list)
  console.log(conversationList)
};

Conversation.clearUnreadCount = (conversation) => {
  let { conversationType, targetId } = conversation;
  //清除会话未读数   
  imInstance.clearMessagesUnreadStatus({ conversationType, targetId }).then(res => {
    if (res.code === 0) {
      conversationList.forEach((item, index) => {
        if(item.conversationType === conversationType && item.targetId === targetId){
          item.unreadMessageCount = 0
          item.unReadCount = 0
        }
      })
      console.log('clearMessagesUnreadStatus', conversationList)
    } else {
      console.log(res.code, res.msg)
    }
  }).catch(error => {
    console.log(error)
  }) 
};
Conversation.watch = (watcher) => {
  const Events = imInstance.Events
  imInstance.addEventListener(Events.CONVERSATION, function (event) {
    console.log('CONVERSATION', event)
    const updateList = event.conversationList
    bindUserInfo(conversationList, updateList);
    watcher(conversationList);
  })
};
Conversation.setConversationToTop = (conversation, topStatus) => {
  const conversationType = conversation.conversationType
  const targetId = conversation.targetId
  return imInstance.setConversationToTop({
      conversationType,
      targetId,
  }, topStatus)
}
Conversation.setConversationNotificationStatus = (conversation, notificationStatus) => {
  const conversationType = conversation.conversationType
  const targetId = conversation.targetId
  return imInstance.setConversationNotificationStatus({
      conversationType,
      targetId,
  }, notificationStatus)
}
let Status = {
  watcher: new ObserverList()
};
Status.disconnect = () => {
  imInstance.disconnect();
};
Status.connect = (user) => {
  const Events = imInstance.Events
  imInstance.addEventListener(Events.CONNECTING, () => {
    console.log('正在链接...')
  })
  imInstance.addEventListener(Events.CONNECTED, () => {
    console.log('连接成功')
  })
  imInstance.addEventListener(Events.DISCONNECT, () => {
    console.log('连接中断，需要业务层进行重连处理')
  })
  imInstance.addEventListener(Events.SUSPEND, () => {
    console.log('链接中断，SDK 会尝试重连，业务层无需关心')
  })
  imInstance.addEventListener(Events.MESSAGES, (data) => {
    console.log(data)
    data.messages.forEach((msg, index) => {
      let { messageType } = msg;
      let messageCtrol = {
        otherMessage: () => {
          Message._push(msg);
        }
      };
      let messageHandler = messageCtrol[messageType] || messageCtrol.otherMessage;
      messageHandler();
    });
  })
  user.token = config.token;
  return User.getToken(user).then((user) => {
    return imInstance.connect(user.token).then((result) => {
      currentUser.id = result.data.userId;
      return result.data;
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
    // console.log(url, fileData);
    wx.request({
      url: url,
      header: header,
      method: 'POST',
      data: fileData,
      success: function(res) {
        // console.log(res);
        let data = {
          downloadUrl: url, //上传成功的 url 即为下载 url
          isBosRes: true // 判断是否是百度返回
        }
        resolve(data);
      },
      fail: function(err) {
        console.log(err)
        reject()
      }
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
    let { token, bosToken, bosDate, bos, path } = result.data;
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

const modules = {
  User,
  Message,
  Conversation,
  Friend,
  Status,
  File,
  ConnectionStatus: RongIMLib.ConnectionStatus,
};

module.exports = (_config) => {
  utils.extend(config, _config);
  RongIMLib.init(config);
  imInstance = RongIMLib
  return modules;
};
