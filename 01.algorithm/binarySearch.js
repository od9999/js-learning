/**
 * 二分查找
 * @param arr
 * @param value
 * @returns {number}
 */
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((end - start) / 2);

    while (arr[middle] !== value && start < end) {
        if (arr[middle] > value) {
			end = middle - 1;
        } else if (arr[middle] < value) {
			start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);

    }
    return (arr[middle] === value) ? middle : -1;
}

let arr = [1, 7, 6, -1, 9, 13];
console.log(binarySearch(arr, -7));
