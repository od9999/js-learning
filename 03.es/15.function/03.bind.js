function Person() {
    this.age = 24;
    console.log(this);
}
let thisValue = {
    name: 'od'
};

let p = new Person();
console.log(p);
console.log(Person.prototype === p.__proto__);

const bindPerson = Person.bind(thisValue);

console.log(bindPerson.prototype);  // undefined
let p2 = new bindPerson();
console.log(p2);
console.log(p2.__proto__ === Person.prototype);   // true