// Async Iterator in Javascript 🍷

let asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({
            value: i++,
            done: false,
          });
        } else {
          return Promise.resolve({
            done: true,
          });
        }
      },
    };
  },
};

let iterate = asyncIterable[Symbol.asyncIterator]();
// console.log(iterate.next());

// (async function () {
//   //   let v = await iterate.next();
//   //   console.log(v);
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
// })();

//  For Await of Loop in Javascript 🌬️

(async function () {
  for await (let v of asyncIterable) {
    console.log(v);
  }
})();
