function deepCloneAdvanced(obj, hash = new WeakMap()) {
    // Handle null, undefined, primitives, and functions
    if (obj === null || typeof obj !== "object") return obj;
    if (typeof obj === "function") return obj;

    // Handle circular references
    if (hash.has(obj)) return hash.get(obj);

    // Handle Date
    if (obj instanceof Date) return new Date(obj);

    // Handle RegExp
    if (obj instanceof RegExp) return new RegExp(obj);

    // Handle Map
    if (obj instanceof Map) {
        const result = new Map();
        hash.set(obj, result);
        obj.forEach((value, key) => {
            result.set(deepCloneAdvanced(key, hash), deepCloneAdvanced(value, hash));
        });
        return result;
    }

    // Handle Set
    if (obj instanceof Set) {
        const result = new Set();
        hash.set(obj, result);
        obj.forEach(value => result.add(deepCloneAdvanced(value, hash)));
        return result;
    }

    // Handle Array or Object
    const result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result);

    for (let key of Object.keys(obj)) {
        result[key] = deepCloneAdvanced(obj[key], hash);
    }

    return result;
}



/*
Basic version without handling special objects or circular references:

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    const result = Array.isArray(obj) ? [] : {};

    for (let key of Object.keys(obj)) {
        result[key] = deepClone(obj[key]);
    }
    return result;
}
*/
