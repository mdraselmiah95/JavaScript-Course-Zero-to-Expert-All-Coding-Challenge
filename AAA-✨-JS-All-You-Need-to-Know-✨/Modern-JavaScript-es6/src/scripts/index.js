import "../styles/index.scss";

// const s = `
// THis is cool

// There is no space

// every pixel is important.

// `;
// console.log(s.trim());

/*

var age = 9;
var name = "Rasel mia";

console.log(
  `My Name is ${name} and i am ${age} years old. I am ${
    age < 18 ? "Not " : ""
  }adult.`
);


*/

// console.log(name.padStart(18, "*"));
// console.log(name.padEnd(18, "*"));
// console.log("S".repeat(10));

// Let ve Const vs Var
/*

if (true) {
  let a = 10;
}

console.log(a);

for (var i = 0; i < 5; i++) {}
console.log(i);

*/

// Arrow function Syntax 👍

/*

function add(a, b) {
  return a + b;
}

let sum = function (a, b) {
  return a + b;
};


*/

let add = (a, b) => a + b;
//   return a + b;

let ad = add(2, 5);
// console.log(ad);

let sqr = (x) => x * x;
// console.log(sqr(9));

/*

function test() {
  console.log(this);
}

test.call();

let obj = {
  name: "Rasel",
  print: () => {
    console.log(this);
  },
};

obj.print();

*/

// Arrow function  that will

let obj = {
  name: "Rasel mia",
  print: function () {
    let self = this;
    setTimeout(function () {
      console.log(`Hello, ${self.name}`);
    }, 1000);
  },
};

obj.print();
