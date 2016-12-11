let arr = [1, 2, 3];

let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);
[a, b] = [b, a];
console.log(a);
console.log(b);