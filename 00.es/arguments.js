var outerFuncVar = function outerFunc(a, b) {
    var args = arguments;
    console.log(args.callee === outerFunc);      //true
    console.dir(args);          //  { '0': 'aaa', '1': 'bbb', '2': 'ccc' }
    var innerFunc = function () {
        console.dir(arguments); // { '0': 'ddd', '1': 'eee' }
    };
    innerFunc('ddd', 'eee');
};

outerFuncVar('aaa', 'bbb', 'ccc');


// arguments 对象是函数内部的本地变量；arguments 已经不再是函数的属性了。
console.log(outerFuncVar.arguments);   // null 不是undefined ???
console.log(outerFuncVar.name);         // outerFunc


