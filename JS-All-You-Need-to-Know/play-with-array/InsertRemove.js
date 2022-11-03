// Remove and Insert Element

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// arr[3] = 99;
// arr.push(19);
// arr.unshift(19);

arr.splice(2, 0, 99);
arr.splice(2, 1, 99);
// arr[3] = undefined;
// arr.pop();
// arr.shift();
arr.splice(1, 1);
arr.splice(4, 1, 33, 44);
console.log(arr);
console.log(arr.length);
