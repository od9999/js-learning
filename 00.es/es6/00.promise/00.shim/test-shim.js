var Promise = require('./00.promise');

function getUserId(value) {
    return new Promise(function (resolve) {
        console.log(111);
        setTimeout(function () {
            resolve(value);
        }, 1000);

        // resolve(value); //如果是同步代码
    });
}

var p = getUserId('aaa');
p.then(function (data) {
    console.log('then 111');
    console.log(data);
}).then(function (data) {
    console.log('then 222');
    console.log(data);
});
