function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

// ALl the parameters after the first to have a default value must also have a default value.
console.log(interest(10000));
