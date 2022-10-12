// I did not manage to complete this exercise.

// showNumbers(115);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 == 0) console.log(i, 'Even');
//     else console.log(i, 'Odd');
//   }
// }

// How Mosh solved it.

// showNumbers(15);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 === 0 ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }

// const array = [0, null, undefined, '', 1, 2, 3, 4];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === 'string') console.log(key, obj[key]);
}
