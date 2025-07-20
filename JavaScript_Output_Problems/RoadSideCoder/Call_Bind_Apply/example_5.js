//Bind Chaining 

function f() {
    console.log(this.name);
}

f = f.bind({name : "Kapil Yadav"}).bind({name: "Rahul"});

f();

//output : Kapil Yadav
//Bind Chaining doesn't work, once a function is bind to a particular object, it can not be change

