// Javascript Reduce method 🉑

var arr = [1, 2, 3, 9, 4, 5, 6, 7, 8];

var sum = arr.reduce(function (prev, curr) {
  return prev + curr;
}, 100);

var max = arr.reduce(function (prev, curr) {
  return Math.max(prev, curr);
}, 0);

console.log(sum);
console.log(max);
