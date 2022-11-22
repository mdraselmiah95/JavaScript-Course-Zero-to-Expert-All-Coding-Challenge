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
    }
  })
);
