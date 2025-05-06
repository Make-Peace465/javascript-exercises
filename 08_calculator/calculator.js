const add = function(x, y) {
	let sum = (x + y);
  return sum;
};

const subtract = function(x, y) {
	let minus = (x - y);
  return minus;
};

const sum = function(num) {
  let sumValue = 0;
  for (const item of num) {
    NumItem = Number(item);
    sumValue += NumItem;
  }
	return sumValue;
};

const multiply = function(num) {
  let multiplyValue = 0;
  for (const item of num) {
    if (num.indexOf(item) == 0) {
      multiplyValue += item;
    } else {
      multiplyValue *= item;
    }
  }
  return multiplyValue;
};

const power = function(base, exponent) {
	let powerValue = Math.pow(base, exponent);
  return powerValue;
};

const factorial = function(num) {
	let factorialValue = 1;
  if (num == 0) {
    factorialValue = 1;
    return factorialValue;
  } else {
    for (let i = 1; i <= num; i++) {
      factorialValue *= i;
    }
  return factorialValue;
  }
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