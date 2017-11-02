let obj1 = {
    toString() {
        console.log('toString-----');
        console.log(this === obj1);
        return false;
    },
    valueOf() {
        console.log('valueOf-----');
        console.log(this === obj1);
        return {};
    }
};
console.log(Number(obj1));


console.log('-----');
let obj2 = {
    toString() {
        console.log('toString-----');
        console.log(this === obj2);
        return {};
    },
    valueOf() {
        console.log('valueOf-----');
        console.log(this === obj2);
        return null;
    }
};

console.log(String(obj2));