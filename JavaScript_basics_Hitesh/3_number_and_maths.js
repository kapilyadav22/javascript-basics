// const age = 26;
// console.log(age);


//another way
const age  = new Number(26.00000005);

//convert to string
console.log(age.toString);

//Number of digits after the decimal point
console.log(age.toFixed(2)); 

//Number of significant digits including whole part(before decimal). Must be in the range 1 - 21
console.log(age.toPrecision(2));

const hundreds = 10000000000;
//to show comma separated numbers, its type willbe string
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++Maths++++++++++++++++++
/* Math is js library, comes by default */
console.log(Math.PI);
// console.log(Math.sqrt);

console.log(Math.abs(-30));
console.log(Math.round(10.50));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.sqrt(4));
console.log(Math.pow(2,4));
console.log(Math.min(1,2,3,4,5,6,7));
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));


//random - always gives value >= 0 and less than 1
console.log(Math.random());

//value from 1 to 10
console.log(Math.floor(Math.random()*10) + 1);

//values between given range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);





