// age = 26
console.log("Your Age is : ",age);

let age = 20;
console.log("Your Age is : ",age);



/*
OUTPUT: ReferenceError: Cannot access 'age' before initialization

Reason : Temporal Dead Zone: Time since when the let variable was hoisted until it is initialized some value.


Temporal Dead Zone starts when the code execution enters the block which contains the let or 
const declaration and continues until the declaration has executed.

*/