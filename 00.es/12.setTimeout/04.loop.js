 class Loop {
    constructor(fn, interval) {
        this.fn = fn;
        this.interval = interval;
        this.timerId = null;
        this.on();
    }
    on() {
        const self = this;
        const interval = self.interval;
        clearTimeout(this.timerId);
        const stop = () => clearTimeout(self.timerId);

        self.timerId = setTimeout(function func() {
            self.timerId = setTimeout(func, interval);
            self.fn(stop);
        }, interval);
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
    console.log(counter++);
}, 1000);
setTimeout(() => {
    loop.stop();
}, 3000)
