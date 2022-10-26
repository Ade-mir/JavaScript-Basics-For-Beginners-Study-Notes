const numbers = [1, 2, 3, 4, 1, 4, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (searchElement === element) count += 1;
//   return count;
// }

function countOccurrences(array, searchElement) {
  array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  }, 0);
}
