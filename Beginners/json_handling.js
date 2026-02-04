const myself = {
  name: "Varun Dhawan",
  age: 20,
  subgroup: "3O12",
  branch: "ENC",
  cgpa: 7.91,
  college: "Thapar University,Patiala",
  pincode: 147002,
};

// ---- JSON stringify()  ----- used to convert js content into JSON format ---

const string = JSON.stringify(myself);
// console.log(string);

// ---- JSON parsed()   ------ used to convert JSON file into Javascript format

const pased_Value = JSON.parse(string);
console.log(pased_Value);
