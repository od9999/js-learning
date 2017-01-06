// 找出数组最大、最小的一项
let arr = [5, -9, 18, 2, 0, 9];
console.log(Math.max(...arr));
console.log(Math.max.apply(null, arr));

// 复制数组
let arr2 = arr.concat();
arr2.push(10);
let arr3 = arr.filter(function(item){
    return true;
});
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

// 影响原数组的方法:
//栈方法
arr.push(7);
arr.pop();

// 队列方法
arr.push();
arr.shift();
arr.unshift(5); // 头部加入5

// 重排序
arr.reverse();  // 顺序反转
arr.sort();

// 删除、插入、替换 start,deleteCount,items
// 删除前2个
arr.splice(0, 2);
// 在第二个位置插入4, 5, 6
arr.splice(2, 0, 4, 5, 6);
// 替换


// 不会影响原数组的方法
arr.concat();
arr.slice(1, 4);

console.log('----------------');

// es5方法
// 迭代方法 forEach filter map some every
// 参数1 callback(数组每一项, 元素位置, 数组本身) 参数2 callback的作用域对象
let arr4 = [5, -9, 18, 2, 0, 9];
arr4.forEach(function(item, index, array){
    console.log(arr4 === array);    // true
    console.log(this === global);  // true
});
arr4.forEach(function(item, index, array){
    console.log(arr4 === array);    // true
    console.log(this === arr4);   // true
}, arr4);
console.log('===============');
arr4.forEach(function(item, index, array){
    console.log(arr4 === array);    // true
    console.log(this === arr4);  // true
}.bind(arr4));
console.log('------------------');

// 归并方法 reduce() reduceRight()
/**
 * 参数1 callback(prev, cur, index, array) 前一个值 当前值 当前项的索引 数组对象
 * 参数2 可选的 作为归并基础的初始值
 */
let arr5 = [1, 2, 3, 4, 5];
let sum = arr5.reduce(function(prev, cur, index, array){
    console.log('``````````````````');
    console.log(prev);
    console.log(cur);
    return prev + cur;
}, 1);

console.log(sum);

