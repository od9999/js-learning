/**
 * resolve函数的参数除了正常的值以外，还可能是另一个Promise实例，
 * 表示异步操作的结果有可能是一个值，也有可能是另一个异步操作
  */
var p1 = new Promise((resolve, reject) => {
	console.log(111);
	setTimeout(() => {
		console.log(222);
		resolve('p1 resolve');
		// reject(new Error('p1 reject'));
	}, 3000);
});

p1.then(function() {
	console.log('p1 then resolve-------');
	console.log(arguments);
}, function () {
	console.log('p1 then reject-------');
	console.log(arguments);
});

console.log(333);
var p2 = new Promise(function (resolve, reject) {
	console.log(444);
	setTimeout(function () {
		console.log(555);
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

console.log(666);