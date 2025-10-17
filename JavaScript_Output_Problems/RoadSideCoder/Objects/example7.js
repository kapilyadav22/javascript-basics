let user = {
  name: "Kapil",
  age: 24,
  fullName: {
    first: "Kapil",
    last: "Yadav",
  },
};
const name = "Kapil Yadav";

const {fullName: { first } } = user;
console.log(first);



