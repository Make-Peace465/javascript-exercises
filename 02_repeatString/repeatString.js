const repeatString = function(string, num) {
    let answer = "";
    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return answer;
    } else {
        for (i = 1; i <= num; i++) {
            answer = answer.concat(string)
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
