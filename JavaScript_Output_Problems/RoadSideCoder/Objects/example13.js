function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}
const personobj1 = {
    name: "Alex",
    age: 30,
  };

const personobj2 = changeAgeAndReference(personobj1);
console.log(personobj1); 

//  {
//     name: "Alex",
//     age:  25,
//   };

console.log(personobj2);

// {
//     name: "John",
//     age: 50,
//   };
