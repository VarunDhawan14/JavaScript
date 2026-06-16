// --------- Promise Chain (Easier Method) ---------

// function asyncfunc1() {
//   return new Promise((resolve, reject) => {
//     console.log("hi,I am Varun Dhawan");
//     resolve("successfully resolved");
//   });
// }
// let promise = asyncfunc1().then((result) => {
//   console.log("It worked");
// });

// let promise = asyncfunc1();

// function getdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data :", dataid);
//       resolve("sucess");
//     }, 1000);
//   });
// }
// getdata(1)
//   .then((result) => {
//     return getdata(2);
//   })
//   .then((result) => {
//     console.log(result);
//   });

// ------------- ASYNC-AWAIT -------------

// --- Basic Syntax for async function ----

// async function hello() {
//   console.log("hey, what's going");
// }

// --- Use of Await with async function

function getdata(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data id :", dataID);
      resolve("Code successfully executed");
      reject("Error found");
    }, 1000);
  });
}
async function getAllData() {
  for (let i = 0; i < 2; i++) {
    await getdata(i);
  }
  getdata
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
