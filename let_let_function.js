let a = 10; //script
function b() {   
    let a = 100;
    console.log(a); //local a = 100
}
b();
console.log(a); //a = 10

//in function, everthing inside function is store under local scope 
//and outside function, if let and const in script scope, var in global scope