//Shadowing


var b =10;
function test() {
    let a = "hello";

if (true) {
    // var a = "Kapil";
    console.log(a);
}
    console.log(a);
}

test();

/*

SyntaxError: Identifier 'a' has already been declared
*/