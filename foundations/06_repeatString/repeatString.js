const repeatString = function(str, num) {
  if (num < 0) {
    return 'ERROR';
  }

  let finalString = '';
  for (let i = 0; i < num; i++) {
    finalString += str;
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
