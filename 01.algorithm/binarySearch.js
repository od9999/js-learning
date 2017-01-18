// 二分查找

function binarySearch(arr, value) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middle = Math.floor((endIndex - startIndex) / 2);

    while (arr[middle] !== value && startIndex < endIndex) {
        if (arr[middle] > value) {
            endIndex = middle - 1;
        } else if (arr[middle] < value) {
            startIndex = middle + 1;
        }
        middle = Math.floor((endIndex + startIndex) / 2);

    }
    return (arr[middle] === value) ? middle : -1;
}

let arr = [1, 7, 6, -1, 9, 13];
console.log(binarySearch(arr, -7));