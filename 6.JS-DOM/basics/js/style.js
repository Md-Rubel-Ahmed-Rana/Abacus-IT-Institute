console.log("Style js file connected");
document.body.style.backgroundColor = "gray";

const welcomeHead = document.getElementById("welcome-head");
welcomeHead.style.color = "white";
welcomeHead.style.textAlign = "center";
welcomeHead.style.fontSize = "40px";

// change the form styles
const contactForm = document.getElementById("contact-form");

contactForm.style.border = "1px solid white";
contactForm.style.width = "300px";
contactForm.style.display = "flex";
contactForm.style.flexDirection = "column";
contactForm.style.gap = "10px";
contactForm.style.padding = "10px";
contactForm.style.marginTop = "10px";
contactForm.style.borderRadius = "10px";

// inputs
const inputName = document.getElementById("input-name");
inputName.style.padding = "10px";
inputName.style.borderRadius = "4px";
inputName.style.outline = "none";
inputName.style.border = "none";

const inputEmail = document.getElementById("input-email");
inputEmail.style.padding = "10px";
inputEmail.style.borderRadius = "4px";
inputEmail.style.outline = "none";
inputEmail.style.border = "none";

const contactFormBtn = document.getElementById("contact-form-button");

contactFormBtn.style.backgroundColor = "blue";
contactFormBtn.style.border = "none";
contactFormBtn.style.color = "white";
contactFormBtn.style.borderRadius = "4px";
contactFormBtn.style.padding = "10px 0px";
