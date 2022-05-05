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

// CREATE AN ARRAY FOR NUMBERS AND OPERATORS
let storedValues = [];
let storedOperations = [];
// we can then call the relevant most recent values of that to be our numbers to use

// create a stored answer var that is updated with result of operation each time it runs
// let b = storedValues.push();
// main operator should be last operator input
// let mainOperator = storedOperations.push()
// THEN REDUCE TO GET RESULT


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

// with these values in the array, we can both use them to
// update the result paragraph, but also to call them as needed
// for operate

// we will need to update the clear button functionality

// operator selectors
const operators = document.querySelectorAll(".operators");
// add click function to all numbers
operators.forEach(operator => operator.addEventListener('click', e => {
  operator = e.target.id; 
  displayValue = parseInt(display.textContent); 
  a = parseInt(displayValue); 
  //add value to array
  storedValues.push(displayValue);
  console.log(storedValues);
  mainOperator = operator;
  //add operation to array
  storedOperations.push(operator);
  console.log(storedOperations);
  resultPara.textContent = `${a} ${mainOperator}`;
  clearDisplay();
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
  // stops sum from running if no b or operator
  if (isNaN(b) || mainOperator === undefined) {
      return;
  }
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
dot.addEventListener('click', e => {
  display.textContent += ".";
});


function updateResultPara(){
  resultPara.textContent = `${storedValues.at(-2)} ${storedOperations.at(-1)} ${storedValues.at(-1)}`;
}