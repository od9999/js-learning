let s = Symbol('s');
console.log(s);
console.log(typeof s);  // 'symbol'
console.log(s instanceof Object);       // false
console.log(s instanceof Symbol);       // false
console.log(Object.prototype.toString.call(s)); // '[object Symbol]'

console.log('Symbol' in global);