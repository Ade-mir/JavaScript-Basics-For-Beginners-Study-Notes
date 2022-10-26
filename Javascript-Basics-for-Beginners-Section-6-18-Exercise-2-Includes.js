const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement) {
  for (let n of array) if (n === searchElement) return true;
  return false;
}

console.log(includes(numbers, 5));
