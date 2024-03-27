// src/dom.js

// This file is for manipulating the DOM

import LinkedList from './linkedlist';


const newLinkedList = new LinkedList();

newLinkedList.append("I got here first")
newLinkedList.prepend("hello 3");
newLinkedList.prepend("now im first");
newLinkedList.append("I'm the last one now..")

console.log(newLinkedList.size());

console.log(newLinkedList.getHead());
console.log(newLinkedList.getTail());

// console.log(newLinkedList.head());
// console.log(newLinkedList.tail());







