"use strict"

class Heap {
    constructor() {
        this.items = [];
    }

    swap(index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return Math.floor((index * 2) + 1);
    }

    rightChildIndex(index) {
        return Math.floor((index * 2) + 2);
    }

    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }
    
    peek() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }
}

class MinHeap extends Heap{
    constructor() {
        super(Heap);
    }

    add(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    // Swap the first element (root) of the tree with the last element (right-most, lowest level)
    // remove the last element, and readjust the tree to obey the heap property (bubble down)
    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }


    bubbleUp() {
        let index = this.items.length - 1;
        //check that current has a parent and the parent has a value greater than the node
        while(this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.parentIndex(index), index);  //If true swap the 2 node
            index = this.parentIndex(index);    //and set the current nodes parent to be the current node
        }
    }

    bubbleDown() {
        let index = 0;
        //Check that the left child exists and that either the left or the right child is smaller that current node
        while(this.leftChild(index) && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
            let smallerIndex = this.leftChildIndex(index);  //If true set the position of the left child to a variable

            //check that the right child exists and has a value less than the value of the left child
            //Goal: smallIndex will store position of left / right child whichever is smaller 
            if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
                smallerIndex = this.rightChildIndex(index); //if true set the position of right child to the variable smallIndex
            }
            this.swap(smallerIndex, index); //swap the value current node(parent) with the least of the children
            index = smallerIndex;   //make the current (swapped) node the new current node
        }
    }
}

class MaxHeap extends Heap {
    constructor() {
        super(Heap);
    }

    add(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }

    bubbleUp() {
        let index = this.items.length - 1;
        // Check that the current node has a parent node and the parent node has a value less than the current node
        while(this.parent(index) && this.parent(index) < this.items[index]) {
            this.swap(this.parentIndex(index), index);  //If true swap the two values
            index = this.parentIndex(index);    //set the current node to the parent
        }
    }

    bubbleDown() {
        let index = 0;
        //Check that the left child exists and that either the left or the right child is bigger that current (parent) node
        while(this.leftChild(index) && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])) {
            let biggerIndex = this.leftChildIndex(index);   //If true set the left child to the variable for the bigger child

            //and check if the right child is indeed bigger
            if(this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]) {
                biggerIndex = this.rightChildIndex(index);  //if it is put the right child in biggerIndex
            }
            this.swap(biggerIndex, index);  //swap current node with the child with the 'biggerIndex'
            index = biggerIndex;    //swap that child the current node
        }
    }
}
let mh1 = new MinHeap();

mh1.add(5);
mh1.add(3);
mh1.add(0);
mh1.add(4);
mh1.add(1);
mh1.add(6);
mh1.add(8);
mh1.add(2);
mh1.add(9);

let mh2 = new MaxHeap();

mh2.add(5);
mh2.add(1);
mh2.add(3);
mh2.add(7);
mh2.add(0);
mh2.add(2);
mh2.add(9);
mh2.add(4);
mh2.add(6);
mh2.add(8);

console.log(mh1.items);
while(mh1.items.length !== 0) {
    console.log(mh1.poll());
}