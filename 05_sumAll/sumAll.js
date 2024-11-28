const sumAll = function(min, max) {

  if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR'
  if (min % 1 != 0 || max % 1 != 0) return 'ERROR'
  //method .isInteger would have covered type number and decimal
  //if(!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR'
  if (min < 0 || max < 0) return 'ERROR'

  if (min > max) [min, max] = [max, min]
  for (let i = lower; i <= upper; i++) {
   sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
