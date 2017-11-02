let set = new Set();
;
console.log(set.add(1).add(2).add(3).add({}).add({}).add(NaN).add(NaN));

console.log(set.delete(5));  // false
console.log(set.delete({}));  // false

let obj = {};
console.log(set.add(obj));
console.log(set.delete(obj));  // true
console.log();

for(let item of set.keys()) {
    console.log(item);
}
for(let item of set.entries()) {
    console.log(item);
}

/**
 * 1.只能放对象
 * 2.元素都是弱引用 随时可能被垃圾回收机制收回
 */
let ws = new WeakSet([]);
ws.add([1], {});
console.log(ws);

console.log('-----------------');
/**
 * key 可以不是string
 *
 */
let map = new Map();
map.set('name', 'od');
let person = {
    name: 'zr',
    age: '13'
};
map.set(person, 'zr');
console.log(map);

map.set(NaN, 123);
console.log(map.get(NaN)); // 123

map.set(-0, 123);
console.log(map.get(+0)); // 123

console.log(Map.__proto__ === Function.prototype); // true

let map2 = new Map([
    ['F', 'no'],
    ['T',  'yes'],
]);

for (let key of map2.keys()) {
    console.log(key);
}
// "F"
// "T"

for (let value of map2.values()) {
    console.log(value);
}
// "no"
// "yes"

for (let item of map2.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map2.entries()) {
    console.log(key, value);
}

// 等同于使用map.entries()
for (let [key, value] of map2) {
    console.log(key, value);
}

let map3 = new Map();
map3.set('name', 'od');
map3.set('age', '13');
map3.set('gender', 'male');
for(let item of map3) {
    console.log(item);
}
map3.set('age', '23');
for(let item of map3) {
    console.log(item);
}