const fibonacci = function(member) {
    if (member < 0) {
        return "OOPS";
    } else {
        let fibArr = [1];
    num1 = 0;
    num2 = 1;

    for (let i = 0; i < member - 1; i++) {
        fibArr.push(num1 + num2);
        num2 = fibArr[i + 1];
        num1 = fibArr[i];
    }
    return fibArr[member - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
