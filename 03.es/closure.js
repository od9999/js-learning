var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1[i] = function () {
        console.log(i);
    };
}
arr1[6](); // 10


var arr2 = [];
for (var i = 0; i < 10; i++) {
    arr2[i] = (function(num){
        return function () {
            console.log(num);
        };
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