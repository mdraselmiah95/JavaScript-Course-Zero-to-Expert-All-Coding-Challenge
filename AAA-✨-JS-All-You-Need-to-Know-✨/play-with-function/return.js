// javascript function statement

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

var result = addAll(1, 2, 4, 5);
console.log(result);

function person(name, email) {
  return {
    name: name,
    email: email,
  };
  console.log("I will never execute");
}

var person1 = person("Rasel mia", "rasel@gmail.com");
var person2 = person("Tom hank", "tom@gmail.com");
var person3 = person("Robin", "robin@gmail.com");
console.log(person1, person2, person3);
