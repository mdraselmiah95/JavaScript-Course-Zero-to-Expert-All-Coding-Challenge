// Ajax Post Request in JavaScript 📽️

const URL = "https://jsonplaceholder.typicode.com/posts";

let postForm = document.getElementById("post-form");
let posts = document.getElementById("new-post");

postForm.addEventListener("click", function (e) {
  e.preventDefault();

  let title = this.title.value || undefined;
  let body = this.body.value || undefined;

  if (title && body) {
    let postObj = {
      userId: 100,
      title,
      body,
    };

    // post

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/JSON",
      },
      body: JSON.stringify(postObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  } else {
    alert("Please provide Every Details. 💢");
  }
});
