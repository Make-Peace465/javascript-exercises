const reverseString = function(string) {
    let arr = "";
    string = string.split("");
    for (i = (string.length-1); i >= 0; i--) {
        arr += string[i];
    }
    return arr;
};

// Do not edit below this line
module.exports = reverseString;
