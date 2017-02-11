function Node(value) {
    this.value = (typeof value === "undefined")? null : value;
    this.leftChild = null;
    this.rightChild = null;
}

function Tree() {
    this.root = null;
}

Tree.prototype.getPreordered = function() {
    var result = [];
    var root = this.root;

    if (root.leftChild) {
        result.push(root.leftChild.value);
    }

    result.push(root.value);

    if (root.rightChild) {
        result.push(root.rightChild.value);
    }

    return result;
};
