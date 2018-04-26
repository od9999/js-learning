function MyNumber(x) {
    this.x = x;
}

MyNumber.prototype = new Number(1);

let myNumber = new MyNumber(2);
console.log(myNumber);
console.log(myNumber.x);
// console.log(myNumber.valueOf());
// console.log(myNumber++);
/*
console.log(myNumber.__proto__);
console.log(Number.prototype);
console.log(new Number(1));

console.log(new Number(0) instanceof Number);
*/

class MyNumber2 extends Number {
    constructor(x) {
        super(x);
        this.x = x;
    }
}

let myNumber2 = new MyNumber2(3);
console.log(myNumber2);
console.log(myNumber2.x);
console.log(myNumber2.valueOf());
