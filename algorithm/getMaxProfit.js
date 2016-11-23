// 找出下列正数组的最大差值

// 输入 [10,5,11,7,8,9]
// 输出 6

function getMaxProfit(arr) {
    let minPrice = arr[0];
    let maxProfit = 0;

    for (var i = 0; i < arr.length; i++) {
        var currentPrice = arr[i];

        minPrice = Math.min(minPrice, currentPrice);
        var potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}
console.log(getMaxProfit([10,5,11,7,8,9]));

function getMaxProfit2(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    console.log(min);
    console.log(max)


    return max - min;
}
console.log(getMaxProfit2([10,5,11,7,8,9]));


module.exports = getMaxProfit;