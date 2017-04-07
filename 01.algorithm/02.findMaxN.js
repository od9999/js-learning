/**
 * 找出数组arr中第n大的元素
 * 三种方法
 * 1.排序一遍数组，取第n个
 * 2.排序前n个 遍历剩下的 如果比第n个小 就忽略 否则 插入 并挤出一个元素
 * 3.快速的思想
 */

function getPivotIndex(arr, low, high) {
    let pivot = arr[low]; //这里每次的枢纽元素都取了待排数组的第一个元素，记住是a[low],而不是a[0]
    if(low < high) { //时间复杂度是O(n),n是数组长度
        while(arr[high] >= pivot && low < high) {
            high--;
        }
        arr[low] = arr[high];

        while(arr[low] <= pivot && low <high) {
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
function QuickSort_K_MAX (arr, low, high, k) {
    if(low >= high) {
        return arr[low];
    } else {
        let mid = getPivotIndex(arr, low, high); //划分子递归数组
        if(mid > k) {
            return QuickSort_K_MAX(arr, low, mid-1, k); //左递归
        } else if(mid < k) {
            return QuickSort_K_MAX(arr, mid + 1, high, k); //右递归，一旦右递归mid+1=high，将退化成冒泡，递归深度将变成n，n为数组长度
        } else {
            return arr[mid];
        }
    }

}
function findMaxK(arr, k) {
    return QuickSort_K_MAX(arr, 0, arr.length - 1, arr.length - k);
}

console.log(findMaxK([1, 4, -3, 9, 7], 5));


