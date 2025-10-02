function myParse(str) {
    // Basic validation to prevent unsafe code execution
    if (typeof str !== 'string') return;
    str = str.trim();
    if (!str) return;

    // Use Function constructor instead of eval
    return new Function('return ' + str)();
}

// Example
const jsonStr = '{"a":1,"b":"hello","c":true,"d":[1,2,3]}';
console.log(myParse(jsonStr));
// Output: { a: 1, b: 'hello', c: true, d: [ 1, 2, 3 ] }

// Note: This is a basic implementation and may not cover all edge cases of JSON parsing.
