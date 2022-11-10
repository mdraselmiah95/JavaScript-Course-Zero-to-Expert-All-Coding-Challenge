/*

var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am react.");
    this.printProperties();
    console.log(this);
  },
  printProperties: function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  },
};

*/

// rect.draw();
// rect.height = 120;
// rect.draw();

// this keyword  in javascript

// function myFunc() {
//   console.log(this);
// }
// new myFunc();

/*

var another = {
  width: 87,
  height: 29,

  print: rect.printProperties,
};

*/

// console.log(another.print);
// another.print();

// Factory pattern

var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am react.");
      this.printProperties();
      console.log(this);
    },
    printProperties: function () {
      console.log("My width is " + this.width);
      console.log("My height is " + this.height);
    },
  };
};

var rect1 = createRect(100, 150);
rect1.draw();

var rect2 = createRect(110, 120);
rect2.draw();
