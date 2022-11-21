let list = document.getElementById("list");

let parent = list.parentElement;
//console.log(parent);

let children = list.children;
//console.log(children);

//console.log(list.previousElementSibling);
//console.log(list.nextElementSibling);

let li = document.querySelector("li");
//console.log(li.nextElementSibling);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// How to Loop Throw HTML Collections in Javascript 🪀

let listItem = document.getElementsByTagName("li");

let listItems = Array.from(listItem);
console.log(listItems);

listItems.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
});
