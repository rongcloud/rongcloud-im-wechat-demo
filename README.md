## 小程序使用说明

### 开发指南

#### 体验

`xiaochengxu.zip` 为示例项目, 解压后导入开发者工具即可

1、下载 [微信 web 开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)

2、添加 `xiaochengxu` 至开发工具, 点击 `调试` 按界面引导开始体验

#### SDK

使用融云小程序 SDK 请引入 `protobuf-1.0.0.js` 、`RongIMLib.xiaochengxu-1.0.0.js`

说明: `小程序 SDK 与公有云 WebSDK API 及调用方式一致`

#### 文档

1、[WebSDK 开发指南](http://rongcloud.cn/docs/web.html)

2、[WebSDK API 示例](http://rongcloud.cn/docs/web_api_demo.html)

3、[API 示例](https://rongcloud.github.io/websdk-demo/api-test.html)

4、[小程序](https://mp.weixin.qq.com/debug/wxadoc/dev)

### 注意事项

#### 格式转换

`原因`: 
	
融云各端音频(AMR)、缩略图格式均为 Base64 , 小程序内置录音、图片处理返回结果并非 Base64 , 所以涉及转码

若无多端可忽略以下内容

截止 2017 年 8 月中旬, 转码有以下问题(有变及时更新):

1、音频转换

`VoiceMessage` 中音频为 Base64 格式 AMR

`解决方案`: 自己搭建转码服务器处理

2、缩略图

`ImageMessage` 中缩略图为 Base64 

`解决方案`: 上传图片成功后，文件服务器返回缩略图 Base64

### 上线说明 

#### 合法域名配置

1、request: `https://nav.cn.ronghub.com`

2、socket: `wss://wsproxy.cn.ronghub.com`

### 代码部分简介

#### app.js

`onLaunch`
- 获取用户信息，分配token
- sdk初始化，设置消息监听回调

`getUserInfo`
- 获取wx用户信息

`globalData`
- 全局的一些参数

`addListener`:
- 设置监听的回调

`setChangedData`:
- 触发回调事件

#### pages/im/index.js

`getConversationList`
- 获取会话列表

`getUser`
- 根据targetId,获取当前会话聊天对象

`getTime`
- dateformat会话最后一条消息的时间

`addConversation`
- 创建会话

`page: onload`
- 判断当前是否连接，连接则获取会话列表，设置消息监听回调

`page: onshow`
- 若当前初始化完成，则获取会话列表，用于从聊天页面返回到会话列表页的监听

#### pages/im/chat/chat

`getHistoryMessage`
- 获取历史消息

`sendMessage`
- 发送文本消息

`sendImage`
- 发送图片消息

`modifyMessage`
- 消息修饰，添加user，添加消息发送时间

`page: data`
- userInfo: 当前用户的信息
- senderUserInfo: 单聊时聊天对象的用户信息
- messageList: 消息列表
- toView: 消息容器scroll-view滚动到的元素id
- cursorSpacing: input框距离底部的距离
- bottom: 输入框容器浮动距离底部的bottom，输入框获取焦点时设置，主要用于不把消息容器顶上去
- screenHeight: 屏幕的高，用于获取虚拟键盘的高
- emojiWidth: 每个表情的宽，根据屏幕宽度设置，
- scrollHeight: 消息容器的高度，输入框获取焦点时，使最后一条消息显示在视野中
- windowHeight: 可使用窗口高度，用于设置消息容器的高
- autoHeight: 计算出的虚拟键盘的高
- loading: 历史消息拉取状态
- hasMore: 是否有更多历史消息
- imageWidth: 图片消息图片的宽度

`page: refresh`
- 下拉获取更多历史消息

`page: sendImage`
- 发送图片消息

`page: inputFocus`
- 输入框获取焦点，设置消息容器toView，高度等

`page: sendMessage`
- 发送文本消息

`page: getEmoji`
- 展开emoji容器

`page: expandMore`
- 展开更多消息类型容器，目前只有图片

`peg: onShareAppMessage`
- 分享小程序，页面为当前页面，打开之后，默认和当前会话对象聊天

`page: init`
- 设置消息监听回调，获取历史消息

`page: onload`
- 获取emoji，判断当前连接状态，已连接则执行init函数

`page: onShow`
- 获取当前设备信息，计算模拟键盘高度

#### pages/im/api/test

`获取用户信息`
- 直接调用微信api接口

`客服`
- api客服按钮，后台配置客服人员，登陆网页版客服后台，实现客服
- 也可配置接收消息的服务器地址，相应的返回消息(未做)

`转发`
- 调用api转发当前小程序，用户点击进入小程序首页

`发送模板消息`
- 可通过code发送https接口获取session_key和openid,用于下发模板消息，也可自行搭建服务解密userInfo中的encryptedData解密得到相关参数(为了自身应用安全，注释了此功能)