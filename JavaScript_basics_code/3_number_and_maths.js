// const age = 26;
// console.log(age);


//another way
const age  = new Number(26.00000005);

//convert to string
console.log(age.toString);

//Number of digits after the decimal point
console.log(age.toFixed(2)); 

//Number of significant digits. Must be in the range 1 - 21
console.log(age.toPrecision(2));

const hundreds = 10000000000;
//to show comma separated numbers, its type willbe string
console.log(hundreds.toLocaleString('en-IN'));




