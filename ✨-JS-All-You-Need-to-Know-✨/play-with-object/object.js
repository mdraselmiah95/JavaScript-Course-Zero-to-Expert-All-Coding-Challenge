// Objects in Javascript 👊

var student = {
  math: 88,
  chemistry: 75,
  physics: 79,
  higherMath: 95,
};
// console.log(student);

var stu = Object({ math: 88, chemistry: 75, physics: 79, higherMath: 95 });
// console.log(stu);

//console.log(Object(), Array());

var obj = {};
obj.x = 5;
// console.log(obj);

var point = {
  x: 10,
  y: 20,
};

// point.y = 30;
point.z = 30;

// console.log(point);

var obj2 = Object();
obj2.r = 26;
// console.log(obj2);

var obj3 = Object();
obj3.s = 36;
// console.log(obj3);

var points = {
  x: 10,
  y: 20,
  z: 30,
};

// console.log(points.x);
// console.log(points.y);
// console.log(points.x + points.y);

// console.log(points["z"]);

points.x = 50;
console.log(points);
