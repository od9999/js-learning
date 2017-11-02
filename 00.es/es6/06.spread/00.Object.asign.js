let target = {
    a: 1,
    b: 2,
    c: 3
};

let obj = {
    a: 4,
    d: 5
};

console.log({ ...target, ...obj });