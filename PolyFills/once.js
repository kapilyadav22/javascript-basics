function once(func, context) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            try{
                result = func.apply(context || this, args);
                called = true; //marked called only on success
            }
            catch(err){
                    throw err;
            }
        }
        return result;
    };
}



const hello = once ((name)=>{
    console.log("Hello World : "+ name);
});

hello("Kapil");
hello();
hello();
hello();
hello();


const initialize = once(function(name) {
    console.log("Initializing for", name);
    return name + " initialized";
});

console.log(initialize("Kapil")); // Initializing for Kapil → returns "Kapil initialized"
console.log(initialize("Yadav")); // ❌ nothing runs, returns "Kapil initialized"


//This works exactly like _.once in Lodash.