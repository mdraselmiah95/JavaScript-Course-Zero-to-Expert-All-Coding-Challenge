// for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

// const jonas = [
//   "Rasel",
//   "Mia",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// console.log(jonas.length);

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// continue and break
// console.log("--- ONLY STRINGS ---");

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
// 0, 1, ..., 4
// 4, 3, ..., 0
