function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person('od', 20);

console.log(Object.isExtensible(p));
p.gender = 'male';

console.log(p);

// 一旦转成不可拓展的，就无法转回可拓展的了
// 通常配合属性的configurable和writable一起使用
Object.preventExtensions(p);
console.log(Object.isExtensible(p));

p.hobbies = ['1', '2', '3'];
console.log(p);

p.name = 'zr';
console.log(p);

console.log(delete p.name);
console.log(p);

p.name = 'zr';