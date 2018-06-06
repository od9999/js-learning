function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.obj = {};
function Student(name, age, gender) {
	Person.call(this, name, age);
	this.gender = gender;
}
Person.prototype.sayHello = function () {
	console.log("Hello, name: " + this.name + ' age: ' + this.age);
};

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Object.defineProperty(Child.prototype, 'constructor', {
		enumerable: false,
		value: Child
	});

	// 还有构造函数上的静态属性的继承  递归/for in 复制
	// mixin(Child, Parent);
	// 或者这样：
	Object.setPrototypeOf(Child, Parent);
}

function mixin(targetObj, sourceObj) {
    for (let key in sourceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}
extend(Student, Person);

let p = new Person('person', 21);
let s = new Student('student', 15, 'male');

console.log(Student.obj);
console.log(Student.obj === Person.obj);
p.sayHello();
s.sayHello();

console.log(p.constructor);		// Person
console.log(s.constructor);		// Student

console.log(p instanceof Person);	// true
console.log(s instanceof Person);	// true
console.log(s instanceof Student);	// true

module.exports = extend;