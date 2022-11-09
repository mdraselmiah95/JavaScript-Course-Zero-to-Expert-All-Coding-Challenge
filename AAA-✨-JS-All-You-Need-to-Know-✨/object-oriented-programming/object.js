// Object Oriented Programming  🐊

var person = {
  id: 1,
  name: "rasel",
  profession: "student",
  age: 27,
  status: "single",
  education: "Bsc in computer science",
  active: true,
  address: {
    road: 03,
    block: "D",
    house: 28,
    float: "2nd",
    area: "Mirpur-01",
    division: "Dhaka",
  },
};

// console.log(person);
// Object Oriented Programming

var rect = {
  width: 10,
  height: 20,
};
function calculateArea() {
  return this.width * this.height;
}

function calculateRange() {
  return 2 * (this.width + this.height);
}

// var area = rect.calculateArea();
// var range = rect.calculateRange();

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea2() {
    return this.width * this.height;
  }
  calculateRange2() {
    return 2 * (this.width + this.height);
  }
}

var rect1 = new Rect(10, 30);
var rect2 = new Rect(20, 70);
var rect2 = new Rect(27, 66);

// OOP Stands on Four Pillar
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism
