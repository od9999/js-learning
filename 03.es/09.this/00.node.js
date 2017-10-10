/*
 根据es3和非严格的es5对函数调用(不是方法调用)规定，调用上下文是全局对象
 严格模式下，调用上下文是undefined
 */

console.log(this);	// node中 如果是文件运行 得到{}，如果是repl环境 是global

(function() {
	console.log(this === global);	// true
})();