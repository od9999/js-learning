/**
 * Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由JavaScript引擎提供，不用自己部署。
 */
/*
let promise = new Promise(function(resolve, reject) {
	if (true){
		resolve(value);
	} else {
		reject(error);
	}
});

function timeout(ms) {
	return new Promise((resolve, reject) => {
		// setTimeout(resolve, ms, 'done');
		resolve('aaa', 'bbb', [1, 2, 3]);
	});

}

timeout(100).then((value) => {
	console.log(value);
});
*/



 let p = new Promise((resolve, reject) => {
 console.log(111);
 resolve('value');
 // reject(new Error('reject'));
 console.log('222');
 });
 console.log('333');
 p.then((value) => {
 console.log(value);
 }, (error) => {
 console.error(error);
 });
 console.log('444');


/**
 * Promise.prototype.then()
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 */
// let p1 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'aaaa');
// });
//
// p1.then((value) => {
// 	console.log(111);
// 	console.log(value);
// 	return '222';
// }).then((value) => {
// 	console.log(333);
// 	console.log(value);
// });