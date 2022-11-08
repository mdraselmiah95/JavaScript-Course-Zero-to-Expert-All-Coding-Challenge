// Execution Context 📑

function a() {
  b();
  console.log("I am function A");
}

function b() {
  d();
  console.log("I am function B");
}

function c() {
  console.log("I am function C");
}

function d() {
  c();
  console.log("I am function D");
}

var x = 100;
a();
console.log("I am Global");

// Execution of a B Function
// Execution of a A Function
// Execution of global context
