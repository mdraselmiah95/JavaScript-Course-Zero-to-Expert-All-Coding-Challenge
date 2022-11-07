// Filter

var arr = [1, 2, 3, 5, 7, 8, 9, 90, 12, 45];

var filteredArr = arr.filter(function (value) {
  return value % 2 === 1;
});

// console.log(filteredArr);

function myFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arr);

console.log(
  myFilter(arr, function (value) {
    return value % 2 === 0;
  })
);

console.log(
  myFilter(arr, function (value) {
    return value % 2 === 1;
  })
);

console.log(
  myFilter(arr, function (value) {
    return value > 4;
  })
);
