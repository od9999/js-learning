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