const color = 'red';

function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);
}

function stop() {
  const message = 'bye';
}

start();

// Don't create global variables and constants as a general best practise because all your functions might accidently change their value and lead to a lot of bugs down the line.
