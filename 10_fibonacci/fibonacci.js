const fibonacci = function (a) {
  if (a < 0) {
    return "OOPS";
  }
  let fib = [0, 1];
  for (let i = 1; i <= a; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  return (fib[a]);
};

// Do not edit below this line
module.exports = fibonacci;
