// Introduction to Promise in Javascript 🍿

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise is resolve");
});

p1.then((v) => {
  console.log(v);
});
