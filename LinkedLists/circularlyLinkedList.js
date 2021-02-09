class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.first = null;
    }

    addItem(item) {
        let node = new ListNode(item);  //New node with item
        node.next = this.head;  //Set new node's next value to the 'head' variable
        node.prev = this.first; //

        if(this.head !== null) {
            this.head.prev = node; //If head is not null set it's prev to node
        }

        this.head = node;   //Put the new node in the 'head' variable
        if(this.head.next === null) {
            this.first = this.head;
        }

        this.length += 1;   //increment the length of the list by 1
    }

    traverse() {
        let list_array = [];
        
    }
}

let llist = new List();

llist.addItem(5);
llist.addItem(8);
llist.addItem(2);
llist.addItem(7);
llist.addItem(0);
llist.addItem(3);
llist.addItem(6);
llist.addItem(1);
llist.addItem(4);
llist.addItem(9);

console.log(llist.traverse());