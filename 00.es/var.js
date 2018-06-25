/**
 * 当使用var声明一个变量时，创建的这个属性时不可配置的(不能使用delete运算符删除)
 *
 */
var a, b = 1;
console.log(a);    // undefined
console.log(b);    // 1
console.log('a' in this); // 浏览器环境中true node.js中false
console.log('b' in this); // 浏览器环境中true node.js中false

// console.log(window.a);
// console.log(window.b);


function test(a) {
    console.log(a);
    var a = 2;
    console.log(a);
}

test(1);
