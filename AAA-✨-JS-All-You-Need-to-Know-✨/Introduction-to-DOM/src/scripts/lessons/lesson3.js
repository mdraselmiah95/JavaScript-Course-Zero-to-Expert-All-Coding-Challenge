// Styling DOM in JavaScript ⚧️

let title = document.getElementById("title");
title.style.color = "pink";
// title.style.color = "#f00";
title.style.fontStyle = "italic";
title.style.fontSize = "2rem";
title.style.background = "black";
// console.log(title.style);

let styleObj = {
  background: "black",
  fontSize: "1rem",
  fontStyle: "italic",
  color: "green",
};

let list = document.getElementById("list");

[...list.children].forEach((li) => Object.assign(li.style, styleObj));
