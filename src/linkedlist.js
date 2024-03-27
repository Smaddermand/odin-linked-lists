// src/linkedlist.js

import Node from "./node";



export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; // When list is empty, head and tail are the same
            console.log(`Empty - this was added ${value}`);
        } else {
            this.tail.nextNode = newNode; // Append new node after the current tail
            this.tail = newNode; // Update the tail reference to the new node
            console.log(`This was added ${value}`);
        }
    }

    prepend(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;
    
        console.log(`prepend ${  value}`);
        }
    
    size(){
        let size = 0;
        let currentNode = this.head;
        while(currentNode !== null){
            size += 1;
            currentNode = currentNode.nextNode;
            }
        return size;

    }

    getHead(){
        const headNode = this.head;
        return headNode;
    }

    getTail(){
        const tailNode = this.tail;
        return tailNode;
    }
    
}



/* 

// Previous non-optimized append method that traverses the list...

append(value){
    if(this.head == null) {
        const newNode = new Node(value, null);
        this.head = newNode;
        console.log(`Empty - this was added ${  value}`);
    } else {
        let currentNode = this.head;
        while (currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value, null)
        console.log(`this was added ${  value}`);
    }
}

*/




