myFun();

//function expression
var myFun = function() {
    console.log("first");
}

myFun();

//function declaration
function myFun() {
    console.log("Second");
}

myFun();


/*
OUTPUT :
Second
first
first

Reason: myFun at line 4 is stored as a variable, so In Memory creation phase, myFun was undefined.
while going to line 11, myFun was already declared, so myFun is assigned with the whole function.

In Code Execution phase, In Line 1, Second will print.
then at line 4, myFun is pointing to another function, so at line 8 and 15 function invocation,
first was printed 

*/