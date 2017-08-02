const addPrivateProperty = (obj, name, predicate) => {
    let value;
    obj['get' + name] = () => value;
    obj['set' + name] = (v) => {
        if (predicate && !predicate(v)) {
            throw new Error(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
};

const obj = {};
addPrivateProperty(obj, 'Name', x => typeof x === 'string');

obj.setName('Ryan');
console.log(obj.getName());
// obj.setName(0);