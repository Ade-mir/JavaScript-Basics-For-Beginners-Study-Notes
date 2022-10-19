// let address = {
//   street: 'Maries Vei 2',
//   city: 'Sandefjord',
//   zipCode: 3244,
// };

// HOW I MADE THE FACTORY FUNCTION

// function createAddress(streetNumber) {
//   return {
//     street: 'Maries Vei' + ' ' + streetNumber,
//   };
// }

// const address1 = createAddress(1);
// console.log(address1);

// HOW MOSH MADE THE FACTORY FUNCTION

// let address = createAddress('Maries Vei 2', 'Sandefjord', 3244);

// console.log(address);

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// HOW I MADE THE CONSTRUCTOR FUNCTION

// Constructor Function
// function Address(streetNumber) {
//   this.streetNumber = streetNumber;
// }

// const address3 = new Address(4);
// console.log(address3);

// HOW MOSH MADE THE constructor FUNCTION

let address1 = new Address('Maries Vei 2', 'Sandefjord', 3244);
let address2 = new Address('Maries Vei 2', 'Sandefjord', 3244);

console.log(address);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
