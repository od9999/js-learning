const obj = {
    [Symbol.hasInstance](foo) {
        console.log('Symbol.hasInstance-----');
        return foo instanceof Array;
    }
};

console.log([1, 2, 3] instanceof obj);

class Even {
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}

console.log(1 instanceof Even); // false
console.log(2 instanceof Even); // true
console.log(12345 instanceof Even); // false
