// Input Box Event Handling in JavaScript 🤽‍♀️

let name = document.getElementById("name");

name.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("showName").innerHTML = `${e.target.value}`;
    e.target.value = "";
  }
});

// 211 Check Box Event Handing in JavaScript 🏁

let skills = document.getElementsByName("skills");

let checkedSkills = [];

[...skills].forEach((skill) =>
  skill.addEventListener("change", function (e) {
    if (e.target.checked) {
      checkedSkills.push(e.target.value);
      console.log(checkedSkills);
    } else {
      let ind = checkedSkills.indexOf(e.target.value);
      checkedSkills.splice(ind, 1);
      console.log(checkedSkills);
    }
  })
);

// 212 List and Input Event Handler 👜

let list = document.getElementById("list");

list.addEventListener("dblclick", function (event) {
  if (this.contains(event.target)) {
    let innerText = event.target.innerText;
    event.target.innerHTML = "";

    let inputBox = createInputBox(innerText);
    event.target.appendChild(inputBox);

    inputBox.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        event.target.innerHTML = e.target.value;
      }
    });
  }
});

function createInputBox(value) {
  let inp = document.createElement("input");
  inp.type = "text";
  inp.className = "form-control";
  inp.value = value;

  return inp;
}
