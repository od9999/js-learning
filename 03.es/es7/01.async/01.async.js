const asyncFunc= async () => {
    return 'async func';
};

console.log(typeof asyncFunc);
console.log(asyncFunc.prototype);
console.log(asyncFunc.__proto__);
console.log(Object.prototype.toString.call(asyncFunc));
console.log(asyncFunc.constructor);
console.log(asyncFunc instanceof Function);


const bindAyncFunc = asyncFunc.bind(null);
console.log(bindAyncFunc);





