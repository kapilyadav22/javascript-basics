//create deep copy

let user = {
name: "Roadside Coder", age: 24,
};

// const objclone = object.assign({}, user);
// const objclone = JSON. parse(JSON. stringify(user)) ;|
const objclone = {...user};
objclone.name = "kapil";
console.log(user, objclone);