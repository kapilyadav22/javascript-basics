console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
console.log("\n");

//different type values comparison
console.log("2">1);
console.log("02" >1);
console.log("\n");


//equality operators and comparison operators work differently in js
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log("\n");


console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log("\n");

//strict checking, checks values as well as type

console.log(1===1); //true
console.log(1==="1"); //false
console.log("\n");

console.log();
console.log();