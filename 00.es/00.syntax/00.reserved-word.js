const reservedWords = [
	'break', 'delete', 'function', 'return', 'typeof',
	'case', 'do', 'if', 'switch', 'var', 'catch', 'else', 'in',
	'this', 'void', 'continue', 'false', 'instanceof', 'throw',
	'while', 'debugger', 'finally', 'new', 'true', 'with', 'default',
	'for', 'null', 'try'
];

const reservedWordsES5 = [
	'class', 'const', 'enum', 'export', 'extends', 'import', 'super'
];

// 下面这些关键字在普通的js代码中合法，但是在严格模式下是保留字
const reservedWordsWhenStrict = [
	'implements', 'let', 'private', 'public', 'yield',
	'interface', 'package', 'protected', 'static'
];