class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        // Add element to the top
        this.items.push(element);
        return this.items.length;
    }
    
    pop() {
        // Remove and return top element
        if (this.isEmpty()) return undefined;
        return this.items.pop();
    }
    
    peek() {
        // Return top element without removing
        if (this.isEmpty()) return undefined;
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        // Check if stack is empty
        return this.items.length == 0;
    }
    
    size() {
        // Return number of elements
        return this.items.length;
    }
    
    clear() {
        // Remove all elements
        this.items = [];
    }
}

module.exports = Stack;