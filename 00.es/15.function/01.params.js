const test = (obj) => {
    obj.c = 3;
    obj = {};
};

let obj = {
    a: 1,
    b: 2
};

test(obj);
console.log(obj);