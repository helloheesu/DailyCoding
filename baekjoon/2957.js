// a[key] = {hasLeft:false, hasRight:false}

function Solution() {
	this.tree = [];
	this.treeLen;
	this.result = 0;
}

Solution.prototype.getInput = function() {
	return parseInt(readline());
};

Solution.prototype.print = function(value) {
	print(value);
};

Solution.prototype.insert = function(key, parentKey) {
	var height = 0;

	if (parentKey) {
		var parentNode = this.tree[parentKey];
		parentNode[(key>parentKey)?'rightChildKey':'leftChildKey'] = key;
		height = parentNode.height + 1;
	}

	this.tree[key] = {
		height: height,
		leftChildKey: undefined,
		rightChildKey: undefined
	};
};

Solution.prototype.solve = function() {
	this.treeLen = this.getInput();
	this.tree = new Array(treeLen);
	var currentKey;

	for (var currentNodeNum = 0; currentNodeNum < treeLen; currentNodeNum++) {
		currentKey = this.getInput();
		this.result += getParentHeight(currentKey);
		this.insert(currentKey);
		this.print(result++);
	}
};

	// function getParentHeight(key) {
	// 	var closestLeft;
	// 	var closestRight;
	// 	var shorterGap = (key < treeLen/2)? key: treeLen-key-1;
	// 	var i;

	// 	for (i = 1; i <= shorterGap; i++) {
	// 		closestLeft = tree[key - i];
	// 		closestRight = tree[key + i];
	// 		if (closestLeft || closestRight) {
	// 			break;
	// 		}
	// 	}
	// }
