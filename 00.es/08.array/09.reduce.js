/**
 * arr.reduce(callback[, initialValue])
 */
const sum = [1, 2, 4, 5].reduce((sum , item, index, array) => {
    console.log('-----');
    console.log(`sum: ${sum}`);
    console.log(`item: ${item}`);
    console.log(`index: ${index}`);
    console.log(`array: ${array}`);
    return sum + item;
}, 0);
console.log(sum);

const sum2 = [1, 2, 4, 5].reduce((sum , item, index, array) => {
    console.log('=====');
    console.log(`sum: ${sum}`);
    console.log(`item: ${item}`);
    console.log(`index: ${index}`);
    console.log(`array: ${array}`);
    return sum + item;
});
console.log(sum2);

// 如果数组为空且没有提供initialValue
const sum3 = [].reduce((sum , item, index, array) => {
    console.log('~~~~~');
    console.log(`sum: ${sum}`);
    console.log(`item: ${item}`);
    console.log(`index: ${index}`);
    console.log(`array: ${array}`);
    return sum + item;
}, 0);
