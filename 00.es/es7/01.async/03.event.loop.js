async function test() {
    console.log('async1');
    return 1;
};

test().then(data => {
    console.log(data);
});

console.log('script start');
