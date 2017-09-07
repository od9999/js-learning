/**
 * for in 获取obj上的可枚举属性 和obj原型链对象的可枚举属性, 不包括Symbol类型
 */
let symbol = Symbol.for('mySymbol');
const obj1 = {
    z: 'z',
    a: 1,
    [symbol]: 'symbolValue'
};

const obj2 = {
    b: 2,
    sayHello() {
        console.log('obj2');
    }
};

const obj3 = {
    c: 3
};

Reflect.defineProperty(obj1, 'name', {
    enumerable: false,
    value: 'unEnumerableValue'
});

Reflect.setPrototypeOf(obj1, obj2);
Reflect.setPrototypeOf(obj2, obj3);
console.log(Reflect.getPrototypeOf(obj1) === obj2);     // true
console.log(Reflect.getPrototypeOf(obj2) === obj3);     // true

// 顺序是
for (let key in obj1) {
    console.log(key);       // 'a' 'b' 'c'
}