/**
 * 用let const会报错
 */
var obj1 = {
    a: obj2
};

var obj2 = {
    a: obj1
};

console.log(obj1);
console.log(obj2);

function A() {}
function B() {}

console.log(A);
console.log(B);

var a = new A();
var b = new B();

a.b = b;
b.a = a;

console.log(a);
console.log(b);

// let a = {
//     a: 1,
//     b: {
//         a: a
//     }
// };
//
// console.log(a);