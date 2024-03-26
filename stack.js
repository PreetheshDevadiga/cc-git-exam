//stack function implemeted here
/**
 * it will contain 4 function push pull peak display
 */
class Stack{
    constructor(){
        this.items=[];
    }
    /**
     * push function is used to add elemet to git
     * @param {number} element 
     */
    push(element) {
        this.items.push(element);
    }
    /**
     * Remove and return the top element of the stack
     * @returns number 
     */
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}