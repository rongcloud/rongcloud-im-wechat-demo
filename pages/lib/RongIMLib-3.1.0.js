/**
 * @rongcloud/imlib-v4-wechat
 * Version: v4.0.0
 * CommitId: 535393139458d1b8d7dc5d2b8d49803a2a30e278
 * Date: Tue Nov 24 2020 15:05:39 GMT+0800 (GMT+08:00)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var engine = require('@rongcloud/engine');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const logger = new engine.Logger('RCIM');
logger.set( engine.LogLevel.DEBUG );

const ERROR_INFO = {
    // 超时
    TIMEOUT: {
        code: -1,
        msg: 'Network timeout'
    },
    // SDK 内部错误
    SDK_INTERNAL_ERROR: {
        code: -2,
        msg: 'SDK internal error'
    },
    // 开发者参数传入错误
    PARAMETER_ERROR: {
        code: -3,
        msg: 'Please check the parameters, the {param} expected a value of {expect} but received {current}'
    },
    REJECTED_BY_BLACKLIST: {
        code: 405,
        msg: 'Blacklisted by the other party'
    },
    // 发送频率过快
    SEND_TOO_FAST: {
        code: 20604,
        msg: 'Sending messages too quickly'
    },
    // 不在群组中
    NOT_IN_GROUP: {
        code: 22406,
        msg: 'Not in group'
    },
    // 在群组中被禁言
    FORBIDDEN_IN_GROUP: {
        code: 22408,
        msg: 'Forbbiden from speaking in the group'
    },
    // 不在聊天室中
    NOT_IN_CHATROOM: {
        code: 23406,
        msg: 'Not in chatRoom'
    },
    // 在聊天室中被禁言
    FORBIDDEN_IN_CHATROOM: {
        code: 23408,
        msg: 'Forbbiden from speaking in the chatRoom'
    },
    // 已被踢出并禁止加入聊天室
    KICKED_FROM_CHATROOM: {
        code: 23409,
        msg: 'Kicked out and forbbiden from joining the chatRoom'
    },
    // 聊天室不存在
    CHATROOM_NOT_EXIST: {
        code: 23410,
        msg: 'ChatRoom does not exist'
    },
    // 聊天室成员超限
    CHATROOM_IS_FULL: {
        code: 23411,
        msg: 'ChatRoom members exceeded'
    },
    // 聊天室参数无效
    PARAMETER_INVALID_CHATROOM: {
        code: 23412,
        msg: 'Invalid chatRoom parameters'
    },
    // 聊天室云存储业务未开通
    ROAMING_SERVICE_UNAVAILABLE_CHATROOM: {
        code: 23414,
        msg: 'ChatRoom message roaming service is not open, Please go to the developer to open this service'
    },
    // 撤回消息失败
    RECALLMESSAGE_PARAMETER_INVALID: {
        code: 25101,
        msg: 'Invalid recall message parameter'
    },
    // push 设置参数无效
    PUSHSETTING_PARAMETER_INVALID: {
        code: 26001,
        msg: 'Invalid push parameter'
    },
    // 操作被禁止
    OPERATION_BLOCKED: {
        code: 20605,
        msg: 'Operation is blocked'
    },
    // 操作不支持
    OPERATION_NOT_SUPPORT: {
        code: 20606,
        msg: 'Operation is not supported'
    },
    // 发送的消息中包含敏感词 (发送方发送失败，接收方不会收到消息)
    MSG_BLOCKED_SENSITIVE_WORD: {
        code: 21501,
        msg: 'The sent message contains sensitive words'
    },
    // 消息中敏感词已经被替换 (接收方可以收到被替换之后的消息)
    REPLACED_SENSITIVE_WORD: {
        code: 21502,
        msg: 'Sensitive words in the message have been replaced'
    },
    // 用户未连接成功
    NOT_CONNECTED: {
        code: 30001,
        msg: 'Please connect successfully first'
    },
    // 导航 http 请求失败
    NAVI_REQUEST_ERROR: {
        code: 30007,
        msg: 'Navigation http request failed'
    },
    // CMP 嗅探 http 请求失败
    CMP_REQUEST_ERROR: {
        code: 30010,
        msg: 'CMP sniff http request failed'
    },
    CONN_APPKEY_FAKE: {
        code: 31002,
        msg: 'Your appkey is fake'
    },
    CONN_MINI_SERVICE_NOT_OPEN: {
        code: 31003,
        msg: 'Mini program service is not open, Please go to the developer to open this service'
    },
    CONN_ACK_TIMEOUT: {
        code: 31000,
        msg: 'Connection ACK timeout'
    },
    CONN_TOKEN_INCORRECT: {
        code: 31004,
        msg: 'Your token is not valid or expired'
    },
    CONN_NOT_AUTHRORIZED: {
        code: 31005,
        msg: 'AppKey and Token do not match'
    },
    CONN_REDIRECTED: {
        code: 31006,
        msg: 'Connection redirection'
    },
    CONN_APP_BLOCKED_OR_DELETED: {
        code: 31008,
        msg: 'AppKey is banned or deleted'
    },
    CONN_USER_BLOCKED: {
        code: 31009,
        msg: 'User blocked'
    },
    // 域名无效
    CONN_DOMAIN_INCORRECT: {
        code: 31012,
        msg: 'Connect domain error, Please check the set security domain'
    },
    // 未开通单群聊历史消息云存储
    ROAMING_SERVICE_UNAVAILABLE: {
        code: 33007,
        msg: 'Roaming service cloud is not open, Please go to the developer to open this service'
    },
    // 已连接, 不可再次调用链接(错误码与移动端对齐)
    RC_CONNECTION_EXIST: {
        code: 34001,
        msg: 'Connection already exists'
    },
    // 聊天室 KV 设置超出最大值(已满, 默认最多设置 100 个)
    CHATROOM_KV_EXCEED: {
        code: 23423,
        msg: 'ChatRoom KV setting exceeds maximum'
    },
    // 聊天室 KV 已存在
    CHATROOM_KV_OVERWRITE_INVALID: {
        code: 23424,
        msg: 'ChatRoom KV already exists'
    },
    // 聊天室 KV 存储功能没有开通
    CHATROOM_KV_STORE_NOT_OPEN: {
        code: 23426,
        msg: 'ChatRoom KV storage service is not open, Please go to the developer to open this service'
    },
    // 聊天室Key不存在
    CHATROOM_KEY_NOT_EXIST: {
        code: 23427,
        msg: 'ChatRoom key does not exist'
    },
    // 消息不支持扩展存储(错误码与移动端对齐)
    MSG_KV_NOT_SUPPORT: {
        code: 34008,
        msg: 'The message cannot be extended'
    },
    // 发送扩展存储消息失败(错误码与移动端对齐)
    SEND_MESSAGE_KV_FAIL: {
        code: 34009,
        msg: 'Sending RC expansion message fail'
    },
    // 扩展存储 key value 超出限制(错误码与移动端对齐)
    EXPANSION_LIMIT_EXCEET: {
        code: 34010,
        msg: 'The message expansion size is beyond the limit'
    },
    // 调用接口时传入的参数不正确(错误码与移动端对齐)
    ILLGAL_PARAMS: {
        code: 33003,
        msg: 'Incorrect parameters passed in while calling the interface'
    }
};
const ERROR_CODE = {};
for (const name in ERROR_INFO) {
    const info = ERROR_INFO[name];
    const { code } = info;
    // ERROR_CODE[name] = code
    ERROR_CODE[code] = name;
}
// 服务返回的错误码, 转化为 SDK 的 ErrorCode
const SERVER_ERROR_TO_CODE = {
    // 未开通单群聊历史消息云存储
    1: ERROR_INFO.ROAMING_SERVICE_UNAVAILABLE.code
};

const CONNECTION_STATUS = {
    CONNECTED: 0,
    CONNECTING: 1,
    DISCONNECTED: 2,
    NETWORK_UNAVAILABLE: 3,
    SOCKET_ERROR: 4,
    KICKED_OFFLINE_BY_OTHER_CLIENT: 6,
    BLOCKED: 12 // 用户被封禁(服务值为 2, 转为状态码后 + 10)
};

/**
 * 业务层枚举, 此处枚举会暴露给开发者
*/
const CONNECT_TYPE = {
    COMET: 'comet',
    WEBSOCKET: 'websocket'
};
const CONVERSATION_TYPE = engine.ConversationType;
const MESSAGE_DIRECTION = engine.MessageDirection;
const MESSAGS_TIME_ORDER = {
    DESC: 0,
    ASC: 1 // 正序
};
// 聊天室历史消息、聊天室用户信息排序
const CHATROOM_ORDER = {
    ASC: 1,
    DESC: 2
};
const RECALL_MESSAGE_TYPE = 'RC:RcCmd';
const MENTIONED_TYPE = {
    ALL: 1,
    SINGAL: 2
};
const MESSAGE_TYPE = {
    TEXT: 'RC:TxtMsg',
    VOICE: 'RC:VcMsg',
    HQ_VOICE: 'RC:HQVCMsg',
    IMAGE: 'RC:ImgMsg',
    GIF: 'RC:GIFMsg',
    RICH_CONTENT: 'RC:ImgTextMsg',
    LOCATION: 'RC:LBSMsg',
    FILE: 'RC:FileMsg',
    SIGHT: 'RC:SightMsg',
    COMBINE: 'RC:CombineMsg',
    CHRM_KV_NOTIFY: 'RC:chrmKVNotiMsg',
    LOG_COMMAND: 'RC:LogCmdMsg',
    EXPANSION_NOTIFY: 'RC:MsgExMsg',
    REFERENCE: 'RC:ReferenceMsg'
};
const FILE_TYPE = engine.FileType;
// 聊天室 kv 存储操作类型. 对方操作, 己方收到消息(RC:chrmKVNotiMsg)中会带入此值. 根据此值判断是删除还是更新
const CHATROOM_ENTRY_TYPE = {
    UPDATE: 1,
    DELETE: 2
};
const NOTIFICATION_STATUS = {
    DO_NOT_DISTURB: 1,
    NOTIFY: 2 // 提醒(非免打扰)
};
const RECEIVED_STATUS = {
    READ: 0x1,
    LISTENED: 0x2,
    DOWNLOADED: 0x4,
    RETRIEVED: 0x8,
    UNREAD: 0 // 未读
};
const SDK_VERSION = "4.0.0";

