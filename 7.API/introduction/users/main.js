const usersContainer = document.getElementById("users-container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user);
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      const nameElement = document.createElement("h1");
      const idElement = document.createElement("h2");
      const emailElement = document.createElement("h3");

      nameElement.innerHTML = user.name;
      idElement.innerHTML = user.id;
      emailElement.innerHTML = user.email;

      cardElement.appendChild(nameElement);
      cardElement.appendChild(idElement);
      cardElement.appendChild(emailElement);

      usersContainer.appendChild(cardElement);
    });
  });
