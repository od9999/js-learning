var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1[i] = function () {
        console.log(i);
    };
}
arr1[6](); // 10


var arr2 = [];
for (var i = 0; i < 10; i++) {
    arr2[i] = (num => () => {
        console.log(num);
    })(i);
}

arr2[6](); // 6



var arr3 = [];
for (let i = 0; i < 10; i++) {
    arr3[i] = function () {
        console.log(i);
    };
}
arr3[3]();    // 3

var arr = ['one', 'two', 'three'];
for (var i = 0; i < arr.length; i++) {
	setTimeout(function () {
		console.log(arr[i]);     // undefined undefined undefined
	}, i * 1000);
}