//Implement a Priority queue from scratch

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(value, priority) {
        // Add element
        const newItem = { value, priority };
        let inserted = false;

        //lower number => higher priority
        //insertion based on Prioirity

        for (let i = 0; i < this.items.length; i++){
            if (priority < this.items[i].priority) {
                // At index i, remove 0 elements, and insert newItem there.
                //array.splice(start, deleteCount, item1, item2, ...);
                this.items.splice(i, 0, newItem);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            this.items.push(newItem);
        }


    }

    dequeue() {
        // Remove and return element with highest priority
        return this.isEmpty() ? null : this.items.shift().value;
    }

    peek() {
        // Return highest priority element
        return this.isEmpty() ? null : this.items[0].value;
    }

    isEmpty() {
        // Return boolean
        return this.items.length === 0;
    }

    size() {
        // Return number of items
        return this.items.length;
    }
}


