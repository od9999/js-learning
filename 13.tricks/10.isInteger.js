const isInteger1 = x => x ^ 0 === x;

// 同样可以用floor ceil
const isInteger2 = x => Math.round(x) === x;

const isInteger3 = x => (typeof x === 'number') && (x % 1 === 0);
