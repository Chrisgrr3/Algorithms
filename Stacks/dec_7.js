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
        return this.head ? this.head : null;
        //           if so, return this
        // or 
        // return this.head;
    }

    isEmpty() {
        return this.head === null;
        // or 
        
        // if (this.head === null) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    length() {
        return this.length;
    }
}