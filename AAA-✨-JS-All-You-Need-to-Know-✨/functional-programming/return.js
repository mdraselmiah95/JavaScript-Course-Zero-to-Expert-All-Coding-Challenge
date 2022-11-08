// Javascript return

function greet(msg) {
  function greeting(name) {
    return msg + ", " + name + "!";
  }
  return greeting;
}

var gm = greet("Good Evening");
var gn = greet("Good Night");
var hello = greet("Hello");
// console.log(typeof gm);
var msg = gm("Rasel mia");
var mas2 = gn("Dev Rasel");
// console.log(msg, mas2);

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

var base10 = base(10);
var base5 = base(2);

console.log(base10(2), base5(2));
console.log(base5(3));
console.log(base5(5));
