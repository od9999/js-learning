let target = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        a: 4
    }
};

console.log(target);
// 浅拷贝
let result = Object.assign(target, {
    a: 5,
    c: {
        d: 6,
        a: {
            e: 1
        }
    }

});
console.log(result);
console.log(result === target);