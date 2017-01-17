let person = {
    name: 'od',
    age: 13
};

let proxy = new Proxy(person, {
    get: function (target, key, receiver) {
        console.log(target);
        console.log(`getting ${key}!`);

        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(target);
        console.log(`setting ${key}!`);

        return Reflect.set(target, key, value, receiver);
    }
});

proxy.count = 1;
console.log('---------');
console.log(proxy.count);

console.log('-------------------');
var handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function(target, thisBinding, args) {
        return args[0];
    },

    construct: function(target, args) {
        return {value: args[1]};
    }
};

var fproxy = new Proxy(function(x, y) {
    return x + y;
}, handler);

console.log(fproxy(1, 2)); // 1
console.log(new fproxy(1,2));  // {value: 2}
console.log(fproxy.prototype === Object.prototype);  // // true
console.log(fproxy.foo); // "Hello, foo"

