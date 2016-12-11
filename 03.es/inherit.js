//-----------------------------------------------
//继承的方法

function Parent(name) {
    this.name = name;
}

Parent.prototype.sayHello = function () {
    console.log('hello');
};

function Child() {}
//原型链继承
let p = new Parent('父类');
// Child.prototype = p;
// Child.prototype = Object.create(Parent.prototype);

Child.prototype.__proto__ = Parent.prototype;


// Object.setPrototypeOf = function (childPrototype, superPrototype) {
//     childPrototype.__proto__ = superPrototype;
//     return childPrototype;
// };

//Object.setPrototypeOf(Child.prototype, Parent.prototype);
//node中使用util模块:
//util.inherits(Child, Parent); //子类继承父类的原型上的方法

var c = new Child();
// console.log(c.__proto__);  // 什么情况???
// console.log(Child.prototype);  // 什么情况???

console.log(c.__proto__ === Child.prototype);
console.log(Child.__proto__ === Function.prototype);  // true
console.log(Parent.__proto__ === Function.prototype);  // true
console.log(Object.getPrototypeOf(c) === p);

console.log(Child.prototype.__proto__ === Parent.prototype);
