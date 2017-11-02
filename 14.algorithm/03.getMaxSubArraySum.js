// 求最大子数组
function getMaxSubArraySum(arr){
	if(arr.length === 0){
		return 0;
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

function getMaxSubArraySum2(arr){
	if(arr.length === 0){
		return 0;
	}
	let maxSum = 0;
	let thisSum = 0;

	for (let i = 0, length = arr.length; i < length; i++) {
		thisSum += arr[i];
		if (thisSum > maxSum) {
			maxSum = thisSum;
		}
		if (thisSum < 0) {
			thisSum = 0;
		}
	}
	return maxSum;
}


console.log(getMaxSubArraySum([1, 2, -1, 6, -1]));
console.log(getMaxSubArraySum2([1, 2, -1, 6, -1]));

console.log(getMaxSubArraySum2([-1,  5 , -3,  7,  -4]))