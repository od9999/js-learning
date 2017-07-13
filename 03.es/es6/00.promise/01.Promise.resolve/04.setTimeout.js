// 下一轮事件循环开始时执行
setTimeout(function () {
    console.log('1');
}, 0);

// 本轮事件循环结束时执行
Promise.resolve().then(function () {
    console.log('2');
});

console.log('3');