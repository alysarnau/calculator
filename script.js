let a;
let b;
let mainOperator;
let result;

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;

// Different divide function to account for divide by zero!
function divide(a,b) {
    if (b === 0 || isNaN(b)) {
      return "Cheeky!";
    } else {
      return a/b;
    }
}

function operate(mainOperator, a, b) {
    if (mainOperator === "multiply") {
        return multiply(a,b);
    } else if (mainOperator === "divide"){
        return divide(a,b);
    } else if (mainOperator === "add"){
        return add(a,b);
    } else if (mainOperator === "subtract"){
        return subtract(a,b);
    } else {
      return "ERROR";
    }
}

// operator selectors
const operators = document.querySelectorAll(".operators");
// add click function to all numbers
operators.forEach(operator => operator.addEventListener('click', e => {
  operator = e.target.id; 
  displayValue = display.textContent; 
  a = parseInt(displayValue); 
  mainOperator = operator;
  resultPara.textContent = `${a} ${mainOperator}`;
  clearDisplay();
// trying to make operators work
  return mainOperator;
}
))

// digit buttons
const digits = document.querySelectorAll(".digits");
// add click function to all digits
digits.forEach(digit => digit.addEventListener('click', e => {
    //this appends the number to display
    display.textContent += e.target.id;
})
);

//store a, b, and operator in a text field just for kicks
const sumClear = document.querySelector('.sumClear');
const calc = document.querySelector('#calc-container');
const resultPara = document.createElement('p');
calc.appendChild(resultPara);


// key selectors
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

//display selector
let display = document.querySelector("#display");

// Clear Button Functionality
const clear = document.querySelector("#clear");
function clearDisplay() {
    display.textContent = '';
};
clear.addEventListener('click', e => {
    clearDisplay();
    resultPara.textContent = '';
    a = '';
    b = '';
    mainOperator = '';
});

let displayValue;

// Sum functionality
const sum = document.querySelector("#sum");
sum.addEventListener('click', e => {
  displayValue = display.textContent; 
  b = parseInt(displayValue);
  result = operate(mainOperator,a,b);
  if (isNaN(result)) {
    display.textContent = `${result}`;
    resultPara.textContent = `${a} ${mainOperator} ${b} equals ${result}`;
  } else {
    display.textContent = `${result.toFixed(1)}`;
    resultPara.textContent = `${a} ${mainOperator} ${b} equals ${result.toFixed(1)}`;
  } 
  return result;
  }
);

// Backspace functionality
const del = document.querySelector("#del");
del.addEventListener('click', e => {
    let onScreen = display.textContent 
    onScreen = onScreen.slice(0, -1);
    display.textContent = onScreen;
});

// STILL NEED TO DISABLE BUTTON AFTER CLICK
const dot = document.querySelector(".decimal");
dot.addEventListener('click', function (e) {
    display.textContent += ".";
})
