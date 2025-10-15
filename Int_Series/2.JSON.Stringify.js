//Implementation JSON.stringify.

/*Few Rules of JSON.stringify

=>Rule 1 : Non-serializable values are skipped
const obj = {
  a: 1,
  b: undefined,
  c: function() {},
  d: Symbol("id"),
  e: [10, undefined, function() {}, Symbol()]
};

console.log(JSON.stringify(obj));

OUTPUT: 
{"a":1,"e":[10,null,null,null]}

=> Rule 2 : Date objects → ISO strings

const obj = { today: new Date("2025-10-13") };
console.log(JSON.stringify(obj));

OUTPUT:
{"today":"2025-10-13T00:00:00.000Z"}

=>Rule 3 :  NaN, Infinity, and -Infinity → null
=> Rule 4 — BigInt values ❌ not allowed
    JSON.stringify({ big: 10n }); // ❌ TypeError: Do not know how to serialize a BigInt

=>  Symbol keys are ignored


 Rule 5 — toJSON() method (if present) is called
Rule 6 — Circular references throw error
*/




function JSONStringify(value) {
    // Your implementation
    const seen = new Set();

    function stringify(val) {
        if (val === null) return "null";
        if (typeof val === "string") return `"${val}"`;
        if (typeof val === "number" || typeof val === "boolean") return String(val);
        if (typeof val === "function" || typeof val === "undefined") return undefined;

        if (Array.isArray(val)) {
            return `[${val.map((item) => {
                const str = stringify(item);
                return str === undefined ? "null" : str;
            }).join(",")}]`;
        }

        if (typeof val === "object") {
            if (seen.has(val)) throw new TypeError("Converting circular structure to JSON");
            seen.add(val);

            const props = Object.entries(val).map(([key, val]) => {
                const strVal = stringify(val);
                if (strVal === undefined) return undefined;
                return `"${key}":${strVal}`;
            }).filter(Boolean);

            seen.delete(val);
            return `{${props.join(",")}}`;
        }
        return undefined;
    }

    return stringify(value);
        
}

//For the purpose of user debugging.
JSONStringify("hello");
