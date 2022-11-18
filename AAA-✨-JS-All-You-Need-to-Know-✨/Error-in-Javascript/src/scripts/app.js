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
  if (result === NaN) {
    console.log(
      "Please provide a value which will be able to convert in Integer."
    );
    return;
  }
  return result;
}

let result = changeToInt("5468.4");
console.log(result);
