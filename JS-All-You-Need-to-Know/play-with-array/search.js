//Search Data

var arr = [1, 3, 5, 6, 7, 8, 9, 11, 24, 68, 23, 27, 876];

var find = 284;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("Data Found at Index", +i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data not Found 😲");
}
