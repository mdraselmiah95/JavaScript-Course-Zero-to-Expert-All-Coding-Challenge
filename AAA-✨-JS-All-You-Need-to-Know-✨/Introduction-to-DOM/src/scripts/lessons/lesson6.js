// Form Handling in DOM in JavaScript 🎐

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  [...this.elements].forEach((el) => {
    console.log(el.type, el.name, el.value);
  });
});
