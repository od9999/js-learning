// "use strict";
console.log(this);
/*
根据es3和非严格的es5对函数调用(不是方法调用)规定，调用上下文是全局对象
严格模式下，调用上下文是undefined
 */
const strict = ((function () {
    console.log(this === global);
    return !this;
})());

console.log(strict);