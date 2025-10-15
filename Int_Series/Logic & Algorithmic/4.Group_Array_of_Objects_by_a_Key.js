// Group Array of Objects by a Key

function groupBy(arr, key) {

    return arr.reduce((acc, obj) => {
        const value = obj[key];
        acc[value] = acc[value] || [];
        acc[value].push(obj);
        return acc;
    }, {});
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');


//Another way
function groupBy(arr, key) {
    const result = {};
    for (let ele of arr) {
        const val = ele[key];
        if (!result.hasOwnProperty(val)) {
            result[val] = [];
        } 
        result[val].push(ele);
    }
    return result;
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');
module.exports = groupBy;