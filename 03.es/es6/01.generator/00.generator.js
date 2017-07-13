/**
 * 1.调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象
 */
const helloWorldGenerator = function* () {
	console.log(111);
	console.log(this === global);
	yield 'hello';
	yield 'world';
	return 'ending';
};

var hw = helloWorldGenerator();
console.log(typeof hw);
console.log(helloWorldGenerator.prototype);
console.log(Object.prototype.toString.call(hw));
console.log(222);
console.log(hw.next('aa'));
console.log(hw.next('bb'));
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
