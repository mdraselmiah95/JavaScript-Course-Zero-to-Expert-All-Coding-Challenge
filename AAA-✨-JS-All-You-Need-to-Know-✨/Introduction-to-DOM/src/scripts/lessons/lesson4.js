// Introduction to Event in DOM Manipulation in Javascript 🦒

let btn = document.getElementById("btn");
// console.dir(btn);
// btn.onclick = function (e) {
//   console.log(e);
// };

btn.addEventListener("click", function (e) {
  alert("I have clicked");
});
