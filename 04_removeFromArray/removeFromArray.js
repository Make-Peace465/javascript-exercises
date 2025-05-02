const removeFromArray = function (arr, ...num) {
    let newArray = [];
    for (const item of arr) {
      for (const num2 of num) {
        if (item !== num2) {
          newArray = newArray.push(arr[num2-1]);
        }
      }
    }
    return newArray;
  };
  
  console.log(removeFromArray([1, 2, 3, 4], 3, 2));
  

// Do not edit below this line
module.exports = removeFromArray;
