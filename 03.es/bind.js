// 模拟bind
Function.prototype.bind = function(context, ...args) {
    var self = this;
    return function(...argv) {
        self.apply(context, args.concat(argv));
    };
};