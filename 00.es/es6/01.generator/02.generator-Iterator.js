
let obj = {};
obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
};

for(val of obj){
    console.log(val); // 不包含4
}

console.log([...obj]);