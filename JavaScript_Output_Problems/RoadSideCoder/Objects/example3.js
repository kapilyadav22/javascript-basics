let nums = { a: 100, b: 200, title: "My nums" };

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(nums);


console.log(...'Kapil'); // ['K','a','p','i','l']
