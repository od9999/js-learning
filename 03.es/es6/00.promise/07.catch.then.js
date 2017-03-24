/**
 * Promise.prototype.catch方法是返回的还是一个 Promise 对象
 */

let p =  new Promise((resolve, reject) => {
	// 下面一行会报错，因为x没有声明
	resolve(x + 2);
});


p.catch((error) => {
	console.log('oh no', error);
	throw new Error('aaaa');
}).then(function() {
	console.log('carry on');
}).catch((error) => {
	console.log(error)
});