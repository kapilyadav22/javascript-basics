Currying is the process of transforming a function with multiple arguments into a sequence of functions
 with a single argument each.

 # Non-curried:
 function add(a, b) {
  return a + b;
}

add(2, 3); // 5

# Curried version:
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

curriedAdd(2)(3); // 5


🧠 Why Currying?
Reuse logic with partially applied arguments
Helps in function composition
Useful in frameworks like React, Redux, Lodash, etc.
Improves readability in functional programming


Why should currying be used?
Following are the reasons why currying is good :
✅ It makes a function pure which makes it expose to less errors and side effects.
✅ It helps in avoiding the same variable again and again.
✅ It is a checking method that checks if you have all the things before you proceed.
✅ It divides one function into multiple functions so that one handles one set of responsibility.


Article : https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more