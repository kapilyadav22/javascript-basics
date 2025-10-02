function myStringify(value) {
    if (value === null) return 'null';
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (typeof value === 'string') return `"${value}"`;

    if (Array.isArray(value)) {
        let res = value.map(item => myStringify(item) || 'null');
        return `[${res.join(',')}]`;
    }

    if (typeof value === 'object') {
        let res = [];
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                let val = myStringify(value[key]);
                if (val !== undefined) res.push(`"${key}":${val}`);
            }
        }
        return `{${res.join(',')}}`;
    }

    return undefined; 
}

// Example
const obj = { a: 1, b: "hello", c: true, d: [1, 2, 3] };
console.log(myStringify(obj));
// Output: {"a":1,"b":"hello","c":true,"d":[1,2,3]}

