## CORS
需要浏览器和服务器同时支持
这里列出几个返回http中常见的几个CORS请求头：

>
> Access-Control-Allow-Origin:
> 该字段为必需字段，可以是指定的源名（协议+域名+端口），也可以使用通配符*代表接受所有跨域资源请求
>
> Access-Control-Allow-Credentials:
> 该字段为boolean值，表示是否允许发送cookie,默认为false,即不允许发送cookie值。
> 
> Access-Control-Expose-Headers:
> 该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
> Cache-Control, Content-Language, Content-Type, Expires, Last-Modified, Pragma.
> 如果想拿到其他的字段，必须在Access-Control-Expose-Headers里面指定。

## JSONP
很好理解 具有src属性的元素有跨域能力

## document.domain
利用document.domain实现跨域：
前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，否则无法利用document.domain进行跨域

本地hosts配下面代码
```
127.0.0.1 d1.cross-domain.com
127.0.0.1 d2.cross-domain.com
```

## postMessage
html5引入的message的API
