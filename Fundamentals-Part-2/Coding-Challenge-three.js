/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  hight: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.hight ** 2;
    return this.bmi;
  },
};

const John = {
  fullName: "Mark Miller",
  mass: 92,
  hight: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.hight ** 2;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.fullName}'s BMI (${Math.floor(Mark.bmi)}) is higher than ${
      John.fullName
    }'s BMI (${John.bmi.toFixed(2)})!`
  );
} else if (John.bmi > Mark.bmi) {
  console.log(
    `${John.fullName}'s BMI (${John.bmi}) is higher than ${Mark.fullName}'s BMI (${Mark.bmi})`
  );
}
