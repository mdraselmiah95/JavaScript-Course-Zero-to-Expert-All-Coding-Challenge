// Javascript forEach

var arr = [1, 3, 4, 5, 6];

/*
var sum = 0;
arr.forEach(function (value, index, arr) {
  //   console.log(value, index, arr);
  sum += value;
});
console.log(sum);
*/

function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

var sum = 0;
forEach(arr, function (value) {
  sum += value;
});

console.log(sum);
