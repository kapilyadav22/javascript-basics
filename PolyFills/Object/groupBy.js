if (!Object.groupBy) {
    Object.groupBy = function (items, callback, thisArg) {
        if (items == null) {
            throw new TypeError("Object.groupBy called on null or undefined");
        }
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        let obj = {};
        let i = 0;
        for (let item of items) {
            let key = callback.call(thisArg, item, i++, items);
            key = String(key); // keys must be strings
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                obj[key] = [];
            }
            obj[key].push(item);
        }
        return obj;
    };
}

// examples
const nums = [6.1, 4.2, 6.3];

const grouped = Object.groupBy(nums, num => Math.floor(num));
console.log(grouped);
// { '4': [4.2], '6': [6.1, 6.3] }

const words = ["one", "two", "three", "four", "five", "six"];

const byLength = Object.groupBy(words, word => word.length);
console.log(byLength);
// { '3': ['one', 'two', 'six'], '4': ['four', 'five'], '5': ['three'] }



