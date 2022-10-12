// The code I wrote for the FizzBuzz exercise.

const output = fizzBuzz(15);
console.log(output);

// function fizzBuzz(input) {
//   if (input % 3 == 0 && input % 5 == 0) {
//     console.log('FizzBuzz');
//   } else if (input % 3 == 0) {
//     console.log('Fizz');
//   } else if (input % 5 == 0) {
//     console.log('Buzz');
//   } else if (isNaN(input)) {
//     console.log('Not a number');
//   } else console.log(input);
// }

// The code Mosh wrote

function fizzBuzz(input) {
  if (typeof input !== 'number') return 'Not a number';
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  return input;
}
