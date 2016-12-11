/**
 * 1.类的所有方法都定义在类的prototype属性上面,
 * 都是不可枚举的(这点与es5不一致)
 *
 * 2.必须使用new调用 否则报错
 */
class Point {
    // 如果不写, 自动添加一个空的constructor方法
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 在Point.prototype上
    getPosition(){
        return `(${this.x}, ${this.y})`
    }
}

let p = new Point(10, 5);

console.log(p.getPosition());

console.log(p.__proto__);
console.log(Point.prototype);

console.log(Point.prototype.constructor === Point);   // true
console.log(p.__proto__ === Point.prototype);           // true
console.log(Point.__proto__ === Function.prototype);  // true
console.log(p.constructor === Point.prototype.constructor);     // true
