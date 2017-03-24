/**
 * Promise.prototype.then()
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 */
let p1 = new Promise((resolve, reject) => {
	setTimeout( () => {
		console.log(111);
		resolve('p1 resolve');
		// reject(new Error('p1 reject'));
		console.log(222);
	}, 1000);
});
console.log(333);
/**
 * 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
 */
p1.then(
	(value) => {
		console.log('p1.then() resolve-------------');
		console.log(value);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// resolve('p1.then() resolve new Promise resolve');
				reject(new Error('p1.then() resolve new Promise reject'));
			}, 1000);
		});
	},
	(error) => {
		console.log('p1.then() reject-------------');
		console.error(error);
		return new Promise((resolve, reject) => {
			resolve('p1.then() reject new Promise resolve');
			// reject(new Error('p1.then() reject new Promise reject'));
		});
	}
).then(
	(value) => {
		console.log('p1.then().then() resolve-------------');
		console.log(value);
	},
	(error) => {
		console.log('p1.then().then() reject-------------');
		console.error(error);
	}
);