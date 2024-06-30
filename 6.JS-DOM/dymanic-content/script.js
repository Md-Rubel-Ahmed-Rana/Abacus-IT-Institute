// catch the parent element/node/tag
const navList = document.getElementById("nav-list");

// create a li  element/node/tag
const liElement = document.createElement("li");

// add text to the created li tag
liElement.innerHTML = "Logout";

// add/append the li to the parent element
navList.appendChild(liElement);

// dynamic content render
const courses = [
  "Web Development",
  "App Development",
  "Web Design",
  "Graphics Design",
  "UI/UX Design",
];

// catch the parent ul
const courseList = document.querySelector("#course-list");
for (let index = 0; index < courses.length; index++) {
  const element = courses[index];
  const courseItem = document.createElement("li");
  courseItem.innerHTML = element;
  courseList.appendChild(courseItem);
}

const services = [
  "UI/UX Design",
  "Website Design",
  "Database Management",
  "DevOps",
];

const serviceParent = document.querySelector("#service-cards");

for (let index = 0; index < services.length; index++) {
  const service = services[index];
  const cardElement = document.createElement("div");
  cardElement.setAttribute("id", "card");
  const cardTitle = document.createElement("h3");
  cardTitle.innerHTML = service;
  const cardButton = document.createElement("button");
  cardButton.innerHTML = "Buy now";

  // append the title and button to card element/div
  cardElement.appendChild(cardTitle);
  cardElement.appendChild(cardButton);

  // append the card to the parent element
  serviceParent.appendChild(cardElement);
}
