const todosContainer = document.getElementById("todos-container");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) => {
    todos.forEach((todo) => {
      console.log(todo);
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      const titleElement = document.createElement("h1");
      titleElement.innerHTML = todo.title;
      const idElement = document.createElement("h2");
      idElement.innerHTML = todo.id;
      const userIdElement = document.createElement("h3");
      userIdElement.innerHTML = todo.userId;
      const completedElement = document.createElement("h4");
      completedElement.innerHTML = todo.completed;

      cardElement.appendChild(titleElement);
      cardElement.appendChild(idElement);
      cardElement.appendChild(userIdElement);
      cardElement.appendChild(completedElement);
      todosContainer.appendChild(cardElement);
    });
  });
