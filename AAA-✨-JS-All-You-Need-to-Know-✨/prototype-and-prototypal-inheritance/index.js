// Prototype and prototypal inheritance in javascript

var obj = {};
var obj2 = new Object();

// console.log(Object.getPrototypeOf(obj), Object.getPrototypeOf(obj2));
//arr object

function Person(name) {
  this.name = name;
}

var p1 = new Person("Rasel miah");
// console.log(p1);

var person = {
  name: "MD Rasel",
};
// console.log(person);

// for (var i in person) {
//   console.log(i);
// }

// console.log(Object.keys(person));

var descriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(descriptor);

var baseObj = Object.getPrototypeOf(person);
let descriptor2 = Object.getOwnPropertyDescriptor(baseObj, "toString");
// console.log(descriptor2);

Object.defineProperty(person, "name", {
  enumerable: false,
  writable: false,
  configurable: false,
  value: "MD RASEL",
});

// 124 start

function Person(name) {
  this.name = name;
}

Person.prototype.PI = 3.1416;

var p1 = new Person("RM Rasel");
var p2 = new Person("Rasel mia");
// console.log(p1, p2);

// console.log(Object.getPrototypeOf(p1));

function Square(width) {
  this.width = width;

  this.draw = function () {
    console.log("Draw");
  };
}

var sqr1 = new Square(10);
var sqr2 = new Square(5);
