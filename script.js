// from earlier exercise

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((partialSum, newValue) => partialSum + newValue, 0);
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	// factorial needs to list all numbers between x and 1, else 1
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}