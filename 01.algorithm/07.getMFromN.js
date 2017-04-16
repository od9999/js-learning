/**
 * 从数组arr中找到m个元素 和为k
 */
function getMFromN(arr, m, K) {
	let forObj = {};
	for(let i = 0; i < K; i++) {
		forObj['k' + i] = i;

	}
	for(let i = 0; i < arr.length - K; i++) {
		for(let j = i + 1; j < arr.length - K + 1; j++) {

		}
	}
}

console.log(getMFromN([1, 2, 3, 6, 8, 9], 3));