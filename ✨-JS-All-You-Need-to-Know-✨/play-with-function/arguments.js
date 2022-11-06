// Javascript Function

function add(a, b) {
  var result = a + b;
  console.log(result);
}

function sub(a, b) {
  var result = a - b;
  console.log(result);
}

// add(10, 55);
// add(7, 3);
// sub(10, 3);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);

var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}
console.log(sum2);

var sum3 = 0;
for (var i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}
console.log(sum3);
