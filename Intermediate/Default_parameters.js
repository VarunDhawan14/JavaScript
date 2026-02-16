// ---- Default Parameters : Default function parameters, introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. When a function is called, and an argument is not provided for a paramter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined.

// function countTo5(count = true) {
//   if (count === true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`count : ${i}`);
//     }
//   }
// }
// countTo5();

// ---- another example -----

function ratings(rate) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else if (rate === 0) {
    console.log(`Low Ratings :(`);
  } else {
    console.log(`No Ratings`);
  }
}
ratings(5);
