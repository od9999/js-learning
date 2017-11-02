// 返回新的Promise 状态为Resolved
const p = Promise.resolve('success');

// 等价于
const p1 = new Promise(resolve => {
    resolve('success');
});
console.log(1);
p.then((data) => {
    console.log(data);
});
console.log(2);