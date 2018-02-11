const obj = {};
console.log(obj.valueOf() === obj);     // true

const arr = [];
console.log(arr.valueOf() === arr);     // true

console.log(obj.toString());    // [object Object]
console.log(arr.toString());    // ''

console.log(new Promise((resolve, reject) => {
}).toString());
