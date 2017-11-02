let { a, b, c: cVar} = { a: 'aaa', b: 'bbb', c: 'ccc' };
console.log(a); // 'aaa'
console.log(b); // 'bbb'
console.log(c); // ReferenceError: c is not defined
console.log(cVar);