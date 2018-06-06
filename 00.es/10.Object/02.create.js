let proto = {
    x: 1,
    y: 2,
    1: 3,
    0: 4,
    '': 5
};

let obj = Object.create(proto);
for(let key in obj) {
    console.log('---------');
    console.log(key + ': ' + obj[key]);
}

console.log('=====');
proto.x = 3;
for(let key in obj) {
    console.log('---------');
    console.log(key + ': ' + obj[key]);
}