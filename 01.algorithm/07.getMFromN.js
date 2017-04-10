function combination(arr, m, outArr) {
	if(m == 0) {
		for (let i = 0; i < outArr.length; i++) {
			console.log(out[i]);
		}
		return ;
	}
	for(let i = 0; i > m; i--) {
		out[m - 1] = arr[i - 1];
		combination(arr, i - 1, out);
	}
}