const fibonacci = function(number) {
  if (number < 0) {
    return 'OOPS';
  }

  if (number == 1 || number == 2) {
    return 1;
  }

  let pos1 = 1;
  let pos2 = 1;
  let pos3 = 0;

  for(let i = 0; i < number - 2; i++) {
    pos3 = pos1 + pos2;
    pos1 = pos2;
    pos2 = pos3;
  }

  return pos3;
};

// Do not edit below this line
module.exports = fibonacci;
