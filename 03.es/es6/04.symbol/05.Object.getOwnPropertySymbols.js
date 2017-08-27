let symbol1 = Symbol('symbol1');

let obj = {
    name: 'od',
    [symbol1](arg) {
        console.log(arg);
    },
    [Symbol('symbol2')]() {
        console.log(this.name);
    }
};

Reflect.defineProperty(obj, Symbol('symbol3'), {
    enumerable: false,
    value: 'symbol3'
});

// 获取对象自身的所有Symbol属性，不管是否可枚举
console.log(Object.getOwnPropertySymbols(obj));

for (symbol of Object.getOwnPropertySymbols(obj)) {
    console.log(symbol);
}