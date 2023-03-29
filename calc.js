const display = document.getElementById("display");
let num1 = null;
let num2 = null;
let operation = null;
let result = null;

function handleNumberClick(event) {
  const numString = event.target.value;

  if (!operation) {
    num1 = num1 ? num1 + numString : numString;
  } else {
    num2 = num2 ? num2 + numString : numString;
  }

  display.value = operation ? num2 : num1;
}

function handleOperationClick(event) {
  if (!operation) {
    operation = event.target.textContent;
    num2 = null;
  } else {
    num1 = calculateResult(num1, num2, operation);
    operation = event.target.textContent;
    num2 = null;
  }

  display.value = operation;
}

function handleClearClick() {
  num1 = null;
  num2 = null;
  operation = null;
  result = null;
  display.value = "";
}

function handleEqualsClick() {
  result = calculateResult(num1, num2, operation);
  display.value = result;
  num1 = result;
  num2 = null;
  operation = null;
  result = null;
}

function calculateResult(num1, num2, operation) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return null;
  }
}

document.querySelectorAll("button").forEach(button => {
  if (button.value.match(/[0-9]/)) {
    button.addEventListener("click", handleNumberClick);
  } else if (button.textContent.match(/[\+\-\*\/]/)) {
    button.addEventListener("click", handleOperationClick);
  } else if (button.id === "clearButton") {
    button.addEventListener("click", handleClearClick);
  } else if (button.id === "equalsButton") {
    button.addEventListener("click", handleEqualsClick);
  }
});