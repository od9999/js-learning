let str = 'cat.bat.sat.fat';

console.log('-------------------');
let reg2 = /.at/g;

let matches1 = reg2.exec(str);
console.log(matches1);

matches1 = reg2.exec(str);
console.log(matches1);

matches1 = reg2.exec(str);
console.log(matches1);

matches1 = reg2.exec(str);
console.log(matches1);

console.log('-------------------');
let reg3 = /.at/;

let matches2 = reg3.exec(str);
console.log(matches2);

matches2 = reg3.exec(str);
console.log(matches2);

matches2 = reg3.exec(str);
console.log(matches2);

matches2 = reg3.exec(str);
console.log(matches2);