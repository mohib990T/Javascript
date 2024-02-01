// Prototypes

const parent = {
    fName : 'Kunal',
    age : 25,
    year : 2023
}
 let child = {
    fName : 'Kannu',
    year : 2024
 }

 child._proto_ = parent;

 console.log(child._proto_); // parent value
 console.log(child._proto_._proto_); // object
 console.log(child._proto_._proto_._proto_); // null
 console.log(child.year);