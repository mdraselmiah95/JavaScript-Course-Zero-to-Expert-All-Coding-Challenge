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
};
