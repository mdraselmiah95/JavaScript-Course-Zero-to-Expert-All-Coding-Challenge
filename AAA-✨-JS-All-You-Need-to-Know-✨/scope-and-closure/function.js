abc();

function abc() {
  console.log("I am Function.");
}

// newAbc();
console.log(abc);

var newAbc = function () {
  console.log("I am new ABC function");
};

newAbc();
console.log(typeof newAbc);

// Creation phase:
// abc = ref
// newAbc = undefine

// Execution Phase:
