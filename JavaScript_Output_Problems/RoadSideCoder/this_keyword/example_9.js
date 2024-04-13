function makeUser() {
    return {
        name: "kapil",
        ref: this,
    };
}

let user = makeUser();


console.log(user.ref.name);//nothing will print
console.log(user);

/*
OUTPUT:

{
    name: 'kapil',
    ref: global object/Window
}

Explaination: while calling makeUser,its parent is window object,so ref 
will point to global object.

To overcome this, see example_10

TOPICS :  this
*/