class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  };

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  };

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  };

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.operate()
    };
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  };
  // aka compute
  operate() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+': 
        result = prev + current;
        break
      case '-': 
        result = prev - current;
        break
      case 'x': 
        result = prev * current;
        break
      case '÷': 
        result = prev / current;
        break
      default: 
        return
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
        `${this.previousOperand} ${this.operation}`
    }
  };
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
});

equalsButton.addEventListener('click', button => {
  calculator.operate();
  calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})