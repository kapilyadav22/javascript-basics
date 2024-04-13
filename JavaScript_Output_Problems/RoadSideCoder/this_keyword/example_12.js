const user  = {
    name: "Kapil Yadav",
    logMessage() {
        console.log(this.name);
    },
};

setTimeout(function (){
    user.logMessage();
},1000);


/*
OUTPUT:
Kapil Yadav

Explaination: we are calling logMessage inside the function, so logMessage will
invoked as a method in user object.

TOPICS :  this
*/