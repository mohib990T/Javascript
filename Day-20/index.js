// JavaScript Questions:

//  Q1. Write a JavaScript function to check whether an input is an array or not.
// 1. Solution 
function check(arr){
    if(Array.isArray(arr)){
      return true;
    }else{
      return false;
    }
  }
  console.log(check([1,2,3,4,4,5,5]));
  console.log(check(1,2,3,4,5));
  console.log(check([ ]));
//   -----------------------------------------------------------------------------------


//  Q2. Write a JavaScript program that prints the elements of the following array.
//      Note : Use nested for loops.
// 2. Solution
const arr = [1, 2, 3, "Aplle", "Ball"];
console.log(arr);
// ------------------------------------------------------------------------------------


//  Q3. There are two arrays with individual values. 
//      Write a JavaScript program to compute the sum of each individual index value in the given array. 
//      Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
//      Expected Output : [4, 5, 8, 10, 12, 13]

// 3. Solution
const array1 = [1,0,2,3,4,0];
const array2 = [3,5,6,7,8,13];
let sum = array1.map((x, i, array) => {
    return x + array2[i];
});
console.log(sum);
// -------------------------------------------------------------------------------------------


//  Q4. Write a simple JavaScript program to join all elements of the following array into a string.
//      Sample Array: myColor = ["Red", "Green", "White", "Black"];
//      Expected Output :
//      "Red,Green,White,Black"
//      "Red,Green,White,Black"
//      "Red+Green+White+Black"

// 4. Solution
const myColor = ["Red", "Green", "White", "Black"];
let res = myColor.toString();
console.log(res);
let res1 = myColor.join("+");
console.log(res1);

// ---------------------------------------------------------------------------------


//  Q5. Write a JavaScript program to sort the items of an array.
//      Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//      Sample Output : -4,-3,1,2,3,5,6,7,8
//      Note: Complete the Assignment and Update on the Sheet.

// 5. Solution
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let sortedArr = arr1.sort((a,b) => a-b);
console.log(sortedArr);