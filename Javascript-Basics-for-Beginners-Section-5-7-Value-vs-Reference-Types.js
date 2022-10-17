// Two Types.
// Value Types: Number, String, Boolean, Symbol, undefined, null.
// Reference Types: Object, Function, Array,

// let x = 10;
// let y = x;

// x = 20;

// console.log(x, y);

let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x, y);

// Primitives are copied by their value.
// Objects are copied by their reference.
