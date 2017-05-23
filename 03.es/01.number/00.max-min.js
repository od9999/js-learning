/**
 * js使用IEEE-754标准定义的64位浮点数表示数字，不区分整数和浮点数，都由浮点数来表示
 */

console.log(+Number.MAX_VALUE);
console.log(-Number.MIN_VALUE);

console.log(-Number.MAX_VALUE);
console.log(+Number.MIN_VALUE);

console.log(Infinity - Infinity);  // NaN
console.log(0 / 0);  // NaN
console.log(1 / 0);  // Infinity

//es5以后 全局变量Infinity、NaN只能是只读的

