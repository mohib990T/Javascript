// Create objects using function

// function car (make, moldel, year) {
//     this.make = make;
//     this.moldel = moldel;
//     this.year = year;
// }
// const car1 = new car('Eagle', 'Talon TSi', 1993);
// console.log(car1);


// Create objects using class constructor

// class Rectanhgle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// const square = new Rectanhgle(10, 10);
// console.log(square);

// Q1. Create a Function
// Complete the function in the editor. In which you are given one object as a parameter, 
// in that object, there is a data member named name. 
// Your task is to create a method inside this object named setter, 
// such that this method will print the value of the data member named as name.

// function


// Q7. Find the sum of Object Members
// You are given a function Check which takes an object Obj as a parameter. Your taks is to find out the sum of the three data
// members of the object. The data members are named as p1, p2, p3.

// function sum (p1,p2,p3) {
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;
//     return sum2 = this.p1+ this.p2+ this.p3;
// }

// const sum1 = new sum(1,2,3);
// console.log(sum2);

// Q6. Object Multiplyer
// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are tw o
// variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.

function multiply(id, houseNo) {
    this.id = id;
    this.houseNo = houseNo;
}
const mult = new multiply(12, 146);

function res(N) {
    let res1;
    return (
    res1 =  (`${N*mult.id}\n${N*mult.houseNo}`)
    )
}
console.log(res(2));
