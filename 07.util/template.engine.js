//期待的使用方法如下
/*
var TemplateEngine = function(tpl, data) {
    // magic here ...
}
var template = '<p>Hello, my name is <%name%>. I\'m <%age%> years old.</p>';
console.log(TemplateEngine(template, {
    name: "Krasimir",
    age: 29
}));
*/
var TemplateEngine = function(html, options) {
    var re = /<%([^%>]+)?%>/g,
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = 'var r=[];\n',
        cursor = 0,
        match = null;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
};
var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';
console.log(TemplateEngine(template, {
    name: "Krasimir Tsonev",
    profile: { age: 29 }
}));

// 实现如下
//第一步 转化所有以<%开头，以%>结尾的片段
var TemplateEngine1 = function(tpl, data) {
    var re = /<%([^%>]+)?%>/g;
    var match = null;
    while(match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], data[match[1]]);
    }
    return tpl;
};


// 存在的问题: 嵌套的对象无法识别
/*
{
    name: "Krasimir Tsonev",
    profile: { age: 29 }
}
 <%profile.age%>
*/
// 解决的思路: 根据字符串构造函数，包括它的参数和函数体。

// var fn = new Function("arg", "console.log(arg + 1);");
// fn(2); // outputs 3

// 第二部: 解决嵌套的对象无法识别的问题
var TemplateEngine2 = function(tpl, data) {
    var re = /<%([^%>]+)?%>/g,
        code = 'var r=[];\n',
        cursor = 0,
        match = null;
    var add = function(line) {
        code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    };
    while(match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1]);
        cursor = match.index + match[0].length;
    }
    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");'; // <-- return the result
    console.log(code);
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}
var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';
console.log(TemplateEngine2(template, {
    name: "Krasimir Tsonev",
    profile: { age: 29 }
}));
/*
 var r=[];
 r.push("<p>Hello, my name is ");
 r.push("this.name");               // this.name和this.profile.age不应该有引号啊
 r.push(". I'm ");
 r.push("this.profile.age");
 r.push(" years old.</p>");
 return r.join("");
*/


// 第三部: 解决js代码中的引号问题
var TemplateEngine3 = function(tpl, data) {
    var re = /<%([^%>]+)?%>/g,
        code = 'var r=[];\n',
        cursor = 0,
        match = null;
    var add = function(line, js) {
        js? code += 'r.push(' + line + ');\n' :
            code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    };
    while(match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true); // <-- say that this is actually valid js
        cursor = match.index + match[0].length;
    }
    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");'; // <-- return the result
    console.log(code);
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}
var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';
console.log(TemplateEngine3(template, {
    name: "Krasimir Tsonev",
    profile: { age: 29 }
}));
/*
var r=[];
r.push("<p>Hello, my name is ");
r.push(this.name);
r.push(". I'm ");
r.push(this.profile.age);
r.push(" years old.</p>");
return r.join("");
*/


// 参考链接: http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651551309&idx=1&sn=93bf90d6f2c63fea0e5f3ec488a1431f&chksm=8025a18cb752289af6ad341cdd20daa4b0d0dc6fd5e1f8cd6d8910afa8ee1b6400b0503ad382&scene=4#wechat_redirect