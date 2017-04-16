let obj = {
    name: 'od',
    sayHello: function() {
        console.log(this.name);
    }
};

let sayHello = obj.sayHello;
sayHello();

obj.sayHello();