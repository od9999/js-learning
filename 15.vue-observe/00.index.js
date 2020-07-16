class Observer {
    constructor(value) {
        this.value = value;
        this.walk(this.value);
    }
    walk(value) {
        // 递归遍历value的属性
        Object.keys(value).forEach((key) => {
            defineReactive(value, key, value[key])
        });
    }
}
function defineReactive(obj, key, val) {
    let dep = new Dep(); // 毕竟要使用Dep的方法
    let childOb = observe(val);
    Obeject.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set(newVal) {
            val = newVal;
            childOb = observe(val);
            dep.notify(); // 因为数据改变了，我们就通知Dep
        }
    })
}

function observe(value) {
    if (typeof value === 'object' && !Array.isArray(value)) {
        value = new Observer(value);
    }
}

class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        const subs = this.subs.slice();
        subs.forEach((sub) => {
            sub.update(); // 视图更新
        });
    }
}

class Watcher {
    constructor(vm, cb, expOrFn) {
        this.vm = vm; // 这表示一个Vue的实例
        this.cb = cb;
        // 这里需要考虑expOrFn是字符串或者函数的情况
        // 这里做一个简化，只考虑函数的情况
        this.getter = expOrFn;
        this.value = this.get();
    }
    get() {
        Dep.target = this;
        const vm = this.vm;
        value = this.getter.call(this.vm, vm);
        Dep.target = null;
        return value;
    }
    update() {
        this.run();
    }
    run() {
        const value = this.get();
        if (value !== this.value) {
            const oldValue = this.value;
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    }
}

const a = {
    a: 1,
    b: 2,
    c: [
        {
            a: 2,
        },
        1,
        2,
    ]
};

observe(a);
// a.a = 2;
// console.log(a.a);
console.log(a.c[0]);

