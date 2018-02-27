let p = new Promise((resolve, reject) => {
	console.log(111);
	// 最好加上return 因为执行resolve或reject后 后续代码没有意义 更安全
	resolve('value');
	// reject(new Error('reject'));
	console.log(222);
});
console.log(333);

p.then(value => {
	console.log(value);
	console.log(444);
}, error => {
	console.error(error);
	console.log(555);
});

console.log(666);
