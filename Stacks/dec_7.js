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
        var first = this.top;
        this.top = this.top.next;
        first.next = null;
        this.length--;
        return first;
    }

    peek() {
        console.log(this.top.data);
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        } else {
            return false;
        }
    }

    length() {
        return this.length;
    }
}