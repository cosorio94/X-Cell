const getArraySum = function (nums) {
  let filteredNums = getNumberArray(nums);
  if(filteredNums.length < 2){
    return undefined;
  }
  return filteredNums.reduce((a, b) => a + b);
};

function isNumber(obj) {
  return obj!== undefined && !isNaN(obj);
};

const getNumberArray = function (nums) {
  return nums.map((el) => Number(el)).filter(isNumber);
};


module.exports = {
  getArraySum: getArraySum,
  getNumberArray: getNumberArray
};