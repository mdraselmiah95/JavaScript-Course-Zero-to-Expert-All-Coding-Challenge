//String
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

var arr = [1, 3, 4, 5, 6, 8, 9, 20, 36, 90];
console.log(arr.length - 1);

for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i] + 2;
}
console.log(arr);

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}

var arr2 = Array(1, 3, 5, 6, 7, 8, 9, 0, 0, 0, 44, 66);
console.log(arr2);
