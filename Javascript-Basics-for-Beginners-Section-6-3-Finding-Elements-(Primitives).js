// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(1));

// const courses = [
//   { id: 1, name: 'a' },
//   { id: 1, name: 'b' },
// ];

// const course = courses.find(function (course) {
//   return course.name === 'xyz';
// });

// console.log(course);

const courses = [
  { id: 1, name: 'a' },
  { id: 1, name: 'b' },
];

// Arrow function
const course = courses.find((course) => course.name === 'a');

console.log(course);
