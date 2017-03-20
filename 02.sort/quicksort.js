// http://math.hws.edu/eck/jsdemo/sortlab.html 排序演示

const quickSort = (function func(arr){
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    for(let i = 1, length = arr.length; i < length; i++){
        if(arr[i] > pivot){
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    return [].concat(func(leftArr), [pivot], func(rightArr));
});

console.log(quickSort2([4, 9, 7, -4, 10]));