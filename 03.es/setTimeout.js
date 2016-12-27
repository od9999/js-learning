//setTimeout异步方法，可以通过多个参数进行传参
// function fn(a, b) {
//     console.log(a, b);
// }
// setTimeout(fn, 2000, 'aaa', 'bbb');  // aaa bbb
// setInterval(fn, 1000, 'ccc', 'ddd');  // ccc ddd

setTimeout(function A(){
    console.log('A');
    setTimeout(function B() {
        console.log('B');
    }, 1000);
}, 1000);

setTimeout(function C(){
    console.log('C');
    setTimeout(function D() {
        console.log('D');
    }, 1000);
}, 1000);

// ACBD