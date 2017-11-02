let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

console.log(s1 === s2); // true

// Symbol.for()会被登记在全局环境中供搜索
console.log(Symbol.for('bar') === Symbol.for('bar'));  // true
console.log(Symbol('bar') === Symbol('bar'));   // false


