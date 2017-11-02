const s1 = Symbol.for('foo');
console.log(Symbol.keyFor(s1)); // "foo"

const s2 = Symbol('foo');
console.log(Symbol.keyFor(s2)); // undefined