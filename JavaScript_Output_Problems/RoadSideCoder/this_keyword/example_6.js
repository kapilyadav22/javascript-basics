
let user = {
    name: "kapil yadav",
    age: 24,
    getDetails() {
        const nestedArrow = () => {
            console.log(this.name);
        }
        nestedArrow();
    }
};

user.getDetails();

/*
OUTPUT:
kapil yadav,

Explaination: value of this will be user now, because it takes the value from its 
parent function which is getDetails(), the getDetails taking the value from user object

*/

