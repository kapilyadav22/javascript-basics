// Simple LRU Cache

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val); // refresh order
    return val;
  }

  put(key, val) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size >= this.capacity) {
      const oldestKey = this.map.keys().next().value;
      this.map.delete(oldestKey);
    }
    this.map.set(key, val);
  }
}

//Example
const cache = new LRUCache(2);
cache.put('a', 1);
cache.put('b', 2);
cache.get('a'); // refresh 'a'
cache.put('c', 3); // removes 'b'
console.log([...cache.map.entries()]); // [['a',1], ['c',3]]
