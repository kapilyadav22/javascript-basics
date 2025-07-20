// Append an array to another array

const array = ["a","b"];
const elements = [0,1,2];

array.push.apply(array,elements);
console.log(array);


//Find Min or Max in an array
const numbers = [1,2,3,4,5];
console.log(Math.max(1,2,3,3,3,4,5,6));
console.log(Math.max(numbers)); //max doesnt work in the arrays
console.log(Math.max.apply(null,numbers));



//Bound Function
function f() {
    console.log(this);
}

let user = {
    g: f.bind(null),
};

user.g();

//user.g => f.bind(null) => we are passing null to current context, so 
//this in f() will take global context and print window object






