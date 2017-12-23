let thenable = {
    then(resolve, reject) {
        console.log(1);
        resolve('success');
    }
};

const promise = Promise.resolve(thenable);
console.log(2);
promise.then(data => {
    console.log(data);
});
console.log(3);
