
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        resolve('success');
    }, 1000);
});

// 如果参数是个promise对象 原封不动地返回这个对象
const p = Promise.resolve(promise);
console.log(p === promise);     // true

p.then((data) => {
    console.log(data);
});
