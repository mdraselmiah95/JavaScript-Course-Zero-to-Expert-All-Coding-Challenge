// Javascript Hosting 💥

var a = 100;

// newPrint(a);
print(10);

var newPrint = print;
newPrint(24);

function print(a) {
  console.log(a);
}

print(a);

// Creation phase:
// a = undefine
// newPrint = undefine
// print = ref

// Execution phase:
// a = 100
// newPrint = ref
