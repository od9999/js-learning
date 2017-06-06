function getUserId(value) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            console.log('getUserId---');
            resolve(value);
        }, 2000);
    });
}

getUserId('aaa')
    .then(getUserJobById('bbb'))
    .then(function (data) {
        console.log(arguments);
        // 对job的处理
    });

function getUserJobById(value) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('getUserJobById---');
            resolve(value);
        }, 1000);
    });
}