let imbu = 'Ademir';
imbu = 'letmerolluponthishurr';

// Variables cannot start with a number like (1imbu).
// Variables should be meaningfully named.
// Variables cannot be reserved keyword like 'let' or 'if'.
// Cannot contain space or hyphen (-).
// Are case sensitive.
// Camel notation is when we name our variables using lowercase for the first word and then uppercase for all the following.

let firstName = 'Ademir';
let lastName = 'Alijagic';

// Modern way of declaring variables is by having each on a new line.

const interestRate = 0.3;
// Const is for variables which are constant and do not change. Let is for variables that do change.

//THESE ARE PRIMITIVES / VALUE TYPES

let middleName = 'Marie'; //String Literal.
let age = '30'; // Number Literal.
let isApproved = true; //Boolean Literal.
let uncle = undefined; //Undefined
let aunt = null; // Null, whcih we set when we want to clear the value repetitevily.

//Two types of programming languages. Static where variable TYPE do not change. Dynamic language like JS a type of a variable can change. From string to boolean for example.

/*
console.log(typeof middleName);
middleName = 1;
console.log(typeof middleName);
*/

//THESE ARE REFERENCE TYPES
//Objects {}, Arrays [], and Functions

let person = {
  firstName: 'Ademir',
  lastName: 'Alijagic',
  age: 30,
};

// Dot Notation STICK WITH DOT NOTATION
person.firstName = 'John';

//Bracket Notation
person['firstName'] = 'Mary';

console.log(person.firstName);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors[1]);
console.log('is a ' + typeof selectedColors[1]);

//performing a task
function greet(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

//calculates a value
function square(number) {
  return number * number;
}

let number = square(65);
console.log(number);
