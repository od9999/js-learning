setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
    console.log('setTimeout');
});

process.nextTick(() => {
    console.log('process.nextTick');
});

(async () => {
    return 'async';
})().then((data) => {
    console.log(data);
});

new Promise((resolve, reject) => {
    resolve('promise');
}).then((data) => {
    console.log(data);
});

console.log('current');




