// 删除数组某一项的方法

let arr = [1, 2, 3];

const removeItem = (arr, item) => arr.map((i, index) => i === item ? null : i);

console.log(removeItem(arr, 2));
console.log(arr);