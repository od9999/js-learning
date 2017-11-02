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
let symbol = Symbol('source2');
Object.defineProperty(source2, symbol, {
	enumerable: true,
	value: 'source2-symbol'
});


let source3 = {
	hobbies: {
		a: 'aaa',
		b: 'bbb',
		c: {
			e: 'eee',
			f: 'fff'
		}
	}
};

Object.assign(target, source1, source2, source3);

console.log(target);
console.log(target.sayHello === source1.sayHello);		// true
console.log(target.gender === source2.gender);			// true
console.log(target[symbol] === source2[symbol]);		// true
console.log(target.hobbies.c === source3.hobbies.c);	// true

source3.hobbies.c = {
	g: 'ggg source3'
};

console.log(target.hobbies.c);

target.hobbies.c = {
	g: 'ggg target'
};

console.log(source3.hobbies.c);