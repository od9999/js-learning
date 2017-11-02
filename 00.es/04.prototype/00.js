function Person() {}
let p = new Person();

console.log(Person.constructor === Function);	// true
console.log(Person.prototype.constructor === Person);	// true
console.log(Person.prototype.__proto__ === Object.prototype);	// true
console.log(Function.prototype === Function.__proto__);		// true