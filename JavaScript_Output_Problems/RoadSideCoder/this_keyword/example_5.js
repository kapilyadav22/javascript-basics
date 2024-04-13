
let user = {
    name: "kapil yadav",
    age: 24,
    getDetails: () => {
            console.log(this.name);
        }
};
 
user.getDetails();

/*
will print nothing, this is not pointing to user object, 
this is pointing to global object/window object.

Arrow function works in such a way that, the value of 
this comes from its parent function.

See Example - 6
*/

