const first = [{ id: 1 }];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice(2, 5);

console.log(combined);
console.log(slice);
