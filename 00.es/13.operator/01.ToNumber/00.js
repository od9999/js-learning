/**
 *
 * input	result
 null	+0
 undefined	NaN
 number	不转换
 boolean	+0或1
 string	参照§7.1.3.1 http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber-applied-to-the-string-type
 symbol	TypeError
 object	ToNumber(ToPrimitive(input,Number))
 */
let data = [
    Number(null),
    Number(undefined),
    Number('123'),
    Number(''),
    Number(' 123 '),
    Number('a123')
];

for (item of data) {
    console.log(item);
}