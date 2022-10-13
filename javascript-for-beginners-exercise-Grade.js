// Avarage = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// How I did it.
// const marks = [90, 40];

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const initialValue = 0;
//   const sumWithInitial = marks.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   );
//   const avarageOfMarks = sumWithInitial / Object.keys(marks).length;

//   if (avarageOfMarks <= 59) return 'F';
//   if (avarageOfMarks >= 60 && avarageOfMarks < 70) return 'D';
//   if (avarageOfMarks >= 70 && avarageOfMarks < 80) return 'C';
//   if (avarageOfMarks >= 80 && avarageOfMarks < 90) return 'B';
//   if (avarageOfMarks >= 90 && avarageOfMarks < 100) return 'A';
// }

// How Mosh did it.

const marks = [90, 50, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
