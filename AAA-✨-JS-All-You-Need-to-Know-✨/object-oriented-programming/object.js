var person = {
  id: 1,
  name: "rasel",
  age: 27,
  status: "single",
  education: "Bsc in computer science",
  active: true,
  address: {
    road: 03,
    block: "D",
    house: 28,
    float: "2nd",
  },
};

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

var area = rect.calculateArea();
var range = rect.calculateRange();
