//-----------------this-------------------
//this refers to current context
const user = {
    username : "kapil Yadav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //here this refers to user object
    }
}

user.welcomeMessage();
user.username = "Rj Raunak";
user.welcomeMessage();
//this here refers to empty object
console.log(this);



/*--------------------------------------*/

function kapil(){
    let username  = "kapil";
    console.log(this.username); //undefined
}

kapil();

//arrow function
const kapil2 = () => {
    let username  = "kapil";
    console.log(this.username); //undefined
}
kapil2();


const addTwoNumbers = (num1,num2) => {
    return num1 + num2;
}

/*
NOTE : If we use curly braces {}, then we need to write return keyword -> explicit return 
        If we are using parenthesis (), then no need to write return  -> implicit return
*/

//const addTwoNumbers = (num1,num2) => (num1 + num2);

console.log(addTwoNumbers(4,2));


 const userDetails = () => ({username: "kapil"});
 console.log(userDetails());