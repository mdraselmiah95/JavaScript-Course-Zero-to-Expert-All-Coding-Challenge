// Input Box Event Handling in JavaScript 🤽‍♀️

let name = document.getElementById("name");

name.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("showName").innerHTML = `${e.target.value}`;
    e.target.value = "";
  }
});
