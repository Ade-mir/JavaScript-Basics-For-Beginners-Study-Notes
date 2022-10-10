/*
// Assignment operator

// let x = 10;

// Ads 10 + 1
// x++;

// Ads 5 to x
// x = x + 5;
// x += 5;

// Multiplies x with 3
// x = x * 3;
// x *= 3;

// console.log(x);

//Comparison operators

// let x = 1;

// Relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// Equality
// console.log(x === 1);
// console.log(x !== 1);

// Strict Equality (both Type + Value need to be equal)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);


//If a customer has more than 100 points, they are a 'gold' customer, otherwise they are a 'silver' customer.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical Operators with Non-booleans
// Use this to make decisions based on multiple conditions.
// Logical AND (&&) returns true if both operands are TRUE.

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||) You can type it right under esc key on the upper left side of the keyboard.

let highIncome2 = false;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;

console.log('Eligible', eligibleForLoan2);

// NOT (!)
let applicationRefused = !eligibleForLoan2;
console.log('Application Refused', applicationRefused);

//Falsy values
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting (1 returns because it fills the Truthy value and it does not continue to 2)
console.log(false || 1 || 2);

let userColor = 'pink';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);



let x = (2 + 3) * 4;

console.log(x);

let x = 10;
let y = x++;
console.log(y);
console.log(x);

*/

let a = 'red';
let b = 'blue';

let c = b;
b = a;
a = c;

console.log(a, b);
