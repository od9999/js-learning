/**
 * resolve函数的参数除了正常的值以外，还可能是另一个Promise实例，
 * 表示异步操作的结果有可能是一个值，也有可能是另一个异步操作
  */
var p1 = new Promise(function (resolve, reject) {
	console.log(111);
	setTimeout(() => {
		// resolve('p1');
		reject(new Error('p1 reject'));
	}, 1000);
});

p1.then(function() {
	console.log('p1 then resolve-------');
	console.log(arguments);
}, function () {
	console.log('p1 then reject-------');
	console.log(arguments);
});

console.log(222);

/**
 * 如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变；
 * 如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行。
 */
setTimeout(function () {
	var p2 = new Promise(function (resolve, reject) {
		console.log(333);
		setTimeout(function () {
			resolve(p1);
		}, 1000);
	});

	p2.then(function (value) {
		console.log('p2 then resolve-------');
		console.log(arguments);
	}, function () {
		console.log('p2 then reject-------');
		console.log(arguments);
	});
}, 2000);



console.log(444);