let options = {
    a: 1,
    b: 2
};

function test({a, b}) {
    console.log(a);
    console.log(b);
    console.log(arguments);
}


test(options);