// src/linkedlist.js

import Node from "./node";



export default class LinkedList{
    constructor(){
        this.head = null;
    }


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


}










