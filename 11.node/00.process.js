let EventEmitter = require('events').EventEmitter;
console.log(process.version);
console.log(process.argv);
console.log(process.env);
console.log(process.pid);
console.log(process.getuid());
console.log(process.cwd());

console.log(Object.prototype.toString.call(process));
console.log(process instanceof EventEmitter);   // true