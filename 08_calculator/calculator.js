const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  let currSum = 0;
	for (let i = 0; i < array.length; i++) {
    currSum = currSum + array[i];
  }
  return currSum;
};

const multiply = function(array) {
  let currProd = 1;
	for (let i = 0; i < array.length; i++) {
    currProd = currProd * array[i];
  }
  return currProd;
};

const power = function(a, b) {
  let currProd = 1;
	if (b == 0) {
    return 1;
  } else {
    for (let i = 1; i <= b; i++) {
      currProd = currProd * a;
    }
    return currProd;
  }
};

const factorial = function(a) {
  let prod = 1;
  if (a == 0) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      prod *= i;
    }
    return prod;
  }
    
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
