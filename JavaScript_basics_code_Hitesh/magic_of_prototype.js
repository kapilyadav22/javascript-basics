//Array contains array prototype -> that prototype contains object prototype

//Array -> Object -> null
//Strings -> Object -> null

//functions
function multipleBy5(num){
    return num*5;
}

//In Js, everything is an object
multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

//
function createUser(username, age){
    this.username = username;
    this.age = age;
}

//add custom properties in our function
createUser.prototype.increament = () => {
    this.age++;
}

createUser.prototype.decreament = () => {
    this.age--;
}

createUser.prototype.printUserDetails = function() {
    console.log(`${this.username} age is ${this.age}`);
}

//create user
const userOne = new createUser('Kapil Yadav',26);
userOne.increament();
userOne.printUserDetails();


//Notes

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of
the constructor function. This mean that it has access to properties and methods defined on the constructor's 
prototype.

The constructor is called: The constructor function is called with the specified arguements and this
is bound to the newly created object, to be the intended return value.

The new object is returned : After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.


*/