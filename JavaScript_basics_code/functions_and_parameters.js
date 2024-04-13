
function myName() {
    console.log("Kapil Yadav");
}

//myName -> reference
//myName() -> execution

myName();

//parameters -> values in function definition

/*
function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

//arguments -> values passed in function call
// addTwoNumbers(4,5);
// addTwoNumbers(4,'kapil');

const result = addTwoNumbers(4,5);
console.log("Result is :", result); //undefined

*/

// function addTwoNumbers(num1, num2){
//    let result = num1+num2;
//     return result;
// }


function addTwoNumbers(num1, num2){
    return num1+num2;
 }

const result1 = addTwoNumbers(4,5);
console.log("Result is :", result1); //9


function loginUserMessage(username = 'kapil'){
    //pass default value, if not passed 
    if(!username){
        console.log('Please Enter a Valid Username');
        return ;
    }
    return `Hi ${username} !!!`
}

const name = loginUserMessage();
console.log(name);