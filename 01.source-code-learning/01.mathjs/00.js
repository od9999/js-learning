const math = require('mathjs');
console.log(
    math.format(math.add(math.bignumber(0.1), math.bignumber(0.2)))

);

console.log(
    typeof math.format(math.add(math.bignumber(0.1), math.bignumber(0.2)))

);