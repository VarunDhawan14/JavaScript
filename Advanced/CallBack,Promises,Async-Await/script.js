// async await >> promise chains >> callback hell
// Therefore, async await is better than promise chains and promise chains are better than callback hell

// function hello() {
//   console.log("Hello, Checking");
// }
// console.log("one");
// console.log("two");

// setTimeout(() => {
//   hello();
// }, 5500);

// console.log("three");
// console.log("four");

// ------------------ Callback Hell -------

// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// Callback hell ( this is nested callbacks stacked belown one another forming a pyramid structure)

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {});
//     });
//   });
// });

// ----------- Promises --------- ( It is for "eventual" completion of task. It is an object in JS and it is a solution to callBack hell)

// let promise = new Promise((resolve,reject) => {........})
// -- there are three states in Promises : "Pending" , "Fulfilled" , "Rejected"

let promise = new Promise((resolve, reject) => {
  console.log("hey what's going?");
  resolve("code execution successful");
});

function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("data :", dataID);
  }, 5000);
}
getData("123", () => {
  console.log("this is next data");
  getData("456", () => {
    console.log("this is another data");
  });
});
