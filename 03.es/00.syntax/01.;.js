/**
 * js不是在所有换行处都填补分号
 * 只有在缺少了分号就无法正确解析代码的时候,js才会填补分号
 *
 */


/**
 * 解析为var a; a = 3; console.log(a);
 *
 */
var a
a
	=
	3
console.log(a)

var x = 1;
var f = 2;
var b = 3;

/**
 * 解析为var y = x + f(a + b).toString(), 报错
 */
var y = x + f
	(a + b).toString()


/**
 * 2个例外：
 * (1)遇到以return、break、continue结束的语句，不会补;
 * return
 * true;
 * 解析为return; true;
 *
 * (2)如果++ --用做后缀操作符，应该与表达式在同一行，否则将成为下一行的前缀操作符
 * x
 * ++
 * y
 * 解析为x; ++y 而不是x++; y
 *
 */
