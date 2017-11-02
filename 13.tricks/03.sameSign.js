/**
 * 判断两个数符号是否相同
 * 处理 +0 === -0为true的情况
 * 1 / +0 为Infinity
 * 1 / -0 为-Infinity
 * @param a
 * @param b
 */
const sameSign = (a, b) => (a === 0 && b === 0) ? (1 / a === 1 / b) : ((a ^ b) >= 0);

console.log(sameSign(1, -1));
console.log(sameSign(+0, -0));  // true
console.log(sameSign(-0, -0));  // true