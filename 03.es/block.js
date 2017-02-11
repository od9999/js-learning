function sleep(millisecond) {
	let start = new Date();
	while(new Date() - start <= millisecond) {

	}
}

console.log(1);
sleep(2000);
console.log(2);