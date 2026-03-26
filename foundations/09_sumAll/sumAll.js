const sumAll = function(num1, num2) {
  if ((num1 < 0 || num2 < 0) || (!Number.isInteger(num1) || !Number.isInteger(num2))) {
    return 'ERROR'
  }

  let lowestNumber = 0;
  let highestNumber = 0;
  let sumTotal = 0;

  if (num1 < num2) {
    lowestNumber = num1;
    highestNumber = num2;
  } else {
    lowestNumber = num2;
    highestNumber = num1;
  }

  for (let i = lowestNumber; i <= highestNumber; i++) {
    sumTotal += i;
  }

  return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
