let obj = {
	name: 'od'
};

function test() {
	console.log(arguments);
	console.log(this);
}

/**
 * 如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，
 * 同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
 */
console.log('--------------');
test.call(obj);

console.log('--------------');
test.call(null);

console.log('--------------');
test.call(undefined);

console.log('--------------');
test.call(1);
