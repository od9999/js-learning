function Person(name, age){
    console.log(Object.getPrototypeOf(this) === Person.prototype); // true
    this.name = name;
    this.age = age;
    // this = new Boolean(false);  // ReferenceError: Invalid left-hand side in assignment
    return new Boolean(false);
    this.gender = 'male';
}

let p = new Person('od', 23);
console.log(p);   // [Boolean: false]


function Person2(name, age){
    this.name = name;
    this.age = age;
    return Object.create(null);  // Person2.prototype不在对象的原型链上

}

let p2 = new Person2('od', 23);
console.log(p2);                // {}
console.log(p2 instanceof Person2);   // false