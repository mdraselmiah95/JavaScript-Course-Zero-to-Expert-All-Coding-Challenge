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

// Factory pattern 🥈

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
// rect1.draw();

var rect2 = createRect(110, 120);
// rect2.draw();

// Constructor pattern 🥉

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am react.");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  };
};

// var rec3 = new Rectangle(22, 98);
// rec3.draw();
// console.log(rec3());

// New keyword in javascript 🆕

function MyNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}

var rec4 = MyNew(Rectangle, 45, 30);
rec4.draw();
// Constructor Function 🥇
