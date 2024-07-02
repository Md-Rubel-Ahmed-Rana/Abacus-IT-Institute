const button = document.getElementById("background-btn");

button.addEventListener("click", () => {
  const body = document.body;
  body.classList.forEach((bgClass) => {
    console.log(bgClass);
    if (bgClass === "bgBlue") {
      body.classList.remove("bgBlue");
      body.classList.add("bgPurple");
    } else {
      body.classList.remove("bgPurple");
      body.classList.add("bgBlue");
    }
  });
});
