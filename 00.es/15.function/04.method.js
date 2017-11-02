let od = {
    name: 'od',
    sayHello() {
        console.log(this.name);
    }
};

od.sayHello();


let sayHello = od.sayHello;

let ryan = {
    name: 'ryan'
};
sayHello.call(ryan);