![profile](resource/profile.png)

## event loop
![profile](resource/event-loop.png)
    
    
    异步编程的4种方法
- 回调函数
- 事件监听
- 发布/订阅
- Promises对象

##setTimeout()参数
```js
function fn(a, b) {
    console.log('setTimout', a, b);
}
setTimeout(fn, 2000, 'aaa', 'bbb');  //setTimout aaa bbb
```

##如何继承
```js
function Parent() {
    this.name = 'aaa';
}
Parent.prototype.sayHello = function () {
    console.log('hello');
}
function Child() {}
```
```js
Child.prototype = new Parent();
Child.prototype.__proto__ = Parent.prototype;
Child.prototype = Object.create(Parent.prototype);
Object.setPrototypeOf(Child.prototype, Parent.prototype);
util.inherits(Child, Parent);  //node中使用 
```

## 一个关于原型的题目

```js
var Func = function(){};
Object.prototype.a = function(){};
Function.prototype.b = function(){};
var f = new Func();

f.a   //function(){}
f.b   //undefined
```

![profile](resource/prototype.png)

- instanceof运算符

    \<object\> instanceof \<constructor\>
    
    instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
    
    ```js
    Object instanceof Function  // true
    Function instanceof Object  // true
    Function instanceof Function // true
    Object instanceof Object      // true
    Func instanceof Function     // true
    Number instanceof Function //true
    Number instanceof Number  // false
    ```

