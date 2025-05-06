const palindromes = function (text) {
    //Remove all the punctuation, turns it into lower case, create a new string, and filter the space
    let newText = text
    .replace(/[\.,?!]/g, "")
    .toLowerCase()
    .split("")
    .filter(newText => newText !== " ");
  
    //push the newText to an newArray
    let newTextReverse = [];
    for (const text of newText) {
      newTextReverse.push(text);
    }
    //Reverse the array
    newTextReverse.reverse();
  
    //turn the newText and newTextReverse Array into words
    let newTextString = newText.join("");
    let newTextReverseString = newTextReverse.join("");
    
    //compare newArray with arr
    if (newTextString == newTextReverseString) {
      return true;
    } else {
      return false;
    }
  }
  

// Do not edit below this line
module.exports = palindromes;
