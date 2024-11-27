const removeFromArray = function(array, ...itemsToRemove) {
   return array.filter(value => !itemsToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;

//rest parameter allows a fx to accept indefinite number of arguments as an array
