class Person {
    constructor() {}

    get name() {
        return 'getter';
    }
    set name(value) {
        console.log(`setter: ${value}`);
    }
}

let person = new Person();

person.name = 123;
// setter: 123

console.log(person.name);
// 'getter'

const descriptor = Object.getOwnPropertyDescriptor(Person.prototype, 'name');
console.log(descriptor);