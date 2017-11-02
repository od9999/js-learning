let person = {
    age: 13,
    name: 'od',
    set intro(value) { // setter只能有一个参数
        this.name = value.name;
        this.age = value.age;
    },
    get intro() {
        return this.name + ' ' + this.age;
    }
};

console.log(person.intro);
person.intro = {
    name: 'zr',
    age: 25
};
console.log(person.intro);