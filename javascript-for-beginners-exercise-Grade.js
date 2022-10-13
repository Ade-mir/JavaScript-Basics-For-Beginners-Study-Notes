// Avarage = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [90, 40];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const initialValue = 0;
  const sumWithInitial = marks.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const avarageOfMarks = sumWithInitial / Object.keys(marks).length;

  if (avarageOfMarks <= 59) return 'F';
  if (avarageOfMarks >= 60 && avarageOfMarks < 70) return 'D';
  if (avarageOfMarks >= 70 && avarageOfMarks < 80) return 'C';
  if (avarageOfMarks >= 80 && avarageOfMarks < 90) return 'B';
  if (avarageOfMarks >= 90 && avarageOfMarks < 100) return 'A';
}
