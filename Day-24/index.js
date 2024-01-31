// Object

let studentRecords = [
  {
    name: "Mohib",
    id: 533,
    marks: 98,
  },
  {
    name: "Shubham",
    id: 200,
    marks: 45,
  },
  {
    name: "Farhan",
    id: 101,
    marks: 75,
  },
  {
    name: "Himanshu",
    id: 115,
    marks: 23,
  },
];

// Print the name in uppercase

// let arr = studentRecords.map((x) => x.name.toUpperCase());
// console.log(arr);

// Print the student's details which scores more than 50 marks.

// let mark_50 = studentRecords.filter((x) => x.marks > 50);
// console.log(mark_50);

// Retrive the details who score more than 50 marks and have id greater than 120.

// let mark_50_120 = studentRecords
//   .filter((x) => x.marks > 50)
//   .filter((y) => y.id > 120);
// console.log(mark_50_120);

// Print the total marks of students.

let total = studentRecords.map((x) => x.marks).reduce((acc, curr) => {
    return acc + curr
});
console.log(total);

// Print the name of the the students which are scored more than 50 marks

// let mark_50 = studentRecords.filter((x) => x.marks > 50);
// console.log(mark_50.map((x => x.name)));

// Print the sum of students with id > 120

// let sum_50 = studentRecords.filter((x) => x.id > 120);
// let sum_120 = sum_50.map((y) => y.marks);
// let sum_50_120 = sum_120.reduce((acc, curr) => {
//   return acc + curr;
// })
// console.log(sum_50_120);

// Print the total marks of the students with marks greater than
// 50 after a grace of 15 marks has been added to those students
// who scored the less than 50.

let marks_50 = studentRecords.filter((x) => x.marks < 50);
let mark_50_a = studentRecords.filter((x) => x.marks > 50);
let mark_50_b = mark_50_a.map((y) => y.marks);
let grace = marks_50.map((y) => y.marks).map((z) => z + 15);
let totala = [...mark_50_b, ...grace];

let total_marks = totala.reduce((acc, curr) => {
  return acc + curr;
});
console.log(total_marks);


