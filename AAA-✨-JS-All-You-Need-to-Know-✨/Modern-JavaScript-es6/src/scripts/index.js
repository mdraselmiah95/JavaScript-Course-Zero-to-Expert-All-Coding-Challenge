import "../styles/index.scss";

// const s = `
// THis is cool

// There is no space

// every pixel is important.

// `;
// console.log(s.trim());

var age = 9;
var name = "Rasel mia";

console.log(
  `My Name is ${name} and i am ${age} years old. I am ${
    age < 18 ? "Not " : ""
  }adult.`
);

console.log(name.padStart(18, "*"));
console.log(name.padEnd(18, "*"));
console.log("S".repeat(10));
