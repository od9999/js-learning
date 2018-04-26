const sayHello = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 1000);
    });
};

const sayHi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hi');
        }, 1000);
    });
};

const test = async () => {
    console.log(111);
    let hello = await sayHello();
    console.log(hello);
    console.log(222);
    let hi = await sayHi();
    console.log(hi);
    console.log(333);
    return 'test';
};

console.log(typeof test);
console.log(test.prototype);
console.log('prototype' in test);
