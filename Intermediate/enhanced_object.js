// --- Enhanced object literals, introudced in ECMAScript 6 (ES6), are a set of ehancements to the syntax for defining objects in javascript. These enhancements make it more convenient and concise to define object properties and methods -------

function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro: () => {
      console.log(
        `hey, my name is ${name}, I am ${age} years old and I am a ${work}`,
      );
    },
  };
}
const details = user("Varun Dhawan", 20, "Student & Programmer.");
console.log(details.intro());

