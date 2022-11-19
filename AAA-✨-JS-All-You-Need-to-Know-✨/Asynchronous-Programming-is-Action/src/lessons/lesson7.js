// Introduction to Promise in Javascript 🍿

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Promise is resolve One");
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise is resolve two");
});

// p1.then((v) => {
//   console.log(v);
// }).catch((err) => {
//   console.log(err);
// });

// p2.then((v) => {
//   console.log(v);
// }).catch((err) => {
//   console.log(err);
// });

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("I have Got an IPhone 📱");
      } else {
        reject(new Error("You have Failed 😮‍💨"));
      }
    }, 2000);
  });
}

getIphone(false)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  });
