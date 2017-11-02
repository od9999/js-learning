var Person = function (age) {
	return new Person.prototype.init(age);
};

Person.prototype = {
	constructor: Person,
	init: function (age) {
		this.age = age;
		return this;
	}
};

Person.prototype.init.prototype = Person.prototype;

let p1 = new Person(11);
let p2 = new Person(22);
console.log(p1 === p2);

console.log(p1.age);
console.log(p2.age);
