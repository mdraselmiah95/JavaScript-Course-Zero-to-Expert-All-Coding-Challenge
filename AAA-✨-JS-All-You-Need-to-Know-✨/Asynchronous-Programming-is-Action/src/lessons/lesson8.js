// Implement Fetch API in Javascript 💫

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

let res = fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return Promise.resolve("New Promise 👵");
  })
  .then((str) => {
    console.log(str);
    return Promise.resolve("Another Promise 🐥");
  })
  .then((another) => {
    console.log(another);
  })
  .catch((err) => console.log(err));

let res1 = fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
