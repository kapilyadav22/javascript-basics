let value = 5
let negValue = -value

console.log(negValue); // -5
console.log(typeof negValue); //number

/*
console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(2/2);  //1
console.log(2**3); //8
console.log(2%2);  //0
*/

let str1 = "Hello ";
let str2 = "Kapil";

//concatenation
let str3 = str1 + str2 ;

console.log(str3); //Hello Kapil

//Type Coercion
let var1 = 1 + "2";
console.log(var1); //12
console.log(typeof var1); //string

let var2 = "1" + 2 
console.log(var2); //12   
console.log(typeof var2); //string


let var3 = "1" + 2 +2
console.log(var3); //122 -> if the first operand is string, 
// then it will convert rest operands in string and concatenate them

let var4 = 1 + 2 + "1"
console.log(var4); /*31 -> if string is at last, then it will first 
perform operations on the operands 1+2 = 3, and then concatenate
3 with 1
*/

let var5 = 1 + "2" + 1
console.log(var5); /*121 -> if string is in middle, then it will  
perform operations on the operands 1+"2" = "12" (type will be string), 
and then concatenate it with 1
*/

//string + number = string
//number + number = number
//number + string = string


