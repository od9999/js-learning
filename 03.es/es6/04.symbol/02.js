var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';
console.log(a[mySymbol]);

// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
console.log(a[mySymbol]);

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
console.log(a[mySymbol]);

// 以上写法都得到同样结果
console.log(a[mySymbol]); // "Hello!"

console.log(mySymbol in a);
console.log('mySymbol' in a);