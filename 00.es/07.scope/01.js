let obj = {
    name: 'od',
    sayHello: function() {
        console.log(this.name);
    }
};
console.log(this);
let sayHello = obj.sayHello;
sayHello();

obj.sayHello();
