// Ajax Post Request in JavaScript 📽️

const URL = "https://jsonplaceholder.typicode.com/users";

let postForm = document.getElementById("post-form");
let posts = document.getElementById("new-post");

postForm.addEventListener("click", function (e) {
  e.preventDefault();
});
