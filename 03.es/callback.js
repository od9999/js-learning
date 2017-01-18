function test() {
    console.log(name);
}

setTimeout(function() {
    let name = 1;
    console.log(name);
    test();
});