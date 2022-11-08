// Javascript return

function greet(msg) {
  function greeting(name) {
    return msg + ", " + name + "!";
  }
  return greeting;
}

var gm = greet("Good Evening");
// console.log(typeof gm);
var msg = gm("Rasel mia");
console.log(msg);
