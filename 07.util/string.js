function parseNumber(str) {
	if(Object.prototype.toString.call(str) !== "[object String]") {
		throw new TypeError('传入参数必须是字符串');
	}
	return str.replace(/[^\d]/ig, '').replace(/^0*/g ,'');
}


console.log(getNumber('DAw啊啊啊00012adwadadwa1313'));
console.log(getNumber('DAw00012adwadadwa1313'));
console.log(getNumber(''));
console.log(getNumber(123));
console.log(getNumber(0123));

