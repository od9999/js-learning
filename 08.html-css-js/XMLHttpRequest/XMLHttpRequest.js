function createXMLHTTPRequest() {
    //1.创建XMLHttpRequest对象
    //这是XMLHttpReuquest对象5部使用中最复杂的一步
    //需要针对IE和其他类型的浏览器建立这个对象的不同方式写不同的代码
    var xmlHttpRequest;
    if (window.XMLHttpRequest) {
        //针对FireFox，Mozillar，Opera，Safari，IE7，IE8
        xmlHttpRequest = new XMLHttpRequest();
        //针对某些特定版本的mozillar浏览器的BUG进行修正
        if (xmlHttpRequest.overrideMimeType) {
            xmlHttpRequest.overrideMimeType("text/xml");
        }
    } else if (window.ActiveXObject) {
        //针对IE6，IE5.5，IE5
        //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js的数组中
        //排在前面的版本较新
        var activexName = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP" ];
        for ( var i = 0; i < activexName.length; i++) {
            try {
                //取出一个控件名进行创建，如果创建成功就终止循环
                //如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建
                xmlHttpRequest = new ActiveXObject(activexName[i]);
                if(xmlHttpRequest){
                    break;
                }
            } catch (e) {
            }
        }
    }
    return xmlHttpRequest;
}

// 发送get请求
function get(url){
    var request = createXMLHTTPRequest();
    if(request){
        // 启动一个请求以备发送 而不是真正发送请求    true 表示异步 false 表示同步
        request.open("GET", url, true);
        request.onreadystatechange = function(){
            /**
             * 0: 未初始化 未调用open()方法
             * 1: 启动 已经调用open() 但尚未调用send()方法
             * 2: 发送 已经调用send() 还没收到响应
             * 3: 接受 已经收到部分响应
             * 4: 完成 已经收到全部响应，可以在客户端使用了
             */
			if(request.readyState == 4){
                if(request.status >= 200 && request.status < 300 || request.status == 304){
                    console.log("get success-------");
					console.log(Object.prototype.toString.call(request.responseText));
					console.log(request.responseText);
                } else {
                    console.log("error");
                }
            }
        };
		request.setRequestHeader("Accept", "application/json");
        request.send(null);
    }
}


// post请求
function post(url){
    var request = createXMLHTTPRequest();
    if(request){
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8;");
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status >= 200 && request.status < 300 || request.status == 304) {
					console.log("post success-------");
					console.log(Object.prototype.toString.call(request.responseText));
					console.log(request.responseText);
                } else {
					console.log("error");
                }
            }
        };
		// request.setRequestHeader("Accept", "application/json");
        request.send("keywords=xxx"); // 发送给服务端的数据

    }
}