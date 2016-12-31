let obj = {
    name: 'od',
    age: 23
};

console.log(obj.__proto__);  // {}
console.log(obj.__proto__ === Object.prototype);   // true
console.log(obj.__proto__.__proto__);  // null

console.log(Object.keys(obj.__proto__));
for(let prop in obj.__proto__) {
    console.log(prop);
}

console.log('---------------');
let arr = [1, 3, 4];
console.log(arr.__proto__);   // []
console.log(arr.__proto__ === Array.prototype);  // true
console.log(arr.__proto__.__proto__);  // {}
console.log(arr.__proto__.__proto__ === Object.prototype);  // true