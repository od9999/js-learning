/**
 * parseInt(string, radix);
 * 把进制为radix的字符串string转成10进制的数字
 */
console.log(parseInt('11', 2));     // 3


/**
 * numObj.toString([radix])
 * 把数字对象numObj转成基数为radix的字符串表示
 */
let result = (3).toString(2);
console.log(result);            // '11'
console.log(typeof result);

console.log(14 ^ 9);    // 7
console.log(0b1 ^ 0);
console.log(0b11 ^ 0);