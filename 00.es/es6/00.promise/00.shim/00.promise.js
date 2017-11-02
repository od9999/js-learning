function Promise(fn) {
    // 加入状态是为了保证一个Promise调用resolve后注册的函数也能执行
    var STATE = 'pending';
    var value = null;

    //callbacks为数组，因为可能同时有很多个回调
    var callbacks = [];
    var self = this;
    this.then = function (onFulfilled) {
        if ('pending' === STATE) {
            callbacks.push(onFulfilled);
            // 链式调用
            return self;
        }

        onFulfilled(value);
        return self;

    };

    function resolve(newValue) {
        value = newValue;
        STATE = 'fulfilled';
        // 为了防止Promise中的函数参数, resolve是同步调用的, 所以这里要使用setTimeout保证执行顺序
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                callback(value);
            });
        }, 0);
    }

    fn(resolve);
}

module.exports = Promise;


