const repeatString = function(userWord, numTimes) {
    let concatStr = "";
    if (numTimes < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < numTimes; i++) {
            concatStr += userWord;
        }
        return concatStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
