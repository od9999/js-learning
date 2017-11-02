function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person('od', 20);

console.log(Object.isSealed(p));
p.gender = 'male';

console.log(p);


Object.seal(p);
console.log(Object.isSealed(p));

p.hobbies = ['1', '2', '3'];
console.log(p);

p.name = 'zr';
console.log(p);

console.log(delete p.name);
console.log(p);

p.name = 'zr';