/**
 * 转化 APIContext 传过来的消息数据
 * @param msg APIContext 消息
 * @returns V3 需要的消息数据
 */
function tranReceivedMessage(msg) {
    let { conversationType: type, messageType, content, senderUserId, targetId, sentTime, receivedTime, messageUId, messageDirection, isPersited, isCounted, isOffLineMessage, canIncludeExpansion, expansion, receivedStatus, disableNotification, isMentioned, isStatusMessage } = msg;
    if (!receivedStatus) {
        receivedStatus = engine.ReceivedStatus.UNREAD;
    }
    return {
        messageType,
        content,
        senderUserId,
        targetId,
        type,
        sentTime,
        receivedTime,
        messageUId,
        messageDirection,
        isPersited,
        isCounted,
        isOffLineMessage,
        isMentioned,
        disableNotification,
        isStatusMessage,
        canIncludeExpansion,
        expansion,
        receivedStatus
    };
}
/**
 * 转化 APIContext 传过来的会话数据
 * @param conversation APIContext 会话
 * @returns V3 需要的会话数据
 */
function tranReceiveConversation(conversation) {
    const { conversationType: type, targetId, latestMessage, unreadMessageCount, hasMentioned, mentionedInfo, lastUnreadTime, notificationStatus, isTop } = conversation;
    const latestMessageV3 = latestMessage && tranReceivedMessage(latestMessage);
    const mentionedInfoV3 = {
        type: mentionedInfo === null || mentionedInfo === void 0 ? void 0 : mentionedInfo.type,
        userIdList: mentionedInfo === null || mentionedInfo === void 0 ? void 0 : mentionedInfo.userIdList
    };
    return {
        type,
        targetId,
        latestMessage: latestMessageV3,
        unreadMessageCount,
        hasMentioned,
        mentionedInfo: mentionedInfoV3,
        lastUnreadTime,
        notificationStatus,
        isTop
    };
}
function tranReceiveUpdateConversation(conversation) {
    const { updatedItems, conversationType: type, targetId, latestMessage, unreadMessageCount, lastUnreadTime, notificationStatus, isTop, mentionedInfo, hasMentioned } = conversation;
    const latestMessageV3 = latestMessage && tranReceivedMessage(latestMessage);
    if (updatedItems && updatedItems.latestMessage) {
        updatedItems.latestMessage.val = latestMessageV3;
    }
    return {
        updatedItems,
        type,
        targetId,
        latestMessage: latestMessageV3,
        unreadMessageCount,
        lastUnreadTime,
        notificationStatus,
        isTop,
        mentionedInfo,
        hasMentioned
    };
}
/**
 * 校验发消息的参数
 */
