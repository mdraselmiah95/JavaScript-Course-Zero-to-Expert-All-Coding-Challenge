// Promise API in Javascript 🎢

/*

const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

delay(2).then(() => console.log("2 Second Delay 🦌"));
delay(1).then(() => console.log("1 Second Delay 🦌"));
delay(3).then(() => console.log("3 Second Delay 🦌"));
delay(2).then(() => console.log("2 Second Delay 🦌"));
delay(5).then(() => console.log("5 Second Delay 🦌"));

*/

/*
let p1 = Promise.resolve("RESOLVE");
p1.then((v) => console.log(v));

let p2 = Promise.reject("REJECT");
p2.then((e) => console.log(e));
*/

let p1 = Promise.resolve("ONE");
let p2 = Promise.resolve("TWO");
let p3 = Promise.resolve("THREE");

let promiseArr = [p1, p2, p3];
Promise.all(promiseArr).then((arr) => {
  //   console.log(arr);
});

let p4 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "ONE");
});

let p5 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "TWO");
});

let p6 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "THREE");
});

let promiseArr2 = [p4, p5, p6];
Promise.all(promiseArr).then((arr) => console.log(arr));

// This go the as go the go went for this go the coolest.
