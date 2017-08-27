let obj = {
    toString() {
        console.log('toString-----');
        console.log(this === obj);
        return {};
    },
    valueOf() {
        console.log('valueOf-----');
        console.log(this === obj);
        return 1;
    }
};

// console.log(Number(obj));
console.log(String(obj));