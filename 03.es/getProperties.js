function Animal() {
    this.type = 'animal';
}
Animal.prototype.run = function(){
    console.log('Animal run');
};


function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = function() {};
}
Person.prototype = new Animal();

Person.prototype.sayHello = function(){
    console.log('Person hello ');
};

let person = new Person('od', 23);
Reflect.defineProperty(person, 'gender', {
    enumerable: false,
    value: 'male'
});

/**
 *  Object.getOwnPropertyNames(obj) 获取obj的属性 不管是否可枚举 不包括原型对象上的属性
 *  Object.keys(person) 获取obj的可枚举属性  不包括原型对象上的属性
 *  for in 获取obj上的可枚举属性 和obj原型链对象的可枚举属性
 *  in 属性是否能够访问到属性 只要在原型链上就返回true
 */
console.log(Object.getOwnPropertyNames(person));  // [ 'name', 'age', 'sayHi', 'gender' ]
console.log(Object.keys(person));   // [ 'name', 'age', 'sayHi' ]

console.log('----for in--------');
for(let prop in person) {
    console.log(prop);  // name age sayHi type sayHello run
}
console.log('------------');

console.log('toString' in person);  // true
console.log(person.hasOwnProperty('gender'));  // true
console.log(person.gender);  // male
console.log('gender' in person);  // true