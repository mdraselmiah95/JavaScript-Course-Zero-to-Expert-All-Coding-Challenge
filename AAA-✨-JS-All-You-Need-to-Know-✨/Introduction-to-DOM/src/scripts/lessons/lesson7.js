// AJAX GRT Request in JavaScript ⌛

let load = document.getElementById("load-post");
let postList = document.getElementById("posts");

const URL = "https://jsonplaceholder.typicode.com/users";

load.addEventListener("click", function () {
  fetch(URL)
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        let listItem = listItemGenerator(post);
        postList.appendChild(listItem);
      });
    })
    .catch((error) => console.log(error.message));
});

function listItemGenerator(item) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = item.name;

  return li;
}

//This is cool
