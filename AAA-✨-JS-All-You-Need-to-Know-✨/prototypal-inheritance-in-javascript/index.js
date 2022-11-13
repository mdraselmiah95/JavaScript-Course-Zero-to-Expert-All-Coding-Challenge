function Square(width) {
  this.width = width;
}

Square.prototype = {
  draw: function () {
    console.log("Drawing");
  },
  common: function () {
    console.log("I am common Method");
  },
};

var sqe = new Square(12);
console.log(sqe);
