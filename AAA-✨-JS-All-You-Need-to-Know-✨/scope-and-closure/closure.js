// Javascript Closure

// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope.

// able to remember and access it's lexical scope
// when that function executing outside it's lexical scope

/*

function test() {
  var msg = "I am Learning Lexical Scope and Closure";

  function sayMsg() {
    console.log(msg);
  }

  sayMsg();
}

*/

function test() {
  var msg = "I am Learning Lexical Scope and Closure";

  return function () {
    console.log(msg);
  };
}

var sayMsg = test();
sayMsg();

for (var i = 0; i <= 10; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
