// Javascript Scope 🤖

var a = "Easy accessible";

if (true) {
  if (true) {
    var b = "I am b";
  }
}

// console.log(b);

function x() {
  function y() {
    var a = 10;

    console.log(a);
  }
  console.log(a);
  y();
}

x();
