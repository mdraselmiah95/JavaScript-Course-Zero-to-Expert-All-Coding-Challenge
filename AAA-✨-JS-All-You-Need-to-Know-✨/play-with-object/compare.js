// Compare Two Objects

var obj1 = {
  a: 10,
  b: 20,
};
var obj2 = {
  a: 10,
  b: 20,
};

if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
//console.log(obj1 === obj2);
