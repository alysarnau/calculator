const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const power = (a,b) => a ** b;
const factorial = (num) => {
  // factorial needs to list all numbers between x and 1, else 1
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function operate(a,operator,b) {
  if (operator === "+") {
    return add(a,b);
  } else if (operator === "-") {
    return subtract(a,b);
  } else if (operator === "*") {
      return multiply(a,b);
  } else if (operator === "/") {
    return divide(a,b);  
  } else if (operator === "**") {
    return power(a,b);
  } else {
  return "OOPS";
  }
}