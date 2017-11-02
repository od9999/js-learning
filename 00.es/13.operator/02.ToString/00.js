/**
 * input	result
 null	‘null’
 undefined	‘undefined’
 number	参照§7.1.12.1  http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tostring-applied-to-the-number-type
 boolean	‘true’或’false’
 string	不转换
 symbol	TypeError
 object	ToString(ToPrimitive(input,String))
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