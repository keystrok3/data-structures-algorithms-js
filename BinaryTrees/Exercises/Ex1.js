"use strict"

/** Construct a tree from given preorder and inorder traversals
 *  Preorder: root - left - right
 *  Inorder: left - root - right
 *  
 *  Original: [ 5, 8, 2, 7, 0, 3, 6, 1, 4, 9 ]
 *  In order:  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 *  Post order:  [ 5, 2, 0, 1, 3, 4, 8, 7, 6, 9 ]
 *  Pre order:  [ 1, 0, 4, 3, 2, 6, 7, 9, 8, 5 ]
 */

const TreeNode = require('../binarySearchTree').TreeNode;
const BST = require('../binarySearchTree').BST;

// Function that traverses through a list of numbers and 
// builds a tree with the assumption that the list is actually
// the result of an inorder traversal of the original tree.
function buildFromInorder(bstree, list) {
    let leftStore, track = 0;
    for(let i = 0; i < list.length; i++) {
        switch(track) {
            case 0:
                leftStore = list[i];
                track += 1;
                break;
            case 1:
                bstree.add(list[i]);
                bstree.add(leftStore);
                track += 1;
                break;
            case 2: 
                bstree.add(list[i]);
                track = 0;
                break;
            default:
                break;
        }
    }
    return bstree;
}

let bst = new BST();

console.log(buildFromInorder(bst, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));