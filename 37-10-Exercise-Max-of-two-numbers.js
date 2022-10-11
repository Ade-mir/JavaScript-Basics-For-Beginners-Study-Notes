// Exercise
// Write a function that takes two numbers and returns the maximum of the two.

// How I wrote it myself, using and IF-ELSE function, and calling the function with the variables.

// function returnMaxNumber(numberOne, numberTwo) {
//   if (numberOne > numberTwo) console.log(numberOne);
//   else console.log(numberTwo);
// }

// returnMaxNumber(90, 91);

// How Mosh wrote the function first.

// let number = max(3, 3);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// How mosh re-wrote the code to make it cleaner by removing the 'else', because the else was superfluous as the return will execute if the 'if line' is not executed anyways.

// let number = max(3, 3);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   return b;
// }

// How Mosh re-wrote the code to make it cleaner using the Conditional Operator.

let number = max(5, 10);
console.log(number);

function max(a, b) {
  return a > b ? a : b;
}
