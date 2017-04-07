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

/**
 * 箭头函数有几个使用注意点。
 （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
 （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
 * @param a
 */
var arrow = a => a + 1;
console.log(arrow.prototype);   // undefined

let obj = {
    getThis: function () {
        return this;
    },

    // 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    getThisArrow: () => this
};

console.log(obj.getThis() === obj);         // true
console.log(obj.getThisArrow() === obj);    // false
console.log(obj.getThisArrow() === this);    // true, 浏览器中是window

console.log('------------');
let obj2 = {
    name: 'od',
    getName: function () {
        return this.name;
    },

    // 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    getNameArrow: () => this.name
};

console.log(obj2.getName());        // od
console.log(obj2.getNameArrow());   // undefined


