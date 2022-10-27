// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

// function start() {
//   for (let i = 0; i < 5; i++) console.log(i);

//   console.log(i);
// }

function stop() {
  for (var i = 0; i < 5; i++) console.log(i);

  console.log(i);
}

// start();
stop();
