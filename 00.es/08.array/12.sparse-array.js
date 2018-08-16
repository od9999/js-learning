var arr = [1,2,3];
arr[10] = 9;
// 稀疏的部分 不会执行回调

console.log('filter=====');
const arrFilter = arr.filter((item, index) => {
    console.log('----');
    console.log(index);
    return item === undefined;
});
console.log('====');
console.log(arrFilter);

console.log('forEach=====');
arr.forEach((item, index) => {
    console.log('----');
    console.log(index);
    return item === undefined;
});


console.log('some=====');
arr.some((item, index) => {
    console.log('----');
    console.log(index);
    return item === undefined;
});

console.log('every=====');
arr.every((item, index) => {
    console.log('----');
    console.log(index);
    return item === undefined;
});

// find会执行回调？？？
console.log('find=====');
arr.find((item, index) => {
    console.log('----');
    console.log(index);
    index === 3 && (console.log('aaaa'));
    return item === undefined;
});
