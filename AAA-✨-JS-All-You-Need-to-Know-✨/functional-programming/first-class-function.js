// First class function in Javascript. ✊

/*
A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
*/

// First class Function
function add(a, b) {
  return a + b;
}

// ▶️ Can be stored as a value in a variable
var sum = add;
console.log(sum(5, 6));
console.log(typeof sum);

// ▶️ A Function Can be stored in an Array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](5, 8));

// ▶️ A Function Can be stored in an Object
var obj = {
  sum: add,
};

console.log(obj);
console.log(obj.sum(7, 13));

// ▶️ We can create function as we need

setTimeout(function () {
  console.log("I am function.");
}, 1000);

// ▶️ Can be returned by another function
// ▶️ Can be passed as a function's argument
// ▶️ Can be stored in an array, stack, or queue
// ▶️ Can have its own properties and methods.
