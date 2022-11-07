// Javascript function expression

var addition = function (a, b) {
  return a + b;
};
var add = addition(10, 40);
console.log(add);

setTimeout(() => {
  console.log("I will execute after 3 second.");
}, 3000);
