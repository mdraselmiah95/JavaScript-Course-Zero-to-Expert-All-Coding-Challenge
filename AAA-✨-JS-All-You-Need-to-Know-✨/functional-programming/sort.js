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

var arr = [4, 75, 1, 2, 3, 9, 4, 5, 6, 7, 8, 11, 19];

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

// console.log(arr);

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(persons);

var res1 = arr.every(function (value) {
  return value % 2 === 0;
});

console.log(res1);

var res2 = arr.every(function (value) {
  return value >= 0;
});

console.log(res2);
