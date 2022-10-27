// Function Decleration

walk();

function walk() {
  console.log('walk');
}

// Function Expression
// Cannot call the variable beofre they are declared.
console.log(x);
let x = 1;

run();

const run = function () {
  console.log('run');
};

// We can call a function that is defined using the function decleration syntax before it's definition. This is because when the JavaScript engine executes this code it moves all the function declerations to the top. This is called Hoisting. Hoisting is the proccess is moving function declerations to the top of the file. Done automatically by the engine that is executing this code.
