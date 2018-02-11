function MyNumber(x) {
    this.x = x;
}

MyNumber.prototype = new Number(1);

let myNumber = new MyNumber(2);
console.log(myNumber);
console.log(myNumber++);
/*
console.log(myNumber.__proto__);
console.log(Number.prototype);
console.log(new Number(1));

console.log(new Number(0) instanceof Number);
*/
