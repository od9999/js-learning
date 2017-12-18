// 编译器的"传名调用"实现，往往是将参数放到一个临时函数之中，
// 再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。
function f(m) {
    return m * 2;
}
var x = 1;
f(x + 5);


// 等同于
var thunk = function () {
    return x + 5;
};

function f2(thunk) {
    return thunk() * 2;
}


// JavaScript 语言是传值调用，它的 Thunk 函数含义有所不同。
// 在 JavaScript 语言中，Thunk 函数替换的不是表达式，
// 而是多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数。
const Thunk = function (fn) {
    return (...args) => {
        return function (callback) {
            return fn.call(null, ...args, callback);
        };
    };
};
const Thunk2 = fn => (...args) => callback => fn.call(null, ...args, callback);

function func(a, cb) {
    cb(a);
}
const ft = Thunk(func);

ft(1)(console.log); // 1
