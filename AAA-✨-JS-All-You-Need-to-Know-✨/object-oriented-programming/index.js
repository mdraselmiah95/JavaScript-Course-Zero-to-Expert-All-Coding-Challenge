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

var rec3 = new Rectangle(22, 98);
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

// var rec4 = MyNew(Rectangle, 45, 30);
// rec4.draw();

// Constructor Property 🥇

var str = new String("str");
// console.log("My String is " + str);

// Function are object in javascript 🎙️

function test() {
  console.log("testing the function");
}
// console.log(test.name, test.length);
// console.log(typeof test);

var Rect = new Function(
  "width",
  "height",
  `
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
`
);

var rect5 = new Rect(4, 5);
// console.log(rect5);
// rect5.draw();

function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}
// myFunc();

//  Call, Apply, Bind Method

/*

myFunc.call({ a: 30, b: 55 }, 22, 44); // call method
myFunc.apply({ a: 15, b: 25 }, [35, 15]); // apply method

*/

// myFunc.call({ a: 78, b: 87 });
// myFunc();

// var testBind = myFunc.bind({ a: 5, b: 15 }, 25, 5);
var testBind = myFunc.bind({ a: 5, b: 15 });
// testBind(25, 5);

// Pass by Value vs pass by Reference
// Call by Value vs Call by Reference

var n = 10;

function change(n) {
  n += 100;
  console.log(n);
}

// change(10);
// console.log(n);

var obj = {
  a: 10,
  b: 20,
};

function changeMe(obj) {
  obj.a += 100;
  obj.b + 100;
  console.log(obj);
}

// changeMe(obj);
// console.log(obj);

// Abstraction in javascript

var Rectangle = function (width, height) {
  var position = {
    x: 56,
    y: -100,
  };
  this.width = width;
  this.height = height;

  var printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  }.bind(this);

  this.draw = function () {
    console.log("I am Rectangle");
    printProperties();
    console.log(
      "Position X= " + position.x + " " + "Position y= " + position.y
    );
  };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rec7 = new Rectangle(78, 99);
rec7.draw();
rec7.position = {
  x: 344,
  y: 345,
};
