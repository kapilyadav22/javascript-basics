const user = {
  name: "Kapil",
  age: 28,

  sayHello: function () {
    console.log("Inside sayHello, this.name:", this.name);

    const arrow = () => {
      console.log("Inside arrow, this.name:", this.name);
    };
    
    const regular = function () {
        console.log("Inside regular, this.name:", this.name);
    };
    
    arrow();     // arrow uses `this` from sayHello
    // Since regular is called as a plain function, no object is the caller, so: In strict mode: this → undefined. In non-strict mode: this → window (or global object)
    regular();         
    regular.call(this); 
  }
};

const user2 = {
  name: "Ashish"
};

const bound = user.sayHello.bind(user2);
bound(); 

// Inside sayHello, this.name: Ashish
// Inside arrow, this.name: Ashish
// Inside regular, this.name: 
// Inside regular, this.name: Ashish


/*
const user = {
  name: "Kapil",
  greet: function () {
    console.log(this.name); // ✅ "Kapil"
  }
};

user.greet(); // ✅ this = user
*/

/*
DETACHING THE METHOD (Context lost)

const greetFn = user.greet; // now it's just a function reference
greetFn(); // ❌ this = undefined (strict mode) or window

*/


/*
To attach the context, pass the context in call, bind or apply
greetFn.call({ name: "Ashish" }); // ✅ Ashish
*/