import Shape1 from "./Shape";

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

export default Rectangle1;
