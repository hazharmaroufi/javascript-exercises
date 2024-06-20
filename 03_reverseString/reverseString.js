


const reverseString = function (str) {
  let strLength = str.length;
  let reversedStr = "";
  let strArr = [];
  for (let i = strLength - 1; i >= 0; i--) {
    strArr.push(str[i])
  }
  for (let i = 0; i < strLength; i++) {
    reversedStr += strArr[i];
  }
  return reversedStr;
};


// Do not edit below this line
module.exports = reverseString;
