const fibonacci = function(num) {
    //convert string to num first
    num = Number(num)
  
    //The first 3 number of the sequence
    if (num == 0) return 0;
    if ((num == 1) || (num == 2)) return 1;

      //Build a loop to loop the sequence until i == num, and return the value
      let firstNum = 1;
      let secondNum = 1;
      let sum = 0;
      //The loop starts at the 3rd number of the sequence, so i should be equals to 3 at the beginning with the first execution
      for (let i = 3; i <= num; i++) {
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
      }
    return sum;
  };

// Do not edit below this line
module.exports = fibonacci;
