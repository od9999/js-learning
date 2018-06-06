const isNaN = val => {
	return val !== val;
};

console.log(isNaN(NaN));
console.log(isNaN(1));
console.log(isNaN(null));
console.log(isNaN({}));
console.log(isNaN(Symbol(1)));
