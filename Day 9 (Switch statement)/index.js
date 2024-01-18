//  Switch statement

// const marks = prompt("Enter your marks out of 50.");
// let grade;

// switch (true) {
//   case marks >= 41 && marks <= 50:
//     grade = "A";
//     break;
//   case marks >= 31 && marks <= 40:
//     grade = "B";
//     break;
//   case marks >= 21 && marks <= 30:
//     grade = "C";
//     break;
//   case marks >= 11 && marks <= 20:
//     grade = "D";
//     break;
//   case marks >= 0 && marks <= 10:
//     grade = "E";
//     break;
//   default:
//     grade = "Invalid marks entered.";
// }
// console.log(grade);

// let triangle;
// let A = parseInt(prompt("Enter value of A"));
// let B = parseInt(prompt("Enter value of B"));
// let C = parseInt(prompt("Enter value of C"));
// switch (true) {
//   case (A < 90 || B < 90 || C < 90):
//     triangle = "Acute triangle";
//     break;

//   case (A > 90 || B > 90 || C > 90):
//     triangle = "Obtuse triangle";
//     break;
//   default:
//     triangle = "Invalid input";
// }
// console.log(triangle);



let A = parseInt(prompt("Enter value of A"));
let B = parseInt(prompt("Enter value of B"));
let C = parseInt(prompt("Enter value of C"));

if (A+B+C === 180) {
    if (A > 90 || B > 90 || C > 90) {
        console.log("Obtuse triangle");
    } else {
        console.log("Acute triangle");
    }
    
} else {
    console.log("Invalid input");
}

