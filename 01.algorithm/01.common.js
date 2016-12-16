// 判断一个单词是否是回文？
function isPalindrom(str) {
    return str == str.split('').reverse().join('');
}

console.log(isPalindrom('mamam'));
console.log(isPalindrom('redivider'));


// 去掉一组整型数组重复的值
/**
 *比如输入: [1,13,24,11,11,14,1,2]
  输出: [1,13,24,11,14,2]
  需要去掉重复的11 和 1 这两个元素。
 */

let unique = function(arr) {
    let hashTable = {};
    let data = [];
    for(let i = 0, length = arr.length;i < length; i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
};
let unique2 = function(arr) {
    return Array.from(new Set(arr));
};
console.log(unique([1,13,24,11,11,14,1,2]));
console.log(unique2([1,13,24,11,11,14,1,2]));

// 统计一个字符串出现最多的字母
// 输入 ： afjghdfraaaasdenas
// 输出 ： a
function getMaxDuplicateChar(str) {
    if(str.length == 1) {
        return str;
    }
    let charObj = {};
    let maxChar = '';
    let maxValue = 1;
    for(let i = 0, length = str.length; i < length; i++) {
        let key = str.charAt(i);
        if(!charObj[key]) {
            charObj[key] = 1;
        } else {
            charObj[key] += 1;
        }
        if(charObj[key] > maxValue){
            maxValue = charObj[key];
            maxChar = key;
        }
    }

    return maxChar;
}
console.log(getMaxDuplicateChar('afzzzzzzzzzzjghdfraazzzzzzzzzzzzaasdenas'));

// 求最大子数组
function getMaxSubArray(arr){
    if(arr.length === 0){
        return [];
    }
    let cur = 0;
    let max = -Infinity;
    for (let i = 0, length = arr.length; i < length; i++) {
        cur += arr[i];
        max = Math.max(max, cur);
        cur = (cur < 0) ? 0 : cur;
    }
    return max;

}


console.log(getMaxSubArray([1, 2, -1, 6, -1]));


