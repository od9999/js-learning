// 函数柯里化

var currying = function (fn) {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        [].push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
};

var adder = function () {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        [].push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
};
var sum = adder();
console.log(sum);     // [Function]

sum(100,200)(300);    // 调用形式灵活，一次调用可输入一个或者多个参数，并且支持链式调用
sum(400);
console.log(sum());   // 1000 （加总计算）
