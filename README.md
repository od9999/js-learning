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
