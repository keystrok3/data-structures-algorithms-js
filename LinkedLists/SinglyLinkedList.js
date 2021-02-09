"use strict"

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.length = -1;   //initialized at -1 so as not to count the null object
    }

    //Add items to front of list
    addItem(item) {
        let node = new ListNode(item);
        node.next = this.head;
        this.head = node;
        this.length += 1;
    }

    check_for_item(item) {
        let temp = this.head;
        while(temp.data !== item && temp.next !== null) {
            temp = temp.next;
        }
        return temp.data === item;
    }

    find_item(item) {
        let temp = this.head;
        while(temp.data !== item && temp.next !== null) {
            temp = temp.next;
        }
        return temp;
    }

    findNodeByIndex(index) {
        if(index > this.length) {
            console.error('Invalid position');
            return;
        }
        let temp = this.head;
        let temp_index = 0;
        // Loop runs through list till the value of temp_index is 
        // equal to the requested index value
        while(temp_index < index) {
            temp = temp.next;
            temp_index += 1;
        }
        return temp;
    }

    insert(item, index) {
        if(index > this.length) {
            console.error('Invalid position');
            return;
        }
        let temp = this.findNodeByIndex(index);
        let newNode = new ListNode(temp.data);  //Create new Node, with current node's data
        newNode.next = temp.next;   //Set new node to point to current node's next
        temp.data = item;   //set current node's data to new data
        temp.next = newNode;    //set current node's next to new node
    }

    delete(item) {
        if(this.check_for_item(item) === false) {
            console.error(`${item} not in list`);
            return;
        }
        let temp = this.head;
        while(temp.next.data !== item) {    //Finds the node just before the node to be deleted
            temp = temp.next;
        }
        //Sets current node to node after the node to be deleted
        let delnode = temp.next;   
        temp.next = delnode.next;
        delnode.next = null;
    }

    traverse() {
        let list_array = [];
        let temp = this.head;
        while(temp.next !== null) {
            list_array.push(temp.data);
            temp = temp.next;
        }
        return list_array;
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

llist.insert(20, 6);

console.log(llist.traverse());
llist.delete(20);
console.log(llist.traverse());
console.log(llist.length);
