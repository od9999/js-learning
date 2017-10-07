/**
 * 缺点
 * 只能处理的对象: 只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。
 * 这会抛弃对象的constructor，也就是深复制之后，无论这个对象原本的构造函数是什么，在深复制之后都会变成Object。
 * 另外诸如RegExp对象是无法通过这种方式深复制的。
 * @param obj
 */
const deepCopy = obj => JSON.parse(JSON.stringify(obj));

console.log(deepCopy({
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: {
            f: 4
        }
    }
}));

class Person {}
const p = new Person();
console.log(p.constructor); // [Function: Person]
const pCopy = deepCopy(p);
console.log(pCopy.constructor); // [Function: Object]

class A {}
class B {}

const a = new A();
const b = new B();
a.b = b;
b.a = a;

console.log(a);
console.log(b);

console.log(deepCopy(a));   // TypeError: Converting circular structure to JSON
console.log(deepCopy(b));



