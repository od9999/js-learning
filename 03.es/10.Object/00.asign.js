let target = {
	name: 'zr'
};

/**
 * Object.assign(target, ...sources)
 * target 目标对象
 * sources (多个)源对象
 * 如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
 * 只会拷贝源对象自身的并且可枚举的属性到目标对象身上
 */

let source1 = {
	name: 'od',
	sayHello: function() {
		console.log(this.name);
	}
};

let source2 = {
	age: 23
};
Object.defineProperty(source2, 'gender', {
	enumerable: true,	// 只会拷贝源对象自身的并且可枚举的属性到目标对象身上
	configurable: false,
	get: function() {
		return 'male';
	},
	set: function(value) {
		console.log('source2 gender set------------');
	}
});

Object.assign(target, source1, source2);

console.log(target);
console.log(target.sayHello === source1.sayHello);	// true
console.log(target.gender === source2.gender);	// true

