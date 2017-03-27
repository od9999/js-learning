/**
 * Generator 函数的语法糖。async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
 * async函数对 Generator 函数的改进，体现在以下四点。
 * 1.内置执行器
 * 2.更好的语义
 * 3.更广的适用性
 * 4.返回值是 Promise (async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。)
 */

function sayHello() {
	return 'hello';
}

function sayHi() {
	return 'hi';
}

async function test() {
	console.log(111);
	let hello = await sayHello();
	console.log(222);
	let hello = await sayHello();
	console.log(333);
	return 'test';
}
console.log(444);

test().then(function (value) {
	console.log(value);
});



