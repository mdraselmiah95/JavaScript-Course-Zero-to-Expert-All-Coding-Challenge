// Function Composition 🉑

function print(inp) {
  console.log(inp);
}

function multiplyByFive(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

print(multiplyByFive(add(8, 2)));
