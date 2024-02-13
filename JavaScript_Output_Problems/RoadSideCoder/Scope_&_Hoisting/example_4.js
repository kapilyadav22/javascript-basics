//Shadowing

function test() {
    var a = "hello";

if (true) {
    let a = "Kapil";
    console.log(a);
}
    console.log(a);
}

test();

/*
OUTPUT:
Kapil
hello
*/