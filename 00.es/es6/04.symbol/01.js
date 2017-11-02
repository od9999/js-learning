let s1 = Symbol(false);
let s2 = Symbol('bar');

console.log(s1);
console.log(s2);

console.log(s1.toString());
console.log(s2.toString());

console.log(Boolean(s1));  // true
console.log(String(s1));
console.log(`this is symbol${s1}`);