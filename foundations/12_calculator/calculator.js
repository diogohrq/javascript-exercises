const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number , 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total * number , 1)
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
