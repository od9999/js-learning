let cb = () => {
    console.log(1);
};

global.setInterval(() => {
    cb();
}, 1000);

global.setInterval(cb, 1000);

setTimeout(() => {
    cb = () => {
        console.log(2);
    };
}, 3000);