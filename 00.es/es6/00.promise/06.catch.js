/**
 * Promise.prototype.catch方法是.then(null, rejection)的别名
 */

let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('111');
		// reject(new Error('error'));
	}, 1000);
});

p.then((value) => {
	console.log(value);
	throw new Error('p.then() resolve() throw new Error... '); // 另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
}).catch((error) => {
	console.error(error);
});