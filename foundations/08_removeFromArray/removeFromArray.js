const removeFromArray = function(arr, ...items) {
  return arr.filter(element => !items.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
