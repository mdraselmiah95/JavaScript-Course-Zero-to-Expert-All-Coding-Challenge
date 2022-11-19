// Introduction to Promise in Javascript 🍿

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Promise is resolve");
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise is resolve two");
});

p1.then((v) => {
  console.log(v);
}).catch((err) => {
  console.log(err);
});

p2.then((v) => {
  console.log(v);
}).catch((err) => {
  console.log(err);
});
