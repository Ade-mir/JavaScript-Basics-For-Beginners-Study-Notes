const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
try {
  person.fullName = null;
} catch (e) {
  console.log(e);
}

// Getters => access properties
// Setters => change (mutate) them

console.log(person);
