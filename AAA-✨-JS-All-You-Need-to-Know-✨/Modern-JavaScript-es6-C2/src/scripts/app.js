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
    this.another = function () {};
  }

  draw() {
    console.log("Drawing...");
  }
}

let rect = new Rectangle(12, 45);
// console.log(rect);
// console.log(typeof Rectangle);

// Static Method 🥇

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(this.name, this.email);
  }

  test() {
    console.log(this);
  }

  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

let str2 = '{"name":"Rasel mia","email":"rasel@gamil.com"}';

let p1 = Person.create(str2);
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print();

function Shape() {
  this.draw = function () {
    console.log(this);
  };
}

let s1 = new Shape();
let anotherDraw = s1.draw;
// anotherDraw();

// let test = p1.test;
// test();

// Private Data with Symbol 🥉

const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius, name) {
    this[_radius] = radius;
    this[_name] = name;
  }

  [_draw]() {
    console.log("Drawing...");
  }
}

let c1 = new Circle(2, "CRUD");
// console.log(c1);

// console.log(Object.getOwnPropertyNames(c1));
let key = Object.getOwnPropertySymbols(c1)[0];
// console.log(c1[key]);

// Private Properties with WeakMap 🎱

const _radius1 = new WeakMap();
const _name1 = new WeakMap();
const _resize = new WeakMap();

class Circle1 {
  constructor(radius, name) {
    this.size = 100;
    _radius1.set(this, radius);
    _name1.set(this, name);
    _resize.set(this, () => {
      console.log(this.size);
    });
  }

  get radius() {
    return _radius1.get(this);
  }
  set radius(v) {
    return _radius1.set(this, v);
  }

  draw() {
    console.log("Drawing...");
    console.log(_radius1.get(this), _name1.get(this));
    _resize.get(this)();
  }
}

let c2 = new Circle1(5, "CRED");
// c2.draw();
// c2.radius = 77;
// console.log(c2.radius);

// Getter and Setter in ES6 ✈️

const _radius3 = new WeakMap();
const _name3 = new WeakMap();
const _resize3 = new WeakMap();

class Circle3 {
  constructor(radius, name) {
    this.size = 100;
    _radius3.set(this, radius);
    _name3.set(this, name);
    _resize3.set(this, () => {
      console.log(this.size);
    });
  }

  get radius() {
    return _radius3.get(this);
  }

  set radius(v) {
    return _radius3.set(this, v);
  }

  draw() {
    console.log("Drawing...");
    console.log(_radius3.get(this), _name3.get(this));
    _resize3.get(this)();
  }
}

// let c3 = new Circle3(9, "CRUD");
// c3.draw();
// c3.radius = 99;
// console.log(c3.radius);

// Inheritance in ES6 🕥
/*
  
  class Shape1 {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing...");
  }
}

class Rectangle1 extends Shape1 {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log("Drawing a Rectangle...");
  }

  calculate() {
    return this.width * this.height;
  }
}
  
  */
import Rectangle1 from "./Rectangle";

// let r = new Rectangle1("Green", 9, 7);
// console.log(r);
// r.draw();

//  ES6 Modules System ⚗️

import * as func from "./func";

// console.log(func.add(12, 8));
// console.log(func.times(10, 8));

import { add, div } from "./func";

console.log(add(12, 38));
console.log(div(50, 5));
