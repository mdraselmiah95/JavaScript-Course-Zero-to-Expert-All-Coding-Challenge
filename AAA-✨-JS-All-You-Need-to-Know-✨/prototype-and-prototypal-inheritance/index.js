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

for (var i in person) {
  console.log(i);
}

console.log(Object.keys(person));
