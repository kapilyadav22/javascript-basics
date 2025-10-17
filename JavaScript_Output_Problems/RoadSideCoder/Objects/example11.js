let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);

//[{ name: "Lydia" }]

person.name = null //now name will be null in person object