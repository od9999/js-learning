function Parent(name) {
	this.name = name;
}

Parent.prototype.sayHello = function () {
	console.log('hello');
};

function Child(name) {
	this.name = name;
}

Child.prototype = new Parent('od');
console.log(Child.prototype.constructor === Child);	// false
console.log(Child.prototype.constructor === Parent);	// true


Child.prototype.constructor = Child;
console.log(Child.prototype.constructor === Child);	// true

let c2 = new Child('zr');

console.log(c2.name); // zr
delete c2.name;
console.log(c2.name); // od




