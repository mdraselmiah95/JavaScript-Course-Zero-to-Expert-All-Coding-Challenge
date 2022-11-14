import { ABC } from "./test";
import "../styles/index.scss";

const fn = () => {
  console.log("I am learning webpack.");
};
fn();

console.log(ABC);

const info = (a, b) => {
  const name = a;
  const age = b;
  const fullInfo = name + " " + age;
  return fullInfo;
};

const person1 = info("Rasel mia", 26);
const person2 = info("Rohan", 27);
console.log(person1, person2);

console.log("This is cool and i did it.");

// Main javascript file
