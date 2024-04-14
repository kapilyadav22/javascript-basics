const name1 = "kapil"
const age = 26

console.log("My Name is " + name1 + " and age is " + age);

//Using String Interpolation
console.log(`My Name is ${name1} and age is ${age}`);

//another way to take string

const myName = new String('kapil');  //it will give you an object, with a lot of methods
//methods like endswith,
console.log(myName);

console.log(myName.length);
console.log((myName.toUpperCase()));
console.log(myName.charAt(3));
console.log(myName.indexOf('a'));
console.log(myName.substring(0,3)); //excluding 3

//trim() -> removes starting and end spaces
console.log(myName.trim());

//Replace() -> 
const url = 'www.kapilyadav.con/kapil%20yadav'
console.log(url.replace('%20','-'));

console.log(url.includes('kapil'));

const word = 'kapil-kumar-yadav'
console.log((word.split('-')));

