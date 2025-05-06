const fibonacci = function(num) {
    // Convert input to a number
    num = Number(num)

    //Validate input: Fibonacci is only defined for positive integers
    if (num < 0) return "OOPS";
  
    // Handle base cases
    if (num == 0) return 0;
    if (num == 1 || num == 2) return 1;

      //Build a loop to loop the sequence until i == num, and return the value
      let firstNum = 1;
      let secondNum = 1;
      let sum = 0;
      // Calculate Fibonacci iteratively
      for (let i = 3; i <= num; i++) {
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
      }
    return sum;
  };

// Do not edit below this line
module.exports = fibonacci;
