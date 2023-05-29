// define numbers and operator
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let op = false;
//define variable for current display
let currentDisplay = "";
let secondDisplay = "";

// create mathematical functions
const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// define operate function
let operate = (firstNumber, operator, secondNumber) => {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return substract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    return divide(firstNumber, secondNumber);
  }
};

//define buttons
let numButtons = Array.from(document.getElementsByClassName("num-button"));
let opButtons = Array.from(document.getElementsByClassName("op-button"));
let eqButton = Array.from(document.getElementsByClassName("eq-button"));
let clrButton = Array.from(document.getElementsByClassName("clr-button"));
let delButton = Array.from(document.getElementsByClassName("del-button"));

//define updateDisplays
let updateDisplay = (text) => {
  document.getElementById("display-current").textContent = text;
}

let updateDisplay2 = (text) => {
  document.getElementById("display-prev").textContent = text;
}

//add event listener for num buttons
numButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let clickedButton = this.innerText;
    currentDisplay += clickedButton;
    updateDisplay(currentDisplay);
  });
});

// add event listener for operator buttons
opButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentDisplay !== "") {
      if (firstNumber === 0) {
        // Store the first number if it has not been set yet
        firstNumber = parseFloat(currentDisplay);
      } else {
        // Perform calculation on the fly if the first number and operator are already set
        secondNumber = parseFloat(currentDisplay);
        firstNumber = operate(firstNumber, operator, secondNumber);
        updateDisplay(firstNumber);
      }
      operator = this.innerText;
      updateDisplay2(operator)
      currentDisplay = "";
    }
  });
});

//add event listener for equals button
eqButton.forEach((button) => {
  button.addEventListener("click", function() {
    secondNumber = parseFloat(currentDisplay);
    let answer = operate(firstNumber, operator, secondNumber);
    updateDisplay(answer);
  })
})

//add event listener for clr button
clrButton.forEach((button) => {
    button.addEventListener("click", function () {
        currentDisplay = '';
        document.getElementById("display-current").textContent = '';
    });
  });

  //add event listener for del button
delButton.forEach((button) => {
    button.addEventListener("click", function () {
        currentDisplay = '';
        document.getElementById("display-current").textContent = '';
        document.getElementById("display-prev").textContent = 'DEL';
    });
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    currentDisplay = '';
  });