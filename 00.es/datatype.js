console.log(undefined === null); // false
console.log(undefined == null);  // true

console.log(Boolean(' '));  // true
console.log(Boolean(''));   // false

console.log(Boolean(0));    // false
console.log(Boolean(NaN));  // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));  // false
console.log(Boolean(false));    // false

// undefined 和 null 没有toString()方法