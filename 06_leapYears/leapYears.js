const leapYears = function(value) {
    if (value % 4 == 0) {
      if ((value % 100 == 0) && (value % 400 == 0)) {
        return true;
      } else if ((value % 100 == 0) && (value % 400 !== 0)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false; 
    }
  };

// Do not edit below this line
module.exports = leapYears;
