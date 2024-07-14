const postContainer = document.getElementById("post-container");

// // callback structure
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json()) // promise / json
//   .then((posts) => {
//     posts.forEach((post) => {
//    const cardElement = document.createElement("div");
//       cardElement.classList.add("card");
//       const titleElement = document.createElement("h1");
//       const idElement = document.createElement("h2");
//       const userIdElement = document.createElement("h3");
//       const bodyElement = document.createElement("p");
//       titleElement.innerHTML = "Title: " + post.title;
//       idElement.innerHTML = "ID:" + post.id;
//       userIdElement.innerHTML = "User ID:" + post.userId;
//       bodyElement.innerHTML = "Body: " + post.body;

//       cardElement.appendChild(titleElement);
//       cardElement.appendChild(idElement);
//       cardElement.appendChild(userIdElement);
//       cardElement.appendChild(bodyElement);

//       postContainer.appendChild(cardElement);
//     });
//   }) // extracted data
//   .catch((error) => console.log(error)); // error

// async-await structure

const showPostData = (posts) => {
  posts.forEach((post) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    const titleElement = document.createElement("h1");
    const idElement = document.createElement("h2");
    const userIdElement = document.createElement("h3");
    const bodyElement = document.createElement("p");
    titleElement.innerHTML = "Title: " + post.title;
    idElement.innerHTML = "ID:" + post.id;
    userIdElement.innerHTML = "User ID:" + post.userId;
    bodyElement.innerHTML = "Body: " + post.body;

    cardElement.appendChild(titleElement);
    cardElement.appendChild(idElement);
    cardElement.appendChild(userIdElement);
    cardElement.appendChild(bodyElement);

    postContainer.appendChild(cardElement);
  });
};

const fetchPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  showPostData(posts);
};

fetchPostData();
