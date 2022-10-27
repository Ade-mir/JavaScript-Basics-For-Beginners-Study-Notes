// Function sum() takes a varying number of arguments and returns their sum.

// function sum() {
//   let total = 0;
//   let obj = [];
//   if (Array.isArray(arguments)) obj += arguments;
//   total += obj.reduce((a, b) => a + b, 0);
//   for (let value of arguments) total += value;
//   return total;
// }

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2]));
