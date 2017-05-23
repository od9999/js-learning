let proto = {
    x: 1,
    y: 2
};

let obj = Object.create(proto);
for(let key in obj) {
    console.log('---------');
    console.log(key + ': ' + obj[key]);
}

proto.x = 3;
for(let key in obj) {
    console.log('---------');
    console.log(key + ': ' + obj[key]);
}