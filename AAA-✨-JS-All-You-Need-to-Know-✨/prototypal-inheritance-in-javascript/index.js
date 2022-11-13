// Prototypal inheritance in javascript 🍟

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

Square.prototype.common = function () {
  console.log("I am calling from Square and i have overwritten.");
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

extend(Shape, Circle);
Circle.prototype.common = function () {
  // Shape.prototype.common.call(this);
  console.log("I am calling from Circle and i have overwritten.");
};

var c = new Circle(49, "Red");
var s = new Shape("Purple");

var shapes = [s, c, sqr];

for (var i of shapes) {
  // i.common();
}

var canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

var canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

var person = Object.assign({}, canWalk, canEat);
console.log(person);
