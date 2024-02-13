// String to Numeric Coercion:

var age = "26";
var num = +age; // Coercion: string to number
console.log(num); // Output: 26

var isYoung = true;
var num = +isYoung; // Coercion: boolean to number
console.log(num); // Output: 1


// Comparison Coercion:
// this is done by coercing a non-number data type to a number. 
console.log(26 == "26"); // Output: true (coercion: string to number)
console.log(true == "1"); // Output: true (coercion: string to number)


let count = 1;
console.log(count++); //1
console.log(count); //2
console.log(++count); //3
