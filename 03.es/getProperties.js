
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log('hello ');
};

let person = new Person('od', 23);
Reflect.defineProperty(person, 'gender', {
    enumerable: false,
    value: 'male'
});

/**
 *  Object.getOwnPropertyNames(obj) 获取obj的属性 不管是否可枚举 不包括原型对象上的属性
 *  Object.keys(person) 获取obj的可枚举属性  不包括原型对象上的属性
 *  for in 获取obj上的可枚举属性 和obj原型对象的可枚举属性
 *  in 属性是否能够访问到属性 只要在原型链上就返回true
 */



console.log(Object.getOwnPropertyNames(person));  // [ 'name', 'age', 'gender' ]
console.log(Object.keys(person));   // [ 'name', 'age' ]

for(let prop in person) {
    console.log(prop);  // name age sayHello
}

console.log('toString' in person);  // true