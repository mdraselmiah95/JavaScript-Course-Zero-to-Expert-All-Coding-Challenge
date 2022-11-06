// javascript Inner function

function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}

something("Good Day", "Rasel");
