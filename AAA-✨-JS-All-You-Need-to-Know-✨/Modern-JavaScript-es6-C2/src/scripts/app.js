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

// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

/*

let arr2 = [1, 4, 6, 78];

function* generate(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}

let it = generate(arr2);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

*/

// Set in Javascript 🥈

let set = new Set([1, 2, 4]);
set.add(8);
set.add(11);
set.add(1);

// console.log(set.size);
// set.clear();
// set.delete(4);
// console.log(set.has(4));
// console.log(set);

// let keyIterate = set.values();
// console.log(keyIterate.next());

for (let v of set) {
  // console.log(v);
}

// console.log(set.entries());

// map in javascript 🥇
let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30],
]);

map.set("d", 40);
// map.delete("c");
// map.clear()

// console.log(map);
// console.log(map.get("a"));
// console.log(map.size);
// console.log(map.values());
// console.log(map.keys());
// console.log(map.entries());
// for (let [k, v] of map) {
//   console.log(v, k);
// }

map.forEach((v, k) => console.log(k, v));
