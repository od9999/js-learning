const isInt = x => (x ^ 0) === x;

console.log(isInt(1.2));    // false
console.log(isInt(1));      // true
console.log(isInt(1.0));    // true
console.log(isInt(-1));    // true
