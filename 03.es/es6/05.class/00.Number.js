class MyNumber extends Number {
    constructor(val) {
        super();
        console.log(this);
        this.a = 1;
    }

}

let num = new MyNumber(111);
console.log(num);
for(let key in num) {
    console.log(key);
}