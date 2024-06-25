//const args = [...arguments];
//function f(a, b, ...theArgs)

const removeFromArray = function (arr, ...str) {
  for (let i = 0; i < str.length; i++) {
    let index = arr.indexOf(str[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
    index = arr.indexOf(str[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
