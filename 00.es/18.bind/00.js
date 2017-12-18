function Person(name) {
    this.name = name;
    console.log(this === global);
}

// console.log(new Person('Person'));
// console.log(Person('Person'));
// console.log(global.name);
// console.log('-------');

let context = {};
let PersonBind = Person.bind(context);
let personBind = PersonBind('PersonBind');
let newPersonBind = new PersonBind('newPersonBind');
console.log(personBind);
console.log(newPersonBind);
console.log('------');
// 
// let context2 = {};
// let PersonBind2 = PersonBind.bind(context2);
// let personBind2 = PersonBind2('PersonBind2');
// let newPersonBind2 = new PersonBind2('newPersonBind2');
// console.log(personBind2);
// console.log(newPersonBind2);
// console.log('------');
