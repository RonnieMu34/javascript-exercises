const reverseString = function(originStr) {
    reversedStr = "";
for (let i = originStr.length-1; i >= 0; i--) {
    reversedStr += originStr[i];
}
return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
