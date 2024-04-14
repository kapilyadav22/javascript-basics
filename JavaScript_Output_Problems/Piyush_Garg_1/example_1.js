console.log("Your Age is : ",age);

var age = 20;

console.log("Your Age is : ",age);



/* OUTPUT:
Your Age is :  undefined
Your Age is :  20

Reason : (Hoisting) The var statement declares function-scoped 
or globally-scoped variables.

When we execute js program, global execution context is created, it have two components,
memory component (variable environment)  and code component (Thread of Execution)

Memory component has all the variables and functions in key value pairs. It is also called Variable
environment

Code component is the place where code is executed one line at a time. It is also called the Thread
of Execution

Along with GEC, global object is also created (window object)

The execution context is created in two phases.
Memory creation phase - JS will allocate memory to variables and functions. for variables,
it will be assigned be undefined (placeholder). and for functions, it stores the complete function
as value with function name as key.  

Code execution phase - executes the code line by line and assign the values of variable, 
and for function call, it again creates a separate execution context. 

Topic Covered : Hoisting, GEC
*/


