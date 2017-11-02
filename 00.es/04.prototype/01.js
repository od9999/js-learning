
var Person = function (name, age) {
    this.name = name;
    this.age = age;
};
console.log(Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
let p = new Person('od', 13);

console.log(p.name);
console.log(p.age);
console.log('-------------');
