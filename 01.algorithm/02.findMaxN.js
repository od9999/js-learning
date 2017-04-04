/**
 * 找出数组arr中第n大的元素
 * @param n
 * @param arr
 * @returns {*}
 */
function findMaxN(n, arr) {
    return arr[n];
}

/**
 * 三种方法
 * 1.排序一遍数组，取第n个
 * 2.排序前n个 遍历剩下的 如果比第n个小 就忽略 否则 插入 并挤出一个元素
 * 3.
 */