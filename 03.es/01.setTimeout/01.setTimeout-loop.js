let timerId = null;



timerId = (function test(a, b) {
	console.log(a, b);
	timerId = setTimeout(test, 1000, a + 1, b + 1);
})(1, 2);


