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
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        var first = this.top;
        this.top = this.top.next;
        return first;
    }
}