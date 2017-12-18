function test() {

}
test.staticProp = 'static';

console.log(test.prototype);
console.log(Object.keys(test));

test.prototype = {
	a: 111
};
console.log(Object.keys(test));

// Object.defineProperty(test, 'prototype', {
// 	enumerable: true,
// 	value: {
// 		a: 222
// 	}
// });
console.log(Object.keys(test));
