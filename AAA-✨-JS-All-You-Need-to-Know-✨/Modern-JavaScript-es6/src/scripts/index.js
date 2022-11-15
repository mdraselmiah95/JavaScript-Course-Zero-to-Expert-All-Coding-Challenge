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
    // let self = this;
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};

// obj.print();

// Default parameter

/*

function sqr1(n = 1) {
  return n * n;
}

console.log(sqr1());

*/

/*

function greet(name = "Rasel mia", msg = "Hello") {
  console.log(`${msg} ${name}`);
}

greet("Tom", "Hello");

*/

let obj1 = {
  start: 1,
  end: 6,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue++,
        };
      },
    };
  },
};

// for (let v of obj1) {
//   console.log(v);
// }

// let iterate = obj1[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// Rest & Spread Operator 💯

function sum(...rest) {
  return rest.reduce((a, b) => a + b);
}

// console.log(sum(10, 20, 11, 9));

let a = [1, 2, 3, 5, 4];
// console.log(...a);

let obj3 = {
  a: 10,
  b: 20,
  c: 30,
};

let ob = {
  ...obj3,
};
console.log(ob);

//video 145
