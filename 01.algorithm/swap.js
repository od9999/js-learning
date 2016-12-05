// 不借助临时变量，进行两个整数的交换
// eg: 输入 a = 2, b = 4 输出 a = 4, b =2

// 主要是利用 + – 去进行运算，类似 a = a + ( b – a) 实际上等同于最后 的 a = b;


function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}

module.exports = swap;

console.log(swap(1, -3));