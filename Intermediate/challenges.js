// ----- Challenge 1 ---- topic : Default Parameters

// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(5));

// ---- challenge 2 ---- topic : spread operator ---

// console.log("hey,how are you!");
// console.log("What are you doing here?");
// console.log("good work!");

// ---- challenge as Function ----
// --- Ques : Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

// function string1(str) {
//   console.log("varundhawan");
//   return str;
// }
// const value = string1("programmer");
// console.log(value);

function numbers(...num) {
  console.log("This is the final output");
  return 0;
}

let final_output = numbers("01,02,03,04,05,06");
console.log(final_output);
