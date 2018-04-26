// mixin会把原型链上的属性一并复制过去（因为for...in），而Object.assign则不会。
function mixin(sourceObj, targetObj) {
    for (let key in sourceObj) {
        if (!(key in targetObj)) {
           targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}
