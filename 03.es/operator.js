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

