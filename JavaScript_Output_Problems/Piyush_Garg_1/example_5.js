var variable = 10;

//Immediately Invoked Function Expression (IIFE)
/* using enclosed small brackets (), and () for calling purpose.

To avoid global..., 
Usecase : Database connection.
*/

(() => {
    console.log(variable);
    variable = 20;
    console.log(variable);
}) ();


console.log(variable);

//var can be declare any number of times
var variable = 30;
console.log(variable);


/*
OUTPUT: 
10
20
20
30



 */