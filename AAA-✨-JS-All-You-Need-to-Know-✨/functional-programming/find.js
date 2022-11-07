// Javascript find method 🉑

var arr = [75, 1, 2, 3, 9, 4, 5, 6, 7, 8];

var result = arr.find(function (value) {
  return value === 9;
});

var result2 = arr.findIndex(function (value) {
  return value === 9;
});

console.log(result, result2);
