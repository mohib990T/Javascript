// function multi () {
//     console.log("Hello World");
// }
// multi();

// const addition = () => {
//     console.log("Hello World");
// }
// addition();

// const sub = function () {
//     console.log("Hello World");
// }
// sub();

// function sayHi () {
//     console.log("Hiii");
//     let a = 3;
//     let b = 5;
//     let result = a + b;
//     console.log(result);
// }
// sayHi();

// function add(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// let resultAdd = add(5, 6);
// console.log(resultAdd);

// function mult(num1, num2) {
//     let resultM = num1 * num2;
//     return resultM;
// }
// let resultMult = mult(5, 6);
// console.log(resultMult);

let i = 5;
function one() {
    console.log(i);
    function two() {
        console.log(i);
    }
    two();
}
one();