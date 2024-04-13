const user = {
   firstName: "Kapil Yadav",

    getName() {
        const firstName = "Kapil";
        return this.firstName;
    },
}

console.log(user.getName());


/*
OUTPUT:
Kapil Yadav

Explaination: this refers to the user, so this.firstName will be point
to the firstName: "Kapil Yadav"

TOPICS :  this
*/