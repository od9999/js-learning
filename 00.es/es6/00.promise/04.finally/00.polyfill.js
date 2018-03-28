Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason;
        })
    );
};
new Promise((resolve, reject) => {
    // resolve(1);
    reject(new Error('my error'));
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});
console.log(Promise.prototype.finally);
