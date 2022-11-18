import "../styles/index.scss";

// Error in Javascript 🏸

// let n = 10;

// if (n > 5) {
//   throw new Error(" N is greater in 5");
// }

//console.log(Number.MAX_VALUE);

/*
let n = 58;

if (n > 50) {
  throw new RangeError("The number is too long.. 💣");
}
*/

//console.log(a);

// Error Handling with If Else 💢

// let n = Number.parseInt("87");
// console.log(n);

function changeToInt(num) {
  let result = Number.parseInt(num);
  if (!result) {
    return "Please provide a value which will be able to convert in Integer.";
  }
  return result;
}

// let result = changeToInt("this is wrong input");
// console.log(result);

//console.log(NaN === NaN);

// Error Handling with Try Catch 🐜

/*
function makeWords(text) {
  let str = text.trim();
  let words = str.split(" ");
  return words;
}
*/
function makeWords(text) {
  try {
    let str = text.trim();
    let words = str.split(" ");
    return words;
  } catch (error) {
    // console.log(error.message);
    console.log("Please Provide a Valid Text 🚦");
  }
}

// let words = makeWords(99);
// console.log(words);

// Throwing an Error 👽 and Finally Block in JavaScript 🎈

/*
try {
  console.log("i am line 1");
  throw new Error("I am your error 💥");
  console.log("i am line 1");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("I am finally BLock.");
}
*/

// Optional Catch Blinding 🏦

/*
try {
  console.log("i am line 1");
  throw new Error("I am your error 💥");
  console.log("i am line 1");
} catch {
  console.log("This is a Custom Error Massage 🎍");
} finally {
  console.log("I am finally BLock.");
}
*/

// Create Custom Error 🌧️

class CustomError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log("i am line 1");
  throw new Error("I am your error 💥");
  console.log("i am line 1");
} catch (error) {
  //   console.log(error.message);
  console.dir(error);
  console.log("This is a Custom Error Massage 🎍");
} finally {
  console.log("I am finally BLock.");
}
