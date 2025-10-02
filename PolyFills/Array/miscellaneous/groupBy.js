if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function (callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        let result = {};
        for (let i = 0; i < this.length; i++) {
            let key = callback.call(thisArg, this[i], i, this);
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(this[i]);
        }
        return result;
    };
}


const nums = [6.1, 4.2, 6.3];

const grouped = nums.groupBy(num => Math.floor(num));
console.log(grouped);
// { '4': [4.2], '6': [6.1, 6.3] }

const words = ["one", "two", "three", "four", "five", "six"];

const byLength = words.groupBy(word => word.length);
console.log(byLength);
// { '3': [ 'one', 'two', 'six' ], '4': [ 'four', 'five' ], '5': [ 'three' ] }

const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 }
];

const grouped = Object.groupBy(users, user => user.age);
console.log(grouped);
// {
//   '21': [ { name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 } ],
//   '25': [ { name: 'Bob', age: 25 } ]
// }



/*
Difference between Object.groupBy() and Map.groupBy():
Object.groupBy() → returns a plain object with string keys.
Map.groupBy() → returns a Map that can have keys of any type.
*/