function assertSendMsgOption(options) {
    engine.assert('options.messageType', options.messageType, engine.AssertRules.STRING, true);
    engine.assert('options.content', options.content, (value) => {
        return engine.isObject(value);
    }, true);
    engine.assert('options.isPersited', options.isPersited, engine.AssertRules.BOOLEAN);
    engine.assert('options.isCounted', options.isCounted, engine.AssertRules.BOOLEAN);
    engine.assert('options.pushContent', options.pushContent, engine.AssertRules.STRING);
    engine.assert('options.pushData', options.pushData, engine.AssertRules.STRING);
    engine.assert('options.isVoipPush', options.isVoipPush, engine.AssertRules.BOOLEAN);
    engine.assert('options.isStatusMessage', options.isStatusMessage, engine.AssertRules.BOOLEAN);
    engine.assert('options.isMentioned', options.isMentioned, engine.AssertRules.BOOLEAN);
    engine.assert('options.mentionedType', options.mentionedType, engine.AssertRules.NUMBER);
    engine.assert('options.mentionedUserIdList', options.mentionedUserIdList, (value) => {
        return engine.isArray(value) && (value.length === 0 || value.every(engine.isString));
    });
    engine.assert('options.directionalUserIdList', options.directionalUserIdList, (value) => {
        return engine.isArray(value) && (value.length === 0 || value.every(engine.isString));
    });
    if (!engine.isUndefined(options.isPersited) || !engine.isUndefined(options.isCounted) || !engine.isUndefined(options.isStatusMessage)) {
        logger.warn('注意: 由于参数 isPersited、isCounted、isStatusMessage 的传入在接收消息时会导致移动端与 Web 端的 isPersited、isCounted、isStatusMessage 这三个参数值不一致。\n故 isPersited、isCounted、isStatusMessage 即将废弃，非内置消息请使用 registerMessageType 方法注册自定义消息.');
    }
}

