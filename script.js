const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const power = (a,b) => a ** b;

function operate(operator, a, b) {
    return operator(a, b);
}
// Create the functions that populate the display when 
// you click the number buttons… you should be storing 
// the ‘display value’ in a variable somewhere for use 
// in the next step.

let displayValue;
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

//REMEMBER when we type things in we want to append the text to the display textContent

//display selector
let display = document.querySelector("#display");

// Clear Button Functionality
const clear = document.querySelector("#clear");
function clearDisplay() {
    display.textContent ="";
}
clear.addEventListener('click', clearDisplay);
