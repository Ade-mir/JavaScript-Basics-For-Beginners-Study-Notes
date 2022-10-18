// street
// city
// zipCode
// showAddress(address)

const address1 = {
  street: 'Maries Vei 2',
  city: 'Sandefjord',
  zipCode: '3244',
};

const address2 = {
  street: 'Herslebs Gate 19',
  city: 'Oslo',
  zipCode: '0561',
};

// How I made the code first.

// function showAddress(address) {
//   for (const [key, value] of Object.entries(address)) {
//     console.log(key + ':', value);
//   }
// }

// How Mosh made it.

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address1);
