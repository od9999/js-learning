const isNaN = (val) => {
	return val != val;
};

console.log(isNaN(NaN));
console.log(isNaN(null));
console.log(isNaN({}));