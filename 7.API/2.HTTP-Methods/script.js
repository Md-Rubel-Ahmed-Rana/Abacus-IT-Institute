const photoContainer = document.getElementById("photo-container");

const displayPhotos = (photos) => {
  photos.forEach((photo) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    const titleElement = document.createElement("h4");
    titleElement.innerHTML = photo.title;
    const idElement = document.createElement("h6");
    idElement.innerHTML = photo.id;
    const imageElement = document.createElement("img");
    imageElement.src = photo.url;

    // append card children
    cardElement.appendChild(titleElement);
    cardElement.appendChild(idElement);
    cardElement.appendChild(imageElement);

    photoContainer.appendChild(cardElement);
  });
};

// get request
const fetchPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();
  displayPhotos(photos);
};

fetchPhotos();

// post request
const createUser = async () => {
  const newUSer = {
    name: "Mohin",
    email: "mohin@gmail.com",
    password: "1234567",
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(newUSer),
  });
};
// put request
const newUSer = {
  id: "",
  name: "Mohin",
  email: "mohin@gmail.com",
  password: "1234567",
};
const updateUserData = async () => {
  const newUSer = {
    email: "mohin@gmail.com",
  };
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    headers: {},
    method: "PUT",
    body: "",
  });
};
