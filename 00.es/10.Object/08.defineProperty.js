const object1 = {};

/**
 * 默认：
 * configurable
    当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
    默认为 false。
    enumerable
    当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
    enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
    默认为 false。
 */
Object.defineProperty(object1, 'property1', {
    // configurable: true,
    // enumerable: true,
    value: 1,
});

// 
/**
 * configurable为 false不允许再次defineProperty
 * Cannot redefine property: property1
 */
/*
Object.defineProperty(object1, 'property1', {
    // configurable: true,
    // enumerable: true,
    value: 2,
});
*/

console.log(object1.property1); // 1
// object1.property1 = 2;
console.log(object1.property1); // 1
console.log(Object.keys(object1));
for (let key in object1) {
    console.log(key);
}

// 如果一个描述符不具有 value、writable、get 和 set 中的任意一个键，那么它将被认为是一个数据描述符
Object.defineProperty(object1, 'property2', {
    // configurable: true,
    // enumerable: true,
    // value: 1,
});
console.log(object1.property2); // undefined

// 如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。
Object.defineProperty(object1, 'property3', {
    // configurable: true,
    // enumerable: true,
    value: 1,
    get() {
        return 3;
    }
});