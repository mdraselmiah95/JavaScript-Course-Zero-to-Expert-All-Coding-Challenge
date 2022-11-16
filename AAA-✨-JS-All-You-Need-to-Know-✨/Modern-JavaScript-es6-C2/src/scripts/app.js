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

// map.set("d", 40);
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
// map.set({ name: "Rasel" }, 26);

// map.forEach((v, k) => console.log(k, v));

// Weak Set in JavaScript 🥉

let a = { a: 10 },
  b = { b: 19 };

// let set1 = new Set([a, b]);
// console.log(set1);

// a = null;
// let arr1 = [...set];
// console.log(arr1[0]);

// let weakSet = new WeakSet([a, b]);
// a = null;
// console.log(weakSet.has(b));

// Weak map in JavaScript 🥉

let weakMap = new WeakMap([
  [a, 34],
  [b, 76],
]);
a = null;

// console.log(weakMap.get(a));
// console.log(weakMap.has(a));
// console.log(weakMap.has(b));

// Class in Javascript 🥉

/*

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.draw = function () {
  console.log(this);
  console.log("Drawing...");
};

let rect = new Rectangle(12, 23);
console.log(rect.draw);

*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("Drawing...");
  }
}

let rect = new Rectangle(12, 45);
// console.log(rect);
// console.log(typeof Rectangle);
