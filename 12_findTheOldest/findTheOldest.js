const findTheOldest = function (person) {
  let year = new Date().getFullYear();

  let sorted = person.sort((a, b) =>
    ((isNaN(a.yearOfDeath) ? year : a.yearOfDeath)
      - a.yearOfBirth)
    - ((isNaN(b.yearOfDeath) ? year : b.yearOfDeath)
      - b.yearOfBirth)
  );
  return sorted[person.length - 1];
}
// Do not edit below this line
module.exports = findTheOldest;
