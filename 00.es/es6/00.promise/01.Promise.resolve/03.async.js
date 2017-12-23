const promise = Promise.resolve((async () => {
    return 1;
})());
console.log(2);
promise.then(data => {
    console.log(data);
});
console.log(3);
