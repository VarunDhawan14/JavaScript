// ---- The spread operator is a new addition to the set of operator in Javascript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator it commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

function giveMe4(a, b, c, d) {
  console.log("a : ", a);
  console.log("b : ", a);
  console.log("c : ", a);
  console.log("d : ", a);
}

const colors = ["red", "yellow", "blue", "green"];

giveMe4(colors);
