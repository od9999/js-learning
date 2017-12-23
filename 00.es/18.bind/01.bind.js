function Person(name, age) {
    this.name = name;
    this.age = age;
}

let obj = {};
let bind = Person.bind(obj);

console.log(bind.prototype === Person.prototype);   // false
console.log(bind.prototype);    // undefined
let bingObj = new bind('zr', 22);
console.log(bingObj.__proto__);
console.log(bingObj.__proto__ === Person.prototype);    // true
