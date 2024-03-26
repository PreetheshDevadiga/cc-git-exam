/**
 * implemted queue data structure
 */
class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Return the first element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }

    // Print the queue elements
    print() {
        console.log(this.items.toString());
    }
}