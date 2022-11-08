// Javascript find method 🉑

var arr = [75, 1, 2, 3, 9, 4, 5, 6, 7, 8];

var result = arr.find(function (value) {
  return value === 9;
});

var result2 = arr.findIndex(function (value) {
  return value === 9;
});

console.log(result, result2);

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
      //   return arr[i];
    }
  }
}

var result3 = myFind(arr, function (value) {
  return value === 9;
});

console.log(result3);
