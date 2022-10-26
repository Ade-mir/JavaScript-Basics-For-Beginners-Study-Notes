const numbers = [1, -2, 3];

// every() checks to see if every element in a given array matches the given criteria.
// some() check to see if there is at least one element in a given array that matches the given criteria.

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
