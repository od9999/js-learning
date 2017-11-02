function* test(val) {
    console.log('1111111');
    var result1 = yield 'a';
    console.log(result1);
    console.log('222222');
    var result2 = yield 'b';
    console.log(result2);
    console.log('333333');
    return 'c';
    console.log('444444');
}

let result = test();  // 调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针
console.log(result);
console.log('-----------------');
console.log(result.next(11));  // 由于next方法的参数表示上一个yield语句的返回值，所以第一次使用next方法时，不能带有参数
console.log('-----------------');
console.log(result.next(22));
console.log('-----------------');
console.log(result.next(33));
console.log('-----------------');
console.log(result.next());
//
// var obj = {};
// obj[Symbol.iterator] = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// };
//
// for(val of obj){
//     console.log(val); // 不包含4
// }

