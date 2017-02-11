function Node(value) {
    this.value = (typeof value === "undefined")? null : value;
    this.leftChild = null;
    this.rightChild = null;
}

function Tree(root) {
    this.root = root || new Node();
}

Tree.prototype.getPreordered = function() {
    var root = this.root;


    if (root.value === null) {
        return [];
    }


    var leftResult = [];
    if (root.leftChild) {
        leftResult = new Tree(root.leftChild).getPreordered()
    }

    var rightResult = [];
    if (root.rightChild) {
        rightResult = new Tree(root.rightChild).getPreordered()
    }


    return [].concat(root.value, leftResult, rightResult);
};
