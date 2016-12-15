// http://math.hws.edu/eck/jsdemo/sortlab.html 排序演示

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let pivot = arr[0];
    for(let i = 1, length = arr.length; i < length; i++) {
        if(arr[i] > pivot) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }

    return Array.prototype.concat(quickSort(leftArr), [pivot], quickSort(rightArr));
}

module.exports = quickSort;

console.log(quickSort([4, 9, 7, -4, 10]));