const removeFromArray = function (arr, ...num) {
  let newArray = [];
    for (const item of arr) {
      for (const num2 of num) {
          if (num.indexOf(num2) == 0) {
          newArray = arr.filter(arr => arr !== num2);
          } else {
          newArray = newArray.filter(newArray => newArray !== num2) }
      }
    }
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
