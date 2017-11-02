let toPrimitive = Symbol.toPrimitive;
console.log(toPrimitive);

const PreferredType = {
    NUMBER: 'number',
    STRING: 'string',
    DEFAULT: 'default'
};

let obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case PreferredType.NUMBER:
                console.log('number-----');
                return 123;
            case PreferredType.STRING:
                console.log('string-----');
                return 'str';
            case PreferredType.DEFAULT:
                console.log('default-----');
                return 'default';
            default:
                console.log('error-----');
                throw new Error();
        }
    }
};

console.log(2 * obj);   // 246
// console.log(3 + obj);  // '3default'
// console.log(obj == 'default');  // true
// console.log(String(obj));   // 'str'