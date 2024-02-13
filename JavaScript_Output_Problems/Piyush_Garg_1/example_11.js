const kapil = {
    name: "kapil Yadav",
    sayName: function() {
        console.log(this.name);
    },
};

const John = {
    name: "John Doe",
    sayName: function(){
        console.log(this.name);
    },
};

function sayName(){
    console.log(this.name);
};

John.sayName();
John.sayName.call(kapil);
sayName.call(kapil);

/*
OUTPUT:
John Doe
kapil Yadav
kapil Yadav

.call(context) => will pass the context and sayName in John will have kapil context,\
so kapil.name will be print
*/