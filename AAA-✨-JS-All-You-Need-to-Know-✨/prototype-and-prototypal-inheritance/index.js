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

var p1 = new Person("RM Rasel");

console.log(Object.getPrototypeOf(p1));
