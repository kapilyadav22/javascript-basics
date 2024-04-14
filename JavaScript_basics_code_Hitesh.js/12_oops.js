//OOPS

//Javascript and Classes

/*
Q 1.) Does Javascript have classes?
Ans.) No, JS doesn't have classes. 
      JS is a prototype-based language.
      Its classes are primarily synatactic sugar over existing prototype-based inheritance mechanism.
*/

/*
OOPS - is a programming paradigm/style

OBJECT 
- collection of properties and methods

PARTS OF OOPS:
Object literal {}

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


FOUR PILLARS:
Abstraction
Encapsulation
Inheritance
Polymorphism

 */

const user = {
    username : 'kapil',
    loginCount:8,
    signedIn: true,

    getUserDetails: () =>{
        //this refers to current context
        console.log("Inside getDetails", this.username);
    }
}

console.log(user);

//constructor function
//new is a to create new context
// const promiseOne = new Promise()
// const date = new Date()




//creating constructor function
//constructor function will give us a new instance every time
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = () => console.log('hello jee');
    //implicitly return this, if not given
    return this;
}

const userOne = new User('hitesh',12, true);
const userTwo = new User('Kapil',26, false);

//userTwo will override the value of userOne
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); //[Function: User]

//instanceof




