let age = 26

console.log(age);           //26
console.log(typeof age);    //number
console.log(typeof(age)+"\n");   //number


age = "26"

console.log(age);           //26
console.log(typeof age);    //string
let valueInNumber = Number(age);
console.log(valueInNumber); //26
console.log(typeof(valueInNumber)+"\n"); //number

/*If you tried to pass in a value that cannot be converted into a number,
 then the return value would be NaN (Not a Number). */

age = "26abc"
valueInNumber = Number(age);
console.log(valueInNumber); //NaN
console.log(typeof(valueInNumber)+"\n"); //number

age = null
console.log(typeof age);    //object
valueInNumber = Number(age);  
console.log(valueInNumber); //0
console.log(typeof(valueInNumber)+"\n"); //number



//"26" => 26
//"26abc" => NaN
//false => 0, true => 1


