/*
The Object type represents one of JavaScript's data types. 
It is used to store various keyed collections and more complex entities. 
Objects can be created using the Object() constructor or the object initializer / literal syntax.
*/


const user = {
    name :"Kapil",
    age : '28'
}


console.log(user.name); //Kapil
user.name = "Rahul";
console.log(user.name); //Kapil
delete user.age; //age will be removed

