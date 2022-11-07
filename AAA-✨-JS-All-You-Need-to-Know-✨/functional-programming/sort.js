// Javascript sort method 🗽

var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 18,
  },
  {
    name: "C",
    age: 27,
  },
  {
    name: "D",
    age: 21,
  },
];

var arr = [4, -2, 75, -8, 1, 2, 3, 9, 4, 5, 6, 7, 8, 11, 19];

arr.sort();
// console.log(arr);

persons.sort();
// console.log(persons);

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr);
