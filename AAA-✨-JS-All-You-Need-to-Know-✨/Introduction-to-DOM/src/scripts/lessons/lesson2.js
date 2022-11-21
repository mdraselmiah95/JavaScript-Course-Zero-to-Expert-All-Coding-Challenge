// Create DOM Elements in Javascript 🪀

// let li = document.createElement("li");
// li.className = "list-group-item";
// li.setAttribute("title", "I am fourth Item.");
// li.innerHTML = "Four";

// let list = document.getElementById("list");
// list.appendChild(li);

let li = createElement("li", "Four", "list-group-item");
li.setAttribute("title", "I am number Item");

let list = document.getElementById("list");
list.appendChild(li);

function createElement(tagName, innerHTML, className) {
  let tag = document.createElement(tagName);
  tag.innerHTML = innerHTML;
  tag.className = className || "";
  return tag;
}
