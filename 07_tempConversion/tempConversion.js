const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = 0;
    celsiusTemp = (fahrenheitTemp - 32)/(9/5);
    celsiusTemp = Math.round(celsiusTemp * 10)/10;
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = 0;
  fahrenheitTemp = (celsiusTemp * (9/5)) + 32;
  fahrenheitTemp = Math.round (fahrenheitTemp*10)/10;
return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
