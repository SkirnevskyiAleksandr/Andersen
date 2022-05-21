'use strict'
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(elem) {
        const currentNode = new LinkedListNode(elem);

        if (!this.head || !this.tail) {
            this.head = currentNode;
            this.tail = currentNode;

            return this;
        }

        this.tail.next = currentNode;
        this.tail = currentNode;

        return this;
    }

    toArray() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode);
            currentNode = currentNode.next;
        }

        return arr;
    }

    prepend(elem) {
        const currentNode = new LinkedListNode(elem, this.head);

        this.head = currentNode;

        if (!this.tail) {
            this.tail = currentNode;
        }

        return this;
    }

    find(elem) {
        if (!this.head) {
            throw new Error(`list is empty`)
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === elem) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
    }

    static fromIterable(iterable) {
        if (!(Symbol.iterator in Object(iterable))) {
            throw new Error(` value is not iterable`)
        }

        let currentLinkedList = new LinkedList();

        for (let item of iterable) {
            currentLinkedList.append(item)
        }

        return currentLinkedList;
    }
}