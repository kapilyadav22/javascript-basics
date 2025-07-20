//Call Bind and Apply in JS

//call, apply, and bind are methods used to control the execution context (this value) of functions and to pass arguments. 

var obj = {name: "kapil"};

const sayHello = function (age)  {
    return "Hello " + this.name + " age:" + age;
}

// Purpose: Invokes a function immediately with a specified this value and individual arguments.
// Syntax: function.call(thisArg, arg1, arg2, ...)
console.log(sayHello.call(obj,28));




//APPLY
//Purpose: Invokes a function immediately with a specified this value and arguments provided as an array.
//Syntax: function.apply(thisArg, [argsArray])
// Behavior: Similar to call(), the first argument sets the this context. 
// The second argument is an array (or array-like object) containing all the arguments to be passed to the function.

console.log(sayHello.apply(obj,[28]));


//BIND
// Purpose: Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. 
// It does not invoke the original function immediately. 
// Syntax: function.bind(thisArg, arg1, arg2, ...)

const greet = sayHello.bind(obj,[28]);

console.log(greet());