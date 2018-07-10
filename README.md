## 小程序示例

### 目录说明

```
websdk-miniprogram
├── pages
│   ├── conversation 会话模块
│   │   ├── components 组件列表
│   │   │   ├── message.wxml 消息（父级组件）
│   │   │   ├── message 消息组件（子级组件）
│   │   │   │   ├── text.wxml 文本（内置消息）
│   │   │   │   ├── image.wxml 图片（内置消息）
│   │   │   │   ├── voice.wxml 语音（内置消息）
│   │   │   │   └── music.wxml 音乐（自定义消息）
│   │   │   └── conversation.wxml 会话
│   │   ├── images 图片资源（ ICON ）
│   │   ├── chat.wxml 聊天界面
│   │   └── list.wxml 会话列表
│   ├── lib 依赖库
│   │   ├── RongIMLib.miniprogram-1.0.4.js 融云小程序 SDK
│   │   └── RongIMEmoji.js 融云表情库
│   ├── utils 工具类
│   │   ├── underscore-1.8.3.js
│   │   └── utils.js
│   ├── mock.js 假数据，用作演示
│   └── services.js 服务层，用做数据转换、收发消息
├── app.js 小程序人口
└── config.js 配置项
```

### 示例结构介绍

![](https://rongcloud-image.cn.ronghub.com/FjsorhPYJmGuwKI9lxUJFe-c9u-Y?e=2147483647&token=CddrKW5AbOMQaDRwc3ReDNvo3-sL_SO1fSUBKV3H:krY3XWM3tXb5I7X7e6GB2oRBQfI=)

>图解

示例结构分两层 `Services` 、`UI`, 前者做数据转换，后者只做数据渲染及响应的业务事件

### 功能清单

`示例中包含的功能列表如下`:

| 功能	  		     | 项目文件                         | Services 相关方法      
| :---------------|---------------------------------|------------------
| 获取会话列表      | `services.js`、`list.wxml`	   | `Conversation.getList`    
| 获取历史消息      | `services.js`、`chat.wxml`、`components/message/*.wxml`| `Message.getList`     
| 文本消息		     | 	`services.js`、`text.wxml`	     | `Message.sendText`
| 图片消息		     | 	`services.js`、`image.wxml`	     | `Message.sendImage`
| 语音消息		     | 	`services.js`、`voice.wxml`	     | `Message.sendVoice`
| 音乐消息 (自定义) | 	`services.js`、`music.wxml`	     | `Message.sendMusic`

### 特殊说明

>用户 Token

示例中用户 Token 为 Mock 数据，仅做演示使用，集成开发需要动态获取用户 Token ，

开发者需要在自己应用服务器使用 [Server SDK](http://www.rongcloud.cn/docs/server_sdk_api/index.html) 向融云 IM Server 获取用户 Token

>语音消息

融云内置 VoiceMessage 类型音频格式为 Base64 格式 AMR ，因此示例中音频无法直接和其他端互通 (Android、iOS)，但可间接支持播放:

1、发送语音消息前，通过应用服务器转换音频文件

2、可通过示例语音消息中的 URL 播放远程音频文件


### 参考文档

API 示例: https://rongcloud.github.io/websdk-demo/api-test.html

API 说明: http://www.rongcloud.cn/docs/web_api_demo.html

Server SDK: http://www.rongcloud.cn/docs/server_sdk_api/index.html