// import { isObject, isUndefined } from '../../utils/validator'
/**
 * 会话排序（拆分-排序-合并）
 * 将会话列表拆分为置顶和非置顶的两个数组
 * 再对两个数组按时间进行排序，时间戳大的说明是最近的消息排最上
*/
const sortConList = (conversationList, order) => {
    if (!conversationList) {
        return [];
    }
    const splitConversationList = splitConversationListByIsTop(conversationList);
    const topConversationList = _sortListBySentTime(splitConversationList.topConversationList, order);
    const unToppedConversationList = _sortListBySentTime(splitConversationList.unToppedConversationList, order);
    topConversationList.push.apply(topConversationList, unToppedConversationList);
    return topConversationList;
};
const mergeConversationList = (option) => {
    option = option || {};
    let { conversationList, updatedConversationList } = option;
    conversationList = conversationList || [];
    updatedConversationList = updatedConversationList || [];
    const allConversationList = [...updatedConversationList, ...conversationList];
    // 按顺序合并相同会话的数值(顺序依然为上一步的排序, 只是数值合并, 顺序靠后的数值合并到顺序靠前数值中)
    const hashTable = {};
    let newList = [];
    const invalidDataIndexList = [];
    engine.forEach(allConversationList, (conversation) => {
        if (!engine.isObject(conversation)) { // 会话格式错误, 不添加至新列表
            return;
        }
        const { type, targetId } = conversation;
        const key = getConversationKey({ type, targetId });
        const hashItem = hashTable[key] || {};
        const hashIndex = engine.isUndefined(hashItem.index) ? newList.length : hashItem.index;
        const hashVal = hashItem.val || {};
        const cacheUpdatedItems = hashVal.updatedItems || {};
        const updatedItems = conversation.updatedItems;
        conversation = extend(conversation, hashVal);
        engine.forEach(cacheUpdatedItems, (item, key) => {
            conversation[key] = item.val;
        });
        engine.forEach(updatedItems, (item, key) => {
            const cacheItem = cacheUpdatedItems[key] || {};
            const cacheItemUpdatedTime = cacheItem.time || 0;
            if (item.time > cacheItemUpdatedTime) {
                conversation[key] = item.val;
            }
        });
        hashTable[key] = { index: hashIndex, val: conversation };
        newList[hashIndex] = conversation;
        isInValidConversationData(conversation) && invalidDataIndexList.push(hashIndex);
    });
    engine.forEach(invalidDataIndexList, (invalidIndex) => {
        const conversation = newList[invalidIndex];
        newList[invalidIndex] = fixConversationData(conversation);
    });
    newList = sortConList(newList);
    return engine.map(newList, (item) => {
        delete item.updatedItems;
        return item;
    });
};
const splitConversationListByIsTop = (conversationList) => {
    const topConversationList = [];
    const unToppedConversationList = [];
    engine.forEach(conversationList, (conversation) => {
        // 兼容会话中单词拼写错误字段 hasMentiond、mentiondInfo
        const { hasMentioned, mentionedInfo } = conversation;
        conversation.hasMentioned = hasMentioned;
        conversation.mentionedInfo = mentionedInfo;
        // 兼容接收
        const isTop = conversation.isTop || false;
        if (isTop) {
            topConversationList.push(conversation);
        }
        else {
            unToppedConversationList.push(conversation);
        }
    });
    return {
        topConversationList: topConversationList || [],
        unToppedConversationList: unToppedConversationList || []
    };
};
const getConversationKey = (option) => {
    const { type, targetId } = option;
    return type + '_' + targetId;
};
const _sortListBySentTime = (convers, order = 0) => {
    return quickSort(convers, (before, after) => {
        before = before || {};
        after = after || {};
        const beforeLatestMessage = before.latestMessage || {};
        const afterLatestMessage = after.latestMessage || {};
        const beforeLatestSentTime = beforeLatestMessage.sentTime || 0;
        const afterLatestSentTime = afterLatestMessage.sentTime || 0;
        if (!order) {
            return afterLatestSentTime <= beforeLatestSentTime;
        }
        return afterLatestSentTime >= beforeLatestSentTime;
    });
};
const fixConversationData = (conversation) => {
    conversation = conversation || {};
    const { targetId, type } = conversation;
    const defaultType = engine.ConversationType.PRIVATE;
    const defaultMsg = {
        messageType: engine.MessageType.TextMessage,
        sentTime: engine.DelayTimer.getTime(),
        content: { content: '' },
        senderUserId: targetId,
        targetId,
        type
    };
    conversation.type = type || defaultType;
    conversation.targetId = targetId || '';
    conversation.latestMessage = conversation.latestMessage || defaultMsg;
    return conversation;
};
const quickSort = (arr, event) => {
    const sort = (array, left, right, event) => {
        event = event || ((a, b) => {
            return a <= b;
        });
        if (left < right) {
            const x = array[right];
            let i = left - 1;
            let temp;
            for (let j = left; j <= right; j++) {
                if (event(array[j], x)) {
                    i++;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            sort(array, left, i - 1, event);
            sort(array, i + 1, right, event);
        }
        return array;
    };
    return sort(arr, 0, arr.length - 1, event);
};
const isInValidConversationData = (conversation) => {
    return !conversation.type ||
        !conversation.targetId ||
        !engine.isObject(conversation.latestMessage) ||
        engine.isUndefined(conversation.unreadMessageCount);
};
const extend = (destination, sources, option) => {
    option = option || {};
    const { isAllowNull } = option;
    destination = destination || {};
    sources = sources || {};
    for (const key in sources) {
        const value = sources[key];
        if (!engine.isUndefined(value) || isAllowNull) {
            destination[key] = value;
        }
    }
    return destination;
};

class Conversation {
    constructor(_context, option) {
        this._context = _context;
        this.targetId = option.targetId;
        this.type = option.type;
    }
    /**
     * 删除指定会话
     */
    destory() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.removeConversation(this.type, this.targetId);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 清除会话未读数
     */
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.clearUnreadCount(this.type, this.targetId);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 获取指定会话未读数
     */
    getUnreadCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getUnreadCount(this.type, this.targetId);
            // 当未读数为空时，返回 0 故不校验 data 值
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 发送消息
     * @param options
     * @deprecated options.isPersited
     * @deprecated options.isCounted
     * @deprecated options.isStatusMessage
     */
    send(options) {
        return __awaiter(this, void 0, void 0, function* () {
            assertSendMsgOption(options);
            if (!Object.prototype.hasOwnProperty.call(options, 'isPersited')) {
                options.isPersited = true;
            }
            if (!Object.prototype.hasOwnProperty.call(options, 'isCounted')) {
                options.isCounted = true;
            }
            const { code, data } = yield this._context.sendMessage(this.type, this.targetId, options);
            if (code === engine.ErrorCode.SUCCESS) {
                return tranReceivedMessage(data);
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 设置会话状态
     */
    setStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.notificationStatus', status.notificationStatus, (value) => {
                return (value === 1 || value === 2);
            });
            engine.assert('options.isTop', status.isTop, engine.AssertRules.BOOLEAN);
            const code = yield this._context.setConversationStatus(this.type, this.targetId, status.isTop, status.notificationStatus);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 获取历史消息
     */
    getMessages(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.timestamp', options.timestamp, engine.AssertRules.NUMBER);
            engine.assert('options.count', options.count, engine.AssertRules.NUMBER);
            engine.assert('options.order', options.order, (value) => {
                return (value === 0 || value === 1);
            });
            const { code, data } = yield this._context.getHistoryMessage(this.type, this.targetId, options === null || options === void 0 ? void 0 : options.timestamp, options === null || options === void 0 ? void 0 : options.count, options === null || options === void 0 ? void 0 : options.order);
            if (code === engine.ErrorCode.SUCCESS && data) {
                const list = data.list.map(item => tranReceivedMessage(item));
                return Promise.resolve({
                    list,
                    hasMore: data.hasMore
                });
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 撤回消息
     * @param options
     */
    recall(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.messageUId', options.messageUId, engine.AssertRules.STRING, true);
            engine.assert('options.sentTime', options.sentTime, engine.AssertRules.NUMBER, true);
            const { code, data } = yield this._context.recallMessage(this.type, this.targetId, options.messageUId, options.sentTime, options.user);
            if (code === engine.ErrorCode.SUCCESS && data) {
                return tranReceivedMessage(data);
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 按消息 id 删除消息
     */
    deleteMessages(messages) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options', messages, (value) => {
                return engine.isArray(value) && value.length;
            }, true);
            messages.forEach((item) => {
                engine.assert('options.messageUId', item.messageUId, engine.AssertRules.STRING, true);
                engine.assert('options.sentTime', item.sentTime, engine.AssertRules.NUMBER, true);
                engine.assert('options.messageDirection', item.messageDirection, (value) => {
                    return (value === 1 || value === 2);
                }, true);
            });
            const code = yield this._context.deleteRemoteMessage(this.type, this.targetId, messages);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 按时间戳删除消息
     */
    clearMessages(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.timestamp', options.timestamp, engine.AssertRules.NUMBER, true);
            const code = yield this._context.deleteRemoteMessageByTimestamp(this.type, this.targetId, options.timestamp);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 更新（添加、替换）消息扩展属性
     * @param expansion 要更新的消息扩展信息键值对
     * @param message 要更新的原始消息体
    */
    updateMessageExpansion(expansion, message) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('expansion', expansion, engine.AssertRules.OBJECT, true);
            engine.assert('message', message, engine.AssertRules.OBJECT, true);
            const { type: conversationType, targetId, messageUId, canIncludeExpansion, expansion: originExpansion } = message;
            const { code } = yield this._context.sendExpansionMessage({
                conversationType,
                targetId,
                messageUId,
                expansion,
                canIncludeExpansion,
                originExpansion
            });
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 删除扩展存储
     * @params keys 需删除消息扩展的 keys
     * @params message 原始消息体
    */
    removeMessageExpansion(keys, message) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('keys', keys, engine.AssertRules.ARRAY, true);
            engine.assert('message', message, engine.AssertRules.OBJECT, true);
            const { conversationType, targetId, messageUId, canIncludeExpansion } = message;
            const { code } = yield this._context.sendExpansionMessage({
                conversationType,
                targetId,
                messageUId,
                canIncludeExpansion,
                keys
            });
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 设置会话文本草稿
     * @params conversationType 会话乐行
     * @params targetId 目标 ID
     * @params draft 草稿内容
    */
    setDraft(draft) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('draft', draft, engine.AssertRules.STRING, true);
            const code = yield this._context.saveConversationMessageDraft(this.type, this.targetId, draft);
            if (code === engine.ErrorCode.SUCCESS) {
                return Promise.resolve();
            }
        });
    }
    /**
     * 获取会话文本草稿
     * @params conversationType 会话乐行
     * @params targetId 目标 ID
    */
    getDraft() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getConversationMessageDraft(this.type, this.targetId);
            if (code === engine.ErrorCode.SUCCESS) {
                return Promise.resolve(data);
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 删除会话文本草稿
     * @params conversationType 会话乐行
     * @params targetId 目标 ID
    */
    deleteDraft() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.clearConversationMessageDraft(this.type, this.targetId);
            if (code === engine.ErrorCode.SUCCESS) {
                return Promise.resolve();
            }
        });
    }
}
class ConversationModule {
    constructor(apiContext) {
        this._context = apiContext;
    }
    /**
     * 获取会话列表
     * @param options
     */
    getList(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getConversationList(options === null || options === void 0 ? void 0 : options.count, undefined, options === null || options === void 0 ? void 0 : options.startTime, options === null || options === void 0 ? void 0 : options.order);
            if (code === engine.ErrorCode.SUCCESS && data) {
                const list = data.map(item => tranReceiveConversation(item));
                return sortConList(list);
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 获取指定会话实例，通过实例可实现向指定会话收发消息等功能
     * @description 通过该方法获取的会话可能并不存在于当前的会话列表中，此处只作为功能性封装语法糖
     * @param options
     */
    get(options) {
        engine.assert('options.type', options.type, engine.isValidConversationType, true);
        return new Conversation(this._context, options);
    }
    remove(options) {
        engine.assert('options.type', options.type, engine.isValidConversationType, true);
        return new Conversation(this._context, options).destory();
    }
    /**
     * 获取当前所有会话的消息未读数
     */
    getTotalUnreadCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getTotalUnreadCount();
            // 当未读数为空时，返回 0 故不校验 data 值
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 合并会话
     * @param option
     */
    merge(option) {
        !option.conversationList && logger.warn('Parameter option.conversationList are required!');
        return mergeConversationList(option);
    }
}

/**
 * 校验设置聊天室属性的参数
 * @param options
 */
const assertSetChatRoomEntryOption = (options) => {
    engine.assert('options.key', options.key, engine.AssertRules.STRING, true);
    engine.assert('options.value', options.value, engine.AssertRules.STRING, true);
    engine.assert('options.isAutoDelete', options.isAutoDelete, engine.AssertRules.BOOLEAN);
    engine.assert('options.isSendNotification', options.isSendNotification, engine.AssertRules.BOOLEAN);
    engine.assert('options.notificationExtra', options.notificationExtra, engine.AssertRules.STRING);
};
/**
 * 校验删除聊天室属性的参数
 * @param options
 */
const assertRemoveChatRoomEntryOption = (options) => {
    engine.assert('options.key', options.key, engine.AssertRules.STRING, true);
    engine.assert('options.isSendNotification', options.isSendNotification, engine.AssertRules.BOOLEAN);
    engine.assert('options.notificationExtra', options.notificationExtra, engine.AssertRules.STRING);
};
class Chatroom {
    constructor(context, id) {
        this._context = context;
        this._id = id;
    }
    /**
     * 加入聊天室
     */
    join(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.count', options.count, engine.AssertRules.NUMBER, true);
            const code = yield this._context.joinChatroom(this._id, options.count);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 加入已存在的聊天室
     */
    joinExist(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.count', options.count, engine.AssertRules.NUMBER, true);
            const code = yield this._context.joinExistChatroom(this._id, options.count);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 退出聊天室
     */
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.quitChatroom(this._id);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 获取聊天室房间数据
     * @description count 或 order 有一个为 0 时，只返回成员总数，不返回成员列表信息
     */
    getInfo(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.count', options.count, engine.AssertRules.NUMBER);
            engine.assert('options.order', options.order, (value) => {
                return [0, 1, 2].includes(value);
            });
            const { code, data: chatroomInfo } = yield this._context.getChatroomInfo(this._id, options.count, options.order);
            if (code === engine.ErrorCode.SUCCESS && chatroomInfo) {
                return chatroomInfo;
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 设置聊天室自定义属性
     * @description 仅聊天室中不存在此属性或属性设置者为己方时可设置成功
     */
    setEntry(options) {
        return __awaiter(this, void 0, void 0, function* () {
            assertSetChatRoomEntryOption(options);
            const code = yield this._context.setChatroomEntry(this._id, options);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 强制 增加/修改 任意聊天室属性
     * @description 仅聊天室中不存在此属性或属性设置者为己方时可设置成功
     */
    forceSetEntry(options) {
        return __awaiter(this, void 0, void 0, function* () {
            assertSetChatRoomEntryOption(options);
            const code = yield this._context.forceSetChatroomEntry(this._id, options);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 删除聊天室属性
     * @description 仅限于删除自己设置的聊天室属性
     * @param key 属性名称, 支持英文字母、数字、+、=、-、_ 的组合方式, 最大长度 128 字符
     * @param isSendNotification? 删除成功后是否发送通知消息
     * @param notificationExtra? RC:chrmKVNotiMsg 通知消息中携带的附加信息
     */
    removeEntry(options) {
        return __awaiter(this, void 0, void 0, function* () {
            assertRemoveChatRoomEntryOption(options);
            const code = yield this._context.removeChatroomEntry(this._id, options);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 强制删除聊天室内的任意属性
     * @description
     */
    forceRemoveEntry(options) {
        return __awaiter(this, void 0, void 0, function* () {
            assertRemoveChatRoomEntryOption(options);
            const code = yield this._context.forceRemoveChatroomEntry(this._id, options);
            if (code !== engine.ErrorCode.SUCCESS) {
                return Promise.reject({ code, msg: ERROR_CODE[code] });
            }
        });
    }
    /**
     * 获取聊天室的指定属性
     */
    getEntry(key
    /**
     * 属性名称, 支持英文字母、数字、+、=、-、_ 的组合方式, 最大长度 128 字符
     */
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('key', key, (value) => {
                return engine.isString(value) && /[\w+=-]+/.test(value) && value.length <= 128;
            }, true);
            const { code, data } = yield this._context.getChatroomEntry(this._id, key);
            if (code === engine.ErrorCode.SUCCESS && data) {
                return data;
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 获取聊天室的所有属性
     */
    getAllEntries() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getAllChatroomEntries(this._id);
            if (code === engine.ErrorCode.SUCCESS && data) {
                return data;
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 发送消息
     */
    send(options) {
        return __awaiter(this, void 0, void 0, function* () {
            assertSendMsgOption(options);
            if (!Object.prototype.hasOwnProperty.call(options, 'isPersited')) {
                options.isPersited = true;
            }
            if (!Object.prototype.hasOwnProperty.call(options, 'isCounted')) {
                options.isCounted = true;
            }
            const { code, data } = yield this._context.sendMessage(engine.ConversationType.CHATROOM, this._id, options);
            if (code === engine.ErrorCode.SUCCESS) {
                return tranReceivedMessage(data);
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 获取聊天室的历史消息
     */
    getMessages(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.timestamp', options.timestamp, engine.AssertRules.NUMBER);
            engine.assert('options.count', options.count, engine.AssertRules.NUMBER);
            engine.assert('options.order', options.order, (value) => {
                return (value === 0 || value === 1);
            });
            const { code, data } = yield this._context.getChatRoomHistoryMessages(this._id, options.count, options.order, options.timestamp);
            if (code === engine.ErrorCode.SUCCESS && data) {
                const list = data.list.map(item => tranReceivedMessage(item));
                return {
                    list,
                    hasMore: data.hasMore
                };
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
    /**
     * 撤回聊天室消息
    */
    recall(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.messageUId', options.messageUId, engine.AssertRules.STRING, true);
            engine.assert('options.sentTime', options.sentTime, engine.AssertRules.NUMBER, true);
            const conversationType = engine.ConversationType.CHATROOM;
            const { code, data } = yield this._context.recallMessage(conversationType, this._id, options.messageUId, options.sentTime, options.user);
            if (code === engine.ErrorCode.SUCCESS && data) {
                return tranReceivedMessage(data);
            }
            return Promise.reject({ code, msg: ERROR_CODE[code] });
        });
    }
}
class ChatroomModule {
    constructor(apiContext) {
        this._context = apiContext;
    }
    /**
     * 根据聊天室 id 初始化一个聊天室功能实例，以实现收发消息等聊天室相关功能
     * @param option
     */
    get(option) {
        engine.assert('option.id', option.id, engine.notEmptyString, true);
        return new Chatroom(this._context, option.id);
    }
}

class RTCClient {
    constructor(_options, _context) {
        this._options = _options;
        this._context = _context;
        this._roomId = _options.id;
    }
    join() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.joinRTCRoom(this._roomId, this._options.mode, this._options.broadcastType);
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject(code);
        });
    }
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.quitRTCRoom(this._roomId);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    getRoomInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getRTCRoomInfo(this._roomId);
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject(code);
        });
    }
    setUserInfo(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.setRTCUserInfo(this._roomId, info.key, info.value);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    removeUserInfo(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.removeRTCUserInfo(this._roomId, info.keys);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    setData(key, value, isInner, apiType, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.setRTCData(this._roomId, key, value, isInner, apiType, message);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    setUserData(key, value, isInner, message) {
        return this.setData(key, value, isInner, engine.RTCApiType.PERSON, message);
    }
    /**
     * 全量 URI 资源发布
     * @param message 旧版本消息，含消息名及消息内容
     * @param valueInfo 全量消息数据
     * @param objectName 全量 URI 消息名
     */
    setRTCUserData(message, valueInfo, objectName) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.setRTCTotalRes(this._roomId, message, valueInfo, objectName);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    getData(keys, isInner, apiType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getRTCData(this._roomId, keys, isInner, apiType);
            return code === engine.ErrorCode.SUCCESS ? data : Promise.reject(code);
        });
    }
    getUserData(keys, isInner) {
        return this.getData(keys, isInner, engine.RTCApiType.PERSON);
    }
    removeData(keys, isInner, apiType, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.removeRTCData(this._roomId, keys, isInner, apiType, message);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    removeUserData(keys, isInner, message) {
        return this.removeData(keys, isInner, engine.RTCApiType.PERSON, message);
    }
    setRoomData(key, value, isInner, message) {
        return this.setData(key, value, isInner, engine.RTCApiType.ROOM, message);
    }
    getRoomData(keys, isInner) {
        return this.getData(keys, isInner, engine.RTCApiType.ROOM);
    }
    removeRoomData(keys, isInner, message) {
        return this.removeData(keys, isInner, engine.RTCApiType.ROOM, message);
    }
    setState(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.setRTCState(this._roomId, content.report);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    getUserList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getRTCUserInfoList(this._roomId);
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject(code);
        });
    }
    getUserInfoList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.getRTCUserInfoList(this._roomId);
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject(code);
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, code } = yield this._context.getRTCToken(this._roomId, this._options.mode, this._options.broadcastType);
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject(code);
        });
    }
    ping() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this._context.rtcPing(this._roomId, this._options.mode, this._options.broadcastType);
            return code === engine.ErrorCode.SUCCESS ? code : Promise.reject(code);
        });
    }
    send(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield this._context.sendMessage(engine.ConversationType.RTC_ROOM, this._roomId, {
                content: Object.assign({}, options.content),
                messageType: options.messageType
            });
            if (code === engine.ErrorCode.SUCCESS) {
                return data;
            }
            return Promise.reject(code);
        });
    }
}
// export class RTCModule {
//   private _context: APIContext
//   constructor (apiContext: APIContext) {
//     this._context = apiContext
//   }
//   /**
//     * 为 RTCLib 提供的 API 接口，业务层不可使用
//     * @private
//     * @param options
//     */
//   get (options: RTCRoomOption) {
//     assert('options.id', options.id, notEmptyString, true)
//     return new RTCClient(options, this._context)
//   }
// }

const hasMiniBaseEvent = (miniGlobal) => {
    const baseMiniEventNames = ['canIUse', 'getSystemInfo'];
    for (let i = 0, max = baseMiniEventNames.length; i < max; i++) {
        const baseEventName = baseMiniEventNames[i];
        if (!miniGlobal[baseEventName]) {
            return false;
        }
    }
    return true;
};
const isFromUniappEnv = () => {
    if (typeof uni !== 'undefined' && hasMiniBaseEvent(uni)) {
        return true;
    }
    return false;
};

const isFromUniapp = isFromUniappEnv();

const isFromUniapp$1 = isFromUniappEnv();
const createFunc = (method) => (...args) => {
    try {
        return wx[method](...args);
    }
    catch (err) {
        // 此 Bug 是由于微信小程序数据库文件可能会意外损坏导致，目前无解
        logger.error(err);
    }
};
const storage = {
    setItem: createFunc('setStorageSync'),
    getItem: createFunc('getStorageSync'),
    removeItem: createFunc('removeStorageSync'),
    clear: createFunc('clearStorageSync')
};
/**
 * @todo
 */
const wechat = {
    tag: "wechat",
    httpReq(options) {
        const method = options.method || engine.HttpMethod.GET;
        const timeout = options.timeout || 60 * 1000;
        const { headers, query, body } = options;
        const url = engine.appendUrl(options.url, query);
        return new Promise((resolve) => {
            wx.request({
                url,
                method,
                headers,
                timeout,
                data: body,
                success: (res) => {
                    resolve({ data: res.data, status: res.statusCode });
                },
                fail: () => {
                    resolve({ status: engine.ErrorCode.RC_HTTP_REQ_TIMEOUT });
                }
            });
        });
    },
    localStorage: storage,
    sessionStorage: storage,
    isSupportSocket() {
        return true;
    },
    useNavi: false,
    connectPlatform: 'MiniProgram',
    isFromUniapp: isFromUniapp$1,
    createWebSocket(url, protocols) {
        const socketTask = wx.connectSocket({ url, protocols });
        return {
            onClose(callback) {
                socketTask.onClose((res) => {
                    callback(res.code, res.reason);
                });
            },
            onError(callback) {
                socketTask.onError((res) => {
                    callback(res.errMsg);
                });
            },
            onMessage(callback) {
                socketTask.onMessage((res) => {
                    callback(res.data);
                });
            },
            onOpen(callback) {
                socketTask.onOpen(callback);
            },
            send(data) {
                socketTask.send({ data });
            },
            close(code, reason) {
                socketTask.close({ code, reason });
            }
        };
    },
    createDataChannel(watcher) {
        return new engine.WebSocketChannel(this, watcher);
    }
};

const isFromUniapp$2 = isFromUniappEnv();

let runtime;
{
    runtime = wechat;
}
var runtime$1 = runtime;

// RTCLib、CallLib 相关监听存储
const rtcInnerMsgWatcher = [];
const rtcInnerStatusWatcher = [];
const rtcInnerWatcher = {
    message(message) {
        rtcInnerMsgWatcher.forEach(item => item(message));
    },
    status(status) {
        rtcInnerStatusWatcher.forEach(item => item(status));
    }
};
class IMClient {
    constructor(apiContext) {
        this._token = '';
        this._context = apiContext;
        this.Conversation = new ConversationModule(apiContext);
        this.ChatRoom = new ChatroomModule(apiContext);
        this.RTC = function (options) {
            engine.assert('options.id', options.id, engine.notEmptyString, true);
            return new RTCClient(options, apiContext);
        };
    }
    /**
     * 装载 plugin 插件，并返回相应的插件实例，需在调用 `connect` 方法之前使用
     * @param plugins
     */
    install(plugin, options) {
        return this._context.install(plugin, options);
    }
    /**
     * 添加全局事件监听，同一类型事件会覆盖添加，以避免多次监听引起的复杂问题
     * @param options
     */
    watch(options) {
        const { status: statusListener, conversation: conversationListener, message: messageListener, chatroom: chatroomListener, expansion: expansionListener } = options;
        const watcher = {};
        if (statusListener) {
            watcher.connectionState = (status) => {
                // 对业务层的方法要增加 catch 捕获，避免影响内部调用栈的继续进行
                try {
                    statusListener({ status });
                }
                catch (err) {
                    logger.error(err);
                }
            };
        }
        if (conversationListener) {
            watcher.conversationState = (conversations) => {
                try {
                    const list = conversations.map((item) => tranReceiveUpdateConversation(item));
                    conversationListener({
                        updatedConversationList: list
                    });
                }
                catch (err) {
                    logger.error(err);
                }
            };
        }
        if (messageListener) {
            watcher.message = (message) => {
                try {
                    messageListener({ message: tranReceivedMessage(message) });
                }
                catch (err) {
                    logger.error(err);
                }
            };
        }
        if (chatroomListener) {
            watcher.chatroomState = (event) => {
                try {
                    chatroomListener(event);
                }
                catch (err) {
                    logger.error(err);
                }
            };
        }
        if (expansionListener) {
            watcher.expansion = (event) => {
                try {
                    expansionListener(event);
                }
                catch (err) {
                    logger.error(err);
                }
            };
        }
        this._context.assignWatcher(watcher);
    }
    unwatch() {
        this._context.assignWatcher({
            message: undefined,
            connectionState: undefined,
            conversationState: undefined,
            chatroomState: undefined,
            expansion: undefined
        });
    }
    rtcInnerWatch(attrs) {
        const { message: messageListener, status: statusListener } = attrs;
        if (messageListener) {
            rtcInnerMsgWatcher.push((message) => {
                try {
                    messageListener({ message: tranReceivedMessage(message) });
                }
                catch (err) {
                    logger.error(err);
                }
            });
        }
        if (statusListener) {
            rtcInnerStatusWatcher.push((status) => {
                try {
                    statusListener({ status });
                }
                catch (err) {
                    logger.error(err);
                }
            });
        }
        this._context.assignWatcher({ rtcInnerWatcher });
    }
    rtcInnerUnwatch() {
        rtcInnerStatusWatcher.length = rtcInnerStatusWatcher.length = 0;
        this._context.assignWatcher({ rtcInnerWatcher: undefined });
    }
    /**
     * 建立 IM 连接
     * @param options
     */
    connect(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.token', options.token, engine.AssertRules.STRING, true);
            const token = options.token;
            this._token = token;
            const res = yield this._context.connect(token, true);
            if (res.code === engine.ErrorCode.SUCCESS) {
                return { id: res.userId };
            }
            return Promise.reject({ code: res.code, msg: ERROR_CODE[res.code] });
        });
    }
    /**
     * 使用上一次的链接 token 重新建立连接，该方法只需在主动调用 `disconnect` 方法之后有重连需求时调用
     */
    reconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._context.reconnect();
            if (res.code === engine.ErrorCode.SUCCESS) {
                return { id: res.userId };
            }
            return Promise.reject({ code: res.code, msg: ERROR_CODE[res.code] });
        });
    }
    /**
     * 断开当前用户的连接
     * @description 调用后将不再接收消息，不可发送消息，不可获取历史消息，不可获取会话列表
     */
    disconnect() {
        return this._context.disconnect();
    }
    /**
     * 获取当前 IM 环境信息
     */
    getAppInfo() {
        return {
            appkey: this._context.appkey,
            token: this._token,
            navi: this._context.getInfoFromCache()
        };
    }
    /**
     * 获取 IM 连接时间
     */
    getConnectedTime() {
        return this._context.getConnectedTime();
    }
    /**
     * 获取 IM 连接状态
     */
    getConnectionStatus() {
        return this._context.getConnectionStatus();
    }
    /**
     * 获取 IM 连接用户的 id
     */
    getConnectionUserId() {
        return this._context.getCurrentUserId();
    }
    /**
     * 获取文件 token
     * @description 上传文件时，获取文件 token
     * @param fileType 上传类型, 通过 RongIMLib.FILE_TYPE 获取
     * @param fileName 上传文件名，Server 通过文件名生成百度上传认证, 若不传 engine 自动生成
     */
    getFileToken(fileType, fileName) {
        engine.assert('fileType', fileType, engine.isValidFileType, true);
        return this._context.getFileToken(fileType, fileName);
    }
    /**
     * 获取文件上传后的下载地址
     */
    getFileUrl(
    /**
     * 上传类型, 通过 RongIMLib.FILE_TYPE 获取
     */
    fileType, 
    /**
     * 上传后的文件名
     */
    filename, 
    /**
     * 原始文件名
     */
    oriname, 
    /**
     * 上传成功返回数据
     * 百度 bos 上传地址即为下载地址，IM Server 不会返回百度 bos 下载地址，通过用户层传入再返回
    */
    uploadRes) {
        engine.assert('fileType', fileType, engine.isValidFileType, true);
        engine.assert('filename', filename, engine.AssertRules.STRING);
        engine.assert('oriname', oriname, engine.AssertRules.STRING);
        return this._context.getFileUrl(fileType, filename, oriname, uploadRes);
    }
    /**
     * 切换用户，作用等同于断开当前用户连接，以新的 token 重新建立连接
     * @param option
     */
    changeUser(options) {
        return __awaiter(this, void 0, void 0, function* () {
            engine.assert('options.token', options.token, engine.AssertRules.STRING, true);
            yield this.disconnect();
            return this.connect(options);
        });
    }
    /**
     * 注册自定义消息
     * @param messageType 消息类型
     * @param isPersited  是否存储
     * @param isCounted   是否计数
     * @param prototypes  消息属性名称
    */
    registerMessageType(messageType, isPersited, isCounted, prototypes) {
        this._context.registerMessageType(messageType, isPersited, isCounted, prototypes);
    }
}
let imInstance;
/**
 * 初始化
 * @param {IInitOption} options
 */
const init = (options) => {
    if (imInstance) {
        logger.error('The instance already exists. Do not repeatedly call the init method');
        return imInstance;
    }
    engine.assert('options.appkey', options.appkey, engine.AssertRules.STRING, true);
    engine.assert('options.debug', options.debug, engine.AssertRules.BOOLEAN);
    engine.assert('options.navigators', options.navigators, (value) => {
        return engine.isArray(value) && (value.length === 0 || value.every(engine.isHttpUrl));
    });
    const context = engine.APIContext.init(runtime$1, {
        appkey: options.appkey,
        apiVersion: "4.0.0",
        navigators: options.navigators || [],
        miniCMPProxy: options.customCMP || [],
        isEnterPrise: !true,
        connectionType: options.connectType || 'websocket',
        cppProtocol: options.cppProtocol
    });
    imInstance = new IMClient(context);
    return imInstance;
};
const getInstance = () => {
    if (!imInstance) {
        logger.error('Please call the init method first');
    }
    return imInstance;
};

Object.defineProperty(exports, 'ConnectionStatus', {
    enumerable: true,
    get: function () {
        return engine.ConnectionStatus;
    }
});
exports.CHATROOM_ENTRY_TYPE = CHATROOM_ENTRY_TYPE;
exports.CHATROOM_ORDER = CHATROOM_ORDER;
exports.CONNECTION_STATUS = CONNECTION_STATUS;
exports.CONNECT_TYPE = CONNECT_TYPE;
exports.CONVERSATION_TYPE = CONVERSATION_TYPE;
exports.ERROR_CODE = ERROR_CODE;
exports.FILE_TYPE = FILE_TYPE;
exports.IMClient = IMClient;
exports.MENTIONED_TYPE = MENTIONED_TYPE;
exports.MESSAGE_DIRECTION = MESSAGE_DIRECTION;
exports.MESSAGE_TYPE = MESSAGE_TYPE;
exports.MESSAGS_TIME_ORDER = MESSAGS_TIME_ORDER;
exports.NOTIFICATION_STATUS = NOTIFICATION_STATUS;
exports.RECALL_MESSAGE_TYPE = RECALL_MESSAGE_TYPE;
exports.RECEIVED_STATUS = RECEIVED_STATUS;
exports.SDK_VERSION = SDK_VERSION;
exports.getInstance = getInstance;
exports.init = init;
