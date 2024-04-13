//Date

let myDate = new Date()
console.log(myDate.toString());             //Fri Apr 12 2024 20:37:18 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());         //Fri Apr 12 2024
console.log(myDate.toLocaleDateString());   //4/12/2024

//Type of Date
console.log(typeof myDate); //object

//months start form 0 in js
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023


myCreatedDate = new Date(2023,0,23,3,2); 
console.log(myCreatedDate.toLocaleString()); //1/23/2023, 3:02:00 AM


myCreatedDate = new Date(2023,0,23,3,2); 
console.log(myCreatedDate.toLocaleTimeString()); //3:02:00 AM

console.log(myCreatedDate);
console.log(myCreatedDate.getMonth() + 1);

//start from monday
console.log(myCreatedDate.getDay());

//get year
console.log(myCreatedDate.getFullYear());

myCreatedDate = new Date("01-01-2024"); 
console.log(myCreatedDate.toLocaleString()); //3:02:00 AM


//custom date object
myCreatedDate.toLocaleString('default',{
    weekday: "long"
})



//TIMESTAMPS
let myTimeStamp = Date.now();

console.log(myTimeStamp); //1712935044541 in milliseconds

//extract time from date in milliseconds
console.log(myCreatedDate.getTime()); 


//convert time in hours,minutes and seconds
console.log(Math.floor(Date.now()/1000)); //in second


//convert time in hour, minutes and seconds
