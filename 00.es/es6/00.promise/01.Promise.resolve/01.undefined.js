const p = Promise.resolve();

console.log(1);
p.then(data => {
    console.log(data);
});
console.log(2);
