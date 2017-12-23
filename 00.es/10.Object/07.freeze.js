function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person('od', 20);

console.log(Object.isFrozen(p));
p.gender = 'male';

console.log(p);

Object.freeze(p);
console.log(Object.isFrozen(p));

// p.hobbies = ['1', '2', '3'];
console.log(p);

p.name = 'zr';
console.log(p);

console.log(delete p.name);
console.log(p);

p.name = 'zr';
