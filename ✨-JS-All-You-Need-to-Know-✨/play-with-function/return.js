function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

var result = addAll(1, 2, 4, 5);
console.log(result);

const cool = (a, b, c) => {
  const sum = a + b;
  const total = sum / c;
  const result = total * 2;
  return result;
};

const result2 = cool(20, 60, 2);
console.log(result2);
