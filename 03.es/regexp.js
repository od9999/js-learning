let reg = /test/g; // es5规定使用正则表达式字面量必须像直接调用RegExp构造函数一样 每次都创建新的RegExp实例


console.log(reg.global);
console.log(reg.ignoreCase);
console.log(reg.multiline);
console.log(reg.source);  // string类型
console.log(reg.lastIndex);  // 整数 表示开始搜索下一个匹配的字符位置 从0算起

console.log('----------');

// 验证是否1-10个汉字
var result = /^[\u4e00-\u9fa5]{1,10}$/.test('哈哈哈哈');
console.log(result);


