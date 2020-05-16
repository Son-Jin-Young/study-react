// ES6 이전
// function Shape(x, y) {
//     this.name = 'Shape';
//     this.move(x, y);
// }
//
// Shape.create = function(x, y) {
//     return new Shape(x, y);
// };
//
// Shape.prototype.move = function (x, y) {
//     this.x = x;
//     this.y = y;
// };
//
// Shape.prototype.area = function () {
//     return 0;
// };
//
// var s = new Shape(0, 0);
// console.log(s.area());
//
// // 상속
// function Circle(x, y, radius) {
//     Shape.call(this, x, y);
//     this.name = 'Circle';
//     this.radius = radius;
// }
//
// Object.assign(Circle.prototype, Shape.prototype, {
//     area: function () {
//         return this.radius * this.radius;
//     }
// });
//
// var c = new Circle(0, 0, 10);
// console.log(c.area());

// ES6
class Shape {
    // ES7 문법 - Chrome 콘솔에서 확인 가능
    // name = 'Shape';

    constructor(x, y) {
        this.x = x;
        this.y = y;
        // ES6 문법
        this.name = 'Shape';
    }

    static create(x, y) {
        return new Shape(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}

var s = new Shape(0, 0);
console.log(s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
        this.name = 'Circle';
    }

    area() {
        return this.radius === 0 ? super.area() : this.radius * this.radius;
    }
}

var c = new Circle(0, 0, 10);
console.log(c.area());
