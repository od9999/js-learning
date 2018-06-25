let arr = [5, -9, 18, 2, 0, 9];

// 复制数组
let arr2 = arr.concat();
arr2.push(10);
let arr3 = arr.filter(item => true);
console.log(arr);
console.log(arr2);
console.log(arr3);

let arrFrom = Array.from(arr);
arrFrom.push(1);
console.log(arrFrom);
console.log(arr);

let arrSlice = Array.prototype.slice.call(arr);
arrSlice.push(1);
console.log(arrSlice);
console.log(arr);

let arrOf = Array.of.apply(null, arr);
arrOf.push(1);
console.log(arrOf);
console.log(arr);