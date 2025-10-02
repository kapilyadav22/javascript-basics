function deepCloneIterativeAdvanced(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (typeof obj === "function") return obj;

    const root = Array.isArray(obj) ? [] : {};
    const stack = [{ parent: root, key: undefined, data: obj }];
    const map = new WeakMap(); // handle circular references
    map.set(obj, root);

    while (stack.length) {
        const { parent, key, data } = stack.pop();
        const target = key !== undefined ? parent[key] = Array.isArray(data) ? [] : {} : parent;

        // Handle Map
        if (data instanceof Map) {
            const result = new Map();
            map.set(data, result);
            data.forEach((v, k) => {
                const clonedKey = typeof k === "object" && k !== null ? map.get(k) || {} : k;
                const clonedValue = typeof v === "object" && v !== null ? map.get(v) || {} : v;
                result.set(clonedKey, clonedValue);
                if (typeof k === "object" && k !== null && !map.has(k)) stack.push({ parent: result, key: k, data: k });
                if (typeof v === "object" && v !== null && !map.has(v)) stack.push({ parent: result, key: v, data: v });
            });
            map.set(data, result);
            if (key !== undefined) parent[key] = result;
            continue;
        }

        // Handle Set
        if (data instanceof Set) {
            const result = new Set();
            map.set(data, result);
            data.forEach(v => {
                if (v && typeof v === "object") {
                    const cloned = map.get(v) || {};
                    result.add(cloned);
                    if (!map.has(v)) stack.push({ parent: result, key: v, data: v });
                } else {
                    result.add(v);
                }
            });
            if (key !== undefined) parent[key] = result;
            continue;
        }

        // Handle Date
        if (data instanceof Date) {
            parent[key] = new Date(data);
            continue;
        }

        // Handle RegExp
        if (data instanceof RegExp) {
            parent[key] = new RegExp(data);
            continue;
        }

        // Iterate own properties
        for (let k of Object.keys(data)) {
            const value = data[k];
            if (value && typeof value === "object") {
                if (map.has(value)) {
                    target[k] = map.get(value);
                } else {
                    const clone = Array.isArray(value) ? [] : {};
                    target[k] = clone;
                    map.set(value, clone);
                    stack.push({ parent: target, key: k, data: value });
                }
            } else {
                target[k] = value;
            }
        }
    }

    return root;
}
