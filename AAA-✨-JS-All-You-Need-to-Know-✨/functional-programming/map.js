// Javascript Map

var arr = [1, 3, 4, 5];

var sqrArr = arr.map(function (value) {
  //   console.log(value, index, arr);
  return Math.random() * 100;
});

console.log(arr);
console.log(sqrArr);
