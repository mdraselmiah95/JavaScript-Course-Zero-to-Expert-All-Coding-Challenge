var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am react.");
    this.printProperties();
  },
  printProperties: function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  },
};

rect.draw();
// rect.height = 120;
// rect.draw();

// this keyword  in javascript

function myFunc() {
  console.log(this);
}
new myFunc();
