const obj = new (function (name, age) {
    this.name = name;
    this.age = age;
})('od', 13);

console.log(obj);

console.log(obj.constructor);
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__ === Object.prototype);