const p1 = new Promise(resolve => {
    return resolve(1);
});

const p2 = new Promise(resolve => {
    return resolve(2);
});

const p3 = new Promise(resolve => {
    return resolve(3);
});

const all = Promise.all([p1, p2, p3]);
all.then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
