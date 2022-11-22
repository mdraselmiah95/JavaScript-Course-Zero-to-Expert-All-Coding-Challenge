// Create DOM Elements in Javascript 🪀

// let li = document.createElement("li");
// li.className = "list-group-item";
// li.setAttribute("title", "I am fourth Item.");
// li.innerHTML = "Four";

// let list = document.getElementById("list");
// list.appendChild(li);

let li = createElement("li", "list-group-item", "Four");
li.setAttribute("title", "I am number Item");

let list = document.getElementById("list");
list.appendChild(li);

let p1 = createElement(
  "p",
  "lead",
  "This is a first paragraph and also very powerful telling paragraph. This is first paragraph also. 🚌"
);

let p2 = createElement(
  "p",
  "lead",
  "This is a first paragraph and also very powerful telling paragraph. This is Second paragraph also. 🛺"
);

let div = createElement("div");
append(div, [p1, p2]);

// console.log(div);

list.insertAdjacentElement("afterend", div);

// document.getElementsByClassName("container")[0].appendChild(div);

function createElement(tagName, className, innerHTML) {
  let tag = document.createElement(tagName);
  tag.innerHTML = innerHTML || "";
  tag.className = className || "";
  return tag;
}

function append(patent, children) {
  children.forEach((child) => patent.appendChild(child));
}
