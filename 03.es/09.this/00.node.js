console.log(this);	// node中 如果是文件运行 得到{}，如果是repl环境 是global

(function() {
	console.log(this === global);	// true
})();