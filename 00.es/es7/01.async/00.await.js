console.log(111);
const asyncTask = (data, millisecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, millisecond);
    });
};

const run = async () => {

    let task1Result = await asyncTask('task1', 1000);
    console.log(task1Result);

    setTimeout(() => {
        console.log('setTimeout');
    });

    // await把后面的转成promise对象
    let syncResult = await 'sync';
    console.log(syncResult);

    new Promise((resolve, reject) => {
        resolve('promise')
    }).then((data) => {
        console.log(data);
    });

    let task2Result = await asyncTask('task2', 1000);
    console.log(task2Result);
};

console.log(222);
run();
console.log(333);





