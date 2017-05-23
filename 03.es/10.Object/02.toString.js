let obj1 = {};
let obj2 = {
    toString: function() {
        return 'obj2';
    }
};

let obj3 = {
    toString: 'obj3'
};

let obj4 = Object.create(null);


console.log(obj1 + '111');   // [object Object]111
console.log(obj2 + '111');   // obj2111
console.log(obj3 + '111');   // TypeError: Cannot convert object to primitive value
console.log(obj4 + '111');   // TypeError: Cannot convert object to primitive value

