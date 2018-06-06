class Father {}

Father.a = 1;
Father.obj = {};
class Son extends Father {}
console.log(Son.a);
console.log(Son.obj === Father.obj);    // true

console.log('a' in Son);    // true
console.log(Son.hasOwnProperty('a'));   // false

console.log('obj' in Son);  // true
console.log(Son.hasOwnProperty('obj'));     // false