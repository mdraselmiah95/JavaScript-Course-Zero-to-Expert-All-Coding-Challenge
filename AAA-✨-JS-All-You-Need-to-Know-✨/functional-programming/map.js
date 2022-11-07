// Javascript Map

var arr = [1, 3, 4, 5, 8, 9];

var sqrArr = arr.map(function (value) {
  //   console.log(value, index, arr);
  //   return Math.round(Math.random() * 100);
  return value * value;
});

// console.log(arr);
// console.log(sqrArr);

function myMap(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i] * arr[i];
    newArr.push(temp);
  }
  return newArr;
}

console.log(myMap(arr));
