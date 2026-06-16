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

// let promise = new Promise((resolve, reject) => {
//   console.log("hey what's going?");
//   resolve("code execution successful");
// });

// function getData(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("data :", dataID);
//       // resolve("Success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }
// let result = getData("123");

// ----- Use of Promise then and Catch -------------------------------------------------

// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am Varun Dhawan");
//     resolve("Code Executed");
//   });
// };

// let finaloutput = getpromise();
// finaloutput
//   .then((result) => {
//     console.log("Promise fulfilled", result);
//   })
//   .catch((err) => {
//     console.log("Proimse rejected", err);
//   });

// ------------ Use of Promise Chains -------------------

// function asyncfunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("Successfully fulfilled");
//     }, 4000);
//   });
// }
// function asyncfunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//     }, 4000);
//   });
// }
// console.log("fetching data1.....");
// asyncfunc1().then((result) => {
//   console.log("fetching data2......");
//   asyncfunc2().then((result) => {});
// });





