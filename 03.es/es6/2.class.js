/**
 * 1.类的所有方法都定义在类的prototype属性上面(与es5一致),
 * 都是不可枚举的(与es5不一致)
 *
 * 2.必须使用new调用 否则报错(与es5不一致)
 *
 * 3.不存在变量提升(与es5不一致)
 *
 * 4.不支持私有方法,可以通过2种方法实现：
 * (1).方法移到class外 通过共有方法xxx.call(this, args)调用
 * (2).使用Symbol实现
 *
 * 5.类的方法内部如果含有this,它默认指向类的实例
 *
 * 6.name属性总是返回紧跟在class关键字后面的类名。
 */
class Person {
    // 如果不写, 自动添加一个空的constructor方法
    constructor(name, age) {
        console.log(this.__proto__ === Person.prototype);   // true
        console.log('运行时this:' + (this.__proto__ === Person.prototype));  // 运行时this:true
        this.name = name;
        this.age = age;

        // 如果将getPosition方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到getPosition方法而导致报错。
        // 一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到getPosition方法了。
        this.sayHello = this.sayHello.bind(this);
    }

    // 在Point.prototype上
    sayHello(){
        return `hello I'm ${this.name}, ${this.age} year old`;
    }
}

let p = new Person('od', 23);

console.log(p.sayHello());

console.log(p.__proto__);
console.log(Person.prototype);

console.log(Person.prototype.constructor === Person);   // true
console.log(p.__proto__ === Person.prototype);           // true
console.log(Person.__proto__ === Function.prototype);  // true
console.log(p.constructor === Person.prototype.constructor);     // true

// let p2 = Person(5, 40);  // TypeError: Class constructor Person cannot be invoked without 'new'

const Person2 = class P2{};
console.log(Person2.name);  // P2

/**
 * ES5的继承,实质是先创造子类的实例对象this,然后再将父类的方法添加到this上面（Parent.apply(this)）。
 * ES6的继承机制完全不同,实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
 */
class Student extends Person {
    /**
     * 如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
     * constructor(...args) {
     *     super(...args);
     * }
     */
    constructor(name, age, gender) {
        // 子类必须在constructor方法中先调用super方法,否则新建实例时会报错,
        // 这是因为子类没有自己的this对象,而是继承父类的this对象
        // console.log(this.__proto__ === Student.prototype);  // ReferenceError: this is not defined
        super(name, age); // false 运行时this:false
        this.gender = gender;
    }
}

let s = new Student('od', 23, 'male');
console.log(s);