const isObject = val => (null !== val) && ('object' === typeof val) || ('function' === typeof val);

console.log(isObject(null));
console.log(isObject(() => {}));
console.log(isObject([]));
console.log(isObject(Object.create(null)));
