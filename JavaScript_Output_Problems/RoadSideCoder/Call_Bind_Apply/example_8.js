const age = 28;

var person = {
    name : "kapil",
    age : 27,
    getAgeArrow: () => console.log(this.age),
    getAge: function(){
        console.log(this.age);
    },
};

var person2 = {age : 24};

person.getAgeArrow.call(person2); // undefined 
person.getAge.call(person2);  //24 

//Arrow functions don’t have their own this — they inherit it from the lexical scope (i.e., where the function is defined).
// In non-strict mode, this refers to window, so this.age → undefined or 28 if age was set globally.
// In strict mode, this in global scope is undefined.


// .call(person2) has NO effect, because arrow functions ignore .call(), .apply(), and .bind() when it comes to this.

