function mergeData(arr1, arr2) {
    const map = new Map();

    for (let item of arr1) {
        map.set(item.id, { ...item });
    }

    for (let item of arr2) {
        if (map.has(item.id)) {
            map.set(item.id, { ...map.get(item.id), ...item });
        } else {
            map.set(item.id, { ...item });
        }
    }

    return Array.from(map.values());
}


module.exports = mergeData