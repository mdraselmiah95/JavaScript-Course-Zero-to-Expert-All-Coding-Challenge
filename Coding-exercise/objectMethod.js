// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  },

  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYeah;
  },
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge(1990));
console.log(jonas["calcAge"](1991));
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
