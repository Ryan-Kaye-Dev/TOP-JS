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
   let numButtons = Array.from(document.getElementsByClassName('num-button'));
   let opButtons = Array.from(document.getElementsByClassName('op-button'));
   let eqButton = Array.from(document.getElementsByClassName('eq-button'));


   //add event listener for num buttons
   numButtons.forEach((button) => {
    button.addEventListener('click', function(){
        const clickedButton = this.innerText;
        currentDisplay += clickedButton
        document.getElementById('display-current').textContent = currentDisplay
    })
   });

    //add event listener for operator buttons
    opButtons.forEach((button) => {
        button.addEventListener('click', function(){
            let firstNumber = currentDisplay;
            currentDisplay = '';
            const operator = this.innerText;
            document.getElementById('display-prev').textContent = operator;
            document.getElementById('display-current').textContent = currentDisplay
        })
       });
    
       //add event listener for equals buttons
    eqButton.forEach((button) => {
        button.addEventListener('click', function(){
            const clickedButton = this.innerText;
            currentDisplay += clickedButton
            document.getElementById('display-current').textContent = currentDisplay
        })
       });
   