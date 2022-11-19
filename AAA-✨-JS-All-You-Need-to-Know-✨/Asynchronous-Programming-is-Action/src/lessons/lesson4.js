// Ajax with Callback 📢

const xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/users");

xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.response);
      console.log(users);
    } else {
      console.log(xhr.status);
    }
  }
};

// xhr.send();

function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}

// https://jsonplaceholder.typicode.com/users

getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // res.forEach((user) => console.log(user.name));
  }
});

getRequest("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
    // res.forEach((post) => console.log(post.title));
  }
});

const BASE_URL = "https://jsonplaceholder.typicode.com";

function getNewRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error("Error Occurred 💥"));
        }
      }
    };
    xhr.send();
  });
}

getNewRequest(`${BASE_URL}/users/10`)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
