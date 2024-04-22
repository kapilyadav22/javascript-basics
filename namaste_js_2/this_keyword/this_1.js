/*
Cases:
1. this in global space
2. this inside a function
3. this in strict mode - (this substitution)
4. this value depends on how this is called (window)
5. this inside a object's method
6. call apply bind methods (sharing methods)
7. this inside arrow function
8. this inside nested arrow function
9. this inside DOM
*/

//this in global space, will refer to global object, in browser it is windows, in node it is {} (global)

//to go into strict mode

//Case 1
"user strict";
console.log(this);

//Case 2 and 3
function x(){
    //the value depends on strict and non-strict mode
    //the value will be window in case of non-strict mode, and undefined in case of strict mode in browser
    console.log(this);
}

x(); //undefined in strict mode

/* ============== this in strict mode - (this substitution) ===========================
If the value of this keyword is undefined or null, this keyword will replaced with globalObject, 
only incase of non-strict mode
*/


//Case 4 
// this keyword value also depends on how the function is called - runtime binding
//window.x(); //window object



/*
Difference bw function and method
If we make the function as a part of an Object, then it is called method
*/

//Case 5
const student = {
    name: "Kapil",
    printName: function() {
        //this refers to current context , here it is obj
        console.log(this.name);
    }
}

student.printName();

//Case 6 : call apply and bind methods(sharing methods)
//all these methods are used to set the value of this inside it
const student2 = {
    name: "Deepika"
}

student.printName.call(student2);

//Case 7: this inside arrow function
//arrow function doesnt have their own this binding, they take value from their enclosing lexical context


const obj = {
    name: "Kapil",
    printName: () => {
        //this refers to lexical context where obj is present , here it is global space
        // so this refers to global object
        console.log(this);
    }
}


//Case 8: this inside nested arrow function

const obj2 = {
    a:10,
    x: function () {
        const y = () => {
             console.log(this);
        }
        y();
    }
};

obj2.x(); // this refers to obj2


//this inside DOM elements => reference to the HTML Elements







