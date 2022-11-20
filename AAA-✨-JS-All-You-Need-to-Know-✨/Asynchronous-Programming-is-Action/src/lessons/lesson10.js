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
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    let name = data.map((v) => v.name);
    console.log(name);
  } catch (error) {
    console.log(error.message);
  }
}

// fetchData();

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

async function promiseAll() {
  let result = await Promise.all(promises);
  console.log(result);
}

promiseAll();

//190 video
