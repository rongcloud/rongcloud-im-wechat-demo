module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1606186787854, function(require, module, exports) {


try {
  if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/engine.cjs.prod.js')
  } else {
    module.exports = require('./dist/engine.cjs.js')
  }
} catch (e) {
  module.exports = require('./dist/engine.cjs.prod.js')
}

}, function(modId) {var map = {"./dist/engine.cjs.prod.js":1606186787855,"./dist/engine.cjs.js":1606186787856}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1606186787855, function(require, module, exports) {
var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.READ=1]="READ",e[e.LISTENED=2]="LISTENED",e[e.DOWNLOADED=4]="DOWNLOADED",e[e.RETRIEVED=8]="RETRIEVED",e[e.UNREAD=0]="UNREAD"}(e||(e={}));var t=e;var n;!function(e){e[e.TIMEOUT=-1]="TIMEOUT",e[e.UNKNOWN=-2]="UNKNOWN",e[e.PARAMETER_ERROR=-3]="PARAMETER_ERROR",e[e.SUCCESS=0]="SUCCESS",e[e.RC_MSG_UNAUTHORIZED=20406]="RC_MSG_UNAUTHORIZED",e[e.RC_DISCUSSION_GROUP_ID_INVALID=20407]="RC_DISCUSSION_GROUP_ID_INVALID",e[e.SEND_FREQUENCY_TOO_FAST=20604]="SEND_FREQUENCY_TOO_FAST",e[e.NOT_IN_DISCUSSION=21406]="NOT_IN_DISCUSSION",e[e.FORBIDDEN_IN_GROUP=22408]="FORBIDDEN_IN_GROUP",e[e.RECALL_MESSAGE=25101]="RECALL_MESSAGE",e[e.NOT_IN_GROUP=22406]="NOT_IN_GROUP",e[e.NOT_IN_CHATROOM=23406]="NOT_IN_CHATROOM",e[e.FORBIDDEN_IN_CHATROOM=23408]="FORBIDDEN_IN_CHATROOM",e[e.RC_CHATROOM_USER_KICKED=23409]="RC_CHATROOM_USER_KICKED",e[e.RC_CHATROOM_NOT_EXIST=23410]="RC_CHATROOM_NOT_EXIST",e[e.RC_CHATROOM_IS_FULL=23411]="RC_CHATROOM_IS_FULL",e[e.RC_CHATROOM_PATAMETER_INVALID=23412]="RC_CHATROOM_PATAMETER_INVALID",e[e.CHATROOM_GET_HISTORYMSG_ERROR=23413]="CHATROOM_GET_HISTORYMSG_ERROR",e[e.CHATROOM_NOT_OPEN_HISTORYMSG_STORE=23414]="CHATROOM_NOT_OPEN_HISTORYMSG_STORE",e[e.CHATROOM_KV_EXCEED=23423]="CHATROOM_KV_EXCEED",e[e.CHATROOM_KV_OVERWRITE_INVALID=23424]="CHATROOM_KV_OVERWRITE_INVALID",e[e.CHATROOM_KV_STORE_NOT_OPEN=23426]="CHATROOM_KV_STORE_NOT_OPEN",e[e.CHATROOM_KEY_NOT_EXIST=23427]="CHATROOM_KEY_NOT_EXIST",e[e.SENSITIVE_SHIELD=21501]="SENSITIVE_SHIELD",e[e.SENSITIVE_REPLACE=21502]="SENSITIVE_REPLACE",e[e.JOIN_IN_DISCUSSION=21407]="JOIN_IN_DISCUSSION",e[e.CREATE_DISCUSSION=21408]="CREATE_DISCUSSION",e[e.INVITE_DICUSSION=21409]="INVITE_DICUSSION",e[e.GET_USERINFO_ERROR=23407]="GET_USERINFO_ERROR",e[e.REJECTED_BY_BLACKLIST=405]="REJECTED_BY_BLACKLIST",e[e.RC_NET_CHANNEL_INVALID=30001]="RC_NET_CHANNEL_INVALID",e[e.RC_NET_UNAVAILABLE=30002]="RC_NET_UNAVAILABLE",e[e.RC_MSG_RESP_TIMEOUT=30003]="RC_MSG_RESP_TIMEOUT",e[e.RC_HTTP_SEND_FAIL=30004]="RC_HTTP_SEND_FAIL",e[e.RC_HTTP_REQ_TIMEOUT=30005]="RC_HTTP_REQ_TIMEOUT",e[e.RC_HTTP_RECV_FAIL=30006]="RC_HTTP_RECV_FAIL",e[e.RC_NAVI_RESOURCE_ERROR=30007]="RC_NAVI_RESOURCE_ERROR",e[e.RC_NODE_NOT_FOUND=30008]="RC_NODE_NOT_FOUND",e[e.RC_DOMAIN_NOT_RESOLVE=30009]="RC_DOMAIN_NOT_RESOLVE",e[e.RC_SOCKET_NOT_CREATED=30010]="RC_SOCKET_NOT_CREATED",e[e.RC_SOCKET_DISCONNECTED=30011]="RC_SOCKET_DISCONNECTED",e[e.RC_PING_SEND_FAIL=30012]="RC_PING_SEND_FAIL",e[e.RC_PONG_RECV_FAIL=30013]="RC_PONG_RECV_FAIL",e[e.RC_MSG_SEND_FAIL=30014]="RC_MSG_SEND_FAIL",e[e.RC_MSG_CONTENT_EXCEED_LIMIT=30016]="RC_MSG_CONTENT_EXCEED_LIMIT",e[e.RC_CONN_ACK_TIMEOUT=31e3]="RC_CONN_ACK_TIMEOUT",e[e.RC_CONN_PROTO_VERSION_ERROR=31001]="RC_CONN_PROTO_VERSION_ERROR",e[e.RC_CONN_ID_REJECT=31002]="RC_CONN_ID_REJECT",e[e.RC_CONN_SERVER_UNAVAILABLE=31003]="RC_CONN_SERVER_UNAVAILABLE",e[e.RC_CONN_USER_OR_PASSWD_ERROR=31004]="RC_CONN_USER_OR_PASSWD_ERROR",e[e.RC_CONN_NOT_AUTHRORIZED=31005]="RC_CONN_NOT_AUTHRORIZED",e[e.RC_CONN_REDIRECTED=31006]="RC_CONN_REDIRECTED",e[e.RC_CONN_PACKAGE_NAME_INVALID=31007]="RC_CONN_PACKAGE_NAME_INVALID",e[e.RC_CONN_APP_BLOCKED_OR_DELETED=31008]="RC_CONN_APP_BLOCKED_OR_DELETED",e[e.RC_CONN_USER_BLOCKED=31009]="RC_CONN_USER_BLOCKED",e[e.RC_DISCONN_KICK=31010]="RC_DISCONN_KICK",e[e.RC_DISCONN_EXCEPTION=31011]="RC_DISCONN_EXCEPTION",e[e.RC_QUERY_ACK_NO_DATA=32001]="RC_QUERY_ACK_NO_DATA",e[e.RC_MSG_DATA_INCOMPLETE=32002]="RC_MSG_DATA_INCOMPLETE",e[e.BIZ_ERROR_CLIENT_NOT_INIT=33001]="BIZ_ERROR_CLIENT_NOT_INIT",e[e.BIZ_ERROR_DATABASE_ERROR=33002]="BIZ_ERROR_DATABASE_ERROR",e[e.BIZ_ERROR_INVALID_PARAMETER=33003]="BIZ_ERROR_INVALID_PARAMETER",e[e.BIZ_ERROR_NO_CHANNEL=33004]="BIZ_ERROR_NO_CHANNEL",e[e.BIZ_ERROR_RECONNECT_SUCCESS=33005]="BIZ_ERROR_RECONNECT_SUCCESS",e[e.BIZ_ERROR_CONNECTING=33006]="BIZ_ERROR_CONNECTING",e[e.MSG_ROAMING_SERVICE_UNAVAILABLE=33007]="MSG_ROAMING_SERVICE_UNAVAILABLE",e[e.MSG_INSERT_ERROR=33008]="MSG_INSERT_ERROR",e[e.MSG_DEL_ERROR=33009]="MSG_DEL_ERROR",e[e.CONVER_REMOVE_ERROR=34001]="CONVER_REMOVE_ERROR",e[e.CONVER_GETLIST_ERROR=34002]="CONVER_GETLIST_ERROR",e[e.CONVER_SETOP_ERROR=34003]="CONVER_SETOP_ERROR",e[e.CONVER_TOTAL_UNREAD_ERROR=34004]="CONVER_TOTAL_UNREAD_ERROR",e[e.CONVER_TYPE_UNREAD_ERROR=34005]="CONVER_TYPE_UNREAD_ERROR",e[e.CONVER_ID_TYPE_UNREAD_ERROR=34006]="CONVER_ID_TYPE_UNREAD_ERROR",e[e.CONVER_CLEAR_ERROR=34007]="CONVER_CLEAR_ERROR",e[e.EXPANSION_LIMIT_EXCEET=34010]="EXPANSION_LIMIT_EXCEET",e[e.MESSAGE_KV_NOT_SUPPORT=34008]="MESSAGE_KV_NOT_SUPPORT",e[e.CLEAR_HIS_TIME_ERROR=34011]="CLEAR_HIS_TIME_ERROR",e[e.CONVER_GET_ERROR=34009]="CONVER_GET_ERROR",e[e.GROUP_SYNC_ERROR=35001]="GROUP_SYNC_ERROR",e[e.GROUP_MATCH_ERROR=35002]="GROUP_MATCH_ERROR",e[e.CHATROOM_ID_ISNULL=36001]="CHATROOM_ID_ISNULL",e[e.CHARTOOM_JOIN_ERROR=36002]="CHARTOOM_JOIN_ERROR",e[e.CHATROOM_HISMESSAGE_ERROR=36003]="CHATROOM_HISMESSAGE_ERROR",e[e.CHATROOM_KV_NOT_FOUND=36004]="CHATROOM_KV_NOT_FOUND",e[e.BLACK_ADD_ERROR=37001]="BLACK_ADD_ERROR",e[e.BLACK_GETSTATUS_ERROR=37002]="BLACK_GETSTATUS_ERROR",e[e.BLACK_REMOVE_ERROR=37003]="BLACK_REMOVE_ERROR",e[e.DRAF_GET_ERROR=38001]="DRAF_GET_ERROR",e[e.DRAF_SAVE_ERROR=38002]="DRAF_SAVE_ERROR",e[e.DRAF_REMOVE_ERROR=38003]="DRAF_REMOVE_ERROR",e[e.SUBSCRIBE_ERROR=39001]="SUBSCRIBE_ERROR",e[e.QNTKN_FILETYPE_ERROR=41001]="QNTKN_FILETYPE_ERROR",e[e.QNTKN_GET_ERROR=41002]="QNTKN_GET_ERROR",e[e.COOKIE_ENABLE=51001]="COOKIE_ENABLE",e[e.GET_MESSAGE_BY_ID_ERROR=61001]="GET_MESSAGE_BY_ID_ERROR",e[e.HAVNODEVICEID=24001]="HAVNODEVICEID",e[e.DEVICEIDISHAVE=24002]="DEVICEIDISHAVE",e[e.FEILD=24009]="FEILD",e[e.VOIPISNULL=24013]="VOIPISNULL",e[e.NOENGINETYPE=24010]="NOENGINETYPE",e[e.NULLCHANNELNAME=24011]="NULLCHANNELNAME",e[e.VOIPDYANMICERROR=24012]="VOIPDYANMICERROR",e[e.NOVOIP=24014]="NOVOIP",e[e.INTERNALERRROR=24015]="INTERNALERRROR",e[e.VOIPCLOSE=24016]="VOIPCLOSE",e[e.CLOSE_BEFORE_OPEN=51001]="CLOSE_BEFORE_OPEN",e[e.ALREADY_IN_USE=51002]="ALREADY_IN_USE",e[e.INVALID_CHANNEL_NAME=51003]="INVALID_CHANNEL_NAME",e[e.VIDEO_CONTAINER_IS_NULL=51004]="VIDEO_CONTAINER_IS_NULL",e[e.DELETE_MESSAGE_ID_IS_NULL=61001]="DELETE_MESSAGE_ID_IS_NULL",e[e.CANCEL=1]="CANCEL",e[e.REJECT=2]="REJECT",e[e.HANGUP=3]="HANGUP",e[e.BUSYLINE=4]="BUSYLINE",e[e.NO_RESPONSE=5]="NO_RESPONSE",e[e.ENGINE_UN_SUPPORTED=6]="ENGINE_UN_SUPPORTED",e[e.NETWORK_ERROR=7]="NETWORK_ERROR",e[e.REMOTE_CANCEL=11]="REMOTE_CANCEL",e[e.REMOTE_REJECT=12]="REMOTE_REJECT",e[e.REMOTE_HANGUP=13]="REMOTE_HANGUP",e[e.REMOTE_BUSYLINE=14]="REMOTE_BUSYLINE",e[e.REMOTE_NO_RESPONSE=15]="REMOTE_NO_RESPONSE",e[e.REMOTE_ENGINE_UN_SUPPORTED=16]="REMOTE_ENGINE_UN_SUPPORTED",e[e.REMOTE_NETWORK_ERROR=17]="REMOTE_NETWORK_ERROR",e[e.VOIP_NOT_AVALIABLE=18]="VOIP_NOT_AVALIABLE"}(n||(n={}));var i,s=n;!function(e){e[e.NONE=0]="NONE",e[e.PRIVATE=1]="PRIVATE",e[e.DISCUSSION=2]="DISCUSSION",e[e.GROUP=3]="GROUP",e[e.CHATROOM=4]="CHATROOM",e[e.CUSTOMER_SERVICE=5]="CUSTOMER_SERVICE",e[e.SYSTEM=6]="SYSTEM",e[e.APP_PUBLIC_SERVICE=7]="APP_PUBLIC_SERVICE",e[e.PUBLIC_SERVICE=8]="PUBLIC_SERVICE",e[e.RTC_ROOM=12]="RTC_ROOM"}(i||(i={}));var r,o=i;!function(e){e[e.IMAGE=1]="IMAGE",e[e.AUDIO=2]="AUDIO",e[e.VIDEO=3]="VIDEO",e[e.FILE=4]="FILE"}(r||(r={}));var a=r;const h=e=>"string"==typeof e,l=e=>"number"==typeof e&&!isNaN(e),u=e=>-1!==Object.prototype.toString.call(e).indexOf("Array"),c=e=>"[object ArrayBuffer]"===Object.prototype.toString.call(e),f=e=>h(e)&&e.length>0,d=e=>"[object Object]"===Object.prototype.toString.call(e),p=e=>"[object Function]"===Object.prototype.toString.call(e),E=e=>void 0===e||"[object Undefined]"===Object.prototype.toString.call(e),_=e=>"[object Null]"===Object.prototype.toString.call(e),m=e=>{for(const t in e)return!0;return!1},y=e=>{if(!d(e)||void 0===e.low||void 0===e.high)return e;let t=e.low;t<0&&(t+=4294967296),t=t.toString(16);return parseInt(e.high.toString(16)+"00000000".replace(new RegExp("0{"+t.length+"}$"),t),16)},T=["https://nav.cn.ronghub.com","https://nav2-cn.ronghub.com"],R=["wsproxy.cn.ronghub.com","wsap-cn.ronghub.com"],C=["cometproxy-cn.ronghub.com","mini-cn.ronghub.com"],I={"RC:TxtMsg":{isCounted:!0,isPersited:!0},"RC:ImgMsg":{isCounted:!0,isPersited:!0},"RC:VcMsg":{isCounted:!0,isPersited:!0},"RC:ImgTextMsg":{isCounted:!0,isPersited:!0},"RC:FileMsg":{isCounted:!0,isPersited:!0},"RC:HQVCMsg":{isCounted:!0,isPersited:!0},"RC:LBSMsg":{isCounted:!0,isPersited:!0},"RC:PSImgTxtMsg":{isCounted:!0,isPersited:!0},"RC:PSMultiImgTxtMsg":{isCounted:!0,isPersited:!0},"RCJrmf:RpMsg":{isCounted:!0,isPersited:!0},"RCJrmf:RpOpendMsg":{isCounted:!0,isPersited:!0},"RC:CombineMsg":{isCounted:!0,isPersited:!0},"RC:ReferenceMsg":{isCounted:!0,isPersited:!0},"RC:InfoNtf":{isCounted:!1,isPersited:!0},"RC:ContactNtf":{isCounted:!1,isPersited:!0},"RC:ProfileNtf":{isCounted:!1,isPersited:!0},"RC:CmdNtf":{isCounted:!1,isPersited:!0},"RC:GrpNtf":{isCounted:!1,isPersited:!0},"RC:RcCmd":{isCounted:!1,isPersited:!0},"RC:CmdMsg":{isCounted:!1,isPersited:!1},"RC:TypSts":{isCounted:!1,isPersited:!1},"RC:PSCmd":{isCounted:!1,isPersited:!1},"RC:SRSMsg":{isCounted:!1,isPersited:!1},"RC:RRReqMsg":{isCounted:!1,isPersited:!1},"RC:RRRspMsg":{isCounted:!1,isPersited:!1},"RC:CsChaR":{isCounted:!1,isPersited:!1},"RC:CSCha":{isCounted:!1,isPersited:!1},"RC:CsEva":{isCounted:!1,isPersited:!1},"RC:CsContact":{isCounted:!1,isPersited:!1},"RC:CsHs":{isCounted:!1,isPersited:!1},"RC:CsHsR":{isCounted:!1,isPersited:!1},"RC:CsSp":{isCounted:!1,isPersited:!1},"RC:CsEnd":{isCounted:!1,isPersited:!1},"RC:CsUpdate":{isCounted:!1,isPersited:!1},"RC:ReadNtf":{isCounted:!1,isPersited:!1},"RC:chrmKVNotiMsg":{isCounted:!1,isPersited:!1},"RC:VCAccept":{isCounted:!1,isPersited:!1},"RC:VCRinging":{isCounted:!1,isPersited:!1},"RC:VCSummary":{isCounted:!1,isPersited:!1},"RC:VCHangup":{isCounted:!1,isPersited:!1},"RC:VCInvite":{isCounted:!1,isPersited:!1},"RC:VCModifyMedia":{isCounted:!1,isPersited:!1},"RC:VCModifyMem":{isCounted:!1,isPersited:!1},"RC:MsgExMsg":{isCounted:!1,isPersited:!1}};let v;const S=e=>(v||(v={set:(t,n)=>{e.localStorage.setItem(t,JSON.stringify(n))},get:t=>{let n;try{n=JSON.parse(e.localStorage.getItem(t))}catch(e){n=null}return n},remove:t=>e.localStorage.removeItem(t),getKeys:()=>{const t=[];for(const n in e.localStorage)t.push(n);return t}}),v);class w{constructor(e){this._caches={},e&&(this._caches=e)}set(e,t){this._caches[e]=t}remove(e){const t=this.get(e);return delete this._caches[e],t}get(e){return this._caches[e]}getKeys(){const e=[];for(const t in this._caches)e.push(t);return e}}class N{constructor(e,t){const n=t?"RCV4-"+t:"RCV4-";this._rootStorage=S(e);const i=this._rootStorage.get(n)||{};this._cache=new w({[n]:i}),this._storageKey=n}_get(){const e=this._storageKey;return this._cache.get(e)||{}}_set(e){const t=this._storageKey;e=e||{},this._cache.set(t,e),this._rootStorage.set(t,e)}set(e,t){const n=this._get();n[e]=t,this._set(n)}remove(e){const t=this._get();delete t[e],this._set(t)}clear(){const e=this._storageKey;this._rootStorage.remove(e),this._cache.remove(e)}get(e){return this._get()[e]}getKeys(){const e=this._get(),t=[];for(const n in e)t.push(n);return t}getValues(){return this._get()||{}}}class O extends Error{constructor(e){super("TODO => "+e)}}const b=(e,t,n)=>{if(void 0===t||void 0===n)return e.toUpperCase();const i=e.slice(t,n);return e=e.replace(i,(e=>e.toUpperCase()))};var M;(M=exports.LogLevel||(exports.LogLevel={}))[M.LOG=0]="LOG",M[M.DEBUG=0]="DEBUG",M[M.INFO=1]="INFO",M[M.WARN=2]="WARN",M[M.ERROR=3]="ERROR";const A={[exports.LogLevel.DEBUG]:console.debug.bind(console),[exports.LogLevel.INFO]:console.info.bind(console),[exports.LogLevel.WARN]:console.warn.bind(console),[exports.LogLevel.ERROR]:console.error.bind(console)};class U{constructor(e){this._tag=e,this._outLevel=exports.LogLevel.WARN,this._stdout=this._defaultStdout,this.log=this._out,this.debug=this._out.bind(this,exports.LogLevel.DEBUG),this.info=this._out.bind(this,exports.LogLevel.INFO),this.warn=this._out.bind(this,exports.LogLevel.WARN),this.error=this._out.bind(this,exports.LogLevel.ERROR)}_defaultStdout(e,...t){A[e](`[${this._tag}](${(new Date).toUTCString()}):`,...t)}_out(e,...t){e>=this._outLevel&&this._stdout(e,...t)}set(e,t){this._outLevel=e,this._stdout=t||this._defaultStdout}}const P=new U("RCLog");var L;(L=exports.AssertRules||(exports.AssertRules={}))[L.STRING=0]="STRING",L[L.ONLY_STRING=1]="ONLY_STRING",L[L.NUMBER=2]="NUMBER",L[L.BOOLEAN=3]="BOOLEAN",L[L.OBJECT=4]="OBJECT",L[L.ARRAY=5]="ARRAY",L[L.CALLBACK=6]="CALLBACK";const D={[exports.AssertRules.STRING]:f,[exports.AssertRules.ONLY_STRING]:h,[exports.AssertRules.NUMBER]:l,[exports.AssertRules.BOOLEAN]:e=>"boolean"==typeof e,[exports.AssertRules.OBJECT]:d,[exports.AssertRules.ARRAY]:u,[exports.AssertRules.CALLBACK]:e=>{let t=!0;return d(e)||(t=!1),(e=e||{}).onSuccess&&!p(e.onSuccess)&&(t=!1),e.onError&&!p(e.onError)&&(t=!1),t}};class x extends Error{constructor(e){super(e),this.name="RCAssertError"}}const V=(e,t,n,i=!1)=>{n=D[n]||n;const s=i&&!n(t)||!i&&!(E(t)||null===t||n(t));if(s){const t=e+" is invalid.";P.error(t)}return!s},k=(e,t,n)=>{n=n||{},t=t||function(){};const{isReverse:i}=n;d(e)&&(()=>{for(const n in e)t(e[n],n,e)})(),(u(e)||h(e))&&(()=>{if(i)for(let n=e.length-1;n>=0;n--)t(e[n],n);else for(let n=0,i=e.length;n<i;n++)t(e[n],n)})()},B=(e,t)=>(k(e,((n,i)=>{e[i]=t(n,i)})),e),F=(e,t)=>{if(e.indexOf)return e.indexOf(t);let n=-1;return k(e,((e,i)=>{t===e&&(n=i)})),n},Y=(e,t)=>{const n=[];k(e,(e=>{n.push(e)}));return-1!==F(n,t)},q=(e,t)=>{const n=Math.floor(1e3*Math.random()%1e4),i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),s=(e=>{e=e||"-";const t=new Date;return`${t.getFullYear()}${e}${t.getMonth()+1}${e}${t.getDate()}`})(),r=(new Date).getTime();let o="";if(t){const e=t.split(".");o="."+e[e.length-1]}return`${e}__RC-${s}_${n}_${r}${i}${o}`};var H;!function(e){e[e.UPDATE=1]="UPDATE",e[e.DELETE=2]="DELETE"}(H||(H={}));var G=H;const K=e=>{const t={},n=JSON.parse(e);return k(n,((e,n)=>{t[n]=e.v})),t},j={_delayTime:0,setTime:e=>{const t=(new Date).getTime();j._delayTime=t-e},getTime:()=>{const e=j._delayTime;return(new Date).getTime()-e}};
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
function $(e,t,n,i){return new(n||(n=Promise))((function(s,r){function o(e){try{h(i.next(e))}catch(e){r(e)}}function a(e){try{h(i.throw(e))}catch(e){r(e)}}function h(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}h((i=i.apply(e,t||[])).next())}))}var W,Q,z,Z;!function(e){e[e.AT_MOST_ONCE=0]="AT_MOST_ONCE",e[e.AT_LEAST_ONCE=1]="AT_LEAST_ONCE",e[e.EXACTLY_ONCE=2]="EXACTLY_ONCE",e[e.DEFAULT=3]="DEFAULT"}(W||(W={})),function(e){e[e.SYMMETRIC=0]="SYMMETRIC",e[e.CONNECT=1]="CONNECT",e[e.CONN_ACK=2]="CONN_ACK",e[e.PUBLISH=3]="PUBLISH",e[e.PUB_ACK=4]="PUB_ACK",e[e.QUERY=5]="QUERY",e[e.QUERY_ACK=6]="QUERY_ACK",e[e.QUERY_CONFIRM=7]="QUERY_CONFIRM",e[e.SUBSCRIBE=8]="SUBSCRIBE",e[e.SUB_ACK=9]="SUB_ACK",e[e.UNSUBSCRIBE=10]="UNSUBSCRIBE",e[e.UNSUB_ACK=11]="UNSUB_ACK",e[e.PING_REQ=12]="PING_REQ",e[e.PING_RESP=13]="PING_RESP",e[e.DISCONNECT=14]="DISCONNECT",e[e.RESERVER2=15]="RESERVER2"}(Q||(Q={})),function(e){e.CONN_ACK="ConnAckMessage",e.DISCONNECT="DisconnectMessage",e.PING_REQ="PingReqMessage",e.PING_RESP="PingRespMessage",e.PUBLISH="PublishMessage",e.PUB_ACK="PubAckMessage",e.QUERY="QueryMessage",e.QUERY_CON="QueryConMessage",e.QUERY_ACK="QueryAckMessage"}(z||(z={})),function(e){e.PUB="pub",e.QUERY="qry"}(Z||(Z={}));class J{constructor(e,t=!1,n=W.AT_LEAST_ONCE,i=!1){this._retain=!1,this.qos=W.AT_LEAST_ONCE,this._dup=!1,this.syncMsg=!1;e&&e>0&&1===arguments.length?(this._retain=(1&e)>0,this.qos=(6&e)>>1,this._dup=(8&e)>0,this.type=e>>4&15,this.syncMsg=8==(8&e)):(this.type=e,this._retain=t,this.qos=n,this._dup=i)}encode(){let e=this.type<<4;return e|=this._retain?1:0,e|=this.qos<<1,e|=this._dup?8:0,e}}class X{static writeUTF(e,t){const n=[];let i=0;if(h(e))for(let t=0,r=e.length;t<r;t++){var s=e.charCodeAt(t);s>=0&&s<=127?(i+=1,n.push(s)):s>=128&&s<=2047?(i+=2,n.push(192|31&s>>6),n.push(128|63&s)):s>=2048&&s<=65535&&(i+=3,n.push(224|15&s>>12),n.push(128|63&s>>6),n.push(128|63&s))}for(let e=0,t=n.length;e<t;e++)n[e]>255&&(n[e]&=255);return t?n:i<=255?[0,i].concat(n):[i>>8,255&i].concat(n)}static readUTF(e){const t=[];let n,i,s=-1;const r=e;let o="";for(;++s<r.length;){var a=Number(r[s]);if(a===(127&a)||(240==(240&a)?a=(a=(a=(a^=240)<<6|128^r[++s])<<6|128^r[++s])<<6|128^r[++s]:224==(224&a)?a=(a=(a^=224)<<6|128^r[++s])<<6|128^r[++s]:192==(192&a)&&(a=(a^=192)<<6|128^r[++s])),!isFinite(a)||a<0||a>1114111||Math.floor(a)!==a)throw RangeError("Invalid code point: "+a);a<=65535?t.push(a):(n=(a-=65536)>>10|55296,i=a%1024|56320,t.push(n,i)),(s+1===r.length||t.length>16384)&&(o+=String.fromCharCode.apply(null,t),t.length=0)}return o}}class ee{constructor(e){this._position=0,this._poolLen=0,this._pool=e,this._poolLen=e.length}check(){return this._position>=this._pool.length}readInt(){const e=this;if(e.check())return-1;let t="";for(let n=0;n<4;n++){let n=e._pool[e._position++].toString(16);1===n.length&&(n="0"+n),t+=n.toString()}return parseInt(t,16)}readLong(){const e=this;if(e.check())return-1;let t="";for(let n=0;n<8;n++){let n=e._pool[e._position++].toString(16);1===n.length&&(n="0"+n),t+=n}return parseInt(t,16)}readByte(){if(this.check())return-1;let e=this._pool[this._position++];return e>255&&(e&=255),e}readUTF(){if(this.check())return"";const e=this.readByte()<<8|this.readByte(),t=this._pool.subarray(this._position,this._position+=e);return X.readUTF(t)}readAll(){return this._pool.subarray(this._position,this._poolLen)}}class te{constructor(){this._pool=[],this._position=0,this._writen=0}write(e){return-1!==Object.prototype.toString.call(e).indexOf("Array")?this._pool=this._pool.concat(e):e>=0&&(e>255&&(e&=255),this._pool.push(e),this._writen++),e}writeArr(e){return this._pool=this._pool.concat(e),e}writeUTF(e){const t=X.writeUTF(e);this._pool=this._pool.concat(t),this._writen+=t.length}getBytesArray(){return this._pool}}var ne="UpStreamMessage",ie="DownStreamMessage",se="DownStreamMessages",re="SessionsAttQryInput",oe="SessionsAttOutput",ae="SyncRequestMsg",he="ChrmPullMsg",le="NotifyMsg",ue="HistoryMsgInput",ce="HistoryMsgOuput",fe="RelationQryInput",de="RelationsOutput",ge="DeleteSessionsInput",pe="SessionInfo",Ee="DeleteSessionsOutput",_e="RelationsInput",me="DeleteMsgInput",ye="CleanHisMsgInput",Te="SessionMsgReadInput",Re="ChrmInput",Ce="QueryChatRoomInfoInput",Ie="QueryChatRoomInfoOutput",ve="RtcInput",Se="RtcUserListOutput",we="SetUserStatusInput",Ne="RtcSetDataInput",Oe="RtcUserSetDataInput",be="RtcDataInput",Me="RtcSetOutDataInput",Ae="MCFollowInput",Ue="RtcTokenOutput",Pe="RtcQryOutput",Le="RtcQryUserOutDataInput",De="RtcUserOutDataOutput",xe="RtcQueryListInput",Ve="RtcRoomInfoOutput",ke="RtcValueInfo",Be="RtcKeyDeleteInput",Fe="GetQNupTokenInput",Ye="GetQNupTokenOutput",qe="GetQNdownloadUrlInput",He="GetQNdownloadUrlOutput",Ge="SetChrmKV",Ke="ChrmKVOutput",je="QueryChrmKV",$e="SetUserSettingInput",We="SetUserSettingOutput",Qe="PullUserSettingInput",ze="PullUserSettingOutput",Ze="SessionReq",Je="SessionStates",Xe="SessionState",et="SessionStateItem",tt="SessionStateModifyReq",nt="SessionStateModifyResp";const it={[ne]:["sessionId","classname","content","pushText","userId","configFlag","appData","extraContent"],[se]:["list","syncTime","finished"],[ie]:["fromUserId","type","groupId","classname","content","dataTime","status","msgId","extraContent"],[re]:["nothing"],[oe]:["inboxTime","sendboxTime","totalUnreadCount"],[ae]:["syncTime","ispolling","isweb","isPullSend","isKeeping","sendBoxSyncTime"],[he]:["syncTime","count"],[le]:["type","time","chrmId"],[ue]:["targetId","time","count","order"],[ce]:["list","syncTime","hasMsg"],[fe]:["type","count","startTime","order"],[de]:["info"],[ge]:["sessions"],[pe]:["type","channelId"],[Ee]:["nothing"],[_e]:["type","msg","count","offset","startTime","endTime"],[me]:["type","conversationId","msgs"],[ye]:["targetId","dataTime","conversationType"],[Te]:["type","msgTime","channelId"],[Re]:["nothing"],[Ce]:["count","order"],[Ie]:["userTotalNums","userInfos"],[Fe]:["type","key"],[qe]:["type","key","fileName"],[Ye]:["deadline","token"],[He]:["downloadUrl"],[Ge]:["entry","bNotify","notification","type"],[Ke]:["entries","bFullUpdate","syncTime"],[je]:["timestamp"],[$e]:["version","value"],[We]:["version","reserve"],[Qe]:["version","reserve"],[ze]:["items","version"],[Ze]:["time"],[Je]:["version","state"],[Xe]:["type","channelId","time","stateItem"],[et]:["sessionStateType","value"],[tt]:["version","state"],[nt]:["version"]},st={};for(var rt in it){const e=it[rt];st[rt]=()=>{const t={},n={getArrayData:()=>t};for(let i=0;i<e.length;i++){const s=e[i];n["set"+b(s,0,1)]=e=>{t[s]=e}}return n},st[rt].decode=function(e){const t={};h(e)&&(e=JSON.parse(e));for(const n in e){const i="get"+b(n,0,1);t[n]=e[n],t[i]=()=>e[n]}return t}}st.getModule=e=>st[e]();const ot=`\npackage Modules;\nmessage probuf {\n  message ${we}\n  {\n    optional int32 status=1;\n  }\n\n  message SetUserStatusOutput\n  {\n    optional int32 nothing=1;\n  }\n\n  message GetUserStatusInput\n  {\n    optional int32 nothing=1;\n  }\n\n  message GetUserStatusOutput\n  {\n    optional string status=1;\n    optional string subUserId=2;\n  }\n\n  message SubUserStatusInput\n  {\n    repeated string userid =1;\n  }\n\n  message SubUserStatusOutput\n  {\n    optional int32 nothing=1; \n  }\n  message VoipDynamicInput\n  {\n    required int32  engineType = 1;\n    required string channelName = 2;\n    optional string channelExtra = 3;\n  }\n\n  message VoipDynamicOutput\n  {\n      required string dynamicKey=1;\n  }\n  message ${le} {\n    required int32 type = 1;\n    optional int64 time = 2;\n    optional string chrmId=3;\n  }\n  message ${ae} {\n    required int64 syncTime = 1;\n    required bool ispolling = 2;\n    optional bool isweb=3;\n    optional bool isPullSend=4;\n    optional bool isKeeping=5;\n    optional int64 sendBoxSyncTime=6;\n  }\n  message ${ne} {\n    required int32 sessionId = 1;\n    required string classname = 2;\n    required bytes content = 3;\n    optional string pushText = 4;\n    optional string appData = 5;\n    repeated string userId = 6;\n    optional int64 delMsgTime = 7;\n    optional string delMsgId = 8;\n    optional int32 configFlag = 9;\n    optional int64 clientUniqueId = 10;\n    optional string extraContent = 11;\n  }\n  message ${se} {\n    repeated DownStreamMessage list = 1;\n    required int64 syncTime = 2;\n    optional bool finished = 3;\n  }\n  message ${ie} {\n    required string fromUserId = 1;\n    required ChannelType type = 2;\n    optional string groupId = 3;\n    required string classname = 4;\n    required bytes content = 5;\n    required int64 dataTime = 6;\n    required int64 status = 7;\n    optional int64 extra = 8;\n    optional string msgId = 9;\n    optional int32 direction = 10;\n    optional int32 plantform =11;\n    optional int32 isRemoved = 12; \n    optional string source = 13; \n    optional int64 clientUniqueId = 14; \n    optional string extraContent = 15; \n\n  }\n  enum ChannelType {\n    PERSON = 1;\n    PERSONS = 2;\n    GROUP = 3;\n    TEMPGROUP = 4;\n    CUSTOMERSERVICE = 5;\n    NOTIFY = 6;\n    MC=7;\n    MP=8;\n  }\n  message CreateDiscussionInput {\n    optional string name = 1;\n  }\n  message CreateDiscussionOutput {\n    required string id = 1;\n  }\n  message ChannelInvitationInput {\n    repeated string users = 1;\n  }\n  message LeaveChannelInput {\n    required int32 nothing = 1;\n  }\n  message ChannelEvictionInput {\n    required string user = 1;\n  }\n  message RenameChannelInput {\n    required string name = 1;\n  }\n  message ChannelInfoInput {\n    required int32 nothing = 1;\n  }\n  message ChannelInfoOutput {\n    required ChannelType type = 1;\n    required string channelId = 2;\n    required string channelName = 3;\n    required string adminUserId = 4;\n    repeated string firstTenUserIds = 5;\n    required int32 openStatus = 6;\n  }\n  message ChannelInfosInput {\n    required int32 page = 1;\n    optional int32 number = 2;\n  }\n  message ChannelInfosOutput {\n    repeated ChannelInfoOutput channels = 1;\n    required int32 total = 2;\n  }\n  message MemberInfo {\n    required string userId = 1;\n    required string userName = 2;\n    required string userPortrait = 3;\n    required string extension = 4;\n  }\n  message GroupMembersInput {\n    required int32 page = 1;\n    optional int32 number = 2;\n  }\n  message GroupMembersOutput {\n    repeated MemberInfo members = 1;\n    required int32 total = 2;\n  }\n  message GetUserInfoInput {\n    required int32 nothing = 1;\n  }\n  message GetUserInfoOutput {\n    required string userId = 1;\n    required string userName = 2;\n    required string userPortrait = 3;\n  }\n  message GetSessionIdInput {\n    required int32 nothing = 1;\n  }\n  message GetSessionIdOutput {\n    required int32 sessionId = 1;\n  }\n  enum FileType {\n    image = ${a.IMAGE};\n    audio = ${a.AUDIO};\n    video = ${a.VIDEO};\n    file = ${a.FILE};\n  }\n  message ${Fe} {\n    required FileType type = 1;\n    optional string key = 2;\n  }\n  message ${qe} {\n    required FileType type = 1;\n    required string key = 2;\n    optional string  fileName = 3;\n  }\n  message ${Ye} {\n    required int64 deadline = 1;\n    required string token = 2;\n    optional string bosToken = 3;\n    optional string bosDate = 4;\n    optional string path = 5;\n  }\n  message ${He} {\n    required string downloadUrl = 1;\n  }\n  message Add2BlackListInput {\n    required string userId = 1;\n  }\n  message RemoveFromBlackListInput {\n    required string userId = 1;\n  }\n  message QueryBlackListInput {\n    required int32 nothing = 1;\n  }\n  message QueryBlackListOutput {\n    repeated string userIds = 1;\n  }\n  message BlackListStatusInput {\n    required string userId = 1;\n  }\n  message BlockPushInput {\n    required string blockeeId = 1;\n  }\n  message ModifyPermissionInput {\n    required int32 openStatus = 1;\n  }\n  message GroupInput {\n    repeated GroupInfo groupInfo = 1;\n  }\n  message GroupOutput {\n    required int32 nothing = 1;\n  }\n  message GroupInfo {\n    required string id = 1;\n    required string name = 2;\n  }\n  message GroupHashInput {\n    required string userId = 1;\n    required string groupHashCode = 2;\n  }\n  message GroupHashOutput {\n    required GroupHashType result = 1;\n  }\n  enum GroupHashType {\n    group_success = 0x00;\n    group_failure = 0x01;\n  }\n  message ${Re} {\n    required int32 nothing = 1;\n  }\n  message ChrmOutput {\n    required int32 nothing = 1;\n  }\n  message ${he} {\n    required int64 syncTime = 1;\n    required int32 count = 2;\n  }\n  \n  message ChrmPullMsgNew \n  {\n    required int32 count = 1;\n    required int64 syncTime = 2;\n    optional string chrmId=3;\n  }\n  message ${fe}\n  {\n    optional ChannelType type = 1;\n    optional int32 count = 2;\n    optional int64 startTime = 3;\n    optional int32 order = 4;\n  }\n  message ${_e}\n  {\n    required ChannelType type = 1;\n    optional DownStreamMessage msg =2;\n    optional int32 count = 3;\n    optional int32 offset = 4;\n    optional int64 startTime = 5;\n    optional int64 endTime = 6;\n  }\n  message ${de}\n  {\n    repeated RelationInfo info = 1;\n  }\n  message RelationInfo\n  {\n    required ChannelType type = 1;\n    required string userId = 2;\n    optional DownStreamMessage msg =3;\n    optional int64 readMsgTime= 4;\n    optional int64 unreadCount= 5;\n  }\n  message RelationInfoReadTime\n  {\n    required ChannelType type = 1;\n    required int64 readMsgTime= 2;\n    required string targetId = 3;\n  }\n  message ${ye}\n  {\n      required string targetId = 1;\n      required int64 dataTime = 2;\n      optional int32 conversationType= 3;\n  }\n  message HistoryMessageInput\n  {\n    required string targetId = 1;\n    required int64 dataTime =2;\n    required int32 size  = 3;\n  }\n\n  message HistoryMessagesOuput\n  {\n    repeated DownStreamMessage list = 1;\n    required int64 syncTime = 2;\n    required int32 hasMsg = 3;\n  }\n  message ${Ce}\n  {\n    required int32 count= 1;\n    optional int32 order= 2;\n  }\n\n  message ${Ie}\n  {\n    optional int32 userTotalNums = 1;\n    repeated ChrmMember userInfos = 2;\n  }\n  message ChrmMember\n  {\n    required int64 time = 1;\n    required string id = 2;\n  }\n  message MPFollowInput\n  {\n    required string id = 1;\n  }\n\n  message MPFollowOutput\n  {\n    required int32 nothing = 1;\n    optional MpInfo info =2;\n  }\n\n  message ${Ae}\n  {\n    required string id = 1;\n  }\n\n  message MCFollowOutput\n  {\n    required int32 nothing = 1;\n    optional MpInfo info =2;\n  }\n\n  message MpInfo  \n  {\n    required string mpid=1;\n    required string name = 2;\n    required string type = 3;\n    required int64 time=4;\n    optional string portraitUrl=5;\n    optional string extra =6;\n  }\n\n  message SearchMpInput\n  {\n    required int32 type=1;\n    required string id=2;\n  }\n\n  message SearchMpOutput\n  {\n    required int32 nothing=1;\n    repeated MpInfo info = 2;\n  }\n\n  message PullMpInput\n  {\n    required int64 time=1;\n    required string mpid=2;\n  }\n\n  message PullMpOutput\n  {\n    required int32 status=1;\n    repeated MpInfo info = 2;\n  }\n  message ${ue}\n  {\n    optional string targetId = 1;\n    optional int64 time = 2;\n    optional int32 count  = 3;\n    optional int32 order = 4;\n  }\n\n  message ${ce}\n  {\n    repeated DownStreamMessage list=1;\n    required int64 syncTime=2;\n    required int32 hasMsg=3;\n  }\n  message ${xe}{\n    optional int32 order=1;\n  }\n\n  message ${Be}{\n    repeated string key=1;\n  }\n\n  message ${ke}{\n    required string key=1;\n    required string value=2;\n  }\n\n  message RtcUserInfo{\n    required string userId=1;\n    repeated ${ke} userData=2;\n  }\n\n  message ${Se}{\n    repeated RtcUserInfo list=1;\n    optional string token=2;\n    optional string sessionId=3;\n  }\n  message RtcRoomInfoOutput{\n    optional string roomId = 1;\n    repeated ${ke} roomData = 2;\n    optional int32 userCount = 3;\n    repeated RtcUserInfo list=4;\n  }\n  message ${ve}{\n    required int32 roomType=1;\n    optional int32 broadcastType=2;\n  }\n  message RtcQryInput{ \n    required bool isInterior=1;\n    required targetType target=2;\n    repeated string key=3;\n  }\n  message ${Pe}{\n    repeated ${ke} outInfo=1;\n  }\n  message RtcDelDataInput{\n    repeated string key=1;\n    required bool isInterior=2;\n    required targetType target=3;\n  }\n  message ${be}{ \n    required bool interior=1;\n    required targetType target=2;\n    repeated string key=3;\n    optional string objectName=4;\n    optional string content=5;\n  }\n  message ${Ne}{\n    required bool interior=1;\n    required targetType target=2;\n    required string key=3;\n    required string value=4;\n    optional string objectName=5;\n    optional string content=6;\n  }\n  message ${Oe} {\n    repeated ${ke} valueInfo = 1;\n    required string objectName = 2;\n    repeated ${ke} content = 3;\n  }\n  message RtcOutput\n  {\n    optional int32 nothing=1; \n  }\n  message ${Ue}{\n    required string rtcToken=1;\n  }\n  enum targetType {\n    ROOM =1 ;\n    PERSON = 2;\n  }\n  message ${Me}{\n    required targetType target=1;\n    repeated ${ke} valueInfo=2;\n    optional string objectName=3;\n    optional string content=4;\n  }\n  message ${Le}{\n    repeated string userId = 1;\n  }\n  message ${De}{\n    repeated RtcUserInfo user = 1;\n  }\n  message ${re}{\n    required int32 nothing = 1;\n  }\n  message ${oe}{\n    required int64 inboxTime = 1;\n    required int64 sendboxTime = 2;\n    required int64 totalUnreadCount = 3;\n  }\n  message ${Te}\n  {\n    required ChannelType type = 1;\n    required int64 msgTime = 2;\n    required string channelId = 3;\n  }\n  message SessionMsgReadOutput\n  {\n    optional int32 nothing=1; \n  }\n  message ${ge}\n  {\n    repeated SessionInfo sessions = 1;\n  }\n  message ${pe}\n  {\n    required ChannelType type = 1;\n    required string channelId = 2;\n  }\n  message ${Ee}\n  {\n    optional int32 nothing=1; \n  }\n  message ${me}\n  {\n    optional ChannelType type = 1;\n    optional string conversationId = 2;\n    repeated DeleteMsg msgs = 3;\n  }\n  message DeleteMsg\n  {\n    optional string msgId = 1;\n    optional int64 msgDataTime = 2;\n    optional int32 direct = 3;\n  }\n  message ChrmKVEntity {\n    required string key = 1;\n    required string value = 2;\n    optional int32 status = 3;\n    optional int64 timestamp = 4;\n    optional string uid = 5;\n  }\n  message ${Ge} {\n    required ChrmKVEntity entry = 1;\n    optional bool bNotify = 2;\n    optional UpStreamMessage notification = 3;\n    optional ChannelType type = 4;\n  }\n  message ${Ke} {\n    repeated ChrmKVEntity entries = 1;\n    optional bool bFullUpdate = 2;\n    optional int64 syncTime = 3;\n  }\n  message ${je} {\n    required int64 timestamp = 1;\n  }\n  message ${$e} {\n    required int64 version=1;\n    required string value=2;\n  }\n  message ${We} {\n    required int64 version=1;\n    required bool reserve=2;\n  }\n  message ${Qe} {\n    required int64 version=1;//当前客户端的最大版本号\n    optional bool reserve=2;\n  }\n  message ${ze} {\n    repeated UserSettingItem items = 1;\n    required int64 version=2;\n  }\n  message UserSettingItem {\n    required string targetId= 1;\n    required ChannelType type = 2;\n    required string key = 4;\n    required bytes value = 5;\n    required int64 version=6;\n    required int32 status=7;\n  }\n  message ${Ze} {\n    required int64 time = 1;\n  }\n  message ${Je} {\n    required int64 version=1;\n    repeated SessionState state= 2;\n  }\n  message ${Xe} {\n    required ChannelType type = 1;\n    required string channelId = 2;  \n    optional int64 time = 3;\n    repeated SessionStateItem stateItem = 4;\n  }\n  message ${et} {\n    required SessionStateType sessionStateType = 1;\n    required string value = 2;\n  }\n  enum SessionStateType {\n    IsSilent = 1;\n    IsTop = 2;\n  }\n  message ${tt} {\n    required int64 version=1;\n    repeated SessionState state= 2;\n  }\n  message ${nt} {\n    required int64 version=1;\n  }\n}\n`;const at=(ht=ot,function(e,t){var n,i,s={};return s.ByteBuffer=e,s.c=e,n=e,s.Long=t||null,s.VERSION="5.0.1",s.WIRE_TYPES={},s.WIRE_TYPES.VARINT=0,s.WIRE_TYPES.BITS64=1,s.WIRE_TYPES.LDELIM=2,s.WIRE_TYPES.STARTGROUP=3,s.WIRE_TYPES.ENDGROUP=4,s.WIRE_TYPES.BITS32=5,s.PACKABLE_WIRE_TYPES=[s.WIRE_TYPES.VARINT,s.WIRE_TYPES.BITS64,s.WIRE_TYPES.BITS32],s.TYPES={int32:{name:"int32",wireType:s.WIRE_TYPES.VARINT,defaultValue:0},uint32:{name:"uint32",wireType:s.WIRE_TYPES.VARINT,defaultValue:0},sint32:{name:"sint32",wireType:s.WIRE_TYPES.VARINT,defaultValue:0},int64:{name:"int64",wireType:s.WIRE_TYPES.VARINT,defaultValue:s.Long?s.Long.ZERO:void 0},uint64:{name:"uint64",wireType:s.WIRE_TYPES.VARINT,defaultValue:s.Long?s.Long.UZERO:void 0},sint64:{name:"sint64",wireType:s.WIRE_TYPES.VARINT,defaultValue:s.Long?s.Long.ZERO:void 0},bool:{name:"bool",wireType:s.WIRE_TYPES.VARINT,defaultValue:!1},double:{name:"double",wireType:s.WIRE_TYPES.BITS64,defaultValue:0},string:{name:"string",wireType:s.WIRE_TYPES.LDELIM,defaultValue:""},bytes:{name:"bytes",wireType:s.WIRE_TYPES.LDELIM,defaultValue:null},fixed32:{name:"fixed32",wireType:s.WIRE_TYPES.BITS32,defaultValue:0},sfixed32:{name:"sfixed32",wireType:s.WIRE_TYPES.BITS32,defaultValue:0},fixed64:{name:"fixed64",wireType:s.WIRE_TYPES.BITS64,defaultValue:s.Long?s.Long.UZERO:void 0},sfixed64:{name:"sfixed64",wireType:s.WIRE_TYPES.BITS64,defaultValue:s.Long?s.Long.ZERO:void 0},float:{name:"float",wireType:s.WIRE_TYPES.BITS32,defaultValue:0},enum:{name:"enum",wireType:s.WIRE_TYPES.VARINT,defaultValue:0},message:{name:"message",wireType:s.WIRE_TYPES.LDELIM,defaultValue:null},group:{name:"group",wireType:s.WIRE_TYPES.STARTGROUP,defaultValue:null}},s.MAP_KEY_TYPES=[s.TYPES.int32,s.TYPES.sint32,s.TYPES.sfixed32,s.TYPES.uint32,s.TYPES.fixed32,s.TYPES.int64,s.TYPES.sint64,s.TYPES.sfixed64,s.TYPES.uint64,s.TYPES.fixed64,s.TYPES.bool,s.TYPES.string,s.TYPES.bytes],s.ID_MIN=1,s.ID_MAX=536870911,s.convertFieldsToCamelCase=!1,s.populateAccessors=!0,s.populateDefaults=!0,s.Util=function(){var e={};return e.IS_NODE=!("object"!=typeof process||process+""!="[object process]"||process.browser),e.XHR=function(){var e,t=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],n=null;for(e=0;e<t.length;e++){try{n=t[e]()}catch(e){continue}break}if(!n)throw Error("XMLHttpRequest is not supported");return n},e.fetch=function(t,n){if(n&&"function"!=typeof n&&(n=null),e.IS_NODE)if(n)g.readFile(t,(function(e,t){n(e?null:""+t)}));else try{return g.readFileSync(t)}catch(e){return null}else{var i=e.XHR();if(i.open("GET",t,!!n),i.setRequestHeader("Accept","text/plain"),"function"==typeof i.overrideMimeType&&i.overrideMimeType("text/plain"),!n)return i.send(null),200==i.status||0==i.status&&"string"==typeof i.responseText?i.responseText:null;if(i.onreadystatechange=function(){4==i.readyState&&(200==i.status||0==i.status&&"string"==typeof i.responseText?n(i.responseText):n(null))},4==i.readyState)return;i.send(null)}},e.toCamelCase=function(e){return e.replace(/_([a-zA-Z])/g,(function(e,t){return t.toUpperCase()}))},e}(),s.Lang={DELIM:/[\s\{\}=;:\[\],'"\(\)<>]/g,RULE:/^(?:required|optional|repeated|map)$/,TYPE:/^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,NAME:/^[a-zA-Z_][a-zA-Z_0-9]*$/,TYPEDEF:/^[a-zA-Z][a-zA-Z_0-9]*$/,TYPEREF:/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,FQTYPEREF:/^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,NUMBER:/^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,NUMBER_DEC:/^(?:[1-9][0-9]*|0)$/,NUMBER_HEX:/^0[xX][0-9a-fA-F]+$/,NUMBER_OCT:/^0[0-7]+$/,NUMBER_FLT:/^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,BOOL:/^(?:true|false)$/i,ID:/^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,NEGID:/^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,WHITESPACE:/\s/,STRING:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,STRING_DQ:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,STRING_SQ:/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g},s.DotProto=function(e,t){function n(e,n){var i=-1,s=1;if("-"==e.charAt(0)&&(s=-1,e=e.substring(1)),t.NUMBER_DEC.test(e))i=parseInt(e);else if(t.NUMBER_HEX.test(e))i=parseInt(e.substring(2),16);else{if(!t.NUMBER_OCT.test(e))throw Error("illegal id value: "+(s<0?"-":"")+e);i=parseInt(e.substring(1),8)}if(i=0|s*i,!n&&i<0)throw Error("illegal id value: "+(s<0?"-":"")+e);return i}function i(e){var n=1;if("-"==e.charAt(0)&&(n=-1,e=e.substring(1)),t.NUMBER_DEC.test(e))return n*parseInt(e,10);if(t.NUMBER_HEX.test(e))return n*parseInt(e.substring(2),16);if(t.NUMBER_OCT.test(e))return n*parseInt(e.substring(1),8);if("inf"===e)return 1/0*n;if("nan"===e)return NaN;if(t.NUMBER_FLT.test(e))return n*parseFloat(e);throw Error("illegal number value: "+(n<0?"-":"")+e)}function s(e,t,n){void 0===e[t]?e[t]=n:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(n))}var r,o,a={},h=function(e){this.source=e+"",this.index=0,this.line=1,this.stack=[],this._stringOpen=null},l=h.prototype;return l._readString=function(){var e,n='"'===this._stringOpen?t.STRING_DQ:t.STRING_SQ;if(n.lastIndex=this.index-1,!(e=n.exec(this.source)))throw Error("unterminated string");return this.index=n.lastIndex,this.stack.push(this._stringOpen),this._stringOpen=null,e[1]},l.next=function(){var e,n,i,s,r;if(this.stack.length>0)return this.stack.shift();if(this.index>=this.source.length)return null;if(null!==this._stringOpen)return this._readString();do{for(e=!1;t.WHITESPACE.test(i=this.source.charAt(this.index));)if("\n"===i&&++this.line,++this.index===this.source.length)return null;if("/"===this.source.charAt(this.index))if(++this.index,"/"===this.source.charAt(this.index)){for(;"\n"!==this.source.charAt(++this.index);)if(this.index==this.source.length)return null;++this.index,++this.line,e=!0}else{if("*"!==(i=this.source.charAt(this.index)))return"/";do{if("\n"===i&&++this.line,++this.index===this.source.length)return null;n=i,i=this.source.charAt(this.index)}while("*"!==n||"/"!==i);++this.index,e=!0}}while(e);if(this.index===this.source.length)return null;if(s=this.index,t.DELIM.lastIndex=0,!t.DELIM.test(this.source.charAt(s++)))for(;s<this.source.length&&!t.DELIM.test(this.source.charAt(s));)++s;return('"'===(r=this.source.substring(this.index,this.index=s))||"'"===r)&&(this._stringOpen=r),r},l.peek=function(){if(0===this.stack.length){var e=this.next();if(null===e)return null;this.stack.push(e)}return this.stack[0]},l.skip=function(e){var t=this.next();if(t!==e)throw Error("illegal '"+t+"', '"+e+"' expected")},l.omit=function(e){return this.peek()===e&&(this.next(),!0)},l.toString=function(){return"Tokenizer ("+this.index+"/"+this.source.length+" at line "+this.line+")"},a.Tokenizer=h,(o=(r=function(e){this.tn=new h(e),this.proto3=!1}).prototype).parse=function(){var e,n={name:"[ROOT]",package:null,messages:[],enums:[],imports:[],options:{},services:[]},i=!0;try{for(;e=this.tn.next();)switch(e){case"package":if(!i||null!==n.package)throw Error("unexpected 'package'");if(e=this.tn.next(),!t.TYPEREF.test(e))throw Error("illegal package name: "+e);this.tn.skip(";"),n.package=e;break;case"import":if(!i)throw Error("unexpected 'import'");"public"===(e=this.tn.peek())&&this.tn.next(),e=this._readString(),this.tn.skip(";"),n.imports.push(e);break;case"syntax":if(!i)throw Error("unexpected 'syntax'");this.tn.skip("="),"proto3"===(n.syntax=this._readString())&&(this.proto3=!0),this.tn.skip(";");break;case"message":this._parseMessage(n,null),i=!1;break;case"enum":this._parseEnum(n),i=!1;break;case"option":this._parseOption(n);break;case"service":this._parseService(n);break;case"extend":this._parseExtend(n);break;default:throw Error("unexpected '"+e+"'")}}catch(e){throw e.message="Parse error at line "+this.tn.line+": "+e.message,e}return delete n.name,n},r.parse=function(e){return new r(e).parse()},o._readString=function(){var e,t,n="";do{if("'"!==(t=this.tn.next())&&'"'!==t)throw Error("illegal string delimiter: "+t);n+=this.tn.next(),this.tn.skip(t),e=this.tn.peek()}while('"'===e||'"'===e);return n},o._readValue=function(e){var n=this.tn.peek();if('"'===n||"'"===n)return this._readString();if(this.tn.next(),t.NUMBER.test(n))return i(n);if(t.BOOL.test(n))return"true"===n.toLowerCase();if(e&&t.TYPEREF.test(n))return n;throw Error("illegal value: "+n)},o._parseOption=function(e,n){var i,s=this.tn.next(),r=!1;if("("===s&&(r=!0,s=this.tn.next()),!t.TYPEREF.test(s))throw Error("illegal option name: "+s);i=s,r&&(this.tn.skip(")"),i="("+i+")",s=this.tn.peek(),t.FQTYPEREF.test(s)&&(i+=s,this.tn.next())),this.tn.skip("="),this._parseOptionValue(e,i),n||this.tn.skip(";")},o._parseOptionValue=function(e,n){var i=this.tn.peek();if("{"!==i)s(e.options,n,this._readValue(!0));else for(this.tn.skip("{");"}"!==(i=this.tn.next());){if(!t.NAME.test(i))throw Error("illegal option name: "+n+"."+i);this.tn.omit(":")?s(e.options,n+"."+i,this._readValue(!0)):this._parseOptionValue(e,n+"."+i)}},o._parseService=function(e){var n,i=this.tn.next();if(!t.NAME.test(i))throw Error("illegal service name at line "+this.tn.line+": "+i);for(n={name:i,rpc:{},options:{}},this.tn.skip("{");"}"!==(i=this.tn.next());)if("option"===i)this._parseOption(n);else{if("rpc"!==i)throw Error("illegal service token: "+i);this._parseServiceRPC(n)}this.tn.omit(";"),e.services.push(n)},o._parseServiceRPC=function(e){var n,i,s="rpc",r=this.tn.next();if(!t.NAME.test(r))throw Error("illegal rpc service method name: "+r);if(n=r,i={request:null,response:null,request_stream:!1,response_stream:!1,options:{}},this.tn.skip("("),"stream"===(r=this.tn.next()).toLowerCase()&&(i.request_stream=!0,r=this.tn.next()),!t.TYPEREF.test(r))throw Error("illegal rpc service request type: "+r);if(i.request=r,this.tn.skip(")"),"returns"!==(r=this.tn.next()).toLowerCase())throw Error("illegal rpc service request type delimiter: "+r);if(this.tn.skip("("),"stream"===(r=this.tn.next()).toLowerCase()&&(i.response_stream=!0,r=this.tn.next()),i.response=r,this.tn.skip(")"),"{"===(r=this.tn.peek())){for(this.tn.next();"}"!==(r=this.tn.next());){if("option"!==r)throw Error("illegal rpc service token: "+r);this._parseOption(i)}this.tn.omit(";")}else this.tn.skip(";");void 0===e[s]&&(e[s]={}),e[s][n]=i},o._parseMessage=function(e,i){var s=!!i,r=this.tn.next(),o={name:"",fields:[],enums:[],messages:[],options:{},services:[],oneofs:{}};if(!t.NAME.test(r))throw Error("illegal "+(s?"group":"message")+" name: "+r);for(o.name=r,s&&(this.tn.skip("="),i.id=n(this.tn.next()),o.isGroup=!0),"["===(r=this.tn.peek())&&i&&this._parseFieldOptions(i),this.tn.skip("{");"}"!==(r=this.tn.next());)if(t.RULE.test(r))this._parseMessageField(o,r);else if("oneof"===r)this._parseMessageOneOf(o);else if("enum"===r)this._parseEnum(o);else if("message"===r)this._parseMessage(o);else if("option"===r)this._parseOption(o);else if("service"===r)this._parseService(o);else if("extensions"===r)o.extensions=this._parseExtensionRanges();else if("reserved"===r)this._parseIgnored();else if("extend"===r)this._parseExtend(o);else{if(!t.TYPEREF.test(r))throw Error("illegal message token: "+r);if(!this.proto3)throw Error("illegal field rule: "+r);this._parseMessageField(o,"optional",r)}return this.tn.omit(";"),e.messages.push(o),o},o._parseIgnored=function(){for(;";"!==this.tn.peek();)this.tn.next();this.tn.skip(";")},o._parseMessageField=function(e,i,s){var r,o,a;if(!t.RULE.test(i))throw Error("illegal message field rule: "+i);if(r={rule:i,type:"",name:"",options:{},id:0},"map"===i){if(s)throw Error("illegal type: "+s);if(this.tn.skip("<"),o=this.tn.next(),!t.TYPE.test(o)&&!t.TYPEREF.test(o))throw Error("illegal message field type: "+o);if(r.keytype=o,this.tn.skip(","),o=this.tn.next(),!t.TYPE.test(o)&&!t.TYPEREF.test(o))throw Error("illegal message field: "+o);if(r.type=o,this.tn.skip(">"),o=this.tn.next(),!t.NAME.test(o))throw Error("illegal message field name: "+o);r.name=o,this.tn.skip("="),r.id=n(this.tn.next()),"["===(o=this.tn.peek())&&this._parseFieldOptions(r),this.tn.skip(";")}else if("group"===(s=void 0!==s?s:this.tn.next())){if(a=this._parseMessage(e,r),!/^[A-Z]/.test(a.name))throw Error("illegal group name: "+a.name);r.type=a.name,r.name=a.name.toLowerCase(),this.tn.omit(";")}else{if(!t.TYPE.test(s)&&!t.TYPEREF.test(s))throw Error("illegal message field type: "+s);if(r.type=s,o=this.tn.next(),!t.NAME.test(o))throw Error("illegal message field name: "+o);r.name=o,this.tn.skip("="),r.id=n(this.tn.next()),"["===(o=this.tn.peek())&&this._parseFieldOptions(r),this.tn.skip(";")}return e.fields.push(r),r},o._parseMessageOneOf=function(e){var n,i,s,r=this.tn.next();if(!t.NAME.test(r))throw Error("illegal oneof name: "+r);for(i=r,s=[],this.tn.skip("{");"}"!==(r=this.tn.next());)(n=this._parseMessageField(e,"optional",r)).oneof=i,s.push(n.id);this.tn.omit(";"),e.oneofs[i]=s},o._parseFieldOptions=function(e){this.tn.skip("[");for(var t=!0;"]"!==this.tn.peek();)t||this.tn.skip(","),this._parseOption(e,!0),t=!1;this.tn.next()},o._parseEnum=function(e){var i,s={name:"",values:[],options:{}},r=this.tn.next();if(!t.NAME.test(r))throw Error("illegal name: "+r);for(s.name=r,this.tn.skip("{");"}"!==(r=this.tn.next());)if("option"===r)this._parseOption(s);else{if(!t.NAME.test(r))throw Error("illegal name: "+r);this.tn.skip("="),i={name:r,id:n(this.tn.next(),!0)},"["===(r=this.tn.peek())&&this._parseFieldOptions({options:{}}),this.tn.skip(";"),s.values.push(i)}this.tn.omit(";"),e.enums.push(s)},o._parseExtensionRanges=function(){var t,n,s,r=[];do{for(n=[];;){switch(t=this.tn.next()){case"min":s=e.ID_MIN;break;case"max":s=e.ID_MAX;break;default:s=i(t)}if(n.push(s),2===n.length)break;if("to"!==this.tn.peek()){n.push(s);break}this.tn.next()}r.push(n)}while(this.tn.omit(","));return this.tn.skip(";"),r},o._parseExtend=function(e){var n,i=this.tn.next();if(!t.TYPEREF.test(i))throw Error("illegal extend reference: "+i);for(n={ref:i,fields:[]},this.tn.skip("{");"}"!==(i=this.tn.next());)if(t.RULE.test(i))this._parseMessageField(n,i);else{if(!t.TYPEREF.test(i))throw Error("illegal extend token: "+i);if(!this.proto3)throw Error("illegal field rule: "+i);this._parseMessageField(n,"optional",i)}return this.tn.omit(";"),e.messages.push(n),n},o.toString=function(){return"Parser at line "+this.tn.line},a.Parser=r,a}(s,s.Lang),s.Reflect=function(t){function i(e,n){if(e&&"number"==typeof e.low&&"number"==typeof e.high&&"boolean"==typeof e.unsigned&&e.low==e.low&&e.high==e.high)return new t.Long(e.low,e.high,void 0===n?e.unsigned:n);if("string"==typeof e)return t.Long.fromString(e,n||!1,10);if("number"==typeof e)return t.Long.fromNumber(e,n||!1);throw Error("not convertible to Long")}function s(e,n){var i=n.readVarint32(),r=7&i,o=i>>>3;switch(r){case t.WIRE_TYPES.VARINT:do{i=n.readUint8()}while(128==(128&i));break;case t.WIRE_TYPES.BITS64:n.offset+=8;break;case t.WIRE_TYPES.LDELIM:i=n.readVarint32(),n.offset+=i;break;case t.WIRE_TYPES.STARTGROUP:s(o,n);break;case t.WIRE_TYPES.ENDGROUP:if(o===e)return!1;throw Error("Illegal GROUPEND after unknown group: "+o+" ("+e+" expected)");case t.WIRE_TYPES.BITS32:n.offset+=4;break;default:throw Error("Illegal wire type in unknown group "+e+": "+r)}return!0}var r,o,a,h,l,u,c,f,d,g,p,E,_,m,y,T,R={},C=function(e,t,n){this.builder=e,this.parent=t,this.name=n,this.className},I=C.prototype;return I.fqn=function(){for(var e=this.name,t=this;null!=(t=t.parent);)e=t.name+"."+e;return e},I.toString=function(e){return(e?this.className+" ":"")+this.fqn()},I.build=function(){throw Error(this.toString(!0)+" cannot be built directly")},R.T=C,(o=(r=function(e,t,n,i,s){C.call(this,e,t,n),this.className="Namespace",this.children=[],this.options=i||{},this.syntax=s||"proto2"}).prototype=Object.create(C.prototype)).getChildren=function(e){var t,n,i;if(null==(e=e||null))return this.children.slice();for(t=[],n=0,i=this.children.length;i>n;++n)this.children[n]instanceof e&&t.push(this.children[n]);return t},o.addChild=function(e){var t;if(t=this.getChild(e.name))if(t instanceof l.Field&&t.name!==t.originalName&&null===this.getChild(t.originalName))t.name=t.originalName;else{if(!(e instanceof l.Field&&e.name!==e.originalName&&null===this.getChild(e.originalName)))throw Error("Duplicate name in namespace "+this.toString(!0)+": "+e.name);e.name=e.originalName}this.children.push(e)},o.getChild=function(e){var t,n,i="number"==typeof e?"id":"name";for(t=0,n=this.children.length;n>t;++t)if(this.children[t][i]===e)return this.children[t];return null},o.resolve=function(e,t){var n,i="string"==typeof e?e.split("."):e,s=this,r=0;if(""===i[r]){for(;null!==s.parent;)s=s.parent;r++}do{do{if(!(s instanceof R.Namespace)){s=null;break}if(!((n=s.getChild(i[r]))&&n instanceof R.T&&(!t||n instanceof R.Namespace))){s=null;break}s=n,r++}while(r<i.length);if(null!=s)break;if(null!==this.parent)return this.parent.resolve(e,t)}while(null!=s);return s},o.qn=function(e){var t,n,i=[],s=e;do{i.unshift(s.name),s=s.parent}while(null!==s);for(t=1;t<=i.length;t++)if(n=i.slice(i.length-t),e===this.resolve(n,e instanceof R.Namespace))return n.join(".");return e.fqn()},o.build=function(){var e,t,n,i={},s=this.children;for(t=0,n=s.length;n>t;++t)(e=s[t])instanceof r&&(i[e.name]=e.build());return Object.defineProperty&&Object.defineProperty(i,"$options",{value:this.buildOpt()}),i},o.buildOpt=function(){var e,t,n,i,s={},r=Object.keys(this.options);for(e=0,t=r.length;t>e;++e)n=r[e],i=this.options[r[e]],s[n]=i;return s},o.getOption=function(e){return void 0===e?this.options:void 0!==this.options[e]?this.options[e]:null},R.Namespace=r,h=(a=function(e,n,i,s){if(this.type=e,this.resolvedType=n,this.isMapKey=i,this.syntax=s,i&&t.MAP_KEY_TYPES.indexOf(e)<0)throw Error("Invalid map key type: "+e.name)}).prototype,a.defaultFieldValue=function(e){if("string"==typeof e&&(e=t.TYPES[e]),void 0===e.defaultValue)throw Error("default value for type "+e.name+" is not supported");return e==t.TYPES.bytes?new n(0):e.defaultValue},h.verifyValue=function(n){var s,r,o,a=function(e,t){throw Error("Illegal value for "+this.toString(!0)+" of type "+this.type.name+": "+e+" ("+t+")")}.bind(this);switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:return("number"!=typeof n||n==n&&n%1!=0)&&a(typeof n,"not an integer"),n>4294967295?0|n:n;case t.TYPES.uint32:case t.TYPES.fixed32:return("number"!=typeof n||n==n&&n%1!=0)&&a(typeof n,"not an integer"),n<0?n>>>0:n;case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:if(t.Long)try{return i(n,!1)}catch(e){a(typeof n,e.message)}else a(typeof n,"requires Long.js");case t.TYPES.uint64:case t.TYPES.fixed64:if(t.Long)try{return i(n,!0)}catch(e){a(typeof n,e.message)}else a(typeof n,"requires Long.js");case t.TYPES.bool:return"boolean"!=typeof n&&a(typeof n,"not a boolean"),n;case t.TYPES.float:case t.TYPES.double:return"number"!=typeof n&&a(typeof n,"not a number"),n;case t.TYPES.string:return"string"==typeof n||n&&n instanceof String||a(typeof n,"not a string"),""+n;case t.TYPES.bytes:return e.isByteBuffer(n)?n:e.wrap(n);case t.TYPES.enum:for(s=this.resolvedType.getChildren(t.Reflect.Enum.Value),o=0;o<s.length;o++){if(s[o].name==n)return s[o].id;if(s[o].id==n)return s[o].id}if("proto3"===this.syntax)return("number"!=typeof n||n==n&&n%1!=0)&&a(typeof n,"not an integer"),(n>4294967295||n<0)&&a(typeof n,"not in range for uint32"),n;a(n,"not a valid enum value");case t.TYPES.group:case t.TYPES.message:if(n&&"object"==typeof n||a(typeof n,"object expected"),n instanceof this.resolvedType.clazz)return n;if(n instanceof t.Builder.Message){for(o in r={},n)n.hasOwnProperty(o)&&(r[o]=n[o]);n=r}return new this.resolvedType.clazz(n)}throw Error("[INTERNAL] Illegal value for "+this.toString(!0)+": "+n+" (undefined type "+this.type+")")},h.calculateLength=function(e,i){if(null===i)return 0;var s;switch(this.type){case t.TYPES.int32:return i<0?n.calculateVarint64(i):n.calculateVarint32(i);case t.TYPES.uint32:return n.calculateVarint32(i);case t.TYPES.sint32:return n.calculateVarint32(n.zigZagEncode32(i));case t.TYPES.fixed32:case t.TYPES.sfixed32:case t.TYPES.float:return 4;case t.TYPES.int64:case t.TYPES.uint64:return n.calculateVarint64(i);case t.TYPES.sint64:return n.calculateVarint64(n.zigZagEncode64(i));case t.TYPES.fixed64:case t.TYPES.sfixed64:return 8;case t.TYPES.bool:return 1;case t.TYPES.enum:return n.calculateVarint32(i);case t.TYPES.double:return 8;case t.TYPES.string:return s=n.calculateUTF8Bytes(i),n.calculateVarint32(s)+s;case t.TYPES.bytes:if(i.remaining()<0)throw Error("Illegal value for "+this.toString(!0)+": "+i.remaining()+" bytes remaining");return n.calculateVarint32(i.remaining())+i.remaining();case t.TYPES.message:return s=this.resolvedType.calculate(i),n.calculateVarint32(s)+s;case t.TYPES.group:return(s=this.resolvedType.calculate(i))+n.calculateVarint32(e<<3|t.WIRE_TYPES.ENDGROUP)}throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+i+" (unknown type)")},h.encodeValue=function(e,i,s){var r,o;if(null===i)return s;switch(this.type){case t.TYPES.int32:i<0?s.writeVarint64(i):s.writeVarint32(i);break;case t.TYPES.uint32:s.writeVarint32(i);break;case t.TYPES.sint32:s.writeVarint32ZigZag(i);break;case t.TYPES.fixed32:s.writeUint32(i);break;case t.TYPES.sfixed32:s.writeInt32(i);break;case t.TYPES.int64:case t.TYPES.uint64:s.writeVarint64(i);break;case t.TYPES.sint64:s.writeVarint64ZigZag(i);break;case t.TYPES.fixed64:s.writeUint64(i);break;case t.TYPES.sfixed64:s.writeInt64(i);break;case t.TYPES.bool:"string"==typeof i?s.writeVarint32("false"===i.toLowerCase()?0:!!i):s.writeVarint32(i?1:0);break;case t.TYPES.enum:s.writeVarint32(i);break;case t.TYPES.float:s.writeFloat32(i);break;case t.TYPES.double:s.writeFloat64(i);break;case t.TYPES.string:s.writeVString(i);break;case t.TYPES.bytes:if(i.remaining()<0)throw Error("Illegal value for "+this.toString(!0)+": "+i.remaining()+" bytes remaining");r=i.offset,s.writeVarint32(i.remaining()),s.append(i),i.offset=r;break;case t.TYPES.message:o=(new n).LE(),this.resolvedType.encode(i,o),s.writeVarint32(o.offset),s.append(o.flip());break;case t.TYPES.group:this.resolvedType.encode(i,s),s.writeVarint32(e<<3|t.WIRE_TYPES.ENDGROUP);break;default:throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+i+" (unknown type)")}return s},h.decode=function(e,n,i){if(n!=this.type.wireType)throw Error("Unexpected wire type for element");var s,r;switch(this.type){case t.TYPES.int32:return 0|e.readVarint32();case t.TYPES.uint32:return e.readVarint32()>>>0;case t.TYPES.sint32:return 0|e.readVarint32ZigZag();case t.TYPES.fixed32:return e.readUint32()>>>0;case t.TYPES.sfixed32:return 0|e.readInt32();case t.TYPES.int64:return e.readVarint64();case t.TYPES.uint64:return e.readVarint64().toUnsigned();case t.TYPES.sint64:return e.readVarint64ZigZag();case t.TYPES.fixed64:return e.readUint64();case t.TYPES.sfixed64:return e.readInt64();case t.TYPES.bool:return!!e.readVarint32();case t.TYPES.enum:return e.readVarint32();case t.TYPES.float:return e.readFloat();case t.TYPES.double:return e.readDouble();case t.TYPES.string:return e.readVString();case t.TYPES.bytes:if(r=e.readVarint32(),e.remaining()<r)throw Error("Illegal number of bytes for "+this.toString(!0)+": "+r+" required but got only "+e.remaining());return(s=e.clone()).limit=s.offset+r,e.offset+=r,s;case t.TYPES.message:return r=e.readVarint32(),this.resolvedType.decode(e,r);case t.TYPES.group:return this.resolvedType.decode(e,-1,i)}throw Error("[INTERNAL] Illegal decode type")},h.valueFromString=function(e){if(!this.isMapKey)throw Error("valueFromString() called on non-map-key element");switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:case t.TYPES.uint32:case t.TYPES.fixed32:return this.verifyValue(parseInt(e));case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:case t.TYPES.uint64:case t.TYPES.fixed64:return this.verifyValue(e);case t.TYPES.bool:return"true"===e;case t.TYPES.string:return this.verifyValue(e);case t.TYPES.bytes:return n.fromBinary(e)}},h.valueToString=function(e){if(!this.isMapKey)throw Error("valueToString() called on non-map-key element");return this.type===t.TYPES.bytes?e.toString("binary"):e.toString()},R.Element=a,(u=(l=function(e,t,n,i,s,o){r.call(this,e,t,n,i,o),this.className="Message",this.extensions=void 0,this.clazz=null,this.isGroup=!!s,this._fields=null,this._fieldsById=null,this._fieldsByName=null}).prototype=Object.create(r.prototype)).build=function(i){var s,r,o,a;if(this.clazz&&!i)return this.clazz;for(s=function(t,i){function s(e,i,r,o){var a,h,l,u,c,f,d;if(null===e||"object"!=typeof e)return o&&o instanceof t.Reflect.Enum&&null!==(a=t.Reflect.Enum.getName(o.object,e))?a:e;if(n.isByteBuffer(e))return i?e.toBase64():e.toBuffer();if(t.Long.isLong(e))return r?e.toString():t.Long.fromValue(e);if(Array.isArray(e))return h=[],e.forEach((function(e,t){h[t]=s(e,i,r,o)})),h;if(h={},e instanceof t.Map){for(u=(l=e.entries()).next();!u.done;u=l.next())h[e.keyElem.valueToString(u.value[0])]=s(u.value[1],i,r,e.valueElem.resolvedType);return h}for(d in c=e.$type,f=void 0,e)e.hasOwnProperty(d)&&(h[d]=c&&(f=c.getChild(d))?s(e[d],i,r,f.resolvedType):s(e[d],i,r));return h}var r,o,a=i.getChildren(t.Reflect.Message.Field),h=i.getChildren(t.Reflect.Message.OneOf),l=function(e){var s,r,o,u;for(t.Builder.Message.call(this),s=0,r=h.length;r>s;++s)this[h[s].name]=null;for(s=0,r=a.length;r>s;++s)this[(o=a[s]).name]=o.repeated?[]:o.map?new t.Map(o):null,!o.required&&"proto3"!==i.syntax||null===o.defaultValue||(this[o.name]=o.defaultValue);if(arguments.length>0)if(1!==arguments.length||null===e||"object"!=typeof e||!("function"!=typeof e.encode||e instanceof l)||Array.isArray(e)||e instanceof t.Map||n.isByteBuffer(e)||e instanceof ArrayBuffer||t.Long&&e instanceof t.Long)for(s=0,r=arguments.length;r>s;++s)void 0!==(u=arguments[s])&&this.$set(a[s].name,u);else this.$set(e)},u=l.prototype=Object.create(t.Builder.Message.prototype);for(u.add=function(e,n,s){var r=i._fieldsByName[e];if(!s){if(!r)throw Error(this+"#"+e+" is undefined");if(!(r instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+r.toString(!0));if(!r.repeated)throw Error(this+"#"+e+" is not a repeated field");n=r.verifyValue(n,!0)}return null===this[e]&&(this[e]=[]),this[e].push(n),this},u.$add=u.add,u.set=function(e,n,s){var r,o,a;if(e&&"object"==typeof e){for(r in s=n,e)e.hasOwnProperty(r)&&void 0!==(n=e[r])&&this.$set(r,n,s);return this}if(o=i._fieldsByName[e],s)this[e]=n;else{if(!o)throw Error(this+"#"+e+" is not a field: undefined");if(!(o instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+o.toString(!0));this[o.name]=n=o.verifyValue(n)}return o&&o.oneof&&(a=this[o.oneof.name],null!==n?(null!==a&&a!==o.name&&(this[a]=null),this[o.oneof.name]=o.name):a===e&&(this[o.oneof.name]=null)),this},u.$set=u.set,u.get=function(e,n){if(n)return this[e];var s=i._fieldsByName[e];if(!(s&&s instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: undefined");if(!(s instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+s.toString(!0));return this[s.name]},u.$get=u.get,r=0;r<a.length;r++)(o=a[r])instanceof t.Reflect.Message.ExtensionField||i.builder.options.populateAccessors&&function(e){var t,n,s,r=e.originalName.replace(/(_[a-zA-Z])/g,(function(e){return e.toUpperCase().replace("_","")}));r=r.substring(0,1).toUpperCase()+r.substring(1),t=e.originalName.replace(/([A-Z])/g,(function(e){return"_"+e})),n=function(t,n){return this[e.name]=n?t:e.verifyValue(t),this},s=function(){return this[e.name]},null===i.getChild("set"+r)&&(u["set"+r]=n),null===i.getChild("set_"+t)&&(u["set_"+t]=n),null===i.getChild("get"+r)&&(u["get"+r]=s),null===i.getChild("get_"+t)&&(u["get_"+t]=s)}(o);return u.encode=function(t,n){var s,r;"boolean"==typeof t&&(n=t,t=void 0),s=!1,t||(t=new e,s=!0),r=t.littleEndian;try{return i.encode(this,t.LE(),n),(s?t.flip():t).LE(r)}catch(e){throw t.LE(r),e}},l.encode=function(e,t,n){return new l(e).encode(t,n)},u.calculate=function(){return i.calculate(this)},u.encodeDelimited=function(e){var t,s=!1;return e||(e=new n,s=!0),t=(new n).LE(),i.encode(this,t).flip(),e.writeVarint32(t.remaining()),e.append(t),s?e.flip():e},u.encodeAB=function(){try{return this.encode().toArrayBuffer()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toArrayBuffer()),e}},u.toArrayBuffer=u.encodeAB,u.encodeNB=function(){try{return this.encode().toBuffer()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toBuffer()),e}},u.toBuffer=u.encodeNB,u.encode64=function(){try{return this.encode().toBase64()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toBase64()),e}},u.toBase64=u.encode64,u.encodeHex=function(){try{return this.encode().toHex()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toHex()),e}},u.toHex=u.encodeHex,u.toRaw=function(e,t){return s(this,!!e,!!t,this.$type)},u.encodeJSON=function(){return JSON.stringify(s(this,!0,!0,this.$type))},l.decode=function(e,t){var s,r;"string"==typeof e&&(e=n.wrap(e,t||"base64")),s=(e=n.isByteBuffer(e)?e:n.wrap(e)).littleEndian;try{return r=i.decode(e.LE()),e.LE(s),r}catch(t){throw e.LE(s),t}},l.decodeDelimited=function(e,t){var s,r,o;if("string"==typeof e&&(e=n.wrap(e,t||"base64")),(e=n.isByteBuffer(e)?e:n.wrap(e)).remaining()<1)return null;if(s=e.offset,r=e.readVarint32(),e.remaining()<r)return e.offset=s,null;try{return o=i.decode(e.slice(e.offset,e.offset+r).LE()),e.offset+=r,o}catch(t){throw e.offset+=r,t}},l.decode64=function(e){return l.decode(e,"base64")},l.decodeHex=function(e){return l.decode(e,"hex")},l.decodeJSON=function(e){return new l(JSON.parse(e))},u.toString=function(){return i.toString()},Object.defineProperty&&(Object.defineProperty(l,"$options",{value:i.buildOpt()}),Object.defineProperty(u,"$options",{value:l.$options}),Object.defineProperty(l,"$type",{value:i}),Object.defineProperty(u,"$type",{value:i})),l}(t,this),this._fields=[],this._fieldsById={},this._fieldsByName={},o=0,a=this.children.length;a>o;o++)if((r=this.children[o])instanceof p||r instanceof l||r instanceof m){if(s.hasOwnProperty(r.name))throw Error("Illegal reflect child of "+this.toString(!0)+": "+r.toString(!0)+" cannot override static property '"+r.name+"'");s[r.name]=r.build()}else if(r instanceof l.Field)r.build(),this._fields.push(r),this._fieldsById[r.id]=r,this._fieldsByName[r.name]=r;else if(!(r instanceof l.OneOf||r instanceof _))throw Error("Illegal reflect child of "+this.toString(!0)+": "+this.children[o].toString(!0));return this.clazz=s},u.encode=function(e,t,n){var i,s,r,o,a,h=null;for(r=0,o=this._fields.length;o>r;++r)s=e[(i=this._fields[r]).name],i.required&&null===s?null===h&&(h=i):i.encode(n?s:i.verifyValue(s),t,e);if(null!==h)throw(a=Error("Missing at least one required field for "+this.toString(!0)+": "+h)).encoded=t,a;return t},u.calculate=function(e){for(var t,n,i=0,s=0,r=this._fields.length;r>s;++s){if(n=e[(t=this._fields[s]).name],t.required&&null===n)throw Error("Missing at least one required field for "+this.toString(!0)+": "+t);i+=t.calculate(n,e)}return i},u.decode=function(e,n,i){var r,o,a,h,l,u,c,f,d,g,p,E;for(n="number"==typeof n?n:-1,l=e.offset,u=new this.clazz;e.offset<l+n||-1===n&&e.remaining()>0;){if(a=(r=e.readVarint32())>>>3,(o=7&r)===t.WIRE_TYPES.ENDGROUP){if(a!==i)throw Error("Illegal group end indicator for "+this.toString(!0)+": "+a+" ("+(i?i+" expected":"not a group")+")");break}if(h=this._fieldsById[a])h.repeated&&!h.options.packed?u[h.name].push(h.decode(o,e)):h.map?(f=h.decode(o,e),u[h.name].set(f[0],f[1])):(u[h.name]=h.decode(o,e),h.oneof&&(null!==(d=u[h.oneof.name])&&d!==h.name&&(u[d]=null),u[h.oneof.name]=h.name));else switch(o){case t.WIRE_TYPES.VARINT:e.readVarint32();break;case t.WIRE_TYPES.BITS32:e.offset+=4;break;case t.WIRE_TYPES.BITS64:e.offset+=8;break;case t.WIRE_TYPES.LDELIM:c=e.readVarint32(),e.offset+=c;break;case t.WIRE_TYPES.STARTGROUP:for(;s(a,e););break;default:throw Error("Illegal wire type for unknown field "+a+" in "+this.toString(!0)+"#decode: "+o)}}for(g=0,p=this._fields.length;p>g;++g)if(null===u[(h=this._fields[g]).name])if("proto3"===this.syntax)u[h.name]=h.defaultValue;else{if(h.required)throw(E=Error("Missing at least one required field for "+this.toString(!0)+": "+h.name)).decoded=u,E;t.populateDefaults&&null!==h.defaultValue&&(u[h.name]=h.defaultValue)}return u},R.Message=l,(f=(c=function(e,n,i,s,r,o,a,h,u,c){C.call(this,e,n,o),this.className="Message.Field",this.required="required"===i,this.repeated="repeated"===i,this.map="map"===i,this.keyType=s||null,this.type=r,this.resolvedType=null,this.id=a,this.options=h||{},this.defaultValue=null,this.oneof=u||null,this.syntax=c||"proto2",this.originalName=this.name,this.element=null,this.keyElement=null,!this.builder.options.convertFieldsToCamelCase||this instanceof l.ExtensionField||(this.name=t.Util.toCamelCase(this.name))}).prototype=Object.create(C.prototype)).build=function(){this.element=new a(this.type,this.resolvedType,!1,this.syntax),this.map&&(this.keyElement=new a(this.keyType,void 0,!0,this.syntax)),"proto3"!==this.syntax||this.repeated||this.map?void 0!==this.options.default&&(this.defaultValue=this.verifyValue(this.options.default)):this.defaultValue=a.defaultFieldValue(this.type)},f.verifyValue=function(e,n){var i,s,r;if(n=n||!1,i=function(e,t){throw Error("Illegal value for "+this.toString(!0)+" of type "+this.type.name+": "+e+" ("+t+")")}.bind(this),null===e)return this.required&&i(typeof e,"required"),"proto3"===this.syntax&&this.type!==t.TYPES.message&&i(typeof e,"proto3 field without field presence cannot be null"),null;if(this.repeated&&!n){for(Array.isArray(e)||(e=[e]),r=[],s=0;s<e.length;s++)r.push(this.element.verifyValue(e[s]));return r}return this.map&&!n?e instanceof t.Map?e:(e instanceof Object||i(typeof e,"expected ProtoBuf.Map or raw object for map field"),new t.Map(this,e)):(!this.repeated&&Array.isArray(e)&&i(typeof e,"no array expected"),this.element.verifyValue(e))},f.hasWirePresence=function(e,n){if("proto3"!==this.syntax)return null!==e;if(this.oneof&&n[this.oneof.name]===this.name)return!0;switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:case t.TYPES.uint32:case t.TYPES.fixed32:return 0!==e;case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:case t.TYPES.uint64:case t.TYPES.fixed64:return 0!==e.low||0!==e.high;case t.TYPES.bool:return e;case t.TYPES.float:case t.TYPES.double:return 0!==e;case t.TYPES.string:return e.length>0;case t.TYPES.bytes:return e.remaining()>0;case t.TYPES.enum:return 0!==e;case t.TYPES.message:return null!==e;default:return!0}},f.encode=function(e,i,s){var r,o,a,h,l;if(null===this.type||"object"!=typeof this.type)throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type);if(null===e||this.repeated&&0==e.length)return i;try{if(this.repeated)if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){for(i.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),i.ensureCapacity(i.offset+=1),o=i.offset,r=0;r<e.length;r++)this.element.encodeValue(this.id,e[r],i);a=i.offset-o,(h=n.calculateVarint32(a))>1&&(l=i.slice(o,i.offset),o+=h-1,i.offset=o,i.append(l)),i.writeVarint32(a,o-h)}else for(r=0;r<e.length;r++)i.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,e[r],i);else this.map?e.forEach((function(e,s){var r=n.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,s)+n.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,e);i.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),i.writeVarint32(r),i.writeVarint32(8|this.keyType.wireType),this.keyElement.encodeValue(1,s,i),i.writeVarint32(16|this.type.wireType),this.element.encodeValue(2,e,i)}),this):this.hasWirePresence(e,s)&&(i.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,e,i))}catch(t){throw Error("Illegal value for "+this.toString(!0)+": "+e+" ("+t+")")}return i},f.calculate=function(e,i){var s,r,o;if(e=this.verifyValue(e),null===this.type||"object"!=typeof this.type)throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type);if(null===e||this.repeated&&0==e.length)return 0;s=0;try{if(this.repeated)if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){for(s+=n.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),o=0,r=0;r<e.length;r++)o+=this.element.calculateLength(this.id,e[r]);s+=n.calculateVarint32(o),s+=o}else for(r=0;r<e.length;r++)s+=n.calculateVarint32(this.id<<3|this.type.wireType),s+=this.element.calculateLength(this.id,e[r]);else this.map?e.forEach((function(e,i){var r=n.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,i)+n.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,e);s+=n.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),s+=n.calculateVarint32(r),s+=r}),this):this.hasWirePresence(e,i)&&(s+=n.calculateVarint32(this.id<<3|this.type.wireType),s+=this.element.calculateLength(this.id,e))}catch(t){throw Error("Illegal value for "+this.toString(!0)+": "+e+" ("+t+")")}return s},f.decode=function(e,n,i){var s,r,o,h,l,u,c;if(!(!this.map&&e==this.type.wireType||!i&&this.repeated&&this.options.packed&&e==t.WIRE_TYPES.LDELIM||this.map&&e==t.WIRE_TYPES.LDELIM))throw Error("Illegal wire type for field "+this.toString(!0)+": "+e+" ("+this.type.wireType+" expected)");if(e==t.WIRE_TYPES.LDELIM&&this.repeated&&this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0&&!i){for(r=n.readVarint32(),r=n.offset+r,o=[];n.offset<r;)o.push(this.decode(this.type.wireType,n,!0));return o}if(this.map){if(h=a.defaultFieldValue(this.keyType),s=a.defaultFieldValue(this.type),r=n.readVarint32(),n.remaining()<r)throw Error("Illegal number of bytes for "+this.toString(!0)+": "+r+" required but got only "+n.remaining());for((l=n.clone()).limit=l.offset+r,n.offset+=r;l.remaining()>0;)if(e=7&(u=l.readVarint32()),1==(c=u>>>3))h=this.keyElement.decode(l,e,c);else{if(2!==c)throw Error("Unexpected tag in map field key/value submessage");s=this.element.decode(l,e,c)}return[h,s]}return this.element.decode(n,e,this.id)},R.Message.Field=c,(d=function(e,t,n,i,s,r,o){c.call(this,e,t,n,null,i,s,r,o),this.extension}).prototype=Object.create(c.prototype),R.Message.ExtensionField=d,g=function(e,t,n){C.call(this,e,t,n),this.fields=[]},R.Message.OneOf=g,(p=function(e,t,n,i,s){r.call(this,e,t,n,i,s),this.className="Enum",this.object=null}).getName=function(e,t){var n,i,s=Object.keys(e);for(i=0;i<s.length;++i)if(e[n=s[i]]===t)return n;return null},(p.prototype=Object.create(r.prototype)).build=function(e){var n,i,s,r;if(this.object&&!e)return this.object;for(n=new t.Builder.Enum,s=0,r=(i=this.getChildren(p.Value)).length;r>s;++s)n[i[s].name]=i[s].id;return Object.defineProperty&&Object.defineProperty(n,"$options",{value:this.buildOpt(),enumerable:!1}),this.object=n},R.Enum=p,(E=function(e,t,n,i){C.call(this,e,t,n),this.className="Enum.Value",this.id=i}).prototype=Object.create(C.prototype),R.Enum.Value=E,(_=function(e,t,n,i){C.call(this,e,t,n),this.field=i}).prototype=Object.create(C.prototype),R.Extension=_,((m=function(e,t,n,i){r.call(this,e,t,n,i),this.className="Service",this.clazz=null}).prototype=Object.create(r.prototype)).build=function(e){return this.clazz&&!e?this.clazz:this.clazz=function(e,t){var i,s=function(t){e.Builder.Service.call(this),this.rpcImpl=t||function(e,t,n){setTimeout(n.bind(this,Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")),0)}},r=s.prototype=Object.create(e.Builder.Service.prototype),o=t.getChildren(e.Reflect.Service.RPCMethod);for(i=0;i<o.length;i++)!function(e){r[e.name]=function(i,s){try{try{i=e.resolvedRequestType.clazz.decode(n.wrap(i))}catch(e){if(!(e instanceof TypeError))throw e}if(null===i||"object"!=typeof i)throw Error("Illegal arguments");i instanceof e.resolvedRequestType.clazz||(i=new e.resolvedRequestType.clazz(i)),this.rpcImpl(e.fqn(),i,(function(n,i){if(!n){try{i=e.resolvedResponseType.clazz.decode(i)}catch(e){}return i&&i instanceof e.resolvedResponseType.clazz?void s(null,i):void s(Error("Illegal response type received in service method "+t.name+"#"+e.name))}s(n)}))}catch(e){setTimeout(s.bind(this,e),0)}},s[e.name]=function(t,n,i){new s(t)[e.name](n,i)},Object.defineProperty&&(Object.defineProperty(s[e.name],"$options",{value:e.buildOpt()}),Object.defineProperty(r[e.name],"$options",{value:s[e.name].$options}))}(o[i]);return Object.defineProperty&&(Object.defineProperty(s,"$options",{value:t.buildOpt()}),Object.defineProperty(r,"$options",{value:s.$options}),Object.defineProperty(s,"$type",{value:t}),Object.defineProperty(r,"$type",{value:t})),s}(t,this)},R.Service=m,((y=function(e,t,n,i){C.call(this,e,t,n),this.className="Service.Method",this.options=i||{}}).prototype=Object.create(C.prototype)).buildOpt=o.buildOpt,R.Service.Method=y,(T=function(e,t,n,i,s,r,o,a){y.call(this,e,t,n,a),this.className="Service.RPCMethod",this.requestName=i,this.responseName=s,this.requestStream=r,this.responseStream=o,this.resolvedRequestType=null,this.resolvedResponseType=null}).prototype=Object.create(y.prototype),R.Service.RPCMethod=T,R}(s),s.Builder=function(e,t,n){function i(e){e.messages&&e.messages.forEach((function(t){t.syntax=e.syntax,i(t)})),e.enums&&e.enums.forEach((function(t){t.syntax=e.syntax}))}var s=function(e){this.ns=new n.Namespace(this,null,""),this.ptr=this.ns,this.resolved=!1,this.result=null,this.files={},this.importRoot=null,this.options=e||{}},r=s.prototype;return s.isMessage=function(e){return"string"==typeof e.name&&void 0===e.values&&void 0===e.rpc},s.isMessageField=function(e){return"string"==typeof e.rule&&"string"==typeof e.name&&"string"==typeof e.type&&void 0!==e.id},s.isEnum=function(e){return"string"==typeof e.name&&!(void 0===e.values||!Array.isArray(e.values)||0===e.values.length)},s.isService=function(e){return!("string"!=typeof e.name||"object"!=typeof e.rpc||!e.rpc)},s.isExtend=function(e){return"string"==typeof e.ref},r.reset=function(){return this.ptr=this.ns,this},r.define=function(e){if("string"!=typeof e||!t.TYPEREF.test(e))throw Error("illegal namespace: "+e);return e.split(".").forEach((function(e){var t=this.ptr.getChild(e);null===t&&this.ptr.addChild(t=new n.Namespace(this,this.ptr,e)),this.ptr=t}),this),this},r.create=function(t){var i,r,o,a,h;if(!t)return this;if(Array.isArray(t)){if(0===t.length)return this;t=t.slice()}else t=[t];for(i=[t];i.length>0;){if(t=i.pop(),!Array.isArray(t))throw Error("not a valid namespace: "+JSON.stringify(t));for(;t.length>0;){if(r=t.shift(),s.isMessage(r)){if(o=new n.Message(this,this.ptr,r.name,r.options,r.isGroup,r.syntax),a={},r.oneofs&&Object.keys(r.oneofs).forEach((function(e){o.addChild(a[e]=new n.Message.OneOf(this,o,e))}),this),r.fields&&r.fields.forEach((function(e){if(null!==o.getChild(0|e.id))throw Error("duplicate or invalid field id in "+o.name+": "+e.id);if(e.options&&"object"!=typeof e.options)throw Error("illegal field options in "+o.name+"#"+e.name);var t=null;if("string"==typeof e.oneof&&!(t=a[e.oneof]))throw Error("illegal oneof in "+o.name+"#"+e.name+": "+e.oneof);e=new n.Message.Field(this,o,e.rule,e.keytype,e.type,e.name,e.id,e.options,t,r.syntax),t&&t.fields.push(e),o.addChild(e)}),this),h=[],r.enums&&r.enums.forEach((function(e){h.push(e)})),r.messages&&r.messages.forEach((function(e){h.push(e)})),r.services&&r.services.forEach((function(e){h.push(e)})),r.extensions&&(o.extensions="number"==typeof r.extensions[0]?[r.extensions]:r.extensions),this.ptr.addChild(o),h.length>0){i.push(t),t=h,h=null,this.ptr=o,o=null;continue}h=null}else if(s.isEnum(r))o=new n.Enum(this,this.ptr,r.name,r.options,r.syntax),r.values.forEach((function(e){o.addChild(new n.Enum.Value(this,o,e.name,e.id))}),this),this.ptr.addChild(o);else if(s.isService(r))o=new n.Service(this,this.ptr,r.name,r.options),Object.keys(r.rpc).forEach((function(e){var t=r.rpc[e];o.addChild(new n.Service.RPCMethod(this,o,e,t.request,t.response,!!t.request_stream,!!t.response_stream,t.options))}),this),this.ptr.addChild(o);else{if(!s.isExtend(r))throw Error("not a valid definition: "+JSON.stringify(r));if(o=this.ptr.resolve(r.ref,!0))r.fields.forEach((function(t){var i,s,r,a;if(null!==o.getChild(0|t.id))throw Error("duplicate extended field id in "+o.name+": "+t.id);if(o.extensions&&(i=!1,o.extensions.forEach((function(e){t.id>=e[0]&&t.id<=e[1]&&(i=!0)})),!i))throw Error("illegal extended field id in "+o.name+": "+t.id+" (not within valid ranges)");s=t.name,this.options.convertFieldsToCamelCase&&(s=e.Util.toCamelCase(s)),r=new n.Message.ExtensionField(this,o,t.rule,t.type,this.ptr.fqn()+"."+s,t.id,t.options),a=new n.Extension(this,this.ptr,t.name,r),r.extension=a,this.ptr.addChild(a),o.addChild(r)}),this);else if(!/\.?google\.protobuf\./.test(r.ref))throw Error("extended message "+r.ref+" is not defined")}r=null,o=null}t=null,this.ptr=this.ptr.parent}return this.resolved=!1,this.result=null,this},r.import=function(t,n){var s,r,o,a,h,l,u,c,f="/";if("string"==typeof n){if(e.Util.IS_NODE,!0===this.files[n])return this.reset();this.files[n]=!0}else if("object"==typeof n){if(s=n.root,e.Util.IS_NODE,(s.indexOf("\\")>=0||n.file.indexOf("\\")>=0)&&(f="\\"),r=s+f+n.file,!0===this.files[r])return this.reset();this.files[r]=!0}if(t.imports&&t.imports.length>0){for(a=!1,"object"==typeof n?(this.importRoot=n.root,a=!0,o=this.importRoot,n=n.file,(o.indexOf("\\")>=0||n.indexOf("\\")>=0)&&(f="\\")):"string"==typeof n?this.importRoot?o=this.importRoot:n.indexOf("/")>=0?""===(o=n.replace(/\/[^\/]*$/,""))&&(o="/"):n.indexOf("\\")>=0?(o=n.replace(/\\[^\\]*$/,""),f="\\"):o=".":o=null,h=0;h<t.imports.length;h++)if("string"==typeof t.imports[h]){if(!o)throw Error("cannot determine import root");if("google/protobuf/descriptor.proto"===(l=t.imports[h]))continue;if(l=o+f+l,!0===this.files[l])continue;if(/\.proto$/i.test(l)&&!e.DotProto&&(l=l.replace(/\.proto$/,".json")),null===(u=e.Util.fetch(l)))throw Error("failed to import '"+l+"' in '"+n+"': file not found");/\.json$/i.test(l)?this.import(JSON.parse(u+""),l):this.import(e.DotProto.Parser.parse(u),l)}else n?/\.(\w+)$/.test(n)?this.import(t.imports[h],n.replace(/^(.+)\.(\w+)$/,(function(e,t,n){return t+"_import"+h+"."+n}))):this.import(t.imports[h],n+"_import"+h):this.import(t.imports[h]);a&&(this.importRoot=null)}return t.package&&this.define(t.package),t.syntax&&i(t),c=this.ptr,t.options&&Object.keys(t.options).forEach((function(e){c.options[e]=t.options[e]})),t.messages&&(this.create(t.messages),this.ptr=c),t.enums&&(this.create(t.enums),this.ptr=c),t.services&&(this.create(t.services),this.ptr=c),t.extends&&this.create(t.extends),this.reset()},r.resolveAll=function(){var i;if(null==this.ptr||"object"==typeof this.ptr.type)return this;if(this.ptr instanceof n.Namespace)this.ptr.children.forEach((function(e){this.ptr=e,this.resolveAll()}),this);else if(this.ptr instanceof n.Message.Field){if(t.TYPE.test(this.ptr.type))this.ptr.type=e.TYPES[this.ptr.type];else{if(!t.TYPEREF.test(this.ptr.type))throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);if(!(i=(this.ptr instanceof n.Message.ExtensionField?this.ptr.extension.parent:this.ptr.parent).resolve(this.ptr.type,!0)))throw Error("unresolvable type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);if(this.ptr.resolvedType=i,i instanceof n.Enum){if(this.ptr.type=e.TYPES.enum,"proto3"===this.ptr.syntax&&"proto3"!==i.syntax)throw Error("proto3 message cannot reference proto2 enum")}else{if(!(i instanceof n.Message))throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);this.ptr.type=i.isGroup?e.TYPES.group:e.TYPES.message}}if(this.ptr.map){if(!t.TYPE.test(this.ptr.keyType))throw Error("illegal key type for map field in "+this.ptr.toString(!0)+": "+this.ptr.keyType);this.ptr.keyType=e.TYPES[this.ptr.keyType]}}else if(this.ptr instanceof e.Reflect.Service.Method){if(!(this.ptr instanceof e.Reflect.Service.RPCMethod))throw Error("illegal service type in "+this.ptr.toString(!0));if(!((i=this.ptr.parent.resolve(this.ptr.requestName,!0))&&i instanceof e.Reflect.Message))throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.requestName);if(this.ptr.resolvedRequestType=i,!((i=this.ptr.parent.resolve(this.ptr.responseName,!0))&&i instanceof e.Reflect.Message))throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.responseName);this.ptr.resolvedResponseType=i}else if(!(this.ptr instanceof e.Reflect.Message.OneOf||this.ptr instanceof e.Reflect.Extension||this.ptr instanceof e.Reflect.Enum.Value))throw Error("illegal object in namespace: "+typeof this.ptr+": "+this.ptr);return this.reset()},r.build=function(e){var t,n,i;if(this.reset(),this.resolved||(this.resolveAll(),this.resolved=!0,this.result=null),null===this.result&&(this.result=this.ns.build()),!e)return this.result;for(t="string"==typeof e?e.split("."):e,n=this.result,i=0;i<t.length;i++){if(!n[t[i]]){n=null;break}n=n[t[i]]}return n},r.lookup=function(e,t){return e?this.ns.resolve(e,t):this.ns},r.toString=function(){return"Builder"},s.Message=function(){},s.Enum=function(){},s.Service=function(){},s}(s,s.Lang,s.Reflect),s.Map=function(e,t){function n(e){var t=0;return{next:function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}}var i=function(e,n){var i,s,r,o;if(!e.map)throw Error("field is not a map");if(this.field=e,this.keyElem=new t.Element(e.keyType,null,!0,e.syntax),this.valueElem=new t.Element(e.type,e.resolvedType,!1,e.syntax),this.map={},Object.defineProperty(this,"size",{get:function(){return Object.keys(this.map).length}}),n)for(i=Object.keys(n),s=0;s<i.length;s++)r=this.keyElem.valueFromString(i[s]),o=this.valueElem.verifyValue(n[i[s]]),this.map[this.keyElem.valueToString(r)]={key:r,value:o}},s=i.prototype;return s.clear=function(){this.map={}},s.delete=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e)),n=t in this.map;return delete this.map[t],n},s.entries=function(){var e,t,i=[],s=Object.keys(this.map);for(t=0;t<s.length;t++)i.push([(e=this.map[s[t]]).key,e.value]);return n(i)},s.keys=function(){var e,t=[],i=Object.keys(this.map);for(e=0;e<i.length;e++)t.push(this.map[i[e]].key);return n(t)},s.values=function(){var e,t=[],i=Object.keys(this.map);for(e=0;e<i.length;e++)t.push(this.map[i[e]].value);return n(t)},s.forEach=function(e,t){var n,i,s=Object.keys(this.map);for(i=0;i<s.length;i++)e.call(t,(n=this.map[s[i]]).value,n.key,this)},s.set=function(e,t){var n=this.keyElem.verifyValue(e),i=this.valueElem.verifyValue(t);return this.map[this.keyElem.valueToString(n)]={key:n,value:i},this},s.get=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e));return t in this.map?this.map[t].value:void 0},s.has=function(e){return this.keyElem.valueToString(this.keyElem.verifyValue(e))in this.map},i}(0,s.Reflect),s.loadProto=function(e,t,n){return("string"==typeof t||t&&"string"==typeof t.file&&"string"==typeof t.root)&&(n=t,t=void 0),s.loadJson(s.DotProto.Parser.parse(e),t,n)},s.protoFromString=s.loadProto,s.loadProtoFile=function(e,t,n){if(t&&"object"==typeof t?(n=t,t=null):t&&"function"==typeof t||(t=null),t)return s.Util.fetch("string"==typeof e?e:e.root+"/"+e.file,(function(i){if(null!==i)try{t(null,s.loadProto(i,n,e))}catch(e){t(e)}else t(Error("Failed to fetch file"))}));var i=s.Util.fetch("object"==typeof e?e.root+"/"+e.file:e);return null===i?null:s.loadProto(i,n,e)},s.protoFromFile=s.loadProtoFile,s.newBuilder=function(e){return void 0===(e=e||{}).convertFieldsToCamelCase&&(e.convertFieldsToCamelCase=s.convertFieldsToCamelCase),void 0===e.populateAccessors&&(e.populateAccessors=s.populateAccessors),new s.Builder(e)},s.loadJson=function(e,t,n){return("string"==typeof t||t&&"string"==typeof t.file&&"string"==typeof t.root)&&(n=t,t=null),t&&"object"==typeof t||(t=s.newBuilder()),"string"==typeof e&&(e=JSON.parse(e)),t.import(e,n),t.resolveAll(),t},s.loadJsonFile=function(e,t,n){if(t&&"object"==typeof t?(n=t,t=null):t&&"function"==typeof t||(t=null),t)return s.Util.fetch("string"==typeof e?e:e.root+"/"+e.file,(function(i){if(null!==i)try{t(null,s.loadJson(JSON.parse(i),n,e))}catch(e){t(e)}else t(Error("Failed to fetch file"))}));var i=s.Util.fetch("object"==typeof e?e.root+"/"+e.file:e);return null===i?null:s.loadJson(JSON.parse(i),n,e)},i=ht,s.loadProto(i,void 0,"").build("Modules").probuf}(function(e){function t(e){var t=0;return function(){return t<e.length?e.charCodeAt(t++):null}}function n(){var e=[],t=[];return function(){return 0===arguments.length?t.join("")+a.apply(String,e):(e.length+arguments.length>1024&&(t.push(a.apply(String,e)),e.length=0),void Array.prototype.push.apply(e,arguments))}}function i(e,t,n,i,s){var r,o,a=8*s-i-1,h=(1<<a)-1,l=h>>1,u=-7,c=n?s-1:0,f=n?-1:1,d=e[t+c];for(c+=f,r=d&(1<<-u)-1,d>>=-u,u+=a;u>0;r=256*r+e[t+c],c+=f,u-=8);for(o=r&(1<<-u)-1,r>>=-u,u+=i;u>0;o=256*o+e[t+c],c+=f,u-=8);if(0===r)r=1-l;else{if(r===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,i),r-=l}return(d?-1:1)*o*Math.pow(2,r-i)}function s(e,t,n,i,s,r){var o,a,h,l=8*r-s-1,u=(1<<l)-1,c=u>>1,f=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:r-1,g=i?1:-1,p=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(h=Math.pow(2,-o))<1&&(o--,h*=2),(t+=o+c>=1?f/h:f*Math.pow(2,1-c))*h>=2&&(o++,h/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*h-1)*Math.pow(2,s),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,s),o=0));s>=8;e[n+d]=255&a,d+=g,a/=256,s-=8);for(o=o<<s|a,l+=s;l>0;e[n+d]=255&o,d+=g,o/=256,l-=8);e[n+d-g]|=128*p}var r,o,a,h,l,u=function(e,t,n){if(void 0===e&&(e=u.DEFAULT_CAPACITY),void 0===t&&(t=u.DEFAULT_ENDIAN),void 0===n&&(n=u.DEFAULT_NOASSERT),!n){if((e|=0)<0)throw RangeError("Illegal capacity");t=!!t,n=!!n}this.buffer=0===e?o:new ArrayBuffer(e),this.view=0===e?null:new Uint8Array(this.buffer),this.offset=0,this.markedOffset=-1,this.limit=e,this.littleEndian=t,this.noAssert=n};return u.VERSION="5.0.1",u.LITTLE_ENDIAN=!0,u.BIG_ENDIAN=!1,u.DEFAULT_CAPACITY=16,u.DEFAULT_ENDIAN=u.BIG_ENDIAN,u.DEFAULT_NOASSERT=!1,u.Long=e||null,(r=u.prototype).__isByteBuffer__,Object.defineProperty(r,"__isByteBuffer__",{value:!0,enumerable:!1,configurable:!1}),o=new ArrayBuffer(0),a=String.fromCharCode,u.accessor=function(){return Uint8Array},u.allocate=function(e,t,n){return new u(e,t,n)},u.concat=function(e,t,n,i){var s,r,o,a,h,l;for(("boolean"==typeof t||"string"!=typeof t)&&(i=n,n=t,t=void 0),s=0,o=0,a=e.length;a>o;++o)u.isByteBuffer(e[o])||(e[o]=u.wrap(e[o],t)),(r=e[o].limit-e[o].offset)>0&&(s+=r);if(0===s)return new u(0,n,i);for(l=new u(s,n,i),o=0;a>o;)(r=(h=e[o++]).limit-h.offset)<=0||(l.view.set(h.view.subarray(h.offset,h.limit),l.offset),l.offset+=r);return l.limit=l.offset,l.offset=0,l},u.isByteBuffer=function(e){return!0===(e&&e.__isByteBuffer__)},u.type=function(){return ArrayBuffer},u.wrap=function(e,t,n,i){var s,o;if("string"!=typeof t&&(i=n,n=t,t=void 0),"string"==typeof e)switch(void 0===t&&(t="utf8"),t){case"base64":return u.fromBase64(e,n);case"hex":return u.fromHex(e,n);case"binary":return u.fromBinary(e,n);case"utf8":return u.fromUTF8(e,n);case"debug":return u.fromDebug(e,n);default:throw Error("Unsupported encoding: "+t)}if(null===e||"object"!=typeof e)throw TypeError("Illegal buffer");if(u.isByteBuffer(e))return(s=r.clone.call(e)).markedOffset=-1,s;if(e instanceof Uint8Array)s=new u(0,n,i),e.length>0&&(s.buffer=e.buffer,s.offset=e.byteOffset,s.limit=e.byteOffset+e.byteLength,s.view=new Uint8Array(e.buffer));else if(e instanceof ArrayBuffer)s=new u(0,n,i),e.byteLength>0&&(s.buffer=e,s.offset=0,s.limit=e.byteLength,s.view=e.byteLength>0?new Uint8Array(e):null);else{if("[object Array]"!==Object.prototype.toString.call(e))throw TypeError("Illegal buffer");for((s=new u(e.length,n,i)).limit=e.length,o=0;o<e.length;++o)s.view[o]=e[o]}return s},r.writeBitSet=function(e,t){var n,i,s,r,o,a,h=void 0===t;if(h&&(t=this.offset),!this.noAssert){if(!(e instanceof Array))throw TypeError("Illegal BitSet: Not an array");if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}for(i=t,r=(s=e.length)>>3,o=0,t+=this.writeVarint32(s,t);r--;)n=1&!!e[o++]|(1&!!e[o++])<<1|(1&!!e[o++])<<2|(1&!!e[o++])<<3|(1&!!e[o++])<<4|(1&!!e[o++])<<5|(1&!!e[o++])<<6|(1&!!e[o++])<<7,this.writeByte(n,t++);if(s>o){for(a=0,n=0;s>o;)n|=(1&!!e[o++])<<a++;this.writeByte(n,t++)}return h?(this.offset=t,this):t-i},r.readBitSet=function(e){var t,n,i,s,r,o,a,h=void 0===e;for(h&&(e=this.offset),s=(i=(n=this.readVarint32(e)).value)>>3,r=0,o=[],e+=n.length;s--;)t=this.readByte(e++),o[r++]=!!(1&t),o[r++]=!!(2&t),o[r++]=!!(4&t),o[r++]=!!(8&t),o[r++]=!!(16&t),o[r++]=!!(32&t),o[r++]=!!(64&t),o[r++]=!!(128&t);if(i>r)for(a=0,t=this.readByte(e++);i>r;)o[r++]=!!(1&t>>a++);return h&&(this.offset=e),o},r.readBytes=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+e>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+"+e+") <= "+this.buffer.byteLength)}return n=this.slice(t,t+e),i&&(this.offset+=e),n},r.writeBytes=r.append,r.writeInt8=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=1)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=1,this.view[t]=e,i&&(this.offset+=1),this},r.writeByte=r.writeInt8,r.readInt8=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return 128==(128&(t=this.view[e]))&&(t=-(255-t+1)),n&&(this.offset+=1),t},r.readByte=r.readInt8,r.writeUint8=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=1)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=1,this.view[t]=e,i&&(this.offset+=1),this},r.writeUInt8=r.writeUint8,r.readUint8=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return t=this.view[e],n&&(this.offset+=1),t},r.readUInt8=r.readUint8,r.writeInt16=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=2)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,this.view[t+1]=255&e),i&&(this.offset+=2),this},r.writeShort=r.writeInt16,r.readInt16=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e],t|=this.view[e+1]<<8):(t=this.view[e]<<8,t|=this.view[e+1]),32768==(32768&t)&&(t=-(65535-t+1)),n&&(this.offset+=2),t},r.readShort=r.readInt16,r.writeUint16=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=2)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,this.view[t+1]=255&e),i&&(this.offset+=2),this},r.writeUInt16=r.writeUint16,r.readUint16=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e],t|=this.view[e+1]<<8):(t=this.view[e]<<8,t|=this.view[e+1]),n&&(this.offset+=2),t},r.readUInt16=r.readUint16,r.writeInt32=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=4)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=4,this.littleEndian?(this.view[t+3]=255&e>>>24,this.view[t+2]=255&e>>>16,this.view[t+1]=255&e>>>8,this.view[t]=255&e):(this.view[t]=255&e>>>24,this.view[t+1]=255&e>>>16,this.view[t+2]=255&e>>>8,this.view[t+3]=255&e),i&&(this.offset+=4),this},r.writeInt=r.writeInt32,r.readInt32=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e+2]<<16,t|=this.view[e+1]<<8,t|=this.view[e],t+=this.view[e+3]<<24>>>0):(t=this.view[e+1]<<16,t|=this.view[e+2]<<8,t|=this.view[e+3],t+=this.view[e]<<24>>>0),t|=0,n&&(this.offset+=4),t},r.readInt=r.readInt32,r.writeUint32=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=4)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=4,this.littleEndian?(this.view[t+3]=255&e>>>24,this.view[t+2]=255&e>>>16,this.view[t+1]=255&e>>>8,this.view[t]=255&e):(this.view[t]=255&e>>>24,this.view[t+1]=255&e>>>16,this.view[t+2]=255&e>>>8,this.view[t+3]=255&e),i&&(this.offset+=4),this},r.writeUInt32=r.writeUint32,r.readUint32=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e+2]<<16,t|=this.view[e+1]<<8,t|=this.view[e],t+=this.view[e+3]<<24>>>0):(t=this.view[e+1]<<16,t|=this.view[e+2]<<8,t|=this.view[e+3],t+=this.view[e]<<24>>>0),n&&(this.offset+=4),t},r.readUInt32=r.readUint32,e&&(r.writeInt64=function(t,n){var i,s,r,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("number"==typeof t)t=e.fromNumber(t);else if("string"==typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t)),(n+=8)>(i=this.buffer.byteLength)&&this.resize((i*=2)>n?i:n),n-=8,s=t.low,r=t.high,this.littleEndian?(this.view[n+3]=255&s>>>24,this.view[n+2]=255&s>>>16,this.view[n+1]=255&s>>>8,this.view[n]=255&s,n+=4,this.view[n+3]=255&r>>>24,this.view[n+2]=255&r>>>16,this.view[n+1]=255&r>>>8,this.view[n]=255&r):(this.view[n]=255&r>>>24,this.view[n+1]=255&r>>>16,this.view[n+2]=255&r>>>8,this.view[n+3]=255&r,n+=4,this.view[n]=255&s>>>24,this.view[n+1]=255&s>>>16,this.view[n+2]=255&s>>>8,this.view[n+3]=255&s),o&&(this.offset+=8),this},r.writeLong=r.writeInt64,r.readInt64=function(t){var n,i,s,r=void 0===t;if(r&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}return n=0,i=0,this.littleEndian?(n=this.view[t+2]<<16,n|=this.view[t+1]<<8,n|=this.view[t],n+=this.view[t+3]<<24>>>0,t+=4,i=this.view[t+2]<<16,i|=this.view[t+1]<<8,i|=this.view[t],i+=this.view[t+3]<<24>>>0):(i=this.view[t+1]<<16,i|=this.view[t+2]<<8,i|=this.view[t+3],i+=this.view[t]<<24>>>0,t+=4,n=this.view[t+1]<<16,n|=this.view[t+2]<<8,n|=this.view[t+3],n+=this.view[t]<<24>>>0),s=new e(n,i,!1),r&&(this.offset+=8),s},r.readLong=r.readInt64,r.writeUint64=function(t,n){var i,s,r,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("number"==typeof t)t=e.fromNumber(t);else if("string"==typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t)),(n+=8)>(i=this.buffer.byteLength)&&this.resize((i*=2)>n?i:n),n-=8,s=t.low,r=t.high,this.littleEndian?(this.view[n+3]=255&s>>>24,this.view[n+2]=255&s>>>16,this.view[n+1]=255&s>>>8,this.view[n]=255&s,n+=4,this.view[n+3]=255&r>>>24,this.view[n+2]=255&r>>>16,this.view[n+1]=255&r>>>8,this.view[n]=255&r):(this.view[n]=255&r>>>24,this.view[n+1]=255&r>>>16,this.view[n+2]=255&r>>>8,this.view[n+3]=255&r,n+=4,this.view[n]=255&s>>>24,this.view[n+1]=255&s>>>16,this.view[n+2]=255&s>>>8,this.view[n+3]=255&s),o&&(this.offset+=8),this},r.writeUInt64=r.writeUint64,r.readUint64=function(t){var n,i,s,r=void 0===t;if(r&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}return n=0,i=0,this.littleEndian?(n=this.view[t+2]<<16,n|=this.view[t+1]<<8,n|=this.view[t],n+=this.view[t+3]<<24>>>0,t+=4,i=this.view[t+2]<<16,i|=this.view[t+1]<<8,i|=this.view[t],i+=this.view[t+3]<<24>>>0):(i=this.view[t+1]<<16,i|=this.view[t+2]<<8,i|=this.view[t+3],i+=this.view[t]<<24>>>0,t+=4,n=this.view[t+1]<<16,n|=this.view[t+2]<<8,n|=this.view[t+3],n+=this.view[t]<<24>>>0),s=new e(n,i,!0),r&&(this.offset+=8),s},r.readUInt64=r.readUint64),r.writeFloat32=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e)throw TypeError("Illegal value: "+e+" (not a number)");if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=4)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=4,s(this.view,e,t,this.littleEndian,23,4),i&&(this.offset+=4),this},r.writeFloat=r.writeFloat32,r.readFloat32=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=i(this.view,e,this.littleEndian,23,4),n&&(this.offset+=4),t},r.readFloat=r.readFloat32,r.writeFloat64=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e)throw TypeError("Illegal value: "+e+" (not a number)");if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return(t+=8)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=8,s(this.view,e,t,this.littleEndian,52,8),i&&(this.offset+=8),this},r.writeDouble=r.writeFloat64,r.readFloat64=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+8) <= "+this.buffer.byteLength)}return t=i(this.view,e,this.littleEndian,52,8),n&&(this.offset+=8),t},r.readDouble=r.readFloat64,u.MAX_VARINT32_BYTES=5,u.calculateVarint32=function(e){return(e>>>=0)<128?1:e<16384?2:1<<21>e?3:1<<28>e?4:5},u.zigZagEncode32=function(e){return((e|=0)<<1^e>>31)>>>0},u.zigZagDecode32=function(e){return 0|e>>>1^-(1&e)},r.writeVarint32=function(e,t){var n,i,s,r=void 0===t;if(r&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}for((t+=i=u.calculateVarint32(e))>(s=this.buffer.byteLength)&&this.resize((s*=2)>t?s:t),t-=i,e>>>=0;e>=128;)n=128|127&e,this.view[t++]=n,e>>>=7;return this.view[t++]=e,r?(this.offset=t,this):i},r.writeVarint32ZigZag=function(e,t){return this.writeVarint32(u.zigZagEncode32(e),t)},r.readVarint32=function(e){var t,n,i,s,r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}n=0,i=0;do{if(!this.noAssert&&e>this.limit)throw(s=Error("Truncated")).truncated=!0,s;t=this.view[e++],n<5&&(i|=(127&t)<<7*n),++n}while(0!=(128&t));return i|=0,r?(this.offset=e,i):{value:i,length:n}},r.readVarint32ZigZag=function(e){var t=this.readVarint32(e);return"object"==typeof t?t.value=u.zigZagDecode32(t.value):t=u.zigZagDecode32(t),t},e&&(u.MAX_VARINT64_BYTES=10,u.calculateVarint64=function(t){"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t));var n=t.toInt()>>>0,i=t.shiftRightUnsigned(28).toInt()>>>0,s=t.shiftRightUnsigned(56).toInt()>>>0;return 0==s?0==i?n<16384?n<128?1:2:1<<21>n?3:4:i<16384?i<128?5:6:1<<21>i?7:8:s<128?9:10},u.zigZagEncode64=function(t){return"number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()},u.zigZagDecode64=function(t){return"number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()},r.writeVarint64=function(t,n){var i,s,r,o,a,h=void 0===n;if(h&&(n=this.offset),!this.noAssert){if("number"==typeof t)t=e.fromNumber(t);else if("string"==typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}switch("number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),i=u.calculateVarint64(t),s=t.toInt()>>>0,r=t.shiftRightUnsigned(28).toInt()>>>0,o=t.shiftRightUnsigned(56).toInt()>>>0,(n+=i)>(a=this.buffer.byteLength)&&this.resize((a*=2)>n?a:n),n-=i,i){case 10:this.view[n+9]=1&o>>>7;case 9:this.view[n+8]=9!==i?128|o:127&o;case 8:this.view[n+7]=8!==i?128|r>>>21:127&r>>>21;case 7:this.view[n+6]=7!==i?128|r>>>14:127&r>>>14;case 6:this.view[n+5]=6!==i?128|r>>>7:127&r>>>7;case 5:this.view[n+4]=5!==i?128|r:127&r;case 4:this.view[n+3]=4!==i?128|s>>>21:127&s>>>21;case 3:this.view[n+2]=3!==i?128|s>>>14:127&s>>>14;case 2:this.view[n+1]=2!==i?128|s>>>7:127&s>>>7;case 1:this.view[n]=1!==i?128|s:127&s}return h?(this.offset+=i,this):i},r.writeVarint64ZigZag=function(e,t){return this.writeVarint64(u.zigZagEncode64(e),t)},r.readVarint64=function(t){var n,i,s,r,o,a,h=void 0===t;if(h&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}if(n=t,i=0,s=0,r=0,o=0,i=127&(o=this.view[t++]),128&o&&(i|=(127&(o=this.view[t++]))<<7,(128&o||this.noAssert&&void 0===o)&&(i|=(127&(o=this.view[t++]))<<14,(128&o||this.noAssert&&void 0===o)&&(i|=(127&(o=this.view[t++]))<<21,(128&o||this.noAssert&&void 0===o)&&(s=127&(o=this.view[t++]),(128&o||this.noAssert&&void 0===o)&&(s|=(127&(o=this.view[t++]))<<7,(128&o||this.noAssert&&void 0===o)&&(s|=(127&(o=this.view[t++]))<<14,(128&o||this.noAssert&&void 0===o)&&(s|=(127&(o=this.view[t++]))<<21,(128&o||this.noAssert&&void 0===o)&&(r=127&(o=this.view[t++]),(128&o||this.noAssert&&void 0===o)&&(r|=(127&(o=this.view[t++]))<<7,128&o||this.noAssert&&void 0===o))))))))))throw Error("Buffer overrun");return a=e.fromBits(i|s<<28,s>>>4|r<<24,!1),h?(this.offset=t,a):{value:a,length:t-n}},r.readVarint64ZigZag=function(t){var n=this.readVarint64(t);return n&&n.value instanceof e?n.value=u.zigZagDecode64(n.value):n=u.zigZagDecode64(n),n}),r.writeCString=function(e,n){var i,s,r,o=void 0===n;if(o&&(n=this.offset),s=e.length,!this.noAssert){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");for(i=0;s>i;++i)if(0===e.charCodeAt(i))throw RangeError("Illegal str: Contains NULL-characters");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return s=l.calculateUTF16asUTF8(t(e))[1],n+=s+1,r=this.buffer.byteLength,n>r&&this.resize((r*=2)>n?r:n),n-=s+1,l.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e}.bind(this)),this.view[n++]=0,o?(this.offset=n,this):s},r.readCString=function(e){var t,i,s,r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return t=e,s=-1,l.decodeUTF8toUTF16(function(){if(0===s)return null;if(e>=this.limit)throw RangeError("Illegal range: Truncated data, "+e+" < "+this.limit);return 0===(s=this.view[e++])?null:s}.bind(this),i=n(),!0),r?(this.offset=e,i()):{string:i(),length:e-t}},r.writeIString=function(e,n){var i,s,r,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}if(s=n,i=l.calculateUTF16asUTF8(t(e),this.noAssert)[1],n+=4+i,r=this.buffer.byteLength,n>r&&this.resize((r*=2)>n?r:n),n-=4+i,this.littleEndian?(this.view[n+3]=255&i>>>24,this.view[n+2]=255&i>>>16,this.view[n+1]=255&i>>>8,this.view[n]=255&i):(this.view[n]=255&i>>>24,this.view[n+1]=255&i>>>16,this.view[n+2]=255&i>>>8,this.view[n+3]=255&i),n+=4,l.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e}.bind(this)),n!==s+4+i)throw RangeError("Illegal range: Truncated data, "+n+" == "+(n+4+i));return o?(this.offset=n,this):n-s},r.readIString=function(e){var t,n,i,s=void 0===e;if(s&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=e,n=this.readUint32(e),i=this.readUTF8String(n,u.METRICS_BYTES,e+=4),e+=i.length,s?(this.offset=e,i.string):{string:i.string,length:e-t}},u.METRICS_CHARS="c",u.METRICS_BYTES="b",r.writeUTF8String=function(e,n){var i,s,r,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return s=n,i=l.calculateUTF16asUTF8(t(e))[1],n+=i,r=this.buffer.byteLength,n>r&&this.resize((r*=2)>n?r:n),n-=i,l.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e}.bind(this)),o?(this.offset=n,this):n-s},r.writeString=r.writeUTF8String,u.calculateUTF8Chars=function(e){return l.calculateUTF16asUTF8(t(e))[0]},u.calculateUTF8Bytes=function(e){return l.calculateUTF16asUTF8(t(e))[1]},u.calculateString=u.calculateUTF8Bytes,r.readUTF8String=function(e,t,i){var s,r,o,a,h;if("number"==typeof t&&(i=t,t=void 0),(s=void 0===i)&&(i=this.offset),void 0===t&&(t=u.METRICS_CHARS),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal length: "+e+" (not an integer)");if(e|=0,"number"!=typeof i||i%1!=0)throw TypeError("Illegal offset: "+i+" (not an integer)");if((i>>>=0)<0||i+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+i+" (+0) <= "+this.buffer.byteLength)}if(o=0,a=i,t===u.METRICS_CHARS){if(r=n(),l.decodeUTF8(function(){return e>o&&i<this.limit?this.view[i++]:null}.bind(this),(function(e){++o,l.UTF8toUTF16(e,r)})),o!==e)throw RangeError("Illegal range: Truncated data, "+o+" == "+e);return s?(this.offset=i,r()):{string:r(),length:i-a}}if(t===u.METRICS_BYTES){if(!this.noAssert){if("number"!=typeof i||i%1!=0)throw TypeError("Illegal offset: "+i+" (not an integer)");if((i>>>=0)<0||i+e>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+i+" (+"+e+") <= "+this.buffer.byteLength)}if(h=i+e,l.decodeUTF8toUTF16(function(){return h>i?this.view[i++]:null}.bind(this),r=n(),this.noAssert),i!==h)throw RangeError("Illegal range: Truncated data, "+i+" == "+h);return s?(this.offset=i,r()):{string:r(),length:i-a}}throw TypeError("Unsupported metrics: "+t)},r.readString=r.readUTF8String,r.writeVString=function(e,n){var i,s,r,o,a=void 0===n;if(a&&(n=this.offset),!this.noAssert){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}if(r=n,i=l.calculateUTF16asUTF8(t(e),this.noAssert)[1],s=u.calculateVarint32(i),n+=s+i,o=this.buffer.byteLength,n>o&&this.resize((o*=2)>n?o:n),n-=s+i,n+=this.writeVarint32(i,n),l.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e}.bind(this)),n!==r+i+s)throw RangeError("Illegal range: Truncated data, "+n+" == "+(n+i+s));return a?(this.offset=n,this):n-r},r.readVString=function(e){var t,n,i,s=void 0===e;if(s&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return t=e,n=this.readVarint32(e),i=this.readUTF8String(n.value,u.METRICS_BYTES,e+=n.length),e+=i.length,s?(this.offset=e,i.string):{string:i.string,length:e-t}},r.append=function(e,t,n){var i,s,r;if(("number"==typeof t||"string"!=typeof t)&&(n=t,t=void 0),(i=void 0===n)&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return e instanceof u||(e=u.wrap(e,t)),(s=e.limit-e.offset)<=0||((n+=s)>(r=this.buffer.byteLength)&&this.resize((r*=2)>n?r:n),n-=s,this.view.set(e.view.subarray(e.offset,e.limit),n),e.offset+=s,i&&(this.offset+=s)),this},r.appendTo=function(e,t){return e.append(this,t),this},r.assert=function(e){return this.noAssert=!e,this},r.capacity=function(){return this.buffer.byteLength},r.clear=function(){return this.offset=0,this.limit=this.buffer.byteLength,this.markedOffset=-1,this},r.clone=function(e){var t=new u(0,this.littleEndian,this.noAssert);return e?(t.buffer=new ArrayBuffer(this.buffer.byteLength),t.view=new Uint8Array(t.buffer)):(t.buffer=this.buffer,t.view=this.view),t.offset=this.offset,t.markedOffset=this.markedOffset,t.limit=this.limit,t},r.compact=function(e,t){var n,i,s;if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}return 0===e&&t===this.buffer.byteLength?this:0==(n=t-e)?(this.buffer=o,this.view=null,this.markedOffset>=0&&(this.markedOffset-=e),this.offset=0,this.limit=0,this):(i=new ArrayBuffer(n),(s=new Uint8Array(i)).set(this.view.subarray(e,t)),this.buffer=i,this.view=s,this.markedOffset>=0&&(this.markedOffset-=e),this.offset=0,this.limit=n,this)},r.copy=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}if(e===t)return new u(0,this.littleEndian,this.noAssert);var n=t-e,i=new u(n,this.littleEndian,this.noAssert);return i.offset=0,i.limit=n,i.markedOffset>=0&&(i.markedOffset-=e),this.copyTo(i,0,e,t),i},r.copyTo=function(e,t,n,i){var s,r,o;if(!this.noAssert&&!u.isByteBuffer(e))throw TypeError("Illegal target: Not a ByteBuffer");if(t=(r=void 0===t)?e.offset:0|t,n=(s=void 0===n)?this.offset:0|n,i=void 0===i?this.limit:0|i,t<0||t>e.buffer.byteLength)throw RangeError("Illegal target range: 0 <= "+t+" <= "+e.buffer.byteLength);if(n<0||i>this.buffer.byteLength)throw RangeError("Illegal source range: 0 <= "+n+" <= "+this.buffer.byteLength);return 0==(o=i-n)?e:(e.ensureCapacity(t+o),e.view.set(this.view.subarray(n,i),t),s&&(this.offset+=o),r&&(e.offset+=o),this)},r.ensureCapacity=function(e){var t=this.buffer.byteLength;return e>t?this.resize((t*=2)>e?t:e):this},r.fill=function(e,t,n){var i=void 0===t;if(i&&(t=this.offset),"string"==typeof e&&e.length>0&&(e=e.charCodeAt(0)),void 0===t&&(t=this.offset),void 0===n&&(n=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof n||n%1!=0)throw TypeError("Illegal end: Not an integer");if(n>>>=0,t<0||t>n||n>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+n+" <= "+this.buffer.byteLength)}if(t>=n)return this;for(;n>t;)this.view[t++]=e;return i&&(this.offset=t),this},r.flip=function(){return this.limit=this.offset,this.offset=0,this},r.mark=function(e){if(e=void 0===e?this.offset:e,!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}return this.markedOffset=e,this},r.order=function(e){if(!this.noAssert&&"boolean"!=typeof e)throw TypeError("Illegal littleEndian: Not a boolean");return this.littleEndian=!!e,this},r.LE=function(e){return this.littleEndian=void 0===e||!!e,this},r.BE=function(e){return this.littleEndian=void 0!==e&&!e,this},r.prepend=function(e,t,n){var i,s,r,o,a;if(("number"==typeof t||"string"!=typeof t)&&(n=t,t=void 0),(i=void 0===n)&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return e instanceof u||(e=u.wrap(e,t)),(s=e.limit-e.offset)<=0||((r=s-n)>0?(o=new ArrayBuffer(this.buffer.byteLength+r),(a=new Uint8Array(o)).set(this.view.subarray(n,this.buffer.byteLength),s),this.buffer=o,this.view=a,this.offset+=r,this.markedOffset>=0&&(this.markedOffset+=r),this.limit+=r,n+=r):new Uint8Array(this.buffer),this.view.set(e.view.subarray(e.offset,e.limit),n-s),e.offset=e.limit,i&&(this.offset-=s)),this},r.prependTo=function(e,t){return e.prepend(this,t),this},r.printDebug=function(e){"function"!=typeof e&&(e=console.log.bind(console)),e(this.toString()+"\n-------------------------------------------------------------------\n"+this.toDebug(!0))},r.remaining=function(){return this.limit-this.offset},r.reset=function(){return this.markedOffset>=0?(this.offset=this.markedOffset,this.markedOffset=-1):this.offset=0,this},r.resize=function(e){var t,n;if(!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal capacity: "+e+" (not an integer)");if((e|=0)<0)throw RangeError("Illegal capacity: 0 <= "+e)}return this.buffer.byteLength<e&&(t=new ArrayBuffer(e),(n=new Uint8Array(t)).set(this.view),this.buffer=t,this.view=n),this},r.reverse=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}return e===t||Array.prototype.reverse.call(this.view.subarray(e,t)),this},r.skip=function(e){if(!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal length: "+e+" (not an integer)");e|=0}var t=this.offset+e;if(!this.noAssert&&(t<0||t>this.buffer.byteLength))throw RangeError("Illegal length: 0 <= "+this.offset+" + "+e+" <= "+this.buffer.byteLength);return this.offset=t,this},r.slice=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var n=this.clone();return n.offset=e,n.limit=t,n},r.toBuffer=function(e){var t,n=this.offset,i=this.limit;if(!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: Not an integer");if(n>>>=0,"number"!=typeof i||i%1!=0)throw TypeError("Illegal limit: Not an integer");if(i>>>=0,n<0||n>i||i>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+n+" <= "+i+" <= "+this.buffer.byteLength)}return e||0!==n||i!==this.buffer.byteLength?n===i?o:(t=new ArrayBuffer(i-n),new Uint8Array(t).set(new Uint8Array(this.buffer).subarray(n,i),0),t):this.buffer},r.toArrayBuffer=r.toBuffer,r.toString=function(e,t,n){if(void 0===e)return"ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";switch("number"==typeof e&&(n=t=e="utf8"),e){case"utf8":return this.toUTF8(t,n);case"base64":return this.toBase64(t,n);case"hex":return this.toHex(t,n);case"binary":return this.toBinary(t,n);case"debug":return this.toDebug();case"columns":return this.toColumns();default:throw Error("Unsupported encoding: "+e)}},h=function(){var e,t,n={},i=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],s=[];for(e=0,t=i.length;t>e;++e)s[i[e]]=e;return n.encode=function(e,t){for(var n,s;null!==(n=e());)t(i[63&n>>2]),s=(3&n)<<4,null!==(n=e())?(t(i[63&((s|=15&n>>4)|15&n>>4)]),s=(15&n)<<2,null!==(n=e())?(t(i[63&(s|3&n>>6)]),t(i[63&n])):(t(i[63&s]),t(61))):(t(i[63&s]),t(61),t(61))},n.decode=function(e,t){function n(e){throw Error("Illegal character code: "+e)}for(var i,r,o;null!==(i=e());)if(void 0===(r=s[i])&&n(i),null!==(i=e())&&(void 0===(o=s[i])&&n(i),t(r<<2>>>0|(48&o)>>4),null!==(i=e()))){if(void 0===(r=s[i])){if(61===i)break;n(i)}if(t((15&o)<<4>>>0|(60&r)>>2),null!==(i=e())){if(void 0===(o=s[i])){if(61===i)break;n(i)}t((3&r)<<6>>>0|o)}}},n.test=function(e){return/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)},n}(),r.toBase64=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),t|=0,(e|=0)<0||t>this.capacity||e>t)throw RangeError("begin, end");var i;return h.encode(function(){return t>e?this.view[e++]:null}.bind(this),i=n()),i()},u.fromBase64=function(e,n){if("string"!=typeof e)throw TypeError("str");var i=new u(e.length/4*3,n),s=0;return h.decode(t(e),(function(e){i.view[s++]=e})),i.limit=s,i},u.btoa=function(e){return u.fromBinary(e).toBase64()},u.atob=function(e){return u.fromBase64(e).toBinary()},r.toBinary=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),t|=0,(e|=0)<0||t>this.capacity()||e>t)throw RangeError("begin, end");if(e===t)return"";for(var n=[],i=[];t>e;)n.push(this.view[e++]),n.length>=1024&&(i.push(String.fromCharCode.apply(String,n)),n=[]);return i.join("")+String.fromCharCode.apply(String,n)},u.fromBinary=function(e,t){if("string"!=typeof e)throw TypeError("str");for(var n,i=0,s=e.length,r=new u(s,t);s>i;){if((n=e.charCodeAt(i))>255)throw RangeError("illegal char code: "+n);r.view[i++]=n}return r.limit=s,r},r.toDebug=function(e){for(var t,n=-1,i=this.buffer.byteLength,s="",r="",o="";i>n;){if(-1!==n&&(s+=(t=this.view[n])<16?"0"+t.toString(16).toUpperCase():t.toString(16).toUpperCase(),e&&(r+=t>32&&t<127?String.fromCharCode(t):".")),++n,e&&n>0&&n%16==0&&n!==i){for(;s.length<51;)s+=" ";o+=s+r+"\n",s=r=""}s+=n===this.offset&&n===this.limit?n===this.markedOffset?"!":"|":n===this.offset?n===this.markedOffset?"[":"<":n===this.limit?n===this.markedOffset?"]":">":n===this.markedOffset?"'":e||0!==n&&n!==i?" ":""}if(e&&" "!==s){for(;s.length<51;)s+=" ";o+=s+r+"\n"}return e?o:s},u.fromDebug=function(e,t,n){for(var i,s,r=e.length,o=new u(0|(r+1)/3,t,n),a=0,h=0,l=!1,c=!1,f=!1,d=!1,g=!1;r>a;){switch(i=e.charAt(a++)){case"!":if(!n){if(c||f||d){g=!0;break}c=f=d=!0}o.offset=o.markedOffset=o.limit=h,l=!1;break;case"|":if(!n){if(c||d){g=!0;break}c=d=!0}o.offset=o.limit=h,l=!1;break;case"[":if(!n){if(c||f){g=!0;break}c=f=!0}o.offset=o.markedOffset=h,l=!1;break;case"<":if(!n){if(c){g=!0;break}c=!0}o.offset=h,l=!1;break;case"]":if(!n){if(d||f){g=!0;break}d=f=!0}o.limit=o.markedOffset=h,l=!1;break;case">":if(!n){if(d){g=!0;break}d=!0}o.limit=h,l=!1;break;case"'":if(!n){if(f){g=!0;break}f=!0}o.markedOffset=h,l=!1;break;case" ":l=!1;break;default:if(!n&&l){g=!0;break}if(s=parseInt(i+e.charAt(a++),16),!n&&(isNaN(s)||s<0||s>255))throw TypeError("Illegal str: Not a debug encoded string");o.view[h++]=s,l=!0}if(g)throw TypeError("Illegal str: Invalid symbol at "+a)}if(!n){if(!c||!d)throw TypeError("Illegal str: Missing offset or limit");if(h<o.buffer.byteLength)throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+h+" < "+r)}return o},r.toHex=function(e,t){if(e=void 0===e?this.offset:e,t=void 0===t?this.limit:t,!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}for(var n,i=new Array(t-e);t>e;)(n=this.view[e++])<16?i.push("0",n.toString(16)):i.push(n.toString(16));return i.join("")},u.fromHex=function(e,t,n){var i,s,r,o,a;if(!n){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");if(e.length%2!=0)throw TypeError("Illegal str: Length not a multiple of 2")}for(s=e.length,r=new u(0|s/2,t),o=0,a=0;s>o;o+=2){if(i=parseInt(e.substring(o,o+2),16),!n&&(!isFinite(i)||i<0||i>255))throw TypeError("Illegal str: Contains non-hex characters");r.view[a++]=i}return r.limit=a,r},l=function(){var e={MAX_CODEPOINT:1114111,encodeUTF8:function(e,t){var n=null;for("number"==typeof e&&(n=e,e=function(){return null});null!==n||null!==(n=e());)n<128?t(127&n):n<2048?(t(192|31&n>>6),t(128|63&n)):n<65536?(t(224|15&n>>12),t(128|63&n>>6),t(128|63&n)):(t(240|7&n>>18),t(128|63&n>>12),t(128|63&n>>6),t(128|63&n)),n=null},decodeUTF8:function(e,t){for(var n,i,s,r,o=function(e){e=e.slice(0,e.indexOf(null));var t=Error(e.toString());throw t.name="TruncatedError",t.bytes=e,t};null!==(n=e());)if(0==(128&n))t(n);else if(192==(224&n))null===(i=e())&&o([n,i]),t((31&n)<<6|63&i);else if(224==(240&n))(null===(i=e())||null===(s=e()))&&o([n,i,s]),t((15&n)<<12|(63&i)<<6|63&s);else{if(240!=(248&n))throw RangeError("Illegal starting byte: "+n);(null===(i=e())||null===(s=e())||null===(r=e()))&&o([n,i,s,r]),t((7&n)<<18|(63&i)<<12|(63&s)<<6|63&r)}},UTF16toUTF8:function(e,t){for(var n,i=null;null!==(n=null!==i?i:e());)n>=55296&&n<=57343&&null!==(i=e())&&i>=56320&&i<=57343?(t(1024*(n-55296)+i-56320+65536),i=null):t(n);null!==i&&t(i)},UTF8toUTF16:function(e,t){var n=null;for("number"==typeof e&&(n=e,e=function(){return null});null!==n||null!==(n=e());)n<=65535?t(n):(t(55296+((n-=65536)>>10)),t(n%1024+56320)),n=null},encodeUTF16toUTF8:function(t,n){e.UTF16toUTF8(t,(function(t){e.encodeUTF8(t,n)}))},decodeUTF8toUTF16:function(t,n){e.decodeUTF8(t,(function(t){e.UTF8toUTF16(t,n)}))},calculateCodePoint:function(e){return e<128?1:e<2048?2:e<65536?3:4},calculateUTF8:function(e){for(var t,n=0;null!==(t=e());)n+=t<128?1:t<2048?2:t<65536?3:4;return n},calculateUTF16asUTF8:function(t){var n=0,i=0;return e.UTF16toUTF8(t,(function(e){++n,i+=e<128?1:e<2048?2:e<65536?3:4})),[n,i]}};return e}(),r.toUTF8=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var i;try{l.decodeUTF8toUTF16(function(){return t>e?this.view[e++]:null}.bind(this),i=n())}catch(n){if(e!==t)throw RangeError("Illegal range: Truncated data, "+e+" != "+t)}return i()},u.fromUTF8=function(e,n,i){if(!i&&"string"!=typeof e)throw TypeError("Illegal str: Not a string");var s=new u(l.calculateUTF16asUTF8(t(e),!0)[1],n,i),r=0;return l.encodeUTF16toUTF8(t(e),(function(e){s.view[r++]=e})),s.limit=r,s},u}(lt=function(){function e(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function t(e){return!0===(e&&e.__isLong__)}function n(e,t){var n,i,r;return t?(r=(e>>>=0)>=0&&e<256)&&(i=h[e])?i:(n=s(e,(0|e)<0?-1:0,!0),r&&(h[e]=n),n):(r=(e|=0)>=-128&&e<128)&&(i=a[e])?i:(n=s(e,e<0?-1:0,!1),r&&(a[e]=n),n)}function i(e,t){if(isNaN(e)||!isFinite(e))return t?p:g;if(t){if(e<0)return p;if(e>=c)return T}else{if(-f>=e)return R;if(e+1>=f)return y}return e<0?i(-e,t).neg():s(0|e%u,0|e/u,t)}function s(t,n,i){return new e(t,n,i)}function r(e,t,n){var s,o,a,h,u,c,f;if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return g;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||n>36)throw RangeError("radix");if((s=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===s)return r(e.substring(1),t,n).neg();for(o=i(l(n,8)),a=g,h=0;h<e.length;h+=8)u=Math.min(8,e.length-h),c=parseInt(e.substring(h,h+u),n),u<8?(f=i(l(n,u)),a=a.mul(f).add(i(c))):a=(a=a.mul(o)).add(i(c));return a.unsigned=t,a}function o(t){return t instanceof e?t:"number"==typeof t?i(t):"string"==typeof t?r(t):s(t.low,t.high,t.unsigned)}var a,h,l,u,c,f,d,g,p,E,_,m,y,T,R,C;return e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),e.isLong=t,a={},h={},e.fromInt=n,e.fromNumber=i,e.fromBits=s,l=Math.pow,e.fromString=r,e.fromValue=o,f=(c=(u=4294967296)*u)/2,d=n(16777216),g=n(0),e.ZERO=g,p=n(0,!0),e.UZERO=p,E=n(1),e.ONE=E,_=n(1,!0),e.UONE=_,m=n(-1),e.NEG_ONE=m,y=s(-1,2147483647,!1),e.MAX_VALUE=y,T=s(-1,-1,!0),e.MAX_UNSIGNED_VALUE=T,R=s(0,-2147483648,!1),e.MIN_VALUE=R,(C=e.prototype).toInt=function(){return this.unsigned?this.low>>>0:this.low},C.toNumber=function(){return this.unsigned?(this.high>>>0)*u+(this.low>>>0):this.high*u+(this.low>>>0)},C.toString=function(e){var t,n,s,r,o,a,h,u;if((e=e||10)<2||e>36)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())return this.eq(R)?(t=i(e),s=(n=this.div(t)).mul(t).sub(this),n.toString(e)+s.toInt().toString(e)):"-"+this.neg().toString(e);for(r=i(l(e,6),this.unsigned),o=this,a="";;){if(h=o.div(r),u=(o.sub(h.mul(r)).toInt()>>>0).toString(e),(o=h).isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}},C.getHighBits=function(){return this.high},C.getHighBitsUnsigned=function(){return this.high>>>0},C.getLowBits=function(){return this.low},C.getLowBitsUnsigned=function(){return this.low>>>0},C.getNumBitsAbs=function(){var e,t;if(this.isNegative())return this.eq(R)?64:this.neg().getNumBitsAbs();for(e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},C.isZero=function(){return 0===this.high&&0===this.low},C.isNegative=function(){return!this.unsigned&&this.high<0},C.isPositive=function(){return this.unsigned||this.high>=0},C.isOdd=function(){return 1==(1&this.low)},C.isEven=function(){return 0==(1&this.low)},C.equals=function(e){return t(e)||(e=o(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},C.eq=C.equals,C.notEquals=function(e){return!this.eq(e)},C.neq=C.notEquals,C.lessThan=function(e){return this.comp(e)<0},C.lt=C.lessThan,C.lessThanOrEqual=function(e){return this.comp(e)<=0},C.lte=C.lessThanOrEqual,C.greaterThan=function(e){return this.comp(e)>0},C.gt=C.greaterThan,C.greaterThanOrEqual=function(e){return this.comp(e)>=0},C.gte=C.greaterThanOrEqual,C.compare=function(e){if(t(e)||(e=o(e)),this.eq(e))return 0;var n=this.isNegative(),i=e.isNegative();return n&&!i?-1:!n&&i?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},C.comp=C.compare,C.negate=function(){return!this.unsigned&&this.eq(R)?R:this.not().add(E)},C.neg=C.negate,C.add=function(e){var n,i,r,a,h,l,u,c,f,d,g;return t(e)||(e=o(e)),n=this.high>>>16,i=65535&this.high,r=this.low>>>16,a=65535&this.low,h=e.high>>>16,l=65535&e.high,u=e.low>>>16,c=0,f=0,d=0,g=0,d+=(g+=a+(65535&e.low))>>>16,f+=(d+=r+u)>>>16,c+=(f+=i+l)>>>16,c+=n+h,s((d&=65535)<<16|(g&=65535),(c&=65535)<<16|(f&=65535),this.unsigned)},C.subtract=function(e){return t(e)||(e=o(e)),this.add(e.neg())},C.sub=C.subtract,C.multiply=function(e){var n,r,a,h,l,u,c,f,p,E,_,m;return this.isZero()?g:(t(e)||(e=o(e)),e.isZero()?g:this.eq(R)?e.isOdd()?R:g:e.eq(R)?this.isOdd()?R:g:this.isNegative()?e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg():e.isNegative()?this.mul(e.neg()).neg():this.lt(d)&&e.lt(d)?i(this.toNumber()*e.toNumber(),this.unsigned):(n=this.high>>>16,r=65535&this.high,a=this.low>>>16,h=65535&this.low,l=e.high>>>16,u=65535&e.high,c=e.low>>>16,p=0,E=0,_=0,m=0,_+=(m+=h*(f=65535&e.low))>>>16,E+=(_+=a*f)>>>16,_&=65535,E+=(_+=h*c)>>>16,p+=(E+=r*f)>>>16,E&=65535,p+=(E+=a*c)>>>16,E&=65535,p+=(E+=h*u)>>>16,p+=n*f+r*c+a*u+h*l,s((_&=65535)<<16|(m&=65535),(p&=65535)<<16|(E&=65535),this.unsigned)))},C.mul=C.multiply,C.divide=function(e){var n,s,r,a,h,u,c;if(t(e)||(e=o(e)),e.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?p:g;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return p;if(e.gt(this.shru(1)))return _;r=p}else{if(this.eq(R))return e.eq(E)||e.eq(m)?R:e.eq(R)?E:(n=this.shr(1).div(e).shl(1)).eq(g)?e.isNegative()?E:m:(s=this.sub(e.mul(n)),r=n.add(s.div(e)));if(e.eq(R))return this.unsigned?p:g;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=g}for(s=this;s.gte(e);){for(n=Math.max(1,Math.floor(s.toNumber()/e.toNumber())),h=(a=Math.ceil(Math.log(n)/Math.LN2))<=48?1:l(2,a-48),c=(u=i(n)).mul(e);c.isNegative()||c.gt(s);)c=(u=i(n-=h,this.unsigned)).mul(e);u.isZero()&&(u=E),r=r.add(u),s=s.sub(c)}return r},C.div=C.divide,C.modulo=function(e){return t(e)||(e=o(e)),this.sub(this.div(e).mul(e))},C.mod=C.modulo,C.not=function(){return s(~this.low,~this.high,this.unsigned)},C.and=function(e){return t(e)||(e=o(e)),s(this.low&e.low,this.high&e.high,this.unsigned)},C.or=function(e){return t(e)||(e=o(e)),s(this.low|e.low,this.high|e.high,this.unsigned)},C.xor=function(e){return t(e)||(e=o(e)),s(this.low^e.low,this.high^e.high,this.unsigned)},C.shiftLeft=function(e){return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?s(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):s(0,this.low<<e-32,this.unsigned)},C.shl=C.shiftLeft,C.shiftRight=function(e){return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?s(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):s(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},C.shr=C.shiftRight,C.shiftRightUnsigned=function(e){var n;return t(e)&&(e=e.toInt()),0==(e&=63)?this:(n=this.high,e<32?s(this.low>>>e|n<<32-e,n>>>e,this.unsigned):s(32===e?n:n>>>e-32,0,this.unsigned))},C.shru=C.shiftRightUnsigned,C.toSigned=function(){return this.unsigned?s(this.low,this.high,!1):this},C.toUnsigned=function(){return this.unsigned?this:s(this.low,this.high,!0)},C.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},C.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,255&t>>>8,255&t>>>16,255&t>>>24,255&e,255&e>>>8,255&e>>>16,255&e>>>24]},C.toBytesBE=function(){var e=this.high,t=this.low;return[255&e>>>24,255&e>>>16,255&e>>>8,255&e,255&t>>>24,255&t>>>16,255&t>>>8,255&t]},e}()),lt));var ht,lt,ut;at.getModule=e=>{const t=new at[e];return t.getArrayData=()=>{let e=t.toArrayBuffer();return e=c(e)?[].slice.call(new Int8Array(e)):e,e},t},function(e){e[e.ALL=1]="ALL",e[e.SINGAL=2]="SINGAL"}(ut||(ut={}));var ct,ft=ut;!function(e){e.TextMessage="RC:TxtMsg",e.VOICE="RC:VcMsg",e.HQ_VOICE="RC:HQVCMsg",e.IMAGE="RC:ImgMsg",e.GIF="RC:GIFMsg",e.RICH_CONTENT="RC:ImgTextMsg",e.LOCATION="RC:LBSMsg",e.FILE="RC:FileMsg",e.SIGHT="RC:SightMsg",e.COMBINE="RC:CombineMsg",e.CHRM_KV_NOTIFY="RC:chrmKVNotiMsg",e.LOG_COMMAND="RC:LogCmdMsg",e.EXPANSION_NOTIFY="RC:MsgExMsg",e.REFERENCE="RC:ReferenceMsg",e.RECALL="RC:RcCmd"}(ct||(ct={}));var dt,gt=ct;!function(e){e[e.OPEN=1]="OPEN",e[e.CLOSE=2]="CLOSE"}(dt||(dt={}));var pt=dt;const Et="pgMsgP",_t="chatMsg",mt="pcMsgP",yt={PRIVATE:"ppMsgS",GROUP:"pgMsgS",CHATROOM:"chatMsgS"},Tt="delMsg",Rt="joinChrm",Ct="joinChrmR",It="exitChrm",vt="setKV",St="delKV",wt="qryRelationR",Nt="delRelation",Ot="setSeAtt",bt={PRIVATE:"cleanPMsg",GROUP:"cleanGMsg",CUSTOMER_SERVICE:"cleanCMsg",SYSTEM:"cleanSMsg"},Mt="qryPMsg",At="qryGMsg",Ut="qryCHMsg",Pt="qryCMsg",Lt="qrySMsg",Dt={["ppMsgP"]:o.PRIVATE,[Et]:o.GROUP,[_t]:o.CHATROOM,[mt]:o.CUSTOMER_SERVICE},xt={[o.PRIVATE]:Mt,[o.GROUP]:At,[o.CHATROOM]:Ut,[o.CUSTOMER_SERVICE]:Pt,[o.SYSTEM]:Lt},Vt={[o.PRIVATE]:bt.PRIVATE,[o.GROUP]:bt.GROUP,[o.CUSTOMER_SERVICE]:bt.CUSTOMER_SERVICE,[o.SYSTEM]:bt.SYSTEM},kt="1",Bt="0",Ft=1,Yt=2;var qt;!function(e){e[e.SEND=1]="SEND",e[e.RECEIVE=2]="RECEIVE"}(qt||(qt={}));var Ht=qt;class Gt{constructor(e){this._codec="websocket"===e?at:st,this._connectType=e}decodeByPBName(e,t,n){const i=this;let s=e;const r={[se]:i._formatSyncMessages,[ie]:i._formatReceivedMessage,[ne]:i._formatSentMessage,[ce]:i._formatHistoryMessages,[de]:i._formatConversationList,[Ie]:i._formatChatRoomInfos,[Se]:i._formatRTCUserList,[Pe]:i._formatRTCData,[Ke]:i._formatChatRoomKVList,[ze]:i._formatUserSetting,[Je]:i._formatConversationStatus}[t];try{s=e.length>0&&i._codec[t].decode(e),d(s)&&(s=(e=>{for(const t in e)d(e[t])&&(e[t]=y(e[t]));return e})(s)),p(r)&&(s=r.call(this,s,n))}catch(e){P.error("PB parse error\n",e)}return s}_readBytes(e){const{offset:t,buffer:n,limit:i}=e;if(t)try{const e=c(n)?new Uint8Array(n):n;return X.readUTF(e.subarray(t,i))}catch(e){P.info("readBytes error\n",e)}return e}_formatBytes(e){let t=this._readBytes(e);try{t=JSON.parse(t)}catch(e){P.info("formatBytes error\n",e)}return t||e}_formatSyncMessages(e,t){t=t||{};const n=this,{list:i,syncTime:s,finished:r}=e;return(E(r)||null===r)&&(e.finished=!0),e.syncTime=y(s),e.list=B(i,(e=>n._formatReceivedMessage(e,t))),e}_formatReceivedMessage(e,n){n=n||{};const{currentUserId:i,connectedTime:s}=n,{content:r,fromUserId:a,type:h,groupId:l,status:u,dataTime:c,classname:f,msgId:d,extraContent:g}=e,p=(e.direction||Ht.RECEIVE)===Ht.SEND,{isPersited:E,isCounted:_,isMentioned:m,disableNotification:T,receivedStatus:R,canIncludeExpansion:C}=(e=>{let n=!0,i=!0,s=!1,r=!1,o=t.READ,a=!1,h=!1;return n=!!(16&e),i=!!(32&e),s=!!(64&e),r=!!(256&e),a=!!(2&e),o=a?t.RETRIEVED:o,h=!!(1024&e),{isPersited:n,isCounted:i,isMentioned:s,disableNotification:r,receivedStatus:o,canIncludeExpansion:h}})(u),I=h===o.GROUP||h===o.CHATROOM?l:a,v=p?i:a,S=y(c),w=S<s,N=h===o.CHATROOM,O=this._formatBytes(r);let b,M=p?Ht.SEND:Ht.RECEIVE;return N&&a===i&&(M=Ht.SEND),g&&(b={},b=K(g)),{conversationType:h,targetId:I,senderUserId:v,messageType:f,messageUId:d,isPersited:E,isCounted:_,isMentioned:m,sentTime:S,isOffLineMessage:w,messageDirection:M,receivedTime:j.getTime(),disableNotification:T,receivedStatus:R,canIncludeExpansion:C,content:O,expansion:b}}_formatSentMessage(e,t){const{content:n,classname:i,sessionId:s,msgId:r,extraContent:a}=e,{signal:h,currentUserId:l}=t,{date:u,topic:c,targetId:f}=h,{isPersited:d,isCounted:g,disableNotification:p,canIncludeExpansion:E}=(e=>{let t=!1,n=!1,i=!1,s=!1;return t=!!(1&e),n=!!(2&e),i=!!(16&e),s=!!(64&e),{isPersited:t,isCounted:n,disableNotification:i,canIncludeExpansion:s}})(s),_=Dt[c]||o.PRIVATE,m=Y(yt,c);let y;return a&&(y={},y=K(a)),{conversationType:_,targetId:f,messageType:i,messageUId:r,isPersited:d,isCounted:g,isStatusMessage:m,senderUserId:l,content:this._formatBytes(n),sentTime:1e3*u,receivedTime:j.getTime(),messageDirection:Ht.SEND,isOffLineMessage:!1,disableNotification:p,canIncludeExpansion:E,expansion:y}}_formatHistoryMessages(e,t){const n=t.conversation||{},{list:i,hasMsg:s}=e,r=n.targetId,o=y(e.syncTime),a=[];return k(i,(e=>{const n=this._formatReceivedMessage(e,t);n.targetId=r,a.push(n)}),{isReverse:!0}),{syncTime:o,list:a,hasMore:!!s}}_formatConversationList(e,t){const n=this;let{info:i}=e;const s=t.afterDecode||function(){};return i=B(i,(e=>{const{msg:i,userId:r,type:o,unreadCount:a}=e,h=n._formatReceivedMessage(i,t);h.targetId=r;const l={targetId:r,conversationType:o,unreadMessageCount:a,latestMessage:h};return s(l)||l})),i||[]}_formatChatRoomInfos(e){const{userTotalNums:t,userInfos:n}=e;return{userCount:t,userInfos:B(n,(e=>{const{id:t,time:n}=e;return{id:t,time:y(n)}}))}}_formatChatRoomKVList(e){let{entries:t,bFullUpdate:n,syncTime:i}=e;return t=t||[],t=B(t,(e=>{const{key:t,value:n,status:i,timestamp:s,uid:r}=e,{isAutoDelete:o,isOverwrite:a,type:h}=(e=>({isAutoDelete:!!(1&e),isOverwrite:!!(2&e),type:4&e?G.DELETE:G.UPDATE}))(i);return{key:t,value:n,isAutoDelete:o,isOverwrite:a,type:h,userId:r,timestamp:y(s)}})),{kvEntries:t,isFullUpdate:n,syncTime:i}}_formatUserSetting(e){const{items:t,version:n}=e,i={};return k(t||[],(e=>{const{key:t,version:n,value:s}=e;e.version=y(n),e.value=this._readBytes(s),i[t]=e})),{settings:i,version:n}}_formatConversationStatus(e){const{state:t}=e,n=[];return k(t,(e=>{const{type:t,channelId:i,time:s,stateItem:r}=e;let o=pt.CLOSE,a=!1;k(r,(e=>{const{sessionStateType:t,value:n}=e;switch(t){case Ft:o=n===kt?pt.OPEN:pt.CLOSE;break;case Yt:a=n===kt}})),n.push({type:t,targetId:i,notificationStatus:o,isTop:a,updatedTime:y(s)})})),n}_formatRTCUserList(e){const{list:t,token:n,sessionId:i}=e,s={};return k(t,(e=>{const{userId:t,userData:n}=e,i={};k(n,(e=>{const{key:t,value:n}=e;i[t]=n})),s[t]=i})),{users:s,token:n,sessionId:i}}_formatRTCData(e){const{outInfo:t}=e,n={};return k(t,(e=>{n[e.key]=e.value})),n}_formatRTCRoomInfo(e){const{roomId:t,userCount:n,roomData:i}=e,s={id:t,total:n};return k(i,(e=>{s[e.key]=e.value})),s}encodeServerConfParams(){const e=this._codec.getModule(re);return e.setNothing(1),e.getArrayData()}_getUpMsgModule(e,t){const{type:n}=e,{messageType:i,isMentioned:s,mentionedType:r,mentionedUserIdList:a,content:h,pushContent:l,pushData:u,directionalUserIdList:c,isFilerWhiteBlacklist:f,isVoipPush:d,canIncludeExpansion:g,expansion:p}=t,E=n===o.GROUP,_=this._codec.getModule(ne),m=(e=>{const{isStatusMessage:t}=e;let{isPersited:n,isCounted:i,isMentioned:s,disableNotification:r,canIncludeExpansion:o}=e;t&&(n=i=!1);let a=0;return n&&(a|=1),i&&(a|=2),s&&(a|=4),r&&(a|=32),o&&(a|=64),a})(t);let y=0;if(_.setSessionId(m),E&&s&&h&&(h.mentionedInfo={userIdList:a,type:r||ft.ALL}),l&&_.setPushText(l),u&&_.setAppData(u),c&&_.setUserId(c),y|=d?1:0,y|=f?2:0,_.setConfigFlag(y),_.setClassname(i),_.setContent(JSON.stringify(h)),g&&p){const e={};k(p,((t,n)=>{e[n]={v:t}})),_.setExtraContent(JSON.stringify(e))}return _}encodeUpMsg(e,t){return this._getUpMsgModule(e,t).getArrayData()}encodeSyncMsg(e){const{sendboxTime:t,inboxTime:n}=e,i=this._codec.getModule(ae);return i.setIspolling(!1),i.setIsPullSend(!0),i.setSendBoxSyncTime(t),i.setSyncTime(n),i.getArrayData()}encodeChrmSyncMsg(e,t){e=e||0,t=t||0;const n=this._codec.getModule(he);return n.setCount(t),n.setSyncTime(e),n.getArrayData()}encodeGetHistoryMsg(e,t){const{count:n,order:i,timestamp:s}=t,r=this._codec.getModule(ue);return r.setTargetId(e),r.setTime(s),r.setCount(n),r.setOrder(i),r.getArrayData()}encodeGetConversationList(e){e=e||{};const{count:t,startTime:n}=e,i=this._codec.getModule(fe);return i.setType(1),i.setCount(t),i.setStartTime(n),i.getArrayData()}encodeOldConversationList(e){e=e||{};let{count:t,type:n,startTime:i,order:s}=e;t=t||0,i=i||0,s=s||0;const r=this._codec.getModule(fe);return r.setType(n),r.setCount(t),r.setStartTime(i),r.setOrder(s),r.getArrayData()}encodeRemoveConversationList(e){const t=this._codec.getModule(ge),n=[];return k(e,(e=>{const{type:t,targetId:i}=e,s=this._codec.getModule(pe);s.setType(t),s.setChannelId(i),n.push(s)})),t.setSessions(n),t.getArrayData()}encodeDeleteMessages(e,t,n){const i=this._codec.getModule(me),s=[];return k(n,(e=>{s.push({msgId:e.messageUId,msgDataTime:e.sentTime,direct:e.messageDirection})})),i.setType(e),i.setConversationId(t),i.setMsgs(s),i.getArrayData()}encodeClearMessages(e,t){const n=this._codec.getModule(ye);return t=t||(new Date).getTime(),n.setDataTime(t),n.setTargetId(e),n.getArrayData()}encodeClearUnreadCount(e,t){const{type:n,targetId:i}=e;let{timestamp:s}=t;const r=this._codec.getModule(Te);return s=s||+new Date,r.setType(n),r.setChannelId(i),r.setMsgTime(s),r.getArrayData()}encodeJoinOrQuitChatRoom(){const e=this._codec.getModule(Re);return e.setNothing(1),e.getArrayData()}encodeGetChatRoomInfo(e,t){const n=this._codec.getModule(Ce);return n.setCount(e),n.setOrder(t),n.getArrayData()}encodeGetFileToken(e,t){const n=this._codec.getModule(Fe);return n.setType(e),n.setKey(t),n.getArrayData()}encodeGetFileUrl(e,t,n){const i=this._codec.getModule(qe);return i.setType(e),i.setKey(t),n&&i.setFileName(n),i.getArrayData()}encodeModifyChatRoomKV(e,t,n){const i="comet"===this._connectType,s=this._codec.getModule(Ge),{key:r,value:a,notificationExtra:h,isSendNotification:l,type:u}=t,c=u||G.UPDATE,f=((e,t)=>{let n=0;return e.isAutoDelete&&(n|=1),e.isOverwrite&&(n|=2),2===t&&(n|=4),n})(t,c),d={key:r,value:a||"",uid:n};if(E(f)||(d.status=f),s.setEntry(d),l){const t={type:o.CHATROOM,targetId:e},n={key:r,value:a,extra:h,type:c},l=this._getUpMsgModule(t,{messageType:gt.CHRM_KV_NOTIFY,content:n,isPersited:!1,isCounted:!1});i?s.setNotification(l.getArrayData()):s.setNotification(l),s.setBNotify(!0),s.setType(o.CHATROOM)}return s.getArrayData()}encodePullChatRoomKV(e){const t=this._codec.getModule(je);return t.setTimestamp(e),t.getArrayData()}encodePullUserSetting(e){const t=this._codec.getModule(Qe);return t.setVersion(e),t.getArrayData()}encodeGetConversationStatus(e){const t=this._codec.getModule(Ze);return t.setTime(e),t.getArrayData()}encodeSetConversationStatus(e){const t="comet"===this._connectType,n=this._codec.getModule(tt),i=j.getTime(),s=[];return k(e,(e=>{const n=this._codec.getModule(Xe),{conversationType:r,targetId:o,notificationStatus:a,isTop:h}=e,l=[];n.setType(r),n.setChannelId(o),n.setTime(i);const u=a===pt.OPEN,c={};E(a)||(c[Ft]=u),E(h)||(c[Yt]=h),k(c,((e,n)=>{if(!E(e)){const i=this._codec.getModule(et);e=e?kt:Bt,i.setSessionStateType(Number(n)),i.setValue(e);const s=t?i.getArrayData():i;l.push(s)}})),n.setStateItem(l);const f=t?n.getArrayData():n;s.push(f)})),n.setVersion(i),n.setState(s),n.getArrayData()}encodeJoinRTCRoom(e,t){const n=this._codec.getModule(ve);return e=e||0,n.setRoomType(e),E(t)||n.setBroadcastType(t),n.getArrayData()}encodeQuitRTCRoom(){return this._codec.getModule(we).getArrayData()}encodeSetRTCData(e,t,n,i,s){const r=this._codec.getModule(Ne);r.setInterior(n),r.setTarget(i),r.setKey(e),r.setValue(t),s=s||{};let{name:o,content:a}=s;return!E(o)&&r.setObjectName(o),E(a)||(d(a)&&(a=JSON.stringify(a)),r.setContent(a)),r.getArrayData()}encodeUserSetRTCData(e,t,n){const i=this._codec.getModule(Oe);i.setObjectName(n);let s=this._codec.getModule(ke);return s.setKey(e.name),s.setValue(e.content),i.setContent(s),s=this._codec.getModule(ke),s.setKey("uris"),s.setValue(t),i.setValueInfo(s),i.getArrayData()}encodeGetRTCData(e,t,n){const i=this._codec.getModule(be);return i.setInterior(t),i.setTarget(n),i.setKey(e),i.getArrayData()}encodeRemoveRTCData(e,t,n,i){const s=this._codec.getModule(be);s.setInterior(t),s.setTarget(n),s.setKey(e),i=i||{};let{name:r,content:o}=i;return!E(r)&&s.setObjectName(r),E(o)||(d(o)&&(o=JSON.stringify(o)),s.setContent(o)),s.getArrayData()}encodeSetRTCOutData(e,t,n){const i=this._codec.getModule(Me);i.setTarget(t),u(e)||(e=[e]),k(e,((t,n)=>{t.key=t.key?t.key.toString():t.key,t.value=t.value?t.value.toString():t.value,e[n]=t})),i.setValueInfo(e),n=n||{};let{name:s,content:r}=n;return!E(s)&&i.setObjectName(s),E(r)||(d(r)&&(r=JSON.stringify(r)),i.setContent(r)),i.getArrayData()}ecnodeGetRTCOutData(e){const t=this._codec.getModule(Le);return t.setUserId(e),t.getArrayData()}encodeSetRTCState(e){const t=this._codec.getModule(Ae);return t.setId(e),t.getArrayData()}encodeGetRTCRoomInfo(){const e=this._codec.getModule(xe);return e.setOrder(2),e.getArrayData()}encodeSetRTCUserInfo(e,t){const n=this._codec.getModule(ke);return n.setKey(e),n.setValue(t),n.getArrayData()}encodeRemoveRTCUserInfo(e){const t=this._codec.getModule(Be);return t.setKey(e),t.getArrayData()}}class Kt{constructor(e,t){this._watcher=t,this.codec=new Gt(e)}static matchVersion(e){return e.match(/\d+(\.\d+){2}/)[0]}}const jt=(e,t)=>e&&t?t+"_"+e:e||Date.now();class $t{constructor(e){this.header=e,this._name=null,this.lengthSize=0,this.messageId=0,this.timestamp=0,this.syncMsg=!1,this.identifier=""}getIdentifier(){const{messageId:e,identifier:t}=this;return jt(e,t)}read(e,t){this.readMessage(e,t)}readMessage(e,t){return{stream:e,length:t}}}class Wt{constructor(e){this.lengthSize=0,this.messageId=0,this.topic="",this.targetId="",this.identifier="",this._header=new J(e,!1,W.AT_MOST_ONCE,!1)}getIdentifier(){const{messageId:e,identifier:t}=this;return jt(e,t)}write(e){var t=this.getHeaderFlag();e.write(t),this.writeMessage(e)}setHeaderQos(e){this._header.qos=e}getHeaderFlag(){return this._header.encode()}getLengthSize(){return this.lengthSize}getBufferData(){const e=new te;this.write(e);const t=e.getBytesArray();return new Int8Array(t)}getCometData(){const e=this.data||{};return JSON.stringify(e)}}class Qt extends $t{constructor(){super(...arguments),this._name=z.CONN_ACK,this.status=null,this.userId=null,this.timestamp=0}readMessage(e,t){return e.readByte(),this.status=+e.readByte(),t>Qt.MESSAGE_LENGTH&&(this.userId=e.readUTF(),e.readUTF(),this.timestamp=e.readLong()),{stream:e,length:t}}}Qt.MESSAGE_LENGTH=2;class zt extends $t{constructor(){super(...arguments),this._name=z.DISCONNECT,this.status=0}readMessage(e,t){return e.readByte(),this.status=+e.readByte(),{stream:e,length:t}}}zt.MESSAGE_LENGTH=2;class Zt extends Wt{constructor(){super(Q.PING_REQ),this._name=z.PING_REQ}writeMessage(e){}}class Jt extends $t{constructor(e){super(e),this._name=z.PING_RESP}}class Xt extends $t{constructor(){super(...arguments),this.messageId=0}readMessage(e,t){const n=256*e.readByte()+e.readByte();return this.messageId=parseInt(n.toString(),10),{stream:e,length:t}}}class en extends Wt{constructor(){super(...arguments),this.messageId=0}writeMessage(e){const t=this.messageId,n=255&t,i=(65280&t)>>8;e.write(i),e.write(n)}}class tn extends Xt{constructor(){super(...arguments),this._name=z.PUBLISH,this.topic="",this.targetId="",this.syncMsg=!1,this.identifier=Z.PUB}readMessage(e,t){return this.date=e.readInt(),this.topic=e.readUTF(),this.targetId=e.readUTF(),super.readMessage(e,t),this.data=e.readAll(),{stream:e,length:t}}}class nn extends en{constructor(e,t,n){super(Q.PUBLISH),this._name=z.PUBLISH,this.syncMsg=!1,this.identifier=Z.PUB,this.topic=e,this.data=h(t)?X.writeUTF(t):t,this.targetId=n}writeMessage(e){e.writeUTF(this.topic),e.writeUTF(this.targetId),super.writeMessage(e),e.write(this.data)}}class sn extends Xt{constructor(){super(...arguments),this._name=z.PUB_ACK,this.status=0,this.date=0,this.millisecond=0,this.messageUId="",this.timestamp=0,this.identifier=Z.PUB,this.topic="",this.targetId=""}readMessage(e,t){return super.readMessage(e,t),this.date=e.readInt(),this.status=256*e.readByte()+e.readByte(),this.millisecond=256*e.readByte()+e.readByte(),this.timestamp=1e3*this.date+this.millisecond,this.messageUId=e.readUTF(),{stream:e,length:t}}}class rn extends en{constructor(e){super(Q.PUB_ACK),this._name=z.PUB_ACK,this.status=0,this.date=0,this.millisecond=0,this.messageUId="",this.timestamp=0,this.messageId=e}writeMessage(e){super.writeMessage(e)}}class on extends en{constructor(e,t,n){super(Q.QUERY),this.name=z.QUERY,this.identifier=Z.QUERY,this.topic=e,this.data=h(t)?X.writeUTF(t):t,this.targetId=n}writeMessage(e){e.writeUTF(this.topic),e.writeUTF(this.targetId),super.writeMessage(e),e.write(this.data)}}class an extends en{constructor(e){super(Q.QUERY_CONFIRM),this._name=z.QUERY_CON,this.messageId=e}}class hn extends Xt{constructor(){super(...arguments),this._name=z.QUERY_ACK,this.status=0,this.identifier=Z.QUERY,this.topic="",this.targetId=""}readMessage(e,t){return super.readMessage(e,t),this.date=e.readInt(),this.status=256*e.readByte()+e.readByte(),this.data=e.readAll(),{stream:e,length:t}}}const ln=e=>{const t=e.type;let n;switch(t){case Q.CONN_ACK:n=new Qt(e);break;case Q.PUBLISH:n=new tn(e),n.syncMsg=e.syncMsg;break;case Q.PUB_ACK:n=new sn(e);break;case Q.QUERY_ACK:n=new hn(e);break;case Q.SUB_ACK:case Q.UNSUB_ACK:case Q.PING_RESP:n=new Jt(e);break;case Q.DISCONNECT:n=new zt(e);break;default:n=new $t(e),P.error("No support for deserializing "+t+" messages")}return n},un=e=>{const t=new Uint8Array(e),n=new ee(t),i=n.readByte(),s=new J(i),r=ln(s);return r.read(n,t.length-1),r},cn={ACCEPTED:0,UNACCEPTABLE_PROTOCOL_VERSION:1,IDENTIFIER_REJECTED:2,SERVER_UNAVAILABLE:3,TOKEN_INCORRECT:4,NOT_AUTHORIZED:5,REDIRECT:6,PACKAGE_ERROR:7,APP_BLOCK_OR_DELETE:8,BLOCK:9,TOKEN_EXPIRE:10,DEVICE_ERROR:11,HOSTNAME_ERROR:12,HASOHTERSAMECLIENTONLINE:13};var fn;!function(e){e[e.CONNECTED=0]="CONNECTED",e[e.CONNECTING=1]="CONNECTING",e[e.DISCONNECTED=2]="DISCONNECTED",e[e.NETWORK_UNAVAILABLE=3]="NETWORK_UNAVAILABLE",e[e.CONNECTION_CLOSED=4]="CONNECTION_CLOSED",e[e.KICKED_OFFLINE_BY_OTHER_CLIENT=6]="KICKED_OFFLINE_BY_OTHER_CLIENT",e[e.WEBSOCKET_UNAVAILABLE=7]="WEBSOCKET_UNAVAILABLE",e[e.WEBSOCKET_ERROR=8]="WEBSOCKET_ERROR",e[e.BLOCKED=9]="BLOCKED",e[e.DOMAIN_INCORRECT=12]="DOMAIN_INCORRECT",e[e.APPKEY_IS_FAKE=20]="APPKEY_IS_FAKE",e[e.ULTRALIMIT=1101]="ULTRALIMIT",e[e.REQUEST_NAVI=201]="REQUEST_NAVI",e[e.RESPONSE_NAVI=202]="RESPONSE_NAVI",e[e.RESPONSE_NAVI_ERROR=203]="RESPONSE_NAVI_ERROR",e[e.RESPONSE_NAVI_TIMEOUT=204]="RESPONSE_NAVI_TIMEOUT"}(fn||(fn={}));var dn,gn=fn;!function(e){e[e.ppMsgP=1]="ppMsgP",e[e.ppMsgN=2]="ppMsgN",e[e.ppMsgS=3]="ppMsgS",e[e.pgMsgP=4]="pgMsgP",e[e.chatMsg=5]="chatMsg",e[e.pcMsgP=6]="pcMsgP",e[e.qryPMsg=7]="qryPMsg",e[e.qryGMsg=8]="qryGMsg",e[e.qryCHMsg=9]="qryCHMsg",e[e.qryCMsg=10]="qryCMsg",e[e.qrySMsg=11]="qrySMsg",e[e.recallMsg=12]="recallMsg",e[e.prMsgS=13]="prMsgS",e[e.s_ntf=14]="s_ntf",e[e.s_msg=15]="s_msg",e[e.s_stat=16]="s_stat",e[e.s_cmd=17]="s_cmd",e[e.s_us=18]="s_us",e[e.pullUS=19]="pullUS",e[e.pgMsgS=20]="pgMsgS",e[e.chatMsgS=21]="chatMsgS",e[e.qrySessionsAtt=22]="qrySessionsAtt",e[e.pullMsg=23]="pullMsg",e[e.qrySessions=24]="qrySessions",e[e.delSessions=25]="delSessions",e[e.delMsg=26]="delMsg",e[e.updRRTime=27]="updRRTime",e[e.chrmPull=28]="chrmPull",e[e.joinChrm=29]="joinChrm",e[e.joinChrmR=30]="joinChrmR",e[e.exitChrm=31]="exitChrm",e[e.queryChrmI=32]="queryChrmI",e[e.setKV=33]="setKV",e[e.delKV=34]="delKV",e[e.pullKV=35]="pullKV",e[e.qryRelation=36]="qryRelation",e[e.delRelation=37]="delRelation",e[e.pullSeAtts=38]="pullSeAtts",e[e.setSeAtt=39]="setSeAtt",e[e.qnTkn=40]="qnTkn",e[e.qnUrl=41]="qnUrl",e[e.cleanPMsg=42]="cleanPMsg",e[e.cleanGMsg=43]="cleanGMsg",e[e.cleanCMsg=44]="cleanCMsg",e[e.cleanSMsg=45]="cleanSMsg",e[e.rtcRJoin_data=46]="rtcRJoin_data",e[e.rtcRExit=47]="rtcRExit",e[e.rtcPing=48]="rtcPing",e[e.rtcSetData=49]="rtcSetData",e[e.userSetData=50]="userSetData",e[e.rtcQryData=51]="rtcQryData",e[e.rtcDelData=52]="rtcDelData",e[e.rtcSetOutData=53]="rtcSetOutData",e[e.rtcQryUserOutData=54]="rtcQryUserOutData",e[e.rtcToken=55]="rtcToken",e[e.rtcUserState=56]="rtcUserState",e[e.rtcRInfo=57]="rtcRInfo",e[e.rtcUData=58]="rtcUData",e[e.rtcUPut=59]="rtcUPut",e[e.rtcUDel=60]="rtcUDel",e[e.rtcUList=61]="rtcUList"}(dn||(dn={}));var pn=dn;const En=(e,t,n)=>$(void 0,void 0,void 0,(function*(){let i=yield Promise.all(e.map((e=>$(void 0,void 0,void 0,(function*(){const i=Date.now(),s=`${t}://${e}/ping?r=${r=1e3,o=9999,r+Math.floor(Math.random()*(o-r))}`;var r,o;return{status:(yield n.httpReq({url:s,timeout:5e3})).status,host:e,cost:Date.now()-i}})))));return i=i.filter((e=>200===e.status)),i.length>1&&(i=i.sort(((e,t)=>e.cost-t.cost))),i.map((e=>e.host))})),_n=(e,t,n,i,s,r,o)=>`${e}://${t}/websocket?appId=${n}&token=${encodeURIComponent(i)}&sdkVer=${r}&pid=${o}&apiVer=${s.isFromUniapp?"uniapp":"normal"}${s.connectPlatform?"&platform="+s.connectPlatform:""}`,mn=(e,t)=>[e,t].join("-"),yn=e=>[pn.ppMsgS,pn.pgMsgS,pn.chatMsgS].map((e=>pn[e])).indexOf(e)>=0,Tn=(e,t)=>{e instanceof Zt||P.debug("Websocket ==>",e);const n=e.getBufferData();t.send(n.buffer)};var Rn;(Rn=exports.HttpMethod||(exports.HttpMethod={})).GET="GET",Rn.POST="POST";const Cn=(e,t)=>["navi",e,t].join("_"),In=(e,t,n)=>{const i=Cn(e,t),s=n.getItem(i);if(!s)return null;let r;try{r=JSON.parse(s)}catch(e){return n.removeItem(i),null}return Date.now()-r.timestamp>=72e5?(n.removeItem(i),null):r.naviInfo},vn=(e,t,n,i)=>{const s=Cn(e,t),r={naviInfo:n,timestamp:Date.now()};i.setItem(s,JSON.stringify(r))};class Sn{constructor(e,t,n,i=[],s,r){this._runtime=e,this._appkey=t,this._navigators=n,this._customCMP=i,this._apiVersion=s,this._connectType=r}_formatNaviUrl(e,t,n,i,s){return`${e}/${this._runtime.isSupportSocket()&&"websocket"===s?"navi":"cometnavi"}.js?appId=${n}&token=${encodeURIComponent(t)}&callBack=${i}&v=${this._apiVersion}&r=${Date.now()}`}_reqNavi(e,t,n,i){return $(this,void 0,void 0,(function*(){const s="getServerEndpoint";for(let r=0,o=e.length;r<o;r+=1){const o=this._formatNaviUrl(e[r],n,t,s,i);P.debug("req navi => "+o);const a=yield this._runtime.httpReq({url:o,timeout:1e4});if(200===a.status)try{const e=a.data.replace(s+"(","").replace(/\);?$/,""),t=JSON.parse(e),n=/^https/.test(o)?"https":"http";return t.protocol=n,t}catch(e){P.error("parse navi err =>",e)}}return null}))}getInfo(e,t,n){var i;return $(this,void 0,void 0,(function*(){if(!this._runtime.useNavi){let t;t=this._runtime.isSupportSocket()?R.join(","):C.join(",");const n={code:200,protocol:"https",server:"",voipCallInfo:"",kvStorage:0,openHttpDNS:!1,historyMsg:!1,chatroomMsg:!1,uploadServer:"https://upload.qiniup.com",bosAddr:"https://gz.bcebos.com",location:"",monitor:0,joinMChrm:!1,openMp:0,openUS:0,grpMsgLimit:0,isFormatted:0,gifSize:2048,logSwitch:0,logPolicy:"",compDays:0,msgAck:"",activeServer:"",qnAddr:"",extkitSwitch:0,alone:!1,voipServer:"",offlinelogserver:"",backupServer:(null===(i=this._customCMP)||void 0===i?void 0:i.length)?this._customCMP.join(","):t};return vn(this._appkey,e,n,this._runtime.localStorage),n}n&&this._clear(e);let s=In(this._appkey,e,this._runtime.localStorage);if(s)return s;const r=this._navigators.slice();return t.length&&t.forEach((e=>{r.indexOf(e)<0&&r.push(e)})),s=yield this._reqNavi(r,this._appkey,e,this._connectType),s?(vn(this._appkey,e,s,this._runtime.localStorage),s):s}))}getInfoFromCache(e){return In(this._appkey,e,this._runtime.localStorage)}_clear(e){((e,t,n)=>{n.removeItem(Cn(e,t))})(this._appkey,e,this._runtime.localStorage)}}class wn{constructor(e,t,n,i){this.runtime=e,this._appkey=t,this._watcher=n,this._apiVersion=i,this.currentUserId="",this.connectedTime=0}}const Nn=(e,t,n)=>[e,t,n].join("_");class On{constructor(e,t){this._runtime=e,this._appkey=t,this._inboxTime=0,this._outboxTime=0}setInboxTime(e,t){if(this._inboxTime>e)return;this._inboxTime=e;const n=Nn("inbox",this._appkey,t);this._runtime.localStorage.setItem(n,e.toString())}getInboxTime(e){if(0===this._inboxTime){const t=Nn("inbox",this._appkey,e);this._inboxTime=parseInt(this._runtime.localStorage.getItem(t))||0}return this._inboxTime}setOutboxTime(e,t){if(this._outboxTime>e)return;this._outboxTime=e;const n=Nn("outbox",this._appkey,t);this._runtime.localStorage.setItem(n,e.toString())}getOutboxTime(e){if(0===this._outboxTime){const t=Nn("outbox",this._appkey,e);this._outboxTime=parseInt(this._runtime.localStorage.getItem(t))||0}return this._outboxTime}}const bn={_caches:{},set(e,t){this._caches[e]=t},get(e){return this._caches[e]||0},clear(e){this._caches[e]=0}};class Mn{constructor(e,t){this._kvCaches={},this._chatroomId=e,this._currentUserId=t}_add(e){const{key:t}=e;e.isDeleted=!1,this._kvCaches[t]=e}_remove(e){const{key:t}=e,n=this._kvCaches[t];n.isDeleted=!0,this._kvCaches[t]=n}_setEntry(e,t){const{key:n,type:i,isOverwrite:s,userId:r}=e,o=this._getSetUserId(n),a=i===G.DELETE,h=o===r,l=!this._isExisted(n),u=a?this._remove:this._add;(t||s||h||l)&&u.call(this,e)}getValue(e){const t=this._kvCaches[e]||{},{isDeleted:n}=t;return n?null:t.value}getAllValue(){const e={};for(const t in this._kvCaches)this._kvCaches[t].isDeleted||(e[t]=this._kvCaches[t].value);return e}_getSetUserId(e){return(this._kvCaches[e]||{}).userId}_isExisted(e){const t=this._kvCaches[e]||{},{value:n,isDeleted:i}=t;return n&&!i}setEntries(e){let{kvEntries:t,isFullUpdate:n}=e;t=t||[],n=n||!1,n&&this.clear(),t.forEach((e=>{this._setEntry(e,n)}))}clear(){this._kvCaches={}}}class An{constructor(e){this._pullQueue=[],this._isPulling=!1,this._storeCaches={},this._engine=e}_startPull(){return $(this,void 0,void 0,(function*(){if(this._isPulling||0===this._pullQueue.length)return;this._isPulling=!0;const{chrmId:e,timestamp:t}=this._pullQueue.splice(0,1)[0];if(bn.get(e)>t)return void(this._isPulling=!1);const{code:n,data:i}=yield this._engine.pullChatroomEntry(e,t);n===s.SUCCESS?(this._isPulling=!1,bn.set(e,i.syncTime||0),this._startPull()):this._startPull()}))}reset(e){bn.clear(e);this._storeCaches[e].clear()}pullEntry(e,t){this._pullQueue.push({chrmId:e,timestamp:t}),this._startPull()}setLocal(e,t,n){let i=this._storeCaches[e];m(i)||(i=new Mn(e,n)),i.setEntries(t),this._storeCaches[e]=i}getValue(e,t){const n=this._storeCaches[e];return n?n.getValue(t):null}getAll(e){const t=this._storeCaches[e];let n={};return t&&(n=t.getAllValue()),n}}class Un{constructor(e,t,n,i){this._runtime=e,this._appkey=t,this._userId=n,this._canJoinMulipleChrm=i,this._sessionKey="",this._joinedChrmsInfo={},this._sessionKey=`sync-chrm-${this._appkey}-${this._userId}`}set(e,t=10){!this._canJoinMulipleChrm&&(this._joinedChrmsInfo={}),this._joinedChrmsInfo[e]=t,this._runtime.sessionStorage.setItem(this._sessionKey,JSON.stringify(this._joinedChrmsInfo))}get(){let e;try{e=this._runtime.sessionStorage.getItem(this._sessionKey)}catch(t){P.error("parse rejoined chrm infos error",t),e={}}return e}remove(e){delete this._joinedChrmsInfo[e],m(this._joinedChrmsInfo)?this._runtime.sessionStorage.setItem(this._sessionKey,JSON.stringify(this._joinedChrmsInfo)):this.clear()}clear(){this._joinedChrmsInfo={},this._runtime.sessionStorage.removeItem(this._sessionKey)}}class Pn{constructor(){this._map={}}on(e,t){const n=this._map[e]||(this._map[e]=[]);n.includes(t)||n.push(t)}off(e,t){const n=this._map[e];if(!n)return;const i=n.length;for(let s=i-1;s>=0;s-=1)if(n[s]===t){n.splice(s,1),1===i&&delete this._map[e];break}}emit(e,t){const n=this._map[e];n&&n.forEach((e=>e(t)))}removeAll(e){delete this._map[e]}clear(){Object.keys(this._map).forEach(this.removeAll,this)}}const Ln="converStatusChanged";class Dn{constructor(e,t,n){this._eventEmitter=new Pn,this._pullQueue=[],this._isPulling=!1,this._storage=S(e.runtime),this._appkey=t,this._currentUserId=n,this._engine=e,this._storagePullTimeKey=`con-s-${t}-${n}`}_set(e){if(E(e))return;let t=this._storage.get(this._storagePullTimeKey)||0;const n=e.length;e.forEach(((e,i)=>{const s=e.updatedTime||0;t=s>t?s:t,e.conversationType=e.type,this._eventEmitter.emit(Ln,{statusItem:e,isLastPull:i===n-1})})),this._storage.set(this._storagePullTimeKey,t)}_startPull(){return $(this,void 0,void 0,(function*(){if(this._isPulling||0===this._pullQueue.length)return;this._isPulling=!0;const e=this._pullQueue.splice(0,1)[0],{code:t,data:n}=yield this._engine.pullConversationStatus(e);t===s.SUCCESS?(this._isPulling=!1,this._set(n),this._startPull()):this._startPull()}))}pull(e){const t=this._storage.get(this._storagePullTimeKey)||0;(e>t||0===e)&&(this._pullQueue.push(t),this._startPull())}watch(e){this._eventEmitter.on(Ln,(t=>{e(t)}))}unwatch(){this._eventEmitter.off(Ln,(e=>{}))}}const xn={c:{keyName:"unreadMessageCount",defaultVal:0},hm:{keyName:"hasMentioned",defaultVal:!1},m:{keyName:"mentionedInfo",defaultVal:null},t:{keyName:"lastUnreadTime",defaultVal:0},nc:{keyName:"notificationStatus",defaultVal:2},to:{keyName:"isTop",defaultVal:!1}},Vn={};for(const e in xn){const t=xn[e].keyName;Vn[t]=e}class kn{constructor(e,t,n){this._appkey=t,this._currentUserId=n;const i=`con-${t}-${n}`;this.storage=new N(e,i)}_getStoreKey(e,t){return`${e}_${t}`}_getConOptionByKey(e){const t=(e=e||"").split("_");return 2===t.length?{conversationType:t[0],targetId:t[1]}:{conversationType:o.PRIVATE,targetId:""}}updateMentionedData(e){const{conversationType:t,targetId:n,messageType:i,isMentioned:s,content:r,senderUserId:a}=e,h=this._getStoreKey(t,n),l=this.storage.get(h)||{},u=Vn.mentionedInfo,c=Vn.hasMentioned;let f=[];const d=(l[u]||{}).userIdList||[];let g=r.mentionedInfo;if(s&&t===o.GROUP&&g.userIdList){const e=g.userIdList,t=d.indexOf(a)<0;e.forEach((e=>{e===this._currentUserId&&t&&d.push(a)})),g.type===ft.ALL&&t&&d.push(a),f=d}if(i===gt.RECALL&&t===o.GROUP){const e=d;d.forEach(((t,n)=>{t===a&&e.splice(n,1)})),f=e}g={userIdList:f,type:null==g?void 0:g.type},0!==f.length?(l[u]=g,l[c]=!0):(delete l[u],delete l[c]),m(l)?this.storage.set(h,l):this.storage.remove(h)}set(e,t,n){const i=this._getStoreKey(e,t),s=this.storage.get(i)||{};for(const e in n){const t=Vn[e],i=n[e];if(E(t)||E(i)||"hasMentioned"===e||"MentionedInfo"===e)continue;i===xn[t].defaultVal?delete s[t]:s[t]=i,s.c||delete s.t}m(s)?this.storage.set(i,s):this.storage.remove(i)}get(e,t){const n=this._getStoreKey(e,t),i=this.storage.get(n)||{},s={};for(const e in xn){const{keyName:t,defaultVal:n}=xn[e];s[t]=i[e]||n}return s}getValue(e){const t=this.storage.getValues()||{},n=[];for(const i in t){const{conversationType:s,targetId:r}=this._getConOptionByKey(i);let o={};const a=t[i];for(const e in a){const{keyName:t,defaultVal:n}=xn[e];o[t]=a[e]||n}o=Object.assign(o,{conversationType:s,targetId:r}),o=e?e(o):o,n.push(o)}return n}}const Bn=[o.PRIVATE,o.GROUP,o.SYSTEM],Fn="conversationChanged";class Yn{constructor(e,t,n,i){this._updatedConversations={},this._eventEmitter=new Pn,this._draftMap={},this._appkey=t,this._loginUserId=n,this._store=new kn(e.runtime,t,n),this._statusManager=new Dn(e,t,n),this._statusManager.watch((e=>{const{statusItem:t,isLastPull:n}=e;this.addStatus(t,n)})),this._eventEmitter.on(Fn,(e=>{i(e)}))}_calcUnreadCount(e,t){const{content:n,messageType:i,sentTime:s,isCounted:r,messageDirection:o,senderUserId:a}=e,h=o===Ht.SEND&&a===this._loginUserId,l=i===gt.RECALL,u=d(n);let c=!1;const f=t.lastUnreadTime||0,g=t.unreadMessageCount||0;if(f>s||h)return{hasChanged:c,localConversation:t};if(r&&(t.unreadMessageCount=g+1,t.lastUnreadTime=s,c=!0),l&&u){f>=n.sentTime&&g&&(t.unreadMessageCount=g-1,c=!0)}return{hasChanged:c,localConversation:t}}_calcMentionedInfo(e,t){const{content:n,messageDirection:i,isMentioned:s}=e,r=(Ht.SEND,d(n));let o=!1;return s&&r&&n.mentionedInfo&&(t.hasMentioned=!0,t.mentionedInfo=n.mentionedInfo,o=!0),{hasChanged:o,localConversation:t}}_setUpdatedConversation(e){if(d(e)){const{conversationType:t,targetId:n}=e,i=`${t}_${n}`,s=this._store.get(t,n)||{};this._updatedConversations[i]=Object.assign(s,e)}}addStatus(e,t){const{conversationType:n,targetId:i,updatedTime:s,notificationStatus:r,isTop:o}=e,a={};E(r)||(a.notificationStatus={time:s,val:r}),E(o)||(a.isTop={time:s,val:o}),this._store.set(n,i,{notificationStatus:r,isTop:o}),this._setUpdatedConversation({conversationType:n,targetId:i,updatedItems:a}),t&&this._notifyConversationChanged()}_notifyConversationChanged(){const e=[];for(const t in this._updatedConversations)e.push(this._updatedConversations[t]);this._eventEmitter.emit(Fn,e),this._updatedConversations={}}setConversationCacheByMessage(e,t){const{conversationType:n,isPersited:i,targetId:s}=e;if(!(Bn.indexOf(n)>=0))return;let r=!1,o=this._store.get(n,s);if([this._calcUnreadCount,this._calcMentionedInfo].forEach((t=>{const{hasChanged:n,localConversation:i}=t.call(this,e,o);r=r||n,o=i})),r&&this._store.set(n,s,o),this._store.updateMentionedData(e),i){const t=this._store.get(n,s);t.updatedItems={latestMessage:{time:e.sentTime,val:e}},t.latestMessage=e;const i=Object.assign(t,{conversationType:n,targetId:s});this._setUpdatedConversation(i)}t&&this._notifyConversationChanged()}get(e,t){return this._store.get(e,t)}getAllUnreadCount(){const e=this._store.getValue();let t=0;return e.forEach((({unreadMessageCount:e})=>{e=e||0,t+=Number(e)})),t}getUnreadCount(e,t){return this._store.get(e,t).unreadMessageCount||0}clearUnreadCount(e,t){const n=this._store.get(e,t),{unreadMessageCount:i,hasMentioned:s}=n;(i||s)&&(n.unreadMessageCount=0,n.hasMentioned=!1),this._store.set(e,t,n);const r=Object.assign(n,{conversationType:e,targetId:t});this._setUpdatedConversation(r),this._notifyConversationChanged()}startPullConversationStatus(e){this._statusManager.pull(e)}setDraft(e,t,n){const i=`${e}_${t}`;this._draftMap[i]=n}getDraft(e,t){const n=`${e}_${t}`;return this._draftMap[n]}clearDraft(e,t){const n=`${e}_${t}`;delete this._draftMap[n]}}const qn=(e,n,i,s,r,o)=>({conversationType:e,targetId:n,senderUserId:o,messageDirection:Ht.SEND,isCounted:!!i.isCounted,isMentioned:!!i.isMentioned,content:i.content,messageType:i.messageType,isOffLineMessage:!1,isPersited:!!i.isPersited,messageUId:s,sentTime:r,receivedTime:0,disableNotification:!!i.disableNotification,isStatusMessage:!!i.isStatusMessage,canIncludeExpansion:!!i.canIncludeExpansion,expansion:i.canIncludeExpansion?i.expansion:null,receivedStatus:t.UNREAD});class Hn extends wn{constructor(e,t,n,i){super(e,t,n,i),this._customMessageType={},this._pullingMsg=!1,this._pullQueue=[],this._chrmsQueue={},this._letterbox=new On(e,t),this._chrmEntryHandler=new An(this)}connect(e,t,n){return $(this,void 0,void 0,(function*(){const i=[];this._naviInfo=t,t.server?i.push(t.server):P.warn("navi.server is invalid");const r=t.backupServer;if(r&&r.split(",").forEach((e=>{i.indexOf(e)<0&&i.push(e)})),0===i.length)return P.error("navi invaild.",i),s.UNKNOWN;const o=this.runtime.createDataChannel({status:n=>{this._connectionStatusHandler(n,e,i,t.protocol)},signal:this._signalHandler.bind(this)},n),a=yield o.connect(this._appkey,e,i,t.protocol,this._apiVersion);return a===s.SUCCESS?(this._channel=o,this.currentUserId=o.userId,this.connectedTime=o.connectedTime,this._conversationManager=new Yn(this,this._appkey,this.currentUserId,this._watcher.conversation),this._conversationManager.startPullConversationStatus(0),this._joinedChrmManager=new Un(this.runtime,this._appkey,this.currentUserId,t.joinMChrm),this._syncMsg()):o.close(),a}))}_connectionStatusHandler(e,t,n,i){if(P.warn("connection status changed:",e),e!==gn.CONNECTING&&e!==gn.CONNECTED){if(this._channel&&e!==gn.DISCONNECTED)return e===gn.BLOCKED||e===gn.KICKED_OFFLINE_BY_OTHER_CLIENT?(this.disconnect(),void this._watcher.status(e)):void this._try2Reconnect(t,n,i);this._watcher.status(e)}else this._watcher.status(e)}_try2Reconnect(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return;(yield this._channel.connect(this._appkey,e,t,n,this._apiVersion))!==s.SUCCESS?(this._watcher.status(gn.WEBSOCKET_UNAVAILABLE),setTimeout((()=>{this._try2Reconnect(e,t,n)}),5e3)):this._rejoinChrm()}))}_signalHandler(e,t){const{syncMsg:n,topic:i}=e;if(n)return void this._receiveSyncMsg(e,t);const s=pn[i];if(s)switch(s){case pn.s_ntf:this._pullMsg(e);break;case pn.s_msg:this._receiveMsg(e);break;case pn.s_cmd:this._receiveStateNotify(e);break;case pn.s_us:this._receiveSettingNotify(e)}else P.error("unknown topic:",i)}_receiveStateNotify(e){var t;const{time:n,type:i,chrmId:s}=null===(t=this._channel)||void 0===t?void 0:t.codec.decodeByPBName(e.data,le);switch(i){case 2:P.warn("server notify chrm:",s,n),this._chrmEntryHandler.pullEntry(s,n);break;case 3:this._conversationManager.startPullConversationStatus(n)}}_receiveSettingNotify(e){}_receiveMessageExpansion(e){const{content:t}=e,{put:n,del:i,mid:s}=t;n&&this._watcher.expansion({updatedExpansion:{messageUId:s,expansion:n}}),i&&this._watcher.expansion({deletedExpansion:{messageUId:s,deletedKeys:i}})}_receiveSyncMsg(e,t){var n;let i=null===(n=this._channel)||void 0===n?void 0:n.codec.decodeByPBName(e.data,ne,{currentUserId:this.currentUserId,signal:e});i=this._handleMsgProperties(i),i.sentTime=t.timestamp,i.messageUId=t.messageUId,this._pullingMsg?this._pullQueue.push(t.timestamp):(this._letterbox.setOutboxTime(t.timestamp,this.currentUserId),i.messageType!==gt.EXPANSION_NOTIFY?(this._watcher.message(i),this._conversationManager.setConversationCacheByMessage(i,!0)):this._receiveMessageExpansion(i))}_pullMsg(e){if(!this._channel)return;const{type:t,chrmId:n,time:i}=this._channel.codec.decodeByPBName(e.data,le);if(2===t){this._chrmsQueue[n].queue.push(i),this._pullChrmMsg(n)}else this._pullQueue.push(i),this._syncMsg()}_syncMsg(){return $(this,void 0,void 0,(function*(){if(this._pullingMsg)return;if(!this._channel)return void(this._pullingMsg=!1);this._pullingMsg=!0;const e=this._letterbox.getOutboxTime(this.currentUserId),t=this._letterbox.getInboxTime(this.currentUserId);P.warn("outboxTime",e),P.warn("inboxTime",t);const n=this._channel.codec.encodeSyncMsg({sendboxTime:e,inboxTime:t}),i=new on(pn[pn.pullMsg],n,this.currentUserId),{code:r,data:o}=yield this._channel.send(i,se,{connectedTime:this._channel.connectedTime,currentUserId:this.currentUserId});if(r!==s.SUCCESS||!o)return P.warn("Pull msg failed, code:",r,", data: ",o),void(this._pullingMsg=!1);const{list:a,finished:h,syncTime:l}=o;let u=0;a.forEach((e=>{e.messageDirection===Ht.SEND&&(u=Math.max(e.sentTime,u)),e.messageType!==gt.EXPANSION_NOTIFY?(this._watcher.message(e),this._conversationManager.setConversationCacheByMessage(e,!0)):this._receiveMessageExpansion(e)})),this._letterbox.setInboxTime(l,this.currentUserId),this._letterbox.setOutboxTime(u,this.currentUserId),this._pullingMsg=!1;const c=this._pullQueue.filter((e=>e>l));this._pullQueue.length=0,this._pullQueue.push(...c),(!h||c.length>0)&&this._syncMsg()}))}_receiveMsg(e){if(!this._channel)return;let t=this._channel.codec.decodeByPBName(e.data,ie,{currentUserId:this.currentUserId,connectedTime:this._channel.connectedTime});t=this._handleMsgProperties(t),this._pullingMsg||(this._letterbox.setInboxTime(t.sentTime,this.currentUserId),t.messageType!==gt.EXPANSION_NOTIFY?(this._watcher.message(t),this._conversationManager.setConversationCacheByMessage(t,!0)):this._receiveMessageExpansion(t))}_handleMsgProperties(e,t=!1){const{messageType:n,isCounted:i,isPersited:s,isStatusMessage:r}=e;let o;const a=n in I,h=n in this._customMessageType;return o=a?I[n]:h?this._customMessageType[n]:{isCounted:!_(i)&&i,isPersited:!_(s)&&s},Object.assign(e,{isCounted:o.isCounted,isPersited:o.isPersited,isStatusMessage:!(e.isCounted&&e.isPersited)}),t&&(e.isStatusMessage=r),e}getConnectTime(){return this._channel?Promise.resolve({code:s.SUCCESS,data:this._channel.connectedTime}):Promise.resolve({code:s.RC_NET_CHANNEL_INVALID})}getHistoryMessage(e,t,n,i,r){return $(this,void 0,void 0,(function*(){const{currentUserId:o,_channel:a}=this,h=xt[e]||Mt;if(a){const e=a.codec.encodeGetHistoryMsg(t,{timestamp:n,count:i,order:r}),l=yield a.send(new on(h,e,o),ce,{currentUserId:o,connectedTime:a.connectedTime,conversation:{targetId:t}}),{code:u}=l;if(u!==s.SUCCESS)return{code:u};const c=l.data;return{code:u,data:{list:c.list,hasMore:c.hasMore}}}return{code:s.RC_NET_CHANNEL_INVALID}}))}deleteRemoteMessage(e,t,n){return $(this,void 0,void 0,(function*(){const{currentUserId:i,_channel:r}=this;if(r){const o=r.codec.encodeDeleteMessages(e,t,n),a=new on(Tt,o,i),h=yield r.send(a),{code:l}=h;return s.SUCCESS,l}return s.RC_NET_CHANNEL_INVALID}))}deleteRemoteMessageByTimestamp(e,t,n){return $(this,void 0,void 0,(function*(){const{currentUserId:i,_channel:r}=this;if(r){const o=r.codec.encodeClearMessages(t,n),a=new on(Vt[e],o,i),h=yield r.send(a),{code:l}=h;return s.SUCCESS,l}return s.RC_NET_CHANNEL_INVALID}))}getConversationList(e=300,t,n,i){return $(this,void 0,void 0,(function*(){const{currentUserId:r,_channel:a}=this;if(t=t||o.PRIVATE,a){const o=a.codec.encodeOldConversationList({count:e,type:t,startTime:n,order:i}),h=new on(wt,o,r),l=yield a.send(h,de,{currentUserId:r,connectedTime:a.connectedTime,afterDecode:e=>{const{conversationType:t,targetId:n}=e,i=this._conversationManager.get(t,n);return Object.assign(e,i),e}});P.info("GetConversationList =>",l);const{code:u,data:c}=l;return u!==s.SUCCESS?{code:u}:{code:u,data:c}}return{code:s.RC_NET_CHANNEL_INVALID}}))}removeConversation(e,t){return $(this,void 0,void 0,(function*(){const{_channel:n}=this;if(n){const i=n.codec.encodeOldConversationList({type:e}),r=new on(Nt,i,t),o=yield n.send(r);P.info("RemoveConversation =>",o);const{code:a}=o;return s.SUCCESS,a}return s.RC_NET_CHANNEL_INVALID}))}getConversation(e,t){throw new Error("Method not implemented.")}getAllConversationUnreadCount(){const e=this._conversationManager.getAllUnreadCount();return Promise.resolve({code:s.SUCCESS,data:e})}getConversationUnreadCount(e,t){const n=this._conversationManager.getUnreadCount(e,t);return Promise.resolve({code:s.SUCCESS,data:n})}clearConversationUnreadCount(e,t){return this._conversationManager.clearUnreadCount(e,t),Promise.resolve(s.SUCCESS)}saveConversationMessageDraft(e,t,n){return this._conversationManager.setDraft(e,t,n),Promise.resolve(s.SUCCESS)}getConversationMessageDraft(e,t){const n=this._conversationManager.getDraft(e,t);return Promise.resolve({code:s.SUCCESS,data:n})}clearConversationMessageDraft(e,t){return this._conversationManager.clearDraft(e,t),Promise.resolve(s.SUCCESS)}pullConversationStatus(e){return $(this,void 0,void 0,(function*(){const{_channel:t,currentUserId:n}=this;if(t){const i=t.codec.encodeGetConversationStatus(e),r=new on(pn[pn.pullSeAtts],i,n),o=yield t.send(r,Je),{code:a,data:h}=o;return a!==s.SUCCESS?{code:a}:{code:a,data:h}}return{code:s.RC_NET_CHANNEL_INVALID}}))}batchSetConversationStatus(e){return $(this,void 0,void 0,(function*(){const{currentUserId:t,_channel:n}=this;if(n){const i=n.codec.encodeSetConversationStatus(e),r=new on(Ot,i,t),o=yield n.send(r,nt),{code:a,data:h}=o;if(a===s.SUCCESS){const t=h;return e.forEach((e=>{this._conversationManager.addStatus(Object.assign(Object.assign({},e),{updatedTime:t.version}),!0)})),a}return a}return s.RC_NET_CHANNEL_INVALID}))}_joinChrm(e,t,n){return $(this,void 0,void 0,(function*(){const{_channel:i}=this;if(!i)return s.RC_NET_CHANNEL_INVALID;const r=i.codec.encodeJoinOrQuitChatRoom(),o=new on(n?Ct:Rt,r,e),{code:a,data:h}=yield i.send(o);if(a===s.SUCCESS){this._chrmsQueue[e]||(this._chrmsQueue[e]={pulling:!1,queue:[],timestamp:0}),this._pullChrmMsg(e,t);const{kvStorage:n}=this._naviInfo;n&&this._chrmEntryHandler.pullEntry(e,0),this._joinedChrmManager.set(e,t)}return a}))}_rejoinChrm(){return $(this,void 0,void 0,(function*(){const e=this._joinedChrmManager.get();for(const t in e){const n=yield this._joinChrm(t,e[t],!0);n===s.SUCCESS?this._watcher.chatroom({rejoinedRoom:{chatroomId:t,count:e[t]}}):this._watcher.chatroom({rejoinedRoom:{chatroomId:t,errorCode:n}})}}))}_pullChrmMsg(e,t=10){return $(this,void 0,void 0,(function*(){if(!this._channel)return;const n=this._chrmsQueue[e],{pulling:i,timestamp:r}=n;if(i)return;const o=this._channel.codec.encodeChrmSyncMsg(r,t),a=new on(pn[pn.chrmPull],o,e),{code:h,data:l}=yield this._channel.send(a,se,{connectedTime:this._channel.connectedTime,currentUserId:this.currentUserId});if(h!==s.SUCCESS||!l)return void P.warn("pull chatroom msg failed, code:",h,", data:",l);const{list:u,syncTime:c,finished:f}=l;n.timestamp=c,n.pulling=!1,n.queue=n.queue.filter((e=>e>r)),u.forEach((e=>{e.sentTime<r||this._watcher.message(e)})),(!f||n.queue.length>0)&&this._pullChrmMsg(e)}))}joinChatroom(e,t){return $(this,void 0,void 0,(function*(){return this._joinChrm(e,t,!1)}))}joinExistChatroom(e,t){return $(this,void 0,void 0,(function*(){return this._joinChrm(e,t,!0)}))}quitChatroom(e){return $(this,void 0,void 0,(function*(){const{_channel:t}=this;if(!t)return s.RC_NET_CHANNEL_INVALID;const n=t.codec.encodeJoinOrQuitChatRoom(),i=new on(It,n,e),r=yield t.send(i),{code:o}=r;return o===s.SUCCESS&&(delete this._chrmsQueue[e],this._chrmEntryHandler.reset(e),this._joinedChrmManager.remove(e)),o}))}getChatroomInfo(e,t,n){return $(this,void 0,void 0,(function*(){const{_channel:i}=this;if(!i)return{code:s.RC_NET_CHANNEL_INVALID};const r=i.codec.encodeGetChatRoomInfo(t,n),o=new on(pn[pn.queryChrmI],r,e),a=yield i.send(o,Ie),{code:h,data:l}=a;return h!==s.SUCCESS?{code:h}:{code:h,data:l}}))}getChatroomHistoryMessages(e,t,n,i){return $(this,void 0,void 0,(function*(){const{_channel:r}=this;if(!r)return{code:s.RC_NET_CHANNEL_INVALID};const o=r.codec.encodeGetHistoryMsg(e,{timestamp:t,count:n,order:i}),a=new on(Ut,o,e),h=yield r.send(a,ce,{conversation:{targetId:e}}),{code:l}=h,u=h.data;return l!==s.SUCCESS?{code:l}:{code:l,data:{list:u.list,hasMore:u.hasMore}}}))}_modifyChatroomKV(e,t){return $(this,void 0,void 0,(function*(){const{_channel:n,currentUserId:i}=this;if(!n)return s.RC_NET_CHANNEL_INVALID;const r=n.codec.encodeModifyChatRoomKV(e,t,i),o=t.type===G.UPDATE?vt:St,a=new on(o,r,e),h=yield n.send(a),{code:l}=h;return l===s.SUCCESS?(this._chrmEntryHandler.setLocal(e,{kvEntries:[t],syncTime:(new Date).getTime()},i),l):l}))}setChatroomEntry(e,t){return $(this,void 0,void 0,(function*(){return t.type=G.UPDATE,this._modifyChatroomKV(e,t)}))}forceSetChatroomEntry(e,t){return $(this,void 0,void 0,(function*(){return t.type=G.UPDATE,t.isOverwrite=!0,this._modifyChatroomKV(e,t)}))}removeChatroomEntry(e,t){return $(this,void 0,void 0,(function*(){return t.type=G.DELETE,this._modifyChatroomKV(e,t)}))}forceRemoveChatroomEntry(e,t){return $(this,void 0,void 0,(function*(){return t.type=G.DELETE,t.isOverwrite=!0,this._modifyChatroomKV(e,t)}))}getChatroomEntry(e,t){const n=this._chrmEntryHandler.getValue(e,t);return n?Promise.resolve({code:s.SUCCESS,data:n}):Promise.resolve({code:s.CHATROOM_KEY_NOT_EXIST})}getAllChatroomEntry(e){const t=this._chrmEntryHandler.getAll(e);return Promise.resolve({code:s.SUCCESS,data:t})}pullChatroomEntry(e,t){return $(this,void 0,void 0,(function*(){const{_channel:n,currentUserId:i}=this;if(!n)return{code:s.RC_NET_CHANNEL_INVALID};const r=n.codec.encodePullChatRoomKV(t),o=new on(pn[pn.pullKV],r,e),a=yield n.send(o,Ke),{code:h,data:l}=a;if(h===s.SUCCESS){this._chrmEntryHandler.setLocal(e,l,i);const{kvEntries:t}=l,n=[];return t.length>0&&(t.forEach((t=>{const{key:i,value:s,type:r,timestamp:o}=t;n.push({key:i,value:s,type:r,timestamp:o,chatroomId:e})})),this._watcher.chatroom({updatedEntries:n})),{code:h,data:l}}return{code:h}}))}sendMessage(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};n=this._handleMsgProperties(n,!0);const i=!![o.PRIVATE,o.GROUP].includes(e)&&n.isStatusMessage,r=i?(a=e,{[o.PRIVATE]:pn.ppMsgS,[o.GROUP]:pn.pgMsgS}[a]):(e=>({[o.PRIVATE]:pn.ppMsgP,[o.GROUP]:pn.pgMsgP,[o.CHATROOM]:pn.chatMsg,[o.CUSTOMER_SERVICE]:pn.pcMsgP,[o.RTC_ROOM]:pn.prMsgS}[e]))(e)||pn.ppMsgP;var a;const h=this._channel.codec.encodeUpMsg({type:e,targetId:t},n),l=new nn(pn[r],h,t);if(l.setHeaderQos(W.AT_LEAST_ONCE),i)return this._channel.sendOnly(l),{code:s.SUCCESS,data:qn(e,t,Object.assign({},n),"",0,this.currentUserId)};const{code:u,data:c}=yield this._channel.send(l);if(u!==s.SUCCESS)return{code:u};const f=c;this._letterbox.setOutboxTime(f.timestamp,this.currentUserId);const d=qn(e,t,Object.assign({},n),f.messageUId,f.timestamp,this.currentUserId);return this._conversationManager.setConversationCacheByMessage(d,!0),{code:s.SUCCESS,data:d}}))}recallMsg(e,t,n,i,r){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const o={content:{conversationType:e,targetId:t,messageUId:n,sentTime:i,user:r},messageType:"RC:RcCmd"},a=pn[pn.recallMsg],h=this._channel.codec.encodeUpMsg({type:e,targetId:t},o),l=new nn(a,h,this.currentUserId);l.setHeaderQos(W.AT_LEAST_ONCE);const{code:u,data:c}=yield this._channel.send(l);if(u!==s.SUCCESS)return{code:u};const f=c;return{code:s.SUCCESS,data:qn(e,t,Object.assign({},o),f.messageUId,f.timestamp,this.currentUserId)}}))}pullUserSettings(e){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const t=this._channel.codec.encodePullUserSetting(e),n=new on(pn[pn.pullUS],t,this.currentUserId);return this._channel.send(n,ze)}))}getFileToken(e,t){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const n=q(e,t),i=this._channel.codec.encodeGetFileToken(e,n),r=new on(pn[pn.qnTkn],i,this.currentUserId),{code:o,data:a}=yield this._channel.send(r,Ye);return o===s.SUCCESS?{code:o,data:a}:{code:o}}))}getFileUrl(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const i=this._channel.codec.encodeGetFileUrl(e,t,n),r=new on(pn[pn.qnUrl],i,this.currentUserId),{code:o,data:a}=yield this._channel.send(r,He),h=a;return o===s.SUCCESS?{code:o,data:h}:{code:o}}))}disconnect(){this._channel&&(this._channel.close(),this._channel=void 0)}destroy(){throw new Error("JSEngine's method not implemented.")}registerMessageType(e,t,n,i){this._customMessageType[e]={isPersited:t,isCounted:n}}joinRTCRoom(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const i=this._channel.codec.encodeJoinRTCRoom(t,n),r=new on(pn[pn.rtcRJoin_data],i,e);return this._channel.send(r,Se)}))}quitRTCRoom(e){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const t=this._channel.codec.encodeQuitRTCRoom(),n=new on(pn[pn.rtcRExit],t,e),{code:i}=yield this._channel.send(n);return i}))}rtcPing(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const i=this._channel.codec.encodeJoinRTCRoom(t,n),r=new on(pn[pn.rtcPing],i,e),{code:o}=yield this._channel.send(r);return o}))}getRTCRoomInfo(e){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const t=this._channel.codec.encodeGetRTCRoomInfo(),n=new on(pn[pn.rtcRInfo],t,e);return this._channel.send(n,Ve)}))}getRTCUserInfoList(e){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const t=this._channel.codec.encodeGetRTCRoomInfo(),n=new on(pn[pn.rtcUData],t,e),{code:i,data:r}=yield this._channel.send(n,Se);return{code:i,data:r?{users:r.users}:r}}))}setRTCUserInfo(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const i=this._channel.codec.encodeSetRTCUserInfo(t,n),r=new on(pn[pn.rtcUPut],i,e),{code:o}=yield this._channel.send(r);return o}))}removeRTCUserInfo(e,t){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const n=this._channel.codec.encodeRemoveRTCUserInfo(t),i=new nn(pn[pn.rtcUDel],n,e),{code:r}=yield this._channel.send(i);return r}))}setRTCData(e,t,n,i,r,o){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const a=this._channel.codec.encodeSetRTCData(t,n,i,r,o),h=new nn(pn[pn.rtcSetData],a,e),{code:l}=yield this._channel.send(h);return l}))}setRTCTotalRes(e,t,n,i){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const r=this._channel.codec.encodeUserSetRTCData(t,n,i),o=new nn(pn[pn.userSetData],r,e),{code:a}=yield this._channel.send(o);return a}))}getRTCData(e,t,n,i){if(!this._channel)return Promise.resolve({code:s.RC_NET_CHANNEL_INVALID});const r=this._channel.codec.encodeGetRTCData(t,n,i),o=new on(pn[pn.rtcQryData],r,e);return this._channel.send(o,Pe)}removeRTCData(e,t,n,i,r){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const o=this._channel.codec.encodeRemoveRTCData(t,n,i,r),a=new nn(pn[pn.rtcDelData],o,e),{code:h}=yield this._channel.send(a);return h}))}setRTCOutData(e,t,n,i){throw new Error("JSEngine's method not implemented.")}getRTCOutData(e,t){throw new Error("JSEngine's method not implemented.")}getRTCToken(e,t,n){return $(this,void 0,void 0,(function*(){if(!this._channel)return{code:s.RC_NET_CHANNEL_INVALID};const i=this._channel.codec.encodeJoinRTCRoom(t,n),r=new on(pn[pn.rtcToken],i,e);return this._channel.send(r,Ue)}))}setRTCState(e,t){return $(this,void 0,void 0,(function*(){if(!this._channel)return s.RC_NET_CHANNEL_INVALID;const n=this._channel.codec.encodeSetRTCState(t),i=new on(pn[pn.rtcUserState],n,e),{code:r}=yield this._channel.send(i);return r}))}getRTCUserInfo(e){return $(this,void 0,void 0,(function*(){throw new Error("Method not implemented.")}))}getRTCUserList(e){if(!this._channel)return Promise.resolve({code:s.RC_NET_CHANNEL_INVALID});const t=this._channel.codec.encodeGetRTCRoomInfo(),n=new on(pn[pn.rtcUList],t,e);return this._channel.send(n,Se)}}class Gn extends wn{constructor(e,t,n,i,s){super(e,t,n,i),this._cppProtocol=s}connect(e,t){throw new Error("Method not implemented.")}getConnectTime(){throw new Error("Method not implemented.")}getHistoryMessage(e,t,n,i,s){throw new Error("Method not implemented.")}deleteRemoteMessage(e,t,n){throw new Error("Method not implemented.")}recallMsg(e,t,n,i,s){throw new Error("Method not implemented.")}deleteRemoteMessageByTimestamp(e,t,n){throw new Error("Method not implemented.")}getConversationList(e,t,n,i){throw new Error("Method not implemented.")}getConversation(e,t){throw new Error("Method not implemented.")}removeConversation(e,t){throw new Error("Method not implemented.")}getAllConversationUnreadCount(){throw new Error("Method not implemented.")}getConversationUnreadCount(e,t){throw new Error("Method not implemented.")}clearConversationUnreadCount(e,t){throw new Error("Method not implemented.")}saveConversationMessageDraft(e,t,n){throw new Error("Method not implemented.")}getConversationMessageDraft(e,t){throw new Error("Method not implemented.")}clearConversationMessageDraft(e,t){throw new Error("Method not implemented.")}pullConversationStatus(e){throw new Error("Method not implemented.")}batchSetConversationStatus(e){throw new Error("Method not implemented.")}sendMessage(e,t,n){throw new Error("Method not implemented.")}disconnect(){throw new Error("Method not implemented.")}pullUserSettings(e){throw new Error("Method not implemented.")}registerMessageType(e,t,n,i){throw new Error("Method not implemented.")}joinChatroom(e,t){throw new Error("Method not implemented.")}joinExistChatroom(e,t){throw new Error("Method not implemented.")}quitChatroom(e){throw new Error("Method not implemented.")}getChatroomInfo(e,t,n){throw new Error("Method not implemented.")}getChatroomHistoryMessages(e,t,n,i){throw new Error("Method not implemented.")}setChatroomEntry(e,t){throw new Error("Method not implemented.")}forceSetChatroomEntry(e,t){throw new Error("Method not implemented.")}removeChatroomEntry(e,t){throw new Error("Method not implemented.")}forceRemoveChatroomEntry(e,t){throw new Error("Method not implemented.")}getChatroomEntry(e,t){throw new Error("Method not implemented.")}getAllChatroomEntry(e){throw new Error("Method not implemented.")}getFileToken(e,t){throw new Error("Method not implemented.")}getFileUrl(e,t,n){throw new Error("Method not implemented.")}joinRTCRoom(e,t,n){throw new Error("Method not implemented.")}quitRTCRoom(e){throw new Error("Method not implemented.")}rtcPing(e,t,n){throw new Error("Method not implemented.")}getRTCRoomInfo(e){throw new Error("Method not implemented.")}getRTCUserInfoList(e){throw new Error("Method not implemented.")}getRTCUserInfo(e){throw new Error("Method not implemented.")}setRTCUserInfo(e,t,n){throw new Error("Method not implemented.")}removeRTCUserInfo(e,t){throw new Error("Method not implemented.")}setRTCData(e,t,n,i,s,r){throw new Error("Method not implemented.")}setRTCTotalRes(e,t,n,i){throw new Error("Method not implemented.")}getRTCData(e,t,n,i){throw new Error("Method not implemented.")}removeRTCData(e,t,n,i,s){throw new Error("Method not implemented.")}setRTCOutData(e,t,n,i){throw new Error("Method not implemented.")}getRTCOutData(e,t){throw new Error("Method not implemented.")}getRTCToken(e,t,n){throw new Error("Method not implemented.")}setRTCState(e,t){throw new Error("Method not implemented.")}getRTCUserList(e){throw new Error("Method not implemented.")}}var Kn,jn,$n;(Kn=exports.RTCMode||(exports.RTCMode={}))[Kn.RTC=0]="RTC",Kn[Kn.LIVE=2]="LIVE",(jn=exports.LiveType||(exports.LiveType={}))[jn.AUDIO_AND_VIDEO=0]="AUDIO_AND_VIDEO",jn[jn.AUDIO=1]="AUDIO",($n=exports.LiveRole||(exports.LiveRole={}))[$n.ANCHOR=1]="ANCHOR",$n[$n.AUDIENCE=2]="AUDIENCE";const Wn={"RC:VCAccept":"RC:VCAccept","RC:VCRinging":"RC:VCRinging","RC:VCSummary":"RC:VCSummary","RC:VCHangup":"RC:VCHangup","RC:VCInvite":"RC:VCInvite","RC:VCModifyMedia":"RC:VCModifyMedia","RC:VCModifyMem":"RC:VCModifyMem"};var Qn;(Qn=exports.RTCApiType||(exports.RTCApiType={}))[Qn.ROOM=1]="ROOM",Qn[Qn.PERSON=2]="PERSON";class zn{constructor(e){this._context=e}getCoreVersion(){return this._context.coreVersion}getAPIVersion(){return this._context.apiVersion}getAppkey(){return this._context.appkey}getCurrentId(){return this._context.getCurrentUserId()}getConnectionStatus(){return this._context.getConnectionStatus()}sendMessage(e,t,n){return this._context.sendMessage(e,t,n)}registerMessageType(e,t,n,i=[]){this._context.registerMessageType(e,t,n,i)}}class Zn extends zn{getNaviInfo(){return this._context.getInfoFromCache()}joinRTCRoom(e,t,n){return this._context.joinRTCRoom(e,t,n)}quitRTCRoom(e){return this._context.quitRTCRoom(e)}rtcPing(e,t,n){return this._context.rtcPing(e,t,n)}getRTCRoomInfo(e){return this._context.getRTCRoomInfo(e)}getRTCUserInfoList(e){return this._context.getRTCUserInfoList(e)}getRTCUserInfo(e){return this._context.getRTCUserInfo(e)}setRTCUserInfo(e,t,n){return this._context.setRTCUserInfo(e,t,n)}removeRTCUserInfo(e,t){return this._context.removeRTCUserInfo(e,t)}setRTCData(e,t,n,i,s,r){return this._context.setRTCData(e,t,n,i,s,r)}setRTCTotalRes(e,t,n,i){return this._context.setRTCTotalRes(e,t,n,i)}getRTCData(e,t,n,i){return this._context.getRTCData(e,t,n,i)}removeRTCData(e,t,n,i,s){return this._context.removeRTCData(e,t,n,i,s)}setRTCOutData(e,t,n,i){return this._context.setRTCOutData(e,t,n,i)}getRTCOutData(e,t){return this._context.getRTCOutData(e,t)}getRTCToken(e,t,n){return this._context.getRTCToken(e,t,n)}setRTCState(e,t){return this._context.setRTCState(e,t)}getRTCUserList(e){return this._context.getRTCUserList(e)}}function Jn(e){return Object.assign({},e)}class Xn{constructor(e,t){this._runtime=e,this._token="",this._pluginContextQueue=[],this.coreVersion="0.1.0",this._connectionStatus=gn.DISCONNECTED,this._watcher={message:void 0,conversationState:void 0,chatroomState:void 0,connectionState:void 0,rtcInnerWatcher:void 0,expansion:void 0},this._options=Object.assign({},t),this.appkey=this._options.appkey,this.apiVersion=this._options.apiVersion;const{isEnterPrise:n,appkey:i,miniCMPProxy:s,apiVersion:r,connectionType:o}=this._options;if("electron"===e.tag&&!this._options.cppProtocol){const e="cppProtocol is required";throw P.error(e),new Error(e)}if(n&&0===this._options.navigators.length){const e="private navigators is required";throw P.error(e),new Error(e)}if(this._options.navigators=this._options.navigators.filter((e=>/^https?:\/\//.test(e))),0===this._options.navigators.length){if(n){const e="navi urls is invalid";throw P.error(e),new Error(e)}this._options.navigators.push(...T)}this._navi=new Sn(e,i,this._options.navigators,s,r,o);const a={status:this._connectionStatusListener.bind(this),message:this._messageReceiver.bind(this),chatroom:this._chatroomInfoListener.bind(this),conversation:this._conversationInfoListener.bind(this),expansion:this._expansionInfoListener.bind(this)};this._engine="electron"===e.tag?new Gn(e,i,a,r,this._options.cppProtocol):new Hn(e,i,a,r)}static init(e,t){return P.debug("APIContext.init =>",t.appkey,t.navigators),this._context?(P.error("Repeat initialize!"),this._context):(this._context=new Xn(e,t),this._context)}static destroy(){this._context&&(this._context._destroy(),this._context=void 0)}install(e,t){const n="RCRTC"===e.tag?new Zn(this):new zn(this);let i=null;try{if(!e.verify(this._runtime))return null;i=e.setup(n,this._runtime,t)}catch(e){P.error("install plugin error!\n",e)}return i&&this._pluginContextQueue.push(n),i}_connectionStatusListener(e){var t;this._connectionStatus=e,(null===(t=this._watcher.rtcInnerWatcher)||void 0===t?void 0:t.status)&&this._watcher.rtcInnerWatcher.status(e),this._pluginContextQueue.forEach((t=>{t.onconnectionstatechange&&t.onconnectionstatechange(e)})),this._watcher.connectionState&&this._watcher.connectionState(e)}_messageReceiver(e){(e.conversationType===o.RTC_ROOM||Object.prototype.hasOwnProperty.call(Wn,e.messageType))&&this._watcher.rtcInnerWatcher&&this._watcher.rtcInnerWatcher.message?this._watcher.rtcInnerWatcher.message(Jn(e)):this._pluginContextQueue.some((t=>{if(!t.onmessage)return!1;try{return t.onmessage(Jn(e))}catch(e){return P.error("plugin error =>",e),!1}}))||this._watcher.message&&this._watcher.message(Jn(e))}_chatroomInfoListener(e){this._watcher.chatroomState&&this._watcher.chatroomState(e)}_conversationInfoListener(e){this._watcher.conversationState&&this._watcher.conversationState(e)}_expansionInfoListener(e){this._watcher.expansion&&this._watcher.expansion(e)}assignWatcher(e){Object.keys(this._watcher).forEach((t=>{if(Object.prototype.hasOwnProperty.call(e,t)){const n=e[t];this._watcher[t]=p(n)||d(n)?n:void 0}}))}getConnectedTime(){return this._engine.connectedTime}getCurrentUserId(){return this._engine.currentUserId}getConnectionStatus(){return this._connectionStatus}connect(e,t=!1){return $(this,void 0,void 0,(function*(){if(this._connectionStatus===gn.CONNECTED)return{code:s.SUCCESS,userId:this._engine.currentUserId};if(this._connectionStatus===gn.CONNECTING)return{code:s.BIZ_ERROR_CONNECTING};if("string"!=typeof e||0===e.length)return{code:s.RC_CONN_USER_OR_PASSWD_ERROR};this._token=e;const n=e.split("@"),i=n[1]?n[1].split(";").map((e=>/^https?:/.test(e)?e:"https://"+e)):[],r=yield this._navi.getInfo(this._getTokenWithoutNavi(),i,t);if(!r)return{code:s.RC_NAVI_RESOURCE_ERROR};const o=yield this._engine.connect(this._getTokenWithoutNavi(),r,this._options.connectionType);return o===s.SUCCESS&&1===r.openUS&&this._pullUserSettings(),{code:o,userId:this._engine.currentUserId}}))}getConnectTime(){return this._engine.getConnectTime()}_pullUserSettings(){return $(this,void 0,void 0,(function*(){}))}disconnect(){return this._engine.disconnect(),this._pluginContextQueue.forEach((e=>{if(e.ondisconnect)try{e.ondisconnect()}catch(e){P.error("plugin error =>",e)}})),Promise.resolve()}reconnect(){return this.connect(this._getTokenWithoutNavi())}_getTokenWithoutNavi(){return this._token.replace(/@.+$/,"@")}getInfoFromCache(){return this._navi.getInfoFromCache(this._getTokenWithoutNavi())}registerMessageType(e,t,n,i=[]){this._engine.registerMessageType(e,t,n,i)}sendMessage(e,t,n){return((e,t="utf-8")=>{let n,i=0;if("utf-16"===t)for(let t=0,s=e.length;t<s;t++)n=e.charCodeAt(t),i+=n<=65535?2:4;else for(let t=0,s=e.length;t<s;t++)n=e.charCodeAt(t),i+=n<127?1:n<=2047?2:n<=65535?3:4;return i})(JSON.stringify(n.content))>131072?Promise.resolve({code:s.RC_MSG_CONTENT_EXCEED_LIMIT}):this._engine.sendMessage(e,t,n)}sendExpansionMessage(e){return $(this,void 0,void 0,(function*(){let{conversationType:t,targetId:n,messageUId:i,keys:r,expansion:o,originExpansion:a,removeAll:h,canIncludeExpansion:l}=e;if(!l)return{code:s.MESSAGE_KV_NOT_SUPPORT};let u=!1,c=!1;if(d(o)){a=a||{};const e=Object.keys(o).length,t=Object.assign(a,o);u=Object.keys(t).length>300||e>20;for(const e in o){const t=o[e];u=e.length>32||t.length>64,c=!/^[A-Za-z0-9_=+-]+$/.test(e)}}if(u)return{code:s.EXPANSION_LIMIT_EXCEET};if(c)return{code:s.BIZ_ERROR_INVALID_PARAMETER};const f={mid:i};o&&(f.put=o),r&&(f.del=r),h&&(f.removeAll=1);const{code:g}=yield this._engine.sendMessage(t,n,{content:f,messageType:gt.EXPANSION_NOTIFY});return{code:g}}))}_destroy(){this._watcher={},this._engine.disconnect(),this._pluginContextQueue.forEach((e=>{if(e.ondestroy)try{e.ondestroy()}catch(e){P.error("plugin error =>",e)}})),this._pluginContextQueue.length=0}getHistoryMessage(e,t,n=0,i=20,s=0){return this._engine.getHistoryMessage(e,t,n,i,s)}getConversationList(e=300,t,n,i){return this._engine.getConversationList(e,t,n,i)}removeConversation(e,t){return this._engine.removeConversation(e,t)}clearUnreadCount(e,t){return this._engine.clearConversationUnreadCount(e,t)}getUnreadCount(e,t){return this._engine.getConversationUnreadCount(e,t)}getTotalUnreadCount(){return this._engine.getAllConversationUnreadCount()}setConversationStatus(e,t,n,i){const s=[{conversationType:e,targetId:t,isTop:n,notificationStatus:i}];return this._engine.batchSetConversationStatus(s)}saveConversationMessageDraft(e,t,n){return this._engine.saveConversationMessageDraft(e,t,n)}getConversationMessageDraft(e,t){return this._engine.getConversationMessageDraft(e,t)}clearConversationMessageDraft(e,t){return this._engine.clearConversationMessageDraft(e,t)}recallMessage(e,t,n,i,s){return this._engine.recallMsg(e,t,n,i,s)}deleteRemoteMessage(e,t,n){return this._engine.deleteRemoteMessage(e,t,n)}deleteRemoteMessageByTimestamp(e,t,n){return this._engine.deleteRemoteMessageByTimestamp(e,t,n)}joinChatroom(e,t=10){return this._engine.joinChatroom(e,t)}joinExistChatroom(e,t=10){return this._engine.joinExistChatroom(e,t)}quitChatroom(e){return this._engine.quitChatroom(e)}getChatroomInfo(e,t=0,n=0){return this._engine.getChatroomInfo(e,t,n)}setChatroomEntry(e,t){return this._engine.setChatroomEntry(e,t)}forceSetChatroomEntry(e,t){return this._engine.forceSetChatroomEntry(e,t)}removeChatroomEntry(e,t){return this._engine.removeChatroomEntry(e,t)}forceRemoveChatroomEntry(e,t){return this._engine.forceRemoveChatroomEntry(e,t)}getChatroomEntry(e,t){return this._engine.getChatroomEntry(e,t)}getAllChatroomEntries(e){return this._engine.getAllChatroomEntry(e)}getChatRoomHistoryMessages(e,t=20,n=0,i=0){return this._engine.getChatroomHistoryMessages(e,i,t,n)}getFileToken(e,t){return $(this,void 0,void 0,(function*(){const n=this.getInfoFromCache(),i=(null==n?void 0:n.bosAddr)||"",r=(null==n?void 0:n.uploadServer)||"",{code:o,data:a}=yield this._engine.getFileToken(e,t);return o===s.SUCCESS?Promise.resolve(Object.assign(a,{bos:i,qiniu:r})):Promise.reject(o)}))}getFileUrl(e,t,n,i){return $(this,void 0,void 0,(function*(){if(null==i?void 0:i.isBosRes)return Promise.resolve(i);const{code:r,data:o}=yield this._engine.getFileUrl(e,t,n);return r===s.SUCCESS?Promise.resolve(o):Promise.reject(r)}))}joinRTCRoom(e,t,n){return this._engine.joinRTCRoom(e,t,n)}quitRTCRoom(e){return this._engine.quitRTCRoom(e)}rtcPing(e,t,n){return this._engine.rtcPing(e,t,n)}getRTCRoomInfo(e){return this._engine.getRTCRoomInfo(e)}getRTCUserInfoList(e){return this._engine.getRTCUserInfoList(e)}getRTCUserInfo(e){return this._engine.getRTCUserInfo(e)}setRTCUserInfo(e,t,n){return this._engine.setRTCUserInfo(e,t,n)}removeRTCUserInfo(e,t){return this._engine.removeRTCUserInfo(e,t)}setRTCData(e,t,n,i,s,r){return this._engine.setRTCData(e,t,n,i,s,r)}setRTCTotalRes(e,t,n,i){return this._engine.setRTCTotalRes(e,t,n,i)}getRTCData(e,t,n,i){return this._engine.getRTCData(e,t,n,i)}removeRTCData(e,t,n,i,s){return this._engine.removeRTCData(e,t,n,i,s)}setRTCOutData(e,t,n,i){return this._engine.setRTCOutData(e,t,n,i)}getRTCOutData(e,t){return this._engine.getRTCOutData(e,t)}getRTCToken(e,t,n){return this._engine.getRTCToken(e,t,n)}setRTCState(e,t){return this._options.isEnterPrise?Promise.resolve(s.SUCCESS):this._engine.setRTCState(e,t)}getRTCUserList(e){return this._engine.getRTCUserList(e)}}exports.APIContext=Xn,exports.AppStorage=N,exports.CallLibMsgType=Wn,exports.CometChannel=class extends Kt{constructor(e,t){super("comet",t),this._runtime=e,this._messageIds={},this._syncMessageIds={},this._idCount=0,this._generateMessageId=()=>++this._idCount,this._pid=encodeURIComponent((new Date).getTime()+Math.random()+"")}handleCometRes(e){if(200!==e.status&&202!==e.status)return!1;const t=h(e.data)?JSON.parse(e.data):e.data;return t?!u(t)||(k(t,(e=>$(this,void 0,void 0,(function*(){const{sessionid:t}=e;t&&(this._sessionid=t);const n=(e=>{const t=e.headerCode,n=new J(t),i=ln(n);for(const t in e)i[t]=e[t];return i})(e),{messageId:i,_header:s,status:r,identifier:o}=n,a=s&&s.qos!==W.AT_MOST_ONCE,h=mn(i,o);if(i&&n.getIdentifier){const e=this._messageIds[h];e&&e(n),this._syncMessageIds[h]&&this._syncMessageIds[h](n)}if(a){if(n instanceof tn&&!n.syncMsg){const e=new rn(i);this.sendOnly(e)}if(n instanceof hn){const e=new an(i);this.sendOnly(e)}}if(n instanceof zt){const e=1===r?gn.KICKED_OFFLINE_BY_OTHER_CLIENT:2===r?gn.BLOCKED:r;this._watcher.status(e)}if(n instanceof tn){const{syncMsg:e,topic:t}=n;if(!e||yn(t))return this._watcher.signal(n),!1;const i=yield new Promise((e=>{this._syncMessageIds[h]=e}));delete this._syncMessageIds[h],this._watcher.signal(n,i)}})))),!0):(P.warn("received data is not a validJson",t),!1)}_startPullSignal(e){return $(this,void 0,void 0,(function*(){const t=(new Date).getTime(),n=`${e}://${this._domain}/pullmsg.js?sessionid=${this._sessionid}&timestrap=${t}&pid=${this._pid}`,i=yield this._runtime.httpReq({url:n,body:{pid:this._pid},timeout:45e3}),s=this.handleCometRes(i);this._isDisconnected||(s?this._startPullSignal(e):(this._watcher.status(gn.NETWORK_UNAVAILABLE),this.close()))}))}connect(e,t,n,i,r){return $(this,void 0,void 0,(function*(){r=Kt.matchVersion(r),this._protocol=i,this._isDisconnected=!1,this._watcher.status(gn.CONNECTING);const o=yield En(n,i,this._runtime);if(0===o.length)return P.error("No valid websocket server hosts!"),s.RC_SOCKET_NOT_CREATED;const a=e=>(200===e.status||202===e.status)&&(!!e.data&&((e=>{if(d(e))return!0;let t=!1;try{const n=JSON.parse(e);t=JSON.stringify(n)===e}catch(e){t=!1}return t})(e.data)?d(e.data)?e.data:JSON.parse(e.data):(P.warn("received data is not a validJson",e.data),!1)));for(let n=0,s=o.length;n<s;n+=1){const s=_n(i,o[n],e,t,this._runtime,r,this._pid),h=a(yield this._runtime.httpReq({url:s,body:{pid:this._pid},timeout:5e3}));if(this._domain=o[n],h&&0===h.status)return this._watcher.status(gn.CONNECTED),this._sessionid=h.sessionid,this._startPullSignal(i),this.userId=h.userId,this.connectedTime=h.timestamp,h.status}return s.RC_NET_UNAVAILABLE}))}sendCometData(e,t=3e4){return $(this,void 0,void 0,(function*(){const{_domain:t,_sessionid:n,_pid:i}=this,{messageId:s,topic:r,targetId:o,identifier:a}=e,h=e.getHeaderFlag();let l;l=r?`${this._protocol}://${t}/websocket?messageid=${s}&header=${h}&sessionid=${n}&topic=${r}&targetid=${o}&pid=${i}`:`${this._protocol}://${t}/websocket?messageid=${s}&header=${h}&sessionid=${n}&pid=${i}`;const u=yield this._runtime.httpReq({url:l,method:exports.HttpMethod.POST,body:e.getCometData()});this.handleCometRes(u)}))}sendOnly(e){this.sendCometData(e)}send(e,t,n,i=3e4){return $(this,void 0,void 0,(function*(){const r=this._generateMessageId();e.messageId=r,this.sendCometData(e);const{identifier:o}=e,a=yield new Promise((e=>{const t=mn(r,o);this._messageIds[t]=e,setTimeout((()=>{delete this._messageIds[t],e()}),i)}));if(!a)return{code:s.TIMEOUT};if(0!==a.status)return{code:a.status};const h=t?this.codec.decodeByPBName(a.data,t,n):a;return{code:s.SUCCESS,data:h}}))}close(){this._isDisconnected=!0,this._watcher.status(gn.DISCONNECTED)}},exports.ConnectResultCode=cn,exports.ConnectionStatus=gn,exports.ConversationType=o,exports.DelayTimer=j,exports.ErrorCode=s,exports.FileType=a,exports.Logger=U,exports.MentionedType=ft,exports.MessageDirection=Ht,exports.MessageType=gt,exports.NotificationStatus=pt,exports.PluginContext=zn,exports.RCAssertError=x,exports.RTCPluginContext=Zn,exports.ReceivedStatus=t,exports.WebSocketChannel=class extends Kt{constructor(e,t){super("websocket",t),this._runtime=e,this._socket=null,this._messageIds={},this._syncMessageIds={},this._failedCount=0,this.ALLOW_FAILED_TIMES=4,this._idCount=0,this._generateMessageId=()=>(this._idCount>=65535&&(this._idCount=0),++this._idCount)}connect(e,t,n,i,r){return $(this,void 0,void 0,(function*(){r=Kt.matchVersion(r),this._watcher.status(gn.CONNECTING);const o=yield En(n,i,this._runtime);if(0===o.length)return P.error("No valid websocket server hosts!"),s.RC_SOCKET_NOT_CREATED;const a=i.replace("http","ws");for(let n=0,i=o.length;n<i;n+=1){const i=_n(a,o[n],e,t,this._runtime,r),h=this._runtime.createWebSocket(i),l=e=>{this._socket===h&&(this._socket=null,this._watcher.status(e))},u=yield new Promise((e=>{h.onMessage((t=>{if("[object ArrayBuffer]"!==Object.prototype.toString.call(t))return void P.warn("Socket received invalid data:",t);const n=un(t);if(n instanceof Jt&&this._pingResolve)return this._pingResolve(s.SUCCESS),void(this._pingResolve=void 0);if(P.debug("Websocket <==",n),n instanceof Qt)return n.status!==cn.ACCEPTED?(P.error("Websocket connAck status:",n.status),void e(n.status)):(this.connectedTime=n.timestamp,this.userId=n.userId||"",void e(s.SUCCESS));if(n instanceof zt){const{status:e}=n,t=1===e?gn.KICKED_OFFLINE_BY_OTHER_CLIENT:2===e?gn.BLOCKED:e;this._watcher.status(t)}else this._onReceiveSignal(n)})),h.onClose(((t,n)=>{P.warn("websocket closed! code:",t,"reason:",n),l(gn.CONNECTION_CLOSED),e(t)})),h.onError((t=>{P.error("websocket error!",t),l(gn.WEBSOCKET_ERROR),e(s.NETWORK_ERROR)})),h.onOpen((()=>P.debug("websocket open =>",i))),setTimeout((()=>{e(s.TIMEOUT)}),5e3)}));if(u===s.SUCCESS)return this._socket=h,this._checkAlive(),this._watcher.status(gn.CONNECTED),u;h.close()}return s.RC_NET_UNAVAILABLE}))}_checkAlive(){var e;return $(this,void 0,void 0,(function*(){if(!this._socket)return;this.sendOnly(new Zt);(yield new Promise((e=>{this._pingResolve=e,setTimeout((()=>{this._pingResolve=void 0,e(s.TIMEOUT)}),3e4)})))!==s.SUCCESS&&++this._failedCount>=this.ALLOW_FAILED_TIMES?null===(e=this._socket)||void 0===e||e.close():(this._failedCount=0,setTimeout((()=>this._checkAlive()),3e4))}))}_onReceiveSignal(e){return $(this,void 0,void 0,(function*(){const{messageId:t,identifier:n}=e;e.header&&e.header.qos!==W.AT_MOST_ONCE&&(e instanceof tn&&!e.syncMsg&&this.sendOnly(new rn(t)),e instanceof hn&&this.sendOnly(new an(t)));const i=mn(t,n);if(t>0){const t=this._messageIds[i];t&&t(e),this._syncMessageIds[i]&&this._syncMessageIds[i](e)}if(e instanceof tn){const{syncMsg:t,topic:n}=e;if(!t||yn(n))return void this._watcher.signal(e);const s=yield new Promise((e=>{this._syncMessageIds[i]=e}));delete this._syncMessageIds[i],this._watcher.signal(e,s)}}))}sendOnly(e){this._socket&&Tn(e,this._socket)}send(e,t,n,i=3e4){return $(this,void 0,void 0,(function*(){if(this._socket){const r=this._generateMessageId();e.messageId=r;const o=e.identifier;Tn(e,this._socket);const a=yield new Promise((e=>{const t=mn(r,o);this._messageIds[t]=e,setTimeout((()=>{delete this._messageIds[t],e()}),i)}));if(!a)return{code:s.TIMEOUT};if(0!==a.status)return{code:a.status};const h=t?this.codec.decodeByPBName(a.data,t,n):a;return{code:s.SUCCESS,data:h}}return{code:s.RC_NET_CHANNEL_INVALID}}))}close(){this._socket&&(this._socket.close(),this._socket=null,this._watcher.status(gn.DISCONNECTED))}},exports.appendUrl=(e,t)=>{if(e=e.replace(/\?$/,""),!t)return e;const n=Object.keys(t).map((e=>`${e}=${t[e]}`)).filter((e=>!!e));return n.length?[e,n.join("&")].join("?"):e},exports.assert=(e,t,n,i=!1)=>{if(!V(e,t,n,i))throw new x(e+" is invalid.")},exports.forEach=k,exports.getUploadFileName=q,exports.indexOf=F,exports.isArray=u,exports.isArrayBuffer=c,exports.isFunction=p,exports.isHttpUrl=e=>h(e)&&/https?:\/\//.test(e),exports.isInObject=Y,exports.isInclude=(e,t)=>-1!==F(e,t),exports.isNull=_,exports.isNumber=l,exports.isObject=d,exports.isString=h,exports.isUndefined=E,exports.isValidConversationType=e=>l(e)&&Object.prototype.hasOwnProperty.call(o,e),exports.isValidFileType=e=>l(e)&&Object.prototype.hasOwnProperty.call(a,e),exports.map=B,exports.notEmptyArray=e=>u(e)&&e.length>0,exports.notEmptyObject=m,exports.notEmptyString=f,exports.todo=e=>new O(e),exports.validate=V;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1606186787856, function(require, module, exports) {
/**
 * @rongcloud/engine
 * Version: v0.1.0
 * CommitId: 535393139458d1b8d7dc5d2b8d49803a2a30e278
 * Date: Tue Nov 24 2020 15:05:10 GMT+0800 (GMT+08:00)
 * ©2020 RongCloud, Inc. All rights reserved.
 */


Object.defineProperty(exports, '__esModule', { value: true });

var ReceivedStatus;
(function (ReceivedStatus) {
    /**
     * 已读
    */
    ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
    /**
     * 已听
    */
    ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
    /**
     * 已下载
    */
    ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
    /**
     * 该消息已经被其他登录的多端收取过。( 即该消息已经被其他端收取过后。当前端才登录，并重新拉取了这条消息。客户可以通过这个状态更新 UI，比如不再提示 )
    */
    ReceivedStatus[ReceivedStatus["RETRIEVED"] = 8] = "RETRIEVED";
    /**
     * 未读
    */
    ReceivedStatus[ReceivedStatus["UNREAD"] = 0] = "UNREAD";
})(ReceivedStatus || (ReceivedStatus = {}));
var ReceivedStatus$1 = ReceivedStatus;

const randomNum = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
};
const getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

var ErrorCode;
(function (ErrorCode) {
    /** 超时 */
    ErrorCode[ErrorCode["TIMEOUT"] = -1] = "TIMEOUT";
    /**
     * 未知原因失败。
     */
    ErrorCode[ErrorCode["UNKNOWN"] = -2] = "UNKNOWN";
    /** 参数错误 */
    ErrorCode[ErrorCode["PARAMETER_ERROR"] = -3] = "PARAMETER_ERROR";
    /**
     * 成功
     */
    ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
    ErrorCode[ErrorCode["RC_MSG_UNAUTHORIZED"] = 20406] = "RC_MSG_UNAUTHORIZED";
    /**
     * 群组 Id 无效
     */
    ErrorCode[ErrorCode["RC_DISCUSSION_GROUP_ID_INVALID"] = 20407] = "RC_DISCUSSION_GROUP_ID_INVALID";
    /**
     * 发送频率过快
     */
    ErrorCode[ErrorCode["SEND_FREQUENCY_TOO_FAST"] = 20604] = "SEND_FREQUENCY_TOO_FAST";
    /**
     * 不在讨论组。
     */
    ErrorCode[ErrorCode["NOT_IN_DISCUSSION"] = 21406] = "NOT_IN_DISCUSSION";
    /**
     * 群组被禁言
     */
    ErrorCode[ErrorCode["FORBIDDEN_IN_GROUP"] = 22408] = "FORBIDDEN_IN_GROUP";
    ErrorCode[ErrorCode["RECALL_MESSAGE"] = 25101] = "RECALL_MESSAGE";
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
    /**
     * 聊天室 KV 设置超出最大值(已满, 默认最多设置 100 个)
     */
    ErrorCode[ErrorCode["CHATROOM_KV_EXCEED"] = 23423] = "CHATROOM_KV_EXCEED";
    /**
     * 聊天室 KV 设置失败(kv 已存在, 需覆盖设置)
     */
    ErrorCode[ErrorCode["CHATROOM_KV_OVERWRITE_INVALID"] = 23424] = "CHATROOM_KV_OVERWRITE_INVALID";
    /**
     * 聊天室 KV 存储功能没有开通
     */
    ErrorCode[ErrorCode["CHATROOM_KV_STORE_NOT_OPEN"] = 23426] = "CHATROOM_KV_STORE_NOT_OPEN";
    /**
     * 聊天室Key不存在
     */
    ErrorCode[ErrorCode["CHATROOM_KEY_NOT_EXIST"] = 23427] = "CHATROOM_KEY_NOT_EXIST";
    /**
     * 敏感词屏蔽
     */
    ErrorCode[ErrorCode["SENSITIVE_SHIELD"] = 21501] = "SENSITIVE_SHIELD";
    ErrorCode[ErrorCode["SENSITIVE_REPLACE"] = 21502] = "SENSITIVE_REPLACE";
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
     * JSON 后的消息体超限, 目前最大 128kb
     */
    ErrorCode[ErrorCode["RC_MSG_CONTENT_EXCEED_LIMIT"] = 30016] = "RC_MSG_CONTENT_EXCEED_LIMIT";
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
     * websocket 鉴权失败，通常为连接后未及时发送 Ping 或接收到 Pong
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
    /**
     * 扩展存储 key value 超出限制 (错误码与移动端对齐)
    */
    ErrorCode[ErrorCode["EXPANSION_LIMIT_EXCEET"] = 34010] = "EXPANSION_LIMIT_EXCEET";
    /**
     * 消息不支持扩展 (错误码与移动端对齐)
    */
    ErrorCode[ErrorCode["MESSAGE_KV_NOT_SUPPORT"] = 34008] = "MESSAGE_KV_NOT_SUPPORT";
    ErrorCode[ErrorCode["CLEAR_HIS_TIME_ERROR"] = 34011] = "CLEAR_HIS_TIME_ERROR";
    ErrorCode[ErrorCode["CONVER_GET_ERROR"] = 34009] = "CONVER_GET_ERROR";
    /**
     * 群组信息异常
     */
    ErrorCode[ErrorCode["GROUP_SYNC_ERROR"] = 35001] = "GROUP_SYNC_ERROR";
    /**
     * 匹配群信息异常
     */
    ErrorCode[ErrorCode["GROUP_MATCH_ERROR"] = 35002] = "GROUP_MATCH_ERROR";
    // 聊天室异常
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
    /**
     * 聊天室 kv 未找到
     */
    ErrorCode[ErrorCode["CHATROOM_KV_NOT_FOUND"] = 36004] = "CHATROOM_KV_NOT_FOUND";
    // 黑名单异常
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
    // VOIP close
    ErrorCode[ErrorCode["VOIPCLOSE"] = 24016] = "VOIPCLOSE";
    ErrorCode[ErrorCode["CLOSE_BEFORE_OPEN"] = 51001] = "CLOSE_BEFORE_OPEN";
    ErrorCode[ErrorCode["ALREADY_IN_USE"] = 51002] = "ALREADY_IN_USE";
    ErrorCode[ErrorCode["INVALID_CHANNEL_NAME"] = 51003] = "INVALID_CHANNEL_NAME";
    ErrorCode[ErrorCode["VIDEO_CONTAINER_IS_NULL"] = 51004] = "VIDEO_CONTAINER_IS_NULL";
    /**
     * 删除消息数组长度为 0 .
     */
    ErrorCode[ErrorCode["DELETE_MESSAGE_ID_IS_NULL"] = 61001] = "DELETE_MESSAGE_ID_IS_NULL";
    /**
     * 己方取消已发出的通话请求
     */
    ErrorCode[ErrorCode["CANCEL"] = 1] = "CANCEL";
    /**
     * 己方拒绝收到的通话请求
     */
    ErrorCode[ErrorCode["REJECT"] = 2] = "REJECT";
    /**
     * 己方挂断
     */
    ErrorCode[ErrorCode["HANGUP"] = 3] = "HANGUP";
    /**
     * 己方忙碌
     */
    ErrorCode[ErrorCode["BUSYLINE"] = 4] = "BUSYLINE";
    /**
     * 己方未接听
     */
    ErrorCode[ErrorCode["NO_RESPONSE"] = 5] = "NO_RESPONSE";
    /**
     * 己方不支持当前引擎
     */
    ErrorCode[ErrorCode["ENGINE_UN_SUPPORTED"] = 6] = "ENGINE_UN_SUPPORTED";
    /**
     * 己方网络出错
     */
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 7] = "NETWORK_ERROR";
    /**
     * 对方取消已发出的通话请求
     */
    ErrorCode[ErrorCode["REMOTE_CANCEL"] = 11] = "REMOTE_CANCEL";
    /**
     * 对方拒绝收到的通话请求
     */
    ErrorCode[ErrorCode["REMOTE_REJECT"] = 12] = "REMOTE_REJECT";
    /**
     * 通话过程对方挂断
     */
    ErrorCode[ErrorCode["REMOTE_HANGUP"] = 13] = "REMOTE_HANGUP";
    /**
     * 对方忙碌
     */
    ErrorCode[ErrorCode["REMOTE_BUSYLINE"] = 14] = "REMOTE_BUSYLINE";
    /**
     * 对方未接听
     */
    ErrorCode[ErrorCode["REMOTE_NO_RESPONSE"] = 15] = "REMOTE_NO_RESPONSE";
    /**
     * 对方网络错误
     */
    ErrorCode[ErrorCode["REMOTE_ENGINE_UN_SUPPORTED"] = 16] = "REMOTE_ENGINE_UN_SUPPORTED";
    /**
     * 对方网络错误
     */
    ErrorCode[ErrorCode["REMOTE_NETWORK_ERROR"] = 17] = "REMOTE_NETWORK_ERROR";
    /**
     * VoIP 不可用
     */
    ErrorCode[ErrorCode["VOIP_NOT_AVALIABLE"] = 18] = "VOIP_NOT_AVALIABLE";
})(ErrorCode || (ErrorCode = {}));
var ErrorCode$1 = ErrorCode;

/**
 * 会话类型
 */
var ConversationType;
(function (ConversationType) {
    /**
     * 无类型
     */
    ConversationType[ConversationType["NONE"] = 0] = "NONE";
    /**
     * 单聊
     */
    ConversationType[ConversationType["PRIVATE"] = 1] = "PRIVATE";
    /**
     * 讨论组
     */
    ConversationType[ConversationType["DISCUSSION"] = 2] = "DISCUSSION";
    /**
     * 群组聊天
     */
    ConversationType[ConversationType["GROUP"] = 3] = "GROUP";
    /**
     * 聊天室会话
     */
    ConversationType[ConversationType["CHATROOM"] = 4] = "CHATROOM";
    /**
     * 客服会话
     */
    ConversationType[ConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
    /**
     * 系统消息
     */
    ConversationType[ConversationType["SYSTEM"] = 6] = "SYSTEM";
    /**
     * 默认关注的公众号会话类型（MC)
     */
    ConversationType[ConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
    /**
     * 需手动关注的公众号会话类型（MP)
     */
    ConversationType[ConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    /**
     * RTCLib 特有的会话类型
     */
    ConversationType[ConversationType["RTC_ROOM"] = 12] = "RTC_ROOM";
})(ConversationType || (ConversationType = {}));
var ConversationType$1 = ConversationType;

/**
 * 文件类型
 */
var FileType;
(function (FileType) {
    /**
     * 图片文件
     */
    FileType[FileType["IMAGE"] = 1] = "IMAGE";
    /**
     * 声音文件
     */
    FileType[FileType["AUDIO"] = 2] = "AUDIO";
    /**
     * 视频文件
     */
    FileType[FileType["VIDEO"] = 3] = "VIDEO";
    /**
     * 非媒体文件
     */
    FileType[FileType["FILE"] = 4] = "FILE";
})(FileType || (FileType = {}));
var FileType$1 = FileType;

/**
 * 检查参数是否为字符串
 * 只做类型检查，不做长度检查，故当字符串长度为 0，结果依然为 true
 * @param str
 */
const isString = (value) => typeof value === 'string';
/**
 * 检查参数是否为 number 数据
 * @param value
 */
const isNumber = (value) => typeof value === 'number' && !isNaN(value);
/**
 * 检查参数是否为数组
 * 只做类型检查，不做长度检查
 * 如 UnitArray、BufferArray 等也属于数组
 * @param arr
 */
const isArray = (arr) => Object.prototype.toString.call(arr).indexOf('Array') !== -1;
/**
 * 检查参数是否为 ArrayBuffer
 * @param arr
 */
const isArrayBuffer = (arr) => Object.prototype.toString.call(arr) === '[object ArrayBuffer]';
/**
 * 检查参数是否为长度非 0 的字符串
 * @param str
 */
const notEmptyString = (str) => isString(str) && str.length > 0;
/**
 * 检查参数是否为长度非 0 的数组
 * @param str
 */
const notEmptyArray = (arr) => isArray(arr) && arr.length > 0;
/**
 * 检查参数是否为对象
 * @param val
 */
const isObject = (val) => {
    return Object.prototype.toString.call(val) === '[object Object]';
};
/**
 * 检查参数是否为函数
 * @param val
 */
const isFunction = (val) => {
    return Object.prototype.toString.call(val) === '[object Function]';
};
/**
 * 检查参数是否为undefined
 * @param val
 */
const isUndefined = (val) => {
    // IE 下 undefined 为 Object
    return val === undefined || Object.prototype.toString.call(val) === '[object Undefined]';
};
/**
 * 检查参数是否为 null
*/
const isNull = (val) => {
    return Object.prototype.toString.call(val) === '[object Null]';
};
/**
 * 检查参数是否为有效 http(s) 协议 url
 * @param value
 */
const isHttpUrl = (value) => isString(value) && /https?:\/\//.test(value);
/**
 * 检查对象不为空
 * @param val
*/
const notEmptyObject = (val) => {
    for (const key in val) {
        return true;
    }
    return false;
};
const isValidConversationType = (conversation) => {
    return isNumber(conversation) && Object.prototype.hasOwnProperty.call(ConversationType$1, conversation);
};
/**
 * 判断是否是一个有效的文件类型
 */
const isValidFileType = (fileType) => {
    return isNumber(fileType) && Object.prototype.hasOwnProperty.call(FileType$1, fileType);
};

const timerSetTimeout = (fun, itv) => {
    return setTimeout(fun, itv);
};
const int64ToTimestamp = (obj) => {
    if (!isObject(obj) || obj.low === undefined || obj.high === undefined) {
        return obj;
    }
    let low = obj.low;
    if (low < 0) {
        low += 0xffffffff + 1;
    }
    low = low.toString(16);
    const timestamp = parseInt(obj.high.toString(16) + '00000000'.replace(new RegExp('0{' + low.length + '}$'), low), 16);
    return timestamp;
};
const batchInt64ToTimestamp = (data) => {
    for (const key in data) {
        if (isObject(data[key])) {
            data[key] = int64ToTimestamp(data[key]);
        }
    }
    return data;
};
const formatDate = (seperator) => {
    seperator = seperator || '-';
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}${seperator}${month}${seperator}${day}`;
};

/**
 * Navi 缓存数据有效时长，单位毫秒
 */
const NAVI_CACHE_DURATION = 2 * 60 * 60 * 1000;
/**
 * 单个 Navi 请求的超时时间，单位毫秒
 */
const NAVI_REQ_TIMEOUT = 10 * 1000;
/**
 * /ping?r= 请求的超时时间，单位毫秒
 */
const PING_REQ_TIMEOUT = 5 * 1000;
/**
 * WebSocket 建立连接超时时间，单位毫秒
 */
const WEB_SOCKET_TIMEOUT = 5 * 1000;
/**
 * 公有云 Navi 请求地址
 */
const PUBLIC_CLOUD_NAVI_URIS = ['https://nav.cn.ronghub.com', 'https://nav2-cn.ronghub.com'];
/**
 * 小程序 websocket 连接地址
 */
const MINI_SOCKET_CONNECT_URIS = ['wsproxy.cn.ronghub.com', 'wsap-cn.ronghub.com'];
/**
 * 小程序 长轮询 连接地址
 */
const MINI_COMET_CONNECT_URIS = ['cometproxy-cn.ronghub.com', 'mini-cn.ronghub.com'];
/**
 * IM 接口超时时间，单位毫秒
 */
const IM_SIGNAL_TIMEOUT = 30 * 1000;
/**
 * IM Ping 间隔时间，单位毫秒
 */
const IM_PING_INTERVAL_TIME = 30 * 1000;
/**
 * 消息 content 内容尺寸限制：128 KB
 */
const MAX_MESSAGE_CONTENT_BYTES = 128 * 1024;
/**
 * IM Comet 发送 pullmsg(嗅探 + 等待信令) 超时时间 45s
 */
const IM_COMET_PULLMSG_TIMEOUT = 45000;
/**
 * storage key 使用的前缀
*/
const STORAGE_ROOT_KEY = 'RCV4-';
/*
 * 内置消息的配置项. 发消息时, objectName 匹配到以下项时, 将覆盖用户传入值
 * 内置消息文档: https://docs.rongcloud.cn/im/introduction/message_structure/#inherent
*/
const SEND_MESSAGE_TYPE_OPTION = {
    // 存储且计数
    'RC:TxtMsg': { isCounted: true, isPersited: true },
    'RC:ImgMsg': { isCounted: true, isPersited: true },
    'RC:VcMsg': { isCounted: true, isPersited: true },
    'RC:ImgTextMsg': { isCounted: true, isPersited: true },
    'RC:FileMsg': { isCounted: true, isPersited: true },
    'RC:HQVCMsg': { isCounted: true, isPersited: true },
    'RC:LBSMsg': { isCounted: true, isPersited: true },
    'RC:PSImgTxtMsg': { isCounted: true, isPersited: true },
    'RC:PSMultiImgTxtMsg': { isCounted: true, isPersited: true },
    'RCJrmf:RpMsg': { isCounted: true, isPersited: true },
    'RCJrmf:RpOpendMsg': { isCounted: true, isPersited: true },
    'RC:CombineMsg': { isCounted: true, isPersited: true },
    'RC:ReferenceMsg': { isCounted: true, isPersited: true },
    // 只存储 不计数
    'RC:InfoNtf': { isCounted: false, isPersited: true },
    'RC:ContactNtf': { isCounted: false, isPersited: true },
    'RC:ProfileNtf': { isCounted: false, isPersited: true },
    'RC:CmdNtf': { isCounted: false, isPersited: true },
    'RC:GrpNtf': { isCounted: false, isPersited: true },
    'RC:RcCmd': { isCounted: false, isPersited: true },
    // 不存储 只计数 - 目前无
    // 不存储 不计数
    'RC:CmdMsg': { isCounted: false, isPersited: false },
    'RC:TypSts': { isCounted: false, isPersited: false },
    'RC:PSCmd': { isCounted: false, isPersited: false },
    'RC:SRSMsg': { isCounted: false, isPersited: false },
    'RC:RRReqMsg': { isCounted: false, isPersited: false },
    'RC:RRRspMsg': { isCounted: false, isPersited: false },
    'RC:CsChaR': { isCounted: false, isPersited: false },
    'RC:CSCha': { isCounted: false, isPersited: false },
    'RC:CsEva': { isCounted: false, isPersited: false },
    'RC:CsContact': { isCounted: false, isPersited: false },
    'RC:CsHs': { isCounted: false, isPersited: false },
    'RC:CsHsR': { isCounted: false, isPersited: false },
    'RC:CsSp': { isCounted: false, isPersited: false },
    'RC:CsEnd': { isCounted: false, isPersited: false },
    'RC:CsUpdate': { isCounted: false, isPersited: false },
    'RC:ReadNtf': { isCounted: false, isPersited: false },
    'RC:chrmKVNotiMsg': { isCounted: false, isPersited: false },
    'RC:VCAccept': { isCounted: false, isPersited: false },
    'RC:VCRinging': { isCounted: false, isPersited: false },
    'RC:VCSummary': { isCounted: false, isPersited: false },
    'RC:VCHangup': { isCounted: false, isPersited: false },
    'RC:VCInvite': { isCounted: false, isPersited: false },
    'RC:VCModifyMedia': { isCounted: false, isPersited: false },
    'RC:VCModifyMem': { isCounted: false, isPersited: false },
    'RC:MsgExMsg': { isCounted: false, isPersited: false }
};

let rootStorage;
const createRootStorage = (runtime) => {
    if (!rootStorage) {
        rootStorage = {
            set: (key, val) => {
                runtime.localStorage.setItem(key, JSON.stringify(val));
            },
            get: (key) => {
                let val;
                try {
                    val = JSON.parse(runtime.localStorage.getItem(key));
                }
                catch (e) {
                    val = null;
                }
                return val;
            },
            remove: (key) => {
                return runtime.localStorage.removeItem(key);
            },
            getKeys: () => {
                const keys = [];
                for (const key in runtime.localStorage) {
                    keys.push(key);
                }
                return keys;
            }
        };
    }
    return rootStorage;
};
class AppCache {
    constructor(value) {
        this._caches = {};
        if (value) {
            this._caches = value;
        }
    }
    set(key, value) {
        this._caches[key] = value;
    }
    remove(key) {
        const val = this.get(key);
        delete this._caches[key];
        return val;
    }
    get(key) {
        return this._caches[key];
    }
    getKeys() {
        const keys = [];
        for (const key in this._caches) {
            keys.push(key);
        }
        return keys;
    }
}
class AppStorage {
    constructor(runtime, suffix) {
        const key = suffix ? `${STORAGE_ROOT_KEY}${suffix}` : STORAGE_ROOT_KEY;
        this._rootStorage = createRootStorage(runtime);
        const localCache = this._rootStorage.get(key) || {};
        this._cache = new AppCache({
            [key]: localCache
        });
        this._storageKey = key;
    }
    _get() {
        const key = this._storageKey;
        return this._cache.get(key) || {};
    }
    _set(cache) {
        const key = this._storageKey;
        cache = cache || {};
        this._cache.set(key, cache);
        this._rootStorage.set(key, cache);
    }
    set(key, value) {
        const localValue = this._get();
        localValue[key] = value;
        this._set(localValue);
    }
    remove(key) {
        const localValue = this._get();
        delete localValue[key];
        this._set(localValue);
    }
    clear() {
        const key = this._storageKey;
        this._rootStorage.remove(key);
        this._cache.remove(key);
    }
    get(key) {
        const localValue = this._get();
        return localValue[key];
    }
    getKeys() {
        const localValue = this._get();
        const keyList = [];
        for (const key in localValue) {
            keyList.push(key);
        }
        return keyList;
    }
    getValues() {
        return this._get() || {};
    }
}

class Todo extends Error {
    constructor(message) {
        super(`TODO => ${message}`);
    }
}
const todo = (message) => new Todo(message);

/**
 * 字符串转为大写形式并返回
 * @todo 违反单一性原则，后续需分拆，以及需要评估是否过渡封装
 * @param str
 * @param startIndex 开始位置
 * @param endIndex 结束位置
*/
const toUpperCase = (str, startIndex, endIndex) => {
    if (startIndex === undefined || endIndex === undefined) {
        return str.toUpperCase();
    }
    const sliceStr = str.slice(startIndex, endIndex);
    str = str.replace(sliceStr, (text) => {
        return text.toUpperCase();
    });
    return str;
};
const getByteLength = (str, charset = 'utf-8') => {
    let total = 0;
    let chatCode;
    if (charset === 'utf-16') {
        for (let i = 0, max = str.length; i < max; i++) {
            chatCode = str.charCodeAt(i);
            if (chatCode <= 0xffff) {
                total += 2;
            }
            else {
                total += 4;
            }
        }
    }
    else {
        for (let i = 0, max = str.length; i < max; i++) {
            chatCode = str.charCodeAt(i);
            if (chatCode < 0x007f) {
                total += 1;
            }
            else if (chatCode <= 0x07ff) {
                total += 2;
            }
            else if (chatCode <= 0xffff) {
                total += 3;
            }
            else {
                total += 4;
            }
        }
    }
    return total;
};
const appendUrl = (url, query) => {
    url = url.replace(/\?$/, '');
    if (!query) {
        return url;
    }
    const searchArr = Object.keys(query).map(key => `${key}=${query[key]}`).filter(item => !!item);
    if (searchArr.length) {
        return [url, searchArr.join('&')].join('?');
    }
    return url;
};

(function (LogLevel) {
    /**
     * 等同于 `LogLevel.DEBUG`
     */
    LogLevel[LogLevel["LOG"] = 0] = "LOG";
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(exports.LogLevel || (exports.LogLevel = {}));

const methods = {
    [exports.LogLevel.DEBUG]: console.debug.bind(console),
    [exports.LogLevel.INFO]: console.info.bind(console),
    [exports.LogLevel.WARN]: console.warn.bind(console),
    [exports.LogLevel.ERROR]: console.error.bind(console)
};
class Logger {
    constructor(_tag) {
        this._tag = _tag;
        /**
         * 输出等级
         */
        this._outLevel = exports.LogLevel.WARN;
        /**
         * 输出函数
         */
        this._stdout = this._defaultStdout;
        this.log = this._out;
        this.debug = this._out.bind(this, exports.LogLevel.DEBUG);
        this.info = this._out.bind(this, exports.LogLevel.INFO);
        this.warn = this._out.bind(this, exports.LogLevel.WARN);
        this.error = this._out.bind(this, exports.LogLevel.ERROR);
    }
    /**
     * 默认输出函数
     * @param level
     * @param args
     */
    _defaultStdout(level, ...args) {
        methods[level](`[${this._tag}](${new Date().toUTCString()}):`, ...args);
    }
    _out(level, ...args) {
        level >= this._outLevel && this._stdout(level, ...args);
    }
    /**
     * 设置默认输出等级及输出函数
     * @param outLevel
     * @param stdout
     */
    set(outLevel, stdout) {
        this._outLevel = outLevel;
        this._stdout = stdout || this._defaultStdout;
    }
}
const logger = new Logger('RCLog');

(function (AssertRules) {
    /**
     * 类型为字符串，且长度大于 0
     */
    AssertRules[AssertRules["STRING"] = 0] = "STRING";
    /**
     * 类型仅为 String
    */
    AssertRules[AssertRules["ONLY_STRING"] = 1] = "ONLY_STRING";
    /**
     * 类型为数字
     */
    AssertRules[AssertRules["NUMBER"] = 2] = "NUMBER";
    /**
     * 类型为布尔值
     */
    AssertRules[AssertRules["BOOLEAN"] = 3] = "BOOLEAN";
    /**
     * 类型为对象
    */
    AssertRules[AssertRules["OBJECT"] = 4] = "OBJECT";
    /**
     * 类型为数组
    */
    AssertRules[AssertRules["ARRAY"] = 5] = "ARRAY";
    /**
     * 类型为 callback 回调对象，包含 callback.onSuccess、callback.onError
    */
    AssertRules[AssertRules["CALLBACK"] = 6] = "CALLBACK";
})(exports.AssertRules || (exports.AssertRules = {}));
const validators = {
    [exports.AssertRules.STRING]: notEmptyString,
    [exports.AssertRules.ONLY_STRING]: isString,
    [exports.AssertRules.NUMBER]: isNumber,
    [exports.AssertRules.BOOLEAN]: (value) => typeof value === 'boolean',
    [exports.AssertRules.OBJECT]: isObject,
    [exports.AssertRules.ARRAY]: isArray,
    [exports.AssertRules.CALLBACK]: (callback) => {
        let flag = true;
        if (!isObject(callback)) {
            flag = false;
        }
        callback = callback || {};
        if (callback.onSuccess && !isFunction(callback.onSuccess)) {
            flag = false;
        }
        if (callback.onError && !isFunction(callback.onError)) {
            flag = false;
        }
        return flag;
    }
};
class RCAssertError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RCAssertError';
    }
}
/**
 * 参数校验，该方法用于对业务层入参数据检查，及时抛出异常通知业务层进行修改
 * @description
 * 1. 必填参数，value 需符合 validator 验证规，否则抛出异常
 * 2. 非必填参数，value 可为 undefined | null 或符合 validator 规则
 * @param key 字段名，仅用于验证失败时给出提示信息
 * @param value 待验证的值
 * @param validator 期望类型或校验规则函数，若使用规则函数
 * @param required 是否为必填参数，默认为 `false`
 */
const assert = (key, value, validator, required = false) => {
    if (!validate(key, value, validator, required)) {
        throw new RCAssertError(`${key} is invalid.`);
    }
};
/**
 * 参数校验，该方法用于对业务层入参数据检查，与 `assert` 函数不同的是其返回 boolean 值而非直接抛出异常
 * @description
 * 1. 必填参数，value 需符合 validator 验证规，否则抛出异常
 * 2. 非必填参数，value 可为 undefined | null 或符合 validator 规则
 * @param key 字段名，仅用于验证失败时给出提示信息
 * @param value 待验证的值
 * @param validator 期望类型或校验规则函数，若使用规则函数
 * @param required 是否为必填参数，默认为 `false`
 */
const validate = (key, value, validator, required = false) => {
    validator = validators[validator] || validator;
    const invalid = 
    // 必填参数校验
    (required && !validator(value)) ||
        // 非必填参数校验
        (!required && !(isUndefined(value) || value === null || validator(value)));
    if (invalid) {
        // 打印无效参数到控制台便于定位问题
        const msg = `${key} is invalid.`;
        logger.error(msg);
    }
    return !invalid;
};

/**
 * @todo 后期禁用此方法，容易滥用，且会丢失上下文的数据类型跟踪
 * @deprecated
 * @param source
 * @param event
 * @param options
 */
const forEach = (source, event, options) => {
    options = options || {};
    event = event || function () { };
    const { isReverse } = options;
    const loopObj = () => {
        for (const key in source) {
            event(source[key], key, source);
        }
    };
    const loopArr = () => {
        if (isReverse) {
            for (let i = source.length - 1; i >= 0; i--) {
                event(source[i], i);
            }
        }
        else {
            for (let j = 0, len = source.length; j < len; j++) {
                event(source[j], j);
            }
        }
    };
    if (isObject(source)) {
        loopObj();
    }
    if (isArray(source) || isString(source)) {
        loopArr();
    }
};
/**
 * @deprecated
 * @param source
 * @param event
 */
const map = (source, event) => {
    forEach(source, (item, index) => {
        source[index] = event(item, index);
    });
    return source;
};
const indexOf = (source, searchVal) => {
    // 注: 字符串的 indexof 兼容至 IE3
    if (source.indexOf) {
        return source.indexOf(searchVal);
    }
    let index = -1;
    forEach(source, (sub, i) => {
        if (searchVal === sub) {
            index = i;
        }
    });
    return index;
};
const isInclude = (source, searchVal) => {
    const index = indexOf(source, searchVal);
    return index !== -1;
};
/**
 * 判断对象里是否有某个值
*/
const isInObject = (source, searchVal) => {
    const arr = [];
    forEach(source, (val) => {
        arr.push(val);
    });
    const index = indexOf(arr, searchVal);
    return index !== -1;
};
const getUploadFileName = (type, fileName) => {
    const random = Math.floor((Math.random() * 1000) % 10000);
    const uuid = getUUID();
    const date = formatDate();
    const timestamp = new Date().getTime();
    let extension = '';
    if (fileName) {
        const fileNameArr = fileName.split('.');
        extension = '.' + fileNameArr[fileNameArr.length - 1];
    }
    return `${type}__RC-${date}_${random}_${timestamp}${uuid}${extension}`;
};

/**
 *  聊天室 kv 存储操作类型. 对方操作, 己方收到消息(RC:chrmKVNotiMsg)中会带入此值. 根据此值判断是删除还是更新
*/
var ChatroomEntryType;
(function (ChatroomEntryType) {
    ChatroomEntryType[ChatroomEntryType["UPDATE"] = 1] = "UPDATE";
    ChatroomEntryType[ChatroomEntryType["DELETE"] = 2] = "DELETE";
})(ChatroomEntryType || (ChatroomEntryType = {}));
var ChatroomEntryType$1 = ChatroomEntryType;

/**
 * 通过 status 计算接收到的消息的部分属性值
 * @description
 * status 转为二进制, 二进制的比特位存储消息的部分属性值
 * 属性所占比特位:
 * 0000-0010 该消息是否曾被该用户拉取过(其他端)
 * 0001-0000 isPersited
 * 0010-0000 isCounted
 * 0100-0000 isMentioned
 * 0010-0000-0000 disableNotification
 * 0100-0000-0000 canIncludeExpansion
*/
const getMessageOptionByStatus = (status) => {
    let isPersited = true;
    let isCounted = true;
    let isMentioned = false;
    let disableNotification = false;
    let receivedStatus = ReceivedStatus$1.READ;
    let isReceivedByOtherClient = false;
    let canIncludeExpansion = false;
    isPersited = !!(status & 0x10);
    isCounted = !!(status & 0x20);
    isMentioned = !!(status & 0x40);
    disableNotification = !!(status & 0x100);
    isReceivedByOtherClient = !!(status & 0x02);
    receivedStatus = isReceivedByOtherClient ? ReceivedStatus$1.RETRIEVED : receivedStatus;
    canIncludeExpansion = !!(status & 0x400);
    return {
        isPersited,
        isCounted,
        isMentioned,
        disableNotification,
        receivedStatus,
        canIncludeExpansion
    };
};
/**
 * 通过 sessionId 计算发送消息成功后，发送消息的部分属性
 * @description
 * sessionId 转为二进制, 二进制的比特位存储消息的部分属性值
 * 属性所占比特位:
 * 0000-0001 isPersited
 * 0000-0010 isCounted
 * 0000-0100 isMentioned
 * 0010-0000 disableNotification
 * 0100-0000 canIncludeExpansion
*/
const getUpMessageOptionBySessionId = (sessionId) => {
    let isPersited = false;
    let isCounted = false;
    let disableNotification = false;
    let canIncludeExpansion = false;
    isPersited = !!(sessionId & 0x01);
    isCounted = !!(sessionId & 0x02);
    disableNotification = !!(sessionId & 0x10);
    canIncludeExpansion = !!(sessionId & 0x40);
    return {
        isPersited,
        isCounted,
        disableNotification,
        canIncludeExpansion
    };
};
const formatExtraContent = (extraContent) => {
    const expansion = {}; // 扩展为用户任意设置的键值对
    const parseExtraContent = JSON.parse(extraContent);
    forEach(parseExtraContent, (value, key) => {
        expansion[key] = value.v;
    });
    return expansion;
};
/**
 * TODO: 确定对外暴露的必要性
 * @deprecated
 */
const DelayTimer = {
    _delayTime: 0,
    /**
     * 方法并未引用，getTimer 实际返回值始终为 Date.now()
     * @deprecated
     */
    setTime: (time) => {
        const currentTime = new Date().getTime();
        DelayTimer._delayTime = currentTime - time;
    },
    getTime: () => {
        const delayTime = DelayTimer._delayTime;
        const currentTime = new Date().getTime();
        return currentTime - delayTime;
    }
};
const getChatRoomKVByStatus = (status) => {
    const isDeleteOpt = !!(status & 0x0004);
    return {
        isAutoDelete: !!(status & 0x0001),
        isOverwrite: !!(status & 0x0002),
        type: isDeleteOpt ? ChatroomEntryType$1.DELETE : ChatroomEntryType$1.UPDATE
    };
};
const getChatRoomKVOptStatus = (entity, action) => {
    let status = 0;
    // 是否自动清理
    if (entity.isAutoDelete) {
        status = status | 0x0001;
    }
    // 是否覆盖
    if (entity.isOverwrite) {
        status = status | 0x0002;
    }
    // 操作类型
    if (action === 2) {
        status = status | 0x0004;
    }
    return status;
};
const getSessionId = (option) => {
    const { isStatusMessage } = option;
    let { isPersited, isCounted, isMentioned, disableNotification, canIncludeExpansion } = option;
    if (isStatusMessage) {
        isPersited = isCounted = false;
    }
    let sessionId = 0;
    if (isPersited) {
        sessionId = sessionId | 0x01;
    }
    if (isCounted) {
        sessionId = sessionId | 0x02;
    }
    if (isMentioned) {
        sessionId = sessionId | 0x04;
    }
    if (disableNotification) {
        sessionId = sessionId | 0x20;
    }
    if (canIncludeExpansion) {
        sessionId = sessionId | 0x40;
    }
    return sessionId;
};

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

/**
 * 通信协议中 fixHeader 第一个字节中的 Qos 数据标识
 * ```
 * fixHeader：command(4 bit) | dup(1 bit) | Qos(2 bit) | retain(1 bit)
 * ```
 */
var QOS;
(function (QOS) {
    QOS[QOS["AT_MOST_ONCE"] = 0] = "AT_MOST_ONCE";
    QOS[QOS["AT_LEAST_ONCE"] = 1] = "AT_LEAST_ONCE";
    QOS[QOS["EXACTLY_ONCE"] = 2] = "EXACTLY_ONCE";
    QOS[QOS["DEFAULT"] = 3] = "DEFAULT";
})(QOS || (QOS = {}));
/**
 * 通信协议中 fixHeader 第一个字节中的 command 数据标识，用于判断操作类型
 * ```
 * fixHeader：command(4 bit) | dup(1 bit) | Qos(2 bit) | retain(1 bit)
 * ```
 */
var OperationType;
(function (OperationType) {
    /** 私有云专用，解密协商指令 */
    OperationType[OperationType["SYMMETRIC"] = 0] = "SYMMETRIC";
    /** 连接请求 */
    OperationType[OperationType["CONNECT"] = 1] = "CONNECT";
    /** 连接应答 */
    OperationType[OperationType["CONN_ACK"] = 2] = "CONN_ACK";
    /** 上行发送消息 */
    OperationType[OperationType["PUBLISH"] = 3] = "PUBLISH";
    /** 上行发送消息的应答 */
    OperationType[OperationType["PUB_ACK"] = 4] = "PUB_ACK";
    /** 上行拉消息 */
    OperationType[OperationType["QUERY"] = 5] = "QUERY";
    /** 上行拉消息的应答 */
    OperationType[OperationType["QUERY_ACK"] = 6] = "QUERY_ACK";
    /** QueryConfirm */
    OperationType[OperationType["QUERY_CONFIRM"] = 7] = "QUERY_CONFIRM";
    OperationType[OperationType["SUBSCRIBE"] = 8] = "SUBSCRIBE";
    OperationType[OperationType["SUB_ACK"] = 9] = "SUB_ACK";
    OperationType[OperationType["UNSUBSCRIBE"] = 10] = "UNSUBSCRIBE";
    OperationType[OperationType["UNSUB_ACK"] = 11] = "UNSUB_ACK";
    OperationType[OperationType["PING_REQ"] = 12] = "PING_REQ";
    OperationType[OperationType["PING_RESP"] = 13] = "PING_RESP";
    /** 连接挂断 */
    OperationType[OperationType["DISCONNECT"] = 14] = "DISCONNECT";
    OperationType[OperationType["RESERVER2"] = 15] = "RESERVER2";
})(OperationType || (OperationType = {}));
var MessageName;
(function (MessageName) {
    MessageName["CONN_ACK"] = "ConnAckMessage";
    MessageName["DISCONNECT"] = "DisconnectMessage";
    MessageName["PING_REQ"] = "PingReqMessage";
    MessageName["PING_RESP"] = "PingRespMessage";
    MessageName["PUBLISH"] = "PublishMessage";
    MessageName["PUB_ACK"] = "PubAckMessage";
    MessageName["QUERY"] = "QueryMessage";
    MessageName["QUERY_CON"] = "QueryConMessage";
    MessageName["QUERY_ACK"] = "QueryAckMessage";
})(MessageName || (MessageName = {}));
var IDENTIFIER;
(function (IDENTIFIER) {
    IDENTIFIER["PUB"] = "pub";
    IDENTIFIER["QUERY"] = "qry";
})(IDENTIFIER || (IDENTIFIER = {}));

/**
 * @todo 注释补全
 * @description
 * Header 处理
*/
class Header {
    constructor(type, retain = false, qos = QOS.AT_LEAST_ONCE, dup = false) {
        this._retain = false;
        this.qos = QOS.AT_LEAST_ONCE;
        this._dup = false;
        this.syncMsg = false;
        const isPlusType = type > 0; // 是否为正数
        if (type && isPlusType && arguments.length === 1) {
            this._retain = (type & 1) > 0;
            this.qos = (type & 6) >> 1; // (_type & 0b110) >> 1
            this._dup = (type & 8) > 0; // (_type & 0b1000) > 0
            this.type = (type >> 4) & 15; // (_type >> 0b100) & 0b1111
            this.syncMsg = (type & 8) === 8; // (_type & 0b1000) === 0b1000;
        }
        else {
            this.type = type;
            this._retain = retain;
            this.qos = qos;
            this._dup = dup;
        }
    }
    encode() {
        // const validQosList = [QOS.AT_MOST_ONCE, QOS.AT_LEAST_ONCE, QOS.EXACTLY_ONCE, QOS.DEFAULT]
        // // 如果 qos 为字符串, 此处转为数字
        // for (let i = 0; i < validQosList.length; i++) {
        //   if (this.qos === validQosList[i]) {
        //     this.qos = validQosList[i]
        //   }
        // }
        let byte = (this.type << 4); // 4 -> 100
        byte |= this._retain ? 1 : 0;
        byte |= this.qos << 1;
        byte |= this._dup ? 8 : 0; // 8 -> 1000
        return byte;
    }
}
/**
 * @description
 * 二进制处理
*/
class BinaryHelper {
    /**
     * @description
     * 将字符串转化为 utf8 编码组成的数组
     * @param {string} str 待转化的字符串
     * @param {boolean} isGetBytes 是否向前插入字符长度
     */
    static writeUTF(str, isGetBytes) {
        const back = [];
        let byteSize = 0;
        if (isString(str)) {
            for (let i = 0, len = str.length; i < len; i++) {
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
        }
        for (let i = 0, len = back.length; i < len; i++) {
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
    }
    /**
     * @description
     * 获取二进制字节流的 utf8 编码结果
     * @param {Array<number>} arr 二进制数据
     */
    static readUTF(arr) {
        const MAX_SIZE = 0x4000;
        const codeUnits = [];
        let highSurrogate;
        let lowSurrogate;
        let index = -1;
        const strBytes = arr;
        let result = '';
        while (++index < strBytes.length) {
            var codePoint = Number(strBytes[index]);
            if (codePoint === (codePoint & 0x7F)) ;
            else if ((codePoint & 0xF0) === 0xF0) {
                codePoint ^= 0xF0;
                codePoint = (codePoint << 6) | (strBytes[++index] ^ 0x80);
                codePoint = (codePoint << 6) | (strBytes[++index] ^ 0x80);
                codePoint = (codePoint << 6) | (strBytes[++index] ^ 0x80);
            }
            else if ((codePoint & 0xE0) === 0xE0) {
                codePoint ^= 0xE0;
                codePoint = (codePoint << 6) | (strBytes[++index] ^ 0x80);
                codePoint = (codePoint << 6) | (strBytes[++index] ^ 0x80);
            }
            else if ((codePoint & 0xC0) === 0xC0) {
                codePoint ^= 0xC0;
                codePoint = (codePoint << 6) | (strBytes[++index] ^ 0x80);
            }
            if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || Math.floor(codePoint) !== codePoint) {
                throw RangeError('Invalid code point: ' + codePoint);
            }
            if (codePoint <= 0xFFFF) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                highSurrogate = (codePoint >> 10) | 0xD800;
                lowSurrogate = (codePoint % 0x400) | 0xDC00;
                codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === strBytes.length || codeUnits.length > MAX_SIZE) {
                result += String.fromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    }
}
/**
 * @description
 * 融云读取二进制数据
*/
class RongStreamReader {
    constructor(arr) {
        // 当前流已截取到的位置
        this._position = 0;
        // 待处理数据的总长度
        this._poolLen = 0;
        this._pool = arr;
        this._poolLen = arr.length;
    }
    check() {
        return this._position >= this._pool.length;
    }
    /**
     * 读 4 位
     */
    readInt() {
        const self = this;
        if (self.check()) {
            return -1;
        }
        let end = '';
        for (let i = 0; i < 4; i++) {
            let t = self._pool[self._position++].toString(16);
            if (t.length === 1) {
                t = '0' + t;
            }
            end += t.toString();
        }
        return parseInt(end, 16);
    }
    /**
     * 读 8 位
     */
    readLong() {
        const self = this;
        if (self.check()) {
            return -1;
        }
        let end = '';
        for (let i = 0; i < 8; i++) {
            let t = self._pool[self._position++].toString(16);
            if (t.length === 1) {
                t = '0' + t;
            }
            end += t;
        }
        return parseInt(end, 16);
    }
    /**
     * 读 1 位
     */
    readByte() {
        if (this.check()) {
            return -1;
        }
        let val = this._pool[this._position++];
        if (val > 255) {
            val &= 255;
        }
        return val;
    }
    /**
     * 获取数据
     */
    readUTF() {
        if (this.check()) {
            return '';
        }
        const big = (this.readByte() << 8) | this.readByte();
        const pool = this._pool.subarray(this._position, this._position += big);
        return BinaryHelper.readUTF(pool);
    }
    /**
     * 读剩余的所有值
     */
    readAll() {
        return this._pool.subarray(this._position, this._poolLen);
    }
}
/**
 * @description
 * 融云写入二进制数据
*/
class RongStreamWriter {
    constructor() {
        // 待处理的数据, 由 server 直接抛出的数据
        this._pool = [];
        // 当前流已截取到的位置
        this._position = 0;
        // 当前流写入的多少字节
        this._writen = 0;
    }
    /**
     * 写入缓存区, writen 值往后移
     */
    write(byte) {
        // todo
        if (Object.prototype.toString.call(byte).indexOf('Array') !== -1) {
            this._pool = this._pool.concat(byte);
        }
        else if (byte >= 0) {
            if (byte > 255) {
                byte &= 255;
            }
            this._pool.push(byte);
            this._writen++;
        }
        return byte;
    }
    writeArr(byte) {
        this._pool = this._pool.concat(byte);
        return byte;
    }
    // PENDING. 用于 ConnectMessage, 暂未知此消息用途
    // writeChat(v: number) {
    //   if (+v != v) {
    //     throw new Error("writeChar:arguments type is error");
    //   }
    //   this.write(v >> 8 & 255);
    //   this.write(v & 255);
    //   this.writen += 2;
    // }
    writeUTF(str) {
        const val = BinaryHelper.writeUTF(str);
        this._pool = this._pool.concat(val);
        this._writen += val.length;
    }
    // PENDING. 暂仅知道 write 时使用, 此时 this.poolLen 为 0, 调用无意义
    // toComplements(): any {
    //   var _tPool = this.pool;
    //   for (var i = 0; i < this.poolLen; i++) {
    //     if (_tPool[i] > 128) {
    //       _tPool[i] -= 256;
    //     }
    //   }
    //   return _tPool;
    // }
    getBytesArray() {
        return this._pool;
    }
}

var PBName = {
    UpStreamMessage: 'UpStreamMessage',
    DownStreamMessage: 'DownStreamMessage',
    DownStreamMessages: 'DownStreamMessages',
    SessionsAttQryInput: 'SessionsAttQryInput',
    SessionsAttOutput: 'SessionsAttOutput',
    SyncRequestMsg: 'SyncRequestMsg',
    ChrmPullMsg: 'ChrmPullMsg',
    NotifyMsg: 'NotifyMsg',
    HistoryMsgInput: 'HistoryMsgInput',
    HistoryMsgOuput: 'HistoryMsgOuput',
    RelationQryInput: 'RelationQryInput',
    RelationsOutput: 'RelationsOutput',
    DeleteSessionsInput: 'DeleteSessionsInput',
    SessionInfo: 'SessionInfo',
    DeleteSessionsOutput: 'DeleteSessionsOutput',
    RelationsInput: 'RelationsInput',
    DeleteMsgInput: 'DeleteMsgInput',
    CleanHisMsgInput: 'CleanHisMsgInput',
    SessionMsgReadInput: 'SessionMsgReadInput',
    ChrmInput: 'ChrmInput',
    QueryChatRoomInfoInput: 'QueryChatRoomInfoInput',
    QueryChatRoomInfoOutput: 'QueryChatRoomInfoOutput',
    RtcInput: 'RtcInput',
    RtcUserListOutput: 'RtcUserListOutput',
    SetUserStatusInput: 'SetUserStatusInput',
    RtcSetDataInput: 'RtcSetDataInput',
    RtcUserSetDataInput: 'RtcUserSetDataInput',
    RtcDataInput: 'RtcDataInput',
    RtcSetOutDataInput: 'RtcSetOutDataInput',
    MCFollowInput: 'MCFollowInput',
    RtcTokenOutput: 'RtcTokenOutput',
    RtcQryOutput: 'RtcQryOutput',
    RtcQryUserOutDataInput: 'RtcQryUserOutDataInput',
    RtcUserOutDataOutput: 'RtcUserOutDataOutput',
    RtcQueryListInput: 'RtcQueryListInput',
    RtcRoomInfoOutput: 'RtcRoomInfoOutput',
    RtcValueInfo: 'RtcValueInfo',
    RtcKeyDeleteInput: 'RtcKeyDeleteInput',
    GetQNupTokenInput: 'GetQNupTokenInput',
    GetQNupTokenOutput: 'GetQNupTokenOutput',
    GetQNdownloadUrlInput: 'GetQNdownloadUrlInput',
    GetQNdownloadUrlOutput: 'GetQNdownloadUrlOutput',
    SetChrmKV: 'SetChrmKV',
    ChrmKVOutput: 'ChrmKVOutput',
    QueryChrmKV: 'QueryChrmKV',
    SetUserSettingInput: 'SetUserSettingInput',
    SetUserSettingOutput: 'SetUserSettingOutput',
    PullUserSettingInput: 'PullUserSettingInput',
    PullUserSettingOutput: 'PullUserSettingOutput',
    UserSettingNotification: 'UserSettingNotification',
    SessionReq: 'SessionReq',
    SessionStates: 'SessionStates',
    SessionState: 'SessionState',
    SessionStateItem: 'SessionStateItem',
    SessionStateModifyReq: 'SessionStateModifyReq',
    SessionStateModifyResp: 'SessionStateModifyResp' // 修改会话状态回执
};

const SSMsg = {
    [PBName.UpStreamMessage]: ['sessionId', 'classname', 'content', 'pushText', 'userId', 'configFlag', 'appData', 'extraContent'],
    [PBName.DownStreamMessages]: ['list', 'syncTime', 'finished'],
    [PBName.DownStreamMessage]: ['fromUserId', 'type', 'groupId', 'classname', 'content', 'dataTime', 'status', 'msgId', 'extraContent'],
    [PBName.SessionsAttQryInput]: ['nothing'],
    [PBName.SessionsAttOutput]: ['inboxTime', 'sendboxTime', 'totalUnreadCount'],
    [PBName.SyncRequestMsg]: ['syncTime', 'ispolling', 'isweb', 'isPullSend', 'isKeeping', 'sendBoxSyncTime'],
    [PBName.ChrmPullMsg]: ['syncTime', 'count'],
    [PBName.NotifyMsg]: ['type', 'time', 'chrmId'],
    [PBName.HistoryMsgInput]: ['targetId', 'time', 'count', 'order'],
    [PBName.HistoryMsgOuput]: ['list', 'syncTime', 'hasMsg'],
    [PBName.RelationQryInput]: ['type', 'count', 'startTime', 'order'],
    [PBName.RelationsOutput]: ['info'],
    [PBName.DeleteSessionsInput]: ['sessions'],
    [PBName.SessionInfo]: ['type', 'channelId'],
    [PBName.DeleteSessionsOutput]: ['nothing'],
    [PBName.RelationsInput]: ['type', 'msg', 'count', 'offset', 'startTime', 'endTime'],
    [PBName.DeleteMsgInput]: ['type', 'conversationId', 'msgs'],
    [PBName.CleanHisMsgInput]: ['targetId', 'dataTime', 'conversationType'],
    [PBName.SessionMsgReadInput]: ['type', 'msgTime', 'channelId'],
    [PBName.ChrmInput]: ['nothing'],
    [PBName.QueryChatRoomInfoInput]: ['count', 'order'],
    [PBName.QueryChatRoomInfoOutput]: ['userTotalNums', 'userInfos'],
    [PBName.GetQNupTokenInput]: ['type', 'key'],
    [PBName.GetQNdownloadUrlInput]: ['type', 'key', 'fileName'],
    [PBName.GetQNupTokenOutput]: ['deadline', 'token'],
    [PBName.GetQNdownloadUrlOutput]: ['downloadUrl'],
    [PBName.SetChrmKV]: ['entry', 'bNotify', 'notification', 'type'],
    [PBName.ChrmKVOutput]: ['entries', 'bFullUpdate', 'syncTime'],
    [PBName.QueryChrmKV]: ['timestamp'],
    [PBName.SetUserSettingInput]: ['version', 'value'],
    [PBName.SetUserSettingOutput]: ['version', 'reserve'],
    [PBName.PullUserSettingInput]: ['version', 'reserve'],
    [PBName.PullUserSettingOutput]: ['items', 'version'],
    [PBName.SessionReq]: ['time'],
    [PBName.SessionStates]: ['version', 'state'],
    [PBName.SessionState]: ['type', 'channelId', 'time', 'stateItem'],
    [PBName.SessionStateItem]: ['sessionStateType', 'value'],
    [PBName.SessionStateModifyReq]: ['version', 'state'],
    [PBName.SessionStateModifyResp]: ['version']
};

const Codec = {};
for (var key in SSMsg) {
    const paramsList = SSMsg[key];
    Codec[key] = () => {
        const data = {};
        const ins = {
            getArrayData() {
                return data;
            }
        };
        for (let i = 0; i < paramsList.length; i++) {
            const param = paramsList[i];
            const setEventName = `set${toUpperCase(param, 0, 1)}`;
            ins[setEventName] = (item) => {
                data[param] = item;
            };
        }
        return ins;
    };
    Codec[key].decode = function (data) {
        const decodeResult = {};
        if (isString(data)) {
            data = JSON.parse(data);
        }
        for (const key in data) {
            const getEventName = `get${toUpperCase(key, 0, 1)}`;
            decodeResult[key] = data[key];
            decodeResult[getEventName] = () => {
                return data[key];
            };
        }
        return decodeResult;
    };
}
Codec.getModule = (pbName) => {
    return Codec[pbName]();
};

const SSMsg$1 = `
package Modules;
message probuf {
  message ${PBName.SetUserStatusInput}
  {
    optional int32 status=1;
  }

  message SetUserStatusOutput
  {
    optional int32 nothing=1;
  }

  message GetUserStatusInput
  {
    optional int32 nothing=1;
  }

  message GetUserStatusOutput
  {
    optional string status=1;
    optional string subUserId=2;
  }

  message SubUserStatusInput
  {
    repeated string userid =1;
  }

  message SubUserStatusOutput
  {
    optional int32 nothing=1; 
  }
  message VoipDynamicInput
  {
    required int32  engineType = 1;
    required string channelName = 2;
    optional string channelExtra = 3;
  }

  message VoipDynamicOutput
  {
      required string dynamicKey=1;
  }
  message ${PBName.NotifyMsg} {
    required int32 type = 1;
    optional int64 time = 2;
    optional string chrmId=3;
  }
  message ${PBName.SyncRequestMsg} {
    required int64 syncTime = 1;
    required bool ispolling = 2;
    optional bool isweb=3;
    optional bool isPullSend=4;
    optional bool isKeeping=5;
    optional int64 sendBoxSyncTime=6;
  }
  message ${PBName.UpStreamMessage} {
    required int32 sessionId = 1;
    required string classname = 2;
    required bytes content = 3;
    optional string pushText = 4;
    optional string appData = 5;
    repeated string userId = 6;
    optional int64 delMsgTime = 7;
    optional string delMsgId = 8;
    optional int32 configFlag = 9;
    optional int64 clientUniqueId = 10;
    optional string extraContent = 11;
  }
  message ${PBName.DownStreamMessages} {
    repeated DownStreamMessage list = 1;
    required int64 syncTime = 2;
    optional bool finished = 3;
  }
  message ${PBName.DownStreamMessage} {
    required string fromUserId = 1;
    required ChannelType type = 2;
    optional string groupId = 3;
    required string classname = 4;
    required bytes content = 5;
    required int64 dataTime = 6;
    required int64 status = 7;
    optional int64 extra = 8;
    optional string msgId = 9;
    optional int32 direction = 10;
    optional int32 plantform =11;
    optional int32 isRemoved = 12; 
    optional string source = 13; 
    optional int64 clientUniqueId = 14; 
    optional string extraContent = 15; 

  }
  enum ChannelType {
    PERSON = 1;
    PERSONS = 2;
    GROUP = 3;
    TEMPGROUP = 4;
    CUSTOMERSERVICE = 5;
    NOTIFY = 6;
    MC=7;
    MP=8;
  }
  message CreateDiscussionInput {
    optional string name = 1;
  }
  message CreateDiscussionOutput {
    required string id = 1;
  }
  message ChannelInvitationInput {
    repeated string users = 1;
  }
  message LeaveChannelInput {
    required int32 nothing = 1;
  }
  message ChannelEvictionInput {
    required string user = 1;
  }
  message RenameChannelInput {
    required string name = 1;
  }
  message ChannelInfoInput {
    required int32 nothing = 1;
  }
  message ChannelInfoOutput {
    required ChannelType type = 1;
    required string channelId = 2;
    required string channelName = 3;
    required string adminUserId = 4;
    repeated string firstTenUserIds = 5;
    required int32 openStatus = 6;
  }
  message ChannelInfosInput {
    required int32 page = 1;
    optional int32 number = 2;
  }
  message ChannelInfosOutput {
    repeated ChannelInfoOutput channels = 1;
    required int32 total = 2;
  }
  message MemberInfo {
    required string userId = 1;
    required string userName = 2;
    required string userPortrait = 3;
    required string extension = 4;
  }
  message GroupMembersInput {
    required int32 page = 1;
    optional int32 number = 2;
  }
  message GroupMembersOutput {
    repeated MemberInfo members = 1;
    required int32 total = 2;
  }
  message GetUserInfoInput {
    required int32 nothing = 1;
  }
  message GetUserInfoOutput {
    required string userId = 1;
    required string userName = 2;
    required string userPortrait = 3;
  }
  message GetSessionIdInput {
    required int32 nothing = 1;
  }
  message GetSessionIdOutput {
    required int32 sessionId = 1;
  }
  enum FileType {
    image = ${FileType$1.IMAGE};
    audio = ${FileType$1.AUDIO};
    video = ${FileType$1.VIDEO};
    file = ${FileType$1.FILE};
  }
  message ${PBName.GetQNupTokenInput} {
    required FileType type = 1;
    optional string key = 2;
  }
  message ${PBName.GetQNdownloadUrlInput} {
    required FileType type = 1;
    required string key = 2;
    optional string  fileName = 3;
  }
  message ${PBName.GetQNupTokenOutput} {
    required int64 deadline = 1;
    required string token = 2;
    optional string bosToken = 3;
    optional string bosDate = 4;
    optional string path = 5;
  }
  message ${PBName.GetQNdownloadUrlOutput} {
    required string downloadUrl = 1;
  }
  message Add2BlackListInput {
    required string userId = 1;
  }
  message RemoveFromBlackListInput {
    required string userId = 1;
  }
  message QueryBlackListInput {
    required int32 nothing = 1;
  }
  message QueryBlackListOutput {
    repeated string userIds = 1;
  }
  message BlackListStatusInput {
    required string userId = 1;
  }
  message BlockPushInput {
    required string blockeeId = 1;
  }
  message ModifyPermissionInput {
    required int32 openStatus = 1;
  }
  message GroupInput {
    repeated GroupInfo groupInfo = 1;
  }
  message GroupOutput {
    required int32 nothing = 1;
  }
  message GroupInfo {
    required string id = 1;
    required string name = 2;
  }
  message GroupHashInput {
    required string userId = 1;
    required string groupHashCode = 2;
  }
  message GroupHashOutput {
    required GroupHashType result = 1;
  }
  enum GroupHashType {
    group_success = 0x00;
    group_failure = 0x01;
  }
  message ${PBName.ChrmInput} {
    required int32 nothing = 1;
  }
  message ChrmOutput {
    required int32 nothing = 1;
  }
  message ${PBName.ChrmPullMsg} {
    required int64 syncTime = 1;
    required int32 count = 2;
  }
  
  message ChrmPullMsgNew 
  {
    required int32 count = 1;
    required int64 syncTime = 2;
    optional string chrmId=3;
  }
  message ${PBName.RelationQryInput}
  {
    optional ChannelType type = 1;
    optional int32 count = 2;
    optional int64 startTime = 3;
    optional int32 order = 4;
  }
  message ${PBName.RelationsInput}
  {
    required ChannelType type = 1;
    optional DownStreamMessage msg =2;
    optional int32 count = 3;
    optional int32 offset = 4;
    optional int64 startTime = 5;
    optional int64 endTime = 6;
  }
  message ${PBName.RelationsOutput}
  {
    repeated RelationInfo info = 1;
  }
  message RelationInfo
  {
    required ChannelType type = 1;
    required string userId = 2;
    optional DownStreamMessage msg =3;
    optional int64 readMsgTime= 4;
    optional int64 unreadCount= 5;
  }
  message RelationInfoReadTime
  {
    required ChannelType type = 1;
    required int64 readMsgTime= 2;
    required string targetId = 3;
  }
  message ${PBName.CleanHisMsgInput}
  {
      required string targetId = 1;
      required int64 dataTime = 2;
      optional int32 conversationType= 3;
  }
  message HistoryMessageInput
  {
    required string targetId = 1;
    required int64 dataTime =2;
    required int32 size  = 3;
  }

  message HistoryMessagesOuput
  {
    repeated DownStreamMessage list = 1;
    required int64 syncTime = 2;
    required int32 hasMsg = 3;
  }
  message ${PBName.QueryChatRoomInfoInput}
  {
    required int32 count= 1;
    optional int32 order= 2;
  }

  message ${PBName.QueryChatRoomInfoOutput}
  {
    optional int32 userTotalNums = 1;
    repeated ChrmMember userInfos = 2;
  }
  message ChrmMember
  {
    required int64 time = 1;
    required string id = 2;
  }
  message MPFollowInput
  {
    required string id = 1;
  }

  message MPFollowOutput
  {
    required int32 nothing = 1;
    optional MpInfo info =2;
  }

  message ${PBName.MCFollowInput}
  {
    required string id = 1;
  }

  message MCFollowOutput
  {
    required int32 nothing = 1;
    optional MpInfo info =2;
  }

  message MpInfo  
  {
    required string mpid=1;
    required string name = 2;
    required string type = 3;
    required int64 time=4;
    optional string portraitUrl=5;
    optional string extra =6;
  }

  message SearchMpInput
  {
    required int32 type=1;
    required string id=2;
  }

  message SearchMpOutput
  {
    required int32 nothing=1;
    repeated MpInfo info = 2;
  }

  message PullMpInput
  {
    required int64 time=1;
    required string mpid=2;
  }

  message PullMpOutput
  {
    required int32 status=1;
    repeated MpInfo info = 2;
  }
  message ${PBName.HistoryMsgInput}
  {
    optional string targetId = 1;
    optional int64 time = 2;
    optional int32 count  = 3;
    optional int32 order = 4;
  }

  message ${PBName.HistoryMsgOuput}
  {
    repeated DownStreamMessage list=1;
    required int64 syncTime=2;
    required int32 hasMsg=3;
  }
  message ${PBName.RtcQueryListInput}{
    optional int32 order=1;
  }

  message ${PBName.RtcKeyDeleteInput}{
    repeated string key=1;
  }

  message ${PBName.RtcValueInfo}{
    required string key=1;
    required string value=2;
  }

  message RtcUserInfo{
    required string userId=1;
    repeated ${PBName.RtcValueInfo} userData=2;
  }

  message ${PBName.RtcUserListOutput}{
    repeated RtcUserInfo list=1;
    optional string token=2;
    optional string sessionId=3;
  }
  message RtcRoomInfoOutput{
    optional string roomId = 1;
    repeated ${PBName.RtcValueInfo} roomData = 2;
    optional int32 userCount = 3;
    repeated RtcUserInfo list=4;
  }
  message ${PBName.RtcInput}{
    required int32 roomType=1;
    optional int32 broadcastType=2;
  }
  message RtcQryInput{ 
    required bool isInterior=1;
    required targetType target=2;
    repeated string key=3;
  }
  message ${PBName.RtcQryOutput}{
    repeated ${PBName.RtcValueInfo} outInfo=1;
  }
  message RtcDelDataInput{
    repeated string key=1;
    required bool isInterior=2;
    required targetType target=3;
  }
  message ${PBName.RtcDataInput}{ 
    required bool interior=1;
    required targetType target=2;
    repeated string key=3;
    optional string objectName=4;
    optional string content=5;
  }
  message ${PBName.RtcSetDataInput}{
    required bool interior=1;
    required targetType target=2;
    required string key=3;
    required string value=4;
    optional string objectName=5;
    optional string content=6;
  }
  message ${PBName.RtcUserSetDataInput} {
    repeated ${PBName.RtcValueInfo} valueInfo = 1;
    required string objectName = 2;
    repeated ${PBName.RtcValueInfo} content = 3;
  }
  message RtcOutput
  {
    optional int32 nothing=1; 
  }
  message ${PBName.RtcTokenOutput}{
    required string rtcToken=1;
  }
  enum targetType {
    ROOM =1 ;
    PERSON = 2;
  }
  message ${PBName.RtcSetOutDataInput}{
    required targetType target=1;
    repeated ${PBName.RtcValueInfo} valueInfo=2;
    optional string objectName=3;
    optional string content=4;
  }
  message ${PBName.RtcQryUserOutDataInput}{
    repeated string userId = 1;
  }
  message ${PBName.RtcUserOutDataOutput}{
    repeated RtcUserInfo user = 1;
  }
  message ${PBName.SessionsAttQryInput}{
    required int32 nothing = 1;
  }
  message ${PBName.SessionsAttOutput}{
    required int64 inboxTime = 1;
    required int64 sendboxTime = 2;
    required int64 totalUnreadCount = 3;
  }
  message ${PBName.SessionMsgReadInput}
  {
    required ChannelType type = 1;
    required int64 msgTime = 2;
    required string channelId = 3;
  }
  message SessionMsgReadOutput
  {
    optional int32 nothing=1; 
  }
  message ${PBName.DeleteSessionsInput}
  {
    repeated SessionInfo sessions = 1;
  }
  message ${PBName.SessionInfo}
  {
    required ChannelType type = 1;
    required string channelId = 2;
  }
  message ${PBName.DeleteSessionsOutput}
  {
    optional int32 nothing=1; 
  }
  message ${PBName.DeleteMsgInput}
  {
    optional ChannelType type = 1;
    optional string conversationId = 2;
    repeated DeleteMsg msgs = 3;
  }
  message DeleteMsg
  {
    optional string msgId = 1;
    optional int64 msgDataTime = 2;
    optional int32 direct = 3;
  }
  message ChrmKVEntity {
    required string key = 1;
    required string value = 2;
    optional int32 status = 3;
    optional int64 timestamp = 4;
    optional string uid = 5;
  }
  message ${PBName.SetChrmKV} {
    required ChrmKVEntity entry = 1;
    optional bool bNotify = 2;
    optional UpStreamMessage notification = 3;
    optional ChannelType type = 4;
  }
  message ${PBName.ChrmKVOutput} {
    repeated ChrmKVEntity entries = 1;
    optional bool bFullUpdate = 2;
    optional int64 syncTime = 3;
  }
  message ${PBName.QueryChrmKV} {
    required int64 timestamp = 1;
  }
  message ${PBName.SetUserSettingInput} {
    required int64 version=1;
    required string value=2;
  }
  message ${PBName.SetUserSettingOutput} {
    required int64 version=1;
    required bool reserve=2;
  }
  message ${PBName.PullUserSettingInput} {
    required int64 version=1;//当前客户端的最大版本号
    optional bool reserve=2;
  }
  message ${PBName.PullUserSettingOutput} {
    repeated UserSettingItem items = 1;
    required int64 version=2;
  }
  message UserSettingItem {
    required string targetId= 1;
    required ChannelType type = 2;
    required string key = 4;
    required bytes value = 5;
    required int64 version=6;
    required int32 status=7;
  }
  message ${PBName.SessionReq} {
    required int64 time = 1;
  }
  message ${PBName.SessionStates} {
    required int64 version=1;
    repeated SessionState state= 2;
  }
  message ${PBName.SessionState} {
    required ChannelType type = 1;
    required string channelId = 2;  
    optional int64 time = 3;
    repeated SessionStateItem stateItem = 4;
  }
  message ${PBName.SessionStateItem} {
    required SessionStateType sessionStateType = 1;
    required string value = 2;
  }
  enum SessionStateType {
    IsSilent = 1;
    IsTop = 2;
  }
  message ${PBName.SessionStateModifyReq} {
    required int64 version=1;
    repeated SessionState state= 2;
  }
  message ${PBName.SessionStateModifyResp} {
    required int64 version=1;
  }
}
`;

function protobuf (a) {
 var c = (function () { function a (a, b, c) { this.low = 0 | a, this.high = 0 | b, this.unsigned = !!c; } function b (a) { return (a && a.__isLong__) === !0 } function e (a, b) { var e, f, h; return b ? (a >>>= 0, (h = a >= 0 && a < 256) && (f = d[a]) ? f : (e = g(a, (0 | a) < 0 ? -1 : 0, !0), h && (d[a] = e), e)) : (a |= 0, (h = a >= -128 && a < 128) && (f = c[a]) ? f : (e = g(a, a < 0 ? -1 : 0, !1), h && (c[a] = e), e)) } function f (a, b) { if (isNaN(a) || !isFinite(a)) return b ? r : q; if (b) { if (a < 0) return r; if (a >= n) return w } else { if (-o >= a) return x; if (a + 1 >= o) return v } return a < 0 ? f(-a, b).neg() : g(0 | a % m, 0 | a / m, b) } function g (b, c, d) { return new a(b, c, d) } function i (a, b, c) { var d, e, g, j, k, l, m; if (a.length === 0) throw Error('empty string'); if (a === 'NaN' || a === 'Infinity' || a === '+Infinity' || a === '-Infinity') return q; if (typeof b === 'number' ? (c = b, b = !1) : b = !!b, c = c || 10, c < 2 || c > 36) throw RangeError('radix'); if ((d = a.indexOf('-')) > 0) throw Error('interior hyphen'); if (d === 0) return i(a.substring(1), b, c).neg(); for (e = f(h(c, 8)), g = q, j = 0; j < a.length; j += 8)k = Math.min(8, a.length - j), l = parseInt(a.substring(j, j + k), c), k < 8 ? (m = f(h(c, k)), g = g.mul(m).add(f(l))) : (g = g.mul(e), g = g.add(f(l))); return g.unsigned = b, g } function j (b) { return b instanceof a ? b : typeof b === 'number' ? f(b) : typeof b === 'string' ? i(b) : g(b.low, b.high, b.unsigned) } var c, d, h, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y; return a.prototype.__isLong__, Object.defineProperty(a.prototype, '__isLong__', { value: !0, enumerable: !1, configurable: !1 }), a.isLong = b, c = {}, d = {}, a.fromInt = e, a.fromNumber = f, a.fromBits = g, h = Math.pow, a.fromString = i, a.fromValue = j, k = 65536, l = 1 << 24, m = k * k, n = m * m, o = n / 2, p = e(l), q = e(0), a.ZERO = q, r = e(0, !0), a.UZERO = r, s = e(1), a.ONE = s, t = e(1, !0), a.UONE = t, u = e(-1), a.NEG_ONE = u, v = g(-1, 2147483647, !1), a.MAX_VALUE = v, w = g(-1, -1, !0), a.MAX_UNSIGNED_VALUE = w, x = g(0, -2147483648, !1), a.MIN_VALUE = x, y = a.prototype, y.toInt = function () { return this.unsigned ? this.low >>> 0 : this.low }, y.toNumber = function () { return this.unsigned ? (this.high >>> 0) * m + (this.low >>> 0) : this.high * m + (this.low >>> 0) }, y.toString = function (a) { var b, c, d, e, g, i, j, k, l; if (a = a || 10, a < 2 || a > 36) throw RangeError('radix'); if (this.isZero()) return '0'; if (this.isNegative()) return this.eq(x) ? (b = f(a), c = this.div(b), d = c.mul(b).sub(this), c.toString(a) + d.toInt().toString(a)) : '-' + this.neg().toString(a); for (e = f(h(a, 6), this.unsigned), g = this, i = ''; ;) { if (j = g.div(e), k = g.sub(j.mul(e)).toInt() >>> 0, l = k.toString(a), g = j, g.isZero()) return l + i; for (;l.length < 6;)l = '0' + l; i = '' + l + i; } }, y.getHighBits = function () { return this.high }, y.getHighBitsUnsigned = function () { return this.high >>> 0 }, y.getLowBits = function () { return this.low }, y.getLowBitsUnsigned = function () { return this.low >>> 0 }, y.getNumBitsAbs = function () { var a, b; if (this.isNegative()) return this.eq(x) ? 64 : this.neg().getNumBitsAbs(); for (a = this.high != 0 ? this.high : this.low, b = 31; b > 0 && (a & 1 << b) == 0; b--);return this.high != 0 ? b + 33 : b + 1 }, y.isZero = function () { return this.high === 0 && this.low === 0 }, y.isNegative = function () { return !this.unsigned && this.high < 0 }, y.isPositive = function () { return this.unsigned || this.high >= 0 }, y.isOdd = function () { return (1 & this.low) === 1 }, y.isEven = function () { return (1 & this.low) === 0 }, y.equals = function (a) { return b(a) || (a = j(a)), this.unsigned !== a.unsigned && this.high >>> 31 === 1 && a.high >>> 31 === 1 ? !1 : this.high === a.high && this.low === a.low }, y.eq = y.equals, y.notEquals = function (a) { return !this.eq(a) }, y.neq = y.notEquals, y.lessThan = function (a) { return this.comp(a) < 0 }, y.lt = y.lessThan, y.lessThanOrEqual = function (a) { return this.comp(a) <= 0 }, y.lte = y.lessThanOrEqual, y.greaterThan = function (a) { return this.comp(a) > 0 }, y.gt = y.greaterThan, y.greaterThanOrEqual = function (a) { return this.comp(a) >= 0 }, y.gte = y.greaterThanOrEqual, y.compare = function (a) { if (b(a) || (a = j(a)), this.eq(a)) return 0; var c = this.isNegative(); var d = a.isNegative(); return c && !d ? -1 : !c && d ? 1 : this.unsigned ? a.high >>> 0 > this.high >>> 0 || a.high === this.high && a.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(a).isNegative() ? -1 : 1 }, y.comp = y.compare, y.negate = function () { return !this.unsigned && this.eq(x) ? x : this.not().add(s) }, y.neg = y.negate, y.add = function (a) { var c, d, e, f, h, i, k, l, m, n, o, p; return b(a) || (a = j(a)), c = this.high >>> 16, d = 65535 & this.high, e = this.low >>> 16, f = 65535 & this.low, h = a.high >>> 16, i = 65535 & a.high, k = a.low >>> 16, l = 65535 & a.low, m = 0, n = 0, o = 0, p = 0, p += f + l, o += p >>> 16, p &= 65535, o += e + k, n += o >>> 16, o &= 65535, n += d + i, m += n >>> 16, n &= 65535, m += c + h, m &= 65535, g(o << 16 | p, m << 16 | n, this.unsigned) }, y.subtract = function (a) { return b(a) || (a = j(a)), this.add(a.neg()) }, y.sub = y.subtract, y.multiply = function (a) { var c, d, e, h, i, k, l, m, n, o, r, s; return this.isZero() ? q : (b(a) || (a = j(a)), a.isZero() ? q : this.eq(x) ? a.isOdd() ? x : q : a.eq(x) ? this.isOdd() ? x : q : this.isNegative() ? a.isNegative() ? this.neg().mul(a.neg()) : this.neg().mul(a).neg() : a.isNegative() ? this.mul(a.neg()).neg() : this.lt(p) && a.lt(p) ? f(this.toNumber() * a.toNumber(), this.unsigned) : (c = this.high >>> 16, d = 65535 & this.high, e = this.low >>> 16, h = 65535 & this.low, i = a.high >>> 16, k = 65535 & a.high, l = a.low >>> 16, m = 65535 & a.low, n = 0, o = 0, r = 0, s = 0, s += h * m, r += s >>> 16, s &= 65535, r += e * m, o += r >>> 16, r &= 65535, r += h * l, o += r >>> 16, r &= 65535, o += d * m, n += o >>> 16, o &= 65535, o += e * l, n += o >>> 16, o &= 65535, o += h * k, n += o >>> 16, o &= 65535, n += c * m + d * l + e * k + h * i, n &= 65535, g(r << 16 | s, n << 16 | o, this.unsigned))) }, y.mul = y.multiply, y.divide = function (a) { var c, d, e, g, i, k, l, m; if (b(a) || (a = j(a)), a.isZero()) throw Error('division by zero'); if (this.isZero()) return this.unsigned ? r : q; if (this.unsigned) { if (a.unsigned || (a = a.toUnsigned()), a.gt(this)) return r; if (a.gt(this.shru(1))) return t; e = r; } else { if (this.eq(x)) return a.eq(s) || a.eq(u) ? x : a.eq(x) ? s : (g = this.shr(1), c = g.div(a).shl(1), c.eq(q) ? a.isNegative() ? s : u : (d = this.sub(a.mul(c)), e = c.add(d.div(a)))); if (a.eq(x)) return this.unsigned ? r : q; if (this.isNegative()) return a.isNegative() ? this.neg().div(a.neg()) : this.neg().div(a).neg(); if (a.isNegative()) return this.div(a.neg()).neg(); e = q; } for (d = this; d.gte(a);) { for (c = Math.max(1, Math.floor(d.toNumber() / a.toNumber())), i = Math.ceil(Math.log(c) / Math.LN2), k = i <= 48 ? 1 : h(2, i - 48), l = f(c), m = l.mul(a); m.isNegative() || m.gt(d);)c -= k, l = f(c, this.unsigned), m = l.mul(a); l.isZero() && (l = s), e = e.add(l), d = d.sub(m); } return e }, y.div = y.divide, y.modulo = function (a) { return b(a) || (a = j(a)), this.sub(this.div(a).mul(a)) }, y.mod = y.modulo, y.not = function () { return g(~this.low, ~this.high, this.unsigned) }, y.and = function (a) { return b(a) || (a = j(a)), g(this.low & a.low, this.high & a.high, this.unsigned) }, y.or = function (a) { return b(a) || (a = j(a)), g(this.low | a.low, this.high | a.high, this.unsigned) }, y.xor = function (a) { return b(a) || (a = j(a)), g(this.low ^ a.low, this.high ^ a.high, this.unsigned) }, y.shiftLeft = function (a) { return b(a) && (a = a.toInt()), (a &= 63) === 0 ? this : a < 32 ? g(this.low << a, this.high << a | this.low >>> 32 - a, this.unsigned) : g(0, this.low << a - 32, this.unsigned) }, y.shl = y.shiftLeft, y.shiftRight = function (a) { return b(a) && (a = a.toInt()), (a &= 63) === 0 ? this : a < 32 ? g(this.low >>> a | this.high << 32 - a, this.high >> a, this.unsigned) : g(this.high >> a - 32, this.high >= 0 ? 0 : -1, this.unsigned) }, y.shr = y.shiftRight, y.shiftRightUnsigned = function (a) { var c, d; return b(a) && (a = a.toInt()), a &= 63, a === 0 ? this : (c = this.high, a < 32 ? (d = this.low, g(d >>> a | c << 32 - a, c >>> a, this.unsigned)) : a === 32 ? g(c, 0, this.unsigned) : g(c >>> a - 32, 0, this.unsigned)) }, y.shru = y.shiftRightUnsigned, y.toSigned = function () { return this.unsigned ? g(this.low, this.high, !1) : this }, y.toUnsigned = function () { return this.unsigned ? this : g(this.low, this.high, !0) }, y.toBytes = function (a) { return a ? this.toBytesLE() : this.toBytesBE() }, y.toBytesLE = function () { var a = this.high; var b = this.low; return [255 & b, 255 & b >>> 8, 255 & b >>> 16, 255 & b >>> 24, 255 & a, 255 & a >>> 8, 255 & a >>> 16, 255 & a >>> 24] }, y.toBytesBE = function () { var a = this.high; var b = this.low; return [255 & a >>> 24, 255 & a >>> 16, 255 & a >>> 8, 255 & a, 255 & b >>> 24, 255 & b >>> 16, 255 & b >>> 8, 255 & b] }, a }()); var d = (function (a) {
    function f (a) { var b = 0; return function () { return b < a.length ? a.charCodeAt(b++) : null } } function g () { var a = []; var b = []; return function () { return arguments.length === 0 ? b.join('') + e.apply(String, a) : (a.length + arguments.length > 1024 && (b.push(e.apply(String, a)), a.length = 0), Array.prototype.push.apply(a, arguments), void 0) } } function h (a, b, c, d, e) { var f; var g; var h = 8 * e - d - 1; var i = (1 << h) - 1; var j = i >> 1; var k = -7; var l = c ? e - 1 : 0; var m = c ? -1 : 1; var n = a[b + l]; for (l += m, f = n & (1 << -k) - 1, n >>= -k, k += h; k > 0; f = 256 * f + a[b + l], l += m, k -= 8);for (g = f & (1 << -k) - 1, f >>= -k, k += d; k > 0; g = 256 * g + a[b + l], l += m, k -= 8);if (f === 0)f = 1 - j; else { if (f === i) return g ? 0 / 0 : 1 / 0 * (n ? -1 : 1); g += Math.pow(2, d), f -= j; } return (n ? -1 : 1) * g * Math.pow(2, f - d) } function i (a, b, c, d, e, f) { var g; var h; var i; var j = 8 * f - e - 1; var k = (1 << j) - 1; var l = k >> 1; var m = e === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0; var n = d ? 0 : f - 1; var o = d ? 1 : -1; var p = b < 0 || b === 0 && 1 / b < 0 ? 1 : 0; for (b = Math.abs(b), isNaN(b) || 1 / 0 === b ? (h = isNaN(b) ? 1 : 0, g = k) : (g = Math.floor(Math.log(b) / Math.LN2), b * (i = Math.pow(2, -g)) < 1 && (g--, i *= 2), b += g + l >= 1 ? m / i : m * Math.pow(2, 1 - l), b * i >= 2 && (g++, i /= 2), g + l >= k ? (h = 0, g = k) : g + l >= 1 ? (h = (b * i - 1) * Math.pow(2, e), g += l) : (h = b * Math.pow(2, l - 1) * Math.pow(2, e), g = 0)); e >= 8; a[c + n] = 255 & h, n += o, h /= 256, e -= 8);for (g = g << e | h, j += e; j > 0; a[c + n] = 255 & g, n += o, g /= 256, j -= 8);a[c + n - o] |= 128 * p; } var c; var d; var e; var j; var k; var b = function (a, c, e) { if (typeof a === 'undefined' && (a = b.DEFAULT_CAPACITY), typeof c === 'undefined' && (c = b.DEFAULT_ENDIAN), typeof e === 'undefined' && (e = b.DEFAULT_NOASSERT), !e) { if (a = 0 | a, a < 0) throw RangeError('Illegal capacity'); c = !!c, e = !!e; } this.buffer = a === 0 ? d : new ArrayBuffer(a), this.view = a === 0 ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = a, this.littleEndian = c, this.noAssert = e; }; return b.VERSION = '5.0.1', b.LITTLE_ENDIAN = !0, b.BIG_ENDIAN = !1, b.DEFAULT_CAPACITY = 16, b.DEFAULT_ENDIAN = b.BIG_ENDIAN, b.DEFAULT_NOASSERT = !1, b.Long = a || null, c = b.prototype, c.__isByteBuffer__, Object.defineProperty(c, '__isByteBuffer__', { value: !0, enumerable: !1, configurable: !1 }), d = new ArrayBuffer(0), e = String.fromCharCode, b.accessor = function () { return Uint8Array }, b.allocate = function (a, c, d) { return new b(a, c, d) }, b.concat = function (a, c, d, e) { var f, i, g, h, k, j; for ((typeof c === 'boolean' || typeof c !== 'string') && (e = d, d = c, c = void 0), f = 0, g = 0, h = a.length; h > g; ++g)b.isByteBuffer(a[g]) || (a[g] = b.wrap(a[g], c)), i = a[g].limit - a[g].offset, i > 0 && (f += i); if (f === 0) return new b(0, d, e); for (j = new b(f, d, e), g = 0; h > g;)k = a[g++], i = k.limit - k.offset, i <= 0 || (j.view.set(k.view.subarray(k.offset, k.limit), j.offset), j.offset += i); return j.limit = j.offset, j.offset = 0, j }, b.isByteBuffer = function (a) { return (a && a.__isByteBuffer__) === !0 }, b.type = function () { return ArrayBuffer }, b.wrap = function (a, d, e, f) { var g, h; if (typeof d !== 'string' && (f = e, e = d, d = void 0), typeof a === 'string') switch (typeof d === 'undefined' && (d = 'utf8'), d) { case 'base64':return b.fromBase64(a, e); case 'hex':return b.fromHex(a, e); case 'binary':return b.fromBinary(a, e); case 'utf8':return b.fromUTF8(a, e); case 'debug':return b.fromDebug(a, e); default:throw Error('Unsupported encoding: ' + d) } if (a === null || typeof a !== 'object') throw TypeError('Illegal buffer'); if (b.isByteBuffer(a)) return g = c.clone.call(a), g.markedOffset = -1, g; if (a instanceof Uint8Array)g = new b(0, e, f), a.length > 0 && (g.buffer = a.buffer, g.offset = a.byteOffset, g.limit = a.byteOffset + a.byteLength, g.view = new Uint8Array(a.buffer)); else if (a instanceof ArrayBuffer)g = new b(0, e, f), a.byteLength > 0 && (g.buffer = a, g.offset = 0, g.limit = a.byteLength, g.view = a.byteLength > 0 ? new Uint8Array(a) : null); else { if (Object.prototype.toString.call(a) !== '[object Array]') throw TypeError('Illegal buffer'); for (g = new b(a.length, e, f), g.limit = a.length, h = 0; h < a.length; ++h)g.view[h] = a[h]; } return g }, c.writeBitSet = function (a, b) { var h; var d; var e; var f; var g; var i; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (!(a instanceof Array)) throw TypeError('Illegal BitSet: Not an array'); if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } for (d = b, e = a.length, f = e >> 3, g = 0, b += this.writeVarint32(e, b); f--;)h = 1 & !!a[g++] | (1 & !!a[g++]) << 1 | (1 & !!a[g++]) << 2 | (1 & !!a[g++]) << 3 | (1 & !!a[g++]) << 4 | (1 & !!a[g++]) << 5 | (1 & !!a[g++]) << 6 | (1 & !!a[g++]) << 7, this.writeByte(h, b++); if (e > g) { for (i = 0, h = 0; e > g;)h |= (1 & !!a[g++]) << i++; this.writeByte(h, b++); } return c ? (this.offset = b, this) : b - d }, c.readBitSet = function (a) { var h; var c; var d; var e; var f; var g; var i; var b = typeof a === 'undefined'; for (b && (a = this.offset), c = this.readVarint32(a), d = c.value, e = d >> 3, f = 0, g = [], a += c.length; e--;)h = this.readByte(a++), g[f++] = !!(1 & h), g[f++] = !!(2 & h), g[f++] = !!(4 & h), g[f++] = !!(8 & h), g[f++] = !!(16 & h), g[f++] = !!(32 & h), g[f++] = !!(64 & h), g[f++] = !!(128 & h); if (d > f) for (i = 0, h = this.readByte(a++); d > f;)g[f++] = !!(1 & h >> i++); return b && (this.offset = a), g }, c.readBytes = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + a > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + a + ') <= ' + this.buffer.byteLength) } return d = this.slice(b, b + a), c && (this.offset += a), d }, c.writeBytes = c.append, c.writeInt8 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a |= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 1, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 1, this.view[b] = a, c && (this.offset += 1), this }, c.writeByte = c.writeInt8, c.readInt8 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 1 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 1 + ') <= ' + this.buffer.byteLength) } return c = this.view[a], (128 & c) === 128 && (c = -(255 - c + 1)), b && (this.offset += 1), c }, c.readByte = c.readInt8, c.writeUint8 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 1, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 1, this.view[b] = a, c && (this.offset += 1), this }, c.writeUInt8 = c.writeUint8, c.readUint8 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 1 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 1 + ') <= ' + this.buffer.byteLength) } return c = this.view[a], b && (this.offset += 1), c }, c.readUInt8 = c.readUint8, c.writeInt16 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a |= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 2, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 2, this.littleEndian ? (this.view[b + 1] = (65280 & a) >>> 8, this.view[b] = 255 & a) : (this.view[b] = (65280 & a) >>> 8, this.view[b + 1] = 255 & a), c && (this.offset += 2), this }, c.writeShort = c.writeInt16, c.readInt16 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 2 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 2 + ') <= ' + this.buffer.byteLength) } return c = 0, this.littleEndian ? (c = this.view[a], c |= this.view[a + 1] << 8) : (c = this.view[a] << 8, c |= this.view[a + 1]), (32768 & c) === 32768 && (c = -(65535 - c + 1)), b && (this.offset += 2), c }, c.readShort = c.readInt16, c.writeUint16 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 2, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 2, this.littleEndian ? (this.view[b + 1] = (65280 & a) >>> 8, this.view[b] = 255 & a) : (this.view[b] = (65280 & a) >>> 8, this.view[b + 1] = 255 & a), c && (this.offset += 2), this }, c.writeUInt16 = c.writeUint16, c.readUint16 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 2 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 2 + ') <= ' + this.buffer.byteLength) } return c = 0, this.littleEndian ? (c = this.view[a], c |= this.view[a + 1] << 8) : (c = this.view[a] << 8, c |= this.view[a + 1]), b && (this.offset += 2), c }, c.readUInt16 = c.readUint16, c.writeInt32 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a |= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 4, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 4, this.littleEndian ? (this.view[b + 3] = 255 & a >>> 24, this.view[b + 2] = 255 & a >>> 16, this.view[b + 1] = 255 & a >>> 8, this.view[b] = 255 & a) : (this.view[b] = 255 & a >>> 24, this.view[b + 1] = 255 & a >>> 16, this.view[b + 2] = 255 & a >>> 8, this.view[b + 3] = 255 & a), c && (this.offset += 4), this }, c.writeInt = c.writeInt32, c.readInt32 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 4 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 4 + ') <= ' + this.buffer.byteLength) } return c = 0, this.littleEndian ? (c = this.view[a + 2] << 16, c |= this.view[a + 1] << 8, c |= this.view[a], c += this.view[a + 3] << 24 >>> 0) : (c = this.view[a + 1] << 16, c |= this.view[a + 2] << 8, c |= this.view[a + 3], c += this.view[a] << 24 >>> 0), c |= 0, b && (this.offset += 4), c }, c.readInt = c.readInt32, c.writeUint32 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 4, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 4, this.littleEndian ? (this.view[b + 3] = 255 & a >>> 24, this.view[b + 2] = 255 & a >>> 16, this.view[b + 1] = 255 & a >>> 8, this.view[b] = 255 & a) : (this.view[b] = 255 & a >>> 24, this.view[b + 1] = 255 & a >>> 16, this.view[b + 2] = 255 & a >>> 8, this.view[b + 3] = 255 & a), c && (this.offset += 4), this }, c.writeUInt32 = c.writeUint32, c.readUint32 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 4 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 4 + ') <= ' + this.buffer.byteLength) } return c = 0, this.littleEndian ? (c = this.view[a + 2] << 16, c |= this.view[a + 1] << 8, c |= this.view[a], c += this.view[a + 3] << 24 >>> 0) : (c = this.view[a + 1] << 16, c |= this.view[a + 2] << 8, c |= this.view[a + 3], c += this.view[a] << 24 >>> 0), b && (this.offset += 4), c }, c.readUInt32 = c.readUint32, a && (c.writeInt64 = function (b, c) { var e; var f; var g; var d = typeof c === 'undefined'; if (d && (c = this.offset), !this.noAssert) { if (typeof b === 'number')b = a.fromNumber(b); else if (typeof b === 'string')b = a.fromString(b); else if (!(b && b instanceof a)) throw TypeError('Illegal value: ' + b + ' (not an integer or Long)'); if (typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal offset: ' + c + ' (not an integer)'); if (c >>>= 0, c < 0 || c + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + c + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return typeof b === 'number' ? b = a.fromNumber(b) : typeof b === 'string' && (b = a.fromString(b)), c += 8, e = this.buffer.byteLength, c > e && this.resize((e *= 2) > c ? e : c), c -= 8, f = b.low, g = b.high, this.littleEndian ? (this.view[c + 3] = 255 & f >>> 24, this.view[c + 2] = 255 & f >>> 16, this.view[c + 1] = 255 & f >>> 8, this.view[c] = 255 & f, c += 4, this.view[c + 3] = 255 & g >>> 24, this.view[c + 2] = 255 & g >>> 16, this.view[c + 1] = 255 & g >>> 8, this.view[c] = 255 & g) : (this.view[c] = 255 & g >>> 24, this.view[c + 1] = 255 & g >>> 16, this.view[c + 2] = 255 & g >>> 8, this.view[c + 3] = 255 & g, c += 4, this.view[c] = 255 & f >>> 24, this.view[c + 1] = 255 & f >>> 16, this.view[c + 2] = 255 & f >>> 8, this.view[c + 3] = 255 & f), d && (this.offset += 8), this }, c.writeLong = c.writeInt64, c.readInt64 = function (b) { var d; var e; var f; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 8 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 8 + ') <= ' + this.buffer.byteLength) } return d = 0, e = 0, this.littleEndian ? (d = this.view[b + 2] << 16, d |= this.view[b + 1] << 8, d |= this.view[b], d += this.view[b + 3] << 24 >>> 0, b += 4, e = this.view[b + 2] << 16, e |= this.view[b + 1] << 8, e |= this.view[b], e += this.view[b + 3] << 24 >>> 0) : (e = this.view[b + 1] << 16, e |= this.view[b + 2] << 8, e |= this.view[b + 3], e += this.view[b] << 24 >>> 0, b += 4, d = this.view[b + 1] << 16, d |= this.view[b + 2] << 8, d |= this.view[b + 3], d += this.view[b] << 24 >>> 0), f = new a(d, e, !1), c && (this.offset += 8), f }, c.readLong = c.readInt64, c.writeUint64 = function (b, c) { var e; var f; var g; var d = typeof c === 'undefined'; if (d && (c = this.offset), !this.noAssert) { if (typeof b === 'number')b = a.fromNumber(b); else if (typeof b === 'string')b = a.fromString(b); else if (!(b && b instanceof a)) throw TypeError('Illegal value: ' + b + ' (not an integer or Long)'); if (typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal offset: ' + c + ' (not an integer)'); if (c >>>= 0, c < 0 || c + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + c + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return typeof b === 'number' ? b = a.fromNumber(b) : typeof b === 'string' && (b = a.fromString(b)), c += 8, e = this.buffer.byteLength, c > e && this.resize((e *= 2) > c ? e : c), c -= 8, f = b.low, g = b.high, this.littleEndian ? (this.view[c + 3] = 255 & f >>> 24, this.view[c + 2] = 255 & f >>> 16, this.view[c + 1] = 255 & f >>> 8, this.view[c] = 255 & f, c += 4, this.view[c + 3] = 255 & g >>> 24, this.view[c + 2] = 255 & g >>> 16, this.view[c + 1] = 255 & g >>> 8, this.view[c] = 255 & g) : (this.view[c] = 255 & g >>> 24, this.view[c + 1] = 255 & g >>> 16, this.view[c + 2] = 255 & g >>> 8, this.view[c + 3] = 255 & g, c += 4, this.view[c] = 255 & f >>> 24, this.view[c + 1] = 255 & f >>> 16, this.view[c + 2] = 255 & f >>> 8, this.view[c + 3] = 255 & f), d && (this.offset += 8), this }, c.writeUInt64 = c.writeUint64, c.readUint64 = function (b) { var d; var e; var f; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 8 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 8 + ') <= ' + this.buffer.byteLength) } return d = 0, e = 0, this.littleEndian ? (d = this.view[b + 2] << 16, d |= this.view[b + 1] << 8, d |= this.view[b], d += this.view[b + 3] << 24 >>> 0, b += 4, e = this.view[b + 2] << 16, e |= this.view[b + 1] << 8, e |= this.view[b], e += this.view[b + 3] << 24 >>> 0) : (e = this.view[b + 1] << 16, e |= this.view[b + 2] << 8, e |= this.view[b + 3], e += this.view[b] << 24 >>> 0, b += 4, d = this.view[b + 1] << 16, d |= this.view[b + 2] << 8, d |= this.view[b + 3], d += this.view[b] << 24 >>> 0), f = new a(d, e, !0), c && (this.offset += 8), f }, c.readUInt64 = c.readUint64), c.writeFloat32 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number') throw TypeError('Illegal value: ' + a + ' (not a number)'); if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 4, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 4, i(this.view, a, b, this.littleEndian, 23, 4), c && (this.offset += 4), this }, c.writeFloat = c.writeFloat32, c.readFloat32 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 4 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 4 + ') <= ' + this.buffer.byteLength) } return c = h(this.view, a, this.littleEndian, 23, 4), b && (this.offset += 4), c }, c.readFloat = c.readFloat32, c.writeFloat64 = function (a, b) { var d; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'number') throw TypeError('Illegal value: ' + a + ' (not a number)'); if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return b += 8, d = this.buffer.byteLength, b > d && this.resize((d *= 2) > b ? d : b), b -= 8, i(this.view, a, b, this.littleEndian, 52, 8), c && (this.offset += 8), this }, c.writeDouble = c.writeFloat64, c.readFloat64 = function (a) { var c; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 8 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 8 + ') <= ' + this.buffer.byteLength) } return c = h(this.view, a, this.littleEndian, 52, 8), b && (this.offset += 8), c }, c.readDouble = c.readFloat64, b.MAX_VARINT32_BYTES = 5, b.calculateVarint32 = function (a) { return a >>>= 0, a < 128 ? 1 : a < 16384 ? 2 : 1 << 21 > a ? 3 : 1 << 28 > a ? 4 : 5 }, b.zigZagEncode32 = function (a) { return ((a |= 0) << 1 ^ a >> 31) >>> 0 }, b.zigZagDecode32 = function (a) { return 0 | a >>> 1 ^ -(1 & a) }, c.writeVarint32 = function (a, c) { var f; var e; var g; var d = typeof c === 'undefined'; if (d && (c = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a |= 0, typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal offset: ' + c + ' (not an integer)'); if (c >>>= 0, c < 0 || c + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + c + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } for (e = b.calculateVarint32(a), c += e, g = this.buffer.byteLength, c > g && this.resize((g *= 2) > c ? g : c), c -= e, a >>>= 0; a >= 128;)f = 128 | 127 & a, this.view[c++] = f, a >>>= 7; return this.view[c++] = a, d ? (this.offset = c, this) : e }, c.writeVarint32ZigZag = function (a, c) { return this.writeVarint32(b.zigZagEncode32(a), c) }, c.readVarint32 = function (a) { var e; var c; var d; var f; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 1 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 1 + ') <= ' + this.buffer.byteLength) }c = 0, d = 0; do { if (!this.noAssert && a > this.limit) throw f = Error('Truncated'), f.truncated = !0, f; e = this.view[a++], c < 5 && (d |= (127 & e) << 7 * c), ++c; } while ((128 & e) !== 0); return d |= 0, b ? (this.offset = a, d) : { value: d, length: c } }, c.readVarint32ZigZag = function (a) { var c = this.readVarint32(a); return typeof c === 'object' ? c.value = b.zigZagDecode32(c.value) : c = b.zigZagDecode32(c), c }, a && (b.MAX_VARINT64_BYTES = 10, b.calculateVarint64 = function (b) { typeof b === 'number' ? b = a.fromNumber(b) : typeof b === 'string' && (b = a.fromString(b)); var c = b.toInt() >>> 0; var d = b.shiftRightUnsigned(28).toInt() >>> 0; var e = b.shiftRightUnsigned(56).toInt() >>> 0; return e == 0 ? d == 0 ? c < 16384 ? c < 128 ? 1 : 2 : 1 << 21 > c ? 3 : 4 : d < 16384 ? d < 128 ? 5 : 6 : 1 << 21 > d ? 7 : 8 : e < 128 ? 9 : 10 }, b.zigZagEncode64 = function (b) { return typeof b === 'number' ? b = a.fromNumber(b, !1) : typeof b === 'string' ? b = a.fromString(b, !1) : b.unsigned !== !1 && (b = b.toSigned()), b.shiftLeft(1).xor(b.shiftRight(63)).toUnsigned() }, b.zigZagDecode64 = function (b) { return typeof b === 'number' ? b = a.fromNumber(b, !1) : typeof b === 'string' ? b = a.fromString(b, !1) : b.unsigned !== !1 && (b = b.toSigned()), b.shiftRightUnsigned(1).xor(b.and(a.ONE).toSigned().negate()).toSigned() }, c.writeVarint64 = function (c, d) { var f; var g; var h; var i; var j; var e = typeof d === 'undefined'; if (e && (d = this.offset), !this.noAssert) { if (typeof c === 'number')c = a.fromNumber(c); else if (typeof c === 'string')c = a.fromString(c); else if (!(c && c instanceof a)) throw TypeError('Illegal value: ' + c + ' (not an integer or Long)'); if (typeof d !== 'number' || d % 1 !== 0) throw TypeError('Illegal offset: ' + d + ' (not an integer)'); if (d >>>= 0, d < 0 || d + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + d + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } switch (typeof c === 'number' ? c = a.fromNumber(c, !1) : typeof c === 'string' ? c = a.fromString(c, !1) : c.unsigned !== !1 && (c = c.toSigned()), f = b.calculateVarint64(c), g = c.toInt() >>> 0, h = c.shiftRightUnsigned(28).toInt() >>> 0, i = c.shiftRightUnsigned(56).toInt() >>> 0, d += f, j = this.buffer.byteLength, d > j && this.resize((j *= 2) > d ? j : d), d -= f, f) { case 10:this.view[d + 9] = 1 & i >>> 7; case 9:this.view[d + 8] = f !== 9 ? 128 | i : 127 & i; case 8:this.view[d + 7] = f !== 8 ? 128 | h >>> 21 : 127 & h >>> 21; case 7:this.view[d + 6] = f !== 7 ? 128 | h >>> 14 : 127 & h >>> 14; case 6:this.view[d + 5] = f !== 6 ? 128 | h >>> 7 : 127 & h >>> 7; case 5:this.view[d + 4] = f !== 5 ? 128 | h : 127 & h; case 4:this.view[d + 3] = f !== 4 ? 128 | g >>> 21 : 127 & g >>> 21; case 3:this.view[d + 2] = f !== 3 ? 128 | g >>> 14 : 127 & g >>> 14; case 2:this.view[d + 1] = f !== 2 ? 128 | g >>> 7 : 127 & g >>> 7; case 1:this.view[d] = f !== 1 ? 128 | g : 127 & g; } return e ? (this.offset += f, this) : f }, c.writeVarint64ZigZag = function (a, c) { return this.writeVarint64(b.zigZagEncode64(a), c) }, c.readVarint64 = function (b) { var d; var e; var f; var g; var h; var i; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 1 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 1 + ') <= ' + this.buffer.byteLength) } if (d = b, e = 0, f = 0, g = 0, h = 0, h = this.view[b++], e = 127 & h, 128 & h && (h = this.view[b++], e |= (127 & h) << 7, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], e |= (127 & h) << 14, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], e |= (127 & h) << 21, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], f = 127 & h, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], f |= (127 & h) << 7, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], f |= (127 & h) << 14, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], f |= (127 & h) << 21, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], g = 127 & h, (128 & h || this.noAssert && typeof h === 'undefined') && (h = this.view[b++], g |= (127 & h) << 7, 128 & h || this.noAssert && typeof h === 'undefined')))))))))) throw Error('Buffer overrun'); return i = a.fromBits(e | f << 28, f >>> 4 | g << 24, !1), c ? (this.offset = b, i) : { value: i, length: b - d } }, c.readVarint64ZigZag = function (c) { var d = this.readVarint64(c); return d && d.value instanceof a ? d.value = b.zigZagDecode64(d.value) : d = b.zigZagDecode64(d), d }), c.writeCString = function (a, b) { var d; var e; var g; var c = typeof b === 'undefined'; if (c && (b = this.offset), e = a.length, !this.noAssert) { if (typeof a !== 'string') throw TypeError('Illegal str: Not a string'); for (d = 0; e > d; ++d) if (a.charCodeAt(d) === 0) throw RangeError('Illegal str: Contains NULL-characters'); if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return e = k.calculateUTF16asUTF8(f(a))[1], b += e + 1, g = this.buffer.byteLength, b > g && this.resize((g *= 2) > b ? g : b), b -= e + 1, k.encodeUTF16toUTF8(f(a), function (a) { this.view[b++] = a; }.bind(this)), this.view[b++] = 0, c ? (this.offset = b, this) : e }, c.readCString = function (a) { var c; var e; var f; var b = typeof a === 'undefined'; if (b && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 1 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 1 + ') <= ' + this.buffer.byteLength) } return c = a, f = -1, k.decodeUTF8toUTF16(function () { if (f === 0) return null; if (a >= this.limit) throw RangeError('Illegal range: Truncated data, ' + a + ' < ' + this.limit); return f = this.view[a++], f === 0 ? null : f }.bind(this), e = g(), !0), b ? (this.offset = a, e()) : { string: e(), length: a - c } }, c.writeIString = function (a, b) { var e; var d; var g; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof a !== 'string') throw TypeError('Illegal str: Not a string'); if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } if (d = b, e = k.calculateUTF16asUTF8(f(a), this.noAssert)[1], b += 4 + e, g = this.buffer.byteLength, b > g && this.resize((g *= 2) > b ? g : b), b -= 4 + e, this.littleEndian ? (this.view[b + 3] = 255 & e >>> 24, this.view[b + 2] = 255 & e >>> 16, this.view[b + 1] = 255 & e >>> 8, this.view[b] = 255 & e) : (this.view[b] = 255 & e >>> 24, this.view[b + 1] = 255 & e >>> 16, this.view[b + 2] = 255 & e >>> 8, this.view[b + 3] = 255 & e), b += 4, k.encodeUTF16toUTF8(f(a), function (a) { this.view[b++] = a; }.bind(this)), b !== d + 4 + e) throw RangeError('Illegal range: Truncated data, ' + b + ' == ' + (b + 4 + e)); return c ? (this.offset = b, this) : b - d }, c.readIString = function (a) {
      var d; var e; var f; var c = typeof a === 'undefined';
      if (c && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 4 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 4 + ') <= ' + this.buffer.byteLength) } return d = a, e = this.readUint32(a), f = this.readUTF8String(e, b.METRICS_BYTES, a += 4), a += f.length, c ? (this.offset = a, f.string) : { string: f.string, length: a - d }
    }, b.METRICS_CHARS = 'c', b.METRICS_BYTES = 'b', c.writeUTF8String = function (a, b) { var d; var e; var g; var c = typeof b === 'undefined'; if (c && (b = this.offset), !this.noAssert) { if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: ' + b + ' (not an integer)'); if (b >>>= 0, b < 0 || b + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + b + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return e = b, d = k.calculateUTF16asUTF8(f(a))[1], b += d, g = this.buffer.byteLength, b > g && this.resize((g *= 2) > b ? g : b), b -= d, k.encodeUTF16toUTF8(f(a), function (a) { this.view[b++] = a; }.bind(this)), c ? (this.offset = b, this) : b - e }, c.writeString = c.writeUTF8String, b.calculateUTF8Chars = function (a) { return k.calculateUTF16asUTF8(f(a))[0] }, b.calculateUTF8Bytes = function (a) { return k.calculateUTF16asUTF8(f(a))[1] }, b.calculateString = b.calculateUTF8Bytes, c.readUTF8String = function (a, c, d) { var e, i, f, h, j; if (typeof c === 'number' && (d = c, c = void 0), e = typeof d === 'undefined', e && (d = this.offset), typeof c === 'undefined' && (c = b.METRICS_CHARS), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal length: ' + a + ' (not an integer)'); if (a |= 0, typeof d !== 'number' || d % 1 !== 0) throw TypeError('Illegal offset: ' + d + ' (not an integer)'); if (d >>>= 0, d < 0 || d + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + d + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } if (f = 0, h = d, c === b.METRICS_CHARS) { if (i = g(), k.decodeUTF8(function () { return a > f && d < this.limit ? this.view[d++] : null }.bind(this), function (a) { ++f, k.UTF8toUTF16(a, i); }), f !== a) throw RangeError('Illegal range: Truncated data, ' + f + ' == ' + a); return e ? (this.offset = d, i()) : { string: i(), length: d - h } } if (c === b.METRICS_BYTES) { if (!this.noAssert) { if (typeof d !== 'number' || d % 1 !== 0) throw TypeError('Illegal offset: ' + d + ' (not an integer)'); if (d >>>= 0, d < 0 || d + a > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + d + ' (+' + a + ') <= ' + this.buffer.byteLength) } if (j = d + a, k.decodeUTF8toUTF16(function () { return j > d ? this.view[d++] : null }.bind(this), i = g(), this.noAssert), d !== j) throw RangeError('Illegal range: Truncated data, ' + d + ' == ' + j); return e ? (this.offset = d, i()) : { string: i(), length: d - h } } throw TypeError('Unsupported metrics: ' + c) }, c.readString = c.readUTF8String, c.writeVString = function (a, c) { var g; var h; var e; var i; var d = typeof c === 'undefined'; if (d && (c = this.offset), !this.noAssert) { if (typeof a !== 'string') throw TypeError('Illegal str: Not a string'); if (typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal offset: ' + c + ' (not an integer)'); if (c >>>= 0, c < 0 || c + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + c + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } if (e = c, g = k.calculateUTF16asUTF8(f(a), this.noAssert)[1], h = b.calculateVarint32(g), c += h + g, i = this.buffer.byteLength, c > i && this.resize((i *= 2) > c ? i : c), c -= h + g, c += this.writeVarint32(g, c), k.encodeUTF16toUTF8(f(a), function (a) { this.view[c++] = a; }.bind(this)), c !== e + g + h) throw RangeError('Illegal range: Truncated data, ' + c + ' == ' + (c + g + h)); return d ? (this.offset = c, this) : c - e }, c.readVString = function (a) { var d; var e; var f; var c = typeof a === 'undefined'; if (c && (a = this.offset), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 1 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 1 + ') <= ' + this.buffer.byteLength) } return d = a, e = this.readVarint32(a), f = this.readUTF8String(e.value, b.METRICS_BYTES, a += e.length), a += f.length, c ? (this.offset = a, f.string) : { string: f.string, length: a - d } }, c.append = function (a, c, d) { var e, f, g; if ((typeof c === 'number' || typeof c !== 'string') && (d = c, c = void 0), e = typeof d === 'undefined', e && (d = this.offset), !this.noAssert) { if (typeof d !== 'number' || d % 1 !== 0) throw TypeError('Illegal offset: ' + d + ' (not an integer)'); if (d >>>= 0, d < 0 || d + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + d + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return a instanceof b || (a = b.wrap(a, c)), f = a.limit - a.offset, f <= 0 ? this : (d += f, g = this.buffer.byteLength, d > g && this.resize((g *= 2) > d ? g : d), d -= f, this.view.set(a.view.subarray(a.offset, a.limit), d), a.offset += f, e && (this.offset += f), this) }, c.appendTo = function (a, b) { return a.append(this, b), this }, c.assert = function (a) { return this.noAssert = !a, this }, c.capacity = function () { return this.buffer.byteLength }, c.clear = function () { return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this }, c.clone = function (a) { var c = new b(0, this.littleEndian, this.noAssert); return a ? (c.buffer = new ArrayBuffer(this.buffer.byteLength), c.view = new Uint8Array(c.buffer)) : (c.buffer = this.buffer, c.view = this.view), c.offset = this.offset, c.markedOffset = this.markedOffset, c.limit = this.limit, c }, c.compact = function (a, b) { var c, e, f; if (typeof a === 'undefined' && (a = this.offset), typeof b === 'undefined' && (b = this.limit), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (b >>>= 0, a < 0 || a > b || b > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + a + ' <= ' + b + ' <= ' + this.buffer.byteLength) } return a === 0 && b === this.buffer.byteLength ? this : (c = b - a, c === 0 ? (this.buffer = d, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= a), this.offset = 0, this.limit = 0, this) : (e = new ArrayBuffer(c), f = new Uint8Array(e), f.set(this.view.subarray(a, b)), this.buffer = e, this.view = f, this.markedOffset >= 0 && (this.markedOffset -= a), this.offset = 0, this.limit = c, this)) }, c.copy = function (a, c) { if (typeof a === 'undefined' && (a = this.offset), typeof c === 'undefined' && (c = this.limit), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (a >>>= 0, typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (c >>>= 0, a < 0 || a > c || c > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + a + ' <= ' + c + ' <= ' + this.buffer.byteLength) } if (a === c) return new b(0, this.littleEndian, this.noAssert); var d = c - a; var e = new b(d, this.littleEndian, this.noAssert); return e.offset = 0, e.limit = d, e.markedOffset >= 0 && (e.markedOffset -= a), this.copyTo(e, 0, a, c), e }, c.copyTo = function (a, c, d, e) { var f, g, h; if (!this.noAssert && !b.isByteBuffer(a)) throw TypeError('Illegal target: Not a ByteBuffer'); if (c = (g = typeof c === 'undefined') ? a.offset : 0 | c, d = (f = typeof d === 'undefined') ? this.offset : 0 | d, e = typeof e === 'undefined' ? this.limit : 0 | e, c < 0 || c > a.buffer.byteLength) throw RangeError('Illegal target range: 0 <= ' + c + ' <= ' + a.buffer.byteLength); if (d < 0 || e > this.buffer.byteLength) throw RangeError('Illegal source range: 0 <= ' + d + ' <= ' + this.buffer.byteLength); return h = e - d, h === 0 ? a : (a.ensureCapacity(c + h), a.view.set(this.view.subarray(d, e), c), f && (this.offset += h), g && (a.offset += h), this) }, c.ensureCapacity = function (a) { var b = this.buffer.byteLength; return a > b ? this.resize((b *= 2) > a ? b : a) : this }, c.fill = function (a, b, c) { var d = typeof b === 'undefined'; if (d && (b = this.offset), typeof a === 'string' && a.length > 0 && (a = a.charCodeAt(0)), typeof b === 'undefined' && (b = this.offset), typeof c === 'undefined' && (c = this.limit), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal value: ' + a + ' (not an integer)'); if (a |= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (b >>>= 0, typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (c >>>= 0, b < 0 || b > c || c > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + b + ' <= ' + c + ' <= ' + this.buffer.byteLength) } if (b >= c) return this; for (;c > b;) this.view[b++] = a; return d && (this.offset = b), this }, c.flip = function () { return this.limit = this.offset, this.offset = 0, this }, c.mark = function (a) { if (a = typeof a === 'undefined' ? this.offset : a, !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal offset: ' + a + ' (not an integer)'); if (a >>>= 0, a < 0 || a + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + a + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return this.markedOffset = a, this }, c.order = function (a) { if (!this.noAssert && typeof a !== 'boolean') throw TypeError('Illegal littleEndian: Not a boolean'); return this.littleEndian = !!a, this }, c.LE = function (a) { return this.littleEndian = typeof a !== 'undefined' ? !!a : !0, this }, c.BE = function (a) { return this.littleEndian = typeof a !== 'undefined' ? !a : !1, this }, c.prepend = function (a, c, d) { var e, f, g, h, i; if ((typeof c === 'number' || typeof c !== 'string') && (d = c, c = void 0), e = typeof d === 'undefined', e && (d = this.offset), !this.noAssert) { if (typeof d !== 'number' || d % 1 !== 0) throw TypeError('Illegal offset: ' + d + ' (not an integer)'); if (d >>>= 0, d < 0 || d + 0 > this.buffer.byteLength) throw RangeError('Illegal offset: 0 <= ' + d + ' (+' + 0 + ') <= ' + this.buffer.byteLength) } return a instanceof b || (a = b.wrap(a, c)), f = a.limit - a.offset, f <= 0 ? this : (g = f - d, g > 0 ? (h = new ArrayBuffer(this.buffer.byteLength + g), i = new Uint8Array(h), i.set(this.view.subarray(d, this.buffer.byteLength), f), this.buffer = h, this.view = i, this.offset += g, this.markedOffset >= 0 && (this.markedOffset += g), this.limit += g, d += g) : new Uint8Array(this.buffer), this.view.set(a.view.subarray(a.offset, a.limit), d - f), a.offset = a.limit, e && (this.offset -= f), this) }, c.prependTo = function (a, b) { return a.prepend(this, b), this }, c.printDebug = function (a) { typeof a !== 'function' && (a = console.log.bind(console)), a(this.toString() + '\n-------------------------------------------------------------------\n' + this.toDebug(!0)); }, c.remaining = function () { return this.limit - this.offset }, c.reset = function () { return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this }, c.resize = function (a) { var b, c; if (!this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal capacity: ' + a + ' (not an integer)'); if (a |= 0, a < 0) throw RangeError('Illegal capacity: 0 <= ' + a) } return this.buffer.byteLength < a && (b = new ArrayBuffer(a), c = new Uint8Array(b), c.set(this.view), this.buffer = b, this.view = c), this }, c.reverse = function (a, b) { if (typeof a === 'undefined' && (a = this.offset), typeof b === 'undefined' && (b = this.limit), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (b >>>= 0, a < 0 || a > b || b > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + a + ' <= ' + b + ' <= ' + this.buffer.byteLength) } return a === b ? this : (Array.prototype.reverse.call(this.view.subarray(a, b)), this) }, c.skip = function (a) { if (!this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal length: ' + a + ' (not an integer)'); a |= 0; } var b = this.offset + a; if (!this.noAssert && (b < 0 || b > this.buffer.byteLength)) throw RangeError('Illegal length: 0 <= ' + this.offset + ' + ' + a + ' <= ' + this.buffer.byteLength); return this.offset = b, this }, c.slice = function (a, b) { if (typeof a === 'undefined' && (a = this.offset), typeof b === 'undefined' && (b = this.limit), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (b >>>= 0, a < 0 || a > b || b > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + a + ' <= ' + b + ' <= ' + this.buffer.byteLength) } var c = this.clone(); return c.offset = a, c.limit = b, c }, c.toBuffer = function (a) { var e; var b = this.offset; var c = this.limit; if (!this.noAssert) { if (typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal offset: Not an integer'); if (b >>>= 0, typeof c !== 'number' || c % 1 !== 0) throw TypeError('Illegal limit: Not an integer'); if (c >>>= 0, b < 0 || b > c || c > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + b + ' <= ' + c + ' <= ' + this.buffer.byteLength) } return a || b !== 0 || c !== this.buffer.byteLength ? b === c ? d : (e = new ArrayBuffer(c - b), new Uint8Array(e).set(new Uint8Array(this.buffer).subarray(b, c), 0), e) : this.buffer }, c.toArrayBuffer = c.toBuffer, c.toString = function (a, b, c) { if (typeof a === 'undefined') return 'ByteBufferAB(offset=' + this.offset + ',markedOffset=' + this.markedOffset + ',limit=' + this.limit + ',capacity=' + this.capacity() + ')'; switch (typeof a === 'number' && (a = 'utf8', b = a, c = b), a) { case 'utf8':return this.toUTF8(b, c); case 'base64':return this.toBase64(b, c); case 'hex':return this.toHex(b, c); case 'binary':return this.toBinary(b, c); case 'debug':return this.toDebug(); case 'columns':return this.toColumns(); default:throw Error('Unsupported encoding: ' + a) } }, j = (function () { var d; var e; var a = {}; var b = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]; var c = []; for (d = 0, e = b.length; e > d; ++d)c[b[d]] = d; return a.encode = function (a, c) { for (var d, e; (d = a()) !== null;)c(b[63 & d >> 2]), e = (3 & d) << 4, (d = a()) !== null ? (e |= 15 & d >> 4, c(b[63 & (e | 15 & d >> 4)]), e = (15 & d) << 2, (d = a()) !== null ? (c(b[63 & (e | 3 & d >> 6)]), c(b[63 & d])) : (c(b[63 & e]), c(61))) : (c(b[63 & e]), c(61), c(61)); }, a.decode = function (a, b) { function g (a) { throw Error('Illegal character code: ' + a) } for (var d, e, f; (d = a()) !== null;) if (e = c[d], typeof e === 'undefined' && g(d), (d = a()) !== null && (f = c[d], typeof f === 'undefined' && g(d), b(e << 2 >>> 0 | (48 & f) >> 4), (d = a()) !== null)) { if (e = c[d], typeof e === 'undefined') { if (d === 61) break; g(d); } if (b((15 & f) << 4 >>> 0 | (60 & e) >> 2), (d = a()) !== null) { if (f = c[d], typeof f === 'undefined') { if (d === 61) break; g(d); }b((3 & e) << 6 >>> 0 | f); } } }, a.test = function (a) { return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(a) }, a }()), c.toBase64 = function (a, b) { if (typeof a === 'undefined' && (a = this.offset), typeof b === 'undefined' && (b = this.limit), a = 0 | a, b = 0 | b, a < 0 || b > this.capacity || a > b) throw RangeError('begin, end'); var c; return j.encode(function () { return b > a ? this.view[a++] : null }.bind(this), c = g()), c() }, b.fromBase64 = function (a, c) { if (typeof a !== 'string') throw TypeError('str'); var d = new b(3 * (a.length / 4), c); var e = 0; return j.decode(f(a), function (a) { d.view[e++] = a; }), d.limit = e, d }, b.btoa = function (a) { return b.fromBinary(a).toBase64() }, b.atob = function (a) { return b.fromBase64(a).toBinary() }, c.toBinary = function (a, b) { if (typeof a === 'undefined' && (a = this.offset), typeof b === 'undefined' && (b = this.limit), a |= 0, b |= 0, a < 0 || b > this.capacity() || a > b) throw RangeError('begin, end'); if (a === b) return ''; for (var c = [], d = []; b > a;)c.push(this.view[a++]), c.length >= 1024 && (d.push(String.fromCharCode.apply(String, c)), c = []); return d.join('') + String.fromCharCode.apply(String, c) }, b.fromBinary = function (a, c) { if (typeof a !== 'string') throw TypeError('str'); for (var f, d = 0, e = a.length, g = new b(e, c); e > d;) { if (f = a.charCodeAt(d), f > 255) throw RangeError('illegal char code: ' + f); g.view[d++] = f; } return g.limit = e, g }, c.toDebug = function (a) { for (var d, b = -1, c = this.buffer.byteLength, e = '', f = '', g = ''; c > b;) { if (b !== -1 && (d = this.view[b], e += d < 16 ? '0' + d.toString(16).toUpperCase() : d.toString(16).toUpperCase(), a && (f += d > 32 && d < 127 ? String.fromCharCode(d) : '.')), ++b, a && b > 0 && b % 16 === 0 && b !== c) { for (;e.length < 51;)e += ' '; g += e + f + '\n', e = f = ''; }e += b === this.offset && b === this.limit ? b === this.markedOffset ? '!' : '|' : b === this.offset ? b === this.markedOffset ? '[' : '<' : b === this.limit ? b === this.markedOffset ? ']' : '>' : b === this.markedOffset ? "'" : a || b !== 0 && b !== c ? ' ' : ''; } if (a && e !== ' ') { for (;e.length < 51;)e += ' '; g += e + f + '\n'; } return a ? g : e }, b.fromDebug = function (a, c, d) { for (var i, j, e = a.length, f = new b(0 | (e + 1) / 3, c, d), g = 0, h = 0, k = !1, l = !1, m = !1, n = !1, o = !1; e > g;) { switch (i = a.charAt(g++)) { case '!':if (!d) { if (l || m || n) { o = !0; break }l = m = n = !0; }f.offset = f.markedOffset = f.limit = h, k = !1; break; case '|':if (!d) { if (l || n) { o = !0; break }l = n = !0; }f.offset = f.limit = h, k = !1; break; case '[':if (!d) { if (l || m) { o = !0; break }l = m = !0; }f.offset = f.markedOffset = h, k = !1; break; case '<':if (!d) { if (l) { o = !0; break }l = !0; }f.offset = h, k = !1; break; case ']':if (!d) { if (n || m) { o = !0; break }n = m = !0; }f.limit = f.markedOffset = h, k = !1; break; case '>':if (!d) { if (n) { o = !0; break }n = !0; }f.limit = h, k = !1; break; case "'":if (!d) { if (m) { o = !0; break }m = !0; }f.markedOffset = h, k = !1; break; case ' ':k = !1; break; default:if (!d && k) { o = !0; break } if (j = parseInt(i + a.charAt(g++), 16), !d && (isNaN(j) || j < 0 || j > 255)) throw TypeError('Illegal str: Not a debug encoded string'); f.view[h++] = j, k = !0; } if (o) throw TypeError('Illegal str: Invalid symbol at ' + g) } if (!d) { if (!l || !n) throw TypeError('Illegal str: Missing offset or limit'); if (h < f.buffer.byteLength) throw TypeError('Illegal str: Not a debug encoded string (is it hex?) ' + h + ' < ' + e) } return f }, c.toHex = function (a, b) { if (a = typeof a === 'undefined' ? this.offset : a, b = typeof b === 'undefined' ? this.limit : b, !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (b >>>= 0, a < 0 || a > b || b > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + a + ' <= ' + b + ' <= ' + this.buffer.byteLength) } for (var d, c = new Array(b - a); b > a;)d = this.view[a++], d < 16 ? c.push('0', d.toString(16)) : c.push(d.toString(16)); return c.join('') }, b.fromHex = function (a, c, d) { var g, e, f, h, i; if (!d) { if (typeof a !== 'string') throw TypeError('Illegal str: Not a string'); if (a.length % 2 !== 0) throw TypeError('Illegal str: Length not a multiple of 2') } for (e = a.length, f = new b(0 | e / 2, c), h = 0, i = 0; e > h; h += 2) { if (g = parseInt(a.substring(h, h + 2), 16), !d && (!isFinite(g) || g < 0 || g > 255)) throw TypeError('Illegal str: Contains non-hex characters'); f.view[i++] = g; } return f.limit = i, f }, k = (function () { var a = {}; return a.MAX_CODEPOINT = 1114111, a.encodeUTF8 = function (a, b) { var c = null; for (typeof a === 'number' && (c = a, a = function () { return null }); c !== null || (c = a()) !== null;)c < 128 ? b(127 & c) : c < 2048 ? (b(192 | 31 & c >> 6), b(128 | 63 & c)) : c < 65536 ? (b(224 | 15 & c >> 12), b(128 | 63 & c >> 6), b(128 | 63 & c)) : (b(240 | 7 & c >> 18), b(128 | 63 & c >> 12), b(128 | 63 & c >> 6), b(128 | 63 & c)), c = null; }, a.decodeUTF8 = function (a, b) { for (var c, d, e, f, g = function (a) { a = a.slice(0, a.indexOf(null)); var b = Error(a.toString()); throw b.name = 'TruncatedError', b.bytes = a, b }; (c = a()) !== null;) if ((128 & c) === 0)b(c); else if ((224 & c) === 192)(d = a()) === null && g([c, d]), b((31 & c) << 6 | 63 & d); else if ((240 & c) === 224)((d = a()) === null || (e = a()) === null) && g([c, d, e]), b((15 & c) << 12 | (63 & d) << 6 | 63 & e); else { if ((248 & c) !== 240) throw RangeError('Illegal starting byte: ' + c); ((d = a()) === null || (e = a()) === null || (f = a()) === null) && g([c, d, e, f]), b((7 & c) << 18 | (63 & d) << 12 | (63 & e) << 6 | 63 & f); } }, a.UTF16toUTF8 = function (a, b) { for (var c, d = null; ;) { if ((c = d !== null ? d : a()) === null) break; c >= 55296 && c <= 57343 && (d = a()) !== null && d >= 56320 && d <= 57343 ? (b(1024 * (c - 55296) + d - 56320 + 65536), d = null) : b(c); }d !== null && b(d); }, a.UTF8toUTF16 = function (a, b) { var c = null; for (typeof a === 'number' && (c = a, a = function () { return null }); c !== null || (c = a()) !== null;)c <= 65535 ? b(c) : (c -= 65536, b((c >> 10) + 55296), b(c % 1024 + 56320)), c = null; }, a.encodeUTF16toUTF8 = function (b, c) { a.UTF16toUTF8(b, function (b) { a.encodeUTF8(b, c); }); }, a.decodeUTF8toUTF16 = function (b, c) { a.decodeUTF8(b, function (b) { a.UTF8toUTF16(b, c); }); }, a.calculateCodePoint = function (a) { return a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4 }, a.calculateUTF8 = function (a) { for (var b, c = 0; (b = a()) !== null;)c += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4; return c }, a.calculateUTF16asUTF8 = function (b) { var c = 0; var d = 0; return a.UTF16toUTF8(b, function (a) { ++c, d += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4; }), [c, d] }, a }()), c.toUTF8 = function (a, b) { if (typeof a === 'undefined' && (a = this.offset), typeof b === 'undefined' && (b = this.limit), !this.noAssert) { if (typeof a !== 'number' || a % 1 !== 0) throw TypeError('Illegal begin: Not an integer'); if (a >>>= 0, typeof b !== 'number' || b % 1 !== 0) throw TypeError('Illegal end: Not an integer'); if (b >>>= 0, a < 0 || a > b || b > this.buffer.byteLength) throw RangeError('Illegal range: 0 <= ' + a + ' <= ' + b + ' <= ' + this.buffer.byteLength) } var c; try { k.decodeUTF8toUTF16(function () { return b > a ? this.view[a++] : null }.bind(this), c = g()); } catch (d) { if (a !== b) throw RangeError('Illegal range: Truncated data, ' + a + ' != ' + b) } return c() }, b.fromUTF8 = function (a, c, d) { if (!d && typeof a !== 'string') throw TypeError('Illegal str: Not a string'); var e = new b(k.calculateUTF16asUTF8(f(a), !0)[1], c, d); var g = 0; return k.encodeUTF16toUTF8(f(a), function (a) { e.view[g++] = a; }), e.limit = g, e }, b
  }(c)); var e = (function (b, c) {
    var f; var h; var i; var e = {}; return e.ByteBuffer = b, e.c = b, f = b, e.Long = c || null, e.VERSION = '5.0.1', e.WIRE_TYPES = {}, e.WIRE_TYPES.VARINT = 0, e.WIRE_TYPES.BITS64 = 1, e.WIRE_TYPES.LDELIM = 2, e.WIRE_TYPES.STARTGROUP = 3, e.WIRE_TYPES.ENDGROUP = 4, e.WIRE_TYPES.BITS32 = 5, e.PACKABLE_WIRE_TYPES = [e.WIRE_TYPES.VARINT, e.WIRE_TYPES.BITS64, e.WIRE_TYPES.BITS32], e.TYPES = { int32: { name: 'int32', wireType: e.WIRE_TYPES.VARINT, defaultValue: 0 }, uint32: { name: 'uint32', wireType: e.WIRE_TYPES.VARINT, defaultValue: 0 }, sint32: { name: 'sint32', wireType: e.WIRE_TYPES.VARINT, defaultValue: 0 }, int64: { name: 'int64', wireType: e.WIRE_TYPES.VARINT, defaultValue: e.Long ? e.Long.ZERO : void 0 }, uint64: { name: 'uint64', wireType: e.WIRE_TYPES.VARINT, defaultValue: e.Long ? e.Long.UZERO : void 0 }, sint64: { name: 'sint64', wireType: e.WIRE_TYPES.VARINT, defaultValue: e.Long ? e.Long.ZERO : void 0 }, bool: { name: 'bool', wireType: e.WIRE_TYPES.VARINT, defaultValue: !1 }, double: { name: 'double', wireType: e.WIRE_TYPES.BITS64, defaultValue: 0 }, string: { name: 'string', wireType: e.WIRE_TYPES.LDELIM, defaultValue: '' }, bytes: { name: 'bytes', wireType: e.WIRE_TYPES.LDELIM, defaultValue: null }, fixed32: { name: 'fixed32', wireType: e.WIRE_TYPES.BITS32, defaultValue: 0 }, sfixed32: { name: 'sfixed32', wireType: e.WIRE_TYPES.BITS32, defaultValue: 0 }, fixed64: { name: 'fixed64', wireType: e.WIRE_TYPES.BITS64, defaultValue: e.Long ? e.Long.UZERO : void 0 }, sfixed64: { name: 'sfixed64', wireType: e.WIRE_TYPES.BITS64, defaultValue: e.Long ? e.Long.ZERO : void 0 }, float: { name: 'float', wireType: e.WIRE_TYPES.BITS32, defaultValue: 0 }, enum: { name: 'enum', wireType: e.WIRE_TYPES.VARINT, defaultValue: 0 }, message: { name: 'message', wireType: e.WIRE_TYPES.LDELIM, defaultValue: null }, group: { name: 'group', wireType: e.WIRE_TYPES.STARTGROUP, defaultValue: null } }, e.MAP_KEY_TYPES = [e.TYPES.int32, e.TYPES.sint32, e.TYPES.sfixed32, e.TYPES.uint32, e.TYPES.fixed32, e.TYPES.int64, e.TYPES.sint64, e.TYPES.sfixed64, e.TYPES.uint64, e.TYPES.fixed64, e.TYPES.bool, e.TYPES.string, e.TYPES.bytes], e.ID_MIN = 1, e.ID_MAX = 536870911, e.convertFieldsToCamelCase = !1, e.populateAccessors = !0, e.populateDefaults = !0, e.Util = (function () { var a = {}; return a.IS_NODE = !(typeof process !== 'object' || process + '' != '[object process]' || process.browser), a.XHR = function () { var c; var a = [function () { return new XMLHttpRequest() }, function () { return new ActiveXObject('Msxml2.XMLHTTP') }, function () { return new ActiveXObject('Msxml3.XMLHTTP') }, function () { return new ActiveXObject('Microsoft.XMLHTTP') }]; var b = null; for (c = 0; c < a.length; c++) { try { b = a[c](); } catch (d) { continue } break } if (!b) throw Error('XMLHttpRequest is not supported'); return b }, a.fetch = function (b, c) { if (c && typeof c !== 'function' && (c = null), a.IS_NODE) if (c)g.readFile(b, function (a, b) { a ? c(null) : c('' + b); }); else try { return g.readFileSync(b) } catch (d) { return null } else { var e = a.XHR(); if (e.open('GET', b, c ? !0 : !1), e.setRequestHeader('Accept', 'text/plain'), typeof e.overrideMimeType === 'function' && e.overrideMimeType('text/plain'), !c) return e.send(null), e.status == 200 || e.status == 0 && typeof e.responseText === 'string' ? e.responseText : null; if (e.onreadystatechange = function () { e.readyState == 4 && (e.status == 200 || e.status == 0 && typeof e.responseText === 'string' ? c(e.responseText) : c(null)); }, e.readyState == 4) return; e.send(null); } }, a.toCamelCase = function (a) { return a.replace(/_([a-zA-Z])/g, function (a, b) { return b.toUpperCase() }) }, a }()), e.Lang = { DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g, RULE: /^(?:required|optional|repeated|map)$/, TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/, NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/, TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/, TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/, NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/, NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/, NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/, NUMBER_OCT: /^0[0-7]+$/, NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/, BOOL: /^(?:true|false)$/i, ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/, NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/, WHITESPACE: /\s/, STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g }, e.DotProto = (function (a, b) {
      function h (a, c) { var d = -1; var e = 1; if (a.charAt(0) == '-' && (e = -1, a = a.substring(1)), b.NUMBER_DEC.test(a))d = parseInt(a); else if (b.NUMBER_HEX.test(a))d = parseInt(a.substring(2), 16); else { if (!b.NUMBER_OCT.test(a)) throw Error('illegal id value: ' + (e < 0 ? '-' : '') + a); d = parseInt(a.substring(1), 8); } if (d = 0 | e * d, !c && d < 0) throw Error('illegal id value: ' + (e < 0 ? '-' : '') + a); return d } function i (a) { var c = 1; if (a.charAt(0) == '-' && (c = -1, a = a.substring(1)), b.NUMBER_DEC.test(a)) return c * parseInt(a, 10); if (b.NUMBER_HEX.test(a)) return c * parseInt(a.substring(2), 16); if (b.NUMBER_OCT.test(a)) return c * parseInt(a.substring(1), 8); if (a === 'inf') return 1 / 0 * c; if (a === 'nan') return 0 / 0; if (b.NUMBER_FLT.test(a)) return c * parseFloat(a); throw Error('illegal number value: ' + (c < 0 ? '-' : '') + a) } function j (a, b, c) { typeof a[b] === 'undefined' ? a[b] = c : (Array.isArray(a[b]) || (a[b] = [a[b]]), a[b].push(c)); } var f; var g; var c = {}; var d = function (a) { this.source = a + '', this.index = 0, this.line = 1, this.stack = [], this._stringOpen = null; }; var e = d.prototype; return e._readString = function () { var c; var a = this._stringOpen === '"' ? b.STRING_DQ : b.STRING_SQ; if (a.lastIndex = this.index - 1, c = a.exec(this.source), !c) throw Error('unterminated string'); return this.index = a.lastIndex, this.stack.push(this._stringOpen), this._stringOpen = null, c[1] }, e.next = function () { var a, c, d, e, f, g; if (this.stack.length > 0) return this.stack.shift(); if (this.index >= this.source.length) return null; if (this._stringOpen !== null) return this._readString(); do { for (a = !1; b.WHITESPACE.test(d = this.source.charAt(this.index));) if (d === '\n' && ++this.line, ++this.index === this.source.length) return null; if (this.source.charAt(this.index) === '/') if (++this.index, this.source.charAt(this.index) === '/') { for (;this.source.charAt(++this.index) !== '\n';) if (this.index == this.source.length) return null; ++this.index, ++this.line, a = !0; } else { if ((d = this.source.charAt(this.index)) !== '*') return '/'; do { if (d === '\n' && ++this.line, ++this.index === this.source.length) return null; c = d, d = this.source.charAt(this.index); } while (c !== '*' || d !== '/'); ++this.index, a = !0; } } while (a); if (this.index === this.source.length) return null; if (e = this.index, b.DELIM.lastIndex = 0, f = b.DELIM.test(this.source.charAt(e++)), !f) for (;e < this.source.length && !b.DELIM.test(this.source.charAt(e));)++e; return g = this.source.substring(this.index, this.index = e), (g === '"' || g === "'") && (this._stringOpen = g), g }, e.peek = function () { if (this.stack.length === 0) { var a = this.next(); if (a === null) return null; this.stack.push(a); } return this.stack[0] }, e.skip = function (a) { var b = this.next(); if (b !== a) throw Error("illegal '" + b + "', '" + a + "' expected") }, e.omit = function (a) { return this.peek() === a ? (this.next(), !0) : !1 }, e.toString = function () { return 'Tokenizer (' + this.index + '/' + this.source.length + ' at line ' + this.line + ')' }, c.Tokenizer = d, f = function (a) { this.tn = new d(a), this.proto3 = !1; }, g = f.prototype, g.parse = function () { var c; var a = { name: '[ROOT]', package: null, messages: [], enums: [], imports: [], options: {}, services: [] }; var d = !0; try { for (;c = this.tn.next();) switch (c) { case 'package':if (!d || a.package !== null) throw Error("unexpected 'package'"); if (c = this.tn.next(), !b.TYPEREF.test(c)) throw Error('illegal package name: ' + c); this.tn.skip(';'), a.package = c; break; case 'import':if (!d) throw Error("unexpected 'import'"); c = this.tn.peek(), c === 'public' && this.tn.next(), c = this._readString(), this.tn.skip(';'), a.imports.push(c); break; case 'syntax':if (!d) throw Error("unexpected 'syntax'"); this.tn.skip('='), (a.syntax = this._readString()) === 'proto3' && (this.proto3 = !0), this.tn.skip(';'); break; case 'message':this._parseMessage(a, null), d = !1; break; case 'enum':this._parseEnum(a), d = !1; break; case 'option':this._parseOption(a); break; case 'service':this._parseService(a); break; case 'extend':this._parseExtend(a); break; default:throw Error("unexpected '" + c + "'") } } catch (e) { throw e.message = 'Parse error at line ' + this.tn.line + ': ' + e.message, e } return delete a.name, a }, f.parse = function (a) { return new f(a).parse() }, g._readString = function () { var b; var c; var a = ''; do { if (c = this.tn.next(), c !== "'" && c !== '"') throw Error('illegal string delimiter: ' + c); a += this.tn.next(), this.tn.skip(c), b = this.tn.peek(); } while (b === '"' || b === '"'); return a }, g._readValue = function (a) { var c = this.tn.peek(); if (c === '"' || c === "'") return this._readString(); if (this.tn.next(), b.NUMBER.test(c)) return i(c); if (b.BOOL.test(c)) return c.toLowerCase() === 'true'; if (a && b.TYPEREF.test(c)) return c; throw Error('illegal value: ' + c) }, g._parseOption = function (a, c) { var f; var d = this.tn.next(); var e = !1; if (d === '(' && (e = !0, d = this.tn.next()), !b.TYPEREF.test(d)) throw Error('illegal option name: ' + d); f = d, e && (this.tn.skip(')'), f = '(' + f + ')', d = this.tn.peek(), b.FQTYPEREF.test(d) && (f += d, this.tn.next())), this.tn.skip('='), this._parseOptionValue(a, f), c || this.tn.skip(';'); }, g._parseOptionValue = function (a, c) { var d = this.tn.peek(); if (d !== '{')j(a.options, c, this._readValue(!0)); else for (this.tn.skip('{'); (d = this.tn.next()) !== '}';) { if (!b.NAME.test(d)) throw Error('illegal option name: ' + c + '.' + d); this.tn.omit(':') ? j(a.options, c + '.' + d, this._readValue(!0)) : this._parseOptionValue(a, c + '.' + d); } }, g._parseService = function (a) { var d; var e; var c = this.tn.next(); if (!b.NAME.test(c)) throw Error('illegal service name at line ' + this.tn.line + ': ' + c); for (d = c, e = { name: d, rpc: {}, options: {} }, this.tn.skip('{'); (c = this.tn.next()) !== '}';) if (c === 'option') this._parseOption(e); else { if (c !== 'rpc') throw Error('illegal service token: ' + c); this._parseServiceRPC(e); } this.tn.omit(';'), a.services.push(e); }, g._parseServiceRPC = function (a) { var e; var f; var c = 'rpc'; var d = this.tn.next(); if (!b.NAME.test(d)) throw Error('illegal rpc service method name: ' + d); if (e = d, f = { request: null, response: null, request_stream: !1, response_stream: !1, options: {} }, this.tn.skip('('), d = this.tn.next(), d.toLowerCase() === 'stream' && (f.request_stream = !0, d = this.tn.next()), !b.TYPEREF.test(d)) throw Error('illegal rpc service request type: ' + d); if (f.request = d, this.tn.skip(')'), d = this.tn.next(), d.toLowerCase() !== 'returns') throw Error('illegal rpc service request type delimiter: ' + d); if (this.tn.skip('('), d = this.tn.next(), d.toLowerCase() === 'stream' && (f.response_stream = !0, d = this.tn.next()), f.response = d, this.tn.skip(')'), d = this.tn.peek(), d === '{') { for (this.tn.next(); (d = this.tn.next()) !== '}';) { if (d !== 'option') throw Error('illegal rpc service token: ' + d); this._parseOption(f); } this.tn.omit(';'); } else this.tn.skip(';'); typeof a[c] === 'undefined' && (a[c] = {}), a[c][e] = f; }, g._parseMessage = function (a, c) { var d = !!c; var e = this.tn.next(); var f = { name: '', fields: [], enums: [], messages: [], options: {}, services: [], oneofs: {} }; if (!b.NAME.test(e)) throw Error('illegal ' + (d ? 'group' : 'message') + ' name: ' + e); for (f.name = e, d && (this.tn.skip('='), c.id = h(this.tn.next()), f.isGroup = !0), e = this.tn.peek(), e === '[' && c && this._parseFieldOptions(c), this.tn.skip('{'); (e = this.tn.next()) !== '}';) if (b.RULE.test(e)) this._parseMessageField(f, e); else if (e === 'oneof') this._parseMessageOneOf(f); else if (e === 'enum') this._parseEnum(f); else if (e === 'message') this._parseMessage(f); else if (e === 'option') this._parseOption(f); else if (e === 'service') this._parseService(f); else if (e === 'extensions')f.extensions = this._parseExtensionRanges(); else if (e === 'reserved') this._parseIgnored(); else if (e === 'extend') this._parseExtend(f); else { if (!b.TYPEREF.test(e)) throw Error('illegal message token: ' + e); if (!this.proto3) throw Error('illegal field rule: ' + e); this._parseMessageField(f, 'optional', e); } return this.tn.omit(';'), a.messages.push(f), f }, g._parseIgnored = function () { for (;this.tn.peek() !== ';';) this.tn.next(); this.tn.skip(';'); }, g._parseMessageField = function (a, c, d) {
        var e, f, g; if (!b.RULE.test(c)) throw Error('illegal message field rule: ' + c); if (e = { rule: c, type: '', name: '', options: {}, id: 0 }, c === 'map') { if (d) throw Error('illegal type: ' + d); if (this.tn.skip('<'), f = this.tn.next(), !b.TYPE.test(f) && !b.TYPEREF.test(f)) throw Error('illegal message field type: ' + f); if (e.keytype = f, this.tn.skip(','), f = this.tn.next(), !b.TYPE.test(f) && !b.TYPEREF.test(f)) throw Error('illegal message field: ' + f); if (e.type = f, this.tn.skip('>'), f = this.tn.next(), !b.NAME.test(f)) throw Error('illegal message field name: ' + f); e.name = f, this.tn.skip('='), e.id = h(this.tn.next()), f = this.tn.peek(), f === '[' && this._parseFieldOptions(e), this.tn.skip(';'); } else if (d = typeof d !== 'undefined' ? d : this.tn.next(), d === 'group') { if (g = this._parseMessage(a, e), !/^[A-Z]/.test(g.name)) throw Error('illegal group name: ' + g.name); e.type = g.name, e.name = g.name.toLowerCase(), this.tn.omit(';'); } else {
          if (!b.TYPE.test(d) && !b.TYPEREF.test(d)) throw Error('illegal message field type: ' + d); if (e.type = d, f = this.tn.next(), !b.NAME.test(f)) throw Error('illegal message field name: ' + f)
          e.name = f, this.tn.skip('='), e.id = h(this.tn.next()), f = this.tn.peek(), f === '[' && this._parseFieldOptions(e), this.tn.skip(';');
        } return a.fields.push(e), e
      }, g._parseMessageOneOf = function (a) { var e; var d; var f; var c = this.tn.next(); if (!b.NAME.test(c)) throw Error('illegal oneof name: ' + c); for (d = c, f = [], this.tn.skip('{'); (c = this.tn.next()) !== '}';)e = this._parseMessageField(a, 'optional', c), e.oneof = d, f.push(e.id); this.tn.omit(';'), a.oneofs[d] = f; }, g._parseFieldOptions = function (a) { this.tn.skip('['); for (var b, c = !0; (b = this.tn.peek()) !== ']';)c || this.tn.skip(','), this._parseOption(a, !0), c = !1; this.tn.next(); }, g._parseEnum = function (a) { var e; var c = { name: '', values: [], options: {} }; var d = this.tn.next(); if (!b.NAME.test(d)) throw Error('illegal name: ' + d); for (c.name = d, this.tn.skip('{'); (d = this.tn.next()) !== '}';) if (d === 'option') this._parseOption(c); else { if (!b.NAME.test(d)) throw Error('illegal name: ' + d); this.tn.skip('='), e = { name: d, id: h(this.tn.next(), !0) }, d = this.tn.peek(), d === '[' && this._parseFieldOptions({ options: {} }), this.tn.skip(';'), c.values.push(e); } this.tn.omit(';'), a.enums.push(c); }, g._parseExtensionRanges = function () { var c; var d; var e; var b = []; do { for (d = []; ;) { switch (c = this.tn.next()) { case 'min':e = a.ID_MIN; break; case 'max':e = a.ID_MAX; break; default:e = i(c); } if (d.push(e), d.length === 2) break; if (this.tn.peek() !== 'to') { d.push(e); break } this.tn.next(); }b.push(d); } while (this.tn.omit(',')); return this.tn.skip(';'), b }, g._parseExtend = function (a) { var d; var c = this.tn.next(); if (!b.TYPEREF.test(c)) throw Error('illegal extend reference: ' + c); for (d = { ref: c, fields: [] }, this.tn.skip('{'); (c = this.tn.next()) !== '}';) if (b.RULE.test(c)) this._parseMessageField(d, c); else { if (!b.TYPEREF.test(c)) throw Error('illegal extend token: ' + c); if (!this.proto3) throw Error('illegal field rule: ' + c); this._parseMessageField(d, 'optional', c); } return this.tn.omit(';'), a.messages.push(d), d }, g.toString = function () { return 'Parser at line ' + this.tn.line }, c.Parser = f, c
    }(e, e.Lang)), e.Reflect = (function (a) { function k (b) { if (typeof b === 'string' && (b = a.TYPES[b]), typeof b.defaultValue === 'undefined') throw Error('default value for type ' + b.name + ' is not supported'); return b == a.TYPES.bytes ? new f(0) : b.defaultValue } function l (b, c) { if (b && typeof b.low === 'number' && typeof b.high === 'number' && typeof b.unsigned === 'boolean' && b.low === b.low && b.high === b.high) return new a.Long(b.low, b.high, typeof c === 'undefined' ? b.unsigned : c); if (typeof b === 'string') return a.Long.fromString(b, c || !1, 10); if (typeof b === 'number') return a.Long.fromNumber(b, c || !1); throw Error('not convertible to Long') } function o (b, c) { var d = c.readVarint32(); var e = 7 & d; var f = d >>> 3; switch (e) { case a.WIRE_TYPES.VARINT:do d = c.readUint8(); while ((128 & d) === 128); break; case a.WIRE_TYPES.BITS64:c.offset += 8; break; case a.WIRE_TYPES.LDELIM:d = c.readVarint32(), c.offset += d; break; case a.WIRE_TYPES.STARTGROUP:o(f, c); break; case a.WIRE_TYPES.ENDGROUP:if (f === b) return !1; throw Error('Illegal GROUPEND after unknown group: ' + f + ' (' + b + ' expected)'); case a.WIRE_TYPES.BITS32:c.offset += 4; break; default:throw Error('Illegal wire type in unknown group ' + b + ': ' + e) } return !0 } var g; var h; var i; var j; var m; var n; var p; var q; var r; var s; var t; var u; var v; var w; var x; var y; var z; var A; var B; var c = {}; var d = function (a, b, c) { this.builder = a, this.parent = b, this.name = c, this.className; }; var e = d.prototype; return e.fqn = function () { for (var a = this.name, b = this; ;) { if (b = b.parent, b == null) break; a = b.name + '.' + a; } return a }, e.toString = function (a) { return (a ? this.className + ' ' : '') + this.fqn() }, e.build = function () { throw Error(this.toString(!0) + ' cannot be built directly') }, c.T = d, g = function (a, b, c, e, f) { d.call(this, a, b, c), this.className = 'Namespace', this.children = [], this.options = e || {}, this.syntax = f || 'proto2'; }, h = g.prototype = Object.create(d.prototype), h.getChildren = function (a) { var b, c, d; if (a = a || null, a == null) return this.children.slice(); for (b = [], c = 0, d = this.children.length; d > c; ++c) this.children[c] instanceof a && b.push(this.children[c]); return b }, h.addChild = function (a) { var b; if (b = this.getChild(a.name)) if (b instanceof m.Field && b.name !== b.originalName && this.getChild(b.originalName) === null)b.name = b.originalName; else { if (!(a instanceof m.Field && a.name !== a.originalName && this.getChild(a.originalName) === null)) throw Error('Duplicate name in namespace ' + this.toString(!0) + ': ' + a.name); a.name = a.originalName; } this.children.push(a); }, h.getChild = function (a) { var c; var d; var b = typeof a === 'number' ? 'id' : 'name'; for (c = 0, d = this.children.length; d > c; ++c) if (this.children[c][b] === a) return this.children[c]; return null }, h.resolve = function (a, b) { var g; var d = typeof a === 'string' ? a.split('.') : a; var e = this; var f = 0; if (d[f] === '') { for (;e.parent !== null;)e = e.parent; f++; } do { do { if (!(e instanceof c.Namespace)) { e = null; break } if (g = e.getChild(d[f]), !(g && g instanceof c.T && (!b || g instanceof c.Namespace))) { e = null; break }e = g, f++; } while (f < d.length); if (e != null) break; if (this.parent !== null) return this.parent.resolve(a, b) } while (e != null); return e }, h.qn = function (a) { var e; var f; var b = []; var d = a; do b.unshift(d.name), d = d.parent; while (d !== null); for (e = 1; e <= b.length; e++) if (f = b.slice(b.length - e), a === this.resolve(f, a instanceof c.Namespace)) return f.join('.'); return a.fqn() }, h.build = function () { var e; var c; var d; var a = {}; var b = this.children; for (c = 0, d = b.length; d > c; ++c)e = b[c], e instanceof g && (a[e.name] = e.build()); return Object.defineProperty && Object.defineProperty(a, '$options', { value: this.buildOpt() }), a }, h.buildOpt = function () { var c; var d; var e; var f; var a = {}; var b = Object.keys(this.options); for (c = 0, d = b.length; d > c; ++c)e = b[c], f = this.options[b[c]], a[e] = f; return a }, h.getOption = function (a) { return typeof a === 'undefined' ? this.options : typeof this.options[a] !== 'undefined' ? this.options[a] : null }, c.Namespace = g, i = function (b, c, d, e) { if (this.type = b, this.resolvedType = c, this.isMapKey = d, this.syntax = e, d && a.MAP_KEY_TYPES.indexOf(b) < 0) throw Error('Invalid map key type: ' + b.name) }, j = i.prototype, i.defaultFieldValue = k, j.verifyValue = function (c) { var f; var g; var h; var d = function (a, b) { throw Error('Illegal value for ' + this.toString(!0) + ' of type ' + this.type.name + ': ' + a + ' (' + b + ')') }.bind(this); switch (this.type) { case a.TYPES.int32:case a.TYPES.sint32:case a.TYPES.sfixed32:return (typeof c !== 'number' || c === c && c % 1 !== 0) && d(typeof c, 'not an integer'), c > 4294967295 ? 0 | c : c; case a.TYPES.uint32:case a.TYPES.fixed32:return (typeof c !== 'number' || c === c && c % 1 !== 0) && d(typeof c, 'not an integer'), c < 0 ? c >>> 0 : c; case a.TYPES.int64:case a.TYPES.sint64:case a.TYPES.sfixed64:if (a.Long) try { return l(c, !1) } catch (e) { d(typeof c, e.message); } else d(typeof c, 'requires Long.js'); case a.TYPES.uint64:case a.TYPES.fixed64:if (a.Long) try { return l(c, !0) } catch (e) { d(typeof c, e.message); } else d(typeof c, 'requires Long.js'); case a.TYPES.bool:return typeof c !== 'boolean' && d(typeof c, 'not a boolean'), c; case a.TYPES.float:case a.TYPES.double:return typeof c !== 'number' && d(typeof c, 'not a number'), c; case a.TYPES.string:return typeof c === 'string' || c && c instanceof String || d(typeof c, 'not a string'), '' + c; case a.TYPES.bytes:return b.isByteBuffer(c) ? c : b.wrap(c); case a.TYPES.enum:for (f = this.resolvedType.getChildren(a.Reflect.Enum.Value), h = 0; h < f.length; h++) { if (f[h].name == c) return f[h].id; if (f[h].id == c) return f[h].id } if (this.syntax === 'proto3') return (typeof c !== 'number' || c === c && c % 1 !== 0) && d(typeof c, 'not an integer'), (c > 4294967295 || c < 0) && d(typeof c, 'not in range for uint32'), c; d(c, 'not a valid enum value'); case a.TYPES.group:case a.TYPES.message:if (c && typeof c === 'object' || d(typeof c, 'object expected'), c instanceof this.resolvedType.clazz) return c; if (c instanceof a.Builder.Message) { g = {}; for (h in c)c.hasOwnProperty(h) && (g[h] = c[h]); c = g; } return new this.resolvedType.clazz(c) } throw Error('[INTERNAL] Illegal value for ' + this.toString(!0) + ': ' + c + ' (undefined type ' + this.type + ')') }, j.calculateLength = function (b, c) { if (c === null) return 0; var d; switch (this.type) { case a.TYPES.int32:return c < 0 ? f.calculateVarint64(c) : f.calculateVarint32(c); case a.TYPES.uint32:return f.calculateVarint32(c); case a.TYPES.sint32:return f.calculateVarint32(f.zigZagEncode32(c)); case a.TYPES.fixed32:case a.TYPES.sfixed32:case a.TYPES.float:return 4; case a.TYPES.int64:case a.TYPES.uint64:return f.calculateVarint64(c); case a.TYPES.sint64:return f.calculateVarint64(f.zigZagEncode64(c)); case a.TYPES.fixed64:case a.TYPES.sfixed64:return 8; case a.TYPES.bool:return 1; case a.TYPES.enum:return f.calculateVarint32(c); case a.TYPES.double:return 8; case a.TYPES.string:return d = f.calculateUTF8Bytes(c), f.calculateVarint32(d) + d; case a.TYPES.bytes:if (c.remaining() < 0) throw Error('Illegal value for ' + this.toString(!0) + ': ' + c.remaining() + ' bytes remaining'); return f.calculateVarint32(c.remaining()) + c.remaining(); case a.TYPES.message:return d = this.resolvedType.calculate(c), f.calculateVarint32(d) + d; case a.TYPES.group:return d = this.resolvedType.calculate(c), d + f.calculateVarint32(b << 3 | a.WIRE_TYPES.ENDGROUP) } throw Error('[INTERNAL] Illegal value to encode in ' + this.toString(!0) + ': ' + c + ' (unknown type)') }, j.encodeValue = function (b, c, d) { var e, g; if (c === null) return d; switch (this.type) { case a.TYPES.int32:c < 0 ? d.writeVarint64(c) : d.writeVarint32(c); break; case a.TYPES.uint32:d.writeVarint32(c); break; case a.TYPES.sint32:d.writeVarint32ZigZag(c); break; case a.TYPES.fixed32:d.writeUint32(c); break; case a.TYPES.sfixed32:d.writeInt32(c); break; case a.TYPES.int64:case a.TYPES.uint64:d.writeVarint64(c); break; case a.TYPES.sint64:d.writeVarint64ZigZag(c); break; case a.TYPES.fixed64:d.writeUint64(c); break; case a.TYPES.sfixed64:d.writeInt64(c); break; case a.TYPES.bool:typeof c === 'string' ? d.writeVarint32(c.toLowerCase() === 'false' ? 0 : !!c) : d.writeVarint32(c ? 1 : 0); break; case a.TYPES.enum:d.writeVarint32(c); break; case a.TYPES.float:d.writeFloat32(c); break; case a.TYPES.double:d.writeFloat64(c); break; case a.TYPES.string:d.writeVString(c); break; case a.TYPES.bytes:if (c.remaining() < 0) throw Error('Illegal value for ' + this.toString(!0) + ': ' + c.remaining() + ' bytes remaining'); e = c.offset, d.writeVarint32(c.remaining()), d.append(c), c.offset = e; break; case a.TYPES.message:g = (new f()).LE(), this.resolvedType.encode(c, g), d.writeVarint32(g.offset), d.append(g.flip()); break; case a.TYPES.group:this.resolvedType.encode(c, d), d.writeVarint32(b << 3 | a.WIRE_TYPES.ENDGROUP); break; default:throw Error('[INTERNAL] Illegal value to encode in ' + this.toString(!0) + ': ' + c + ' (unknown type)') } return d }, j.decode = function (b, c, d) { if (c != this.type.wireType) throw Error('Unexpected wire type for element'); var e, f; switch (this.type) { case a.TYPES.int32:return 0 | b.readVarint32(); case a.TYPES.uint32:return b.readVarint32() >>> 0; case a.TYPES.sint32:return 0 | b.readVarint32ZigZag(); case a.TYPES.fixed32:return b.readUint32() >>> 0; case a.TYPES.sfixed32:return 0 | b.readInt32(); case a.TYPES.int64:return b.readVarint64(); case a.TYPES.uint64:return b.readVarint64().toUnsigned(); case a.TYPES.sint64:return b.readVarint64ZigZag(); case a.TYPES.fixed64:return b.readUint64(); case a.TYPES.sfixed64:return b.readInt64(); case a.TYPES.bool:return !!b.readVarint32(); case a.TYPES.enum:return b.readVarint32(); case a.TYPES.float:return b.readFloat(); case a.TYPES.double:return b.readDouble(); case a.TYPES.string:return b.readVString(); case a.TYPES.bytes:if (f = b.readVarint32(), b.remaining() < f) throw Error('Illegal number of bytes for ' + this.toString(!0) + ': ' + f + ' required but got only ' + b.remaining()); return e = b.clone(), e.limit = e.offset + f, b.offset += f, e; case a.TYPES.message:return f = b.readVarint32(), this.resolvedType.decode(b, f); case a.TYPES.group:return this.resolvedType.decode(b, -1, d) } throw Error('[INTERNAL] Illegal decode type') }, j.valueFromString = function (b) { if (!this.isMapKey) throw Error('valueFromString() called on non-map-key element'); switch (this.type) { case a.TYPES.int32:case a.TYPES.sint32:case a.TYPES.sfixed32:case a.TYPES.uint32:case a.TYPES.fixed32:return this.verifyValue(parseInt(b)); case a.TYPES.int64:case a.TYPES.sint64:case a.TYPES.sfixed64:case a.TYPES.uint64:case a.TYPES.fixed64:return this.verifyValue(b); case a.TYPES.bool:return b === 'true'; case a.TYPES.string:return this.verifyValue(b); case a.TYPES.bytes:return f.fromBinary(b) } }, j.valueToString = function (b) { if (!this.isMapKey) throw Error('valueToString() called on non-map-key element'); return this.type === a.TYPES.bytes ? b.toString('binary') : b.toString() }, c.Element = i, m = function (a, b, c, d, e, f) { g.call(this, a, b, c, d, f), this.className = 'Message', this.extensions = void 0, this.clazz = null, this.isGroup = !!e, this._fields = null, this._fieldsById = null, this._fieldsByName = null; }, n = m.prototype = Object.create(g.prototype), n.build = function (c) { var d, h, e, g; if (this.clazz && !c) return this.clazz; for (d = (function (a, c) { function k (b, c, d, e) { var g, h, i, j, l, m, n; if (b === null || typeof b !== 'object') return e && e instanceof a.Reflect.Enum && (g = a.Reflect.Enum.getName(e.object, b), g !== null) ? g : b; if (f.isByteBuffer(b)) return c ? b.toBase64() : b.toBuffer(); if (a.Long.isLong(b)) return d ? b.toString() : a.Long.fromValue(b); if (Array.isArray(b)) return h = [], b.forEach(function (a, b) { h[b] = k(a, c, d, e); }), h; if (h = {}, b instanceof a.Map) { for (i = b.entries(), j = i.next(); !j.done; j = i.next())h[b.keyElem.valueToString(j.value[0])] = k(j.value[1], c, d, b.valueElem.resolvedType); return h }l = b.$type, m = void 0; for (n in b)b.hasOwnProperty(n) && (h[n] = l && (m = l.getChild(n)) ? k(b[n], c, d, m.resolvedType) : k(b[n], c, d)); return h } var i; var j; var d = c.getChildren(a.Reflect.Message.Field); var e = c.getChildren(a.Reflect.Message.OneOf); var g = function (b) { var i, j, k, l; for (a.Builder.Message.call(this), i = 0, j = e.length; j > i; ++i) this[e[i].name] = null; for (i = 0, j = d.length; j > i; ++i)k = d[i], this[k.name] = k.repeated ? [] : k.map ? new a.Map(k) : null, !k.required && c.syntax !== 'proto3' || k.defaultValue === null || (this[k.name] = k.defaultValue); if (arguments.length > 0) if (arguments.length !== 1 || b === null || typeof b !== 'object' || !(typeof b.encode !== 'function' || b instanceof g) || Array.isArray(b) || b instanceof a.Map || f.isByteBuffer(b) || b instanceof ArrayBuffer || a.Long && b instanceof a.Long) for (i = 0, j = arguments.length; j > i; ++i) typeof (l = arguments[i]) !== 'undefined' && this.$set(d[i].name, l); else this.$set(b); }; var h = g.prototype = Object.create(a.Builder.Message.prototype); for (h.add = function (b, d, e) { var f = c._fieldsByName[b]; if (!e) { if (!f) throw Error(this + '#' + b + ' is undefined'); if (!(f instanceof a.Reflect.Message.Field)) throw Error(this + '#' + b + ' is not a field: ' + f.toString(!0)); if (!f.repeated) throw Error(this + '#' + b + ' is not a repeated field'); d = f.verifyValue(d, !0); } return this[b] === null && (this[b] = []), this[b].push(d), this }, h.$add = h.add, h.set = function (b, d, e) { var f, g, h; if (b && typeof b === 'object') { e = d; for (f in b)b.hasOwnProperty(f) && typeof (d = b[f]) !== 'undefined' && this.$set(f, d, e); return this } if (g = c._fieldsByName[b], e) this[b] = d; else { if (!g) throw Error(this + '#' + b + ' is not a field: undefined'); if (!(g instanceof a.Reflect.Message.Field)) throw Error(this + '#' + b + ' is not a field: ' + g.toString(!0)); this[g.name] = d = g.verifyValue(d); } return g && g.oneof && (h = this[g.oneof.name], d !== null ? (h !== null && h !== g.name && (this[h] = null), this[g.oneof.name] = g.name) : h === b && (this[g.oneof.name] = null)), this }, h.$set = h.set, h.get = function (b, d) { if (d) return this[b]; var e = c._fieldsByName[b]; if (!(e && e instanceof a.Reflect.Message.Field)) throw Error(this + '#' + b + ' is not a field: undefined'); if (!(e instanceof a.Reflect.Message.Field)) throw Error(this + '#' + b + ' is not a field: ' + e.toString(!0)); return this[e.name] }, h.$get = h.get, i = 0; i < d.length; i++)j = d[i], j instanceof a.Reflect.Message.ExtensionField || c.builder.options.populateAccessors && (function (a) { var d; var e; var f; var b = a.originalName.replace(/(_[a-zA-Z])/g, function (a) { return a.toUpperCase().replace('_', '') }); b = b.substring(0, 1).toUpperCase() + b.substring(1), d = a.originalName.replace(/([A-Z])/g, function (a) { return '_' + a }), e = function (b, c) { return this[a.name] = c ? b : a.verifyValue(b), this }, f = function () { return this[a.name] }, c.getChild('set' + b) === null && (h['set' + b] = e), c.getChild('set_' + d) === null && (h['set_' + d] = e), c.getChild('get' + b) === null && (h['get' + b] = f), c.getChild('get_' + d) === null && (h['get_' + d] = f); }(j)); return h.encode = function (a, d) { var e, f; typeof a === 'boolean' && (d = a, a = void 0), e = !1, a || (a = new b(), e = !0), f = a.littleEndian; try { return c.encode(this, a.LE(), d), (e ? a.flip() : a).LE(f) } catch (g) { throw a.LE(f), g } }, g.encode = function (a, b, c) { return new g(a).encode(b, c) }, h.calculate = function () { return c.calculate(this) }, h.encodeDelimited = function (a) { var d; var b = !1; return a || (a = new f(), b = !0), d = (new f()).LE(), c.encode(this, d).flip(), a.writeVarint32(d.remaining()), a.append(d), b ? a.flip() : a }, h.encodeAB = function () { try { return this.encode().toArrayBuffer() } catch (a) { throw a.encoded && (a.encoded = a.encoded.toArrayBuffer()), a } }, h.toArrayBuffer = h.encodeAB, h.encodeNB = function () { try { return this.encode().toBuffer() } catch (a) { throw a.encoded && (a.encoded = a.encoded.toBuffer()), a } }, h.toBuffer = h.encodeNB, h.encode64 = function () { try { return this.encode().toBase64() } catch (a) { throw a.encoded && (a.encoded = a.encoded.toBase64()), a } }, h.toBase64 = h.encode64, h.encodeHex = function () { try { return this.encode().toHex() } catch (a) { throw a.encoded && (a.encoded = a.encoded.toHex()), a } }, h.toHex = h.encodeHex, h.toRaw = function (a, b) { return k(this, !!a, !!b, this.$type) }, h.encodeJSON = function () { return JSON.stringify(k(this, !0, !0, this.$type)) }, g.decode = function (a, b) { var d, e; typeof a === 'string' && (a = f.wrap(a, b || 'base64')), a = f.isByteBuffer(a) ? a : f.wrap(a), d = a.littleEndian; try { return e = c.decode(a.LE()), a.LE(d), e } catch (g) { throw a.LE(d), g } }, g.decodeDelimited = function (a, b) { var d, e, g; if (typeof a === 'string' && (a = f.wrap(a, b || 'base64')), a = f.isByteBuffer(a) ? a : f.wrap(a), a.remaining() < 1) return null; if (d = a.offset, e = a.readVarint32(), a.remaining() < e) return a.offset = d, null; try { return g = c.decode(a.slice(a.offset, a.offset + e).LE()), a.offset += e, g } catch (h) { throw a.offset += e, h } }, g.decode64 = function (a) { return g.decode(a, 'base64') }, g.decodeHex = function (a) { return g.decode(a, 'hex') }, g.decodeJSON = function (a) { return new g(JSON.parse(a)) }, h.toString = function () { return c.toString() }, Object.defineProperty && (Object.defineProperty(g, '$options', { value: c.buildOpt() }), Object.defineProperty(h, '$options', { value: g.$options }), Object.defineProperty(g, '$type', { value: c }), Object.defineProperty(h, '$type', { value: c })), g }(a, this)), this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, e = 0, g = this.children.length; g > e; e++) if (h = this.children[e], h instanceof t || h instanceof m || h instanceof x) { if (d.hasOwnProperty(h.name)) throw Error('Illegal reflect child of ' + this.toString(!0) + ': ' + h.toString(!0) + " cannot override static property '" + h.name + "'"); d[h.name] = h.build(); } else if (h instanceof m.Field)h.build(), this._fields.push(h), this._fieldsById[h.id] = h, this._fieldsByName[h.name] = h; else if (!(h instanceof m.OneOf || h instanceof w)) throw Error('Illegal reflect child of ' + this.toString(!0) + ': ' + this.children[e].toString(!0)); return this.clazz = d }, n.encode = function (a, b, c) { var e; var h; var f; var g; var i; var d = null; for (f = 0, g = this._fields.length; g > f; ++f)e = this._fields[f], h = a[e.name], e.required && h === null ? d === null && (d = e) : e.encode(c ? h : e.verifyValue(h), b, a); if (d !== null) throw i = Error('Missing at least one required field for ' + this.toString(!0) + ': ' + d), i.encoded = b, i; return b }, n.calculate = function (a) { for (var e, f, b = 0, c = 0, d = this._fields.length; d > c; ++c) { if (e = this._fields[c], f = a[e.name], e.required && f === null) throw Error('Missing at least one required field for ' + this.toString(!0) + ': ' + e); b += e.calculate(f, a); } return b }, n.decode = function (b, c, d) { var g, h, i, j, e, f, k, l, m, n, p, q; for (c = typeof c === 'number' ? c : -1, e = b.offset, f = new this.clazz(); b.offset < e + c || c === -1 && b.remaining() > 0;) { if (g = b.readVarint32(), h = 7 & g, i = g >>> 3, h === a.WIRE_TYPES.ENDGROUP) { if (i !== d) throw Error('Illegal group end indicator for ' + this.toString(!0) + ': ' + i + ' (' + (d ? d + ' expected' : 'not a group') + ')'); break } if (j = this._fieldsById[i])j.repeated && !j.options.packed ? f[j.name].push(j.decode(h, b)) : j.map ? (l = j.decode(h, b), f[j.name].set(l[0], l[1])) : (f[j.name] = j.decode(h, b), j.oneof && (m = f[j.oneof.name], m !== null && m !== j.name && (f[m] = null), f[j.oneof.name] = j.name)); else switch (h) { case a.WIRE_TYPES.VARINT:b.readVarint32(); break; case a.WIRE_TYPES.BITS32:b.offset += 4; break; case a.WIRE_TYPES.BITS64:b.offset += 8; break; case a.WIRE_TYPES.LDELIM:k = b.readVarint32(), b.offset += k; break; case a.WIRE_TYPES.STARTGROUP:for (;o(i, b););break; default:throw Error('Illegal wire type for unknown field ' + i + ' in ' + this.toString(!0) + '#decode: ' + h) } } for (n = 0, p = this._fields.length; p > n; ++n) if (j = this._fields[n], f[j.name] === null) if (this.syntax === 'proto3')f[j.name] = j.defaultValue; else { if (j.required) throw q = Error('Missing at least one required field for ' + this.toString(!0) + ': ' + j.name), q.decoded = f, q; a.populateDefaults && j.defaultValue !== null && (f[j.name] = j.defaultValue); } return f }, c.Message = m, p = function (b, c, e, f, g, h, i, j, k, l) { d.call(this, b, c, h), this.className = 'Message.Field', this.required = e === 'required', this.repeated = e === 'repeated', this.map = e === 'map', this.keyType = f || null, this.type = g, this.resolvedType = null, this.id = i, this.options = j || {}, this.defaultValue = null, this.oneof = k || null, this.syntax = l || 'proto2', this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof m.ExtensionField || (this.name = a.Util.toCamelCase(this.name)); }, q = p.prototype = Object.create(d.prototype), q.build = function () { this.element = new i(this.type, this.resolvedType, !1, this.syntax), this.map && (this.keyElement = new i(this.keyType, void 0, !0, this.syntax)), this.syntax !== 'proto3' || this.repeated || this.map ? typeof this.options.default !== 'undefined' && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = i.defaultFieldValue(this.type); }, q.verifyValue = function (b, c) { var d, e, f; if (c = c || !1, d = function (a, b) { throw Error('Illegal value for ' + this.toString(!0) + ' of type ' + this.type.name + ': ' + a + ' (' + b + ')') }.bind(this), b === null) return this.required && d(typeof b, 'required'), this.syntax === 'proto3' && this.type !== a.TYPES.message && d(typeof b, 'proto3 field without field presence cannot be null'), null; if (this.repeated && !c) { for (Array.isArray(b) || (b = [b]), f = [], e = 0; e < b.length; e++)f.push(this.element.verifyValue(b[e])); return f } return this.map && !c ? b instanceof a.Map ? b : (b instanceof Object || d(typeof b, 'expected ProtoBuf.Map or raw object for map field'), new a.Map(this, b)) : (!this.repeated && Array.isArray(b) && d(typeof b, 'no array expected'), this.element.verifyValue(b)) }, q.hasWirePresence = function (b, c) { if (this.syntax !== 'proto3') return b !== null; if (this.oneof && c[this.oneof.name] === this.name) return !0; switch (this.type) { case a.TYPES.int32:case a.TYPES.sint32:case a.TYPES.sfixed32:case a.TYPES.uint32:case a.TYPES.fixed32:return b !== 0; case a.TYPES.int64:case a.TYPES.sint64:case a.TYPES.sfixed64:case a.TYPES.uint64:case a.TYPES.fixed64:return b.low !== 0 || b.high !== 0; case a.TYPES.bool:return b; case a.TYPES.float:case a.TYPES.double:return b !== 0; case a.TYPES.string:return b.length > 0; case a.TYPES.bytes:return b.remaining() > 0; case a.TYPES.enum:return b !== 0; case a.TYPES.message:return b !== null; default:return !0 } }, q.encode = function (b, c, d) { var e, g, h, i, j; if (this.type === null || typeof this.type !== 'object') throw Error('[INTERNAL] Unresolved type in ' + this.toString(!0) + ': ' + this.type); if (b === null || this.repeated && b.length == 0) return c; try { if (this.repeated) if (this.options.packed && a.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) { for (c.writeVarint32(this.id << 3 | a.WIRE_TYPES.LDELIM), c.ensureCapacity(c.offset += 1), g = c.offset, e = 0; e < b.length; e++) this.element.encodeValue(this.id, b[e], c); h = c.offset - g, i = f.calculateVarint32(h), i > 1 && (j = c.slice(g, c.offset), g += i - 1, c.offset = g, c.append(j)), c.writeVarint32(h, g - i); } else for (e = 0; e < b.length; e++)c.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, b[e], c); else this.map ? b.forEach(function (b, d) { var g = f.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, d) + f.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, b); c.writeVarint32(this.id << 3 | a.WIRE_TYPES.LDELIM), c.writeVarint32(g), c.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, d, c), c.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, b, c); }, this) : this.hasWirePresence(b, d) && (c.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, b, c)); } catch (k) { throw Error('Illegal value for ' + this.toString(!0) + ': ' + b + ' (' + k + ')') } return c }, q.calculate = function (b, c) { var d, e, g; if (b = this.verifyValue(b), this.type === null || typeof this.type !== 'object') throw Error('[INTERNAL] Unresolved type in ' + this.toString(!0) + ': ' + this.type); if (b === null || this.repeated && b.length == 0) return 0; d = 0; try { if (this.repeated) if (this.options.packed && a.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) { for (d += f.calculateVarint32(this.id << 3 | a.WIRE_TYPES.LDELIM), g = 0, e = 0; e < b.length; e++)g += this.element.calculateLength(this.id, b[e]); d += f.calculateVarint32(g), d += g; } else for (e = 0; e < b.length; e++)d += f.calculateVarint32(this.id << 3 | this.type.wireType), d += this.element.calculateLength(this.id, b[e]); else this.map ? b.forEach(function (b, c) { var g = f.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, c) + f.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, b); d += f.calculateVarint32(this.id << 3 | a.WIRE_TYPES.LDELIM), d += f.calculateVarint32(g), d += g; }, this) : this.hasWirePresence(b, c) && (d += f.calculateVarint32(this.id << 3 | this.type.wireType), d += this.element.calculateLength(this.id, b)); } catch (h) { throw Error('Illegal value for ' + this.toString(!0) + ': ' + b + ' (' + h + ')') } return d }, q.decode = function (b, c, d) { var e; var f; var h; var j; var k; var l; var m; var g = !this.map && b == this.type.wireType || !d && this.repeated && this.options.packed && b == a.WIRE_TYPES.LDELIM || this.map && b == a.WIRE_TYPES.LDELIM; if (!g) throw Error('Illegal wire type for field ' + this.toString(!0) + ': ' + b + ' (' + this.type.wireType + ' expected)'); if (b == a.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && a.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !d) { for (f = c.readVarint32(), f = c.offset + f, h = []; c.offset < f;)h.push(this.decode(this.type.wireType, c, !0)); return h } if (this.map) { if (j = i.defaultFieldValue(this.keyType), e = i.defaultFieldValue(this.type), f = c.readVarint32(), c.remaining() < f) throw Error('Illegal number of bytes for ' + this.toString(!0) + ': ' + f + ' required but got only ' + c.remaining()); for (k = c.clone(), k.limit = k.offset + f, c.offset += f; k.remaining() > 0;) if (l = k.readVarint32(), b = 7 & l, m = l >>> 3, m === 1)j = this.keyElement.decode(k, b, m); else { if (m !== 2) throw Error('Unexpected tag in map field key/value submessage'); e = this.element.decode(k, b, m); } return [j, e] } return this.element.decode(c, b, this.id) }, c.Message.Field = p, r = function (a, b, c, d, e, f, g) { p.call(this, a, b, c, null, d, e, f, g), this.extension; }, r.prototype = Object.create(p.prototype), c.Message.ExtensionField = r, s = function (a, b, c) { d.call(this, a, b, c), this.fields = []; }, c.Message.OneOf = s, t = function (a, b, c, d, e) { g.call(this, a, b, c, d, e), this.className = 'Enum', this.object = null; }, t.getName = function (a, b) { var e; var d; var c = Object.keys(a); for (d = 0; d < c.length; ++d) if (a[e = c[d]] === b) return e; return null }, u = t.prototype = Object.create(g.prototype), u.build = function (b) { var c, d, e, f; if (this.object && !b) return this.object; for (c = new a.Builder.Enum(), d = this.getChildren(t.Value), e = 0, f = d.length; f > e; ++e)c[d[e].name] = d[e].id; return Object.defineProperty && Object.defineProperty(c, '$options', { value: this.buildOpt(), enumerable: !1 }), this.object = c }, c.Enum = t, v = function (a, b, c, e) { d.call(this, a, b, c), this.className = 'Enum.Value', this.id = e; }, v.prototype = Object.create(d.prototype), c.Enum.Value = v, w = function (a, b, c, e) { d.call(this, a, b, c), this.field = e; }, w.prototype = Object.create(d.prototype), c.Extension = w, x = function (a, b, c, d) { g.call(this, a, b, c, d), this.className = 'Service', this.clazz = null; }, y = x.prototype = Object.create(g.prototype), y.build = function (b) { return this.clazz && !b ? this.clazz : this.clazz = (function (a, b) { var g; var c = function (b) { a.Builder.Service.call(this), this.rpcImpl = b || function (a, b, c) { setTimeout(c.bind(this, Error('Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services')), 0); }; }; var d = c.prototype = Object.create(a.Builder.Service.prototype); var e = b.getChildren(a.Reflect.Service.RPCMethod); for (g = 0; g < e.length; g++)!(function (a) { d[a.name] = function (c, d) { try { try { c = a.resolvedRequestType.clazz.decode(f.wrap(c)); } catch (e) { if (!(e instanceof TypeError)) throw e } if (c === null || typeof c !== 'object') throw Error('Illegal arguments'); c instanceof a.resolvedRequestType.clazz || (c = new a.resolvedRequestType.clazz(c)), this.rpcImpl(a.fqn(), c, function (c, e) { if (c) return d(c), void 0; try { e = a.resolvedResponseType.clazz.decode(e); } catch (f) {} return e && e instanceof a.resolvedResponseType.clazz ? (d(null, e), void 0) : (d(Error('Illegal response type received in service method ' + b.name + '#' + a.name)), void 0) }); } catch (e) { setTimeout(d.bind(this, e), 0); } }, c[a.name] = function (b, d, e) { new c(b)[a.name](d, e); }, Object.defineProperty && (Object.defineProperty(c[a.name], '$options', { value: a.buildOpt() }), Object.defineProperty(d[a.name], '$options', { value: c[a.name].$options })); }(e[g])); return Object.defineProperty && (Object.defineProperty(c, '$options', { value: b.buildOpt() }), Object.defineProperty(d, '$options', { value: c.$options }), Object.defineProperty(c, '$type', { value: b }), Object.defineProperty(d, '$type', { value: b })), c }(a, this)) }, c.Service = x, z = function (a, b, c, e) { d.call(this, a, b, c), this.className = 'Service.Method', this.options = e || {}; }, A = z.prototype = Object.create(d.prototype), A.buildOpt = h.buildOpt, c.Service.Method = z, B = function (a, b, c, d, e, f, g, h) { z.call(this, a, b, c, h), this.className = 'Service.RPCMethod', this.requestName = d, this.responseName = e, this.requestStream = f, this.responseStream = g, this.resolvedRequestType = null, this.resolvedResponseType = null; }, B.prototype = Object.create(z.prototype), c.Service.RPCMethod = B, c }(e)), e.Builder = (function (a, b, c) {
      function f (a) { a.messages && a.messages.forEach(function (b) { b.syntax = a.syntax, f(b); }), a.enums && a.enums.forEach(function (b) { b.syntax = a.syntax; }); } var d = function (a) { this.ns = new c.Namespace(this, null, ''), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = a || {}; }; var e = d.prototype; return d.isMessage = function (a) { return typeof a.name !== 'string' ? !1 : typeof a.values !== 'undefined' || typeof a.rpc !== 'undefined' ? !1 : !0 }, d.isMessageField = function (a) { return typeof a.rule !== 'string' || typeof a.name !== 'string' || typeof a.type !== 'string' || typeof a.id === 'undefined' ? !1 : !0 }, d.isEnum = function (a) { return typeof a.name !== 'string' ? !1 : typeof a.values !== 'undefined' && Array.isArray(a.values) && a.values.length !== 0 ? !0 : !1 }, d.isService = function (a) { return typeof a.name === 'string' && typeof a.rpc === 'object' && a.rpc ? !0 : !1 }, d.isExtend = function (a) { return typeof a.ref !== 'string' ? !1 : !0 }, e.reset = function () { return this.ptr = this.ns, this }, e.define = function (a) { if (typeof a !== 'string' || !b.TYPEREF.test(a)) throw Error('illegal namespace: ' + a); return a.split('.').forEach(function (a) { var b = this.ptr.getChild(a); b === null && this.ptr.addChild(b = new c.Namespace(this, this.ptr, a)), this.ptr = b; }, this), this }, e.create = function (b) {
        var e, f, g, h, i; if (!b) return this; if (Array.isArray(b)) { if (b.length === 0) return this; b = b.slice(); } else b = [b]; for (e = [b]; e.length > 0;) {
          if (b = e.pop(), !Array.isArray(b)) throw Error('not a valid namespace: ' + JSON.stringify(b)); for (;b.length > 0;) {
            if (f = b.shift(), d.isMessage(f)) { if (g = new c.Message(this, this.ptr, f.name, f.options, f.isGroup, f.syntax), h = {}, f.oneofs && Object.keys(f.oneofs).forEach(function (a) { g.addChild(h[a] = new c.Message.OneOf(this, g, a)); }, this), f.fields && f.fields.forEach(function (a) { if (g.getChild(0 | a.id) !== null) throw Error('duplicate or invalid field id in ' + g.name + ': ' + a.id); if (a.options && typeof a.options !== 'object') throw Error('illegal field options in ' + g.name + '#' + a.name); var b = null; if (typeof a.oneof === 'string' && !(b = h[a.oneof])) throw Error('illegal oneof in ' + g.name + '#' + a.name + ': ' + a.oneof); a = new c.Message.Field(this, g, a.rule, a.keytype, a.type, a.name, a.id, a.options, b, f.syntax), b && b.fields.push(a), g.addChild(a); }, this), i = [], f.enums && f.enums.forEach(function (a) { i.push(a); }), f.messages && f.messages.forEach(function (a) { i.push(a); }), f.services && f.services.forEach(function (a) { i.push(a); }), f.extensions && (g.extensions = typeof f.extensions[0] === 'number' ? [f.extensions] : f.extensions), this.ptr.addChild(g), i.length > 0) { e.push(b), b = i, i = null, this.ptr = g, g = null; continue }i = null; } else if (d.isEnum(f))g = new c.Enum(this, this.ptr, f.name, f.options, f.syntax), f.values.forEach(function (a) { g.addChild(new c.Enum.Value(this, g, a.name, a.id)); }, this), this.ptr.addChild(g); else if (d.isService(f))g = new c.Service(this, this.ptr, f.name, f.options), Object.keys(f.rpc).forEach(function (a) { var b = f.rpc[a]; g.addChild(new c.Service.RPCMethod(this, g, a, b.request, b.response, !!b.request_stream, !!b.response_stream, b.options)); }, this), this.ptr.addChild(g); else {
              if (!d.isExtend(f)) throw Error('not a valid definition: ' + JSON.stringify(f)); if (g = this.ptr.resolve(f.ref, !0)) {
                f.fields.forEach(function (b) {
                  var d, e, f, h; if (g.getChild(0 | b.id) !== null) throw Error('duplicate extended field id in ' + g.name + ': ' + b.id)
                  if (g.extensions && (d = !1, g.extensions.forEach(function (a) { b.id >= a[0] && b.id <= a[1] && (d = !0); }), !d)) throw Error('illegal extended field id in ' + g.name + ': ' + b.id + ' (not within valid ranges)'); e = b.name, this.options.convertFieldsToCamelCase && (e = a.Util.toCamelCase(e)), f = new c.Message.ExtensionField(this, g, b.rule, b.type, this.ptr.fqn() + '.' + e, b.id, b.options), h = new c.Extension(this, this.ptr, b.name, f), f.extension = h, this.ptr.addChild(h), g.addChild(f);
                }, this);
              } else if (!/\.?google\.protobuf\./.test(f.ref)) throw Error('extended message ' + f.ref + ' is not defined')
            }f = null, g = null;
          }b = null, this.ptr = this.ptr.parent;
        } return this.resolved = !1, this.result = null, this
      }, e.import = function (b, c) { var e; var g; var h; var i; var j; var k; var l; var m; var d = '/'; if (typeof c === 'string') { if (a.Util.IS_NODE, this.files[c] === !0) return this.reset(); this.files[c] = !0; } else if (typeof c === 'object') { if (e = c.root, a.Util.IS_NODE, (e.indexOf('\\') >= 0 || c.file.indexOf('\\') >= 0) && (d = '\\'), g = e + d + c.file, this.files[g] === !0) return this.reset(); this.files[g] = !0; } if (b.imports && b.imports.length > 0) { for (i = !1, typeof c === 'object' ? (this.importRoot = c.root, i = !0, h = this.importRoot, c = c.file, (h.indexOf('\\') >= 0 || c.indexOf('\\') >= 0) && (d = '\\')) : typeof c === 'string' ? this.importRoot ? h = this.importRoot : c.indexOf('/') >= 0 ? (h = c.replace(/\/[^\/]*$/, ''), h === '' && (h = '/')) : c.indexOf('\\') >= 0 ? (h = c.replace(/\\[^\\]*$/, ''), d = '\\') : h = '.' : h = null, j = 0; j < b.imports.length; j++) if (typeof b.imports[j] === 'string') { if (!h) throw Error('cannot determine import root'); if (k = b.imports[j], k === 'google/protobuf/descriptor.proto') continue; if (k = h + d + k, this.files[k] === !0) continue; if (/\.proto$/i.test(k) && !a.DotProto && (k = k.replace(/\.proto$/, '.json')), l = a.Util.fetch(k), l === null) throw Error("failed to import '" + k + "' in '" + c + "': file not found"); /\.json$/i.test(k) ? this.import(JSON.parse(l + ''), k) : this.import(a.DotProto.Parser.parse(l), k); } else c ? /\.(\w+)$/.test(c) ? this.import(b.imports[j], c.replace(/^(.+)\.(\w+)$/, function (a, b, c) { return b + '_import' + j + '.' + c })) : this.import(b.imports[j], c + '_import' + j) : this.import(b.imports[j]); i && (this.importRoot = null); } return b.package && this.define(b.package), b.syntax && f(b), m = this.ptr, b.options && Object.keys(b.options).forEach(function (a) { m.options[a] = b.options[a]; }), b.messages && (this.create(b.messages), this.ptr = m), b.enums && (this.create(b.enums), this.ptr = m), b.services && (this.create(b.services), this.ptr = m), b.extends && this.create(b.extends), this.reset() }, e.resolveAll = function () { var d; if (this.ptr == null || typeof this.ptr.type === 'object') return this; if (this.ptr instanceof c.Namespace) this.ptr.children.forEach(function (a) { this.ptr = a, this.resolveAll(); }, this); else if (this.ptr instanceof c.Message.Field) { if (b.TYPE.test(this.ptr.type)) this.ptr.type = a.TYPES[this.ptr.type]; else { if (!b.TYPEREF.test(this.ptr.type)) throw Error('illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.type); if (d = (this.ptr instanceof c.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0), !d) throw Error('unresolvable type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.type); if (this.ptr.resolvedType = d, d instanceof c.Enum) { if (this.ptr.type = a.TYPES.enum, this.ptr.syntax === 'proto3' && d.syntax !== 'proto3') throw Error('proto3 message cannot reference proto2 enum') } else { if (!(d instanceof c.Message)) throw Error('illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.type); this.ptr.type = d.isGroup ? a.TYPES.group : a.TYPES.message; } } if (this.ptr.map) { if (!b.TYPE.test(this.ptr.keyType)) throw Error('illegal key type for map field in ' + this.ptr.toString(!0) + ': ' + this.ptr.keyType); this.ptr.keyType = a.TYPES[this.ptr.keyType]; } } else if (this.ptr instanceof a.Reflect.Service.Method) { if (!(this.ptr instanceof a.Reflect.Service.RPCMethod)) throw Error('illegal service type in ' + this.ptr.toString(!0)); if (d = this.ptr.parent.resolve(this.ptr.requestName, !0), !(d && d instanceof a.Reflect.Message)) throw Error('Illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.requestName); if (this.ptr.resolvedRequestType = d, d = this.ptr.parent.resolve(this.ptr.responseName, !0), !(d && d instanceof a.Reflect.Message)) throw Error('Illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.responseName); this.ptr.resolvedResponseType = d; } else if (!(this.ptr instanceof a.Reflect.Message.OneOf || this.ptr instanceof a.Reflect.Extension || this.ptr instanceof a.Reflect.Enum.Value)) throw Error('illegal object in namespace: ' + typeof this.ptr + ': ' + this.ptr); return this.reset() }, e.build = function (a) { var b, c, d; if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), this.result === null && (this.result = this.ns.build()), !a) return this.result; for (b = typeof a === 'string' ? a.split('.') : a, c = this.result, d = 0; d < b.length; d++) { if (!c[b[d]]) { c = null; break }c = c[b[d]]; } return c }, e.lookup = function (a, b) { return a ? this.ns.resolve(a, b) : this.ns }, e.toString = function () { return 'Builder' }, d.Message = function () {}, d.Enum = function () {}, d.Service = function () {}, d
    }(e, e.Lang, e.Reflect)), e.Map = (function (a, b) { function e (a) { var b = 0; return { next: function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } } } var c = function (a, c) { var d, e, f, g; if (!a.map) throw Error('field is not a map'); if (this.field = a, this.keyElem = new b.Element(a.keyType, null, !0, a.syntax), this.valueElem = new b.Element(a.type, a.resolvedType, !1, a.syntax), this.map = {}, Object.defineProperty(this, 'size', { get: function () { return Object.keys(this.map).length } }), c) for (d = Object.keys(c), e = 0; e < d.length; e++)f = this.keyElem.valueFromString(d[e]), g = this.valueElem.verifyValue(c[d[e]]), this.map[this.keyElem.valueToString(f)] = { key: f, value: g }; }; var d = c.prototype; return d.clear = function () { this.map = {}; }, d.delete = function (a) { var b = this.keyElem.valueToString(this.keyElem.verifyValue(a)); var c = b in this.map; return delete this.map[b], c }, d.entries = function () { var d; var c; var a = []; var b = Object.keys(this.map); for (c = 0; c < b.length; c++)a.push([(d = this.map[b[c]]).key, d.value]); return e(a) }, d.keys = function () { var c; var a = []; var b = Object.keys(this.map); for (c = 0; c < b.length; c++)a.push(this.map[b[c]].key); return e(a) }, d.values = function () { var c; var a = []; var b = Object.keys(this.map); for (c = 0; c < b.length; c++)a.push(this.map[b[c]].value); return e(a) }, d.forEach = function (a, b) { var e; var d; var c = Object.keys(this.map); for (d = 0; d < c.length; d++)a.call(b, (e = this.map[c[d]]).value, e.key, this); }, d.set = function (a, b) { var c = this.keyElem.verifyValue(a); var d = this.valueElem.verifyValue(b); return this.map[this.keyElem.valueToString(c)] = { key: c, value: d }, this }, d.get = function (a) { var b = this.keyElem.valueToString(this.keyElem.verifyValue(a)); return b in this.map ? this.map[b].value : void 0 }, d.has = function (a) { var b = this.keyElem.valueToString(this.keyElem.verifyValue(a)); return b in this.map }, c }(e, e.Reflect)), e.loadProto = function (a, b, c) { return (typeof b === 'string' || b && typeof b.file === 'string' && typeof b.root === 'string') && (c = b, b = void 0), e.loadJson(e.DotProto.Parser.parse(a), b, c) }, e.protoFromString = e.loadProto, e.loadProtoFile = function (a, b, c) { if (b && typeof b === 'object' ? (c = b, b = null) : b && typeof b === 'function' || (b = null), b) return e.Util.fetch(typeof a === 'string' ? a : a.root + '/' + a.file, function (d) { if (d === null) return b(Error('Failed to fetch file')), void 0; try { b(null, e.loadProto(d, c, a)); } catch (f) { b(f); } }); var d = e.Util.fetch(typeof a === 'object' ? a.root + '/' + a.file : a); return d === null ? null : e.loadProto(d, c, a) }, e.protoFromFile = e.loadProtoFile, e.newBuilder = function (a) { return a = a || {}, typeof a.convertFieldsToCamelCase === 'undefined' && (a.convertFieldsToCamelCase = e.convertFieldsToCamelCase), typeof a.populateAccessors === 'undefined' && (a.populateAccessors = e.populateAccessors), new e.Builder(a) }, e.loadJson = function (a, b, c) { return (typeof b === 'string' || b && typeof b.file === 'string' && typeof b.root === 'string') && (c = b, b = null), b && typeof b === 'object' || (b = e.newBuilder()), typeof a === 'string' && (a = JSON.parse(a)), b.import(a, c), b.resolveAll(), b }, e.loadJsonFile = function (a, b, c) { if (b && typeof b === 'object' ? (c = b, b = null) : b && typeof b === 'function' || (b = null), b) return e.Util.fetch(typeof a === 'string' ? a : a.root + '/' + a.file, function (d) { if (d === null) return b(Error('Failed to fetch file')), void 0; try { b(null, e.loadJson(JSON.parse(d), c, a)); } catch (f) { b(f); } }); var d = e.Util.fetch(typeof a === 'object' ? a.root + '/' + a.file : a); return d === null ? null : e.loadJson(JSON.parse(d), c, a) }, h = a, i = e.loadProto(h, void 0, '').build('Modules').probuf
  }(d, c)); return e
}

const Codec$1 = protobuf(SSMsg$1);
Codec$1.getModule = (pbName) => {
    const modules = new Codec$1[pbName]();
    modules.getArrayData = () => {
        let data = modules.toArrayBuffer();
        data = isArrayBuffer(data) ? [].slice.call(new Int8Array(data)) : data;
        return data;
    };
    return modules;
};

/**
 * 群组 @ 类型
*/
var MentionedType;
(function (MentionedType) {
    /**
     * 所有人
    */
    MentionedType[MentionedType["ALL"] = 1] = "ALL";
    /**
     * 部分人
    */
    MentionedType[MentionedType["SINGAL"] = 2] = "SINGAL";
})(MentionedType || (MentionedType = {}));
var MentionedType$1 = MentionedType;

/**
 * 内置消息类型
 */
var MessageType;
(function (MessageType) {
    /**
     * 文字消息
    */
    MessageType["TextMessage"] = "RC:TxtMsg";
    /**
     * 语音消息
    */
    MessageType["VOICE"] = "RC:VcMsg";
    /**
     * 高质量消息
    */
    MessageType["HQ_VOICE"] = "RC:HQVCMsg";
    /**
     * 图片消息
    */
    MessageType["IMAGE"] = "RC:ImgMsg";
    /**
     * GIF 消息
    */
    MessageType["GIF"] = "RC:GIFMsg";
    /**
     * 图文消息
    */
    MessageType["RICH_CONTENT"] = "RC:ImgTextMsg";
    /**
     * 位置消息
    */
    MessageType["LOCATION"] = "RC:LBSMsg";
    /**
     * 文件消息
    */
    MessageType["FILE"] = "RC:FileMsg";
    /**
     * 小视频消息
    */
    MessageType["SIGHT"] = "RC:SightMsg";
    /**
     * 合并转发消息
    */
    MessageType["COMBINE"] = "RC:CombineMsg";
    /**
     * 聊天室 KV 通知消息
    */
    MessageType["CHRM_KV_NOTIFY"] = "RC:chrmKVNotiMsg";
    /**
     * 日志通知消息
    */
    MessageType["LOG_COMMAND"] = "RC:LogCmdMsg";
    /**
     * 消息扩展
    */
    MessageType["EXPANSION_NOTIFY"] = "RC:MsgExMsg";
    /**
     * 引用消息
    */
    MessageType["REFERENCE"] = "RC:ReferenceMsg";
    /**
     * 撤回消息
    */
    MessageType["RECALL"] = "RC:RcCmd";
})(MessageType || (MessageType = {}));
var MessageType$1 = MessageType;

var NotificationStatus;
(function (NotificationStatus) {
    /**
     * 免打扰已开启
    */
    NotificationStatus[NotificationStatus["OPEN"] = 1] = "OPEN";
    /**
     * 免打扰已关闭
    */
    NotificationStatus[NotificationStatus["CLOSE"] = 2] = "CLOSE";
})(NotificationStatus || (NotificationStatus = {}));
var NotificationStatus$1 = NotificationStatus;

const PublishTopic = {
    // 以下为发送消息操作, 本端发送、其他端同步都为以下值
    PRIVATE: 'ppMsgP',
    GROUP: 'pgMsgP',
    CHATROOM: 'chatMsg',
    CUSTOMER_SERVICE: 'pcMsgP',
    RECALL: 'recallMsg',
    // RTC 消息
    RTC_MSG: 'prMsgS',
    // 以下为服务端通知操作
    NOTIFY_PULL_MSG: 's_ntf',
    RECEIVE_MSG: 's_msg',
    SYNC_STATUS: 's_stat',
    SERVER_NOTIFY: 's_cmd',
    SETTING_NOTIFY: 's_us' // 服务端配置变更通知
};
// 状态消息
const PublishStatusTopic = {
    PRIVATE: 'ppMsgS',
    GROUP: 'pgMsgS',
    CHATROOM: 'chatMsgS'
};
const QueryTopic = {
    GET_SYNC_TIME: 'qrySessionsAtt',
    PULL_MSG: 'pullMsg',
    GET_CONVERSATION_LIST: 'qrySessions',
    REMOVE_CONVERSATION_LIST: 'delSessions',
    DELETE_MESSAGES: 'delMsg',
    CLEAR_UNREAD_COUNT: 'updRRTime',
    PULL_USER_SETTING: 'pullUS',
    PULL_CHRM_MSG: 'chrmPull',
    JOIN_CHATROOM: 'joinChrm',
    JOIN_EXIST_CHATROOM: 'joinChrmR',
    QUIT_CHATROOM: 'exitChrm',
    GET_CHATROOM_INFO: 'queryChrmI',
    UPDATE_CHATROOM_KV: 'setKV',
    DELETE_CHATROOM_KV: 'delKV',
    PULL_CHATROOM_KV: 'pullKV',
    GET_OLD_CONVERSATION_LIST: 'qryRelationR',
    REMOVE_OLD_CONVERSATION: 'delRelation',
    GET_CONVERSATION_STATUS: 'pullSeAtts',
    SET_CONVERSATION_STATUS: 'setSeAtt',
    GET_UPLOAD_FILE_TOKEN: 'qnTkn',
    GET_UPLOAD_FILE_URL: 'qnUrl',
    CLEAR_MESSAGES: {
        PRIVATE: 'cleanPMsg',
        GROUP: 'cleanGMsg',
        CUSTOMER_SERVICE: 'cleanCMsg',
        SYSTEM: 'cleanSMsg'
    },
    // 以下为 RTC 操作
    JOIN_RTC_ROOM: 'rtcRJoin_data',
    QUIT_RTC_ROOM: 'rtcRExit',
    PING_RTC: 'rtcPing',
    SET_RTC_DATA: 'rtcSetData',
    USER_SET_RTC_DATA: 'userSetData',
    GET_RTC_DATA: 'rtcQryData',
    DEL_RTC_DATA: 'rtcDelData',
    SET_RTC_OUT_DATA: 'rtcSetOutData',
    GET_RTC_OUT_DATA: 'rtcQryUserOutData',
    GET_RTC_TOKEN: 'rtcToken',
    SET_RTC_STATE: 'rtcUserState',
    GET_RTC_ROOM_INFO: 'rtcRInfo',
    GET_RTC_USER_INFO_LIST: 'rtcUData',
    SET_RTC_USER_INFO: 'rtcUPut',
    DEL_RTC_USER_INFO: 'rtcUDel',
    GET_RTC_USER_LIST: 'rtcUList'
};
const QueryHistoryTopic = {
    PRIVATE: 'qryPMsg',
    GROUP: 'qryGMsg',
    CHATROOM: 'qryCHMsg',
    CUSTOMER_SERVICE: 'qryCMsg',
    SYSTEM: 'qrySMsg'
};
const PublishTopicToConversationType = {
    [PublishTopic.PRIVATE]: ConversationType$1.PRIVATE,
    [PublishTopic.GROUP]: ConversationType$1.GROUP,
    [PublishTopic.CHATROOM]: ConversationType$1.CHATROOM,
    [PublishTopic.CUSTOMER_SERVICE]: ConversationType$1.CUSTOMER_SERVICE
};
const ConversationTypeToQueryHistoryTopic = {
    [ConversationType$1.PRIVATE]: QueryHistoryTopic.PRIVATE,
    [ConversationType$1.GROUP]: QueryHistoryTopic.GROUP,
    [ConversationType$1.CHATROOM]: QueryHistoryTopic.CHATROOM,
    [ConversationType$1.CUSTOMER_SERVICE]: QueryHistoryTopic.CUSTOMER_SERVICE,
    [ConversationType$1.SYSTEM]: QueryHistoryTopic.SYSTEM
};
const ConversationTypeToClearMessageTopic = {
    [ConversationType$1.PRIVATE]: QueryTopic.CLEAR_MESSAGES.PRIVATE,
    [ConversationType$1.GROUP]: QueryTopic.CLEAR_MESSAGES.GROUP,
    [ConversationType$1.CUSTOMER_SERVICE]: QueryTopic.CLEAR_MESSAGES.CUSTOMER_SERVICE,
    [ConversationType$1.SYSTEM]: QueryTopic.CLEAR_MESSAGES.SYSTEM
};
const ConversationStatusConfig = {
    ENABLED: '1',
    DISABLED: '0'
};
const ConversationStatusType = {
    DO_NOT_DISTURB: 1,
    TOP: 2
};

var MessageDirection;
(function (MessageDirection) {
    /**
     * 己方发送消息
     */
    MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
    /**
     * 己方接收消息
     */
    MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
})(MessageDirection || (MessageDirection = {}));
var MessageDirection$1 = MessageDirection;

/**
 * 序列化、反序列化数据通道
*/
class DataCodec {
    constructor(connectType) {
        this._codec = connectType === 'websocket' ? Codec$1 : Codec;
        this._connectType = connectType;
    }
    /**
     * PB 数据 转为 rmtp 数据 反序列化 通用数据
     * 根据解析的 PBName 分配解码方法. 如果没有单独的解码方法定义. 直接返回 pb 解析后的结果
    */
    decodeByPBName(data, pbName, option) {
        const self = this;
        const formatEventMap = {
            [PBName.DownStreamMessages]: self._formatSyncMessages,
            [PBName.DownStreamMessage]: self._formatReceivedMessage,
            [PBName.UpStreamMessage]: self._formatSentMessage,
            [PBName.HistoryMsgOuput]: self._formatHistoryMessages,
            [PBName.RelationsOutput]: self._formatConversationList,
            [PBName.QueryChatRoomInfoOutput]: self._formatChatRoomInfos,
            [PBName.RtcUserListOutput]: self._formatRTCUserList,
            [PBName.RtcQryOutput]: self._formatRTCData,
            [PBName.ChrmKVOutput]: self._formatChatRoomKVList,
            [PBName.PullUserSettingOutput]: self._formatUserSetting,
            [PBName.SessionStates]: self._formatConversationStatus
        };
        let decodedData = data;
        const formatEvent = formatEventMap[pbName];
        try {
            const hasData = data.length > 0; // 判断是否有数据, 防止无数据 pb 解析报错
            decodedData = hasData && self._codec[pbName].decode(data); // pb 解析
            if (isObject(decodedData)) {
                decodedData = batchInt64ToTimestamp(decodedData); // 时间转化
            }
            if (isFunction(formatEvent)) {
                decodedData = formatEvent.call(this, decodedData, option); // 数据格式化
            }
        }
        catch (e) {
            logger.error('PB parse error\n', e);
        }
        return decodedData;
    }
    _readBytes(content) {
        const { offset, buffer, limit } = content;
        if (offset) {
            try {
                const content = isArrayBuffer(buffer) ? new Uint8Array(buffer) : buffer;
                // content = utils.ArrayBufferToUint8Array(buffer).subarray(offset, limit)
                return BinaryHelper.readUTF(content.subarray(offset, limit));
            }
            catch (e) {
                logger.info('readBytes error\n', e);
            }
        }
        return content;
    }
    /**
     * ====== 以下为 rmtp 数据 反序列化为 可用数据 ======
     */
    _formatBytes(content) {
        // 1. socket 下, content.buffer 为二进制 ArrayBuffer, 需调用 ArrayBufferToUint8Array 转换
        // 2. comet 下, content 为 JSON 字符串. socket、comet 解析后都需要 JSON to Object
        let formatRes = this._readBytes(content);
        try {
            formatRes = JSON.parse(formatRes);
        }
        catch (e) {
            logger.info('formatBytes error\n', e);
        }
        return formatRes || content;
    }
    /**
     * 格式化多端同步消息
    */
    _formatSyncMessages(data, option) {
        option = option || {};
        const self = this;
        const { list, syncTime, finished } = data;
        // Comet 与 聊天室没有 finished 字段定义，默认为 true
        if (isUndefined(finished) || finished === null) {
            data.finished = true;
        }
        data.syncTime = int64ToTimestamp(syncTime);
        data.list = map(list, (msgData) => {
            const message = self._formatReceivedMessage(msgData, option);
            return message;
        });
        return data;
    }
    /**
     * 格式化接收消息
    */
    _formatReceivedMessage(data, option) {
        // TODO: 需杜绝此类传参，参数在进入方法前进行类型值确认
        option = option || {};
        const self = this;
        const { currentUserId, connectedTime } = option;
        const { content, fromUserId, type, groupId, status, dataTime, classname: messageType, msgId: messageUId, extraContent } = data;
        const direction = data.direction || MessageDirection$1.RECEIVE; // null || 0 都为收件箱
        const isSelfSend = direction === MessageDirection$1.SEND;
        const { isPersited, isCounted, isMentioned, disableNotification, receivedStatus, canIncludeExpansion } = getMessageOptionByStatus(status);
        const targetId = type === ConversationType$1.GROUP || type === ConversationType$1.CHATROOM ? groupId : fromUserId;
        const senderUserId = isSelfSend ? currentUserId : fromUserId;
        const sentTime = int64ToTimestamp(dataTime);
        const isOffLineMessage = sentTime < connectedTime;
        const isChatRoomMsg = type === ConversationType$1.CHATROOM;
        const utfContent = self._formatBytes(content);
        let messageDirection = isSelfSend ? MessageDirection$1.SEND : MessageDirection$1.RECEIVE;
        // 聊天室拉消息时, 自己发送的消息, direction 也为 null
        if (isChatRoomMsg && (fromUserId === currentUserId)) {
            messageDirection = MessageDirection$1.SEND;
        }
        let expansion;
        if (extraContent) {
            expansion = {};
            expansion = formatExtraContent(extraContent);
        }
        return {
            conversationType: type,
            targetId,
            senderUserId,
            messageType,
            messageUId,
            isPersited,
            isCounted,
            isMentioned,
            sentTime,
            isOffLineMessage,
            messageDirection,
            receivedTime: DelayTimer.getTime(),
            disableNotification,
            receivedStatus,
            canIncludeExpansion,
            content: utfContent,
            expansion
        };
    }
    /**
     * 格式化发送消息
    */
    _formatSentMessage(data, option) {
        const self = this;
        const { content, classname: messageType, sessionId, msgId: messageUId, extraContent } = data;
        const { signal, currentUserId } = option;
        const { date, topic, targetId } = signal;
        const { isPersited, isCounted, disableNotification, canIncludeExpansion } = getUpMessageOptionBySessionId(sessionId);
        const type = PublishTopicToConversationType[topic] || ConversationType$1.PRIVATE;
        const isStatusMessage = isInObject(PublishStatusTopic, topic);
        let expansion;
        if (extraContent) {
            expansion = {};
            expansion = formatExtraContent(extraContent);
        }
        return {
            conversationType: type,
            targetId,
            messageType,
            messageUId,
            isPersited,
            isCounted,
            isStatusMessage,
            senderUserId: currentUserId,
            content: self._formatBytes(content),
            sentTime: date * 1000,
            receivedTime: DelayTimer.getTime(),
            messageDirection: MessageDirection$1.SEND,
            isOffLineMessage: false,
            disableNotification,
            canIncludeExpansion,
            expansion // 消息携带的 KV 字段
        };
    }
    /**
     * 格式化历史消息
    */
    _formatHistoryMessages(data, option) {
        const conversation = option.conversation || {};
        const { list: msgList, hasMsg } = data;
        const targetId = conversation.targetId;
        const syncTime = int64ToTimestamp(data.syncTime);
        const list = [];
        forEach(msgList, (msgData) => {
            const msg = this._formatReceivedMessage(msgData, option);
            msg.targetId = targetId;
            list.push(msg);
        }, {
            isReverse: true
        });
        return { syncTime, list, hasMore: !!hasMsg };
    }
    /**
     * 格式化会话列表
    */
    _formatConversationList(serverData, option) {
        const self = this;
        let { info: conversationList } = serverData;
        const afterDecode = option.afterDecode || function () { };
        conversationList = map(conversationList, (serverConversation) => {
            const { msg, userId, type, unreadCount } = serverConversation;
            const latestMessage = self._formatReceivedMessage(msg, option);
            latestMessage.targetId = userId;
            const conversation = {
                targetId: userId,
                conversationType: type,
                unreadMessageCount: unreadCount,
                latestMessage
            };
            return afterDecode(conversation) || conversation;
        });
        return conversationList || [];
    }
    /**
     * 格式化聊天室信息
    */
    _formatChatRoomInfos(data) {
        const { userTotalNums, userInfos } = data;
        const chrmInfos = map(userInfos, (user) => {
            const { id, time } = user;
            const timestamp = int64ToTimestamp(time);
            return { id, time: timestamp };
        });
        return {
            userCount: userTotalNums,
            userInfos: chrmInfos
        };
    }
    /**
     * 格式化 聊天室 KV 列表
    */
    _formatChatRoomKVList(data) {
        let { entries: kvEntries, bFullUpdate: isFullUpdate, syncTime } = data;
        kvEntries = kvEntries || [];
        kvEntries = map(kvEntries, (kv) => {
            const { key, value, status, timestamp, uid } = kv;
            const { isAutoDelete, isOverwrite, type } = getChatRoomKVByStatus(status);
            return {
                key,
                value,
                isAutoDelete,
                isOverwrite,
                type,
                userId: uid,
                timestamp: int64ToTimestamp(timestamp)
            };
        });
        return {
            kvEntries, isFullUpdate, syncTime
        };
    }
    /**
     * 格式化 用户设置
    */
    _formatUserSetting(data) {
        const { items, version } = data;
        const settings = {};
        forEach(items || [], (setting) => {
            const { key, version, value } = setting;
            setting.version = int64ToTimestamp(version);
            setting.value = this._readBytes(value);
            settings[key] = setting;
        });
        return { settings, version };
    }
    /**
     * 格式化 会话状态 置顶、免打扰）
    */
    _formatConversationStatus(data) {
        const { state: stateList } = data;
        const statusList = [];
        forEach(stateList, (session) => {
            const { type, channelId: targetId, time: updatedTime, stateItem } = session;
            let notificationStatus = NotificationStatus$1.CLOSE;
            let isTop = false;
            forEach(stateItem, (item) => {
                const { sessionStateType, value } = item;
                switch (sessionStateType) {
                    case ConversationStatusType.DO_NOT_DISTURB:
                        notificationStatus = value === ConversationStatusConfig.ENABLED ? NotificationStatus$1.OPEN : NotificationStatus$1.CLOSE;
                        break;
                    case ConversationStatusType.TOP:
                        isTop = value === ConversationStatusConfig.ENABLED;
                        break;
                }
            });
            statusList.push({
                type,
                targetId,
                notificationStatus,
                isTop,
                updatedTime: int64ToTimestamp(updatedTime)
            });
        });
        return statusList;
    }
    /**
     * 格式化 RTC 用户列表
    */
    _formatRTCUserList(rtcInfos) {
        const { list, token, sessionId } = rtcInfos;
        const users = {};
        forEach(list, (item) => {
            const { userId, userData } = item;
            const tmpData = {};
            forEach(userData, (data) => {
                const { key, value } = data;
                tmpData[key] = value;
            });
            users[userId] = tmpData;
        });
        return { users, token, sessionId };
    }
    /**
      * 格式化 RTC 数据
    */
    _formatRTCData(data) {
        const { outInfo: list } = data;
        const props = {};
        forEach(list, (item) => {
            props[item.key] = item.value;
        });
        return props;
    }
    /**
      * 格式化 RTC 房间信息
    */
    _formatRTCRoomInfo(data) {
        const { roomId: id, userCount: total, roomData } = data;
        const room = {
            id, total
        };
        forEach(roomData, (data) => {
            room[data.key] = data.value;
        });
        return room;
    }
    /**
     * ===== 以下为通用数据 序列化为 PB 数据 =====
     * Engine Index 调用处理数据
    */
    /**
     * ? 待补全注释
    */
    encodeServerConfParams() {
        const modules = this._codec.getModule(PBName.SessionsAttQryInput);
        modules.setNothing(1);
        return modules.getArrayData();
    }
    /**
     * 上行消息基础配置
    */
    _getUpMsgModule(conversation, option) {
        const { type } = conversation;
        const { messageType, isMentioned, mentionedType, mentionedUserIdList, content, pushContent, pushData, directionalUserIdList, isFilerWhiteBlacklist, isVoipPush, canIncludeExpansion, expansion } = option;
        const isGroupType = type === ConversationType$1.GROUP;
        const modules = this._codec.getModule(PBName.UpStreamMessage);
        const sessionId = getSessionId(option);
        let flag = 0;
        modules.setSessionId(sessionId);
        if (isGroupType && isMentioned && content) {
            content.mentionedInfo = {
                userIdList: mentionedUserIdList,
                type: mentionedType || MentionedType$1.ALL
            };
        }
        pushContent && modules.setPushText(pushContent); // 设置 pushContent
        pushData && modules.setAppData(pushData); // 设置 pushData
        directionalUserIdList && modules.setUserId(directionalUserIdList); // 设置群定向消息人员
        // 设置 flag. 涉及业务: 1、iOS VoipPush  2、过滤黑/白名单
        flag |= (isVoipPush ? 0x01 : 0);
        flag |= (isFilerWhiteBlacklist ? 0x02 : 0);
        modules.setConfigFlag(flag);
        modules.setClassname(messageType); // 设置 objectName
        modules.setContent(JSON.stringify(content));
        if (canIncludeExpansion && expansion) {
            const extraContent = {};
            forEach(expansion, (val, key) => {
                extraContent[key] = { v: val };
            });
            modules.setExtraContent(JSON.stringify(extraContent)); // 设置消息扩展内容
        }
        return modules;
    }
    /**
     * 序列化上行消息
    */
    encodeUpMsg(conversation, option) {
        const modules = this._getUpMsgModule(conversation, option);
        return modules.getArrayData();
    }
    /**
     * 序列化拉取多端消息
    */
    encodeSyncMsg(syncMsgArgs) {
        const { sendboxTime, inboxTime } = syncMsgArgs;
        const modules = this._codec.getModule(PBName.SyncRequestMsg);
        modules.setIspolling(false);
        modules.setIsPullSend(true);
        modules.setSendBoxSyncTime(sendboxTime);
        modules.setSyncTime(inboxTime);
        return modules.getArrayData();
    }
    /**
     * 序列化拉取聊天室消息
    */
    encodeChrmSyncMsg(time, count) {
        time = time || 0;
        count = count || 0;
        const modules = this._codec.getModule(PBName.ChrmPullMsg);
        modules.setCount(count);
        modules.setSyncTime(time);
        return modules.getArrayData();
    }
    /**
     * 序列化历史消息
    */
    encodeGetHistoryMsg(targetId, option) {
        const { count, order, timestamp } = option;
        const modules = this._codec.getModule(PBName.HistoryMsgInput);
        modules.setTargetId(targetId);
        modules.setTime(timestamp);
        modules.setCount(count);
        modules.setOrder(order);
        return modules.getArrayData();
    }
    /**
     * 序列化会话列表
    */
    encodeGetConversationList(option) {
        option = option || {};
        const { count, startTime } = option;
        const modules = this._codec.getModule(PBName.RelationQryInput);
        // 默认值已在 modules 暴露层赋值. 传入此处, 必有值
        modules.setType(1); // type 可传任意值
        modules.setCount(count);
        modules.setStartTime(startTime);
        return modules.getArrayData();
    }
    /**
     * 旧会话列表. 获取、删除都调用此方法
    */
    encodeOldConversationList(option) {
        option = option || {};
        let { count, type, startTime, order } = option;
        count = count || 0; // 删除会话列表 count 传 0 , setCount 形参 count 为必填参数
        startTime = startTime || 0;
        order = order || 0;
        const modules = this._codec.getModule(PBName.RelationQryInput);
        modules.setType(type);
        modules.setCount(count);
        modules.setStartTime(startTime);
        modules.setOrder(order);
        return modules.getArrayData();
    }
    /**
     * 旧会话列表删除
    */
    encodeRemoveConversationList(conversationList) {
        const modules = this._codec.getModule(PBName.DeleteSessionsInput);
        const sessions = [];
        forEach(conversationList, (conversation) => {
            const { type, targetId } = conversation;
            const session = this._codec.getModule(PBName.SessionInfo);
            session.setType(type);
            session.setChannelId(targetId);
            sessions.push(session);
        });
        modules.setSessions(sessions);
        return modules.getArrayData();
    }
    /**
     * 批量删除消息通过消息 ID
    */
    encodeDeleteMessages(conversationType, targetId, list) {
        const modules = this._codec.getModule(PBName.DeleteMsgInput);
        const encodeMsgs = [];
        forEach(list, (message) => {
            encodeMsgs.push({
                msgId: message.messageUId,
                msgDataTime: message.sentTime,
                direct: message.messageDirection
            });
        });
        modules.setType(conversationType);
        modules.setConversationId(targetId);
        modules.setMsgs(encodeMsgs);
        return modules.getArrayData();
    }
    /**
     * 批量删除消息通过时间
    */
    encodeClearMessages(targetId, timestamp) {
        const modules = this._codec.getModule(PBName.CleanHisMsgInput);
        timestamp = timestamp || new Date().getTime(); // 默认当前时间
        modules.setDataTime(timestamp);
        modules.setTargetId(targetId);
        return modules.getArrayData();
    }
    /**
     * 未读数清除
    */
    encodeClearUnreadCount(conversation, option) {
        const { type, targetId } = conversation;
        let { timestamp } = option;
        const modules = this._codec.getModule(PBName.SessionMsgReadInput);
        timestamp = timestamp || +new Date();
        modules.setType(type);
        modules.setChannelId(targetId);
        modules.setMsgTime(timestamp);
        return modules.getArrayData();
    }
    /**
     * 加入退出聊天室
    */
    encodeJoinOrQuitChatRoom() {
        const modules = this._codec.getModule(PBName.ChrmInput);
        modules.setNothing(1);
        return modules.getArrayData();
    }
    /**
     * 获取聊天室信息
     * @param count 获取人数
     * @param order 排序方式
    */
    encodeGetChatRoomInfo(count, order) {
        const modules = this._codec.getModule(PBName.QueryChatRoomInfoInput);
        modules.setCount(count);
        modules.setOrder(order);
        return modules.getArrayData();
    }
    /**
     * 上传文件认证信息获取
    */
    encodeGetFileToken(fileType, fileName) {
        const modules = this._codec.getModule(PBName.GetQNupTokenInput);
        modules.setType(fileType);
        modules.setKey(fileName);
        return modules.getArrayData();
    }
    /**
      * 获取七牛上传url
    */
    encodeGetFileUrl(fileType, fileName, originName) {
        const modules = this._codec.getModule(PBName.GetQNdownloadUrlInput);
        modules.setType(fileType);
        modules.setKey(fileName);
        if (originName) {
            modules.setFileName(originName);
        }
        return modules.getArrayData();
    }
    /**
      * 聊天室 KV 存储
    */
    encodeModifyChatRoomKV(chrmId, entry, currentUserId) {
        const isComet = this._connectType === 'comet';
        const modules = this._codec.getModule(PBName.SetChrmKV);
        const { key, value, notificationExtra: extra, isSendNotification, type } = entry;
        const action = type || ChatroomEntryType$1.UPDATE;
        const status = getChatRoomKVOptStatus(entry, action);
        const serverEntry = {
            key,
            value: value || '',
            uid: currentUserId
        };
        // 若 status 传空, server 会出问题
        if (!isUndefined(status)) {
            serverEntry.status = status;
        }
        modules.setEntry(serverEntry);
        if (isSendNotification) { // 如果需要发送通知, 设置通知消息
            const conversation = {
                type: ConversationType$1.CHATROOM,
                targetId: chrmId
            };
            const msgContent = { key, value, extra, type: action };
            // 通知消息内置, 由 Server 自动发送
            const msgModule = this._getUpMsgModule(conversation, {
                messageType: MessageType$1.CHRM_KV_NOTIFY,
                content: msgContent,
                isPersited: false,
                isCounted: false
            });
            isComet ? modules.setNotification(msgModule.getArrayData()) : modules.setNotification(msgModule);
            modules.setBNotify(true);
            modules.setType(ConversationType$1.CHATROOM);
        }
        return modules.getArrayData();
    }
    /**
      * KV 存储拉取
    */
    encodePullChatRoomKV(time) {
        const modules = this._codec.getModule(PBName.QueryChrmKV);
        modules.setTimestamp(time);
        return modules.getArrayData();
    }
    /**
      * 用户实时配置更新
    */
    encodePullUserSetting(version) {
        const modules = this._codec.getModule(PBName.PullUserSettingInput);
        modules.setVersion(version);
        return modules.getArrayData();
    }
    /**
      * 获取会话状态 (置顶、免打扰)
    */
    encodeGetConversationStatus(time) {
        const modules = this._codec.getModule(PBName.SessionReq);
        modules.setTime(time);
        return modules.getArrayData();
    }
    /**
      * 设置会话状态 (置顶、免打扰)
    */
    encodeSetConversationStatus(statusList) {
        const isComet = this._connectType === 'comet';
        const modules = this._codec.getModule(PBName.SessionStateModifyReq);
        const currentTime = DelayTimer.getTime();
        const stateModuleList = [];
        forEach(statusList, (status) => {
            const stateModules = this._codec.getModule(PBName.SessionState);
            const { conversationType: type, targetId, notificationStatus, isTop } = status;
            const stateItemModuleList = [];
            stateModules.setType(type);
            stateModules.setChannelId(targetId);
            stateModules.setTime(currentTime);
            const isNotDisturb = notificationStatus === NotificationStatus$1.OPEN;
            const TypeToVal = {};
            if (!isUndefined(notificationStatus)) {
                TypeToVal[ConversationStatusType.DO_NOT_DISTURB] = isNotDisturb;
            }
            if (!isUndefined(isTop)) {
                TypeToVal[ConversationStatusType.TOP] = isTop;
            }
            forEach(TypeToVal, (val, type) => {
                if (!isUndefined(val)) {
                    const stateItemModules = this._codec.getModule(PBName.SessionStateItem);
                    val = val ? ConversationStatusConfig.ENABLED : ConversationStatusConfig.DISABLED;
                    stateItemModules.setSessionStateType(Number(type)); // TODO 暂时写死
                    stateItemModules.setValue(val);
                    const stateItemModulesData = isComet ? stateItemModules.getArrayData() : stateItemModules;
                    stateItemModuleList.push(stateItemModulesData);
                }
            });
            stateModules.setStateItem(stateItemModuleList);
            const stateModulesData = isComet ? stateModules.getArrayData() : stateModules;
            stateModuleList.push(stateModulesData);
        });
        modules.setVersion(currentTime);
        modules.setState(stateModuleList);
        return modules.getArrayData();
    }
    /**
     * ============ 以下为 RTC 相关 ============
     */
    /**
     * 加入 RTC 房间
     */
    encodeJoinRTCRoom(mode, broadcastType) {
        const modules = this._codec.getModule(PBName.RtcInput);
        mode = mode || 0;
        modules.setRoomType(mode);
        isUndefined(broadcastType) || modules.setBroadcastType(broadcastType);
        return modules.getArrayData();
    }
    /**
     * 退出 RTC 房间
    */
    encodeQuitRTCRoom() {
        return this._codec.getModule(PBName.SetUserStatusInput).getArrayData();
    }
    /**
     * 房间数据
    */
    encodeSetRTCData(key, value, isInner, apiType, message) {
        const modules = this._codec.getModule(PBName.RtcSetDataInput);
        modules.setInterior(isInner);
        modules.setTarget(apiType);
        modules.setKey(key);
        modules.setValue(value);
        message = message || {};
        let { name, content } = message;
        !isUndefined(name) && modules.setObjectName(name);
        if (!isUndefined(content)) {
            if (isObject(content)) {
                content = JSON.stringify(content);
            }
            modules.setContent(content);
        }
        return modules.getArrayData();
    }
    /**
     * 全量 URI
    */
    encodeUserSetRTCData(message, valueInfo, objectName) {
        const modules = this._codec.getModule(PBName.RtcUserSetDataInput);
        // 全量 URI 新增
        // 全量发布中
        // valueInfo: key 为 uris，值为 全量的订阅信息
        // content: key 为增量数据消息 RCRTC:ModifyResource，value 为增量订阅信息
        modules.setObjectName(objectName);
        // content
        let val = this._codec.getModule(PBName.RtcValueInfo);
        val.setKey(message.name);
        val.setValue(message.content);
        modules.setContent(val);
        // valueInfo
        val = this._codec.getModule(PBName.RtcValueInfo);
        val.setKey('uris');
        val.setValue(valueInfo);
        modules.setValueInfo(val);
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    encodeGetRTCData(keys, isInner, apiType) {
        const modules = this._codec.getModule(PBName.RtcDataInput);
        modules.setInterior(isInner);
        modules.setTarget(apiType);
        modules.setKey(keys);
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    encodeRemoveRTCData(keys, isInner, apiType, message) {
        const modules = this._codec.getModule(PBName.RtcDataInput);
        modules.setInterior(isInner);
        modules.setTarget(apiType);
        modules.setKey(keys);
        message = message || {};
        let { name, content } = message;
        !isUndefined(name) && modules.setObjectName(name);
        if (!isUndefined(content)) {
            if (isObject(content)) {
                content = JSON.stringify(content);
            }
            modules.setContent(content);
        }
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    encodeSetRTCOutData(data, type, message) {
        const modules = this._codec.getModule(PBName.RtcSetOutDataInput);
        modules.setTarget(type);
        if (!isArray(data)) {
            data = [data];
        }
        forEach(data, (item, index) => {
            item.key = item.key ? item.key.toString() : item.key;
            item.value = item.value ? item.value.toString() : item.value;
            data[index] = item;
        });
        modules.setValueInfo(data);
        message = message || {};
        let { name, content } = message;
        !isUndefined(name) && modules.setObjectName(name);
        if (!isUndefined(content)) {
            if (isObject(content)) {
                content = JSON.stringify(content);
            }
            modules.setContent(content);
        }
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    ecnodeGetRTCOutData(userIds) {
        const modules = this._codec.getModule(PBName.RtcQryUserOutDataInput);
        modules.setUserId(userIds);
        return modules.getArrayData();
    }
    encodeSetRTCState(report) {
        const modules = this._codec.getModule(PBName.MCFollowInput);
        modules.setId(report);
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    encodeGetRTCRoomInfo() {
        const modules = this._codec.getModule(PBName.RtcQueryListInput);
        modules.setOrder(2);
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    encodeSetRTCUserInfo(key, value) {
        const modules = this._codec.getModule(PBName.RtcValueInfo);
        modules.setKey(key);
        modules.setValue(value);
        return modules.getArrayData();
    }
    /**
     * 待完善注释
    */
    encodeRemoveRTCUserInfo(keys) {
        const modules = this._codec.getModule(PBName.RtcKeyDeleteInput);
        modules.setKey(keys);
        return modules.getArrayData();
    }
}

/**
 * 数据通道接口，为 long-polling 与 websocket 提供公共抽象
 */
class ADataChannel {
    constructor(type, _watcher) {
        this._watcher = _watcher;
        this.codec = new DataCodec(type);
    }
    /**
     * 建立连接时，apiVersion 需符合 `/\d+(\.\d+){2}/` 规则，对于预发布版本号如 `3.1.0-alpha.1`，需解析定为 `3.1.0`
     * @param apiVersion
     */
    static matchVersion(apiVersion) {
        const matches = apiVersion.match(/\d+(\.\d+){2}/);
        return matches[0];
    }
}

const getIdentifier = (messageId, identifier) => {
    if (messageId && identifier) {
        return identifier + '_' + messageId;
    }
    else if (messageId) {
        return messageId;
    }
    else {
        return Date.now(); // 若无 messageId、identifer, 直接返回时间戳, 避免返回空造成唯一标识重复
    }
};
/**
 * @description
 * 与 Server 交互的信令封装
*/
/**
 * @description
 * 读数据处理基类
*/
class BaseReader {
    constructor(header) {
        this.header = header;
        this._name = null;
        this.lengthSize = 0;
        this.messageId = 0;
        this.timestamp = 0;
        this.syncMsg = false;
        this.identifier = ''; // string + messageId 作为唯一标识, 目前用处: 方便 Pub、Query 回执定位对应 Promise, 且增加前缀避免 Pub、Query 回执错乱
    }
    getIdentifier() {
        const { messageId, identifier } = this;
        return getIdentifier(messageId, identifier);
    }
    read(stream, length) {
        this.readMessage(stream, length);
        // return { stream, length }
    }
    readMessage(stream, length) {
        return {
            stream,
            length
        };
    }
}
/**
 * @description
 * 写数据处理基类
 */
class BaseWriter {
    constructor(headerType) {
        this.lengthSize = 0;
        this.messageId = 0;
        this.topic = '';
        this.targetId = '';
        this.identifier = '';
        this._header = new Header(headerType, false, QOS.AT_MOST_ONCE, false);
    }
    getIdentifier() {
        const { messageId, identifier } = this;
        return getIdentifier(messageId, identifier);
    }
    write(stream) {
        var headerCode = this.getHeaderFlag();
        stream.write(headerCode); // 写入 Header
        this.writeMessage(stream);
    }
    setHeaderQos(qos) {
        this._header.qos = qos;
    }
    getHeaderFlag() {
        return this._header.encode();
    }
    getLengthSize() {
        return this.lengthSize;
    }
    getBufferData() {
        const stream = new RongStreamWriter();
        this.write(stream);
        const val = stream.getBytesArray();
        const binary = new Int8Array(val);
        return binary;
    }
    getCometData() {
        const data = this.data || {};
        return JSON.stringify(data);
    }
}
/**
 * @description
 * 连接成功后服务端的回执
 */
class ConnAckReader extends BaseReader {
    constructor() {
        super(...arguments);
        this._name = MessageName.CONN_ACK;
        this.status = null; // 链接状态
        this.userId = null; // 用户 id
        // sessionId: string;
        this.timestamp = 0;
    }
    readMessage(stream, length) {
        stream.readByte(); // 去除 Header
        this.status = +stream.readByte();
        if (length > ConnAckReader.MESSAGE_LENGTH) {
            this.userId = stream.readUTF();
            stream.readUTF(); // 此处为取 sessionId, ws 未用到此值, 但也需执行, 否则读取后面数值时会不准
            this.timestamp = stream.readLong();
        }
        return {
            stream,
            length
        };
    }
}
ConnAckReader.MESSAGE_LENGTH = 2;
/**
 * @description
 * 服务端断开链接. 比如: 被踢
 */
class DisconnectReader extends BaseReader {
    constructor() {
        super(...arguments);
        this._name = MessageName.DISCONNECT;
        this.status = 0;
    }
    readMessage(stream, length) {
        stream.readByte();
        // (1)、此处未转换为链接状态码  (2)、2.0 代码限制了 status 为 0 - 5, 不在范围内则报错. 此处去掉此判断
        this.status = +stream.readByte();
        return {
            stream,
            length
        };
    }
}
DisconnectReader.MESSAGE_LENGTH = 2;
/**
 * @description
 * ping 请求
 */
class PingReqWriter extends BaseWriter {
    constructor() {
        super(OperationType.PING_REQ);
        this._name = MessageName.PING_REQ;
    }
    writeMessage(stream) { }
}
/**
 * @description
 * ping 响应
 */
class PingRespReader extends BaseReader {
    constructor(header) {
        super(header);
        this._name = MessageName.PING_RESP;
    }
}
class RetryableReader extends BaseReader {
    constructor() {
        super(...arguments);
        this.messageId = 0;
    }
    readMessage(stream, length) {
        const msgId = stream.readByte() * 256 + stream.readByte();
        this.messageId = parseInt(msgId.toString(), 10);
        return {
            stream,
            length
        };
    }
}
class RetryableWriter extends BaseWriter {
    constructor() {
        super(...arguments);
        this.messageId = 0;
    }
    writeMessage(stream) {
        const id = this.messageId;
        const lsb = id & 255;
        const msb = (id & 65280) >> 8; // 65280 -> 1111111100000000
        stream.write(msb);
        stream.write(lsb);
    }
}
class PublishReader extends RetryableReader {
    constructor() {
        super(...arguments);
        this._name = MessageName.PUBLISH;
        this.topic = '';
        this.targetId = '';
        this.syncMsg = false;
        this.identifier = IDENTIFIER.PUB;
    }
    readMessage(stream, length) {
        // let pos = 6;
        this.date = stream.readInt();
        this.topic = stream.readUTF();
        // pos += BinaryHelper.writeUTF(this.topic).length;
        this.targetId = stream.readUTF();
        // pos += BinaryHelper.writeUTF(this.targetId).length;
        // RetryableReader.prototype.readMessage.apply(this, arguments)
        super.readMessage(stream, length);
        // this.data = new Array(msgLength - pos);
        this.data = stream.readAll();
        return {
            stream,
            length
        };
    }
}
/**
 * @description
 * 发消息使用
 */
class PublishWriter extends RetryableWriter {
    constructor(topic, data, targetId) {
        super(OperationType.PUBLISH);
        this._name = MessageName.PUBLISH;
        this.syncMsg = false;
        this.identifier = IDENTIFIER.PUB;
        this.topic = topic;
        this.data = isString(data) ? BinaryHelper.writeUTF(data) : data;
        this.targetId = targetId;
    }
    writeMessage(stream) {
        stream.writeUTF(this.topic);
        stream.writeUTF(this.targetId);
        super.writeMessage(stream);
        stream.write(this.data);
    }
}
/**
 * @description
 * 发消息, Server 给的 Ack 回执
 */
class PubAckReader extends RetryableReader {
    constructor() {
        super(...arguments);
        this._name = MessageName.PUB_ACK;
        this.status = 0;
        this.date = 0;
        this.millisecond = 0;
        this.messageUId = '';
        this.timestamp = 0;
        this.identifier = IDENTIFIER.PUB;
        this.topic = '';
        this.targetId = '';
    }
    readMessage(stream, length) {
        super.readMessage(stream, length);
        this.date = stream.readInt();
        this.status = stream.readByte() * 256 + stream.readByte();
        this.millisecond = stream.readByte() * 256 + stream.readByte();
        this.timestamp = this.date * 1000 + this.millisecond;
        this.messageUId = stream.readUTF();
        return {
            stream,
            length
        };
    }
}
/**
 * @description
 * Server 下发 Pub, Web 给 Server 发送回执
 */
class PubAckWriter extends RetryableWriter {
    constructor(messageId) {
        super(OperationType.PUB_ACK);
        this._name = MessageName.PUB_ACK;
        this.status = 0;
        this.date = 0;
        this.millisecond = 0;
        this.messageUId = '';
        this.timestamp = 0;
        this.messageId = messageId;
    }
    writeMessage(stream) {
        super.writeMessage(stream);
    }
}
/**
 * @description
 * Web 主动查询
 */
class QueryWriter extends RetryableWriter {
    constructor(topic, data, targetId) {
        super(OperationType.QUERY);
        this.name = MessageName.QUERY;
        this.identifier = IDENTIFIER.QUERY;
        this.topic = topic;
        this.data = isString(data) ? BinaryHelper.writeUTF(data) : data;
        this.targetId = targetId;
    }
    writeMessage(stream) {
        stream.writeUTF(this.topic);
        stream.writeUTF(this.targetId);
        // RetryableWriter.prototype.writeMessage.call(this, stream)
        super.writeMessage(stream);
        stream.write(this.data);
    }
}
/**
 * @description
 * Server 发送 Query, Web 给 Server 的回执
 */
class QueryConWriter extends RetryableWriter {
    constructor(messageId) {
        super(OperationType.QUERY_CONFIRM);
        this._name = MessageName.QUERY_CON;
        this.messageId = messageId;
    }
}
/**
 * @description
 * Server 对 Web 查询操作的回执
 */
class QueryAckReader extends RetryableReader {
    constructor() {
        super(...arguments);
        this._name = MessageName.QUERY_ACK;
        this.status = 0;
        this.identifier = IDENTIFIER.QUERY;
        this.topic = '';
        this.targetId = '';
    }
    readMessage(stream, length) {
        // RetryableReader.prototype.readMessage.call(this, stream)
        super.readMessage(stream, length);
        this.date = stream.readInt();
        this.status = stream.readByte() * 256 + stream.readByte();
        this.data = stream.readAll();
        // if (msgLength > 0) {
        //   this.data = new Array(msgLength - 8);
        //   this.data = stream.readAll();
        // }
        return {
            stream,
            length
        };
    }
}
const getReaderByHeader = (header) => {
    const type = header.type;
    let msg;
    switch (type) {
        case OperationType.CONN_ACK:
            msg = new ConnAckReader(header);
            break;
        case OperationType.PUBLISH:
            msg = new PublishReader(header);
            msg.syncMsg = header.syncMsg;
            break;
        case OperationType.PUB_ACK:
            msg = new PubAckReader(header);
            break;
        case OperationType.QUERY_ACK:
            msg = new QueryAckReader(header);
            break;
        case OperationType.SUB_ACK:
        case OperationType.UNSUB_ACK:
        case OperationType.PING_RESP:
            msg = new PingRespReader(header);
            break;
        case OperationType.DISCONNECT:
            msg = new DisconnectReader(header);
            break;
        default:
            msg = new BaseReader(header);
            logger.error('No support for deserializing ' + type + ' messages');
    }
    return msg;
};
/**
 * 解析 websocket 收到的数据 ArrayBuffer 数据
 * @param {ArrayBuffer} data server 通过 webscoekt 传送的所有数据
 */
const readWSBuffer = (data) => {
    const arr = new Uint8Array(data);
    const stream = new RongStreamReader(arr);
    const flags = stream.readByte();
    const header = new Header(flags);
    const msg = getReaderByHeader(header);
    msg.read(stream, arr.length - 1);
    return msg;
};
const readCometData = (data) => {
    const flags = data.headerCode;
    const header = new Header(flags);
    const msg = getReaderByHeader(header);
    // utils.forEach(data, (item: any, key: string) => {
    //   if (key in msg) {
    //     msg[key] = item;
    //   }
    // });
    for (const key in data) {
        // if (key in msg) {
        msg[key] = data[key];
        // }
    }
    return msg;
};

/**
 * CMP/Comet 服务连接应答码
 */
const ConnectResultCode = {
    /**
     * 连接成功
     */
    ACCEPTED: 0,
    /**
     * 协议版本不匹配
     * @description 暂未使用
     */
    UNACCEPTABLE_PROTOCOL_VERSION: 1,
    /**
     * 客户端（移动端 TCP 连接建立时）`info` 字段格式错误
     * @description 格式：`{平台类型}-{设备信息}-{sdk版本}`。
     * 其中设备信息为：{手机类型}{手机型号}{网络类型，4G/WIFI}{运营商标识, 移动/电信/联通}
     */
    IDENTIFIER_REJECTED: 2,
    /**
     * 不支持的平台类型，一般小程序或 PC 未开通
     */
    SERVER_UNAVAILABLE: 3,
    /**
     * Token无法解析，或Token已过期
     */
    TOKEN_INCORRECT: 4,
    /**
     * 防黑产规则相关应答
     */
    NOT_AUTHORIZED: 5,
    /**
     * 服务重定向，一般服务扩缩容时，落点已经改变，此时 userId 链接到旧的节点时，会触发该错误。
     * 客户端收到该应答后须重新访问导航，重新获取 CMP 地址
     */
    REDIRECT: 6,
    /**
     * 暂未使用
     */
    PACKAGE_ERROR: 7,
    /**
     * 该 AppKey 已经封禁或删除
     */
    APP_BLOCK_OR_DELETE: 8,
    /**
     * 该用户 ID 已经被封禁
     */
    BLOCK: 9,
    /**
     * Token 已过期，暂未使用
     */
    TOKEN_EXPIRE: 10,
    /**
     * Token 中携带 deviceId 时，检测 Token 中 deviceId 与链接设备 deviceId 不一致
     */
    DEVICE_ERROR: 11,
    /**
     * Web 端设置安全域名后，连接端域名不在安全域名范围内
     */
    HOSTNAME_ERROR: 12,
    /**
     * 开启`禁止把已在线客户端踢下线`开关后，该错误码标识已有同类型端在线，禁止链接
     */
    HASOHTERSAMECLIENTONLINE: 13
};

/**
 * 连接状态
 */
var ConnectionStatus;
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
     * 正常断开连接。
     */
    ConnectionStatus[ConnectionStatus["DISCONNECTED"] = 2] = "DISCONNECTED";
    /**
     * 网络不可用。
     */
    ConnectionStatus[ConnectionStatus["NETWORK_UNAVAILABLE"] = 3] = "NETWORK_UNAVAILABLE";
    /**
     * 连接关闭。
     */
    ConnectionStatus[ConnectionStatus["CONNECTION_CLOSED"] = 4] = "CONNECTION_CLOSED";
    /**
     * 用户账户在其他设备登录，本机会被踢掉线。
     */
    ConnectionStatus[ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"] = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT";
    /**
     * websocket 连接失败
     */
    ConnectionStatus[ConnectionStatus["WEBSOCKET_UNAVAILABLE"] = 7] = "WEBSOCKET_UNAVAILABLE";
    /**
     * websocket 报错
     */
    ConnectionStatus[ConnectionStatus["WEBSOCKET_ERROR"] = 8] = "WEBSOCKET_ERROR";
    /**
     * 用户被封禁
     */
    ConnectionStatus[ConnectionStatus["BLOCKED"] = 9] = "BLOCKED";
    /**
     * 域名错误
     */
    ConnectionStatus[ConnectionStatus["DOMAIN_INCORRECT"] = 12] = "DOMAIN_INCORRECT";
    /**
     * appkey 不正确
     */
    ConnectionStatus[ConnectionStatus["APPKEY_IS_FAKE"] = 20] = "APPKEY_IS_FAKE";
    /**
     * 互踢次数过多（`count > 5`），此时可能出现：在其它他设备登陆有 reconnect 逻辑
     */
    ConnectionStatus[ConnectionStatus["ULTRALIMIT"] = 1101] = "ULTRALIMIT";
    /**
     * 开始请求导航
     */
    ConnectionStatus[ConnectionStatus["REQUEST_NAVI"] = 201] = "REQUEST_NAVI";
    /**
     * 请求导航结束
     */
    ConnectionStatus[ConnectionStatus["RESPONSE_NAVI"] = 202] = "RESPONSE_NAVI";
    /**
     *  请求导航失败
     */
    ConnectionStatus[ConnectionStatus["RESPONSE_NAVI_ERROR"] = 203] = "RESPONSE_NAVI_ERROR";
    /**
     *  请求导航超时
     */
    ConnectionStatus[ConnectionStatus["RESPONSE_NAVI_TIMEOUT"] = 204] = "RESPONSE_NAVI_TIMEOUT";
})(ConnectionStatus || (ConnectionStatus = {}));
var ConnectionStatus$1 = ConnectionStatus;

/* eslint-disable camelcase */
/**
 * 信令名
 */
var Topic;
(function (Topic) {
    /** 发送消息进入离线消息存储，接收者不在线时，可转推送 */
    Topic[Topic["ppMsgP"] = 1] = "ppMsgP";
    /** 发送消息进入离线消息存储，接收者不在线时，不转推送 */
    Topic[Topic["ppMsgN"] = 2] = "ppMsgN";
    /** 发送消息不进入离线存储，用户在线时直发到接收者，不在线时消息丢弃，不转推送 */
    Topic[Topic["ppMsgS"] = 3] = "ppMsgS";
    Topic[Topic["pgMsgP"] = 4] = "pgMsgP";
    Topic[Topic["chatMsg"] = 5] = "chatMsg";
    Topic[Topic["pcMsgP"] = 6] = "pcMsgP";
    Topic[Topic["qryPMsg"] = 7] = "qryPMsg";
    Topic[Topic["qryGMsg"] = 8] = "qryGMsg";
    Topic[Topic["qryCHMsg"] = 9] = "qryCHMsg";
    Topic[Topic["qryCMsg"] = 10] = "qryCMsg";
    Topic[Topic["qrySMsg"] = 11] = "qrySMsg";
    Topic[Topic["recallMsg"] = 12] = "recallMsg";
    Topic[Topic["prMsgS"] = 13] = "prMsgS";
    /** 消息通知拉取 */
    Topic[Topic["s_ntf"] = 14] = "s_ntf";
    /** 服务直发消息 */
    Topic[Topic["s_msg"] = 15] = "s_msg";
    /**
     * 状态同步
     * @todo 需确定同步哪些状态
     */
    Topic[Topic["s_stat"] = 16] = "s_stat";
    /** 服务端通知：聊天室 kv 、会话状态 */
    Topic[Topic["s_cmd"] = 17] = "s_cmd";
    /** 实时配置变更通知 */
    Topic[Topic["s_us"] = 18] = "s_us";
    /** 拉取实时配置 */
    Topic[Topic["pullUS"] = 19] = "pullUS";
    Topic[Topic["pgMsgS"] = 20] = "pgMsgS";
    Topic[Topic["chatMsgS"] = 21] = "chatMsgS";
    Topic[Topic["qrySessionsAtt"] = 22] = "qrySessionsAtt";
    Topic[Topic["pullMsg"] = 23] = "pullMsg";
    Topic[Topic["qrySessions"] = 24] = "qrySessions";
    Topic[Topic["delSessions"] = 25] = "delSessions";
    Topic[Topic["delMsg"] = 26] = "delMsg";
    Topic[Topic["updRRTime"] = 27] = "updRRTime";
    /** 拉取聊天室消息 */
    Topic[Topic["chrmPull"] = 28] = "chrmPull";
    Topic[Topic["joinChrm"] = 29] = "joinChrm";
    Topic[Topic["joinChrmR"] = 30] = "joinChrmR";
    Topic[Topic["exitChrm"] = 31] = "exitChrm";
    Topic[Topic["queryChrmI"] = 32] = "queryChrmI";
    Topic[Topic["setKV"] = 33] = "setKV";
    Topic[Topic["delKV"] = 34] = "delKV";
    /** 拉取聊天室 KV 存储 */
    Topic[Topic["pullKV"] = 35] = "pullKV";
    Topic[Topic["qryRelation"] = 36] = "qryRelation";
    Topic[Topic["delRelation"] = 37] = "delRelation";
    Topic[Topic["pullSeAtts"] = 38] = "pullSeAtts";
    Topic[Topic["setSeAtt"] = 39] = "setSeAtt";
    Topic[Topic["qnTkn"] = 40] = "qnTkn";
    Topic[Topic["qnUrl"] = 41] = "qnUrl";
    Topic[Topic["cleanPMsg"] = 42] = "cleanPMsg";
    Topic[Topic["cleanGMsg"] = 43] = "cleanGMsg";
    Topic[Topic["cleanCMsg"] = 44] = "cleanCMsg";
    Topic[Topic["cleanSMsg"] = 45] = "cleanSMsg";
    Topic[Topic["rtcRJoin_data"] = 46] = "rtcRJoin_data";
    Topic[Topic["rtcRExit"] = 47] = "rtcRExit";
    Topic[Topic["rtcPing"] = 48] = "rtcPing";
    Topic[Topic["rtcSetData"] = 49] = "rtcSetData";
    /** 全量 URI 资源变更 */
    Topic[Topic["userSetData"] = 50] = "userSetData";
    Topic[Topic["rtcQryData"] = 51] = "rtcQryData";
    Topic[Topic["rtcDelData"] = 52] = "rtcDelData";
    Topic[Topic["rtcSetOutData"] = 53] = "rtcSetOutData";
    Topic[Topic["rtcQryUserOutData"] = 54] = "rtcQryUserOutData";
    Topic[Topic["rtcToken"] = 55] = "rtcToken";
    Topic[Topic["rtcUserState"] = 56] = "rtcUserState";
    Topic[Topic["rtcRInfo"] = 57] = "rtcRInfo";
    Topic[Topic["rtcUData"] = 58] = "rtcUData";
    Topic[Topic["rtcUPut"] = 59] = "rtcUPut";
    Topic[Topic["rtcUDel"] = 60] = "rtcUDel";
    Topic[Topic["rtcUList"] = 61] = "rtcUList";
})(Topic || (Topic = {}));
var Topic$1 = Topic;

/**
 * 通过 /ping 接口确定目标导航是否可用，并根据响应速度排序
 * @todo 需确认该嗅探的必要性，并确定是否需要删除
 * @param hosts
 * @param protocol
 * @param runtime
 */
const getValidHosts = (hosts, protocol, runtime) => __awaiter(void 0, void 0, void 0, function* () {
    // 根据 /ping?r=<random> 的响应速度对 hosts 进行排序响应速度排序
    let pingRes = yield Promise.all(hosts.map((host) => __awaiter(void 0, void 0, void 0, function* () {
        const now = Date.now();
        const url = `${protocol}://${host}/ping?r=${randomNum(1000, 9999)}`;
        const res = yield runtime.httpReq({
            url,
            timeout: PING_REQ_TIMEOUT
        });
        return { status: res.status, host, cost: Date.now() - now };
    })));
    // 清理无效地址
    pingRes = pingRes.filter(item => item.status === 200);
    // 按响应时间排序
    if (pingRes.length > 1) {
        pingRes = pingRes.sort((a, b) => a.cost - b.cost);
    }
    return pingRes.map(item => item.host);
});
const formatWSUrl = (protocol, host, appkey, token, runtime, apiVersion, pid) => {
    return `${protocol}://${host}/websocket?appId=${appkey}&token=${encodeURIComponent(token)}&sdkVer=${apiVersion}&pid=${pid}&apiVer=${runtime.isFromUniapp ? 'uniapp' : 'normal'}${runtime.connectPlatform ? '&platform=' + runtime.connectPlatform : ''}`;
};
const formatResolveKey = (messageId, identifier) => [messageId, identifier].join('-');
const isStatusMessage = (topic) => {
    return [Topic$1.ppMsgS, Topic$1.pgMsgS, Topic$1.chatMsgS].map(item => Topic$1[item]).indexOf(topic) >= 0;
};

const sendWSData = (writer, socket) => {
    if (!(writer instanceof PingReqWriter)) {
        logger.debug('Websocket ==>', writer);
    }
    const binary = writer.getBufferData();
    socket.send(binary.buffer);
};
/**
 * @todo 迁移中的 DataCodec 模块导致数据通道不够独立，与 xhr-polling 通信可能会有耦合，后续需解耦
 * @description
 * 1. 基于 WebSocket 协议建立数据通道，实现数据收发
 * 2. 基于 Protobuf 进行数据编解码
 */
class WebSocketChannel extends ADataChannel {
    // 为避免 Circular dependency，此处 runtime 通过参数传入而非全局获取
    constructor(_runtime, watcher) {
        super('websocket', watcher);
        this._runtime = _runtime;
        this._socket = null;
        /**
         * 本端发送消息时等待接收 PubAck 的 Promise.resolve 函数
         */
        this._messageIds = {};
        /**
         * 接收多端同步消息时，等待 PubAck 的 Promise.resolve 函数
         */
        this._syncMessageIds = {};
        /**
         * 当前累计心跳超时次数
         */
        this._failedCount = 0;
        /**
         * 允许连续 PING 超时次数，次数内不主动关闭连接
         */
        this.ALLOW_FAILED_TIMES = 4;
        /**
         * 有效值 0 - 65535，超出 65535 位数超长溢出
         */
        this._idCount = 0;
        this._generateMessageId = () => {
            if (this._idCount >= 65535) {
                this._idCount = 0;
            }
            return ++this._idCount;
        };
    }
    /**
     * 建立 websocket 连接
     * @param appkey
     * @param token
     * @param hosts
     * @param protocol
     * @param apiVersion - apiVersion 需符合 `/\d+(\.\d+){2}/` 规则
     */
    connect(appkey, token, hosts, protocol, apiVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            // 祛除预发布包中的预发布标签，取真实版本号
            apiVersion = ADataChannel.matchVersion(apiVersion);
            // 通知连接中
            this._watcher.status(ConnectionStatus$1.CONNECTING);
            // 检索有效地址
            const validHosts = yield getValidHosts(hosts, protocol, this._runtime);
            if (validHosts.length === 0) {
                logger.error('No valid websocket server hosts!');
                return ErrorCode$1.RC_SOCKET_NOT_CREATED;
            }
            // 确定连接协议：http -> ws, https -> wss
            const wsProtocol = protocol.replace('http', 'ws');
            // 逐个尝试建立 websocket 连接
            for (let i = 0, len = validHosts.length; i < len; i += 1) {
                const url = formatWSUrl(wsProtocol, validHosts[i], appkey, token, this._runtime, apiVersion);
                // 创建 socket，若超时一定时间未收到 ConnAck 确认，则视为连接超时
                const socket = this._runtime.createWebSocket(url);
                // 服务连接非主动断开，尝试重连
                const disconnected = (code) => {
                    if (this._socket === socket) {
                        this._socket = null;
                        this._watcher.status(code);
                    }
                };
                // 等待连接结果
                const code = yield new Promise((resolve) => {
                    socket.onMessage((data) => {
                        if (Object.prototype.toString.call(data) !== '[object ArrayBuffer]') {
                            logger.warn('Socket received invalid data:', data);
                            return;
                        }
                        const signal = readWSBuffer(data);
                        // Ping 响应
                        if (signal instanceof PingRespReader && this._pingResolve) {
                            this._pingResolve(ErrorCode$1.SUCCESS);
                            this._pingResolve = undefined;
                            return;
                        }
                        logger.debug('Websocket <==', signal);
                        // 连接回执
                        if (signal instanceof ConnAckReader) {
                            if (signal.status !== ConnectResultCode.ACCEPTED) {
                                logger.error('Websocket connAck status:', signal.status);
                                resolve(signal.status);
                                return;
                            }
                            this.connectedTime = signal.timestamp;
                            this.userId = signal.userId || '';
                            resolve(ErrorCode$1.SUCCESS);
                            return;
                        }
                        // 连接状态断开
                        if (signal instanceof DisconnectReader) {
                            // 收到 Server 通知己方被踢, 抛出至状态监听
                            // 1 为被其他端挤下线
                            // 2 为用户封禁，其他正常向上抛出给业务层
                            const { status } = signal;
                            const connStatus = status === 1
                                ? ConnectionStatus$1.KICKED_OFFLINE_BY_OTHER_CLIENT
                                : (status === 2 ? ConnectionStatus$1.BLOCKED : status);
                            this._watcher.status(connStatus);
                            return;
                        }
                        // 非连接信令处理
                        this._onReceiveSignal(signal);
                    });
                    socket.onClose((code, reason) => {
                        logger.warn('websocket closed! code:', code, 'reason:', reason);
                        disconnected(ConnectionStatus$1.CONNECTION_CLOSED);
                        resolve(code);
                    });
                    socket.onError((error) => {
                        logger.error('websocket error!', error);
                        disconnected(ConnectionStatus$1.WEBSOCKET_ERROR);
                        resolve(ErrorCode$1.NETWORK_ERROR);
                    });
                    socket.onOpen(() => logger.debug('websocket open =>', url));
                    // ConnAck 超时
                    timerSetTimeout(() => {
                        resolve(ErrorCode$1.TIMEOUT);
                    }, WEB_SOCKET_TIMEOUT);
                });
                if (code === ErrorCode$1.SUCCESS) {
                    this._socket = socket;
                    // 启动定时心跳
                    this._checkAlive();
                    // 通知上层连接成功
                    this._watcher.status(ConnectionStatus$1.CONNECTED);
                    return code;
                }
                socket.close();
            }
            return ErrorCode$1.RC_NET_UNAVAILABLE;
        });
    }
    _checkAlive() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._socket) {
                // 连接已中断，停止发 Ping
                return;
            }
            this.sendOnly(new PingReqWriter());
            // 等待响应
            const code = yield new Promise((resolve) => {
                this._pingResolve = resolve;
                setTimeout(() => {
                    this._pingResolve = undefined;
                    resolve(ErrorCode$1.TIMEOUT);
                }, IM_SIGNAL_TIMEOUT);
            });
            // 响应超时，尝试关闭连接
            if (code !== ErrorCode$1.SUCCESS && ++this._failedCount >= this.ALLOW_FAILED_TIMES) {
                (_a = this._socket) === null || _a === void 0 ? void 0 : _a.close();
                return;
            }
            this._failedCount = 0;
            // 重新定时任务
            setTimeout(() => this._checkAlive(), IM_PING_INTERVAL_TIME);
        });
    }
    _onReceiveSignal(signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const { messageId, identifier } = signal;
            // 检查是否为 Ack, 如果是, 则处理回执
            const isQosNeedAck = signal.header && signal.header.qos !== QOS.AT_MOST_ONCE;
            if (isQosNeedAck) {
                // Pub 回执
                if (signal instanceof PublishReader && !signal.syncMsg) {
                    this.sendOnly(new PubAckWriter(messageId));
                }
                // qry 回执
                if (signal instanceof QueryAckReader) {
                    this.sendOnly(new QueryConWriter(messageId));
                }
            }
            const key = formatResolveKey(messageId, identifier);
            // 处理 pubAck、queryAck 回执
            if (messageId > 0) {
                const resolve = this._messageIds[key];
                resolve && resolve(signal);
                // 多端同步消息的 pubAck
                this._syncMessageIds[key] && this._syncMessageIds[key](signal);
            }
            // PublishReader 处理
            if (signal instanceof PublishReader) {
                const { syncMsg, topic } = signal;
                // 非同步消息或者是状态消息（ppMsgS，pgMsgS，chatMsgS），则直接抛出到上层
                if (!syncMsg || isStatusMessage(topic)) {
                    this._watcher.signal(signal);
                    return;
                }
                // 多端同步消息息需等待 CMP 发送的 PubAck（Comet 不发）
                const ack = yield new Promise(resolve => {
                    this._syncMessageIds[key] = resolve;
                });
                delete this._syncMessageIds[key];
                this._watcher.signal(signal, ack);
            }
        });
    }
    sendOnly(writer) {
        if (this._socket) {
            sendWSData(writer, this._socket);
        }
    }
    send(writer, respPBName, option, timeout = IM_SIGNAL_TIMEOUT) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._socket) {
                const messageId = this._generateMessageId();
                writer.messageId = messageId;
                const identifier = writer.identifier;
                sendWSData(writer, this._socket);
                // 等待响应结果
                const respSignal = yield new Promise((resolve) => {
                    const key = formatResolveKey(messageId, identifier);
                    this._messageIds[key] = resolve;
                    setTimeout(() => {
                        delete this._messageIds[key];
                        resolve(); // 无值认为 timeout 超时
                    }, timeout);
                });
                if (!respSignal) {
                    return { code: ErrorCode$1.TIMEOUT };
                }
                if (respSignal.status !== 0) {
                    return { code: respSignal.status };
                }
                const data = respPBName ? this.codec.decodeByPBName(respSignal.data, respPBName, option) : respSignal;
                return { code: ErrorCode$1.SUCCESS, data };
            }
            return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
        });
    }
    close() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
            this._watcher.status(ConnectionStatus$1.DISCONNECTED);
        }
    }
}

(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
})(exports.HttpMethod || (exports.HttpMethod = {}));

const isValidJSON = (jsonStr) => {
    if (isObject(jsonStr)) {
        return true;
    }
    let isValid = false;
    try {
        const obj = JSON.parse(jsonStr);
        const str = JSON.stringify(obj);
        isValid = str === jsonStr;
    }
    catch (e) {
        isValid = false;
    }
    return isValid;
};
class CometChannel extends ADataChannel {
    constructor(_runtime, watcher) {
        super('comet', watcher);
        this._runtime = _runtime;
        this._messageIds = {};
        this._syncMessageIds = {};
        this._idCount = 0;
        this._generateMessageId = () => {
            return ++this._idCount;
        };
        this._pid = encodeURIComponent(new Date().getTime() + Math.random() + '');
    }
    /**
     * 长轮询结果处理
     * @param data
     */
    handleCometRes(res) {
        if (res.status !== 200 && res.status !== 202) {
            return false;
        }
        const data = isString(res.data) ? JSON.parse(res.data) : res.data;
        if (!data) {
            logger.warn('received data is not a validJson', data);
            return false;
        }
        if (!isArray(data)) {
            return true;
        }
        forEach(data, (item) => __awaiter(this, void 0, void 0, function* () {
            const { sessionid } = item;
            if (sessionid) {
                this._sessionid = sessionid;
            }
            const signal = readCometData(item);
            const { messageId, _header, status, identifier } = signal;
            const isQosNeedAck = _header && _header.qos !== QOS.AT_MOST_ONCE;
            const key = formatResolveKey(messageId, identifier);
            // 处理 pubAck、queryAck 回执
            if (messageId && signal.getIdentifier) {
                const resolve = this._messageIds[key];
                resolve && resolve(signal);
                // 多端同步消息的 pubAck
                this._syncMessageIds[key] && this._syncMessageIds[key](signal);
            }
            // 是否需要发回执
            if (isQosNeedAck) {
                if (signal instanceof PublishReader && !signal.syncMsg) {
                    const writer = new PubAckWriter(messageId);
                    this.sendOnly(writer);
                }
                if (signal instanceof QueryAckReader) {
                    const writer = new QueryConWriter(messageId);
                    this.sendOnly(writer);
                }
            }
            // 连接状态断开
            if (signal instanceof DisconnectReader) {
                const connStatus = status === 1
                    ? ConnectionStatus$1.KICKED_OFFLINE_BY_OTHER_CLIENT
                    : (status === 2 ? ConnectionStatus$1.BLOCKED : status);
                this._watcher.status(connStatus);
            }
            // 处理 publish
            if (signal instanceof PublishReader) {
                const { syncMsg, topic } = signal;
                // 非同步消息或者是状态消息（ppMsgS，pgMsgS，chatMsgS），则直接抛出到上层
                if (!syncMsg || isStatusMessage(topic)) {
                    this._watcher.signal(signal);
                    return false;
                }
                // 多端同步消息需等待 CMP 发送的 PubAck
                const ack = yield new Promise(resolve => {
                    this._syncMessageIds[key] = resolve;
                });
                delete this._syncMessageIds[key];
                this._watcher.signal(signal, ack);
            }
        }));
        return true;
    }
    /**
     * 长轮询心跳
     */
    _startPullSignal(protocol) {
        return __awaiter(this, void 0, void 0, function* () {
            const timestamp = new Date().getTime();
            const url = `${protocol}://${this._domain}/pullmsg.js?sessionid=${this._sessionid}&timestrap=${timestamp}&pid=${this._pid}`;
            const res = yield this._runtime.httpReq({
                url,
                body: { pid: this._pid },
                timeout: IM_COMET_PULLMSG_TIMEOUT
            });
            const isSuccess = this.handleCometRes(res);
            if (!this._isDisconnected) {
                if (isSuccess) {
                    this._startPullSignal(protocol);
                }
                else {
                    this._watcher.status(ConnectionStatus$1.NETWORK_UNAVAILABLE);
                    this.close();
                }
            }
        });
    }
    connect(appkey, token, hosts, protocol, apiVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            // 祛除预发布包中的预发布标签，取真实版本号
            apiVersion = ADataChannel.matchVersion(apiVersion);
            this._protocol = protocol;
            this._isDisconnected = false;
            this._watcher.status(ConnectionStatus$1.CONNECTING);
            const validHosts = yield getValidHosts(hosts, protocol, this._runtime);
            if (validHosts.length === 0) {
                logger.error('No valid websocket server hosts!');
                return ErrorCode$1.RC_SOCKET_NOT_CREATED;
            }
            /**
             * 连接结果处理
             */
            const handleConnectRes = (res) => {
                if (res.status !== 200 && res.status !== 202) {
                    return false;
                }
                if (res.data) {
                    if (!isValidJSON(res.data)) {
                        logger.warn('received data is not a validJson', res.data);
                        return false;
                    }
                    return isObject(res.data) ? res.data : JSON.parse(res.data);
                }
                return false;
            };
            for (let i = 0, len = validHosts.length; i < len; i += 1) {
                const url = formatWSUrl(protocol, validHosts[i], appkey, token, this._runtime, apiVersion, this._pid);
                const res = yield this._runtime.httpReq({
                    url,
                    body: {
                        pid: this._pid
                    },
                    timeout: WEB_SOCKET_TIMEOUT
                });
                const response = handleConnectRes(res);
                this._domain = validHosts[i];
                if (response && response.status === 0) {
                    this._watcher.status(ConnectionStatus$1.CONNECTED);
                    this._sessionid = response.sessionid;
                    this._startPullSignal(protocol);
                    this.userId = response.userId;
                    this.connectedTime = response.timestamp;
                    return response.status;
                }
            }
            return ErrorCode$1.RC_NET_UNAVAILABLE;
        });
    }
    sendCometData(writer, timeout = IM_SIGNAL_TIMEOUT) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _domain, _sessionid, _pid } = this;
            const { messageId, topic, targetId, identifier } = writer;
            const headerCode = writer.getHeaderFlag();
            let url;
            if (topic) {
                url = `${this._protocol}://${_domain}/websocket?messageid=${messageId}&header=${headerCode}&sessionid=${_sessionid}&topic=${topic}&targetid=${targetId}&pid=${_pid}`;
            }
            else {
                url = `${this._protocol}://${_domain}/websocket?messageid=${messageId}&header=${headerCode}&sessionid=${_sessionid}&pid=${_pid}`;
            }
            const res = yield this._runtime.httpReq({
                url,
                method: exports.HttpMethod.POST,
                body: writer.getCometData()
            });
            this.handleCometRes(res);
        });
    }
    sendOnly(writer) {
        this.sendCometData(writer);
    }
    send(writer, respPBName, option, timeout = IM_SIGNAL_TIMEOUT) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageId = this._generateMessageId();
            writer.messageId = messageId;
            this.sendCometData(writer);
            const { identifier } = writer;
            const respSignal = yield new Promise((resolve) => {
                const key = formatResolveKey(messageId, identifier);
                this._messageIds[key] = resolve;
                setTimeout(() => {
                    delete this._messageIds[key];
                    resolve(); // 无值认为 timeout 超时
                }, timeout);
            });
            if (!respSignal) {
                return { code: ErrorCode$1.TIMEOUT };
            }
            if (respSignal.status !== 0) {
                return { code: respSignal.status };
            }
            const data = respPBName ? this.codec.decodeByPBName(respSignal.data, respPBName, option) : respSignal;
            return { code: ErrorCode$1.SUCCESS, data };
        });
    }
    close() {
        this._isDisconnected = true;
        this._watcher.status(ConnectionStatus$1.DISCONNECTED);
    }
}

const getKey = (appkey, token) => {
    return ['navi', appkey, token].join('_');
};
const getNaviInfoFromCache = (appkey, token, storage) => {
    const key = getKey(appkey, token);
    const jsonStr = storage.getItem(key);
    if (!jsonStr) {
        return null;
    }
    let data;
    try {
        data = JSON.parse(jsonStr);
    }
    catch (err) {
        // 缓存数据被篡改，清空缓存
        storage.removeItem(key);
        return null;
    }
    // 缓存超时
    if (Date.now() - data.timestamp >= NAVI_CACHE_DURATION) {
        storage.removeItem(key);
        return null;
    }
    return data.naviInfo;
};
const setNaviInfo2Cache = (appkey, token, naviInfo, storage) => {
    const key = getKey(appkey, token);
    const data = {
        naviInfo,
        timestamp: Date.now()
    };
    storage.setItem(key, JSON.stringify(data));
};
const clearCache = (appkey, token, storage) => {
    storage.removeItem(getKey(appkey, token));
};
class Navi {
    constructor(_runtime, _appkey, 
    /**
     * 导航地址，该数据中不包含 token 中的动态导航
     */
    _navigators, _customCMP = [], _apiVersion, _connectType) {
        this._runtime = _runtime;
        this._appkey = _appkey;
        this._navigators = _navigators;
        this._customCMP = _customCMP;
        this._apiVersion = _apiVersion;
        this._connectType = _connectType;
    }
    _formatNaviUrl(url, token, appkey, jsonpFunc, connectType) {
        const path = this._runtime.isSupportSocket() && (connectType === 'websocket') ? 'navi' : 'cometnavi';
        const tmpUrl = `${url}/${path}.js?appId=${appkey}&token=${encodeURIComponent(token)}&callBack=${jsonpFunc}&v=${this._apiVersion}&r=${Date.now()}`;
        return tmpUrl;
    }
    _reqNavi(uris, appkey, token, connectType) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonpFunc = 'getServerEndpoint';
            for (let i = 0, len = uris.length; i < len; i += 1) {
                const url = this._formatNaviUrl(uris[i], token, appkey, jsonpFunc, connectType);
                logger.debug(`req navi => ${url}`);
                const res = yield this._runtime.httpReq({
                    url,
                    timeout: NAVI_REQ_TIMEOUT
                });
                if (res.status !== 200) {
                    continue;
                }
                try {
                    // 返回结果中，私有云无 ; 号，公有云有分号
                    // 解析 res 数据，解析成功则返回 naviInfo 数据
                    const jsonStr = res.data.replace(`${jsonpFunc}(`, '').replace(/\);?$/, '');
                    const naviInfo = JSON.parse(jsonStr);
                    // 补充导航数据请求使用的协议
                    const protocol = /^https/.test(url) ? 'https' : 'http';
                    naviInfo.protocol = protocol;
                    return naviInfo;
                }
                catch (err) {
                    logger.error('parse navi err =>', err);
                }
            }
            return null;
        });
    }
    /**
     * 获取导航数据
     * @param force 是否强制重新获取并清空缓存数据
     */
    getInfo(token, dynamicUris, force) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: 微信小程序直接返值，不需请求导航
            if (!this._runtime.useNavi) {
                let connectUrl;
                if (this._runtime.isSupportSocket()) {
                    connectUrl = MINI_SOCKET_CONNECT_URIS.join(',');
                }
                else {
                    connectUrl = MINI_COMET_CONNECT_URIS.join(',');
                }
                const naviInfo = {
                    code: 200,
                    protocol: 'https',
                    server: '',
                    voipCallInfo: '',
                    kvStorage: 0,
                    openHttpDNS: false,
                    historyMsg: false,
                    chatroomMsg: false,
                    uploadServer: 'https://upload.qiniup.com',
                    bosAddr: 'https://gz.bcebos.com',
                    location: '',
                    monitor: 0,
                    joinMChrm: false,
                    openMp: 0,
                    openUS: 0,
                    grpMsgLimit: 0,
                    isFormatted: 0,
                    gifSize: 2048,
                    logSwitch: 0,
                    logPolicy: '',
                    compDays: 0,
                    msgAck: '',
                    activeServer: '',
                    qnAddr: '',
                    extkitSwitch: 0,
                    alone: false,
                    voipServer: '',
                    offlinelogserver: '',
                    backupServer: ((_a = this._customCMP) === null || _a === void 0 ? void 0 : _a.length) ? this._customCMP.join(',') : connectUrl
                };
                setNaviInfo2Cache(this._appkey, token, naviInfo, this._runtime.localStorage);
                return naviInfo;
            }
            // 判断是否需要重新获取导航数据，是则清空缓存数据
            if (force) {
                this._clear(token);
            }
            // 判断是否有有效缓存数据
            let naviInfo = getNaviInfoFromCache(this._appkey, token, this._runtime.localStorage);
            if (naviInfo) {
                return naviInfo;
            }
            const uris = this._navigators.slice();
            dynamicUris.length && dynamicUris.forEach(uri => {
                uris.indexOf(uri) < 0 && uris.push(uri);
            });
            // 串行请求，直到获取到导航数据或所有请求结束
            // TODO: 考虑是否可改为并行请求，串行请求时间过长
            naviInfo = yield this._reqNavi(uris, this._appkey, token, this._connectType);
            if (naviInfo) {
                setNaviInfo2Cache(this._appkey, token, naviInfo, this._runtime.localStorage);
                return naviInfo;
            }
            // TODO: 所有请求已失败，公有云需要内置导航数据
            return naviInfo;
        });
    }
    getInfoFromCache(token) {
        return getNaviInfoFromCache(this._appkey, token, this._runtime.localStorage);
    }
    /**
     * 清空导航数据：内存数据、缓存数据
     */
    _clear(token) {
        clearCache(this._appkey, token, this._runtime.localStorage);
    }
}

/**
 * 引擎定义
 */
class AEngine {
    /**
     * 引擎初始化
     * @param _appkey
     */
    constructor(runtime, _appkey, _watcher, _apiVersion) {
        this.runtime = runtime;
        this._appkey = _appkey;
        this._watcher = _watcher;
        this._apiVersion = _apiVersion;
        /**
         * 当前用户 Id
         */
        this.currentUserId = '';
        /**
         * 连接时间
        */
        this.connectedTime = 0;
    }
}

const OUTBOX_KEY = 'outbox';
const INBOX_KEY = 'inbox';
const generateKey = (prefix, appkey, userId) => {
    return [prefix, appkey, userId].join('_');
};
/**
 * 用于维护用户的收件箱、发件箱时间
 */
class Letterbox {
    constructor(_runtime, _appkey) {
        this._runtime = _runtime;
        this._appkey = _appkey;
        // 需要在内存维护一份时间戳数据，以避免同浏览器多标签页下多端拉取消息时共享时间戳
        this._inboxTime = 0;
        this._outboxTime = 0;
    }
    /**
     * 更新收件箱时间
     * @param timestamp
     * @param userId
     */
    setInboxTime(timestamp, userId) {
        if (this._inboxTime > timestamp) {
            return;
        }
        this._inboxTime = timestamp;
        const key = generateKey(INBOX_KEY, this._appkey, userId);
        this._runtime.localStorage.setItem(key, timestamp.toString());
    }
    /**
     * 获取收件箱时间
     * @param userId
     */
    getInboxTime(userId) {
        if (this._inboxTime === 0) {
            const key = generateKey(INBOX_KEY, this._appkey, userId);
            this._inboxTime = parseInt(this._runtime.localStorage.getItem(key)) || 0;
        }
        return this._inboxTime;
    }
    /**
     * 更新发件箱时间
     * @param timestamp
     * @param userId
     */
    setOutboxTime(timestamp, userId) {
        if (this._outboxTime > timestamp) {
            return;
        }
        this._outboxTime = timestamp;
        const key = generateKey(OUTBOX_KEY, this._appkey, userId);
        this._runtime.localStorage.setItem(key, timestamp.toString());
    }
    /**
     * 获取发件箱时间
     * @param userId
     */
    getOutboxTime(userId) {
        if (this._outboxTime === 0) {
            const key = generateKey(OUTBOX_KEY, this._appkey, userId);
            this._outboxTime = parseInt(this._runtime.localStorage.getItem(key)) || 0;
        }
        return this._outboxTime;
    }
}

const PullTimeCache = {
    _caches: {},
    set(chrmId, time) {
        this._caches[chrmId] = time;
    },
    get(chrmId) {
        return this._caches[chrmId] || 0;
    },
    clear(chrmId) {
        this._caches[chrmId] = 0;
    }
};
class KVStore {
    constructor(chatroomId, currentUserId) {
        this._kvCaches = {};
        this._chatroomId = chatroomId;
        this._currentUserId = currentUserId;
    }
    _add(kv) {
        const { key } = kv;
        kv.isDeleted = false;
        this._kvCaches[key] = kv;
    }
    _remove(kv) {
        const { key } = kv;
        const cacheKV = this._kvCaches[key];
        cacheKV.isDeleted = true;
        this._kvCaches[key] = cacheKV;
    }
    _setEntry(data, isFullUpdate) {
        const { key, type, isOverwrite, userId } = data;
        const latestUserId = this._getSetUserId(key);
        const isDeleteOpt = type === ChatroomEntryType$1.DELETE;
        const isSameAtLastSetUser = latestUserId === userId;
        const isKeyNotExist = !this._isExisted(key);
        const event = isDeleteOpt ? this._remove : this._add;
        if (isFullUpdate) {
            event.call(this, data);
        }
        else if (isOverwrite || isSameAtLastSetUser || isKeyNotExist) {
            event.call(this, data);
        }
        else ;
    }
    getValue(key) {
        const kv = this._kvCaches[key] || {};
        const { isDeleted } = kv;
        return isDeleted ? null : kv.value;
    }
    getAllValue() {
        const entries = {};
        for (const key in this._kvCaches) {
            if (!this._kvCaches[key].isDeleted) {
                entries[key] = this._kvCaches[key].value;
            }
        }
        return entries;
    }
    _getSetUserId(key) {
        const cache = this._kvCaches[key] || {};
        return cache.userId;
    }
    _isExisted(key) {
        const cache = this._kvCaches[key] || {};
        const { value, isDeleted } = cache;
        return (value && !isDeleted);
    }
    setEntries(data) {
        let { kvEntries, isFullUpdate } = data;
        kvEntries = kvEntries || [];
        isFullUpdate = isFullUpdate || false;
        isFullUpdate && this.clear();
        kvEntries.forEach((kv) => {
            this._setEntry(kv, isFullUpdate);
        });
    }
    clear() {
        this._kvCaches = {};
    }
}
class ChrmEntryHandler {
    constructor(engine) {
        this._pullQueue = [];
        this._isPulling = false;
        this._storeCaches = {}; // 所有聊天室的 Store 缓存
        this._engine = engine;
    }
    _startPull() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._isPulling || this._pullQueue.length === 0) {
                return;
            }
            this._isPulling = true;
            const { chrmId, timestamp } = this._pullQueue.splice(0, 1)[0];
            const pulledUpTime = PullTimeCache.get(chrmId);
            if (pulledUpTime > timestamp) { // 已经拉取过，不再拉取
                this._isPulling = false;
                return;
            }
            const { code, data } = yield this._engine.pullChatroomEntry(chrmId, timestamp);
            if (code === ErrorCode$1.SUCCESS) {
                this._isPulling = false;
                PullTimeCache.set(chrmId, data.syncTime || 0);
                this._startPull();
            }
            else {
                this._startPull();
            }
        });
    }
    /**
     * 退出聊天室前清空 kv 缓存 和 拉取时间缓存，再次加入聊天室后重新拉取 kv 并更新本地
    */
    reset(chrmId) {
        // throw new Error('Method not implemented.')
        PullTimeCache.clear(chrmId);
        const kvStore = this._storeCaches[chrmId];
        kvStore.clear();
    }
    /**
     * 向服务端拉取 kv
     * @description
     * 拉取时机: 1、加入聊天室成功后 2、收到 Server 拉取通知后
    */
    pullEntry(chrmId, timestamp) {
        this._pullQueue.push({ chrmId, timestamp });
        this._startPull();
    }
    /**
     * 向本地缓存己方设置或拉取到的 kv
    */
    setLocal(chrmId, data, userId) {
        // throw new Error('Method not implemented.')
        let kvStore = this._storeCaches[chrmId];
        if (!notEmptyObject(kvStore)) {
            kvStore = new KVStore(chrmId, userId);
        }
        kvStore.setEntries(data);
        this._storeCaches[chrmId] = kvStore;
    }
    /**
     * 获取聊天室 key 对应的 value
     * @param chrmId
     * @param key
    */
    getValue(chrmId, key) {
        // throw new Error('Method not implemented.')
        const kvStore = this._storeCaches[chrmId];
        return kvStore ? kvStore.getValue(key) : null;
    }
    /**
     * 获取聊天室所有 key value
     * @param chrmId
    */
    getAll(chrmId) {
        // throw new Error('Method not implemented.')
        const kvStore = this._storeCaches[chrmId];
        let entries = {};
        if (kvStore) {
            entries = kvStore.getAllValue();
        }
        return entries;
    }
}
class JoinedChrmManager {
    constructor(_runtime, _appkey, _userId, _canJoinMulipleChrm) {
        this._runtime = _runtime;
        this._appkey = _appkey;
        this._userId = _userId;
        this._canJoinMulipleChrm = _canJoinMulipleChrm;
        this._sessionKey = '';
        this._joinedChrmsInfo = {};
        this._sessionKey = `sync-chrm-${this._appkey}-${this._userId}`;
    }
    set(chrmId, count = 10) {
        !this._canJoinMulipleChrm && (this._joinedChrmsInfo = {});
        this._joinedChrmsInfo[chrmId] = count;
        this._runtime.sessionStorage.setItem(this._sessionKey, JSON.stringify(this._joinedChrmsInfo));
    }
    get() {
        let infos;
        try {
            infos = this._runtime.sessionStorage.getItem(this._sessionKey);
        }
        catch (err) {
            logger.error('parse rejoined chrm infos error', err);
            infos = {};
        }
        return infos;
    }
    remove(chrmId) {
        delete this._joinedChrmsInfo[chrmId];
        if (notEmptyObject(this._joinedChrmsInfo)) {
            this._runtime.sessionStorage.setItem(this._sessionKey, JSON.stringify(this._joinedChrmsInfo));
        }
        else {
            this.clear();
        }
    }
    clear() {
        this._joinedChrmsInfo = {};
        this._runtime.sessionStorage.removeItem(this._sessionKey);
    }
}

class EventDispatcher {
    constructor() {
        this._map = {};
    }
    /**
     * 添加事件监听器
     * @param eventType
     * @param listener
     */
    on(eventType, listener) {
        const arr = this._map[eventType] || (this._map[eventType] = []);
        if (arr.includes(listener)) {
            return;
        }
        arr.push(listener);
    }
    /**
     * 移除事件监听器
     * @param eventType
     * @param listener
     */
    off(eventType, listener) {
        const arr = this._map[eventType];
        if (!arr) {
            return;
        }
        const len = arr.length;
        for (let i = len - 1; i >= 0; i -= 1) {
            if (arr[i] === listener) {
                arr.splice(i, 1);
                if (len === 1) {
                    delete this._map[eventType];
                }
                break;
            }
        }
    }
    /**
     * 事件派发
     * @param eventType
     * @param data
     */
    emit(eventType, data) {
        const arr = this._map[eventType];
        if (!arr) {
            return;
        }
        arr.forEach(item => item(data));
    }
    /**
     * 清空所有指定类型的事件监听器
     * @param eventType
     */
    removeAll(eventType) {
        delete this._map[eventType];
    }
    /**
     * 无差别清空所有事件监听器
     */
    clear() {
        Object.keys(this._map).forEach(this.removeAll, this);
    }
}

const EventName = {
    STATUS_CHANGED: 'converStatusChanged'
};
class ConversationStatus {
    constructor(engine, appkey, currentUserId) {
        this._eventEmitter = new EventDispatcher();
        this._pullQueue = [];
        this._isPulling = false;
        this._storage = createRootStorage(engine.runtime);
        this._appkey = appkey;
        this._currentUserId = currentUserId;
        this._engine = engine;
        this._storagePullTimeKey = `con-s-${appkey}-${currentUserId}`;
    }
    /**
     * 向本地设置拉取的时间, 并通知上层会话状态的变更
    */
    _set(list) {
        // todo('ConversationStatus set')
        if (isUndefined(list)) {
            return;
        }
        let localTime = this._storage.get(this._storagePullTimeKey) || 0;
        const listCount = list.length;
        list.forEach((statusItem, index) => {
            const updatedTime = statusItem.updatedTime || 0;
            localTime = updatedTime > localTime ? updatedTime : localTime;
            statusItem.conversationType = statusItem.type;
            this._eventEmitter.emit(EventName.STATUS_CHANGED, {
                statusItem,
                isLastPull: index === listCount - 1
            });
        });
        this._storage.set(this._storagePullTimeKey, localTime);
    }
    /**
     * 拉取队列
    */
    _startPull() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._isPulling || this._pullQueue.length === 0) {
                return;
            }
            this._isPulling = true;
            const time = this._pullQueue.splice(0, 1)[0];
            const { code, data } = yield this._engine.pullConversationStatus(time);
            if (code === ErrorCode$1.SUCCESS) {
                this._isPulling = false;
                this._set(data);
                this._startPull();
            }
            else {
                this._startPull();
            }
        });
    }
    /**
     * 从服务端拉取变更
    */
    pull(newPullTime) {
        const time = this._storage.get(this._storagePullTimeKey) || 0;
        if (newPullTime > time || newPullTime === 0) {
            // 拉取,并通知上层拉取到的数据
            this._pullQueue.push(time);
            this._startPull();
        }
    }
    /**
     * 注册会话状态变更事件
    */
    watch(event) {
        this._eventEmitter.on(EventName.STATUS_CHANGED, (data) => {
            event(data);
        });
    }
    /**
     * 断开连接的后，取消注册的会话状态变更时间，防止再次连接重复注册
    */
    unwatch() {
        this._eventEmitter.off(EventName.STATUS_CHANGED, (data) => { });
    }
}

const StorageKey2ConversationKey = {
    c: { keyName: 'unreadMessageCount', defaultVal: 0 },
    hm: { keyName: 'hasMentioned', defaultVal: false },
    m: { keyName: 'mentionedInfo', defaultVal: null },
    t: { keyName: 'lastUnreadTime', defaultVal: 0 },
    nc: { keyName: 'notificationStatus', defaultVal: 2 },
    to: { keyName: 'isTop', defaultVal: false }
};
const ConversationKey2StorageKey = {};
for (const key in StorageKey2ConversationKey) {
    const keyName = StorageKey2ConversationKey[key].keyName;
    ConversationKey2StorageKey[keyName] = key;
}
/**
 * 存储再本地的 conversation 信息
 * 目前字段：
 *  未读数
 *  是否有 @  消息
 *  @ 内容
 *  免打扰状态
 *  置顶状态
 * 对应开发者字段
 *  unreadMessageCount
 *  hasMentioned
 *  mentionedInfo
 *  notificationStatus
 *  isTop
*/
class ConversationStore {
    constructor(runtime, _appkey, _currentUserId) {
        this._appkey = _appkey;
        this._currentUserId = _currentUserId;
        const suffix = `con-${_appkey}-${_currentUserId}`;
        this.storage = new AppStorage(runtime, suffix);
    }
    _getStoreKey(type, targetId) {
        return `${type}_${targetId}`;
    }
    _getConOptionByKey(key) {
        key = key || '';
        const arr = key.split('_');
        if (arr.length === 2) {
            return {
                conversationType: arr[0],
                targetId: arr[1]
            };
        }
        else {
            return {
                conversationType: ConversationType$1.PRIVATE,
                targetId: ''
            };
        }
    }
    /**
     * 更新 hasMentioned mentionedInfo 信息
    */
    updateMentionedData(message) {
        const { conversationType, targetId, messageType, isMentioned, content, senderUserId } = message;
        const key = this._getStoreKey(conversationType, targetId);
        const local = this.storage.get(key) || {};
        const storageMetionedInfoKey = ConversationKey2StorageKey.mentionedInfo;
        const storageHasMentionedKey = ConversationKey2StorageKey.hasMentioned;
        let updatedUserIdList = [];
        // let mentionedInfo = {}
        const localMentionedInfo = local[storageMetionedInfoKey] || {};
        const localUserIdList = localMentionedInfo.userIdList || [];
        let mentionedInfo = content.mentionedInfo;
        // 如果是 @ 消息, 且 @ 列表里有自己, 更新本地的 MentionInfo.userIdList
        if (isMentioned && conversationType === ConversationType$1.GROUP && mentionedInfo.userIdList) {
            const receiveUserIdList = mentionedInfo.userIdList;
            const isNotIncludeSender = localUserIdList.indexOf(senderUserId) < 0;
            receiveUserIdList.forEach(userId => {
                if (userId === this._currentUserId && isNotIncludeSender) {
                    localUserIdList.push(senderUserId);
                }
            });
            if (mentionedInfo.type === MentionedType$1.ALL && isNotIncludeSender) {
                localUserIdList.push(senderUserId);
            }
            updatedUserIdList = localUserIdList;
        }
        // 如果是撤回 @ 消息, 更新本地 userIdList， userIdList 为空时更新 hasMentioned 为 false
        if (messageType === MessageType$1.RECALL && conversationType === ConversationType$1.GROUP) {
            const list = localUserIdList;
            localUserIdList.forEach((userId, index) => {
                if (userId === senderUserId) {
                    list.splice(index, 1);
                }
            });
            updatedUserIdList = list;
        }
        mentionedInfo = {
            userIdList: updatedUserIdList,
            type: mentionedInfo === null || mentionedInfo === void 0 ? void 0 : mentionedInfo.type
        };
        if (updatedUserIdList.length !== 0) {
            local[storageMetionedInfoKey] = mentionedInfo;
            local[storageHasMentionedKey] = true;
        }
        else {
            delete local[storageMetionedInfoKey];
            delete local[storageHasMentionedKey];
        }
        if (notEmptyObject(local)) {
            this.storage.set(key, local);
        }
        else {
            this.storage.remove(key);
        }
    }
    /**
     * 设置会话信息
    */
    set(type, targetId, conversation) {
        const key = this._getStoreKey(type, targetId);
        const local = this.storage.get(key) || {};
        for (const key in conversation) {
            const storageKey = ConversationKey2StorageKey[key];
            const val = conversation[key];
            if (isUndefined(storageKey) || isUndefined(val) || key === 'hasMentioned' || key === 'MentionedInfo') {
                continue;
            }
            const defaultVal = StorageKey2ConversationKey[storageKey].defaultVal;
            if (val === defaultVal) {
                // 默认值不存储，避免占用存储空间。获取时未获取到的返回默认值
                delete local[storageKey];
            }
            else {
                local[storageKey] = val;
            }
            if (!local.c) {
                // 清空未读数则清空最后操作未读时间，避免占用空间
                delete local.t;
            }
        }
        if (notEmptyObject(local)) {
            this.storage.set(key, local);
        }
        else {
            this.storage.remove(key);
        }
    }
    /**
     * 获取单个会话本地存储信息
    */
    get(type, targetId) {
        const key = this._getStoreKey(type, targetId);
        const local = this.storage.get(key) || {};
        const conversation = {};
        for (const key in StorageKey2ConversationKey) {
            const { keyName, defaultVal } = StorageKey2ConversationKey[key];
            conversation[keyName] = local[key] || defaultVal;
        }
        return conversation;
    }
    /**
     * 获取所有会话信息
    */
    getValue(func) {
        const values = this.storage.getValues() || {};
        const storageConversationList = [];
        for (const key in values) {
            const { conversationType, targetId } = this._getConOptionByKey(key);
            let conversation = {};
            const store = values[key];
            for (const storeKey in store) {
                const { keyName, defaultVal } = StorageKey2ConversationKey[storeKey];
                conversation[keyName] = store[storeKey] || defaultVal;
            }
            conversation = Object.assign(conversation, {
                conversationType,
                targetId
            });
            conversation = func ? func(conversation) : conversation;
            storageConversationList.push(conversation);
        }
        return storageConversationList;
    }
}

const saveConversationType = [ConversationType$1.PRIVATE, ConversationType$1.GROUP, ConversationType$1.SYSTEM];
const EventName$1 = {
    CHANGED: 'conversationChanged'
};
class ConversationManager {
    constructor(engine, appkey, userId, updatedConversationFunc) {
        this._updatedConversations = {};
        this._eventEmitter = new EventDispatcher();
        this._draftMap = {};
        this._appkey = appkey;
        this._loginUserId = userId;
        this._store = new ConversationStore(engine.runtime, appkey, userId);
        this._statusManager = new ConversationStatus(engine, appkey, userId);
        this._statusManager.watch((data) => {
            const { statusItem, isLastPull } = data;
            this.addStatus(statusItem, isLastPull);
        });
        this._eventEmitter.on(EventName$1.CHANGED, (data) => {
            updatedConversationFunc(data);
        });
    }
    /**
     * 根据消息计算本地 localConversation 是否需要更新 和 更新的未读数
    */
    _calcUnreadCount(message, localConversation) {
        const { content, messageType, sentTime, isCounted, messageDirection, senderUserId } = message;
        const isSelfSend = messageDirection === MessageDirection$1.SEND && senderUserId === this._loginUserId;
        const isRecall = messageType === MessageType$1.RECALL;
        const hasContent = isObject(content);
        let hasChanged = false;
        const lastUnreadTime = localConversation.lastUnreadTime || 0;
        const unreadMessageCount = localConversation.unreadMessageCount || 0;
        const hasBeenAdded = lastUnreadTime > sentTime;
        // 自己发送的消息、已经计算过的消息 不更新本地存储
        if (hasBeenAdded || isSelfSend) {
            return { hasChanged, localConversation };
        }
        // 计数的消息，未读数 + 1
        if (isCounted) {
            localConversation.unreadMessageCount = unreadMessageCount + 1;
            localConversation.lastUnreadTime = sentTime;
            hasChanged = true;
        }
        // 测回的消息 且 符合撤回消息内容格式（ 撤回消息 content: {conversationType, targetId, messageUId, sentTime} ）
        if (isRecall && hasContent) {
            const isNotRead = lastUnreadTime >= content.sentTime;
            if (isNotRead && unreadMessageCount) {
                localConversation.unreadMessageCount = unreadMessageCount - 1;
                hasChanged = true;
            }
        }
        return { hasChanged, localConversation };
    }
    /**
     * 根据消息计算本地 localConversation 是否需要更新 和 更新的 mentionedInfo
    */
    _calcMentionedInfo(message, localConversation) {
        const { content, messageDirection, isMentioned } = message;
        const isSelfSend = messageDirection === MessageDirection$1.SEND;
        const hasContent = isObject(content);
        let hasChanged = false;
        if (isMentioned && hasContent && content.mentionedInfo) {
            localConversation.hasMentioned = true;
            localConversation.mentionedInfo = content.mentionedInfo;
            hasChanged = true;
        }
        return { hasChanged, localConversation };
    }
    /**
     * 更新内存中 updatedConversation 字段
    */
    _setUpdatedConversation(updatedConOptions) {
        if (isObject(updatedConOptions)) {
            const { conversationType, targetId } = updatedConOptions;
            const key = `${conversationType}_${targetId}`;
            const cacheConversation = this._store.get(conversationType, targetId) || {};
            this._updatedConversations[key] = Object.assign(cacheConversation, updatedConOptions);
        }
    }
    addStatus(statusItem, isLastPull) {
        const { conversationType, targetId, updatedTime, notificationStatus, isTop } = statusItem;
        const updatedItems = {};
        if (!isUndefined(notificationStatus)) {
            updatedItems.notificationStatus = { time: updatedTime, val: notificationStatus };
        }
        if (!isUndefined(isTop)) {
            updatedItems.isTop = { time: updatedTime, val: isTop };
        }
        this._store.set(conversationType, targetId, {
            notificationStatus,
            isTop
        });
        this._setUpdatedConversation({
            conversationType,
            targetId,
            updatedItems
        });
        if (isLastPull) {
            this._notifyConversationChanged();
        }
    }
    /**
     * 通知会话更新
     * @description
     * 通知的条件: 会话状态变化、会话未读数变化（未读数增加、未读数清空）、会话 @ 信息（hasMentioned、mentionedInfo）、？会话最后一条消息
    */
    _notifyConversationChanged() {
        const list = [];
        for (const key in this._updatedConversations) {
            list.push(this._updatedConversations[key]);
        }
        this._eventEmitter.emit(EventName$1.CHANGED, list);
        this._updatedConversations = {};
    }
    /**
     * 根据消息向 localstorage 设置会话未读数、会话 @ 信息（ hasMentioned、MentionedInfo ）、会话状态（ 置顶、免打扰 ）
     * @description
     * 调用时机：1、收到消息后 2、发消息成功后 3、发送撤回消息成功后
    */
    setConversationCacheByMessage(message, isPullMessageFinished) {
        // 若不是存储会话的类型(比如: 聊天室类型), 则不作处理
        const { conversationType, isPersited, targetId } = message;
        const isSaveConversationType = saveConversationType.indexOf(conversationType) >= 0;
        if (!isSaveConversationType) {
            return;
        }
        let hasChanged = false;
        let storageConversation = this._store.get(conversationType, targetId);
        // 计算本地存储
        const CalcEvents = [this._calcUnreadCount, this._calcMentionedInfo];
        CalcEvents.forEach((func) => {
            const { hasChanged: hasCaclChanged, localConversation } = func.call(this, message, storageConversation);
            hasChanged = hasChanged || hasCaclChanged;
            storageConversation = localConversation;
        });
        if (hasChanged) {
            this._store.set(conversationType, targetId, storageConversation);
        }
        this._store.updateMentionedData(message);
        // 写入会话缓存中
        if (isPersited) {
            const conversation = this._store.get(conversationType, targetId);
            conversation.updatedItems = {
                latestMessage: {
                    time: message.sentTime,
                    val: message
                }
            };
            conversation.latestMessage = message;
            const updateConOptions = Object.assign(conversation, { conversationType, targetId });
            this._setUpdatedConversation(updateConOptions);
        }
        // 是否需要通知， 通知 API Context 本地会话变更
        if (isPullMessageFinished) {
            this._notifyConversationChanged();
        }
    }
    /**
     * 获取会话本地存储信息
    */
    get(conversationType, targetId) {
        return this._store.get(conversationType, targetId);
    }
    /**
     * 获取本地会话所有未读数
    */
    getAllUnreadCount() {
        const conversationList = this._store.getValue();
        let totalCount = 0;
        conversationList.forEach(({ unreadMessageCount }) => {
            unreadMessageCount = unreadMessageCount || 0;
            totalCount += Number(unreadMessageCount);
        });
        return totalCount;
    }
    /**
     * 获取本地指定会话未读数
    */
    getUnreadCount(conversationType, targetId) {
        const conversation = this._store.get(conversationType, targetId);
        return conversation.unreadMessageCount || 0;
    }
    /**
     * 清除本地指定会话未读数
    */
    clearUnreadCount(conversationType, targetId) {
        const conversation = this._store.get(conversationType, targetId);
        const { unreadMessageCount, hasMentioned } = conversation;
        if (unreadMessageCount || hasMentioned) {
            conversation.unreadMessageCount = 0;
            conversation.hasMentioned = false;
            // conversation.mentionedInfo = null
        }
        this._store.set(conversationType, targetId, conversation);
        const updateConOptions = Object.assign(conversation, { conversationType, targetId });
        this._setUpdatedConversation(updateConOptions);
        this._notifyConversationChanged();
    }
    startPullConversationStatus(time) {
        this._statusManager.pull(time);
    }
    /**
     * 设置会话消息草稿
    */
    setDraft(conversationType, targetId, draft) {
        const key = `${conversationType}_${targetId}`;
        this._draftMap[key] = draft;
    }
    /**
     * 获取会话消息草稿
    */
    getDraft(conversationType, targetId) {
        const key = `${conversationType}_${targetId}`;
        return this._draftMap[key];
    }
    /**
     * 删除会话消息草稿
    */
    clearDraft(conversationType, targetId) {
        const key = `${conversationType}_${targetId}`;
        delete this._draftMap[key];
    }
}

const getPubTopic = (type) => {
    return {
        [ConversationType$1.PRIVATE]: Topic$1.ppMsgP,
        [ConversationType$1.GROUP]: Topic$1.pgMsgP,
        [ConversationType$1.CHATROOM]: Topic$1.chatMsg,
        [ConversationType$1.CUSTOMER_SERVICE]: Topic$1.pcMsgP,
        [ConversationType$1.RTC_ROOM]: Topic$1.prMsgS
    }[type];
};
const getStatPubTopic = (type) => {
    return {
        [ConversationType$1.PRIVATE]: Topic$1.ppMsgS,
        [ConversationType$1.GROUP]: Topic$1.pgMsgS
    }[type];
};
const transSentAttrs2IReceivedMessage = (conversationType, targetId, options, messageUId, sentTime, senderUserId) => {
    return {
        conversationType,
        targetId,
        senderUserId,
        messageDirection: MessageDirection$1.SEND,
        isCounted: !!options.isCounted,
        isMentioned: !!options.isMentioned,
        content: options.content,
        messageType: options.messageType,
        isOffLineMessage: false,
        isPersited: !!options.isPersited,
        messageUId,
        sentTime,
        receivedTime: 0,
        disableNotification: !!options.disableNotification,
        isStatusMessage: !!options.isStatusMessage,
        canIncludeExpansion: !!options.canIncludeExpansion,
        expansion: options.canIncludeExpansion ? options.expansion : null,
        receivedStatus: ReceivedStatus$1.UNREAD // 发送消息成功返回的 接收状态默认为 未读
    };
};
class JSEngine extends AEngine {
    constructor(runtime, appkey, watcher, apiVersion) {
        super(runtime, appkey, watcher, apiVersion);
        this._customMessageType = {};
        /**
         * 拉取离线消息标记
         */
        this._pullingMsg = false;
        /**
         * 收到的所有消息拉取通知事件戳队列
         */
        this._pullQueue = [];
        /**
         * 聊天室消息拉取通知队列
         */
        this._chrmsQueue = {};
        // 初始化信箱
        this._letterbox = new Letterbox(runtime, appkey);
        // 初始化 Chrm KV 处理
        this._chrmEntryHandler = new ChrmEntryHandler(this);
    }
    connect(token, naviInfo, connectType) {
        return __awaiter(this, void 0, void 0, function* () {
            const hosts = [];
            this._naviInfo = naviInfo;
            if (naviInfo.server) {
                hosts.push(naviInfo.server);
            }
            else {
                // 私有云无法保证客户环境 Navi 配置有效性
                logger.warn('navi.server is invalid');
            }
            const backupServer = naviInfo.backupServer;
            // 备用服务有效性验证与排重
            backupServer && backupServer.split(',').forEach(host => {
                if (hosts.indexOf(host) < 0) {
                    hosts.push(host);
                }
            });
            if (hosts.length === 0) {
                logger.error('navi invaild.', hosts);
                return ErrorCode$1.UNKNOWN;
            }
            // 创建数据通道
            const channel = this.runtime.createDataChannel({
                status: (status) => {
                    this._connectionStatusHandler(status, token, hosts, naviInfo.protocol);
                },
                signal: this._signalHandler.bind(this)
            }, connectType);
            // 建立连接
            const code = yield channel.connect(this._appkey, token, hosts, naviInfo.protocol, this._apiVersion);
            if (code === ErrorCode$1.SUCCESS) {
                this._channel = channel;
                this.currentUserId = channel.userId;
                this.connectedTime = channel.connectedTime;
                this._conversationManager = new ConversationManager(this, this._appkey, this.currentUserId, this._watcher.conversation);
                this._conversationManager.startPullConversationStatus(0);
                // 初始化加入 chrm 的信息
                this._joinedChrmManager = new JoinedChrmManager(this.runtime, this._appkey, this.currentUserId, naviInfo.joinMChrm);
                // 拉取离线消息
                this._syncMsg();
            }
            else {
                channel.close();
            }
            return code;
        });
    }
    _connectionStatusHandler(status, token, hosts, protocol) {
        logger.warn('connection status changed:', status);
        if (status === ConnectionStatus$1.CONNECTING || status === ConnectionStatus$1.CONNECTED) {
            this._watcher.status(status);
            return;
        }
        if (!this._channel || status === ConnectionStatus$1.DISCONNECTED) {
            // 用户主动断开连接，直接抛出连接状态
            this._watcher.status(status);
            return;
        }
        if (status === ConnectionStatus$1.BLOCKED || status === ConnectionStatus$1.KICKED_OFFLINE_BY_OTHER_CLIENT) {
            // 用户被封禁，或多端被踢下线，需主动断开 websocket 连接
            this.disconnect();
            this._watcher.status(status);
            return;
        }
        // 异常断开，尝试重连
        this._try2Reconnect(token, hosts, protocol);
    }
    _try2Reconnect(token, hosts, protocol) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return;
            }
            const code = yield this._channel.connect(this._appkey, token, hosts, protocol, this._apiVersion);
            if (code === ErrorCode$1.SUCCESS) {
                this._rejoinChrm();
                return;
            }
            this._watcher.status(ConnectionStatus$1.WEBSOCKET_UNAVAILABLE);
            // 等待 5s 后重新尝试
            setTimeout(() => {
                this._try2Reconnect(token, hosts, protocol);
            }, 5000);
        });
    }
    _signalHandler(signal, ack) {
        const { syncMsg, topic } = signal;
        if (syncMsg) {
            // 此消息为本人其他端发出的消息，此处为多端消息同步
            this._receiveSyncMsg(signal, ack);
            return;
        }
        const tmpTopic = Topic$1[topic];
        if (!tmpTopic) {
            logger.error('unknown topic:', topic);
            return;
        }
        switch (tmpTopic) {
            case Topic$1.s_ntf:
                this._pullMsg(signal); // 通知拉取
                break;
            case Topic$1.s_msg:
                this._receiveMsg(signal); // 接收直发消息
                break;
            case Topic$1.s_cmd:
                this._receiveStateNotify(signal);
                break;
            case Topic$1.s_us:
                this._receiveSettingNotify(signal);
                break;
        }
    }
    /**
     * 接收聊天室 kv 通知与会话状态变更通知
     * @param signal
     */
    _receiveStateNotify(signal) {
        var _a;
        const { time, type, chrmId } = (_a = this._channel) === null || _a === void 0 ? void 0 : _a.codec.decodeByPBName(signal.data, PBName.NotifyMsg);
        switch (type) {
            case 2:
                logger.warn('server notify chrm:', chrmId, time);
                this._chrmEntryHandler.pullEntry(chrmId, time);
                break;
            case 3:
                this._conversationManager.startPullConversationStatus(time);
                break;
        }
    }
    /**
     * 接收实时配置变更通知
     * @param signal
     */
    _receiveSettingNotify(signal) {
        // 持续迭代中，注释防止 comet 报错
        // const notice = this._channel?.codec.decodeByPBName(signal.data, PBName.UserSettingNotification)
        // logger.error('TODO: 接收用户级配置变更通知', notice)
    }
    /**
     * 通知 API Content 扩展变更
    */
    _receiveMessageExpansion(message) {
        const { content } = message;
        const { put, del, mid } = content;
        if (put) {
            this._watcher.expansion({
                updatedExpansion: {
                    messageUId: mid,
                    expansion: put
                }
            });
        }
        if (del) {
            this._watcher.expansion({
                deletedExpansion: {
                    messageUId: mid,
                    deletedKeys: del
                }
            });
        }
    }
    /**
     * 接收多端同步消息
     * @param signal
     * @param ack 同步消息的 ack 信令数据，comet 连接无此数据
     */
    _receiveSyncMsg(signal, ack) {
        var _a;
        let msg = (_a = this._channel) === null || _a === void 0 ? void 0 : _a.codec.decodeByPBName(signal.data, PBName.UpStreamMessage, {
            currentUserId: this.currentUserId, signal
        });
        msg = this._handleMsgProperties(msg);
        // 更新消息并通知业务层
        msg.sentTime = ack.timestamp;
        msg.messageUId = ack.messageUId;
        // 当前正在拉取消息过程中，不需要同步直发消息到业务层，向拉取队列中重新添加一个时间戳等待当前拉取动作完成后递归拉取
        if (this._pullingMsg) {
            this._pullQueue.push(ack.timestamp);
            return;
        }
        // 更新发件箱时间
        this._letterbox.setOutboxTime(ack.timestamp, this.currentUserId);
        if (msg.messageType === MessageType$1.EXPANSION_NOTIFY) {
            this._receiveMessageExpansion(msg);
            return;
        }
        this._watcher.message(msg);
        this._conversationManager.setConversationCacheByMessage(msg, true);
    }
    /**
     * 拉取消息
     * @description 聊天室消息与普通消息都是通知拉取
     * @param signal
     */
    _pullMsg(signal) {
        if (!this._channel) {
            return;
        }
        const { type, chrmId, time } = this._channel.codec.decodeByPBName(signal.data, PBName.NotifyMsg);
        if (type === 2) {
            const info = this._chrmsQueue[chrmId];
            info.queue.push(time);
            this._pullChrmMsg(chrmId);
        }
        else {
            // 记录消息拉取通知的时间戳
            this._pullQueue.push(time);
            this._syncMsg();
        }
    }
    /**
     * 拉取消息：离线 Or 通知拉取
     */
    _syncMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            // 拉取中，队列等待
            if (this._pullingMsg) {
                return;
            }
            if (!this._channel) {
                // 连接中断，无需拉取离线消息
                this._pullingMsg = false;
                return;
            }
            this._pullingMsg = true;
            // 获取消息时间戳
            const outboxTime = this._letterbox.getOutboxTime(this.currentUserId);
            const inboxTime = this._letterbox.getInboxTime(this.currentUserId);
            logger.warn('outboxTime', outboxTime);
            logger.warn('inboxTime', inboxTime);
            const reqBody = this._channel.codec.encodeSyncMsg({ sendboxTime: outboxTime, inboxTime });
            const writer = new QueryWriter(Topic$1[Topic$1.pullMsg], reqBody, this.currentUserId);
            const { code, data } = yield this._channel.send(writer, PBName.DownStreamMessages, {
                connectedTime: this._channel.connectedTime,
                currentUserId: this.currentUserId
            });
            if (code !== ErrorCode$1.SUCCESS || !data) {
                logger.warn('Pull msg failed, code:', code, ', data: ', data);
                this._pullingMsg = false;
                return;
            }
            const { list, finished, syncTime } = data;
            let newOutboxTime = 0;
            // let newInboxTime = 0
            // 派发消息
            list.forEach(item => {
                if (item.messageDirection === MessageDirection$1.SEND) {
                    newOutboxTime = Math.max(item.sentTime, newOutboxTime);
                }
                // else {
                //   newInboxTime = Math.max(item.sentTime, newInboxTime)
                // }
                if (item.messageType === MessageType$1.EXPANSION_NOTIFY) {
                    this._receiveMessageExpansion(item);
                    return;
                }
                this._watcher.message(item);
                this._conversationManager.setConversationCacheByMessage(item, true);
            });
            // 更新收件箱时间
            // this.letterbox.setInboxTime(newInboxTime, this.currentUserId)
            this._letterbox.setInboxTime(syncTime, this.currentUserId);
            // 更新发件箱时间
            this._letterbox.setOutboxTime(newOutboxTime, this.currentUserId);
            this._pullingMsg = false;
            // 清除较 syncTime 更早的拉取通知时间戳
            const tmpPullQueue = this._pullQueue.filter(timestamp => timestamp > syncTime);
            this._pullQueue.length = 0;
            this._pullQueue.push(...tmpPullQueue);
            if (!finished || tmpPullQueue.length > 0) {
                // 继续拉取
                this._syncMsg();
            }
        });
    }
    /**
     * 接收直发消息
     * @description 直发消息只有单聊、群聊存在，其他会话类型均为通知拉取
     * @param signal
     */
    _receiveMsg(signal) {
        if (!this._channel) {
            return;
        }
        let msg = this._channel.codec.decodeByPBName(signal.data, PBName.DownStreamMessage, {
            currentUserId: this.currentUserId, connectedTime: this._channel.connectedTime
        });
        msg = this._handleMsgProperties(msg);
        // 当在拉取单群聊离线过程中，直发消息可直接抛弃
        if (this._pullingMsg) {
            return;
        }
        // 更新收件箱时间
        this._letterbox.setInboxTime(msg.sentTime, this.currentUserId);
        if (msg.messageType === MessageType$1.EXPANSION_NOTIFY) {
            this._receiveMessageExpansion(msg);
            return;
        }
        this._watcher.message(msg);
        this._conversationManager.setConversationCacheByMessage(msg, true);
    }
    /**
     * 向 API Context 抛出消息时，处理消息的部分属性值
     * @description
     * 当前仅根据内置消息或自定义类型的消息处理消息的存储、计数属性
    */
    _handleMsgProperties(msgOptions, isSendMsg = false) {
        const { messageType, isCounted, isPersited, isStatusMessage } = msgOptions;
        let options;
        const inRCMessageType = messageType in SEND_MESSAGE_TYPE_OPTION;
        const inCustomMessageType = messageType in this._customMessageType;
        if (inRCMessageType) { // 内置消息
            options = SEND_MESSAGE_TYPE_OPTION[messageType];
        }
        else if (inCustomMessageType) { // 自定义消息
            options = this._customMessageType[messageType];
        }
        else { // 其他消息, 发消息已传参为准, 无参数默认 false. 收消息已服务端微赚
            options = {
                isCounted: isNull(isCounted) ? false : isCounted,
                isPersited: isNull(isPersited) ? false : isPersited
            };
        }
        Object.assign(msgOptions, {
            isCounted: options.isCounted,
            isPersited: options.isPersited,
            isStatusMessage: !(msgOptions.isCounted && msgOptions.isPersited)
        });
        isSendMsg && (msgOptions.isStatusMessage = isStatusMessage);
        return msgOptions;
    }
    getConnectTime() {
        if (this._channel) {
            return Promise.resolve({
                code: ErrorCode$1.SUCCESS,
                data: this._channel.connectedTime
            });
        }
        return Promise.resolve({ code: ErrorCode$1.RC_NET_CHANNEL_INVALID });
    }
    getHistoryMessage(conversationType, targetId, timestamp, count, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const { currentUserId, _channel: channel } = this;
            const hisTopic = ConversationTypeToQueryHistoryTopic[conversationType] || QueryHistoryTopic.PRIVATE;
            if (channel) {
                const data = channel.codec.encodeGetHistoryMsg(targetId, { timestamp, count, order });
                const resp = yield channel.send(new QueryWriter(hisTopic, data, currentUserId), PBName.HistoryMsgOuput, {
                    currentUserId, connectedTime: channel.connectedTime, conversation: { targetId }
                });
                const { code } = resp;
                if (code !== ErrorCode$1.SUCCESS) {
                    return { code };
                }
                // 解析数据转换为业务层数据结构
                const downstreamData = resp.data;
                return {
                    code,
                    data: { list: downstreamData.list, hasMore: downstreamData.hasMore }
                };
            }
            return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
        });
    }
    deleteRemoteMessage(conversationType, targetId, list) {
        return __awaiter(this, void 0, void 0, function* () {
            const { currentUserId, _channel: channel } = this;
            if (channel) {
                const data = channel.codec.encodeDeleteMessages(conversationType, targetId, list);
                const writer = new QueryWriter(QueryTopic.DELETE_MESSAGES, data, currentUserId);
                const resp = yield channel.send(writer);
                const { code } = resp;
                if (code !== ErrorCode$1.SUCCESS) {
                    return code;
                }
                return code;
            }
            return ErrorCode$1.RC_NET_CHANNEL_INVALID;
        });
    }
    deleteRemoteMessageByTimestamp(conversationType, targetId, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { currentUserId, _channel: channel } = this;
            if (channel) {
                const data = channel.codec.encodeClearMessages(targetId, timestamp);
                const topic = ConversationTypeToClearMessageTopic[conversationType];
                const writer = new QueryWriter(topic, data, currentUserId);
                const resp = yield channel.send(writer);
                const { code } = resp;
                if (code !== ErrorCode$1.SUCCESS) {
                    return code;
                }
                return code;
            }
            return ErrorCode$1.RC_NET_CHANNEL_INVALID;
        });
    }
    getConversationList(count = 300, conversationType, startTime, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const { currentUserId, _channel: channel } = this;
            conversationType = conversationType || ConversationType$1.PRIVATE;
            if (channel) {
                const buff = channel.codec.encodeOldConversationList({ count, type: conversationType, startTime, order });
                const writer = new QueryWriter(QueryTopic.GET_OLD_CONVERSATION_LIST, buff, currentUserId);
                const resp = yield channel.send(writer, PBName.RelationsOutput, {
                    currentUserId,
                    connectedTime: channel.connectedTime,
                    afterDecode: (conversation) => {
                        const { conversationType, targetId } = conversation;
                        const localConversation = this._conversationManager.get(conversationType, targetId);
                        // 将本地存储的会话属性和从 Server 获取到的会话属性进行合并
                        Object.assign(conversation, localConversation);
                        return conversation;
                    }
                });
                logger.info('GetConversationList =>', resp);
                const { code, data } = resp;
                if (code !== ErrorCode$1.SUCCESS) {
                    return { code };
                }
                return {
                    code,
                    data: data
                };
            }
            return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
        });
    }
    removeConversation(conversationType, targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel } = this;
            if (channel) {
                const data = channel.codec.encodeOldConversationList({ type: conversationType });
                const writer = new QueryWriter(QueryTopic.REMOVE_OLD_CONVERSATION, data, targetId);
                const resp = yield channel.send(writer);
                logger.info('RemoveConversation =>', resp);
                const { code } = resp;
                if (code !== ErrorCode$1.SUCCESS) {
                    return code;
                }
                return code;
            }
            return ErrorCode$1.RC_NET_CHANNEL_INVALID;
        });
    }
    getConversation(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    getAllConversationUnreadCount() {
        const allUnreadCount = this._conversationManager.getAllUnreadCount();
        return Promise.resolve({
            code: ErrorCode$1.SUCCESS,
            data: allUnreadCount
        });
    }
    getConversationUnreadCount(conversationType, targetId) {
        const unreadCount = this._conversationManager.getUnreadCount(conversationType, targetId);
        return Promise.resolve({
            code: ErrorCode$1.SUCCESS,
            data: unreadCount
        });
    }
    clearConversationUnreadCount(conversationType, targetId) {
        this._conversationManager.clearUnreadCount(conversationType, targetId);
        return Promise.resolve(ErrorCode$1.SUCCESS);
    }
    saveConversationMessageDraft(conversationType, targetId, draft) {
        this._conversationManager.setDraft(conversationType, targetId, draft);
        return Promise.resolve(ErrorCode$1.SUCCESS);
    }
    getConversationMessageDraft(conversationType, targetId) {
        const draft = this._conversationManager.getDraft(conversationType, targetId);
        return Promise.resolve({
            code: ErrorCode$1.SUCCESS,
            data: draft
        });
    }
    clearConversationMessageDraft(conversationType, targetId) {
        this._conversationManager.clearDraft(conversationType, targetId);
        return Promise.resolve(ErrorCode$1.SUCCESS);
    }
    pullConversationStatus(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel, currentUserId } = this;
            if (channel) {
                const buff = channel.codec.encodeGetConversationStatus(timestamp);
                const writer = new QueryWriter(Topic$1[Topic$1.pullSeAtts], buff, currentUserId);
                const resp = yield channel.send(writer, PBName.SessionStates);
                const { code, data } = resp;
                if (code !== ErrorCode$1.SUCCESS) {
                    return { code };
                }
                return { code, data: data };
            }
            return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
        });
    }
    batchSetConversationStatus(statusList) {
        return __awaiter(this, void 0, void 0, function* () {
            const { currentUserId, _channel: channel } = this;
            if (channel) {
                const buff = channel.codec.encodeSetConversationStatus(statusList);
                const writer = new QueryWriter(QueryTopic.SET_CONVERSATION_STATUS, buff, currentUserId);
                const resp = yield channel.send(writer, PBName.SessionStateModifyResp);
                const { code, data } = resp;
                if (code === ErrorCode$1.SUCCESS) {
                    const versionData = data;
                    statusList.forEach((item) => {
                        this._conversationManager.addStatus(Object.assign(Object.assign({}, item), { updatedTime: versionData.version }), true);
                    });
                    return code;
                }
                return code;
            }
            return ErrorCode$1.RC_NET_CHANNEL_INVALID;
        });
    }
    _joinChrm(chrmId, count, isJoinExist) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel } = this;
            if (!channel)
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            const buff = channel.codec.encodeJoinOrQuitChatRoom();
            const topic = isJoinExist ? QueryTopic.JOIN_EXIST_CHATROOM : QueryTopic.JOIN_CHATROOM;
            const writer = new QueryWriter(topic, buff, chrmId);
            const { code, data } = yield channel.send(writer);
            // 加入聊天室成功后，需要拉取聊天室最近消息, 并抛给消息监听器
            if (code === ErrorCode$1.SUCCESS) {
                const info = this._chrmsQueue[chrmId];
                // 断线重连情况下，重复加房间不能重置消息拉取信息
                if (!info) {
                    this._chrmsQueue[chrmId] = { pulling: false, queue: [], timestamp: 0 };
                }
                this._pullChrmMsg(chrmId, count);
                // 如果开通聊天室 KV 存储服务, 加入成功后拉取聊天室 KV 存储
                const { kvStorage: isOpenKVService } = this._naviInfo;
                if (isOpenKVService) {
                    this._chrmEntryHandler.pullEntry(chrmId, 0);
                }
                // sessionStorage 存储加入房间的信息
                this._joinedChrmManager.set(chrmId, count);
            }
            return code;
        });
    }
    /**
     * 断网重连成功后，从 sessionStorage 缓存中获取用户已加入的聊天室，然后重新加入已存在的聊天室，并拉取消息
    */
    _rejoinChrm() {
        return __awaiter(this, void 0, void 0, function* () {
            const joinedChrms = this._joinedChrmManager.get();
            for (const chrmId in joinedChrms) {
                const code = yield this._joinChrm(chrmId, joinedChrms[chrmId], true);
                if (code === ErrorCode$1.SUCCESS) {
                    this._watcher.chatroom({
                        rejoinedRoom: {
                            chatroomId: chrmId,
                            count: joinedChrms[chrmId]
                        }
                    });
                }
                else {
                    this._watcher.chatroom({
                        rejoinedRoom: {
                            chatroomId: chrmId,
                            errorCode: code
                        }
                    });
                }
            }
        });
    }
    /**
     * 拉取聊天室消息
     * @param chrmId
     * @param count 默认拉取 10 条，最大一次拉取 50 条，只在加入房间时第一次拉取时有效
     */
    _pullChrmMsg(chrmId, count = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return;
            }
            const chrmInfo = this._chrmsQueue[chrmId];
            const { pulling, timestamp } = chrmInfo;
            if (pulling) {
                return;
            }
            const reqBody = this._channel.codec.encodeChrmSyncMsg(timestamp, count);
            const signal = new QueryWriter(Topic$1[Topic$1.chrmPull], reqBody, chrmId);
            const { code, data } = yield this._channel.send(signal, PBName.DownStreamMessages, {
                connectedTime: this._channel.connectedTime,
                currentUserId: this.currentUserId
            });
            if (code !== ErrorCode$1.SUCCESS || !data) {
                logger.warn('pull chatroom msg failed, code:', code, ', data:', data);
                return;
            }
            const { list, syncTime, finished } = data;
            chrmInfo.timestamp = syncTime;
            chrmInfo.pulling = false;
            // 清除无效时间戳
            chrmInfo.queue = chrmInfo.queue.filter(item => item > timestamp);
            // 派发消息
            list.forEach(item => {
                if (item.sentTime < timestamp) {
                    return;
                }
                this._watcher.message(item);
            });
            if (!finished || chrmInfo.queue.length > 0) {
                this._pullChrmMsg(chrmId);
            }
        });
    }
    joinChatroom(chatroomId, count) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._joinChrm(chatroomId, count, false);
        });
    }
    joinExistChatroom(chatroomId, count) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._joinChrm(chatroomId, count, true);
        });
    }
    quitChatroom(chrmId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel } = this;
            if (!channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const buff = channel.codec.encodeJoinOrQuitChatRoom();
            const writer = new QueryWriter(QueryTopic.QUIT_CHATROOM, buff, chrmId);
            const resp = yield channel.send(writer);
            const { code } = resp;
            if (code === ErrorCode$1.SUCCESS) {
                delete this._chrmsQueue[chrmId];
                this._chrmEntryHandler.reset(chrmId);
                // 移除加入聊天室存储信息
                this._joinedChrmManager.remove(chrmId);
            }
            return code;
        });
    }
    getChatroomInfo(chatroomId, count, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel } = this;
            if (!channel)
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            const buff = channel.codec.encodeGetChatRoomInfo(count, order);
            const writer = new QueryWriter(Topic$1[Topic$1.queryChrmI], buff, chatroomId);
            const resp = yield channel.send(writer, PBName.QueryChatRoomInfoOutput);
            const { code, data } = resp;
            if (code !== ErrorCode$1.SUCCESS)
                return { code };
            return { code, data: data };
        });
    }
    getChatroomHistoryMessages(chatroomId, timestamp, count, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel } = this;
            if (!channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const buff = channel.codec.encodeGetHistoryMsg(chatroomId, { timestamp, count, order });
            const writer = new QueryWriter(QueryHistoryTopic.CHATROOM, buff, chatroomId);
            const resp = yield channel.send(writer, PBName.HistoryMsgOuput, {
                conversation: { targetId: chatroomId }
            });
            const { code } = resp;
            const data = resp.data;
            if (code !== ErrorCode$1.SUCCESS)
                return { code };
            return { code, data: { list: data.list, hasMore: data.hasMore } };
        });
    }
    _modifyChatroomKV(chatroomId, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel, currentUserId } = this;
            if (!channel)
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            const buff = channel.codec.encodeModifyChatRoomKV(chatroomId, entry, currentUserId);
            const topic = entry.type === ChatroomEntryType$1.UPDATE ? QueryTopic.UPDATE_CHATROOM_KV : QueryTopic.DELETE_CHATROOM_KV;
            const writer = new QueryWriter(topic, buff, chatroomId);
            const resp = yield channel.send(writer);
            const { code } = resp;
            if (code === ErrorCode$1.SUCCESS) {
                this._chrmEntryHandler.setLocal(chatroomId, {
                    kvEntries: [entry],
                    syncTime: new Date().getTime()
                }, currentUserId);
                return code;
            }
            return code;
        });
    }
    setChatroomEntry(chatroomId, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            entry.type = ChatroomEntryType$1.UPDATE;
            return this._modifyChatroomKV(chatroomId, entry);
        });
    }
    forceSetChatroomEntry(chatroomId, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            entry.type = ChatroomEntryType$1.UPDATE;
            entry.isOverwrite = true;
            return this._modifyChatroomKV(chatroomId, entry);
        });
    }
    removeChatroomEntry(chatroomId, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            entry.type = ChatroomEntryType$1.DELETE;
            return this._modifyChatroomKV(chatroomId, entry);
        });
    }
    forceRemoveChatroomEntry(chatroomId, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            entry.type = ChatroomEntryType$1.DELETE;
            entry.isOverwrite = true;
            return this._modifyChatroomKV(chatroomId, entry);
        });
    }
    getChatroomEntry(chatroomId, key) {
        // 1、判断用户是否在聊天室，不在抛出 不在聊天室 错误码 2、从本地获取 key value 属性
        const entry = this._chrmEntryHandler.getValue(chatroomId, key);
        if (entry) {
            return Promise.resolve({
                code: ErrorCode$1.SUCCESS,
                data: entry
            });
        }
        else {
            return Promise.resolve({
                code: ErrorCode$1.CHATROOM_KEY_NOT_EXIST
            });
        }
    }
    getAllChatroomEntry(chatroomId) {
        // 1、判断用户是否在聊天室，不在抛出 不在聊天室 错误码 2、从本地获取 key value 属性
        const entries = this._chrmEntryHandler.getAll(chatroomId);
        return Promise.resolve({
            code: ErrorCode$1.SUCCESS,
            data: entries
        });
    }
    /**
     * 拉取聊天室 KV 存储
     * @param chatroomId
     * @param timestamp
    */
    pullChatroomEntry(chatroomId, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _channel: channel, currentUserId } = this;
            if (!channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const buff = channel.codec.encodePullChatRoomKV(timestamp);
            const writer = new QueryWriter(Topic$1[Topic$1.pullKV], buff, chatroomId);
            const resp = yield channel.send(writer, PBName.ChrmKVOutput);
            const { code, data } = resp;
            if (code === ErrorCode$1.SUCCESS) {
                // 拉取完成后，向本地缓存 kv
                this._chrmEntryHandler.setLocal(chatroomId, data, currentUserId);
                // 拉取完成后, 如果有拉取到更新的 entry 通知聊天室 KV 监听器
                const { kvEntries } = data;
                const updatedEntries = [];
                if (kvEntries.length > 0) {
                    kvEntries.forEach(entry => {
                        const { key, value, type, timestamp } = entry;
                        updatedEntries.push({
                            key,
                            value: value,
                            type: type,
                            timestamp: timestamp,
                            chatroomId
                        });
                    });
                    this._watcher.chatroom({ updatedEntries });
                }
                return {
                    code,
                    data: data
                };
            }
            return { code };
        });
    }
    /**
     * 消息发送
     * @param conversationType
     * @param targetId
     * @param options
     */
    sendMessage(conversationType, targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            options = this._handleMsgProperties(options, true);
            // 检查是否为状态消息，状态消息只在单聊、群聊类型会话中有效
            const isStatusMessage = [
                ConversationType$1.PRIVATE, ConversationType$1.GROUP
            ].includes(conversationType) ? options.isStatusMessage : false;
            const topic = isStatusMessage ? getStatPubTopic(conversationType) : (getPubTopic(conversationType) || Topic$1.ppMsgP);
            const data = this._channel.codec.encodeUpMsg({ type: conversationType, targetId }, options);
            const signal = new PublishWriter(Topic$1[topic], data, targetId);
            signal.setHeaderQos(QOS.AT_LEAST_ONCE);
            // 状态消息无 Ack 应答
            if (isStatusMessage) {
                this._channel.sendOnly(signal);
                return {
                    code: ErrorCode$1.SUCCESS,
                    data: transSentAttrs2IReceivedMessage(conversationType, targetId, Object.assign({}, options), '', 0, this.currentUserId)
                };
            }
            const { code, data: resp } = yield this._channel.send(signal);
            if (code !== ErrorCode$1.SUCCESS) {
                return { code };
            }
            const pubAck = resp;
            // 更新发件箱时间
            this._letterbox.setOutboxTime(pubAck.timestamp, this.currentUserId);
            // 更新会话监听
            const receivedMessage = transSentAttrs2IReceivedMessage(conversationType, targetId, Object.assign({}, options), pubAck.messageUId, pubAck.timestamp, this.currentUserId);
            this._conversationManager.setConversationCacheByMessage(receivedMessage, true);
            return {
                code: ErrorCode$1.SUCCESS,
                data: receivedMessage
            };
        });
    }
    recallMsg(conversationType, targetId, messageUId, sentTime, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            // user 为发送撤回消息携带的用户信息
            const msg = {
                content: { conversationType, targetId, messageUId, sentTime, user },
                messageType: 'RC:RcCmd'
            };
            const topic = Topic$1[Topic$1.recallMsg];
            const data = this._channel.codec.encodeUpMsg({ type: conversationType, targetId }, msg);
            const signal = new PublishWriter(topic, data, this.currentUserId);
            signal.setHeaderQos(QOS.AT_LEAST_ONCE);
            const { code, data: resp } = yield this._channel.send(signal);
            if (code !== ErrorCode$1.SUCCESS) {
                return { code };
            }
            const pubAck = resp;
            return {
                code: ErrorCode$1.SUCCESS,
                data: transSentAttrs2IReceivedMessage(conversationType, targetId, Object.assign({}, msg), pubAck.messageUId, pubAck.timestamp, this.currentUserId)
            };
        });
    }
    /**
     * 拉取用户配置
     * @todo 需要确定 version 的作用是什么
     * @param version
     */
    pullUserSettings(version) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const buff = this._channel.codec.encodePullUserSetting(version);
            const writer = new QueryWriter(Topic$1[Topic$1.pullUS], buff, this.currentUserId);
            return this._channel.send(writer, PBName.PullUserSettingOutput);
        });
    }
    getFileToken(fileType, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            // 若不设置 fileName 百度上传的认证数据均返回 null
            const uploadFileName = getUploadFileName(fileType, fileName);
            const buff = this._channel.codec.encodeGetFileToken(fileType, uploadFileName);
            const writer = new QueryWriter(Topic$1[Topic$1.qnTkn], buff, this.currentUserId);
            const { code, data } = yield this._channel.send(writer, PBName.GetQNupTokenOutput);
            if (code === ErrorCode$1.SUCCESS) {
                return {
                    code,
                    data: data
                };
            }
            return { code };
        });
    }
    getFileUrl(fileType, fileName, originName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const buff = this._channel.codec.encodeGetFileUrl(fileType, fileName, originName);
            const writer = new QueryWriter(Topic$1[Topic$1.qnUrl], buff, this.currentUserId);
            const { code, data } = yield this._channel.send(writer, PBName.GetQNdownloadUrlOutput);
            const resp = data;
            if (code === ErrorCode$1.SUCCESS) {
                return {
                    code,
                    data: resp
                };
            }
            return { code };
        });
    }
    disconnect() {
        if (this._channel) {
            this._channel.close();
            this._channel = undefined;
        }
    }
    destroy() {
        throw new Error('JSEngine\'s method not implemented.');
    }
    registerMessageType(objectName, isPersited, isCounted, searchProps) {
        // ✔️ 根据 objectName 将自定义消息属性内存态存储 [objectName]: {isPersited, isCounted}
        this._customMessageType[objectName] = { isPersited, isCounted };
        // 根据 messageName searchProps 生成构造消息（ V3 不实现 V2 API 层实现）
        // ✔️ SDK 发消息时，根据内置消息类型或自定义消息类型去处理 存储、计数属性
        // ✔️ SDK 收到消息后，内置消息类型的属性（存储、计数）去处理收到的消息、本地会话未读数存储
    }
    // ===================== RTC 相关接口 =====================
    joinRTCRoom(roomId, mode, broadcastType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const reqBody = this._channel.codec.encodeJoinRTCRoom(mode, broadcastType);
            const writer = new QueryWriter(Topic$1[Topic$1.rtcRJoin_data], reqBody, roomId);
            return this._channel.send(writer, PBName.RtcUserListOutput);
        });
    }
    quitRTCRoom(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeQuitRTCRoom();
            const writer = new QueryWriter(Topic$1[Topic$1.rtcRExit], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    rtcPing(roomId, mode, broadcastType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeJoinRTCRoom(mode, broadcastType);
            const writer = new QueryWriter(Topic$1[Topic$1.rtcPing], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    getRTCRoomInfo(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const reqBody = this._channel.codec.encodeGetRTCRoomInfo();
            const writer = new QueryWriter(Topic$1[Topic$1.rtcRInfo], reqBody, roomId);
            return this._channel.send(writer, PBName.RtcRoomInfoOutput);
        });
    }
    getRTCUserInfoList(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const reqBody = this._channel.codec.encodeGetRTCRoomInfo();
            const writer = new QueryWriter(Topic$1[Topic$1.rtcUData], reqBody, roomId);
            const { code, data } = yield this._channel.send(writer, PBName.RtcUserListOutput);
            return { code, data: data ? { users: data.users } : data };
        });
    }
    // TODO: 排查 rtcUPut 超时无响应问题
    setRTCUserInfo(roomId, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeSetRTCUserInfo(key, value);
            const writer = new QueryWriter(Topic$1[Topic$1.rtcUPut], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    removeRTCUserInfo(roomId, keys) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeRemoveRTCUserInfo(keys);
            const writer = new PublishWriter(Topic$1[Topic$1.rtcUDel], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    setRTCData(roomId, key, value, isInner, apiType, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeSetRTCData(key, value, isInner, apiType, message);
            const writer = new PublishWriter(Topic$1[Topic$1.rtcSetData], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    setRTCTotalRes(roomId, message, valueInfo, objectName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeUserSetRTCData(message, valueInfo, objectName);
            const writer = new PublishWriter(Topic$1[Topic$1.userSetData], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    getRTCData(roomId, keys, isInner, apiType) {
        if (!this._channel) {
            return Promise.resolve({ code: ErrorCode$1.RC_NET_CHANNEL_INVALID });
        }
        const reqBody = this._channel.codec.encodeGetRTCData(keys, isInner, apiType);
        const writer = new QueryWriter(Topic$1[Topic$1.rtcQryData], reqBody, roomId);
        return this._channel.send(writer, PBName.RtcQryOutput);
    }
    removeRTCData(roomId, keys, isInner, apiType, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeRemoveRTCData(keys, isInner, apiType, message);
            const writer = new PublishWriter(Topic$1[Topic$1.rtcDelData], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    setRTCOutData(roomId, rtcData, type, message) {
        // const data = this._serverDataCodec.encodeSetRTCOutData(rtcData, type, message);
        // let writer = new PublishWriter(QUERY_TOPIC.SET_RTC_OUT_DATA, data, roomId);
        // return this._sendSignalForData(writer);
        throw new Error('JSEngine\'s method not implemented.');
    }
    getRTCOutData(roomId, userIds) {
        // const data = this._serverDataCodec.ecnodeGetRTCOutData(userIds);
        // let writer = new QueryWriter(QUERY_TOPIC.GET_RTC_OUT_DATA, data, roomId);
        // return this._sendSignalForData(writer, PBName.RtcUserOutDataOutput);
        throw new Error('JSEngine\'s method not implemented.');
    }
    getRTCToken(roomId, mode, broadcastType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return { code: ErrorCode$1.RC_NET_CHANNEL_INVALID };
            }
            const reqBody = this._channel.codec.encodeJoinRTCRoom(mode, broadcastType);
            const writer = new QueryWriter(Topic$1[Topic$1.rtcToken], reqBody, roomId);
            return this._channel.send(writer, PBName.RtcTokenOutput);
        });
    }
    setRTCState(roomId, report) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._channel) {
                return ErrorCode$1.RC_NET_CHANNEL_INVALID;
            }
            const reqBody = this._channel.codec.encodeSetRTCState(report);
            const writer = new QueryWriter(Topic$1[Topic$1.rtcUserState], reqBody, roomId);
            const { code } = yield this._channel.send(writer);
            return code;
        });
    }
    getRTCUserInfo(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    getRTCUserList(roomId) {
        if (!this._channel) {
            return Promise.resolve({ code: ErrorCode$1.RC_NET_CHANNEL_INVALID });
        }
        const data = this._channel.codec.encodeGetRTCRoomInfo();
        const writer = new QueryWriter(Topic$1[Topic$1.rtcUList], data, roomId);
        return this._channel.send(writer, PBName.RtcUserListOutput);
    }
}

/**
 * 用于对接协议栈的基础引擎桥接类
 */
class CPPEngine extends AEngine {
    constructor(runtime, appkey, watcher, apiVersion, _cppProtocol) {
        super(runtime, appkey, watcher, apiVersion);
        this._cppProtocol = _cppProtocol;
    }
    connect(token, naviInfo) {
        throw new Error('Method not implemented.');
    }
    getConnectTime() {
        throw new Error('Method not implemented.');
    }
    getHistoryMessage(conversationType, targetId, timestamp, count, order) {
        throw new Error('Method not implemented.');
    }
    deleteRemoteMessage(conversationType, targetId, messages) {
        throw new Error('Method not implemented.');
    }
    recallMsg(conversationType, targetId, messageUId, sentTime, user) {
        throw new Error('Method not implemented.');
    }
    deleteRemoteMessageByTimestamp(conversationType, targetId, timestamp) {
        throw new Error('Method not implemented.');
    }
    getConversationList(count, conversationType, startTime, order) {
        throw new Error('Method not implemented.');
    }
    getConversation(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    removeConversation(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    getAllConversationUnreadCount() {
        throw new Error('Method not implemented.');
    }
    getConversationUnreadCount(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    clearConversationUnreadCount(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    saveConversationMessageDraft(conversationType, targetId, draft) {
        throw new Error('Method not implemented.');
    }
    getConversationMessageDraft(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    clearConversationMessageDraft(conversationType, targetId) {
        throw new Error('Method not implemented.');
    }
    pullConversationStatus(timestamp) {
        throw new Error('Method not implemented.');
    }
    batchSetConversationStatus(statusList) {
        throw new Error('Method not implemented.');
    }
    sendMessage(conversationType, targetId, options) {
        throw new Error('Method not implemented.');
    }
    disconnect() {
        throw new Error('Method not implemented.');
    }
    pullUserSettings(version) {
        throw new Error('Method not implemented.');
    }
    registerMessageType(objectName, isPersited, isCounted, searchProps) {
        throw new Error('Method not implemented.');
    }
    joinChatroom(chatroomId, count) {
        throw new Error('Method not implemented.');
    }
    joinExistChatroom(chatroomId, count) {
        throw new Error('Method not implemented.');
    }
    quitChatroom(chatroomId) {
        throw new Error('Method not implemented.');
    }
    getChatroomInfo(chatroomId, count, order) {
        throw new Error('Method not implemented.');
    }
    getChatroomHistoryMessages(chatroomId, timestamp, count, order) {
        throw new Error('Method not implemented.');
    }
    setChatroomEntry(chatroomId, entry) {
        throw new Error('Method not implemented.');
    }
    forceSetChatroomEntry(chatroomId, entry) {
        throw new Error('Method not implemented.');
    }
    removeChatroomEntry(chatroomId, entry) {
        throw new Error('Method not implemented.');
    }
    forceRemoveChatroomEntry(chatroomId, entry) {
        throw new Error('Method not implemented.');
    }
    getChatroomEntry(chatroomId, key) {
        throw new Error('Method not implemented.');
    }
    getAllChatroomEntry(chatroomId) {
        throw new Error('Method not implemented.');
    }
    getFileToken(fileType, fileName) {
        throw new Error('Method not implemented.');
    }
    getFileUrl(fileType, fileName, originName) {
        throw new Error('Method not implemented.');
    }
    joinRTCRoom(roomId, mode, broadcastType) {
        throw new Error('Method not implemented.');
    }
    quitRTCRoom(roomId) {
        throw new Error('Method not implemented.');
    }
    rtcPing(roomId, mode, broadcastType) {
        throw new Error('Method not implemented.');
    }
    getRTCRoomInfo(roomId) {
        throw new Error('Method not implemented.');
    }
    getRTCUserInfoList(roomId) {
        throw new Error('Method not implemented.');
    }
    getRTCUserInfo(roomId) {
        throw new Error('Method not implemented.');
    }
    setRTCUserInfo(roomId, key, value) {
        throw new Error('Method not implemented.');
    }
    removeRTCUserInfo(roomId, keys) {
        throw new Error('Method not implemented.');
    }
    setRTCData(roomId, key, value, isInner, apiType, message) {
        throw new Error('Method not implemented.');
    }
    setRTCTotalRes(roomId, message, valueInfo, objectName) {
        throw new Error('Method not implemented.');
    }
    getRTCData(roomId, keys, isInner, apiType) {
        throw new Error('Method not implemented.');
    }
    removeRTCData(roomId, keys, isInner, apiType, message) {
        throw new Error('Method not implemented.');
    }
    setRTCOutData(roomId, rtcData, type, message) {
        throw new Error('Method not implemented.');
    }
    getRTCOutData(roomId, userIds) {
        throw new Error('Method not implemented.');
    }
    getRTCToken(roomId, mode, broadcastType) {
        throw new Error('Method not implemented.');
    }
    setRTCState(roomId, reportId) {
        throw new Error('Method not implemented.');
    }
    getRTCUserList(roomId) {
        throw new Error('Method not implemented.');
    }
}

/**
 * 音视频模式
 */
(function (RTCMode) {
    /**
     * 普通音视频模式
     */
    RTCMode[RTCMode["RTC"] = 0] = "RTC";
    /**
     * 直播模式
     */
    RTCMode[RTCMode["LIVE"] = 2] = "LIVE";
})(exports.RTCMode || (exports.RTCMode = {}));
(function (LiveType) {
    /**
     * 音视频直播
     */
    LiveType[LiveType["AUDIO_AND_VIDEO"] = 0] = "AUDIO_AND_VIDEO";
    /**
     * 音频直播
     */
    LiveType[LiveType["AUDIO"] = 1] = "AUDIO";
})(exports.LiveType || (exports.LiveType = {}));
(function (LiveRole) {
    /**
     * 主播身份
     */
    LiveRole[LiveRole["ANCHOR"] = 1] = "ANCHOR";
    /**
     * 观众身份
     */
    LiveRole[LiveRole["AUDIENCE"] = 2] = "AUDIENCE";
})(exports.LiveRole || (exports.LiveRole = {}));
/**
 * CallLib 流程消息
 */
const CallLibMsgType = {
    'RC:VCAccept': 'RC:VCAccept',
    'RC:VCRinging': 'RC:VCRinging',
    'RC:VCSummary': 'RC:VCSummary',
    'RC:VCHangup': 'RC:VCHangup',
    'RC:VCInvite': 'RC:VCInvite',
    'RC:VCModifyMedia': 'RC:VCModifyMedia',
    'RC:VCModifyMem': 'RC:VCModifyMem'
};
(function (RTCApiType) {
    RTCApiType[RTCApiType["ROOM"] = 1] = "ROOM";
    RTCApiType[RTCApiType["PERSON"] = 2] = "PERSON";
})(exports.RTCApiType || (exports.RTCApiType = {}));

class PluginContext {
    constructor(_context) {
        this._context = _context;
    }
    /**
     * 获取 `@rongcloud/engine` 包版本
     */
    getCoreVersion() {
        return this._context.coreVersion;
    }
    /**
     * 获取当前运行中的 IMLib 版本号
     */
    getAPIVersion() {
        return this._context.apiVersion;
    }
    /**
     * 获取当前应用的 appkey
     */
    getAppkey() {
        return this._context.appkey;
    }
    /**
     * 获取当前已连接用户的 userId
     * 用户连接建立之前及 disconnect 之后，该方法返回 '' 值
     */
    getCurrentId() {
        return this._context.getCurrentUserId();
    }
    /**
     * 获取当前连接状态
     */
    getConnectionStatus() {
        return this._context.getConnectionStatus();
    }
    /**
     * 发送消息
     */
    sendMessage(conversationType, targetId, options) {
        return this._context.sendMessage(conversationType, targetId, options);
    }
    /**
     * 消息注册
     * @description 消息注册需在应用初始化完成前进行
     * @param objectName 消息类型，如：RC:TxtMsg
     * @param isPersited 是否存储
     * @param isCounted 是否技术
     * @param searchProps 搜索字段，只在搭配协议栈使用时有效
     */
    registerMessageType(objectName, isPersited, isCounted, searchProps = []) {
        this._context.registerMessageType(objectName, isPersited, isCounted, searchProps);
    }
}

class RTCPluginContext extends PluginContext {
    /**
     * 获取当前的导航数据
     */
    getNaviInfo() {
        return this._context.getInfoFromCache();
    }
    /**
     * 加入 RTC 房间
     * @todo 需确认 `broadcastType` 参数的作用与有效值
     * @param roomId
     * @param mode 房间模式：直播 or 会议
     * @param broadcastType
     */
    joinRTCRoom(roomId, mode, broadcastType) {
        return this._context.joinRTCRoom(roomId, mode, broadcastType);
    }
    quitRTCRoom(roomId) {
        return this._context.quitRTCRoom(roomId);
    }
    rtcPing(roomId, mode, broadcastType) {
        return this._context.rtcPing(roomId, mode, broadcastType);
    }
    getRTCRoomInfo(roomId) {
        return this._context.getRTCRoomInfo(roomId);
    }
    getRTCUserInfoList(roomId) {
        return this._context.getRTCUserInfoList(roomId);
    }
    getRTCUserInfo(roomId) {
        return this._context.getRTCUserInfo(roomId);
    }
    setRTCUserInfo(roomId, key, value) {
        return this._context.setRTCUserInfo(roomId, key, value);
    }
    removeRTCUserInfo(roomId, keys) {
        return this._context.removeRTCUserInfo(roomId, keys);
    }
    setRTCData(roomId, key, value, isInner, apiType, message) {
        return this._context.setRTCData(roomId, key, value, isInner, apiType, message);
    }
    /**
     * @param - roomId
     * @param - message 向前兼容的消息数据，以兼容旧版本 SDK，即增量数据，如：
     * ```
     * JSON.stringify({
     *  name: 'RCRTC:PublishResource',
     *  content: {
     *  }
     * })
     * ```
     * @param - valueInfo 全量资源数据
     * @param - 全量 URI 消息名，即 `RCRTC:TotalContentResources`
     */
    setRTCTotalRes(roomId, 
    /**
     * 向旧版本 RTCLib 兼容的消息数据
     */
    message, valueInfo, objectName) {
        return this._context.setRTCTotalRes(roomId, message, valueInfo, objectName);
    }
    getRTCData(roomId, keys, isInner, apiType) {
        return this._context.getRTCData(roomId, keys, isInner, apiType);
    }
    removeRTCData(roomId, keys, isInner, apiType, message) {
        return this._context.removeRTCData(roomId, keys, isInner, apiType, message);
    }
    setRTCOutData(roomId, rtcData, type, message) {
        return this._context.setRTCOutData(roomId, rtcData, type, message);
    }
    getRTCOutData(roomId, userIds) {
        return this._context.getRTCOutData(roomId, userIds);
    }
    getRTCToken(roomId, mode, broadcastType) {
        return this._context.getRTCToken(roomId, mode, broadcastType);
    }
    setRTCState(roomId, report) {
        return this._context.setRTCState(roomId, report);
    }
    getRTCUserList(roomId) {
        return this._context.getRTCUserList(roomId);
    }
}

function cloneMessage(message) {
    return Object.assign({}, message);
}
class APIContext {
    constructor(_runtime, options) {
        this._runtime = _runtime;
        this._token = '';
        /**
         * 插件队列，用于逐一派发消息与信令
         */
        this._pluginContextQueue = [];
        /**
         * 核心库版本号，后期与 4.0 IM SDK 版本号保持一致
         */
        this.coreVersion = "0.1.0";
        this._connectionStatus = ConnectionStatus$1.DISCONNECTED;
        /**
         * 业务层事件监听器挂载点
         */
        this._watcher = {
            message: undefined,
            conversationState: undefined,
            chatroomState: undefined,
            connectionState: undefined,
            rtcInnerWatcher: undefined,
            expansion: undefined
        };
        this._options = Object.assign({}, options);
        this.appkey = this._options.appkey;
        this.apiVersion = this._options.apiVersion;
        const { isEnterPrise, appkey, miniCMPProxy, apiVersion, connectionType } = this._options;
        // electron 运行时下, cppProtocol 为必填项
        if (_runtime.tag === "electron" && !this._options.cppProtocol) {
            const msg = 'cppProtocol is required';
            logger.error(msg);
            throw new Error(msg);
        }
        /*
         * 私有云 SDK 中 navigators 为必填项
         */
        if (isEnterPrise && this._options.navigators.length === 0) {
            const msg = 'private navigators is required';
            logger.error(msg);
            throw new Error(msg);
        }
        // 过滤无效地址
        this._options.navigators = this._options.navigators.filter(item => /^https?:\/\//.test(item));
        // 有自定义导航的状态下，不再使用内置导航地址
        if (this._options.navigators.length === 0) {
            if (isEnterPrise) {
                const msg = 'navi urls is invalid';
                logger.error(msg);
                throw new Error(msg);
            }
            this._options.navigators.push(...PUBLIC_CLOUD_NAVI_URIS);
        }
        // 初始化 Navi 模块
        this._navi = new Navi(_runtime, appkey, this._options.navigators, miniCMPProxy, apiVersion, connectionType);
        // 初始化引擎监听器，监听连接状态变化、消息变化以及聊天室状态变化
        const engineWatcher = {
            status: this._connectionStatusListener.bind(this),
            message: this._messageReceiver.bind(this),
            chatroom: this._chatroomInfoListener.bind(this),
            conversation: this._conversationInfoListener.bind(this),
            expansion: this._expansionInfoListener.bind(this)
        };
        // 初始化引擎
        this._engine = _runtime.tag === "electron"
            ? new CPPEngine(_runtime, appkey, engineWatcher, apiVersion, this._options.cppProtocol)
            : new JSEngine(_runtime, appkey, engineWatcher, apiVersion);
    }
    static init(runtime, options) {
        logger.debug('APIContext.init =>', options.appkey, options.navigators);
        if (this._context) {
            logger.error('Repeat initialize!');
            return this._context;
        }
        this._context = new APIContext(runtime, options);
        return this._context;
    }
    static destroy() {
        if (this._context) {
            this._context._destroy();
            this._context = undefined;
        }
    }
    /**
     * 安装使用插件，并初始化插件实例
     * @param plugin
     * @param options
     */
    install(plugin, options) {
        const context = plugin.tag === 'RCRTC' ? new RTCPluginContext(this) : new PluginContext(this);
        let pluginClient = null;
        try {
            if (!plugin.verify(this._runtime)) {
                return null;
            }
            pluginClient = plugin.setup(context, this._runtime, options);
        }
        catch (error) {
            logger.error('install plugin error!\n', error);
        }
        pluginClient && this._pluginContextQueue.push(context);
        return pluginClient;
    }
    /**
     * 连接状态变更回调
     * @param message
     */
    _connectionStatusListener(status) {
        var _a;
        this._connectionStatus = status;
        // 通知旧版本 RTCLib、CallLib
        ((_a = this._watcher.rtcInnerWatcher) === null || _a === void 0 ? void 0 : _a.status) && this._watcher.rtcInnerWatcher.status(status);
        // 通知插件连接状态变更
        this._pluginContextQueue.forEach(item => {
            item.onconnectionstatechange && item.onconnectionstatechange(status);
        });
        // 通知应用层连接状态变更
        this._watcher.connectionState && this._watcher.connectionState(status);
    }
    _messageReceiver(message) {
        /**
         * 为兼容非插件化的 RTCLib、CallLib，需预先将
         * conversationType === 12
         * 或
         * RCRTC:AcceptMsg... 等消息分别分发给 RTCLib\CallLib
         */
        if (message.conversationType === ConversationType$1.RTC_ROOM ||
            Object.prototype.hasOwnProperty.call(CallLibMsgType, message.messageType)) {
            /**
             * 分发 RTCLib 或 CallLib 消息，如果未找到 RTCLib 或 CallLib 注册的消息监听，
             * 说明未使用旧版本 RTCLib 或 CallLib，消息要分发到插件钩子
             */
            if (this._watcher.rtcInnerWatcher && this._watcher.rtcInnerWatcher.message) {
                this._watcher.rtcInnerWatcher.message(cloneMessage(message));
                return;
            }
        }
        // 消息分发至插件，并根据插件响应结果确定是否继续向业务层派发
        if (this._pluginContextQueue.some((item) => {
            // 插件不接收消息
            if (!item.onmessage) {
                return false;
            }
            try {
                return item.onmessage(cloneMessage(message));
            }
            catch (err) {
                logger.error('plugin error =>', err);
                return false;
            }
        })) {
            return;
        }
        // 最终未被过滤的消息派发给应用层
        this._watcher.message && this._watcher.message(cloneMessage(message));
    }
    /**
     * 聊天室相关信息监听
    */
    _chatroomInfoListener(info) {
        this._watcher.chatroomState && this._watcher.chatroomState(info);
    }
    /**
     * 会话监听相关
    */
    _conversationInfoListener(info) {
        this._watcher.conversationState && this._watcher.conversationState(info);
    }
    /**
     * 消息扩展监听相关
    */
    _expansionInfoListener(info) {
        this._watcher.expansion && this._watcher.expansion(info);
    }
    /**
     * 添加事件监听
     * @param options
     */
    assignWatcher(watcher) {
        // 只取有效的四个 key，避免引用透传造成内存泄露
        Object.keys(this._watcher).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(watcher, key)) {
                const value = watcher[key];
                this._watcher[key] = isFunction(value) || isObject(value) ? value : undefined;
            }
        });
    }
    getConnectedTime() {
        return this._engine.connectedTime;
    }
    getCurrentUserId() {
        return this._engine.currentUserId;
    }
    getConnectionStatus() {
        return this._connectionStatus;
    }
    /**
     * 建立连接，连接失败则抛出异常，连接成功后返回用户 userId，否则返回相应的错误码
     * @param token
     * @param refreshNavi 是否需要重新请求导航，当值为 `false` 时，优先使用有效缓存导航，若缓存失效则重新获取导航
     */
    connect(token, refreshNavi = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._connectionStatus === ConnectionStatus$1.CONNECTED) {
                return { code: ErrorCode$1.SUCCESS, userId: this._engine.currentUserId };
            }
            if (this._connectionStatus === ConnectionStatus$1.CONNECTING) {
                return { code: ErrorCode$1.BIZ_ERROR_CONNECTING };
            }
            if (typeof token !== 'string' || token.length === 0) {
                return { code: ErrorCode$1.RC_CONN_USER_OR_PASSWD_ERROR };
            }
            this._token = token;
            // 根据 token 解析动态导航，优先从动态导航获取数据
            const tmpArr = token.split('@');
            const dynamicUris = tmpArr[1] ? tmpArr[1].split(';').map(item => {
                return /^https?:/.test(item) ? item : `https://${item}`;
            }) : [];
            // 获取导航数据
            const naviInfo = yield this._navi.getInfo(this._getTokenWithoutNavi(), dynamicUris, refreshNavi);
            if (!naviInfo) {
                return { code: ErrorCode$1.RC_NAVI_RESOURCE_ERROR };
            }
            // 开始连接，并监听链接状态变化，状态为 0 则连接成功
            const code = yield this._engine.connect(this._getTokenWithoutNavi(), naviInfo, this._options.connectionType);
            if (code === ErrorCode$1.SUCCESS) {
                // 拉取用户级配置
                naviInfo.openUS === 1 && this._pullUserSettings();
            }
            return { code, userId: this._engine.currentUserId };
        });
    }
    getConnectTime() {
        return this._engine.getConnectTime();
    }
    /**
     * 拉取实时配置 web 端需更新 voipCall 字段
     */
    _pullUserSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: 持续迭代中，防止 comet 报错
            // const res = await this._engine.pullUserSettings(version)
            // logger.error('TODO：存储配置，需要使用时获取', res)
        });
    }
    disconnect() {
        this._engine.disconnect();
        this._pluginContextQueue.forEach(item => {
            if (!item.ondisconnect) {
                return;
            }
            try {
                item.ondisconnect();
            }
            catch (err) {
                logger.error('plugin error =>', err);
            }
        });
        // 为照顾 API 层的 Promise 链式调用，故增加返回 Promise
        return Promise.resolve();
    }
    reconnect() {
        return this.connect(this._getTokenWithoutNavi());
    }
    // 获取 token 动态导航前的部分
    _getTokenWithoutNavi() {
        return this._token.replace(/@.+$/, '@');
    }
    /**
     * 获取当前缓存的导航数据
     */
    getInfoFromCache() {
        return this._navi.getInfoFromCache(this._getTokenWithoutNavi());
    }
    /**
     * 消息注册
     * @description 消息注册需在应用初始化完成前进行
     * @param objectName 消息类型，如：RC:TxtMsg
     * @param isPersited 是否存储
     * @param isCounted 是否技术
     * @param searchProps 搜索字段，只在搭配协议栈使用时有效
     */
    registerMessageType(objectName, isPersited, isCounted, searchProps = []) {
        this._engine.registerMessageType(objectName, isPersited, isCounted, searchProps);
    }
    /**
     * 发送消息
     * @param conversationType
     * @param targetId
     * @param objectName
     * @param content
     * @param options
     */
    sendMessage(conversationType, targetId, options) {
        // 消息 content 需小于 128 KB
        const contentJson = JSON.stringify(options.content);
        if (getByteLength(contentJson) > MAX_MESSAGE_CONTENT_BYTES) {
            return Promise.resolve({ code: ErrorCode$1.RC_MSG_CONTENT_EXCEED_LIMIT });
        }
        return this._engine.sendMessage(conversationType, targetId, options);
    }
    /**
     * 发送扩展消息
     * @param messageUId 消息 Id
     * @param keys 需要删除的 key
     * @param expansion 设置的扩展
    */
    sendExpansionMessage(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let { conversationType, targetId, messageUId, keys, expansion, originExpansion, removeAll, canIncludeExpansion } = options;
            // 校验消息是否支持扩展
            if (!canIncludeExpansion) {
                return { code: ErrorCode$1.MESSAGE_KV_NOT_SUPPORT };
            }
            let isExceedLimit = false;
            let isIllgalEx = false;
            if (isObject(expansion)) {
                // 验证扩展总数是否 大于 300
                originExpansion = originExpansion || {};
                const exKeysLength = Object.keys(expansion).length;
                const totalExpansion = Object.assign(originExpansion, expansion);
                const totalExKeysLength = Object.keys(totalExpansion).length;
                isExceedLimit = totalExKeysLength > 300 || exKeysLength > 20;
                // 验证 expansion key value 是否合法
                for (const key in expansion) {
                    const val = expansion[key];
                    isExceedLimit = key.length > 32 || val.length > 64;
                    isIllgalEx = !/^[A-Za-z0-9_=+-]+$/.test(key);
                }
            }
            if (isExceedLimit) {
                return { code: ErrorCode$1.EXPANSION_LIMIT_EXCEET };
            }
            if (isIllgalEx) {
                return { code: ErrorCode$1.BIZ_ERROR_INVALID_PARAMETER };
            }
            const content = {
                mid: messageUId
            };
            expansion && (content.put = expansion);
            keys && (content.del = keys);
            removeAll && (content.removeAll = 1);
            // RC:MsgExMsg 类型消息需使用单群聊消息信令：ppMsgP、pgMsgP（ Server 端处理不存到历史消息云存储）
            const { code } = yield this._engine.sendMessage(conversationType, targetId, {
                content,
                messageType: MessageType$1.EXPANSION_NOTIFY
            });
            return { code };
        });
    }
    /**
     * 反初始化，清空所有监听及计时器
     */
    _destroy() {
        this._watcher = {};
        this._engine.disconnect();
        this._pluginContextQueue.forEach(item => {
            if (!item.ondestroy) {
                return;
            }
            try {
                item.ondestroy();
            }
            catch (err) {
                logger.error('plugin error =>', err);
            }
        });
        this._pluginContextQueue.length = 0;
    }
    /**
     * @param conversationType
     * @param targetId 会话 Id
     * @param timestamp 拉取时间戳
     * @param count 拉取条数
     * @param order 1 正序拉取，0 为倒序拉取
     */
    getHistoryMessage(conversationType, targetId, timestamp = 0, count = 20, order = 0) {
        return this._engine.getHistoryMessage(conversationType, targetId, timestamp, count, order);
    }
    /**
     * 获取会话列表
     * @param count 指定获取数量, 不传则获取全部会话列表，默认 `300`
     */
    getConversationList(count = 300, conversationType, startTime, order) {
        return this._engine.getConversationList(count, conversationType, startTime, order);
    }
    /**
     * 删除会话
     */
    removeConversation(conversationType, targetId) {
        return this._engine.removeConversation(conversationType, targetId);
    }
    /**
     * 清除会话消息未读数
     */
    clearUnreadCount(conversationType, targetId) {
        return this._engine.clearConversationUnreadCount(conversationType, targetId);
    }
    /**
     * 获取指定会话消息未读数
     */
    getUnreadCount(conversationType, targetId) {
        return this._engine.getConversationUnreadCount(conversationType, targetId);
    }
    getTotalUnreadCount() {
        return this._engine.getAllConversationUnreadCount();
    }
    setConversationStatus(conversationType, targetId, isTop, notificationStatus) {
        const statusList = [{ conversationType, targetId, isTop, notificationStatus }];
        return this._engine.batchSetConversationStatus(statusList);
    }
    saveConversationMessageDraft(conversationType, targetId, draft) {
        return this._engine.saveConversationMessageDraft(conversationType, targetId, draft);
    }
    getConversationMessageDraft(conversationType, targetId) {
        return this._engine.getConversationMessageDraft(conversationType, targetId);
    }
    clearConversationMessageDraft(conversationType, targetId) {
        return this._engine.clearConversationMessageDraft(conversationType, targetId);
    }
    recallMessage(conversationType, targetId, messageUId, sentTime, user) {
        return this._engine.recallMsg(conversationType, targetId, messageUId, sentTime, user);
    }
    /**
     * 删除远端消息
     * @param conversationType
     * @param targetId
     * @param list
     */
    deleteRemoteMessage(conversationType, targetId, list) {
        return this._engine.deleteRemoteMessage(conversationType, targetId, list);
    }
    /**
     * 根据时间戳删除指定时间之前的
     * @param conversationType
     * @param targetId
     * @param timestamp
     */
    deleteRemoteMessageByTimestamp(conversationType, targetId, timestamp) {
        return this._engine.deleteRemoteMessageByTimestamp(conversationType, targetId, timestamp);
    }
    /**
     * 加入聊天室，若聊天室不存在则创建聊天室
     * @param roomId 聊天室房间 Id
     * @param count 进入聊天室成功后，自动拉取的历史消息数量，默认值为 `10`，最大有效值为 `50`，`-1` 为不拉取
     */
    joinChatroom(roomId, count = 10) {
        return this._engine.joinChatroom(roomId, count);
    }
    /**
     * 加入聊天室，若聊天室不存在则抛出异常
     * @param roomId 聊天室房间 Id
     * @param count 进入聊天室成功后，自动拉取的历史消息数量，默认值为 `10`，最大有效值为 `50`，`-1` 为不拉取
     */
    joinExistChatroom(roomId, count = 10) {
        return this._engine.joinExistChatroom(roomId, count);
    }
    /**
     * 退出聊天室
     * @param roomId
     */
    quitChatroom(roomId) {
        return this._engine.quitChatroom(roomId);
    }
    /**
     * 获取聊天室房间数据
     * @description count 或 order 有一个为 0 时，只返回成员总数，不返回成员列表信息
     * @param roomId 聊天室 Id
     * @param count 获取房间人员列表数量，最大有效值 `20`，最小值未 `0`，默认为 0
     * @param order 人员排序方式，`1` 为正序，`2` 为倒序，默认为 0
     */
    getChatroomInfo(roomId, count = 0, order = 0) {
        return this._engine.getChatroomInfo(roomId, count, order);
    }
    /**
     * 在指定聊天室中设置自定义属性
     * @description 仅聊天室中不存在此属性或属性设置者为己方时可设置成功
     * @param roomId 聊天室房间 id
     * @param entry 属性信息
     */
    setChatroomEntry(roomId, entry) {
        return this._engine.setChatroomEntry(roomId, entry);
    }
    /**
     * 在指定聊天室中强制增加 / 修改任意聊天室属性
     * @description 仅聊天室中不存在此属性或属性设置者为己方时可设置成功
     * @param roomId 聊天室房间 id
     * @param entry 属性信息
     */
    forceSetChatroomEntry(roomId, entry) {
        return this._engine.forceSetChatroomEntry(roomId, entry);
    }
    /**
     * 删除聊天室属性
     * @description 该方法仅限于删除自己设置的聊天室属性
     * @param roomId 聊天室房间 id
     * @param entry 要移除的属性信息
     */
    removeChatroomEntry(roomId, entry) {
        return this._engine.removeChatroomEntry(roomId, entry);
    }
    /**
     * 强制删除任意聊天室属性
     * @description 该方法仅限于删除自己设置的聊天室属性
     * @param roomId 聊天室房间 id
     * @param entry 要移除的属性信息
     */
    forceRemoveChatroomEntry(roomId, entry) {
        return this._engine.forceRemoveChatroomEntry(roomId, entry);
    }
    /**
     * 获取聊天室中的指定属性
     * @param roomId 聊天室房间 id
     * @param key 属性键名
     */
    getChatroomEntry(roomId, key) {
        return this._engine.getChatroomEntry(roomId, key);
    }
    /**
     * 获取聊天室内的所有属性
     * @param roomId 聊天室房间 id
     */
    getAllChatroomEntries(roomId) {
        return this._engine.getAllChatroomEntry(roomId);
    }
    /**
     * 拉取聊天室内的历史消息
     * @param roomId
     * @param count 拉取消息条数, 有效值范围 `1 - 20`
     * @param order 获取顺序，默认值为 0。
     * * 0：降序，用于获取早于指定时间戳发送的消息
     * * 1：升序，用于获取晚于指定时间戳发送的消息
     * @param timestamp 指定拉取消息用到的时间戳。默认值为 `0`，表示按当前时间拉取
     */
    getChatRoomHistoryMessages(roomId, count = 20, order = 0, timestamp = 0) {
        return this._engine.getChatroomHistoryMessages(roomId, timestamp, count, order);
    }
    /**
     * 获取 七牛、百度上传认证信息
     * @param fileType 文件类型
     * @param fileName 文件名
    */
    getFileToken(fileType, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const naviInfo = this.getInfoFromCache();
            const bos = (naviInfo === null || naviInfo === void 0 ? void 0 : naviInfo.bosAddr) || '';
            const qiniu = (naviInfo === null || naviInfo === void 0 ? void 0 : naviInfo.uploadServer) || '';
            const { code, data } = yield this._engine.getFileToken(fileType, fileName);
            if (code === ErrorCode$1.SUCCESS) {
                return Promise.resolve(Object.assign(data, { bos, qiniu }));
            }
            return Promise.reject(code);
        });
    }
    /**
     * 获取 七牛、百度上传成功可下载的 URL
     * @param fileType 文件类型
     * @param fileName 文件名
     * @param originName 文件源名
     * @param uploadRes 插件上传返回的结果。降级百度上传后，用户传入返回结果，再把结果里的下载地址返回给用户，保证兼容之前结果获取
    */
    getFileUrl(fileType, fileName, originName, uploadRes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (uploadRes === null || uploadRes === void 0 ? void 0 : uploadRes.isBosRes) {
                return Promise.resolve(uploadRes);
            }
            const { code, data } = yield this._engine.getFileUrl(fileType, fileName, originName);
            if (code === ErrorCode$1.SUCCESS) {
                return Promise.resolve(data);
            }
            return Promise.reject(code);
        });
    }
    /* ============================= 以下为 RTC 相关接口 ============================== */
    /**
     * 加入房间
     * @param roomId
     * @param mode 房间模式：直播 or 会议
     * @param mediaType 直播房间模式下的媒体资源类型
     */
    joinRTCRoom(roomId, mode, mediaType) {
        return this._engine.joinRTCRoom(roomId, mode, mediaType);
    }
    quitRTCRoom(roomId) {
        return this._engine.quitRTCRoom(roomId);
    }
    rtcPing(roomId, mode, mediaType) {
        return this._engine.rtcPing(roomId, mode, mediaType);
    }
    getRTCRoomInfo(roomId) {
        return this._engine.getRTCRoomInfo(roomId);
    }
    getRTCUserInfoList(roomId) {
        return this._engine.getRTCUserInfoList(roomId);
    }
    getRTCUserInfo(roomId) {
        return this._engine.getRTCUserInfo(roomId);
    }
    setRTCUserInfo(roomId, key, value) {
        return this._engine.setRTCUserInfo(roomId, key, value);
    }
    removeRTCUserInfo(roomId, keys) {
        return this._engine.removeRTCUserInfo(roomId, keys);
    }
    setRTCData(roomId, key, value, isInner, apiType, message) {
        return this._engine.setRTCData(roomId, key, value, isInner, apiType, message);
    }
    setRTCTotalRes(roomId, message, valueInfo, objectName) {
        return this._engine.setRTCTotalRes(roomId, message, valueInfo, objectName);
    }
    getRTCData(roomId, keys, isInner, apiType) {
        return this._engine.getRTCData(roomId, keys, isInner, apiType);
    }
    removeRTCData(roomId, keys, isInner, apiType, message) {
        return this._engine.removeRTCData(roomId, keys, isInner, apiType, message);
    }
    setRTCOutData(roomId, rtcData, type, message) {
        return this._engine.setRTCOutData(roomId, rtcData, type, message);
    }
    getRTCOutData(roomId, userIds) {
        return this._engine.getRTCOutData(roomId, userIds);
    }
    getRTCToken(roomId, mode, broadcastType) {
        return this._engine.getRTCToken(roomId, mode, broadcastType);
    }
    // RTC 北极星数据上报
    setRTCState(roomId, report) {
        return !this._options.isEnterPrise ? this._engine.setRTCState(roomId, report) : Promise.resolve(ErrorCode$1.SUCCESS);
    }
    getRTCUserList(roomId) {
        return this._engine.getRTCUserList(roomId);
    }
}

{
    logger.warn('RCEngineVersion:', "0.1.0");
    logger.warn('VersionCode:', "535393139458d1b8d7dc5d2b8d49803a2a30e278");
}

exports.APIContext = APIContext;
exports.AppStorage = AppStorage;
exports.CallLibMsgType = CallLibMsgType;
exports.CometChannel = CometChannel;
exports.ConnectResultCode = ConnectResultCode;
exports.ConnectionStatus = ConnectionStatus$1;
exports.ConversationType = ConversationType$1;
exports.DelayTimer = DelayTimer;
exports.ErrorCode = ErrorCode$1;
exports.FileType = FileType$1;
exports.Logger = Logger;
exports.MentionedType = MentionedType$1;
exports.MessageDirection = MessageDirection$1;
exports.MessageType = MessageType$1;
exports.NotificationStatus = NotificationStatus$1;
exports.PluginContext = PluginContext;
exports.RCAssertError = RCAssertError;
exports.RTCPluginContext = RTCPluginContext;
exports.ReceivedStatus = ReceivedStatus$1;
exports.WebSocketChannel = WebSocketChannel;
exports.appendUrl = appendUrl;
exports.assert = assert;
exports.forEach = forEach;
exports.getUploadFileName = getUploadFileName;
exports.indexOf = indexOf;
exports.isArray = isArray;
exports.isArrayBuffer = isArrayBuffer;
exports.isFunction = isFunction;
exports.isHttpUrl = isHttpUrl;
exports.isInObject = isInObject;
exports.isInclude = isInclude;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isValidConversationType = isValidConversationType;
exports.isValidFileType = isValidFileType;
exports.map = map;
exports.notEmptyArray = notEmptyArray;
exports.notEmptyObject = notEmptyObject;
exports.notEmptyString = notEmptyString;
exports.todo = todo;
exports.validate = validate;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1606186787854);
})()
//# sourceMappingURL=index.js.map