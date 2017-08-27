let s = Symbol();

let obj = {
    name: 'od',
    [s](arg) {
        console.log(arg);
    },
    [Symbol('mySymbol')]() {

    }
};

obj[s](123);

console.log(s in obj);

// 拿不到s
for (let key in obj) {
    console.log(key);
}
