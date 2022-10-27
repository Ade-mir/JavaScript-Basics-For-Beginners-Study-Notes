// Function Decleration
function walk() {
  console.log('walk');
}

// Function Expression
let run = function () {
  console.log('run');
};

// Named Function Expression
let running = function running() {
  console.log('running');
};

let move = run;
run();
move();
running();
