class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.top === null) return null;
        const first = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        first.next = null; // remove pointer from stored node
        this.length--; // decrement length

        return first; // return the node
    }

    // Node myNode = mySLL.pop();

    peek() {
        // does this exist?           else, return null
        return this.top ? this.top : null;
        //           if so, return this
        // or 
        // return this.top;
    }

    isEmpty() {
        return this.top === null;
        // or 

        // if (this.top === null) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    length() {
        return this.length;
    }
}

function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
}