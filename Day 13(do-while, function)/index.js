//do-while

// let i = 0;
// do{
//     i++;
//     console.log(i);
// }while(i > 5);

//function

// function message(){
//     console.log("Hellow World");
// }
// message(); // This is the way to call the function.


function list(firstname, lastname, age){
    return(
        `${firstname} ${lastname} is ${age} year old`
    )
}

const firstname = "Mohib";
const lastname = "Hussain";
const age  = 28;

const list1 = list(firstname, lastname, age);
console.log(list1)