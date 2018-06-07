console.log(111);
const asyncTask = (data, millisecond) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        resolve(data);
        // }, millisecond);
    });
};

const run = async () => {
    console.log(222);
    let task1Result = await asyncTask('task1', 1000);
    console.log(task1Result);

    setTimeout(() => {
        console.log('setTimeout');
    });

    // await把后面的转成promise对象
    let syncResult = await 'sync';
    console.log(syncResult);

    new Promise((resolve, reject) => {
        resolve('promise');
    }).then(data => {
        console.log(data);
    });

    let task3Result = await asyncTask('task3', 1000);
    console.log(task3Result);
    return '555';
};

console.log(333);
run().then(data => {
    console.log(data);
});
console.log(444);
new Promise(resolve => {
    resolve('promise2');
}).then(data => {
    console.log(data);
});