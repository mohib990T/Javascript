// var user = {
//     name : "Mohib",
//     profession : "Developer",
//     hobbies : ["Coding", "Dancing"]
// };

// console.log(user.name);
// console.log(user.profession);
// console.log(user.hobbies);

let student = {};
student.name = "Mohib";
student.age = 23;
student.rollNumber = 140002;

function studentInfo (name, age, rollNumber) {
    this.name = name;
    this.age = age;
    this.rollNumber = rollNumber;
}

// Spread Operator
let student1 = ["Mohib", 30, 150002];
let student2 = ["Mohit", 23, 150003];
let student3 = ["Shubham", 35, 150004];
let student4 = [...student1, ...student2, ...student3];
console.log(student4);
