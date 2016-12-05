// 验证是否1-10个汉字
var result = /^[\u4e00-\u9fa5]{1,10}$/.test('哈哈哈哈');
console.log(result);