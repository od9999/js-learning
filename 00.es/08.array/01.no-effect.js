let arr = [5, -9, 18, 2, 0, 9];

// 不会影响原数组的方法
arr.concat();
arr.slice(1, 4);

console.log('----------------');

// es5方法
// 迭代方法 forEach filter map some every
// forEach不会返回新数组 其他都会返回新数组
// 参数1 callback(数组每一项, 元素位置, 数组本身) 参数2 callback的作用域对象
let arr4 = [5, -9, 18, 2, 0, 9];
arr4.forEach(function(item, index, array) {
    console.log(arr4 === array);    // true
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
}, 0);

console.log(sum);
