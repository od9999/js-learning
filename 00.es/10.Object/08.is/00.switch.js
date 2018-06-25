// switch使用===判断
(value => {
    switch (value) {
        case NaN:
            console.log('case');
            break;
        default:
            console.log('default');
    }
})(NaN);

(value => {
    switch (value) {
        case +0:
            console.log('+0');
            break;
        case -0:
            console.log('-0');
            break;
        default:
            console.log('default');
    }
})(-0);