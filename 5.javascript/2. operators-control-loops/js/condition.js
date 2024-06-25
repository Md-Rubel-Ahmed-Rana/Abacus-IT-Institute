// let age = 20;

// // > =

// if (age >= 18) {
//   console.log("You are an adult.");
// }

// let age = 16;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

const person1 = 63;
const person2 = 83;
const person3 = 71;

if (person1 >= 90) {
  console.log("Grade: Golden A+");
} else if (person1 >= 80) {
  console.log("Grade: A+");
} else if (person1 >= 70) {
  console.log("Grade: A");
} else if (person1 >= 60) {
  console.log("Grade: A-");
} else {
  console.log("Grade: F");
}

// switch statement
let day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
