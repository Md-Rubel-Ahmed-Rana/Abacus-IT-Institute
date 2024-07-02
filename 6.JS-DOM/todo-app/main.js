const todos = [
  {
    title: "Make a video",
    description: "Make a short video for marketing on Web Development",
    status: false,
  },
  {
    title: "Design navbar",
    description: "Design todo app navbar using Bootstrap",
    status: true,
  },
  {
    title: "Learn JQuery",
    description:
      "Learn JQuery to minimize development time and more productivity",
    status: false,
  },
  {
    title: "Explore about JS ES6 feature",
    description: "Learn about javascript es6 features",
    status: true,
  },
];

const todoContainer = document.getElementById("todo-container");

const handleShowTodos = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    const todoTitle = document.createElement("h4");
    todoTitle.innerHTML = todo.title;

    const todoDescription = document.createElement("p");
    todoDescription.innerHTML = todo.description;

    const todoActions = document.createElement("div");

    const todoCheckBoxDiv = document.createElement("div");
    todoCheckBoxDiv.classList.add("checkbox");

    const todoStatusLabel = document.createElement("label");
    todoStatusLabel.innerHTML = "Status";
    todoStatusLabel.setAttribute("for", `task-check-${index}`);

    const todoStatusInputCheckbox = document.createElement("input");
    todoStatusInputCheckbox.setAttribute("type", "checkbox");
    todoStatusInputCheckbox.setAttribute("id", `task-check-${index}`);
    todoStatusInputCheckbox.setAttribute("name", "task-check");
    todoStatusInputCheckbox.checked = todo.status;

    const todoDeleteDiv = document.createElement("div");
    todoDeleteDiv.classList.add("delete-btn-div");

    const todoDeleteBtn = document.createElement("button");
    todoDeleteBtn.classList.add("delete-button");
    todoDeleteBtn.innerHTML = "Delete";
    todoDeleteBtn.dataset.index = index;

    // Add event listener to delete button
    todoDeleteBtn.addEventListener("click", handleDeleteTodo);

    // append children for each corresponding parent
    // delete div
    todoDeleteDiv.appendChild(todoDeleteBtn);
    // checkbox div
    todoCheckBoxDiv.appendChild(todoStatusLabel);
    todoCheckBoxDiv.appendChild(todoStatusInputCheckbox);
    // actions div
    todoActions.appendChild(todoCheckBoxDiv);
    todoActions.appendChild(todoDeleteDiv);
    // card
    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDescription);
    todoCard.appendChild(todoActions);
    // add the card to the container
    todoContainer.appendChild(todoCard);
  });
};

// add new todo
const handleTodoSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const description = form.description.value;
  const newTodo = {
    title: title,
    description: description,
    status: false,
  };
  todos.push(newTodo);
  handleShowTodos();

  // clear the form data
  form.title.value = "";
  form.description.value = "";
};

// delete todo
const handleDeleteTodo = (event) => {
  const index = event.target.dataset.index;
  todos.splice(index, 1);
  handleShowTodos();
};

handleShowTodos();
