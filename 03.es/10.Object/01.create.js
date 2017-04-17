

/**
 * proto 一个对象，应该是新创建的对象的原型。
 * propertiesObject 可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符
 （这些属性描述符的结构与Object.defineProperties()的第二个参数一样）。
 注意：该参数对象不能是 undefined，另外只有该对象中自身拥有的可枚举的属性才有效，
 也就是说该对象的原型链上属性是无效的。
 * @type {obj}
 */
let o = Object.create(null);

// 创建一个原型为null的空对象
console.log(o.__proto__ === null);	// false
console.log(o.__proto__ === undefined);	// true

o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
	// foo会成为所创建对象的数据属性
	foo: {
		writable: true,
		configurable: true,
		value: "hello"
	},
	// bar会成为所创建对象的访问器属性
	bar: {
		configurable: false,
		get: function() {
			return 10;
		},
		set: function(value) {
			console.log("Setting `o.bar` to", value);
		}
	}
});
console.log(o.foo);
console.log(o.bar);
o.bar = 13;
console.log(o.bar);