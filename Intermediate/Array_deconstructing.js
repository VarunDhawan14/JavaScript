// -- Deconstructing allows us to "unpack" values from data-structures (Arrays,objects) into separate distinct variables.

// ------ Syntax for deconstructing by ARRAYS ----

// const number = ["one", "two", "three"];

// const [varun, dhawan, home, college] = number;
// console.log(varun);
// console.log(college);

// /---- another example -----

// let a, b;

// [a = 30, b = 20] = [];
// console.log(a, b);

// function person(age) {
//   [age = 30, birth = 40] = [];
// }

// console.log(person());

// -------- Deconstructing using Spread operator ------

const [a, ...b] = [
  "one",
  "two",
  "three",
  "four",
  ["five", "six"],
  "seven",
  "eight",
  "nine",
];
console.log(a);
console.log(b[6]);
console.log(b[7]);
