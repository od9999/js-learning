function Person() {
    console.log(new.target);
}

Person();       // undefined
new Person();   // [Function: Person]

class Student {
    constructor() {
        console.log(new.target);
        // console.log(new new.target);    // Maximum call stack size exceeded
    }
}

const s = new Student();