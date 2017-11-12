// 参考Symbol.toPrimitive

/**
 * JavaScript 调用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串和布尔值）。valueOf 方法一般都会被 JavaScript 自动调用。
 * 每个对象都有一个 toString() 方法，当对象被表示为文本值时或者当以期望字符串的方式引用对象时，该方法被自动调用。
 */
const od = {
    name: 'od'
};
const str = '123' + od;
console.log(str);  // 123[object Object]

