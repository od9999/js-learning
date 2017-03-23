/**
 * 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 * Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由JavaScript引擎提供，不用自己部署。
 */

let promise = new Promise(function(resolve, reject) {
	if (false){
		setTimeout(resolve, 1000, 'aaa');
	} else {
		setTimeout(reject, 1000, new Error('error!!!'));
	}
});

promise.then(function () {
	console.log('Resolved-----------');
	console.log(arguments);
}, function () {
	console.log('Reject-----------');
	console.log(arguments);
});





