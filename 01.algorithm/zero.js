// 区分 +0 和 -0
console.log( +0 === -0 ); // true

console.log(1 / -0);   // -Infinity
console.log(1 / +0);   // Infinity

function isNegativeZero(num){
    return num === 0 && (1 / num < 0);
}
function isPositiveZero(num){
    return num === 0 && (1 / num > 0);
}
console.log(isNegativeZero(-0));
console.log(isPositiveZero(+0));