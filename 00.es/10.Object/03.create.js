let proto = {
    x: 1,
    y: 2
};

let obj = Object.create(proto);
console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
console.log(obj.__proto__);
console.log('-------');
obj.x = 3;
obj.y = 4;

console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
console.log(obj.__proto__);