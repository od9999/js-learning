function bubbleSort(arr) {
    let temp = null;
    for(let i = 0, length = arr.length; i < length - 1; i++) {
        for(let j = i + 1; j < length; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;

console.log(bubbleSort([4, 9, 7, -4, 10]));