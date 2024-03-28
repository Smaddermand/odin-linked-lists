// src/dom.js

// This file is for manipulating the DOM

import LinkedList from './linkedlist';


const newLinkedList = new LinkedList();

newLinkedList.append("I got here first")
newLinkedList.append("I got here first 1")
newLinkedList.append(43)
newLinkedList.append("I got here first 3")
newLinkedList.append("I got here first 4")
newLinkedList.append("I got here first 5")


console.log(newLinkedList.size());

console.log(newLinkedList.getHead());
console.log(newLinkedList.getTail());

console.log(newLinkedList.at(0));


console.log(newLinkedList.contains(43));

console.log(newLinkedList.find("I got here first2"));

console.log(newLinkedList.toString());

// console.log(newLinkedList.head());
// console.log(newLinkedList.tail());







