const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a = 0, b = 0) {
  if (a.length === 0) {
    return 0;
  } else if (a.length > 0) {
    let sums = 0;
    for (let i = 0; i < a.length; i++) {
      sums += a[i];
    }
    return sums;
  } else if (Array.isArray(a)) {
    a.toString();
    return Number(a[0]) + Number(a[1]);
  }
  return Number(a) + Number(b);
};

const multiply = function (a) {
  let mul = 1;
  for (let i = 0; i < a.length; i++) {
    mul = mul * a[i];
  }
  return mul;
};

const power = function (a, b) {
  let pow = 1;
  for (let i = 0; i < b; i++) {
    pow = pow * a;
  }
  return pow;
};

const factorial = function (a) {
  let fac = 1;
  for (let i = 1; i <= a; i++) {
    fac = fac * i;
  }
  return fac;
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
