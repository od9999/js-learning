function test() {
    console.log(name);
}

setTimeout(function() {
    var name = 1;
    console.log(name);
    test();

});