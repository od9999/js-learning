// 自由变量是指在其他作用域环境中声明的变量
// 函数在定义的时候(不是调用的时候)，就已经确定了函数内部自由变量的取值作用域
var a = 1;

function test() {
    console.log(a);
}

function call(fn) {
    var b = 2;
    fn();
}

call(test);
