/**
 * Math.random()返回[0, 1)间的一个随机小数
 */
console.log(Math.random());
console.log('----------------');

/**
 * 获取区间[start, end]间的一个整数
 */
const getRandomIntFromRange = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
};

for (let i = 0; i < 10; i++) {
    console.log(getRandomIntFromRange(3, 5));
}
