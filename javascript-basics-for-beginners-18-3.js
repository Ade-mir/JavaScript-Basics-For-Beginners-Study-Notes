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



let a = 'red';
let b = 'blue';

let c = b;
b = a;
a = c;

console.log(a, b);

IF ELSE statements
if (condition) {
  statement;
} else if (anotherCondition) {
  statement;
} else if (yetAnotherCondition) {
  statement;
} else statement;



// Hour
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 23;

if (hour >= 6 && hour <= 12) {
  console.log('Good morning!');
} else if (hour >= 13 && hour <= 18) {
  console.log('Good afternoon!');
} else if (hour >= 19 && hour <= 24) {
  console.log('Good evening!');
} else console.log('Good evening!');



//Switch and Case

let role = '';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator');
    break;

  default:
    console.log('Uknown Role');
}

// Using if statements

if (role === 'guest') {
  console.log('Guest User');
} else if (role === 'moderator') {
  console.log('Moderator');
} else console.log('Uknown Role');


for (let i = 0; i < 5; i++) {
  console.log('Hello World', i);
}


for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}


// do-while (In do-while the statement is executed always at least once, even if the conditions evaluate to false.) You are not going to use do-while a lot practically.

let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);


// for-in loop (used to iterate over the properties of an object.)

const person = {
  name: 'Mosh',
  age: 30,
};

for (let key in person) console.log(key, person[key]);

// Dot.notation
// person.name

// Bracket Notation
// person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors) console.log(colors[index]);

//for-of loop (Used to iterate over the elements in an arrays)

for (let color of colors) console.log(color);

let i = 0;
while (i <= 10) {
  //if (i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

*/

// if (role === 'guest') {
//     console.log('Guest User');
//   } else if (role === 'moderator') {
//     console.log('Moderator');
//   } else console.log('Uknown Role');
