const loop = (() => {
    let timerId;
    return {
        on(fn, interval) {
            clearTimeout(timerId);
            timerId = setTimeout(function _func() {
                fn();
                setTimeout(_func, interval);
            }, interval);
        },
        off() {
            clearTimerout(timerId);
        }
    };
})();

let counter = 0;
loop.on(() => {
    console.log(counter++);
}, 1000);
