
let pattern = /aa(bb(cc)?)?/;
let str = 'aabbcc';
let matchPattern = pattern.exec(str);
console.log(matchPattern);      // [ 'aabbcc', 'bbcc', 'cc', index: 0, input: 'aabbcc' ]

matchPattern = pattern.exec(str);
console.log(matchPattern);      // [ 'aabbcc', 'bbcc', 'cc', index: 0, input: 'aabbcc' ]
