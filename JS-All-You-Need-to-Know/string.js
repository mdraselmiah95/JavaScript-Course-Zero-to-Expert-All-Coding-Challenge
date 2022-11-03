var a = "abc";
var b = "bcd";
console.log(a === b);
console.log(a > b);
console.log(a < b);
console.log("a" > "A");
console.log("A" > "a");

// Escape Notation
const str = "This is the most important 'TOPIC' in JavaScript.";
// console.log(str);

//Traverse an Array

var arr = [1, 3, 4, 5, 6, 8, 9, 20, 36, 88];
console.log(arr.length - 1);

for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i] + 2;
}
console.log(arr);
