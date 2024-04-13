function makeUser() {
    return {
        name: "kapil",
        age: 26,
        ref() {
            return this;
        },
    };
}

let user = makeUser();


console.log(user.ref().name);//nothing will print
console.log(user);

/*
OUTPUT:
kapil
{
    name: 'kapil',
    ref: [Function: ref]
}

Explaination: while calling ref(),its parent is makeUser,so ref 
will point to function makeUser and this will return object containing values from 
makeUser()


TOPICS :  this
*/