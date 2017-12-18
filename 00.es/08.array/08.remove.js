// 删除数组某一项的方法

let arr = [1, 2, 3, NaN, +0, -0];
console.log(arr);
// 返回一个新数组
const removeItem = (arr, item) => arr.filter(i => !Object.is(i, item));

console.log(removeItem(arr, 2));
console.log(removeItem(arr, NaN));
console.log(removeItem(arr, +0));
console.log(removeItem(arr, -0));
