/**
 * 二分查找
 * @param arr
 * @param value
 * @returns {number}
 */
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = 0;

    while (start <= end) {
        middle = Math.floor((end - start) / 2);
        if (arr[middle] > value) {
			end = middle - 1;
        } else if (arr[middle] < value) {
			start = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let arr = [1, 7, 6, -1, 9, 13];
console.log(binarySearch(arr, 7));
console.log(binarySearch([1], 1));
