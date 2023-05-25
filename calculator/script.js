   // define numbers and operator
   const firstNumber = 0;
   const secondNumber = 0;
   const operators = ['+','-','*','/'];

   // create mathematical functions
const add = (a,b) => {
    return a + b
};

const substract = (a,b) => {
    return a - b
};

const multiply = (a,b) => {
    return a * b
};

const divide = (a,b) => {
    return a / b
};


   // define operate function
let operate = (firstNumber, operator, secondNumber) => {
    if (operator === '+') {
        return add(firstNumber, secondNumber)
    } else if (operator === '-') {
        return substract(firstNumber, secondNumber)
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber)
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber)
    }
   };

   //define variable for current display
   let currentDisplay = '';
   
   //define buttons
   let buttons = Array.from(document.getElementsByClassName('button'));

   //add event listener
   buttons.forEach((button) => {
    button.addEventListener('click', function(){
        const clickedButton = this.innerText;
        currentDisplay += clickedButton
        document.getElementById('display-current').textContent = currentDisplay
    })
   });
   
   console.log(buttons);
   