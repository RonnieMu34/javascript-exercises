const ftoc = function(temperature) {
  rawTemp = ((temperature - 32) * (5/9));
  return parseFloat(rawTemp.toFixed(1));
};

const ctof = function(temperature) {
  rawTemp = ((temperature * (9/5)) + 32);
  return parseFloat(rawTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
