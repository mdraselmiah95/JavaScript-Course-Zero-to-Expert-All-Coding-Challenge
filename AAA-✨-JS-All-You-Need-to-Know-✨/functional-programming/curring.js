// Javascript curring

function add(a, b, c) {
  return a + b + c;
}

// add(12, 34, 55);

function curring(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = curring(10)(15)(5);
console.log(result);
