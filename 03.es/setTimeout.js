//setTimeout异步方法，可以通过多个参数进行传参
function fn(a, b) {
    console.log(a, b);
}
setTimeout(fn, 2000, 'aaa', 'bbb');  // aaa bbb

setInterval(fn, 1000, 'ccc', 'ddd');  // ccc ddd