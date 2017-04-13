function* gen(initData) {
    var result1 = yield task1(initData);
    var result2 = yield task2(result1);
}

function task1(data) {
    setTimeout(() => {
        console.log('task1----------------');
        let a = 1;
        let result1 = data + a
        console.log(result1);
        g.next(result1);
    }, 1000);
}

function task2(data) {
    setTimeout(() => {
        console.log('task2----------------');
        let b = 1;
        let result2 = data + b;
        console.log(result2);
        g.next(result2);
    }, 2000);
}

let g = gen(1);
g.next();