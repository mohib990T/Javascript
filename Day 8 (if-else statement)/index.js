// if-else statement

let x = 5;
if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than or equal 10');
}

let output;
let input = prompt('enter a character');
if (input === 'p' || input === 'P') {
    output = 'PrepBytes'
    console.log(output);
} else if (input === 'z' || input === 'Z') {
    output = 'Zenith'
    console.log(output);
} else if (input === 'e' || input === 'E') {
    output = 'Expert Coder'
    console.log(output);
} else if (input === 'd' || input === 'D') {
    output = 'Data Structure'
    console.log(output);
} else {
    console.log('Invalid input');
}


let a = 2;
let b = 5;
let c = 4;

if (a>b && a>c) {
    console.log(a);
} else if (b>a && b>c) {
    console.log(b);
} else if(c>a && c>b) {
    console.log(c);
} else {
    console.log(-1);
}