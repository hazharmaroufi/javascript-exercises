const palindromes = function (a) {
  a1 = a.replace('.', '');
  a2 = a1.replace('!', '');
  a3 = a2.replace(',', '');
  a4 = a3.replace(',', '');
  a5 = a4.toLowerCase().split(" ").join("");

  let nString = [];
  for (let i = a5.length; i >= 0; i--) {
    nString.push(a5[i]);
  }
  nString2 = nString.join("").toLowerCase().split(" ").join("");


  if (nString2 === a5) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
