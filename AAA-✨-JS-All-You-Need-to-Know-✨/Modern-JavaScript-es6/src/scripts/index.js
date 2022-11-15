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

// Arrow function

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
// console.log(ob);

let a1 = 10,
  b1 = 20;

let obj4 = {
  a1,
  b1,
  print() {
    console.log(this);
  },
};
// console.log(obj4);
// obj4.print();

// Destructuring in javascript 🥇

let person = {
  name: "Rasel mia",
  email: "rasel@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// let name = person.name;
// let email = person.email;

let {
  name,
  email,
  address: { city, country },
} = person;

// console.log(name, email, city, country);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let [first, second, third] = arr;
// console.log(first, second, third);

//Object from Entries 🥇

var obj2 = {
  a: 10,
  b: 20,
};

//console.log(Object.entries(obj2));

let objArr = [
  ["a", 44],
  ["b", 76],
];
// console.log(Object.fromEntries(objArr));

//Symbols in javaScript 🥈

let s1 = Symbol();
let s2 = Symbol("test symbol");
// console.log(s1, s2);
//console.log(s1 === s2);

let toss = {
  HEAD: Symbol("HEAD"),
  TAIL: Symbol("TAIL"),
};
console.log(toss);
