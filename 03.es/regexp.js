let reg = /test/g; // es5规定使用正则表达式字面量必须像直接调用RegExp构造函数一样 每次都创建新的RegExp实例

console.log(reg.global);
console.log(reg.ignoreCase);
console.log(reg.multiline);
console.log(reg.source);  // string类型
console.log(reg.lastIndex);  // 整数 表示开始搜索下一个匹配的字符位置 从0算起

console.log('-------------------');
let pattern = /aa(bb(cc)?)?/;
let matchPattern = pattern.exec('aabbcc');
console.log(matchPattern);      // [ 'aabbcc', 'bbcc', 'cc', index: 0, input: 'aabbcc' ]

let pattern2 = /<%([^%>]+)?%>/g;
let matchPattern2 = pattern2.exec('<%aaa%> adswa asdwa <%bbb%>');
console.log(matchPattern2);

matchPattern2 = pattern2.exec('<%aaa%> adswa asdwa <%bbb%>');
console.log(matchPattern2);

matchPattern2 = pattern2.exec('<%aaa%> adswa asdwa <%bbb%>');
console.log(matchPattern2);


console.log('-------------------');

let str = 'cat.bat.sat.fat';
let reg2 = /.at/g;

let matches1 = reg2.exec(str);
console.log(matches1);

matches1 = reg2.exec(str);
console.log(matches1);

matches1 = reg2.exec(str);
console.log(matches1);

matches1 = reg2.exec(str);
console.log(matches1);
console.log('-------------------');
let reg3 = /.at/;
let matches2 = reg3.exec(str);
console.log(matches2);

matches2 = reg3.exec(str);
console.log(matches2);

matches2 = reg3.exec(str);
console.log(matches2);

matches2 = reg3.exec(str);
console.log(matches2);
console.log('-------------------');
// 验证是否1-10个汉字
var result = /^[\u4e00-\u9fa5]{1,10}$/.test('哈哈哈哈');
console.log(result);


