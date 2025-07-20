//example of arrow function using parent funciton context

const user1 = {
  name: "Kapil",
  age: 28,
  
  // Regular method
  sayHello: function () {
    console.log("Inside sayHello, this.name:", this.name); // ✅ Kapil

    // Arrow function inside
    const arrow = () => {
      console.log("Inside arrow, this.name:", this.name); //    ✅ Kapil (from sayHello)
    };

    arrow();
  }
};

user1.sayHello();



const user2 = {
  name: "Kapil",
  age: 28,
  
  sayHello: function () {
    const regular = function () {
      console.log("Inside regular, this.name:", this.name); // ❌ undefined or global
    };

    regular();
  }
};

user2.sayHello();


