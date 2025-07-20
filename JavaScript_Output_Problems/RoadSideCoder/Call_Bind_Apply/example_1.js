let age = 10;

const person = {
    name : "Kapil",
    age  : 28,
    greet : function() {
        return "Name is : " + this.name + " age is : "  + this.age; 
    }
}

let res = person.greet();
console.log(res);


let res2  = person.greet.call(person);
console.log(res2);

const person2 = {name: "rahul", age : 10}
let res3 = person.greet.call(person2);
console.log(res3);



