// Multi Dimensional Array

var arr = [
  [78, 88, 92, 82, 80],
  [80, 81, 92, 88, 87],
  [77, 83, 85, 90, 95],
  [78, 69, 95, 76, 93],
];
// console.log(arr[0][2]);
// console.log(arr[1]);

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    // console.log(arr[i][j]);
    console.log("Element" + i + " : " + arr[i][j]);
  }
}
