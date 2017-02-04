function compose(...funcs) {
    if (0 === funcs.length) {
        return arg => arg;
    }
    if (1 === funcs.length) {
        return funcs[0];
    }

    const last = funcs[funcs.length - 1];
    const rest = funcs.slice(0, -1);
    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
}

function add(x) {
    return x + 1;
}

function multi(x) {
    return x * 2;
}
console.log(compose(add, multi)(5));

const func = compose();

console.log(func(1));
