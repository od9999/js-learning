//函数式编程

/**
 * 1.纯函数
 * 纯函数无副作用，仅仅依赖于函数的输入，并且当输入相同时输出保持一致
 */

// 纯函数
const add10 = (a) => a + 10;

// 依赖于外部变量的非纯函数
let x = 10
const addx = (a) => a + x;

// 会产生副作用的非纯函数
const setx = (v) => x = v;

/**
 * 2.函数组合
 */
const add1 = (a) => a + 1;
const times2 = (a) => a * 2;
const compose = (a, b) => (c) => a(b(c));
const add1OfTimes2 = compose(add1, times2);
console.log(add1OfTimes2(5)); // 11



// 作者：范洪春
// 链接：https://zhuanlan.zhihu.com/p/20824527
//     来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。