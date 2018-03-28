// 发起请求
const request = new Promise(resolve => {
    console.log('request...');
    setTimeout(() => {
        resolve({
            errno: 0,
            errmsg: 'success',
            data: {
                a: 1
            }
        });
    }, 5000);
});

Promise.race([
    request,
    new Promise(resolve => {
        setTimeout(() => {
            resolve('timeout');
        }, 3000);
    })
]).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
