'use strict'

// first task

// generic
class Node {
    constructor(data) {
        this.data = data;
        this.prevNode = null;
    }
}

class Stack {
    constructor(length = 10) {
        if (!Number.isFinite(length)) {
            throw new Error(`you should enter valid number!`);
        }

        this.length = length;
        this.currentSize = null;
        this.last = null;
    }

    push(value) {
        if (this.currentSize === this.length) {
            throw new Error(`Stack is overwhelmed`);
        }

        const currentNode = new Node(value);

        if (!this.last) {
            this.last = currentNode;
            this.currentSize++;
        } else {
            currentNode.prevNode = this.last;
            this.last = currentNode;
            this.currentSize++;
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error(`Stack is empty`);
        }

        const temp = this.last;

        this.last = this.last.prevNode;
        this.currentSize--;

        return temp.data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.last.data;
    }

    isEmpty() {
        return this.currentSize === 0;
    }

    toArray() {
        const arr = [];
        let temp = this.last;

        while (temp) {
            arr.unshift(temp.data);
            temp = temp.prevNode;
        }

        return arr;
    }

    static fromIterable(iterable) {
        if (!(Symbol.iterator in Object(iterable))) {
            throw new Error(` value is not iterable`)
        }

        const newStack = new Stack(iterable.length);

        for (let item of iterable) {
            newStack.push(item)
        }

        return newStack;
    }
}

module.exports = { Stack };
