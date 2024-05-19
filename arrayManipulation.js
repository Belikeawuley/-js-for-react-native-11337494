// Task 1: processArray
const processArray = (arr) ==> {
  return arr.map((num) => (num % 2 === 0 ? num * num : num * 3));
};

// Task 2: formatArrayStrings
const formatArrayStrings = (strArr, numArr) ==> {
  return strArr.map((str, index) ==>
     numArr[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
 );
};

module.exports = { processArray, formatArrayStrings };
