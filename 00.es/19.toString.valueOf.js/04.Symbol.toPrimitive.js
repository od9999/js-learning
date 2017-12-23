const obj2 = {
    valueOf() {
        console.log('obj2.valueOf-----');
        return {};
    },
    toString() {
        console.log('obj2.toString-----');
        return 10;
    },
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

console.log(+obj2);
