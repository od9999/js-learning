// 找出数组最大、最小的一项
let arr = [5, -9, 18, 2, 0, 9];
console.log(Math.max(...arr));
console.log(Math.max.apply(Math, arr));
