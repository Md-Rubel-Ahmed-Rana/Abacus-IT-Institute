$(document).ready(function () {
  $("#change-btn")
    .click(handleBodyBgColorChange)
    .mouseenter(handleMouseEnter)
    .mouseleave(handleMouseLeave);
});

const handleMouseLeave = () => {
  $("body").css("background-color", "white");
  $(".header").css("color", "black");
};

const handleMouseEnter = () => {
  console.log(users);
  $("body").css("background-color", "blue");
  $(".header").css("color", "white");
};

const handleBodyBgColorChange = () => {
  const currentBgColor = $("body").css("background-color");
  if (currentBgColor === "rgb(255, 255, 255)") {
    $("body").css("background-color", "blue");
    $(".header").css("color", "white");
  } else {
    $("body").css("background-color", "white");
    $(".header").css("color", "black");
  }

  $("h3.introduction").css({
    "background-color": "green",
    color: "white",
    margin: "10px",
    padding: "5px 10px",
    "border-radius": "5px",
  });
};

// using raw dom/javascript
// document.getElementById("change-btn").addEventListener("click", () => {
//   const bodyBgColor = document.body.style.backgroundColor;
//   if (bodyBgColor === "white") {
//     document.body.style.backgroundColor = "blue";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// });
