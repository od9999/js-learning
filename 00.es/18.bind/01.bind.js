function Person(name, age) {
    this.name = name;
    this.age = age;
}

let obj = {};
let bind = Person.bind(obj);
console.log(bind('od', 13));
console.log(obj);

console.log(bind.prototype === Person.prototype);
console.log(bind.prototype);
