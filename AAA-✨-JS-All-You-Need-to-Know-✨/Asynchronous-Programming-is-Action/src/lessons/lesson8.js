// Implement Fetch API in Javascript 💫

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

let res = fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
