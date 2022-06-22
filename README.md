## 小程序示例

### 工程构建

1. 安装依赖包 `@rongcloud/engine@latest @rongcloud/imlib-next@latest`: `npm install`
2. 通过微信小程序开发者工具菜单，使用 `工具 - 构建 Npm` 以生成 `miniprogram_npm` 包
3. 需详情信息中取消 **增强编译** 选项，避免对 @rongcloud/imlib-v4 做二次编译而出错

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

>图片消息

融云内置 ImageMessage 包含原图 `imageUri` 、缩略图 `content` 两个属性

目前在小程序中已实现获取缩略图的 API，具体参考 getThumbnail 的调用

>语音消息

融云内置 VoiceMessage 类型音频格式为 Base64 格式 AMR ，因此示例中音频无法直接和其他端互通 (Android、iOS)，但可间接支持播放:

1、发送语音消息前，通过应用服务器转换音频文件

2、可通过示例语音消息中的 URL 播放远程音频文件

>上传模块说明

**注意：IM 下 getFileToken、 getFileUrl 必须在连接成功后调用**

融云小程序提供两种上传服务，上传七牛云，若上传七牛云失败降级上传到百度 BOS
1、上传使用小程序 SDK 的 `getFileToken` 方法获取上传认证信息， 使用 `getFileUrl` 获取上传成功后的可访问地址
2、上传接口使用微信官方接口 `wx.uploadFile` 和 `wx.request` 方法
3、上传逻辑说明如下：

```js
/**
* 上传百度 BOS
*/
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
    });
  });
}

/**
* 上传七牛云
*/
const uploadQiNiu = (fileInfo, token, bosHeaders, bosUrl) => {
  const url = user.qiniuHost;
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: url,
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
          reject(err);
        });
      }
    })
  });
};

/**
* 上传
*/
const upload = (fileInfo, uploadType) => {
  let fileType = uploadType || RongIMLib.FILE_TYPE.FILE;
  let fileName = fileInfo.name || '';
  /**
   * 获取 七牛、百度 上传认证信息
  */
  return imInstance.getFileToken(fileType, fileName).then(result => {
    /**
     * token 七牛认证信息
     * bosToken 百度上传认证 authorization 请求头
     * bosDate 百度上传 x-bce-date 请求头
     * bos 百度上传域名
     * path 百度上传路径
    */
    let { token, bosToken, bosDate, bos, path } = result;
    let bosHeaders = {
      'authorization': bosToken,
      'x-bce-date': bosDate,
      'Content-Type': 'multipart/form-data',
    }
    const bosUploadUrl = bos + path;
    return uploadQiNiu(fileInfo, token, bosHeaders, bosUploadUrl);
  }).then(res => {
    let qiniuHash, qiniuName;
    /**
     * isBosRes: 是否是百度返回结果，不是百度返回结果需传入返回的 hash、name
    */
    if(!res.isBosRes){
      const { data } = res;
      const { hash, name } = JSON.parse(data);
      qiniuHash = hash, qiniuName = name;
    }
    return imInstance.getFileUrl(fileType, qiniuHash, qiniuName, res);
  })
}
```


### 注意事项

> 前后台切换，连接恢复机制

`前台切换至后台`: 无需操作

`后台切换至前台`: 在 app.js `onShow` 事件中调用 `RongIMClient.connect` 即可

> 常见问题

1、提示 `其他设备登录` (状态码为 `6` ) 排查思路

```
(1) 排查 Token 是否存在多设备同时使用,例如 `模拟器`、`真机预览` 使用的是相同的 `Token`

(2) 排查项目是否引入多次 `小程序 SDK`, 项目内只允许引入一次，多页使用可用 `globalData` 共享
```

2、频繁提示 `重连`、`连接断开` 排查思路

排查 `小程序全局 request 请求超时时间` 必须大于 <span style="color: red;">40000 毫秒</span> 

```
配置在 `app.json` 中:
// 示例
{
  "pages": [
    "pages/home",
  ],
  "networkTimeout": {
    "request": 41000
  }
}
```


3、\_ConnectionStatusListener.onChanged is not a function

```
连接状态: 其他设备登录请误调用连接、重连方法
```
