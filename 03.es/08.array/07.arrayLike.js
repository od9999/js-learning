function isArrayLike(obj) {
    let length = obj.length;
    return (obj && typeof obj === 'object' && isFinite(length) && length >= 0
        && length === Math.floor(length) && length < Math.pow(2, 32));
}

const obj1 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

console.log(isArrayLike(obj1));