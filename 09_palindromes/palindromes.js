const palindromes = function (userStr) {
    userStr = userStr.toLowerCase();
    let reverseStr = [];
    userStr = userStr.split("");
    rawStr = userStr.filter(function(strChar) {
        return strChar.match(/[a-z]/i);
    })
    for (let i = rawStr.length - 1; i >= 0; i--) {
        reverseStr.push(rawStr[i]);
    }
    for (let j = 0; j < rawStr.length; j++) {
        if (rawStr[j] != reverseStr[j]) {
            return false;
        } else {
            return true;
        }
    }

};

// Do not edit below this line
module.exports = palindromes;
