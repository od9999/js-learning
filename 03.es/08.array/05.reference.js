let obj = {
	name: 'od'
};


let arr = [
	obj, 1, 3
];
console.log(arr);
arr[0].name = 'ryan';

console.log(arr);
console.log(obj);