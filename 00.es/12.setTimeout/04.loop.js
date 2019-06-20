 class Loop {
    constructor(fn, interval) {
        this.fn = fn;
        this.interval = interval;
        this.timerId = null;
    }
    _on() {
        const self = this;
        const interval = self.interval;
        clearTimeout(this.timerId);
        const stop = () => clearTimeout(self.timerId);

        self.timerId = setTimeout(function func() {
            self.timerId = setTimeout(func, interval);
            self.fn(stop);
        }, interval);
    }
    start() {
        this._on();
    }
    stop() {
        clearTimeout(this.timerId);
    }
}

let counter = 0;
const loop = new Loop(stop => {
    if (counter === 4) {
        stop();
    }
    console.log(counter);
    console.log(counter++);
}, 1000);
loop.start();
// setTimeout(() => {
//     loop.stop();
// }, 3000)
