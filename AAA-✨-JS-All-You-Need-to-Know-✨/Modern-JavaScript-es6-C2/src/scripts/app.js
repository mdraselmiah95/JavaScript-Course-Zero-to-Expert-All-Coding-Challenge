import "../styles/index.scss";

// Iterator Basic 🥇

const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/*


function createIterator(collection) {
  let i = 0;
  return {
    next() {
      return {
        done: i >= collection.length,
        value: collection[i++],
      };
    },
  };
}


*/

// const iterator = createIterator(arr);
let iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(arr[Symbol.iterator]);
// console.log("arr"[Symbol.iterator]);

let str = "TEXT to motivation";
let iteratorText = str[Symbol.iterator]();

// console.log(iteratorText.next());

for (let v of arr) {
  //   console.log(v);
}

for (let v of str) {
  //   console.log(v);
}

// Generator 👍

/*

let obj = {
  start: 1,
  end: 5,

  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

for (let v of obj) {
  console.log(v);
}

*/

function generate() {}
