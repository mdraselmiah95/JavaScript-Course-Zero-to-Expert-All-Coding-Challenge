// Introduction to Event in DOM Manipulation in Javascript 🦒

let btn = document.getElementById("btn");
// console.dir(btn);
// btn.onclick = function (e) {
//   console.log(e);
// };

btn.addEventListener("click", function (e) {
  alert("I have clicked");
});

let box = document.getElementById("box");
box.addEventListener("mousemove", function (e) {
  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;
  if (e.offsetY === 50 && e.offsetX) {
    alert("50 50");
  }
});
