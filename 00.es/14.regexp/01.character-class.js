/**
 * 将直接量字符单独放进方括号内就组成了字符类(character class)
 */
console.log(/[abc]/.test('a'));

console.log(/[^abc]/.test('d'));

console.log(/./.test('a'));

// 任何ASCII字符组成的单词 等价于[a-zA-Z0-9]
console.log(/\w/.test('a'));

// 等价于[^a-zA-Z0-9]
console.log(/\W/.test('~'));

// 任何Unicode空白符
console.log(/\s/.test('     '));

// 任何非Unicode空白符, 注意\W和\S不同
console.log(/\S/.test('a'));

// [0-9]
console.log(/\d/.test('123'));

// [^0-9]
console.log(/\D/.test('abc'));