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


var arr = [1, 3, 8];
console.log(arr.length);  // 3

arr[100] = 10;
console.log(arr.length);  // 101
console.log(Object.keys(arr));  // [ '0', '1', '2', '100' ]
console.log('54' in arr);    // false


function test(a) {
    console.log(a);
    var a = 2;
    console.log(a);
}

test(1);