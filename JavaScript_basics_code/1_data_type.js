//Primitive (Call By Value)

//7 Types : 
/* BBSSNNU
       Number   => number
       String   => string
       Boolean  => boolean
       null     => object
       undefined  =>  undefined
       Symbol   =>  symbol
       BigInt   =>  bigint
*/

//Reference Type (Non Primitive)
/*
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object
 */

//Is JavaScript a statically or a dynamically typed language?

//JavaScript is a dynamically typed language, but TypeScript is a statically typed language.
/*In dynamically typed languages all type checks are performed in a runtime, 
only when your program is executing. So this means you can just assign anything 
you want to the variable and it will work.
*/

//let name = "Kapil"
let age = 26
let marks = 9.02

const id = Symbol('123')
const secondId = Symbol('123');
console.log(id);
console.log(secondId);
console.log(id===secondId); //false

const bigNum = 123123213123123121221312312123123n;
console.log(typeof bigNum); //bigint (add n in suffix)


let arr = [1,2,3,'kapil']
console.log(arr);


//========================Stack and Heap Memory===========================

//Stack (Primitive)
//Heap (Non - Primitive)


let name1 = "kapil"
//creates a cope of name1 
let aliasName = name1

//changed done in aliasName not in name1
aliasName = "Rahul"

console.log(aliasName); //Rahul
console.log(name1); //kapil


//In Non Primitive, changes done in reference
//Object 

let myUser = {
    name:'kapil',
    email: 'singhkapil347@gmail.com'
}

let myUser2 = myUser
myUser2.name = 'Rahul'
console.log(myUser); //name changed in obj

