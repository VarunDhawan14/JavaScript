// ---- The spread operator is a new addition to the set of operator in Javascript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator it commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// function giveMe4(a, b, c, d) {
//   console.log("a : ", a);
//   console.log("b : ", b);
//   console.log("c : ", c);
//   console.log("d : ", d);
// }
// const colors = ["red", "yellow", "blue", "green"];
// giveMe4(...colors);

// ---- spread operator using arrays -----

// const list1 = ["one", "two", "three"];
// const list2 = ["four", "five", "six"];
// const concat = [...list1, ...list2];

// console.log(concat);

// ---- another syntax for spread operator -----

// const names = ["redhima", "shreeya", "lavanya", "vanshi"];
// const finalname = ["varun", ...names, "angel"];
// console.log(finalname);

// ----- spread operator using OBJECT -----

// const obj1 = { x: 1, y: 2, z: 3 };
// const obj2 = { a: 5, b: 10 };
// const obj3 = { ...obj1, ...obj2 };

// console.log(...obj3);

// ------------  REST OPERATOR   --------

// ---The rest parameter syntax allows a function to accept an indefinite number of arguments.
// ---as an array, providing a way to represent variadic functions in javascript

function user(x, ...userdata) {
  console.log(x);
  console.log(userdata);
}
user("Varun Dhawan", 20, "programmer", "learning and growing");
