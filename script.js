const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const power = (a,b) => a ** b;

function operate(operator, a, b) {
    return operator(a, b);
}
let operator;
//
const operators = document.querySelectorAll(".operators");
operators.forEach(operator => operator.addEventListener('click', e => {
  operator = e.target.id; 
  displayValue = display.textContent; 
  a = parseInt(displayValue); 
  console.log(operator);
    //once you click the operator button, the value in the display saves as a
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
    display.textContent ="";
}
clear.addEventListener('click', clearDisplay);

//declare displayValue
let displayValue;

// Sum functionality
const sum = document.querySelector("#sum");
sum.addEventListener('click', e => {
  displayValue = display.textContent; 
  a = displayValue;
  console.log(a);
  console.log(operate(add,2,2))
  }
);
 // use this with sum instead
function operate(operator, a, b) {
    return operator(a, b);
}