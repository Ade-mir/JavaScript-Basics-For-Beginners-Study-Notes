const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Decending order
// Pick their title

// console.log(movieFilter(movies, 2018, 4));

// function movieFilter(array, yearInput, ratingInput) {
//   for (let obj of array)
//     return obj.year >= yearInput && obj.rating >= ratingInput;
// }

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
