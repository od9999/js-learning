function test() {
	setTimeout(function() {
		console.log(a);
	});
	console.log(a);
	var a = 1;
	function func() {
		console.log(a);
	}
	func();

}

test();