function insertSort (arr) {
	let minIndex = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				minIndex = j;
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}

console.log(insertSort([4, 9, 10, 7, -4]));