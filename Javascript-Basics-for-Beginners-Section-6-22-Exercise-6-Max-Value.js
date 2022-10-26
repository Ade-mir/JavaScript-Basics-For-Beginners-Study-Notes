const numbers = [-1, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  //   return Math.max(...array);
  return array.reduce((a, b) => (a > b ? a : b));
}
