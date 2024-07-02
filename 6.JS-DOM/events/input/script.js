const handleNameChange = (event) => {
  const name = event.target.value;
  const inputtedName = document.getElementById("inputted-name");
  inputtedName.innerHTML = name;
};
