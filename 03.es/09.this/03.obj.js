var a = 1;

function fn1() {
	console.log(this.a + a);
}

function fn2(fn) {
	var a = 2;
	fn();
}

fn2(fn1);

function fn3() {
	this.a = 3;
}

fn3.prototype.a = 4;

var f = new fn3();

fn1.call(f);
