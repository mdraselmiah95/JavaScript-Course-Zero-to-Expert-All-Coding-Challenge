// Callback Not Always Asynchronous in Javascript 🏆

let arr = [1, 2, 4, 5, 6, 7, 8, 9];

let sqr = arr.map((v) => v * v);
// console.log(sqr);

function asyncMap(arr, cb) {
  return arr.map((v) => {
    setTimeout(cb.bind(null, v), 0);
  });
}

let qbArr = asyncMap(arr, (v) => {
  console.log(v);
});
// console.log(qbArr);
