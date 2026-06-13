// ------- All about Classes and use of objects and Constructor Use in Classes -------

// class ToyotaCar {
//   constructor(brand, mileage) {
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("Lexus", 20);
// console.log(lexus);

// ----- Use of Inheritance in JS --------
// inheritance is passing down properties & methods from parent class to child class

// class Parent {
//   hellostudent() {
//     console.log("hello bachooo!");
//   }
// }

// class child extends Parent {}

// let object = new child();

// ----------- Use of Super in Constructor in JS ------

// class Person {
//   constructor(branch) {
//     this.species = "Homieo Species";
//     this.branch = branch;
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(branch) {
//     super(branch); // to invoke parent class constructor
//   }
//   work() {
//     super.eat();
//     console.log("Solve problems and build something");
//   }
// }

// let EngineerObject = new Engineer("Varun Dhawan");

