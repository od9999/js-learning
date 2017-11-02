console.log(11);
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(11);
    }, 1000);
});

console.log(22);
p.then((data) => {
    console.log(data);
});
p = null;

console.log(33);