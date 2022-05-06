class calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
  }

  clear() {

  };

  delete() {

  };

  appendNumber(number) {

  };

  chooseOperation(operation) {

  };
  
  operate() {

  };

  updateDisplay() {

  };
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

















// let a;
// let b;
// let mainOperator;
// let result;

// const add = (a,b) => a + b;
// const subtract = (a,b) => a - b;
// const multiply = (a,b) => a * b;
// // Different divide function to account for divide by zero!
// function divide(a,b) {
//     if (b === 0 || isNaN(b)) {
//       return "Cheeky!";
//     } else {
//       return a/b;
//     }
// }

// // CREATE AN ARRAY FOR NUMBERS AND OPERATORS
// let storedValues = [];
// let storedOperations = [];
// // operate function
// function operate(mainOperator, a, b) {
//     if (mainOperator === "multiply") {
//         return multiply(a,b);
//     } else if (mainOperator === "divide"){
//         return divide(a,b);
//     } else if (mainOperator === "add"){
//         return add(a,b);
//     } else if (mainOperator === "subtract"){
//         return subtract(a,b);
//     } else {
//       return "ERROR";
//     }
// }

// // operator selectors
// const operators = document.querySelectorAll(".operators");
// operators.forEach(operator => operator.addEventListener('click', e => {
//   operator = e.target.id; 
//   displayValue = parseInt(display.textContent); 
//   storedValues.push(displayValue); 
//   mainOperator = operator;
//   storedOperations.push(mainOperator);
//   if (storedValues.length >= 2) {
//     result = operate(storedOperations.at(-2),storedValues.at(-2),storedValues.at(-1));
//     storedValues.push(result);
//     console.log(result);
//     if (isNaN(result)) {
//       display.textContent = `${result}`;
//       resultPara.textContent += `${storedOperations.at(-1)} ${storedValues.at(-1)}`;
//     } else {
//       display.textContent = `${result.toFixed(1)}`;
//       resultPara.textContent += `${storedOperations.at(-2)} ${storedValues.at(-2)} equals ${storedValues.at(-1)}`;
//     } 
//   } else {
//   resultPara.textContent = `${storedValues.at(-1)} ${storedOperations.at(-1)}`;
//   clearDisplay();
//   return mainOperator;
//   }
// }
// ))

// // Sum functionality
// const sum = document.querySelector("#sum");
// sum.addEventListener('click', e => {
//   displayValue = display.textContent; 
//   storedValues.push(parseInt(displayValue));
//   //push display value to array
//   b = storedValues.at(-1)
//   a = storedValues.at(-2)
//   mainOperator = storedOperations.at(-1)
//   result = operate(mainOperator,a,b);
//   storedValues.push(parseInt(result))
//   // stops sum from running if no b or operator
//   if (isNaN(b) || mainOperator === undefined) {
//       return;
//   }
//   if (isNaN(result)) {
//     display.textContent = `${result}`;
//     resultPara.textContent = `${a} ${mainOperator} ${b} equals ${result}`;
//   } else {
//     display.textContent = `${result.toFixed(1)}`;
//     resultPara.textContent = `${a} ${mainOperator} ${b} equals ${result.toFixed(1)}`;
//   } 
//   return result;
//   }
// );

// // digit buttons
// const digits = document.querySelectorAll(".digits");
// digits.forEach(digit => digit.addEventListener('click', e => {
//     display.textContent += e.target.id;
// })
// );
// //store a, b, and operator in a text field just for kicks
// const calc = document.querySelector('.calculator-grid');
// const resultPara = document.createElement('p');
// calc.appendChild(resultPara);
// // key selectors
// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
// let display = document.querySelector("#display");
// // Clear Button Functionality
// const clear = document.querySelector("#clear");
// function clearDisplay() {
//     display.textContent = '';
// };
// clear.addEventListener('click', e => {
//     resultPara.textContent = '';
//     storedOperations = [];
//     storedValues = [];
//     clearDisplay();
// });
// let displayValue;

// // Backspace functionality
// const del = document.querySelector("#del");
// del.addEventListener('click', e => {
//     let onScreen = display.textContent 
//     onScreen = onScreen.slice(0, -1);
//     display.textContent = onScreen;
// });

// // STILL NEED TO DISABLE BUTTON AFTER CLICK
// const dot = document.querySelector(".decimal");
// dot.addEventListener('click', e => {
//   display.textContent += ".";
// });

// function updateResultPara(){
//   // if (isNaN(result)) {
//     resultPara.textContent = `${storedValues.at(-2)} ${storedOperations.at(-1)} ${storedValues.at(-1)} 
//     equals RESULTPLACEHOLDER`;
//   // } else {
//   //   resultPara.textContent = `${storedValues.at(-2)} ${storedOperations.at(-1)} ${storedValues.at(-1)} 
//   //     equals ${result.toFixed(1)}`;
//   // } 
// }