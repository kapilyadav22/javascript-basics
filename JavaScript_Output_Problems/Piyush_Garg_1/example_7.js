variable = 10;

(() => {
    foo = 100;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
})();

console.log(foo);
console.log(variable);
var variable = 30;

/*
OUTPUT : 
10
20
ReferenceError: foo is not defined

variable will be set to 10, 20, and once iife executed, it doesn't know about foo
so will give reference error

*/


