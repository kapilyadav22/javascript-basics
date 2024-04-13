const user  = {
    name: "Kapil Yadav",
    logMessage() {
        console.log(this.name);
    },
};

setTimeout(user.logMessage,1000);


/*
OUTPUT:
undefined

Explaination: setTimeout is using user.logMessage as a callback, rather than a method,
it will no longer has access of user object, thats why this will point to global object,
and global object/window object doesn't have logMessage

How to fix it, refer example_12
TOPICS :  this
*/