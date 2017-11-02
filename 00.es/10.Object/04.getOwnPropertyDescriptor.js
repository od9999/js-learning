let obj1 = {
    x: 1
};

let obj2 = {
    x: 1,
    _y: 2,
    get y() {
        return this._y;
    },
    set y(value) {
        this._y = value;
    }
};

let obj3= {
    x: 1,
    _y: 2,
    set y(value) {
        this._y = value;
    }
};

let obj4 = {
    x: 1,
    _y: 2,
    get y() {
        return this._y;
    }
};

console.log(Object.getOwnPropertyDescriptor(obj1, 'x'));
console.log(Object.getOwnPropertyDescriptor(obj2, 'y'));
console.log(Object.getOwnPropertyDescriptor(obj3, 'y'));
console.log(Object.getOwnPropertyDescriptor(obj4, 'y'));


// 只能获取自身属性的描述符
let proto = {
    x: 1,
    y: 2
};
let obj5 = Object.create(proto);
console.log(Object.getOwnPropertyDescriptor(obj5, 'x'));