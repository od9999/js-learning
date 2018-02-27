/**
 * Promise.prototype.catch方法是.then(null, rejection)的别名
 */

let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('111');
		reject(new Error('my error'));
	}, 1000);

});

process.on('unhandledRejection', function (error, p) {
	console.log(error);
	console.log(p);
  	throw err;
});

p.then((value) => {
	console.log(value);
	// 另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
	throw new Error('p.then() resolve() throw new Error... ');
}).catch((error) => {
	console.error(error);
});
