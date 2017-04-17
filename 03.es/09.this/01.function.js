
var thisA = this;	// 1.如果是浏览器环境，是window 2.如果是node文件 是{}，3.如果是node的repl环境 是global
function funOut(){
	var thisB = this;		// 1.如果是浏览器环境，是window 2.如果是node环境 是global
	return function() {
		var thisC = this;
		console.log(thisA === thisB);	// 1.如果是浏览器环境，true  2.如果是node文件 是false，3.如果是node的repl环境 是true
		console.log(thisB === thisC);	// true
		console.log(thisA === global);	// 1.如果是浏览器环境，true  2.如果是node文件 是false，3.如果是node的repl环境 是true
	};
}


