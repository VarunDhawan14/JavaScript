// ----- Challenge 1 ---- topic : Default Parameters

// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(5));

// ---- challenge 2 ---- topic : spread operator ---

// console.log("hey,how are you!");
// console.log("What are you doing here?");
// console.log("good work!");

// ----- challenge 3 ----- topic : Rest Operator -----

// function amount(...Parameters) {
//   console.log(Parameters);
// }

// amount(
//   "varun",
//   "dhawan",
//   "20 years old",
//   "engineer",
//   "dreams come true and work hard until you didn't acheive it !!",
//   "Sucess is near by your dreams",
//   "good work",
//   "working on it ",
//   "loved it",
//   "Thnkew",
//   "working on it",
// );

// function name(username) {
//   console.log("Varun Dhawan");
// }
// console.log(name("102315043"));

function study(...classess) {
  console.log(classess);
}

study("hi", "my", "name", "is", "varun!");
console.log("thankyou for all the information!!");
console.log("done!");
