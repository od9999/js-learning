/**
 * 这些情况 都会尝试把对象转数字
 * 调用 Number() 函数，强制进行 Number 类型转换
 * 调用 Math.sqrt() 这类参数需要 Number 类型的方法
 * obj == 1 ，进行对比的时候
 * obj + 1 , 进行运算的时候
 */

/**
 * 大概的粗略的转换规则：(先valueOf后toString)
 * 如果 valueOf 方法存在并且返回原始类型，返回 valueOf 的结果。
 * 如果 valueOf 方法不存在或者返回的不是原始类型，调用 toString 方法，如果 toString 方法存在，并且返回原始类型数据，返回 toString 的结果。
 * 其他情况，抛出错误。
 */

const obj = {
    valueOf() {
        console.log('obj.valueOf-----');
        return '111';
    }
};
console.log(obj + 1);


const obj2 = {
    valueOf() {
        console.log('obj2.valueOf-----');
        return {};
    },
    toString() {
        console.log('obj2.toString-----');
        return 10;
    }
};
console.log(obj2 + 1);
