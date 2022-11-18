// How to Store Result from Async Function 🏬

function sayMyName(name) {
  let result;
  setTimeout(() => {
    result = name;
    console.log("I have done..");
  }, 3000);
  return result;
}

let output = sayMyName("Rasel mia");
console.log(output);
