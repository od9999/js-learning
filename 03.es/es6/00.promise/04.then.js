/**
 * Promise.prototype.then()
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 */
let p1 = new Promise((resolve, reject) => {
	setTimeout( () => {
		resolve('aaaaa');
	}, 1000);
});

/**
 * 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
 */
p1.then((value) => {
	console.log(111);
	console.log('p1 -------');
	console.log(value);
	return '222';
}).then((value) => {
	console.log(333);
	console.log('-------');
	console.log(value);

});