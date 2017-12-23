let p = new Promise((resolve, reject) => {
	console.log(111);
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
