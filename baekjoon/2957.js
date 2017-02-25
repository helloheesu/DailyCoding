// a[key] = {hasLeft:false, hasRight:false}

var Solution = (function() {
	var tree = [];
	var treeLen;
	var result = 0;

	function reset() {
		tree = null;
		result = 0;
	}

	function getInput() {
		return parseInt(readline());
	}

	function output(value) {
		print(value);
	}

	function solve() {
		treeLen = this.getInput();
		tree = new Array(treeLen);
		var currentKey;

		for (var currentNodeNum = 0; currentNodeNum < treeLen; currentNodeNum++) {
			currentKey = this.getInput();
			result += getParentHeight(currentKey);
			insert(currentKey);
			this.print(result++);
		}
	}

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

	function insert(key, height) {
		tree[key] = {
			height: height,
			leftChildKey: undefined,
			rightChildKey: undefined
		};
	}

	return {
		"solve": solve,
		"getInput": getInput,
		"print": output,
		// for test
		"reset": reset,
		"tree": tree,
		"insert": insert
	};
})();
