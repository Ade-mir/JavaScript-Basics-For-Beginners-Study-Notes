function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));

// The rest operator must be the last variable, hence it takes the rest of the variables.
