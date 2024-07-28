const albumContainer = document.getElementById("albums-container");
const createPostBtn = document.getElementById("create-new-post");
const updatePostBtn = document.getElementById("update-post");
const updatePostBtnPatch = document.getElementById("update-post-patch");
const deletePostBtn = document.getElementById("delete-post");

deletePostBtn.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  const result = await res.json();
  console.log("Deleted post", result);
});

updatePostBtnPatch.addEventListener("click", async () => {
  const updatedPostData = {
    title: "Updated post title using Patch",
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(updatedPostData),
  });
  const result = await res.json();
  console.log("Updated post using patch", result);
});

updatePostBtn.addEventListener("click", async () => {
  const updatedPostData = {
    id: 1,
    title: "Updated post title",
    body: "Updated post body content",
    userId: 1,
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(updatedPostData),
  });
  const result = await res.json();
  console.log("Updated post", result);
});

createPostBtn.addEventListener("click", async () => {
  const postData = {
    title: "This is test post api title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla unde quam ratione, accusamus voluptate fugit officiis rem velit sapiente quo inventore, ipsum tenetur commodi vero dicta recusandae voluptatum?",
    userId: 1,
  };
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(postData),
  });
  const result = await res.json();
  console.log("New post created", result);
});

const fetchAllAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "GET",
  });
  const albums = await res.json();
  showAllAlbums(albums);
};

const showAllAlbums = (albums = []) => {
  albums.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("border");
    albumCard.classList.add("p-3");
    albumCard.classList.add("rounded-md");
    const idElement = document.createElement("h4");
    idElement.innerHTML = album.id;
    const titleElement = document.createElement("h6");
    titleElement.innerHTML = album.title;

    albumCard.appendChild(idElement);
    albumCard.appendChild(titleElement);

    albumContainer.appendChild(albumCard);
  });
};

fetchAllAlbums();
