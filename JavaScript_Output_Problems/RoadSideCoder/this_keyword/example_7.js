//this inside class and constructor

class user {
    constructor(n,age){
        this.name = n;
        this.age = age;
    }
    getName() {
        console.log(this.name,this.age);
    }
}

const User = new user("Kapil",26);
User.getName();

/*
OUTPUT:
Kapil 26

Explaination: Inside of class, this points to all the variables 
inside the Constructor

TOPICS : class, constructor, this
*/