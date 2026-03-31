const palindromes = function (string)  {
  let reversedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i].toLowerCase();
  }

  reversedString = reversedString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  return string == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
