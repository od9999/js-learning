/**
 * ++运算符 --运算符
 *
 */

// 如果是包含有效数字的字符串 先转成数字 然后加减1, 如果不包含有效数字 将变量值设置为NaN
var str = '1';
console.log(str++); // 1
console.log(str);   // 2
console.log(typeof str);    // number

var str2 = 'blue';
console.log(str2++); // NaN
console.log(str2);   // NaN
console.log(typeof str2);    // number


var bool = false;
console.log(bool++); // 0
console.log(bool);   // 1
console.log(typeof bool);    // number

var bool2 = true;
console.log(bool2++); // 1
console.log(bool2);   // 2
console.log(typeof bool2);    // number


// 如果是对象 先调用valueOf()以取得一个可供操作的值 然后再应用上面规则
// 如果结果是NaN 再调用toString() 把结果引用以上规则
var obj = {
    toString: function (){
        return '145';
    },
    valueOf: function() {
        return 13;
    }
};
console.log(obj++); // 13
console.log(obj);   // 14
console.log(typeof obj);    // number

var obj2 = {
    toString: function (){
        return 8;
    }
};
console.log(obj2++); // 8
console.log(obj2);   // 9
console.log(typeof obj2);    // number


console.log('-------------------------');

/**
 * ==运算符
 * 1. null == undefined  // true
 * 2. null 和 undefined不会转成其他值
 * 3. 两个是同一个对象 才返回true
 * 3. 只要有一个操作数是NaN 返回false
 * 4. 如果有一个是布尔值 先转成数值 false转成0 true转成1
 * 5. 如果有一个是字符串 另一个是数值 字符串先转成数值
 * 6. 如果有一个是对象 另一个不是 调用对象的valueOf(),把结果再进行前面规则比较
 */

console.log(null == undefined);     // true
console.log(false == null);   // false
console.log(false == '');     // true
console.log(NaN == false);    // false
console.log(undefined == false);    // false
console.log(null == false);    // false