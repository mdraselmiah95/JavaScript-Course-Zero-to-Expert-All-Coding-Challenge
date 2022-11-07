// Filter

var arr = [3, 5, 7, 8, 9, 90, 12, 45, 7, 8];

var filteredArr = arr.filter(function (value) {
  return value % 2 === 1;
});

console.log(filteredArr);
