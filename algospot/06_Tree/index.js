function Node(value) {
    this.value = (typeof value === "undefined")? null : value;
    this.leftChild = null;
    this.rightChild = null;
}

function Tree() {
    this.root = null;
}

// function toPostorder(preorder, inorder) {
//     // body...
// }