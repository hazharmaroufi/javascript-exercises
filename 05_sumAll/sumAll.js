const sumAll = function (first, last) {
  let sum = 0;
  if (first < 0 || last < 0 || typeof first !== 'number' || typeof last !== 'number') {
    return "ERROR";
  }
  if (last < first) {
    let tempNum = first;
    first = last;
    last = tempNum;
  }
  for (let i = first; i <= last; i++) {
    sum += Number(i);
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
