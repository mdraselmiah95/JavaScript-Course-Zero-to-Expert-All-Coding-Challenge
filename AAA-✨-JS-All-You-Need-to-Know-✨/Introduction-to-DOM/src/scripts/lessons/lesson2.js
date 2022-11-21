// Create DOM Elements in Javascript 🪀

let li = document.createElement("li");
li.className = "list-group-item";
li.setAttribute = ("title", "I am fourth Item.");
li.innerHTML = "Four";

let list = document.getElementById("list");
list.appendChild(li);
