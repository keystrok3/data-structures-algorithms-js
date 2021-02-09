function Heap() {
    this.items = [];
}

Heap.prototype.swap = function(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.parentIndex = function(index) {
    return Math.floor((index - 1) / 2);
}

Heap.prototype.leftChildIndex = function(index) {
    return index * 2 + 1;
}

Heap.prototype.rightChildIndex = function(index) {
    return index * 2 + 2;
}

Heap.prototype.parent = function(index) {
    return this.items[this.parentIndex(index)];
}

Heap.prototype.leftChild = function(index) {
    return this.items[this.leftChildIndex(index)];
}

Heap.prototype.rightChild = function(index) {
    return this.items[this.rightChildIndex(index)];
}

Heap.prototype.peek = function(item) {
    return this.items[0];
}

Heap.prototype.size = function() {
    return this.items.length;
}

// Minheap
function MinHeap() {
    this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);  // inherit helpers from heap by copying prototype

MinHeap.prototype.bubbleDown = function() {
    let index = 0;
    while(this.leftChild(index) && this.leftChild(index) < this.items[index]) {
        let smallerIndex = this.leftChildIndex(index);
        if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            // If right is smaller, right swaps
            smallerIndex = this.rightChildIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function() {
    let index = this.items.length - 1;
    while(this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}


