// Async Await in JavaScript 🧑‍🚀

function myPromise() {
  return Promise.resolve("PROMISE RESOLVE");
}
//console.log(myPromise());

/*
async function test() {
  return "TEST ASYNC";
}

console.log(test());
*/

// let p1 = Promise.resolve("I AM A PROMISE");

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "TEST VALUE");
});
async function myAsyncFunc() {
  //   p1.then((v) => alert(v));
  let v = await p1;
  //   console.log(v);
}

// myAsyncFunc();

async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log(data);
}

fetchData();
