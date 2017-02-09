// 模拟bind
Function.prototype.bind = function(context, ...args) {
    let self = this;
    return function(...argv) {
        self.apply(context, args.concat(argv));
    };
};

Function.prototype.bind = function(context, ...args) {
    return (...argv) => {
        this.apply(context, args.concat(argv));
    };
};

global.name = 'aaa';

let obj = {
    name : 'bbb'
};

function test() {
    console.log(this.name);
}

test.bind(obj)();
