//-----------------------------------------------
//继承的方法

function Parent() {
    this.name = 'aaa';
}

Parent.prototype.sayHello = function () {
    console.log('hello');
};

function Child() {}
//原型链继承

//Child.prototype = new Parent();
//Child.prototype.__proto__ = Parent.prototype;
//Child.prototype = Object.create(Parent.prototype);

Object.setPrototypeOf = function (cprop,superprop) {
    cprop.__proto__ = superprop;
    return cprop;
};
//Object.setPrototypeOf(Child.prototype,Parent.prototype);
//node中使用util模块:
//util.inherits(Child,Parent); //子类继承父类的原型上的方法
var child = new Child();
