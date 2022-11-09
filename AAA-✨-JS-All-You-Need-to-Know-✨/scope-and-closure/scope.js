// Javascript scope & Lexical scope ✡️

var x = 50;

function test() {
  var x = 39;

  console.log(x);

  function nested() {
    // var y=64
    console.log(x);
  }

  // console.log(y);
  nested();
}

// test();

var a = 11;

function A() {
  var b = 12;
  function B() {
    var c = 23;
    console.log(c);
  }

  function C() {
    var d = 56;
    console.log(d);
  }

  console.log(b);
  D(b);
  B();
  C();
}

function D(n) {
  return n + a;
}

// Scope chain

// A => a, b, B(), C(), D()
// B =>  a, b, c, B(), C(), D()
// C =>  a, b, d, B(), C(), D()
// D => a ,n A()
