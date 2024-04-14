//function declaration or function statement

a();
function a(){
 console.log("in function a");
}

//function expression 
//assigning the value of function in variable is function expression

var k = function(){
    console.log("in function expression");
}
k();

//A function statement loads before any code is executed. This behavior of function statements is called hoisting, which allows a function to be used before it is defined.

// A function Expression is similar to a function declaration without the function name.
// Function expressions can be stored in a variable assignment.
// Function expressions load and execute only when the program interpreter reaches the line of code.
// The function in function expression can be accessed only after the function definition.



//named function expression

var abc = function xyz(){
    console.log(xyz)//it will print the whole function xyz()
}
abc();//


var kapil = function xyz(){
    console.log("inside the xyz function.")
}
kapil();
xyz();// will give a reference error, xyz is not defined.








