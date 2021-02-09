"use strict";

// Node class
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(item) {
        if(this.root === null) {
            this.root = new TreeNode(item);
        } else {
            const addrecurse = function(node) {
                if(item < node.data) {
                    if(node.left === null) {
                        node.left = new TreeNode(item);
                    } else {
                        return addrecurse(node.left);
                    }
                } else if(item > node.data) {
                    if(node.right === null) {
                        node.right = new TreeNode(item);
                    } else {
                        return addrecurse(node.right);
                    }
                } else {
                    return;
                }
            };
            addrecurse(this.root);
        }
    }

    inorder_traversal() {
        let tree_items = [];
        const traverse = function(node) {
            if(node !== null) {
                traverse(node.left);
                tree_items.push(node.data);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return tree_items;
    }

    preorder_traversal() {
        let tree_items = [];
        const traverse = function(node) {
            if(node !== null) {
                tree_items.push(node.data);
                traverse(node.left);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return tree_items;
    }

    postorder_traversal() {
        let tree_items = [];
        const traverse = function(node) {
            if(node !== null) {
                traverse(node.left);
                traverse(node.right);
                tree_items.push(node.data);
            }
        };
        traverse(this.root);
        return tree_items;
    }

    // Smallest element = left-most
    min() {
        let temp = this.root;
        while(temp.left !== null) {
            temp = temp.left;
        }
        return temp.data;
    }

    // Largest element = right-most
    max() {
        let temp = this.root;
        while(temp.right !== null) {
            temp = temp.right;
        }
        return temp.data
    }

    findItem(item) {
        const find_recurse = function(node) {
            if(node === null) {
                return false;
            } else {
                if(node.data === item) {
                    return true;
                } else if(node.data < item) {
                    return find_recurse(node.right);
                } else if(node.data > item) {
                    return find_recurse(node.left);
                }
            }
        };
        return find_recurse(this.root);
    }
}


let bst = new BST();

bst.add(5);
bst.add(8);
bst.add(2);
bst.add(9);
bst.add(3);
bst.add(0);
bst.add(6);
bst.add(4);
bst.add(1);
bst.add(5);

console.log(bst.inorder_traversal());
console.log(bst.preorder_traversal());
console.log(bst.postorder_traversal());
console.log(bst.min());
console.log(bst.max());
console.log(bst.findItem(17));
