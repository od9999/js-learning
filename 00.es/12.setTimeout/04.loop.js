const loop = (() => {
    let timerId;
    const stopLoop = () => clearTimeout(timerId);
    return {
        on(fn, interval) {
            clearTimeout(timerId);
            timerId = setTimeout(function _func() {
                timerId = setTimeout(_func, interval);
                fn(stopLoop);
            }, interval);
        }
    };
})();

let counter = 0;
loop.on(stopLoop => {
    if (counter === 2) {
        stopLoop();
    }
    console.log(counter++);
}, 1000);
