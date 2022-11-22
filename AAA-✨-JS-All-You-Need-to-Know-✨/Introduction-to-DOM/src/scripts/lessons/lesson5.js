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

// List and Input Event Handler 👜

let list = document.getElementById("list");
console.log(list);

list.addEventListener("dblclick", function (e) {
  console.log("Double Click");
});

list.addEventListener("click", function (e) {
  console.log("click");
});
