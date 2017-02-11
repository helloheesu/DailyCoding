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

    var result = [];

    result.push(root.value);

    if (root.leftChild) {
        result.push(root.leftChild.value);
    }

    if (root.rightChild) {
        result.push(root.rightChild.value);
    }

    return result;
};
