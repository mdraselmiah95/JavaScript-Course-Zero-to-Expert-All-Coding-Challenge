function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("I am common Method");
};

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
extend(Shape, Square);

Square.prototype.draw = function () {
  console.log("Drawing");
};

// var shape = new Shape();
var sqr = new Square(36, "green");

// shape => shape => object
// sqr => Square => Object
// sqr => Square => Shape => Object

// var sqe = new Square(12);
// console.log(sqe);   this is what i expected rost the go

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

extend(Shape, Circle);
var circle = new Circle(49, "Red");
