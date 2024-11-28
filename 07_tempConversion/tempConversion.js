const convertToCelsius = function(F) {
 let ftoC = (F-32)/1.8
 return +ftoC.toFixed(1)
};

const convertToFahrenheit = function(C) {
  let ctoF = (C*1.8) + 32
  return +ctoF.toFixed(1)
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
