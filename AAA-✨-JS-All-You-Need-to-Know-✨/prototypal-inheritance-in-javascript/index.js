function Shape() {}

Shape.prototype = {
  common: function () {
    console.log("I am common Method");
  },
};

function Square(width) {
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype = {
  draw: function () {
    console.log("Drawing");
  },
};

var shape = new Shape();
var sqr = new Square(6);

// shape => shape => object
// sqr => Square => Object
// sqr => Square => Shape => Object

// var sqe = new Square(12);
// console.log(sqe);
