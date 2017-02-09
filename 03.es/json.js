
/**
 * value
 * replacer: 数组 或者 替换函数
 * space: 空格 或者 前缀
 */
// JSON.stringify(value,replacer,space)

let obj = {
    name: 'od',
    age: 13,
    hobbies: [
        'swimming', 'sports'
    ],
    son: {
        name: 'od son',
        hobbies: [
            'running', 'sports'
        ]
    }
};

let objStr1 = JSON.stringify(obj);
console.log(objStr1);
console.log('------------------');

let objStr2 = JSON.stringify(obj, ['name', 'hobbies']);
console.log(objStr2);
console.log('------------------');

let objStr3 = JSON.stringify(obj, function(key, value) {
    switch (key) {
        case 'name':
            return 'zrrrrr';
        case 'hobbies':
            return undefined;  //返回undefined 会忽略该值
        default:
            return value;
    }
});
console.log(objStr3);
console.log('------------------');

let objStr4 = JSON.stringify(obj, null, 4);
console.log(objStr4);
console.log('------------------');

let objStr5 = JSON.stringify(obj, null, '--');
console.log(objStr5);
console.log('------------------');

console.log(JSON.stringify(new Date()));
console.log(new Date().toISOString());
console.log('------------------');

let obj2 = {
    name: 'od',
    age: 13,
    hobbies: [
        'swimming', 'sports'
    ],
    son: {
        name: 'od son',
        hobbies: [
            'running', 'sports'
        ]
    },
    toJSON() {
        // return null;
        // return undefined;
        // return [];
        return this.name;
    }
};

console.log(JSON.stringify(obj2));
console.log('------------------');

console.log('parse------------------');


// console.log(JSON.parse(objStr5));
let objFromStr = JSON.parse(objStr1, function(key, value) {
    console.log(key);
    return value;
    // if (key == 'name' || key == 'hobbies') {
    //     return value;
    // }
    // return 1;
    // return value;
});
console.log(objFromStr);