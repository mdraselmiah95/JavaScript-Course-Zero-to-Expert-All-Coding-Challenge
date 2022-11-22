// Introduction to Event in DOM Manipulation in Javascript 🦒

let btn = document.getElementById("btn");
// console.dir(btn);
// btn.onclick = function (e) {
//   console.log(e);
// };

let list = document.getElementById("list");

btn.addEventListener("click", function (e) {
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = "Newly Item.";
  list.appendChild(item);
});

// Event Delegation Problem

// [...list.children].forEach((li) => {
//   console.log(li);
//   li.onClink = function (e) {
//     e.target.remove();
//   };
// });

list.addEventListener("click", function (e) {
  if (this.contains(e.target)) {
    e.target.remove();
  }
});

let box = document.getElementById("box");
box.addEventListener("mousemove", function (e) {
  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;
  if (e.offsetY === 50 && e.offsetX) {
    alert("50 🌬️ 50 ");
  }
});
