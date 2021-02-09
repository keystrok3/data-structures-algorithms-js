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
            const recurse = function(node) {
                if(item < node.data) {
                    if(node.left === null) {
                        node.left = new TreeNode(item);
                    } else {
                        recurse(node.left);
                    }
                } else if(item > node.data) {
                    if(node.right === null) {
                        node.right = new TreeNode(item);
                    } else {
                        recurse(node.right);
                    }
                } else {
                    return;
                }
            };
            recurse(this.root);
        }
    }

    //left child - parent - right child
    inorder_walk() {
        let arr = [];
        const recurse = function(node) {
            if(node !== null) {
                recurse(node.left);
                arr.push(node.data);
                recurse(node.right);
            }
        };
        recurse(this.root);
        return arr;
    }

    //parent - left child - right child
    post_order_walk() {
        let arr = [];
        const recurse = function(node) {
            if(node !== null) {
                arr.push(node.data);
                recurse(node.left);
                recurse(node.right);
            }
        };
        recurse(this.root);
        return arr;
    }

    // left child - right child - parent
    pre_order_walk() {
        let arr = [];
        const recurse = function(node) {
            if(node !== null) {
                recurse(node.left);
                recurse(node.right);
                arr.push(node.data);
            }
        };
        recurse(this.root);
        return arr;
    }

    levelOrder() {
        let result = [];
        let q = []; //Queue
        if(this.root !== null) {
            q.push(this.root);  //Push root node into queue
            while(q.length > 0) {   //As long as the length of queue is greater than 0
                let node = q.shift();   //Remove the first element from the queue and put it in a variable
                result.push(node.data); //push the value of the variable into the results array
                if(node.left !== null) {    //Check if the left child of ^^ node is null
                    q.push(node.left);  //If not push into queue
                }
                if(node.right !== null) {  //Check if the right child of ^^ node is null 
                    q.push(node.right);    //If not push it into queue
                }
            }
            return result;  //return the results array
        } else {
            return null; //if root is null return null
        }
    }

    findMax() {
        let temp = this.root;
        while(temp.right !== null) {
            temp = temp.right;
        }
        return temp;
    }

    findNode(data) {
        let current = this.root;
        while(current.data !== data) {
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if(node === null) {
                return null;
            }
            if(data === node.data) {
                // Node has no children
                if(node.left == null && node.right == null) {
                    return null;
                }
                // Node has no left child
                if(node.left == null) {
                    return node.right;
                }
                // Node has no right child
                if(node.right == null) {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }


}

let bstree = new BST();

bstree.add(1);
bstree.add(0);
bstree.add(2);
bstree.add(4);
bstree.add(3);
bstree.add(5);
bstree.add(7);
bstree.add(6);
bstree.add(8);

console.log("In order: ", bstree.inorder_walk());
console.log("Post order: ", bstree.post_order_walk());
console.log("Pre order: ", bstree.pre_order_walk());
console.log("Level order: ", bstree.levelOrder());