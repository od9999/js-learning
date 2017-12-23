// 执行上下文环境对象
// 包括
// this: 上下文对象
// variable object 变量对象(包括声明的变量，如果是函数，则还有arguments)
// scope chain 作用域链(指针列表，这些指针指向的是每个函数在调用的时候都会产生的变量对象)

// 1.自由变量(非局部变量)
// 自由变量是指在其他作用域环境中声明的变量
// 函数在定义的时候(不是调用的时候)，就已经确定了函数内部自由变量的取值作用域
let a = 1;

function test() {
    console.log(a);
}

function call(fn) {
    let a = 2;
    fn();
}

call(test);

// 2. this
// 是在函数真正被调用时确定的，函数定义时确定不了


// 闭包closure
// 闭包是指有权访问另一个函数作用域中的变量的函数 闭包保存的是整个变量对象
// 指一个函数与一个执行环境绑定到一起，这个引用环境是一个存储该函数的非局部变量(或者说自由变量)的表
// 看内存 chrome profile heap


var fn = null;
function foo() {
	var a = 2;
	function innnerFoo() {
		console.log(a);
	}
	fn = innnerFoo;  // 将 innnerFoo的引用，赋值给全局变量中的fn
}

function bar() {
	fn(); // 此处的保留的innerFoo的引用
}
foo();
bar(); // 2

// (function () {
// 	var a = 10;
// 	var b = 20;
// 	function add(num1, num2) {
// 		var num1 = !!num1 ? num1 : a;
// 		var num2 = !!num2 ? num2 : b;
// 		return num1 + num2;
// 	}
// 	window.add = add;
// })();
console.log('--------------');
for (var i = 1; i <= 5; i++) {
	setTimeout(function timer() {
		console.log(i);
	}, i*1000 );
}

console.log('--------------');
for (var i = 1; i <= 5; i++) {
	;(function(index){
		setTimeout(function timer() {
			console.log(index);
		}, i*1000 );
	})(i);

}
