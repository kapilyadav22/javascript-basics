// sum(2)(6)(1)

function fun(a) {
  return function fun2(b) {
    return function fun3(c) {
      return a + b + c;
    };
  };
}

let sum = fun(1)(2)(3);
console.log(sum);

function fun2(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

let sum2 = fun2(1)(2)(3);
console.log(sum2);
