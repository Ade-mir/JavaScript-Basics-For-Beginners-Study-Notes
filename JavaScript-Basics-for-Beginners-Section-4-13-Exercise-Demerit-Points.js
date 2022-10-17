// SPeed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// The function I wrote myself.

// checkSpeed(699);
// function checkSpeed(speed) {
//   if (speed < 75) console.log('Ok');
//   if (speed >= 75 && speed < 80) console.log('Points: 1');
//   if (speed >= 80 && speed < 85) console.log('Points: 2');
//   if (speed >= 85 && speed < 90) console.log('Points: 3');
//   if (speed >= 90 && speed < 95) console.log('Points: 4');
//   if (speed >= 95 && speed < 100) console.log('Points: 5');
//   if (speed >= 100 && speed < 105) console.log('Points: 6');
//   if (speed >= 105 && speed < 110) console.log('Points: 7');
//   if (speed >= 110 && speed < 115) console.log('Points: 8');
//   if (speed >= 120 && speed < 125) console.log('Points: 9');
//   if (speed >= 125 && speed < 130) console.log('Points: 10');
//   if (speed >= 135 && speed < 140) console.log('Points: 11');
//   if (speed >= 145 && speed < 150) console.log('Points: 12');
//   if (speed >= 150) console.log('License suspended');
// }

// The way Mosh solved it.

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('License suspended');
    else console.log('Points', points);
  }
}
