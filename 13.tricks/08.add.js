// 实现函数 得到以下效果
// add(1)(2) // 3
// add(1, 2)(3) //6
// add(1)(2, 3) //6
// add(1, 2)(3, 4) // 10

const add = (...argsOut) => (...argsIn) => [...argsOut, ...argsIn].reduce((prev, cur) => prev + cur, 0);

console.log(add(1)(2));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
console.log(add(1, 2)(3, 4));

// 在以上基础上 再实现一个效果：
// add(1)(2)(3)(4)(5) // 15


const add2 = function _add(...argsOut) {
    const fn = (...argsIn) => {
        return _add.apply(null, argsOut.concat(argsIn));
    };
    fn.valueOf = () => argsOut.reduce((prev, cur) => prev + cur, 0);

    return fn;
};

console.log('------');
const rs = add2(1)(2);
console.log(rs);
console.log(typeof rs);
console.log(rs + 3);


console.log(add2(1)(2));
console.log(add2(1, 2)(3));
console.log(add2(1)(2, 3));
console.log(add2(1, 2)(3, 4));
console.log(add2(1)(2)(3)(4)(5));
