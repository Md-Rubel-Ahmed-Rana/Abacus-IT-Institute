function appendToDisplay(value) {
  document.getElementById("display").value =
    document.getElementById("display").value + value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function squareRoot() {
  let display = document.getElementById("display");
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (e) {
    display.value = "Error";
  }
}

function square() {
  let display = document.getElementById("display");
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (e) {
    display.value = "Error";
  }
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
