console.log(sum(5));

// Multiples of 3: 3, 6, 9
// Multiples og 5: 5, 10
// Add them together: 3 + 6 + 9 + 5 + 10 = 33

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
