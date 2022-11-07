// Pure Function in Javascript 🉑

/**
 * It Return the same result if the given the same arguments
 * it does not cause any observable side effects
 */

function sqr(n) {
  return n * n;
}
console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3));

var n = 10;
function change() {
  n = 100;
}
change();
console.log(n);

var point = {
  x: 57,
  y: 39,
};

function printPoint(point) {
  point.x = 102;
  point.y = 201;

  console.log(point);
}

printPoint(point);
console.log(point);
