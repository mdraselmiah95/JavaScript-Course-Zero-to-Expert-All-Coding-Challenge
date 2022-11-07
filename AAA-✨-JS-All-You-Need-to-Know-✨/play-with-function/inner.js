// javascript Inner function

function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}

something("Good Day", "Rasel");

function something(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[1]; //[0]=first name
    } else {
      return "";
    }
  }
  var message = greet + " " + getFirstName();
  console.log(message);
}

something("Good night", "Rasel miah");
