class Person {
    get [Symbol.toStringTag]() {
        // 返回值必须是个字符串 否则忽略?
        return 'Person';
    }
}
console.log(Object.prototype.toString.call(new Person()));

const obj = {
    [Symbol.toStringTag]: '111'
};

console.log(Object.prototype.toString.call(obj));
