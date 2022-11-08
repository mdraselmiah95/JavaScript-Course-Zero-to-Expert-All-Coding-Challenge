// Javascript Recursive function 🥇

function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log("Hi, I am Calling.");
  sayHi(n - 1);
}

sayHi(10);
