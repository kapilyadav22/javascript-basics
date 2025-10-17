//IIFE

const func  = (function(a){
    delete a;
    return a;
})(5);

console.log(func);  //5
 

//delete cannot be use to delete local variables in methods, 
// it will be used to delete the properties from an object


