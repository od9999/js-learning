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

function test() {
    console.log(arguments);
    console.log(Array.isArray(arguments));
    console.log(Array.from(arguments));
    console.log(Array.of(arguments));
}
test(1, 2, 3);
