const questions = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language",
    options: [
      "JavaScript is a database",
      "JavaScript is a server",
      "JavaScript is a programming language",
      "JavaScript is a text editor",
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answer: "Netscape",
    options: ["Microsoft", "Apple", "Google", "Netscape"],
  },
  {
    question: "What is the use of JavaScript in web development?",
    answer: "To add interactivity to web pages",
    options: [
      "To style web pages",
      "To add interactivity to web pages",
      "To create server-side applications",
      "To manage databases",
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answer: "Angular",
    options: ["Django", "Laravel", "Spring", "Angular"],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: "Using var, let, or const",
    options: ["Using def", "Using int", "Using var, let, or const", "Using $"],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answer: "//",
    options: ["#", "//", "/* */", "<!-- -->"],
  },
  {
    question: "What is the output of 'typeof null' in JavaScript?",
    answer: "object",
    options: ["null", "undefined", "object", "function"],
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    answer: "push()",
    options: ["add()", "append()", "push()", "insert()"],
  },
  {
    question: "What does 'DOM' stand for in JavaScript?",
    answer: "Document Object Model",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Desktop Object Model",
      "Domain Object Model",
    ],
  },
  {
    question: "Which of the following is a looping structure in JavaScript?",
    answer: "for",
    options: ["if", "while", "for", "switch"],
  },
];

let currentIndex = 0;

const firstQuestion = questions[currentIndex];
const givenAnswers = [];

let currentAnswer = "";

const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("score-section");

const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total-quiz");
const correctAnswerElement = document.getElementById("correct-ans");
const wrongAnswerElement = document.getElementById("wrong-ans");

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
nextButton.setAttribute("disabled", true);
nextButton.classList.add("disabled-button");
prevButton.setAttribute("disabled", true);
prevButton.classList.add("disabled-button");
submitButton.setAttribute("disabled", true);
submitButton.classList.add("disabled-button");

const questionElement = document.getElementById("question");

const option1Element = document.getElementById("answer1-label");
const option1Input = document.getElementById("answer1-input");

const option2Element = document.getElementById("answer2-label");
const option2Input = document.getElementById("answer2-input");

const option3Element = document.getElementById("answer3-label");
const option3Input = document.getElementById("answer3-input");

const option4Element = document.getElementById("answer4-label");
const option4Input = document.getElementById("answer4-input");

const handleGoNextQuestion = () => {
  currentIndex++;

  if (currentIndex === questions.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  }

  // push the current answer to the given answers array
  givenAnswers.push(currentAnswer);
  // make empty current answer
  currentAnswer = "";
  // remove disable logic from prev button
  prevButton.removeAttribute("disabled");
  prevButton.classList.remove("disabled-button");
  nextButton.setAttribute("disabled", true);
  nextButton.classList.add("disabled-button");

  // call the function to show data on UI
  showCurrentQuestion(currentIndex);
};

const handleGoPrevQuestion = () => {
  currentIndex--;
  if (currentIndex <= 0) {
    prevButton.setAttribute("disabled", true);
    prevButton.classList.add("disabled-button");
  }

  showCurrentQuestion(currentIndex);
};

const handleGetSelectedAnswer = (event) => {
  if (event.target.tagName === "LABEL") {
    currentAnswer = event.target.innerText;
    nextButton.removeAttribute("disabled");
    nextButton.classList.remove("disabled-button");
  } else if (event.target.tagName === "INPUT") {
    const label = document.querySelector(`label[for=${event.target.id}]`);
    currentAnswer = label.innerText;
    nextButton.removeAttribute("disabled");
    nextButton.classList.remove("disabled-button");
  }

  if (currentIndex === questions.length - 1) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled-button");
  }
};

const handleSubmit = () => {
  givenAnswers.push(currentAnswer);
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  totalElement.innerHTML = questions.length;
  // show calculated answer
  calculateAnswer();
};

const calculateAnswer = () => {
  let correctAnswerCount = 0;
  let wrongAnswerCount = 0;
  questions.forEach((question) => {
    if (givenAnswers.includes(question.answer)) {
      correctAnswerCount++;
    } else {
      wrongAnswerCount++;
    }
  });

  // show answer to elements
  scoreElement.innerHTML = correctAnswerCount * 10;
  correctAnswerElement.innerHTML = correctAnswerCount;
  wrongAnswerElement.innerHTML = wrongAnswerCount;
};

// restart button
document.getElementById("restart-button").addEventListener("click", () => {
  currentIndex = 0;
  showCurrentQuestion(currentIndex);

  // hide score container and show quiz container
  quizContainer.style.display = "block";
  nextButton.style.display = "block";
  scoreContainer.style.display = "none";
  submitButton.style.display = "none";

  // disabled  prev and next buttons
  nextButton.setAttribute("disabled", true);
  nextButton.classList.add("disabled-button");
  prevButton.setAttribute("disabled", true);
  prevButton.classList.add("disabled-button");
});

const showCurrentQuestion = (currentIndex) => {
  // question
  questionElement.innerHTML = questions[currentIndex].question;

  // option 1
  option1Element.innerHTML = questions[currentIndex].options[0];
  option1Input.value = questions[currentIndex].options[0];
  option1Input.checked = false;
  // option 2
  option2Element.innerHTML = questions[currentIndex].options[1];
  option2Input.value = questions[currentIndex].options[1];
  option2Input.checked = false;
  // option 3
  option3Element.innerHTML = questions[currentIndex].options[2];
  option3Input.value = questions[currentIndex].options[2];
  option3Input.checked = false;
  // option 4
  option4Element.innerHTML = questions[currentIndex].options[3];
  option4Input.value = questions[currentIndex].options[3];
  option4Input.checked = false;
};

showCurrentQuestion(0);
